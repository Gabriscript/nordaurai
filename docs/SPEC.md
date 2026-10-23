# SPEC: Nordaurai home, style mock-up

## Goal
One static English home page that shows the client the new look: Odd Latent's style (https://www.oddlatent.com/) carried by Nordaurai's own brand, content and images. It is a mock-up to approve the style, not a production site.

Non-goals: other pages (blog, media, games, contact), Finnish, CMS, analytics, cookie banner, real forms, deploy.

## What we take from Odd Latent, and what we don't
Take: very large condensed uppercase headlines, drenched color blocks, pill buttons, the segmented pill tab bar, the split block (big colored panel left, content right), a big italic condensed pull quote, wavy edges between blocks, playful illustrated character, chunky footer.
Don't take: their text, logo, bear mascot, 3D illustrations, images, their blue-purple gradient, their exact section order.

## Direction
`Direzione: game-studio poster, condensed uppercase display + rounded geometric sans, indigo / ink / lime / paper + magenta pop`

Reading: single-page B2B landing for HR, L&D buyers and senior leaders, playful but credible, game-studio poster look.

## Tokens
Color strategy: Committed (indigo carries hero and big blocks). Flat colors, no gradients (exception: the team photos already have their own background).

| token | value | role |
|---|---|---|
| --indigo | #4F45BA | brand surface: hero, how-it-works panel, program, story, closing band |
| --ink | #1C1747 | text on light; deep surface: statement band, footer |
| --lime | #C1FF70 | accent: primary button fill, hero H1 second line, focus ring on dark. Nothing else. |
| --paper | #F6F4FB | light surface and text on dark |
| --magenta | #E052C9 | pop, fill only: active tab, quote marks, step numbers. Never as text color on indigo (fails contrast). |

Contrast (checked): lime on indigo 6.1:1, paper on indigo ~6.9:1, ink on lime ~14:1, ink on magenta ~5:1, ink on paper > 14:1. Magenta or lavender text on indigo is forbidden.

Type (self-hosted woff2, latin subset, `font-display: swap`, preload the display font only):
- Display: Barlow Condensed 700 and 700 italic, uppercase via CSS, line-height 0.92, letter-spacing 0.
- Text: Lexend variable (use 400 and 600 only), body 17px (1.0625rem), line-height 1.55 (1.6 on dark), max 68ch.
- Scale ratio 1.333: H1 `clamp(3.25rem, 10vw, 8rem)`, H2 `clamp(2.5rem, 6vw, 5rem)`, H3 `clamp(1.5rem, 2.6vw, 2rem)` (display font), small 0.875rem.

Shape: buttons, tabs and chips are pills; cards and images 24px radius; logos none. One shadow at most (on cards over indigo): `0 12px 32px rgb(28 23 71 / .18)`.
Spacing: multiples of 8px; sections `padding-block: clamp(80px, 12vw, 160px)`; container max 1240px, side gutter 20px mobile / 40px desktop.
Motion: one ease `cubic-bezier(0.16, 1, 0.3, 1)`, 150-400ms, only transform/opacity. Everything off under `prefers-reduced-motion`.

