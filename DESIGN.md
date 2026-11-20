---
name: Peter Builds
description: Make. Learn. Repeat. A maker-educator's workbench notebook on the web.
colors:
  forest: "#1d4530"
  rust: "#b5432e"
  ink: "#171a17"
  paper: "#f7f7f4"
  white: "#ffffff"
  sage: "#e8eee7"
  muted: "#5d645e"
  line: "#d5d8d2"
  body-soft: "#46514b"
  on-ink-muted: "#c3cbc4"
  on-forest-soft: "#d9e3d6"
typography:
  display:
    fontFamily: "TrashHand, 'Comic Sans MS', cursive"
    fontSize: "5.5rem"
    fontWeight: 400
    lineHeight: 1.1
  headline:
    fontFamily: "TrashHand, 'Comic Sans MS', cursive"
    fontSize: "3.6rem"
    fontWeight: 400
    lineHeight: 1.1
  title:
    fontFamily: "TrashHand, 'Comic Sans MS', cursive"
    fontSize: "2.7rem"
    fontWeight: 400
    lineHeight: 1.1
  body:
    fontFamily: "'DM Sans', 'Avenir Next', sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  body-strong:
    fontFamily: "'DM Sans', 'Avenir Next', sans-serif"
    fontSize: "0.9rem"
    fontWeight: 600
    lineHeight: 1.65
  label:
    fontFamily: "'IBM Plex Mono', monospace"
    fontSize: "0.72rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  quote:
    fontFamily: "Georgia, 'Times New Roman', serif"
    fontSize: "1.35rem"
    fontWeight: 400
    lineHeight: 1.45
rounded:
  none: "0px"
  dot: "50%"
  stamp: "46% 54% 43% 57%"
spacing:
  gutter-sm: "18px"
  gutter-md: "20px"
  gutter-lg: "32px"
  row-gap: "22px"
  block-sm: "38px"
  block-md: "48px"
  band: "68px"
  section: "108px"
  container: "1180px"
components:
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.05rem"
    height: "48px"
  button-dark-hover:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.white}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.05rem"
    height: "48px"
  button-outline-hover:
    backgroundColor: "{colors.sage}"
    textColor: "{colors.ink}"
  text-link:
    textColor: "{colors.ink}"
    typography: "{typography.body-strong}"
  text-link-hover:
    textColor: "{colors.forest}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.body-strong}"
    padding: "0.5rem 0"
  subject-band:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.white}"
    height: "72px"
  figure-stamp:
    backgroundColor: "{colors.rust}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.stamp}"
    size: "94px"
  featured-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "44px"
  page-heading:
    backgroundColor: "{colors.sage}"
    textColor: "{colors.ink}"
    padding: "94px 0 56px"
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    height: "100px"
---

# Design System: Peter Builds

## Overview

**Creative North Star: "The Workbench Notebook"**

Think of an engineer's ruled notebook lying open on a wood workbench. Headlines are written by hand in TrashHand, as if marked with a fat marker. Labels look like field notes stamped in mono type. Hairline rules separate one entry from the next, like lines on graph paper. The photos show real parts on real benches: perfboard, LED rings, a laser-cut bowtie. Nothing is mocked up. The page is the notebook, so the design steps back and lets the build show through.

Density is calm and editorial: wide margins, generous vertical rhythm, and long text columns capped near 700px. Personality lives in a few deliberate spots: the handwritten display face, a rotated rust stamp, and the deep forest band. Everything else stays disciplined so the playful parts read as intentional. The site is light, paper-toned, and flat. It should feel like it could be printed, photocopied, and taped to a lab wall.

**Key Characteristics:**
- Handwritten display headlines over a clean geometric sans body.
- Mono labels for metadata: dates, project numbers, Question / Test / Takeaway.
- Square corners and 1px rules throughout. The only round shapes are the organic stamp blob and the status dot.
- Flat surfaces. Depth comes from tonal blocks (paper → white → sage → forest → ink), never shadows.
- Two accents with fixed jobs: forest for emphasis, state, and bands; rust for labels, underlines, and stamps.
- Real build photography with 1px line borders and mono captions.

## Colors

The palette is paper and ink with two shop-floor accents: Peter's favorite deep forest green and a red-leaning rust.

### Primary
- **Deep Forest** (forest): The signature color. It fills the subject band, sets the italic emphasis word in the hero ("*real*"), is the hover color for buttons, row titles, and links, and colors the Question / Test / Takeaway headings and the top rule on project facts. Strong enough to carry white text (10.8:1).

### Secondary
- **Workbench Rust** (rust): The marking color. It's used for mono labels (entry meta, project numbers, timeline dates), link underlines, nav-active bars, the eyebrow dot, the arrow on contact rows, and the rotated "Built by hand" stamp. It is tuned redder than the original and passes AA on paper (5.1:1), sage (4.7:1), and under white text (5.5:1).

