import { mkdir, readFile, rename, rm, writeFile } from 'node:fs/promises';
import { randomUUID } from 'node:crypto';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const feedPath = join(root, 'peter-lives.json');
const origin = 'https://www.thbk.me';
const collections = new Map([
    ['2F4HwlSvjf6', 'reading'],
    ['2F4IvQezxrs', 'gaming'],
    ['2F4dU0yCJn6', 'listening'],
    ['2F4IwszLJQe', 'making'],
]);
const postPath = /^\/@peter-builds\/collections\/([A-Za-z0-9]+)$/;
const postIdPattern = /^[A-Za-z0-9]+$/;
const agent = 'PeterBuildsThingsBookSync/1.0 (+https://peter-builds.com/contact.html)';

async function request(url) {
    const response = await fetch(url, {
        redirect: 'error',
        signal: AbortSignal.timeout(15000),
        headers: { 'User-Agent': agent },
    });
    if (!response.ok) throw new Error(`HTTP ${response.status} from ${url}`);
    return response;
}

async function publicPage(url) {
    const response = await request(url);
    const html = await response.text();
    const json = /<script\b[^>]*\bid="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/i.exec(html)?.[1];
    const queries = json && JSON.parse(json).props?.pageProps?.dehydratedState?.queries;
    if (!Array.isArray(queries)) throw new Error(`Missing public collection data at ${url}`);
    return queries;
}

function query(queries, key, field, id) {
    return queries.find(item => item.queryKey?.[0] === key && item.queryKey?.[1]?.[field] === id)?.state?.data;
}

function collectionUrl(id) {
    return new URL(`/@peter-builds/collections/${id}`, origin);
}

function sourceUrl(collection, post) {
    const url = collectionUrl(collection);
    url.searchParams.set('postId', post);
    return url;
}

function validatePost(post, collection, id) {
    if (!post || post.id !== id || !postIdPattern.test(id) || post.collection?.id !== collection ||
        post.author?.displayId !== 'peter-builds' || post.postVisibility !== 'PUBLIC' ||
        typeof post.title !== 'string' || !post.title.trim() || !Number.isFinite(Date.parse(post.createdAt))) {
        throw new Error(`Invalid or non-public post at ${sourceUrl(collection, id)}`);
    }
}

async function readCollection(id) {
    const url = collectionUrl(id);
    for (const view of [null, 'PORTRAIT_GRID']) {
        if (view) url.searchParams.set('listViewType', view);
        const queries = await publicPage(url);
        const collection = query(queries, 'collection', 'collectionId', id);
        const pages = query(queries, 'postsByCollection', 'collectionId', id)?.pages;
        if (collection?.owner?.displayId !== 'peter-builds' ||
            !Array.isArray(pages) || !pages.length || pages.some(page => !Array.isArray(page.data))) {
            throw new Error(`Could not verify the collection at ${url}`);
        }
        const posts = pages.flatMap(page => page.data);
        if (pages[0].pageInfo?.previousCursor === null && pages.at(-1).pageInfo?.nextCursor === null &&
            pages[0].pageInfo?.total === posts.length && collection.postCount === posts.length &&
            new Set(posts.map(post => post?.id)).size === posts.length) {
            for (const post of posts) validatePost(post, id, post?.id);
            return posts.map(post => ({ collection: id, post }));
        }
    }
    throw new Error(`Incomplete ${collections.get(id)} collection. Pass the public URLs of the new posts to import that batch.`);
}

async function readPost(collection, id) {
    const url = sourceUrl(collection, id);
    const post = query(await publicPage(url), 'postDetail', 'postId', id);
    validatePost(post, collection, id);
    if (!Array.isArray(post.components)) throw new Error(`Missing post text at ${url}`);
    return post;
}

function parseLink(value) {
    const url = new URL(value);
    const collection = postPath.exec(decodeURIComponent(url.pathname))?.[1];
    const id = url.searchParams.get('postId');
    if (!['https://www.thbk.me', 'https://www.thingsbook.me'].includes(url.origin) ||
        !collections.has(collection) || !id || !postIdPattern.test(id)) {
        throw new Error(`Expected a public Peter Builds collection post URL: ${value}`);
    }
    return { collection, id };
}

