Welcome to Peter-Builds portfolio and example website for student work.

This was coded with some assistance of CoPilot to start but then was edited by hand to build a better website more to my style. 

## Peter-Lives feed

`peter-lives.html` reads the checked-in `peter-lives.json` snapshot from the same origin. Serve the repository over HTTP to preview it. The four collection links also work if the feed or JavaScript is unavailable.

After publishing a batch on [ThingsBook](https://www.thbk.me/@peter-builds), run the importer from this repository with Node.js 20 or later.

```sh
node scripts/sync-thingsbook.mjs
node scripts/sync-thingsbook.mjs --write
```

The first command previews additions, edits, and removals. The second writes the feed and downloads available cover art. Review the JSON and any new images in VS Code, then commit and push to publish them. The page sorts newest first and shows dates in Eastern time.

If a collection becomes too large to verify through its public views, pass the share links for the new posts, quoted and separated by spaces. Use the same links with `--write` to save the batch. This mode adds or updates just the supplied posts. To remove an existing post when its entire collection cannot be verified, delete its entry from the JSON.

```sh
node scripts/sync-thingsbook.mjs "https://www.thbk.me/@peter-builds/collections/2F4HwlSvjf6?postId=EXAMPLE"
```

### Synchronization

The November 23, 2026 snapshot contains all 23 public posts reported by the four collection pages. The reading shelf initially embedded 10 of 16 posts. Its alternate `?listViewType=PORTRAIT_GRID` page returned all 16 and exposed a page size of 30. Public HTML contains post records and cursor metadata, but a supported pagination route beyond that view remains unverified. The HTML response omitted a CORS allow-origin header, and [ThingsBook’s robots.txt](https://www.thbk.me/robots.txt) disallows the `/api/` path. A public API, RSS feed, or embed offering complete collection data remains unverified.

The importer runs on demand and uses public page HTML. A full refresh writes the snapshot only after validating all four collections. The deployed snapshot stays in place until a replacement is published. Unattended full sync would need a permitted source with complete pagination.