### Neutral
- **Shop Ink** (ink): Primary text, the solid button, the footer, and 1px outline borders.
- **Notebook Paper** (paper): The page background. It's a barely warm off-white, not stark white.
- **Clean Sheet** (white): The header bar, the featured project card, and the about aside. It's one step brighter than paper, used to lift a surface without a shadow.
- **Sage Wash** (sage): Page headers, the notebook callout band, the hover fill on outline buttons, the image backdrop. It is the quiet tonal layer.
- **Pencil Gray** (muted): Secondary copy, captions, mono metadata (5.7:1 on paper).
- **Soft Graphite** (body-soft): Long-form body on About and note text in the notebook. It sits between ink and muted.
- **Ruled Line** (line): Every hairline divider, image border, and header bottom border.
- **Footer Fog** (on-ink-muted) and **Band Mist** (on-forest-soft): Muted text on the ink footer and the slash separators on the forest band.

### Named Rules
**The Two Jobs Rule.** Forest means "this is the thing / this is active." Rust means "this is a label or a mark." Don't swap them: a rust hover state or a forest metadata label breaks the grammar.

**The Paper First Rule.** Most of any screen is paper, white, or sage. Forest appears as one band or as small accents, and rust only as marks. If an accent covers more than a band's worth of a view, pull it back.

## Typography

**Display Font:** TrashHand (self-hosted at `assets/brand/trashhand/TrashHand.ttf`, with a Comic Sans MS / cursive fallback)
**Body Font:** DM Sans (with Avenir Next, sans-serif)
**Label/Mono Font:** IBM Plex Mono (with monospace)
**Quote Font:** Georgia (only for the About pull-quote aside)

**Character:** A loose hand-lettered marker voice paired with a friendly, precise geometric sans. It reads like a teacher's whiteboard headline above clean lab instructions. The mono type is used only for real metadata such as dates, indices, field names, and captions.

### Hierarchy
- **Display** (TrashHand 400, 5.5rem, then 4.7rem at ≤900px and 4rem at ≤620px; line-height 1.1): The home hero headline only.
- **Headline** (TrashHand 400, 3.6rem, page headings 4.8rem, both 2.75rem on mobile; line-height 1.05–1.1): Section titles and page `h1`s.
- **Title** (TrashHand 400, 2.7rem, 2.15rem on mobile): Notebook entry titles and featured project titles. Project entries use 3rem, work rows 1.8rem, and the timeline heading 2rem.
- **Body** (DM Sans 400, 16px, 15px on mobile; line-height 1.65): All running copy. Lead paragraphs step up to 1.05–1.2rem. Measure is capped at roughly 680–720px.
- **Body Strong** (DM Sans 600, 0.85–0.92rem): Nav links, buttons, text links, contact values.
- **Label** (IBM Plex Mono 400, 0.68–0.78rem, line-height 1.5, often uppercase): Eyebrows, entry meta, project numbers, timeline dates, figure captions, fact `dt`s, footer lines. Question / Test / Takeaway headings use weight 500 in forest.

### Named Rules
**The Hand-Lettered Headline Rule.** TrashHand is only for headlines and the footer wordmark, always at weight 400 and never bolded or italicized synthetically. Body text, buttons, and labels never use it.

**The Real Metadata Rule.** Mono type marks facts such as dates, numbers, field names, and captions. It is never used as decoration on prose.

## Layout

The container is `min(1180px, 100% − 64px)`. That becomes `min(100% − 40px, 720px)` at ≤900px and `100% − 36px` at ≤620px. The header bar runs full-bleed with the same inner alignment.

The main pattern is a **ledger column**: a narrow left rail for metadata next to a wide content column. Notebook entries use a 190px rail, project entries a 0.28fr rail, the timeline 130px, and contact rows 120px. Below 620px the rail stacks above the content. The home hero is a two-column split (0.95fr / 1.05fr) that becomes a single column on mobile.

Vertical rhythm: sections have 108px of padding (68px on mobile), bands 68px (42px), page headings 94px top and 56px bottom (62/38), entries 38–48px (28–30). Small groups sit 12–22px apart. Three-up grids (entry notes, project facts) collapse to one column at ≤620px. Galleries are two-up with 4:3 crops.

Breakpoints are 900px (tablet: the nav wraps to its own row and gaps tighten) and 620px (phone: everything stacks).

## Elevation & Depth

The system is entirely flat. There are no box-shadows anywhere. Depth comes from **tonal stepping**: paper is the ground, white lifts a featured surface, sage marks a quiet zone (page headers, the notebook band), forest marks a loud band, and ink closes the page in the footer. The hero image sits on an offset sage block peeking out behind its top-right corner, which gives a cut-paper layering instead of a drop shadow. Motion stays physical and small: buttons rise 2px on hover, nav underlines draw in from the left over 180ms, and the hero copy and figure fade up 12px on load. All of it is disabled under `prefers-reduced-motion`.

### Named Rules
**The No-Shadow Rule.** Surfaces never cast shadows. To lift something, change its tone (paper → white) or put an offset sage block behind it.

## Shapes

