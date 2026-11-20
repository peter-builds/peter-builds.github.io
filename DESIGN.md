---
name: Peter Builds
description: Make. Learn. Repeat. An open, still-unfinished build manual where every notebook entry is a numbered step.
colors:
  stock: "#ffffff"
  ink: "#171a17"
  forest: "#1d4530"
  forest-deep: "#12301f"
  forest-screen: "#e7eee9"
  forest-hair: "#a9bcb0"
  rust: "#b5432e"
  muted: "#4f5751"
  hair: "#cdd3ce"
  on-ink-muted: "#c3cbc4"
typography:
  display:
    fontFamily: "TrashHand, 'Comic Sans MS', cursive"
    fontSize: "5.75rem"
    fontWeight: 400
    lineHeight: 0.95
  numeral:
    fontFamily: "TrashHand, 'Comic Sans MS', cursive"
    fontSize: "11rem"
    fontWeight: 400
    lineHeight: 0.8
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "TrashHand, 'Comic Sans MS', cursive"
    fontSize: "3.6rem"
    fontWeight: 400
    lineHeight: 1
  title:
    fontFamily: "'Atkinson Hyperlegible Next', 'Atkinson Hyperlegible', 'Avenir Next', sans-serif"
    fontSize: "1.85rem"
    fontWeight: 800
    lineHeight: 1.15
  body:
    fontFamily: "'Atkinson Hyperlegible Next', 'Atkinson Hyperlegible', 'Avenir Next', sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  body-strong:
    fontFamily: "'Atkinson Hyperlegible Next', 'Atkinson Hyperlegible', 'Avenir Next', sans-serif"
    fontSize: "0.95rem"
    fontWeight: 700
    lineHeight: 1.4
  label:
    fontFamily: "'Martian Mono', ui-monospace, 'SF Mono', Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.01em"
    fontVariation: "'wdth' 87.5"
rounded:
  none: "0px"
  dot: "50%"
spacing:
  gutter: "32px"
  gutter-mobile: "20px"
  box-pad: "10px 12px"
  panel-pad: "18px 20px"
  entry-gap: "40px"
  section: "88px"
  container: "1240px"
components:
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.stock}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.1rem"
    height: "48px"
  button-dark-hover:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.stock}"
  button-outline:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.ink}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.1rem"
    height: "48px"
  button-outline-hover:
    backgroundColor: "{colors.forest-screen}"
    textColor: "{colors.ink}"
  nav-link-current:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.stock}"
    typography: "{typography.body-strong}"
    padding: "0.45rem 0.85rem"
  readout-focus:
    backgroundColor: "{colors.rust}"
    textColor: "{colors.stock}"
    typography: "{typography.label}"
    padding: "9px 14px"
  box-header:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.stock}"
    typography: "{typography.label}"
    padding: "6px 10px"
  box-header-takeaway:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.stock}"
  callout-label:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "5px 8px"
  parts-chip:
    backgroundColor: "{colors.forest-screen}"
    textColor: "{colors.ink}"
    padding: "3px 8px"
  practice-band:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.stock}"
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.stock}"
    height: "100px"
---

# Design System: Peter Builds

## Overview

**Creative North Star: "The Build Manual"**

The site is an open kit instruction manual that is still being written. Every notebook entry is a numbered build step: a giant hand-lettered step numeral, a framed photo with leader-line callouts naming the real parts, a parts box, and the Question / Test / Takeaway fields a student can copy. The manual is printed in two colors on bright white stock: ink for structure, deep forest for headers and bands. Workbench Rust is held back to mark the one step in focus and its callouts. Everything is square, ruled, and labeled, the way a manual teaches a 12-year-old to build something without anyone standing over them.

Personality comes from three places only: the TrashHand step numerals and headlines, the readout labels (an instrument-panel, slightly cyberpunk voice Peter chose deliberately), and real build photography annotated like a parts diagram. Body text is set in Atkinson Hyperlegible Next, a face designed for legibility, because the readers are young and the entries are long. The page is flat. Heavy 2px ink rules and boxed panels give it its structure.

**Key Characteristics:**
- Two-color print on white: ink for structure, forest as the second color, rust only on the step in focus.
- Steps number themselves per project (oldest = 01), so new entries are a straight copy-paste.
- Giant TrashHand step numerals; long titles in bold Atkinson for legibility.
- Boxed fields with forest header strips (Parts, Question, Test) and an ink strip for Takeaway.
- Fixed-ratio photo frames with edge codes (S03 / F02) and leader-line part callouts.
- Square corners, 2px ink rules, no shadows except the small lift under callout dots.

## Colors

The palette is a two-color print run on white stock, plus one marking ink.

### Primary
- **Deep Forest** (forest): The second print color. It's used for box header strips, the practice band, the italic-weight emphasis word in the cover ("real."), button and link hover, and older step numerals in the notebook. White text on it reads at 10.8:1.

