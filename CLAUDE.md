# CLAUDE.md (nordaurai)

Static style mock-up of the nordaurai.com home, restyled after oddlatent.com. HTML/CSS/JS vanilla, no build, no dependencies. Site copy: English. Code, comments, commits: English. Replies to the user: Italian.

Read first: `docs/SPEC.md` (design), `docs/CONTENT.md` (only source of copy, images, links), `docs/PLAN.md` (tasks), `filemap.md`.

## Commands
- Preview: `nordaurai-static` in `MadHat-Works/.claude/launch.json` (http-server on port 5400).
- Check: `bash check-site.sh` must exit 0 before saying done.

## Rules not derivable from the code
- Copy, images and links ONLY from `docs/CONTENT.md`. Missing = slot `[... HERE]`. Never invent numbers, quotes, names, legal text, URLs.
- Odd Latent is a style reference only: never use its text, logo, mascot, images or illustrations.
- Images: only Nordaurai's, from `_originali/` exported to `assets/img/*.webp`. Originals are never linked from pages. Logo is never redrawn or recolored.
- No third-party resources (font CDN, embeds, analytics, cookies). Fonts self-hosted in `assets/fonts/`. External links only as plain links.
- Visible text: no em/en dashes, no arrows on links, no emoji. One label per intent ("Book a demo").
- Colors: only the 5 tokens in SPEC. Magenta is never a text color on indigo.
- Animate only transform/opacity, honor `prefers-reduced-motion`. Mobile-first from 360px.
- A hook saves copies into `backup/`: ignore it (gitignored).
- Added or moved files: update `filemap.md`.