Corners are square (0px) on every button, card, image, band, and field. Edges are drawn with 1px rules: line-gray for dividers and image borders, ink for button outlines and the forest band's top and bottom. Two shapes break the grid on purpose. One is the **organic stamp blob** (`border-radius: 46% 54% 43% 57%`), used for the rust "Built by hand" stamp (rotated 9°) and the outlined "PB Field Notes" mark (rotated −8°). The other is the small 9px circular **status dot** before eyebrows. Accent rules carry meaning: a 2px forest top rule heads each project fact, a 4px rust left rule marks the About pull-quote, and a 2px rust underline marks the active nav item.

## Components

### Buttons
Hand-cut and honest: square, outlined, and they move a little when touched.
- **Shape:** Square corners (0px), 1px ink border, 48px minimum height, padding 0.7rem × 1.05rem, DM Sans 600 at 0.9rem. A trailing ↗ arrow sits in a spaced span.
- **Dark:** Ink fill with white text. On hover the fill and border turn deep forest and the button rises 2px.
- **Outline:** Transparent with ink text and border. On hover it fills with sage and rises 2px.
- **Transitions:** background, color, and transform over 160ms ease.

### Text Links
- Ink text, DM Sans 600, with a 1px rust underline offset 4–5px. Hover turns the text forest. Archive and source links start forest with the same rust underline.

### Navigation
- A white header bar (88px minimum height, 1px line bottom border). The PB logo sits left (136×60), links in the center, Instagram ↗ on the right in forest.
- Links are DM Sans 600 at 0.91rem. On hover, and on `aria-current="page"`, a 2px rust bar scales in from the left beneath the link.
- At ≤900px the links wrap to a full-width second row with space between them. At ≤620px they shrink to 0.82rem.

### Ledger Rows (work list, contact links)
- Full-width grid rows divided by 1px line rules: a rust mono index or label, a TrashHand or DM Sans title, a muted mono type, then an arrow. Hover turns the title forest over 160ms. Rows are about 80–91px tall.

### Featured Card
- A white panel split 1.1fr / 0.9fr: a 390px cover photo on one side, 44px of padded copy on the other (rust mono kicker, TrashHand title, muted summary, text link). There's no border or shadow; the white against paper does the lifting.

### Subject Band
- A full-bleed deep forest strip, 72px high, with ink rules above and below. White DM Sans 500 subject words are separated by soft mist slashes. It becomes a two-column grid on mobile.

### Notebook Entry (signature component)
This is the gold-standard pattern students imitate. Its structure is fixed.
- **Rail:** Rust uppercase mono project label, with the year / discipline in muted mono beneath it.
- **Body:** A TrashHand title (2.7rem), a muted lead paragraph, the week's narrative, then a three-up **Question / Test / Takeaway** grid. Each heading is forest mono 500 uppercase, and each body is soft-graphite 0.9rem.
- **Gallery:** Two-up 4:3 media (images or video) with 1px line borders on a sage backdrop and small muted captions. A single image sits at 72% width.
- **Source link:** A forest text link with a rust underline ("Source: … ↗").
- Entries are separated by a 1px line top border with 38px of vertical padding.

### Stamps
- **Figure stamp:** A 94px rust blob with white uppercase mono text, rotated 9°, overlapping the hero photo's lower-right edge.
- **Field Notes mark:** A 104px outlined ink blob with forest TrashHand text, rotated −8°, leading the notebook callout band.

### Project Facts
- A three-up `dl` grid. Each item is headed by a 2px forest top rule, with a muted uppercase mono `dt` and a 0.92rem `dd`.

### Footer
- An ink band, 100px high. On the left is the TrashHand "Peter Builds" wordmark plus a mono tagline in fog. The center email link is white with a rust underline. On the right is a mono location and year.

## Do's and Don'ts

### Do:
- **Do** keep every surface square-cornered with 1px rules. Rounding is reserved for the stamp blob and the status dot.
- **Do** use deep forest for emphasis and state (hover, active, the band, note headings), and rust for marks (labels, underlines, stamps).
- **Do** set every headline in TrashHand 400, and every label, date, index, and caption in IBM Plex Mono.
- **Do** lift surfaces with tone (paper → white → sage), not shadows.
- **Do** follow the Notebook Entry structure exactly for new entries: rail label, title, lead, narrative, Question / Test / Takeaway, gallery, source link.
- **Do** show real build photography with 1px line borders and mono captions.
- **Do** keep hover motion to a 2px lift or a color shift at 160–180ms, and honor `prefers-reduced-motion`.

### Don't:
- **Don't** add box-shadows, glows, or gradients. The system is flat.
- **Don't** round buttons, cards, or images.
- **Don't** use TrashHand for body copy, buttons, or labels, and don't bold it.
- **Don't** swap the accent jobs (rust hovers, forest metadata), and don't let either accent flood a view.
- **Don't** rewrite, trim, or reorder Peter's handwritten copy while restyling. The design serves the words.
- **Don't** apply this system to the Magis et Ingenium Guild pages. They keep their own look for now.