### Secondary
- **Workbench Rust** (rust): The marking ink, used only for focus: the "Latest step" readout cell, the latest step's numeral, callout dots, the PENDING stamp, link underlines, the eyebrow dot, and the focus ring. It passes AA on white (5.5:1).

### Neutral
- **Manual Stock** (stock): The page ground and every panel surface.
- **Shop Ink** (ink): Text, 2px structural rules, panel borders, the current-page nav tab, the Takeaway header strip, and the footer.
- **Forest Screen** (forest-screen): A 10% forest tint for parts chips, the "How to read a step" band, photo backdrops, and the outline-button hover.
- **Forest Hair** (forest-hair): Dividers inside the forest band and the dotted contents leaders.
- **Pencil Gray** (muted): Secondary copy and mono metadata (7.5:1 on white).
- **Hairline** (hair): Placeholder bars in the anatomy diagram.
- **Footer Fog** (on-ink-muted): Muted text on the ink footer.

### Named Rules
**The Two-Color Rule.** Structure is ink, the second color is forest, and that is the whole print run. Rust is not a third color; it is a marker for the one thing in focus.

**The One Focus Rule.** At any moment, rust marks one step: the latest on load, or the `:target` step when someone jumps to it. Two rust numerals on one screen means the focus has been lost.

## Typography

**Display Font:** TrashHand (self-hosted at `assets/brand/trashhand/TrashHand.ttf`, with a Comic Sans MS / cursive fallback)
**Body Font:** Atkinson Hyperlegible Next (with Atkinson Hyperlegible, Avenir Next, sans-serif)
**Label/Mono Font:** Martian Mono at width 87.5 (with ui-monospace)

**Character:** A marker-pen hand for numbers and short headlines, a legibility-first sans for everything a kid has to actually read, and a narrow instrument mono for readouts.

### Hierarchy
- **Numeral** (TrashHand 400, 11rem on home and 7.5rem in the notebook, scaling to 4.25–4.5rem on phones; line-height 0.8): Step numbers only.
- **Display** (TrashHand 400, clamp 3–5.75rem, line-height 0.95): The home cover line.
- **Headline** (TrashHand 400, 3.6rem; page h1s 4.6rem; 2.9rem on phones): Section and page titles. Keep these short.
- **Title** (Atkinson 800, 1.85rem in the notebook, 1.45rem in the step panel, 2.3–2.4rem for project titles): Long titles. They're never set in TrashHand, whose capital C reads as "(".
- **Body** (Atkinson 400, 17px / 16px on phones, line-height 1.6, max about 72ch): All running copy.
- **Body Strong** (Atkinson 700, 0.9–0.95rem): Nav, buttons, links, parts chips.
- **Label** (Martian Mono 400 at width 87.5, 0.75rem, uppercase for readouts): Eyebrows, readout cells, box headers, edge codes, captions, dates.

### Named Rules
**The Short Hand Rule.** TrashHand only sets numerals and short headlines (about six words or fewer). Anything a reader has to work through goes in Atkinson.

**The Readout Label Rule.** The mono labels (eyebrows, "01 / …" indices, ↗ arrows, readout cells) are a chosen signature with a slightly cyberpunk, instrument-readout feel. Keep them, make them distinctive through placement and treatment, and never set them below 12px.

## Layout

The container is `min(1240px, 100% − 64px)`, with 20px gutters at 900px and below. The home page opens with a **cover strip** (the display line and eyebrow on the left; intro, actions and location on the right) over a full-width **step panel**: a readout bar across the top, then three columns of 190px numeral, a 16:9 photo frame, and a 280–340px side column (title, Parts box, Takeaway box, open-notebook action).

Notebook entries are **step pages**: a 200px sticky rail (project, year / discipline, giant numeral) beside the content column, inside a 2px ink border, with 40px between steps. A **step index** under the notebook heading groups step numbers by project, with the latest in rust. Below 1080px the step panel's side column drops under the photo. At 620px and below everything stacks; on the home page the step panel moves directly under the cover line, and the open-notebook action moves above the boxes so the step and its action fit the first screen.

Rhythm: sections have 88px of padding (60px on phones), panels 18–26px, boxes 10–12px.

## Elevation & Depth

The manual is flat: depth comes from boxes and rules, not shadows. 2px ink borders make panels; 1px ink borders make fields inside them; forest header strips label each field. The one exception is a small shadow (`0 1px 3px rgba(23,26,23,.45)`) under callout dots, together with a white keyline on leader lines, so the annotations read against busy photos.

### Named Rules
**The Boxed, Not Lifted Rule.** To separate something, box it and label the box. Never float it on a shadow.

## Shapes