## Signature elements
1. **Wavy edge**: one inline SVG wave (same path everywhere), used at the bottom of the hero and at the top of the footer. Color = the next block's color. Nowhere else.
2. **Hero entrance**: H1 lines rise in a 2-step stagger (0 / 120ms, 400ms each) and the hero illustration settles in; after that a slow float (translateY 0 to -10px, 6s alternate) on desktop only. No other entrance animations on the page.
3. **Pill tab bar** in the program section (Odd Latent's segmented control): ink pill track, magenta active pill, works with arrow keys.

## Page structure (one H1, anchors in brackets)
Header: sticky, ink background, height 72px. Logo left (white PNG, height 28px). Desktop nav in one line: Program [#program], Games [#game], Story [#story], Team [#team], FAQ [#faq] + lime pill "Book a demo". Mobile: logo + "Menu" button (disclosure, `aria-expanded`), the header pill hidden; a fixed bottom bar with full-width lime "Book a demo" (min 48px tall, safe-area padding) appears after the hero is scrolled past.

1. **Hero** (indigo, `min-height: 88dvh`). Desktop: 7/5 grid, text left, hero illustration right (bottom aligned). Mobile: text, then image below at 80% width. Contents: tagline (the only tracked uppercase eyebrow on the page, lime, small) / H1 "Practice Leading / Under Pressure" (line 2 lime) / subtext / lime pill CTA. Below, still inside the indigo: "Trusted by" row of 5 white logos (height 32-40px, wrap on mobile, opacity .85). Wavy edge into paper.
2. **Problem** (paper). Desktop: left column H2 (big display) + the three consequences as large display-font lines with a magenta 10px dot; right column the "tired" illustration in a 24px-radius frame. Below, full width: ink card with the cost sentence (sentence in Lexend 600, "€720,000 lost every year" not separated into a big-number widget) + source in small text.
3. **How it works** [#how] split block: left indigo panel (sticky on desktop) with H2, intro sentence and the "pointing" illustration; right on paper, 3 steps stacked, each with a magenta circle number (1, 2, 3: it is a real sequence), H3 in display font, text. Mobile: panel on top, steps below.
4. **Statement band** (ink): the Gallup/McKinsey sentence in display font, uppercase, `clamp(2rem, 4.5vw, 3.75rem)`, max 22ch per line block, paper color; "45%" and "$250 million" in lime (only colored words on the page besides the H1). Then "Why does a play-based approach help?" as H2 + the two paragraphs + source, in a 2-column layout on desktop.
5. **Program** [#program] (indigo): kicker (Lexend 600, not uppercase) + H2 "Physical and digital games in one program". Pill tab bar with 2 tabs. Each panel: paper card, text left + image right (physical: "game" image; digital: labeled slot `[DIGITAL GAME SCREENSHOT HERE]` with dashed border). Below the tabs, two paper cards side by side: "Behavior change outcomes" (5 items) and "The program includes" (3 items), checkmark icons (Phosphor "check", inline SVG, one stroke weight). Without JS both panels are visible stacked.
6. **Meet the game** [#game] (paper): image left (game cards, 24px radius), right: H2, sub, "Purpose and outcome" paragraph, then "The science behind the game" as 6 outline pills (chips) that wrap. No CTA here.
7. **What our players say** (paper, slightly darker band `#ECE9F6`): first quote huge in Barlow Condensed 700 italic (Odd Latent "Fast iteration beats big teams" treatment), attribution below in small caps-free Lexend 600; the other two quotes in two columns, normal text with magenta quote mark. Quotes keep straight attribution text, no dashes.
8. **Case studies** (paper): H2 + two cards side by side (mobile stacked): photo top (16:10, cover), H3, text.
9. **Our story** [#story] (indigo): H2 + 4 paragraphs in one readable column (max 68ch), "pointing-2" illustration beside it on desktop. Then the founder quote block: photo of Angela (portrait crop, 24px radius) + quote in display italic (smaller than #7) + attribution.
10. **Team** [#team] (paper): H2 "Meet the team". Desktop: 4-column grid of 8 cards (photo 4:5 with its own gradient bg, name in display font, role, email as mailto when present). Mobile: horizontal scroll-snap row, cards 72vw, with visible overflow hint (next card peeks).
11. **Media** (ink): small label "Nordaurai in global media" as H2, then image (magazine spread) + title + quote + note + text link "Read the article".
12. **Blog** (paper): H2 + "All posts" link right; 2 cards (image 16:9, title, "Read" link). External links.
13. **FAQ** [#faq] (paper): H2 + 7 `<details>` items, question in Lexend 600 20px, plus/minus icon that rotates (transform), 1px ink/15% dividers.
14. **Closing band** (indigo): tagline in display font huge + lime pill "Book a demo". Wavy edge into the footer.
15. **Footer** (ink): logo, anchor nav, contact (info@ mail, LinkedIn, Instagram as text links), legal links (Privacy Policy, Terms of Service on the live site), "© 2026 Nordaurai".

## Rules (from MadHat house rules, apply always)
- Copy only from `docs/CONTENT.md`; slots like `[... HERE]` for missing things.
- No em/en dashes in visible copy; no "→" on links; no emoji; no gradient text; no glassmorphism except header blur not needed (header is solid).
- One label per intent: "Book a demo" for every booking CTA.
- Semantic HTML, skip link, visible focus (2px lime outline on dark, 2px ink on light, offset 3px), AA contrast, targets ≥44px, alt text on every content image (logos: alt = organization name), `width`/`height` on every img, `loading="lazy"` below the fold.
- Readable without JS: tabs visible stacked, menu links visible in footer anyway, bottom bar is plain CSS sticky/fixed.
- Page weight under 1 MB on first load (lazy images excluded is not an excuse: total images under ~900 KB).

## Definition of done
- `bash check-site.sh` exits 0.
- Screenshots at 375px and 1280px look like the spec, no horizontal scroll at 360px.
- No console errors; all images load; tabs work by mouse and keyboard; FAQ opens; menu works on mobile.
