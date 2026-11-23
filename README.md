Welcome to Peter-Builds portfolio and example website for student work.

This was coded with some assistance of CoPilot to start but then was edited by hand to build a better website more to my style. 

## Peter-Lives feed

`peter-lives.html` reads the checked-in `peter-lives.json` snapshot from the same origin. Serve the repository over HTTP to preview it. The four collection links also work if the feed or JavaScript is unavailable.

To refresh the snapshot, open the public [ThingsBook collections](https://www.thbk.me/@peter-builds) and update the `entries` array. Use the `postId` from each ThingsBook share URL as `id`. Keep one entry per ID, remove entries that are no longer public, and use `reading`, `gaming`, `listening`, or `making` for `category`. Copy the post title and original commentary into `title` and `description`. Use an ISO publication timestamp for `date` when available, or `null`. The page sorts newest first and displays dates in Eastern time. Save any cover or project image under `assets/peter-lives/` and set `image` to its relative path, or use `null`. Update `updatedAt` when the snapshot is refreshed.

### Synchronization

The November 23, 2026 snapshot contains all 23 public posts reported by the four collection pages. The reading shelf initially embedded 10 of 16 posts. Its alternate `?listViewType=PORTRAIT_GRID` page returned all 16 and exposed a page size of 30. Public HTML contains post records and cursor metadata, but a supported pagination route beyond that view remains unverified. The HTML response omitted a CORS allow-origin header, and [ThingsBook’s robots.txt](https://www.thbk.me/robots.txt) disallows the `/api/` path. A public API, RSS feed, or embed offering complete collection data remains unverified.

Refreshes are manual. The deployed snapshot stays in place until a replacement is published. A future scheduled job needs a permitted source with complete pagination. It should validate all four collections and preserve the existing JSON if a collection is incomplete, inaccessible, or invalid.