Every corner is square. The only round shapes are the 9px eyebrow dot, the white-ringed rust callout dots, and the dot inside the "Latest step" readout cell. Frames hold fixed ratios: 16:9 for lead photos, 4:3 for gallery photos, and 21:9 for a lone last gallery image. Leader lines run horizontally from the dot to a boxed label, to the right by default or to the left with `data-side="left"`.

## Components

### Buttons
Hand-cut and honest.
- **Shape:** Square, 2px ink border, 48px minimum height, Atkinson 700.
- **Dark:** Ink fill. On hover it turns forest and rises 2px.
- **Outline:** White fill. On hover it fills with forest screen and rises 2px.

### Navigation
- A white bar with a 2px ink bottom rule. Links are Atkinson 700 tabs; hover adds a 1px ink outline, and the current page is a solid ink tab with white text. Instagram ↗ sits on the right in forest.

### Step Panel (signature component)
- A **readout bar** of bordered mono cells: a rust "Latest step" cell with a white dot, then project, then year / discipline.
- A **cover title block** above it: the eyebrow, display line and location sit inside the same 2px ink border as the panel, so the headline reads as the manual's title.
- A **numeral column** with the "Step IT·" label (project code) and the giant rust numeral.
- A **photo frame** at 16:9 with leader-line callouts. When the newest step has no lead photo, the frame borrows the newest earlier one in the same project and marks it as **borrowed**: inset on forest screen, callouts hidden, and a rust-outlined "Photo from step IT·02" tag, so the Parts box is never contradicted.
- A **side column** with the bold title, the Parts box (chips), the Takeaway box (rust PENDING stamp when unset), and the "Open the notebook" dark button linking to that step.
- `manual.js` fills it from the newest entry in `notebook.html`, and the static markup is the fallback.

### Callouts
- A 14px rust dot with a 3px white ring, a 2px white leader line (with an ink keyline), and a boxed white mono label with a 2px ink border. They're positioned with `--x`, `--y` and `--len`, and `data-mobile="hide"` drops a callout on phones. On load the leader lines draw out once over 520ms, staggered. Labels are visible from the first frame.

### Boxes / Fields
- A 1px ink border with a forest mono header strip (an ink strip for Takeaway) and 10–12px body padding. They're used for Parts, Question / Test / Takeaway, project facts, and the anatomy diagram.

### Notebook Step
- `<article class="notebook-entry">`, unchanged for hand editing. JS adds `id` (`step-<project>-NN`), the numeral, a **project code** chip ("Step IT·", ink, or rust on the step in focus), `is-latest`, edge codes on figures (`IT·02 / F01`), and the PENDING stamp. Codes come from the project name's initials (Initiative Tracker → IT, Fab Academy → FA), so new projects need no setup. There's an optional `<ul class="entry-parts">` and an optional `figure[data-lead]` with callouts.
- Step-through keys are J / K. The hint hides on touch devices.
- **On phones**, older steps collapse to title, parts and takeaway, with a full-width "Show full step" / "Hide full step" toggle. A step opens itself when it's linked to or stepped onto.

### 404
- A step panel with an "Error / 404 / Page not found" readout, a rust "??" numeral, a TrashHand line ("This step isn't in the manual."), and two ways back: the latest step and the notebook.

### Contents List (selected work)
- Entry 01 is a contents entry with a 4:3 figure plate in a 2px ink border. Entries 02–03 are contents rows: rust index, bold title, a dotted forest leader, the mono type, and ↗.

### Footer
- An ink band with the TrashHand wordmark, the mono tagline in fog, the email with a rust underline, and the mono location and year.

## Do's and Don'ts

### Do:
- **Do** treat each notebook entry as a numbered step, and let the script number it. Never hand-number.
- **Do** keep the print run to ink plus forest on white, with rust marking only the step in focus.
- **Do** set step numerals and short headlines in TrashHand, and long titles and all reading text in Atkinson Hyperlegible Next.
- **Do** box and label fields with forest header strips, and use an ink strip for Takeaway.
- **Do** annotate lead photos with leader-line callouts that name real parts, placed where the part actually is.
- **Do** mark any photo shown outside its own step as borrowed, with its callouts off.
- **Do** host every image in `assets/`; nothing hotlinked.
- **Do** keep readout labels at 12px or larger, in Martian Mono at width 87.5.
- **Do** honor `prefers-reduced-motion`; the only motion is the callout lines drawing in once.

### Don't:
- **Don't** set long titles or pull quotes in TrashHand.
- **Don't** add shadows to lift panels or cards.
- **Don't** round corners on buttons, panels, frames, or chips.
- **Don't** use rust as a decorative third color, or show two rust numerals at once.
- **Don't** rewrite, trim, or reorder Peter's handwritten copy. Only short labels with his approval.
- **Don't** apply this system to the Magis et Ingenium Guild pages. They keep their own look for now.