async function coverFor(post, previous, write) {
    if (previous?.image) return previous.image;
    const address = post.material?.imageUrl;
    if (!address) return null;
    const url = new URL(address);
    if (url.protocol !== 'https:' || !['g-article.pstatic.net', 'i.scdn.co'].includes(url.hostname)) return null;
    if (!write) return null;
    if (url.hostname === 'g-article.pstatic.net') url.searchParams.set('type', 'resize200@2x');

    let image;
    try {
        image = Buffer.from(await (await request(url)).arrayBuffer());
        if (image[0] !== 255 || image[1] !== 216) throw new Error('Expected a JPEG');
    } catch (error) {
        console.warn(`Cover unavailable for ${post.title}: ${error.message}`);
        return null;
    }
    const imagePath = `assets/peter-lives/${post.id}.jpg`;
    await mkdir(join(root, 'assets/peter-lives'), { recursive: true });
    await writeFile(join(root, imagePath), image);
    return imagePath;
}

async function main() {
    const args = process.argv.slice(2);
    const write = args.includes('--write');
    const links = args.filter(arg => arg !== '--write').map(parseLink);
    const original = await readFile(feedPath, 'utf8');
    const feed = JSON.parse(original);
    if (feed.version !== 1 || !Array.isArray(feed.entries)) throw new Error('Invalid local feed');
    const previous = new Map(feed.entries.map(entry => [entry.id, entry]));
    const records = [];
    if (links.length) {
        for (const { collection, id } of links) {
            records.push({ collection, post: await readPost(collection, id) });
        }
    } else {
        for (const collection of collections.keys()) records.push(...await readCollection(collection));
    }

    const pulled = new Map();
    for (const { collection, post } of records) {
        if (pulled.has(post.id)) continue;
        const prior = previous.get(post.id);
        const detail = post.components ? post : (!prior || prior.description || post.preview)
            ? await readPost(collection, post.id) : null;
        const description = detail?.components.filter(component => component.type === 'TEXT')
            .map(component => component.text).join('\n\n') ?? '';
        const credit = post.material?.metadata?.artistNames?.join(', ');
        const entry = {
            id: post.id,
            title: post.title.trim(),
            category: collections.get(collection),
            date: post.createdAt,
            description,
            image: prior?.image ?? null,
            url: sourceUrl(collection, post.id).href,
            ...(credit && { credit }),
        };
        pulled.set(post.id, { entry, post });
    }

    const entries = links.length ? new Map(previous) : new Map();
    for (const { entry, post } of pulled.values()) {
        entry.image = await coverFor(post, previous.get(entry.id), write);
        entries.set(entry.id, entry);
    }
    const sorted = [...entries.values()].sort((a, b) => Date.parse(b.date) - Date.parse(a.date) || a.id.localeCompare(b.id));
    const changed = sorted.filter(entry => {
        const prior = previous.get(entry.id);
        return prior && Object.keys({ ...prior, ...entry }).some(key => entry[key] !== prior[key]);
    });
    const added = sorted.filter(entry => !previous.has(entry.id));
    const removed = [...previous.keys()].filter(id => !entries.has(id));
    console.log(`${added.length} new, ${changed.length} updated, ${removed.length} removed. ${sorted.length} posts total.`);
    for (const entry of added) console.log(`+ [${entry.category}] ${entry.title}`);
    if (!write || !(added.length || changed.length || removed.length)) return;

    const temporary = `${feedPath}.${randomUUID()}.tmp`;
    try {
        await writeFile(temporary, JSON.stringify({ ...feed, updatedAt: new Date().toISOString(), entries: sorted }, null, 2) + '\n');
        if (await readFile(feedPath, 'utf8') !== original) throw new Error('The local feed changed during import. Run the import again.');
        await rename(temporary, feedPath);
    } finally {
        await rm(temporary, { force: true });
    }
}

main().catch(error => {
    console.error(`ThingsBook import stopped: ${error.message}`);
    process.exitCode = 1;
});
