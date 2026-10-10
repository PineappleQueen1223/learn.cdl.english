# TGA Truck Driving School — Design System

**TGA** = **Transportation Guidance & Assistance Truck Driving School**. A family-owned, state-licensed CDL (Commercial Driver's License) school operating in Los Angeles County and across Southern California **since 1991**. TGA trains everyday people for new careers behind the wheel of a Class A / Class B commercial truck — classroom permit prep, range practice, and real on-road driving in modern Volvo semis (many running on clean compressed natural gas).

This design system captures TGA's brand so any agent can produce on-brand marketing pages, enrollment flows, slides, social posts, and print collateral.

> **Voice in one line:** *Real Training. Real Trucks. Real Results.*

---

## The brand at a glance

- **Founded:** 1991, family-owned, Southern California.
- **What it sells:** ELDT-approved, FMCSA-/state-licensed CDL training. 160-hour CDL-A program. Class A & B, plus HazMat / Tank / Doubles-Triples endorsements.
- **Proof points:** 1:1 student-to-instructor ratio, financial aid options, job placement assistance, partnerships with **El Camino College** and **Santa Ana College**, modern automatic (AMT) trucks, CNG clean-fuel fleet.
- **Footprint:** Campuses across SoCal — Downey, Torrance, Lancaster, El Monte; enrollment center in Montebello. Serves LA County, Orange County, South Bay, Gateway Cities, San Gabriel Valley, Antelope Valley.
- **Contact on fleet:** 323-797-1841 · CA #432825 · website **truckdriversed.com**
- **Audience:** career-changers, blue-collar workers, veterans, first-time commercial drivers — practical, motivated, value-conscious. Spanish/English bilingual community.

### Sources used to build this system
- **Logo:** `uploads/TGAlogo2.png` (oxblood wordmark with tire-tread chevron).
- **Fleet photography:** two truck photos — a CNG Volvo tractor at El Camino College, and a close-up of the cab door with CNG + TGA decals.
- **Event & people photography:** a batch of real TGA photos from a campus hiring/career event — staff in branded white polos, a graduate beside a **Werner Enterprises** carrier truck, and workforce-partner booths (America's Job Center, SASSFA, WorkSource/HACLA). Optimized into `assets/photos/`.
- **Real student documents (PDFs):** the **External Vehicle Inspection** pre-trip study guide (9-page, with QR-to-YouTube walkthroughs) and the **Attendance Record** sign-in sheets (form codes `SS-09.1` / `SS-09.2`). Preserved in `assets/source-docs/` and recreated on-brand in the Print &amp; Forms kit.
- **Web copy & facts:** public site **https://www.truckdriversed.com/** and listing pages (Torrance/Downey/Lancaster campus pages, Dreambound, driving-schools.com). No codebase or Figma was provided — UI kits are faithful recreations built from the brand assets + public copy, not an import.

> ⚠️ **No source code / Figma exists for this brand.** The website UI kit in `ui_kits/website/` is an original, on-brand recreation in the spirit of a small-business CDL school site, not a pixel copy of a proprietary build.

---

## CONTENT FUNDAMENTALS — how TGA writes

**Tone:** Direct, motivational, plain-spoken, blue-collar professional. It speaks to someone ready to change their life with a stable trade. Confident but never corporate; warm but no-nonsense. Patriotic, hardworking, family-business pride.

**Person & address:** Second person, **"you" / "your"** to the student; **"we / our"** for the school. *"We're here to help you shift into a high-demand career."*

**Casing:** Headlines and CTAs lean **Title Case** or **ALL CAPS** for punch. Body is sentence case. The wordmark itself is "TGA" + "TRUCK DRIVING SCHOOL" in caps.

**Signature device — the three-beat staccato tagline.** Short imperative pairs/triples, often period-separated for rhythm:
- *Real Training. Real Trucks. Real Results.*
- *Train Smarter. Drive Sooner.*
- *Train with Experts. Start Your CDL Career.*
- *Train Locally. Drive Professionally.*

**Recurring vocabulary:** CDL, Class A, ELDT, CLP (Commercial Learner's Permit), permit prep, pre-trip inspection, backing maneuvers, range, behind-the-wheel, road test, endorsements, job placement, state-licensed, hands-on, real trucks, career, confidence.

**What it promises:** speed ("get licensed quickly"), affordability, safety, real equipment, expert instructors, and a *career* (not just a class). Always frames the outcome as a **rewarding career on the road**.

**Emoji:** **None** in formal copy. (Social/Facebook is slightly looser/casual but the brand system here is emoji-free.) Use icons, not emoji.

**Do:** lead with the benefit, keep sentences short, use numbers (160-hour, since 1991, 1:1), name real places. **Don't:** jargon-dump, sound like a textbook, over-promise, use playful/cutesy tone.

### Documents & forms copy
TGA's internal/student paperwork (inspection guides, attendance sheets) has its own register: **formal, instructional, second-person procedural**. Pre-trip guide items are written as a driver's spoken checklist — *"securely mounted, not cracked, not leaking"*, *"I'll check engine oil level by pulling out the dipstick."* Forms carry the **full legal name** (TRANSPORTATION GUIDANCE & ASSISTANCE), a **document code** (e.g. `SS-09.1`), and the footer **`© [year] All Rights Reserved | www.truckdriversed.com`**. Payment options seen: **TGA / Self**, **Check / Zelle**. The 2026 inspection guide modernizes with bullet lists and **"Scan to Watch"** QR codes linking to YouTube walkthroughs. Recreate these patterns when generating any TGA paperwork.

---

## VISUAL FOUNDATIONS

**Overall feel:** Industrial, grounded, trustworthy. Think DMV-meets-highway-signage with the pride of a family shop. Heavy type, hard edges softened just slightly, asphalt neutrals, a deep maroon that means business, and a hot red for "go."

### Color
- **Primary — Oxblood Maroon** (`--tga-maroon #5C1A1D`, ink `--tga-oxblood #2A1110`). Pulled directly from the wordmark. Used for headers, dark sections, primary brand presence. The darkest oxblood is nearly black-brown and reads as serious/premium.
- **Action — Brand Red** (`--tga-red #C0202A`). Hot, energetic; reserved for CTAs, kickers, highlights, the tread accent. Echoes the red fleet-numbering on the trucks.
- **Accent — Highway Amber** (`--tga-amber #E8A22E`), used **sparingly** for badges, "now enrolling" flags, ratings.
- **Secondary — Patriotic / CNG Navy** (`--tga-navy #1E2A66`), rare; nods to the CNG diamond decals and the American flag on the cab.
- **Neutrals — "Asphalt"**: warm grays from `--asphalt-100…900` plus off-white **`--concrete #F5F2ED`** as the default page background. White cards sit on concrete. Text is warm near-black `--tga-ink`.
- **Vibe of imagery:** real, warm, golden-hour SoCal light; white trucks against blue sky and gray asphalt. Photos are natural/warm, lightly graded — not cold, not heavily filtered. Many shots are airy/high-key (faded toward white) which pairs well with maroon overlays.

### Type (signage-grade)
- **Display / headlines:** **Archivo** at 800–900, uppercase, tight tracking. Big, blocky, confident — the marquee.
- **Kickers / labels / stats:** **Barlow Condensed** 700–800, uppercase, wide-tracked. Reads like road signage and DOT plates.
- **Body / UI:** **Barlow** 400–600. Barlow is explicitly modeled on US highway lettering (Caltrans/FHWA), so it's thematically perfect and highly legible.
- **Plate / codes:** **Barlow Semi Condensed** with tabular figures for license/DOT numbers.
- See `colors_and_type.css` for the full token + semantic scale.

### Spacing, radii, borders
- **4pt spacing base** (`--sp-1…10`). Generous, sectioned, breathable layouts.
- **Radii are restrained** — `3–12px`. This is an industrial brand: corners are mostly squared or barely rounded. Pills (`--r-pill`) only for tags/badges. Avoid big bubbly rounding.
- **Borders:** crisp 1px hairlines in `--asphalt-200/300`. Strong utilitarian elements may use a heavier `--border-strong` or a maroon top-rule. Section dividers can use the **tire-tread band** as a graphic rule.

### Backgrounds & motifs
- **The tire-tread chevron** (`assets/tread-motif.png`) is THE signature motif — a zig-zag tread band. Use it as a thin top accent on cards, a section divider, a footer rule, or a watermark. Don't overuse; it's a seasoning.
- **Full-bleed photography** for heroes, usually with a maroon/ink gradient scrim for text legibility ("protection gradient," bottom-up or left-side).
- **Solid maroon/oxblood blocks** for emphasis sections and footers. **Concrete** off-white for content.
- No purple gradients, no glassmorphism, no neon. Texture, if any, is subtle (asphalt grain, a faint tread watermark).

### Elevation, hover, press
- **Shadows are low and grounded** (`--shadow-sm/md/lg`), asphalt-tinted, never floaty/colorful.
- **Hover:** buttons darken (red→`--tga-red-700`, maroon→deeper) and may lift 1px; links underline with offset; cards raise from `shadow-sm`→`shadow-md` and may show a maroon top-rule.
- **Press:** color deepens and element nudges down ~1px (`translateY(1px)`) — a physical, mechanical feel. No springy bounce.
- **Motion:** quick and utilitarian — `--dur 170ms`, `--ease cubic-bezier(.2,.7,.2,1)`. Fades and short slides only. This brand doesn't bounce or sparkle.

### Cards
- White surface on concrete, `--r-md` (8px) corners, 1px `--asphalt-200` border, `--shadow-sm`. Featured cards add a 3–4px **maroon or tread** top accent and lift on hover. Stat/feature cards keep it flat with a heavy condensed number.

### Layout rules
- Sticky top header (white or maroon) with logo left, nav center/right, a red **"Enroll" / "Get Started"** CTA pinned right. Phone number is a persistent, tappable element (it's a phone-driven business).
- Section rhythm: kicker → big Archivo headline → lead → content/cards. Alternate concrete and maroon/photo sections for cadence.
- Mobile-first; 44px min hit targets; phone + "Apply" always reachable.

---

## ICONOGRAPHY

- **No proprietary icon font exists** for TGA. The system standardizes on **[Lucide](https://lucide.dev)** (loaded from CDN) — clean, 2px stroke, rounded-square caps, neutral and utilitarian. It matches the industrial-but-friendly tone and pairs well with Barlow. *(This is a documented substitution since the brand ships no icon set of its own.)*
  - Common icons: `truck`, `graduation-cap`, `map-pin`, `phone`, `clock`, `shield-check`, `badge-check`, `route`, `steering-wheel`(→`disc`), `calendar`, `dollar-sign`, `star`, `check`, `chevron-right`, `menu`.
  - Render at 20–24px, stroke `--asphalt-700` or `--tga-maroon`; in feature blocks, a maroon icon in a `--asphalt-100` rounded square.
- **The tire-tread chevron** (`assets/tread-motif.png`) functions as the brand's hero graphic device — not an icon per se, but the one bespoke mark beyond the logo. Use it as accent rules and watermarks.
- **Emoji:** not used. **Unicode glyphs:** avoid as icons; use Lucide. Stars for ratings are fine (Lucide `star`, amber fill).
- **Badges/seals:** "State Licensed," "ELDT Approved," "Since 1991," "Now Enrolling" rendered as condensed-caps pill/shield badges (maroon or amber), not clipart.

### Photography
TGA photography is **real and authentic**, not stock: golden-hour fleet trucks and candid event/people shots of diverse SoCal students and staff (often in branded white polos). It skews warm and natural. For marketing heroes, prefer the clean branded-truck shots with a maroon/ink scrim; for trust and careers sections, use the real people/event photos. Optimized images live in `assets/photos/` (`team-hero`, `grad-werner`, `staff-desk`, `event-photobooth`, `job-fair`, `partner-werner`). **Do not recreate partner logos** (Werner Enterprises, America's Job Center, etc.) — reference partners as text set in the system type.

---

## INDEX — what's in this folder

| Path | What it is |
|---|---|
| `README.md` | This file — brand overview, content + visual foundations, iconography, manifest. |
| `colors_and_type.css` | All design tokens: brand + neutral colors, semantic vars, type families/scale, radii, spacing, shadows, motion. **Import this first.** |
| `SKILL.md` | Agent Skill manifest so this system works inside Claude Code. |
| `assets/` | Brand assets — see below. |
| `preview/` | Design-system specimen cards (colors, type, spacing, components, brand) shown in the Design System tab. |
| `ui_kits/website/` | Recreation of the TGA marketing website — `index.html` + JSX components (Header, Hero, Programs, enroll modal, Careers, Footer). |
| `ui_kits/forms/` | Branded print templates — pre-trip inspection guide + attendance sheet — recreated from real TGA documents. |

### Components
- `Button` — `components/button/` (primary, maroon, outline, ghost · md/lg)
- `Badge` — `components/badge/` (maroon, amber, green, soft, onDark)
- `Kicker` — `components/kicker/` (section eyebrow)

### Templates
- `templates/payment-plan/` — Payment Plan Agreement ($695 down + 6 × $550, QuickBooks AutoPay)

### `assets/`
- `tga-logo.png` — primary oxblood wordmark (transparent PNG).
- `tga-logo-white.png` — all-white wordmark for maroon/dark/photo backgrounds.
- `tread-motif.png` — the tire-tread chevron band, the signature accent graphic.
- `truck-el-camino.jpg` — hero photo: CNG Volvo tractor at El Camino College, golden hour (portrait).
- `truck-cng-detail.jpg` — cab-door detail with CNG + TGA decals, high-key (portrait).
- `photos/` — optimized real event & people photography (`team-hero`, `grad-werner`, `staff-desk`, `event-photobooth`, `job-fair`, `partner-werner`).
- `source-docs/` — the original TGA PDFs (inspection guides + attendance sheets) kept for reference.

### Fonts
Loaded from **Google Fonts** (Archivo, Barlow, Barlow Condensed, Barlow Semi Condensed) via `@import` in `colors_and_type.css`. These are the actual chosen system fonts, not stand-ins. The **wordmark "TGA"** uses a custom/heavily-modified italic display letterform that is **not** a system font — always use the supplied logo PNG for the mark itself, never re-typeset it.

---

*Built from the supplied logo + fleet photos and public brand copy. The website UI kit is an on-brand recreation, not a code import.*
