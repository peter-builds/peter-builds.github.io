'use strict';

const filters = document.querySelector('.lives-filters');
const buttons = [...filters.querySelectorAll('button')];
const status = document.querySelector('.lives-status');
const grid = document.querySelector('.lives-grid');
const categories = new Map(buttons.slice(1).map(button => [button.dataset.category, button.textContent]));
const dateFormat = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeZone: 'America/New_York',
});

function makeElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
}

function makeCard(entry) {
    const card = makeElement('article', 'lives-card');
    const body = makeElement('div', 'lives-card-body');
    const meta = makeElement('p', 'lives-label lives-card-meta', categories.get(entry.category));
    if (entry.date && Number.isFinite(Date.parse(entry.date))) {
        const time = makeElement('time', '', dateFormat.format(new Date(entry.date)));
        time.dateTime = entry.date;
        meta.append(time);
    }

    const title = makeElement('h3');
    const source = makeElement('a', '', entry.title);
    source.href = entry.url;
    title.append(source);
    body.append(meta, title);
    if (entry.credit) body.append(makeElement('p', 'lives-credit', entry.credit));
    if (entry.description) body.append(makeElement('p', 'lives-description', entry.description));

    if (typeof entry.image === 'string' && /^assets\/[\w/-]+\.(?:avif|gif|jpe?g|png|webp)$/i.test(entry.image)) {
        const frame = makeElement('div', 'lives-art');
        const image = makeElement('img');
        image.alt = '';
        image.loading = 'lazy';
        image.decoding = 'async';
        image.addEventListener('error', () => frame.remove(), { once: true });
        image.src = entry.image;
        frame.append(image);
        card.append(frame);
    }
    card.append(body);
    return card;
}

function showStatus(message, visible = true) {
    status.textContent = message;
    status.classList.toggle('sr-only', !visible);
}

async function loadPosts() {
    showStatus('Loading posts…');
    let cards;
    try {
        const response = await fetch('peter-lives.json', { signal: AbortSignal.timeout(10000) });
        if (!response.ok) throw new Error('Feed request failed');
        const feed = await response.json();
        if (feed?.version !== 1 || !Array.isArray(feed.entries)) throw new Error('Invalid feed');

        const seen = new Set();
        cards = feed.entries.filter(entry => {
            const source = /^https:\/\/www\.thbk\.me\/@peter-builds\/collections\/[a-zA-Z0-9]+\?postId=([a-zA-Z0-9]+)$/.exec(entry?.url);
            if (!entry || !categories.has(entry.category) || typeof entry.title !== 'string' || !entry.title.trim() ||
                !source || source[1] !== entry.id) {
                throw new Error('Invalid post');
            }
            if (seen.has(entry.id)) return false;
            seen.add(entry.id);
            return true;
        }).sort((a, b) => (Date.parse(b.date) || 0) - (Date.parse(a.date) || 0))
            .map(entry => ({ category: entry.category, element: makeCard(entry) }));
    } catch {
        showStatus('The feed is unavailable. You can still browse the collections above on ThingsBook.');
        return;
    }

    grid.append(...cards.map(card => card.element));
    filters.hidden = false;

    function renderFilter() {
        const requested = new URLSearchParams(location.search).get('category');
        const selected = categories.has(requested) ? requested : 'all';
        for (const button of buttons) {
            button.setAttribute('aria-pressed', String(button.dataset.category === selected));
        }
        let visible = 0;
        for (const card of cards) {
            card.element.hidden = selected !== 'all' && card.category !== selected;
            if (!card.element.hidden) visible++;
        }
        if (visible) {
            showStatus(`Showing ${visible} ${visible === 1 ? 'post' : 'posts'}.`, false);
        } else {
            showStatus(selected === 'all' ? 'No posts yet.' : `No ${selected} posts yet.`);
        }
    }

    filters.addEventListener('click', event => {
        const button = event.target.closest('button');
        if (!button || button.getAttribute('aria-pressed') === 'true') return;
        const url = new URL(location.href);
        if (button.dataset.category === 'all') url.searchParams.delete('category');
        else url.searchParams.set('category', button.dataset.category);
        history.pushState(null, '', url);
        renderFilter();
    });
    window.addEventListener('popstate', renderFilter);
    renderFilter();
}

loadPosts();
