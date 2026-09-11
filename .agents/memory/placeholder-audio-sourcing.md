---
name: Placeholder audio sourcing
description: Where to find reliable, stable-URL royalty-free placeholder audio (sound effects, background music) for prototypes.
---

When a build needs placeholder audio (ambience loops, background music) and there's no
integration/API for licensed audio:

- Mixkit's direct asset CDN URLs are hotlink-protected and return 403 when fetched
  programmatically (even though they look like public static files). Don't rely on
  guessed Mixkit URLs.
- archive.org is a stable, no-auth source. Don't guess file URLs directly — call the
  `/metadata/<identifier>` JSON API first to get the exact `server` and `dir` fields,
  then build the direct URL as `https://<server><dir>/<filename>`. This avoids wrong-host
  404s since archive.org shards items across many `iaXXXXXX.us.archive.org` servers.

**Why:** saved a full debugging cycle after Mixkit URLs silently failed with 403s;
archive.org's metadata endpoint removes the guesswork of which server hosts a given item.

**How to apply:** any time a task needs placeholder/royalty-free audio and no paid stock
API is available, go straight to archive.org's metadata API instead of trying other
"free stock audio" sites' direct links.
