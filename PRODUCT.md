# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary: curious makers, roughly age 12 and up.** The site is accessible to most ages, but its reading level, tone, and project depth lean toward ages 12+. They come to see things being built and to learn digital fabrication through playful, sustained projects.
- **Peter's students.** They use the site as a model for documenting their own engineering work. They read the Engineering Notebook as a gold-standard example and keep their own notebooks elsewhere.
- **Secondary: collaborators and hirers.** Schools, FabLabs, and people looking for a speaker or partner. They are served by Work, About, and Contact, but they don't steer design priority.

## Product Purpose

Peter Builds is a brand site first. It teaches digital fabrication through the act of playful creation: robots, fabrication programs, walkthroughs, and whatever whimsical project comes next. Alongside that, it shows students how to track their work in a way that is easy but robust, by doing it in public.

Success means a young visitor leaves wanting to make something, and a student leaves knowing what a good notebook entry looks like.

## Positioning

Peter Perez is a working engineer-educator. He grew a two-printer program into a 9,000 sq. ft. K-12 innovation center at Belen Jesuit, teaches at Moonlighter FabLab, and completed Fab Academy. He documents his own builds as he goes, false starts included. The site doesn't just tell people to document their work; it is the documentation, so students can copy the practice from someone actually doing it.

## Operating Context

- Hosted on GitHub Pages at peter-builds.com (`CNAME`).
- Pages: Home (`index.html`), Work (`projects.html`), Engineering Notebook (`notebook.html`), About (`about.html`), Contact (`contact.html`).
- Notebook entries follow a fixed rhythm: a project/discipline label, a plain-language goal, a narrative of the week, then **Question / Test / Takeaway**. Students imitate this structure.
- Notebook images and video live in `assets/notebook images/<entry folder>/`. New entries are added by hand, roughly weekly.
- Brand line: "Make. Learn. Repeat."

## Capabilities and Constraints

- **Stack:** static, hand-edited HTML and a single shared stylesheet (`styles.css`). No build step and no framework. Google Fonts are loaded from CDN, and TrashHand is self-hosted.
- **Written content is frozen.** Do not change any existing copy, especially on the notebook page. It is handwritten and hand-designed by Peter. Design work may restyle or restructure presentation but must not rewrite, trim, or reorder the words. Ask before touching any text.
- **Line lengths stay as they are (hard rule).** The notebook is a stream-of-consciousness system, and its long, unbroken lines are part of how it works. Do not add max-width, `ch` caps, or column limits to reading text anywhere on the site, and treat line-length warnings from detectors or audits as accepted, not as findings. (Confirmed 2026-11-20.)
- The site must stay easy for Peter to edit by hand, so new notebook entries can be added without tooling.
- **Magis et Ingenium Guild** (`magis-et-ingenium/`, `m-e-i-guild-register.html`, `mig-images/`) is currently a **separate sub-site** with its own look, hosted here only. It is out of scope for Peter Builds design work for now. *Open decision:* it may be brought under the site once the guild is up and running.

## Brand Commitments

- Name: **Peter Builds**. Marks: PB monogram, wordmark, "Peter Head," and the Peter Builds graphic (`assets/brand/*.eps`).
- Display face: **TrashHand** (freeware, `assets/brand/trashhand/`), already in use.
- Voice: first person, warm, plain, a little wry ("Strong coffee and freshly baked bread are reliable parts of the process"). Honest about failure ("Almost seared a board…").
- Tagline: "Make. Learn. Repeat."
- Mono labels are a deliberate style choice (Peter likes their slightly cyberpunk, readout feel): eyebrows, index numbers like "01 / Personal engineering", and ↗ arrows stay. Don't strip them to reduce a "template" feel; make them earn it through placement and treatment instead. (Confirmed 2026-11-20.)
- Identity: Cuban-American engineer and educator from Miami.

## Evidence on Hand

- Projects: DAP-R desktop robot (Fab Academy 2024), Belen Innovation Center program growth, six-well electrode bioreactor (University of Miami research).
- Notebook entries on the 2026 Initiative Tracker (ESP32-C3 / XIAO units, LED rings), with photos and video in `assets/notebook images/`.
- Profile photo: `assets/about/ProfilePic.jpeg`. Brand photos and screenshots: `assets/brand/IMG_*`.
- Credentials: M.S. Industrial Engineering (UCF), B.S. Biomedical Engineering (University of Miami), Fab Academy 2024.
- **Absent:** no testimonials, student quotes, press, or metrics beyond the 9,000 sq. ft. figure. Do not fabricate any.

## Product Principles

1. **Show the process, not just the result.** False starts, pending takeaways, and revisions are content, not clutter.
2. **The notebook is the gold standard.** Its structure is what students copy, so keep it clear, consistent, and easy to imitate.
3. **Peter's words are untouchable.** Design serves the handwritten content and never edits it.
4. **Playful but serious.** Whimsy invites a 12-year-old in, and engineering rigor keeps them.
5. **Hand-editable forever.** Nothing should make adding next week's entry harder.

## Accessibility & Inclusion

The audience includes young readers (12+). Keep language and layout approachable, and keep the existing skip link and visible focus states. No formal standard has been specified beyond that.
