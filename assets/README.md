# assets

Generated from `_originali/` (task T1). The originals are not published; `_originali/` was not modified after download.
Originals downloaded with curl from `https://images.squarespace-cdn.com/content/v1/6a20977c2dad33157ac3b8d2/<path>?format=2500w` (paths in `docs/CONTENT.md` > Images). The CDN served every file as WebP, so all originals are `<id>.webp`.

## Images

| File | Source (`_originali/`) | Source px | Output px | Processing |
|---|---|---|---|---|
| img/logo.webp | logo.webp | 2500x750 | 187x56 | resize height (alpha kept), WebP lossless (smaller than q90) |
| img/hero.webp | hero.webp | 1080x1350 | 900x1125 | resize width, WebP q78 effort 6 |
| img/logo-fbc.webp | logo-fbc.webp | 1500x1060 | 113x80 | resize height (alpha kept), WebP lossless (smaller than q90) |
| img/logo-uh.webp | logo-uh.webp | 1205x1283 | 75x80 | resize height (alpha kept), WebP lossless (smaller than q90) |
| img/logo-hi.webp | logo-hi.webp | 1200x392 | 245x80 | resize height (alpha kept), WebP lossless (smaller than q90) |
| img/logo-bh.webp | logo-bh.webp | 778x638 | 98x80 | resize height (alpha kept), WebP lossless (smaller than q90) |
| img/logo-psyon.webp | logo-psyon.webp | 1541x385 | 320x80 | resize height (alpha kept), WebP lossless (smaller than q90) |
| img/tired.webp | tired.webp | 1080x1350 | 800x1000 | resize width, WebP q78 effort 6 |
| img/pointing.webp | pointing.webp | 900x600 | 800x533 | resize width, WebP q78 effort 6 |
| img/game.webp | game.webp | 1414x2000 | 800x1132 | resize width, WebP q78 effort 6 |
| img/case-1.webp | case-1.webp | 1080x1350 | 960x1200 | resize width, WebP q78 effort 6 |
| img/case-2.webp | case-2.webp | 1080x1350 | 960x1200 | resize width, WebP q78 effort 6 |
| img/pointing-2.webp | pointing-2.webp | 900x900 | 800x800 | resize width, WebP q78 effort 6 |
| img/angela.webp | angela.webp | 704x1116 | 640x1015 | resize width, WebP q78 effort 6 |
| img/team-angela.webp | team-angela.webp | 2000x2000 | 480x480 | resize width, WebP q78 effort 6 |
| img/team-pernilla.webp | team-pernilla.webp | 2000x2000 | 480x480 | resize width, WebP q78 effort 6 |
| img/team-linda.webp | team-linda.webp | 2000x2000 | 480x480 | resize width, WebP q78 effort 6 |
| img/team-minna.webp | team-minna.webp | 2000x2000 | 480x480 | resize width, WebP q78 effort 6 |
| img/team-yuliia.webp | team-yuliia.webp | 2000x2000 | 480x480 | resize width, WebP q78 effort 6 |
| img/team-albin.webp | team-albin.webp | 2000x2000 | 480x480 | resize width, WebP q78 effort 6 |
| img/team-noel.webp | team-noel.webp | 2000x2000 | 480x480 | resize width, WebP q78 effort 6 |
| img/team-nikki.webp | team-nikki.webp | 2000x2000 | 480x480 | resize width, WebP q78 effort 6 |
| img/media.webp | media.webp | 1922x1346 | 960x672 | resize width, WebP q78 effort 6 |
| img/blog-roi.webp | blog-roi.webp | 1920x1080 | 960x540 | resize width, WebP q78 effort 6 |
| img/blog-burnout.webp | blog-burnout.webp | 1920x1080 | 960x540 | resize width, WebP q78 effort 6 |

Total `assets/img/`: about 484 KB.

Tool: Node 24 + `sharp` 0.34.3 (libvips 8.17.1), installed in a temporary folder outside the project.
Photos/illustrations: `sharp(src).resize({ width, withoutEnlargement: true }).webp({ quality: 78, effort: 6 })`. Logos: `resize({ height })` (80px, `logo` 56px), encoded both as `webp({ quality: 90, alphaQuality: 100 })` and `webp({ lossless: true })`, smaller kept (lossless won for all). Nothing is upscaled.

## Fonts

| File | Font | License | Source |
|---|---|---|---|
| fonts/barlow-condensed-latin-700-normal.woff2 | Barlow Condensed 700 normal, latin subset | SIL Open Font License 1.1 | npm `@fontsource/barlow-condensed@5.3.0` (https://cdn.jsdelivr.net/npm/@fontsource/barlow-condensed@5.3.0/files/barlow-condensed-latin-700-normal.woff2) |
| fonts/barlow-condensed-latin-700-italic.woff2 | Barlow Condensed 700 italic, latin subset | SIL Open Font License 1.1 | npm `@fontsource/barlow-condensed@5.3.0` (https://cdn.jsdelivr.net/npm/@fontsource/barlow-condensed@5.3.0/files/barlow-condensed-latin-700-italic.woff2) |
| fonts/lexend-latin-wght-normal.woff2 | Lexend, variable, axis wght, latin subset | SIL Open Font License 1.1 | npm `@fontsource-variable/lexend@5.3.0` (https://cdn.jsdelivr.net/npm/@fontsource-variable/lexend@5.3.0/files/lexend-latin-wght-normal.woff2) |

Files copied unchanged from the packages. Glyph coverage for ä ö å é ’ € ™ " checked with `fontkit` 2.0.4 (`hasGlyphForCodePoint`): all present in all three fonts.
