# PLAN

Status: [ ] todo, [~] in progress, [x] accepted by the orchestrator.

## T1 [x] Scaffold: assets, check script, preview (Light)
Depends on: nothing. Nothing runs in parallel with it.

- Download every image listed in `docs/CONTENT.md` > Images into `_originali/` (keep originals, name them `<id>.<ext>` using the table's id). Use curl; check each file is a real image (not HTML).
- Export WebP into `assets/img/` with `sharp` installed in a temp folder outside the project (as done in `../notaio/assets/README.md`). Never upscale. Sizes: `hero` 900w; `tired`, `pointing`, `pointing-2`, `game` 800w; `case-1`, `case-2`, `media`, `blog-*` 960w; `angela` 640w; `team-*` 480w; trusted-by logos and `logo` at 2x their display height (logos ~80px tall, `logo` 56px tall), keep alpha (WebP lossless or q90). Quality 78 for photos/illustrations. File names: `assets/img/<id>.webp`.
- Fonts into `assets/fonts/`: Barlow Condensed 700 normal + 700 italic, latin subset, from npm `@fontsource/barlow-condensed` (pin the exact version); Lexend variable latin subset from `@fontsource-variable/lexend` (pin version). Check glyphs for ä ö å é ’ € ™ with fontkit (as notaio did).
- `assets/README.md`: table of each output (source, source px, output px, processing) and fonts (license OFL, package@version, file).
- `check-site.sh`: copy `../notaio/check-site.sh`, change only: `lang="it"` check to `lang="en"`; placeholder INFO token `QUI]` to `HERE]`. Messages may stay Italian.
- Preview: add `{ "name": "nordaurai-static", "runtimeExecutable": "npx", "runtimeArgs": ["--yes", "http-server", "../nordaurai", "-p", "5400", "-c-1"], "port": 5400 }` to `C:\Users\GGarg\Desktop\MHW\MadHat-Works\.claude\launch.json`, and the same entry with `"nordaurai"` instead of `"../nordaurai"` to `C:\Users\GGarg\Desktop\MHW\.claude\launch.json`. Do not change other entries.
- Update `filemap.md`.
Verify: every `assets/img/*.webp` opens (report px and KB per file, total KB), fonts present, `bash check-site.sh` runs (no pages yet is fine).

## T2 [x] Build the home page (Careful)
Depends on: T1.

Build `index.html`, `css/style.css`, `js/site.js` exactly as `docs/SPEC.md` (all of it) with copy from `docs/CONTENT.md` only.
Verify: `bash check-site.sh` exits 0; preview `nordaurai-static` (http://localhost:5400) at 375px and 1280px, no horizontal scroll at 360px, no console errors, tabs by mouse and arrow keys, FAQ, mobile menu, bottom bar appears after the hero.

## T3 [x] Review (orchestrator)
Visual review against SPEC at 375/1280, audit (my-frontend audit.md), README.md for the client (what is new, [fix] list, slots, open questions).
