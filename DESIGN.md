## Whimsical SaaS Design System — Retro Arcade Theme

### Personality

Handcrafted, playful, and direct. Feels like it was built by one person who cared deeply about every pixel. The personality is big, loud, and confident — but the underlying structure is clean and conversion-focused. Think: indie hacker who can actually design. Every section surprises you slightly while still feeling completely intentional.

### Color System

- Page background: #F4F0FF — lavender cream, soft and cool-tinted, never pure white.
- Brand primary: #7C3AED — electric violet: hero display text, CTA buttons, pricing card headers, accent elements
- Accent / Stats: #00E5A3 — cyber mint: stats on dark panels, XP/score values, footer column headings, checkmark icon fills
- Dark / text: #120E16 — deep ink violet: body text, section headings, button borders/shadows, dark panels
- Dark panels: #1A1528 or #211B33 — midnight violet: feature showcase cards, privacy/stats sections, footer
- White: #FFFFFF — pricing card body, button text on electric violet, text on dark panels
- Muted: #5C526A — muted plum: body copy on lavender cream background
- Never use: corporate blues, grays as primary colors, pure black backgrounds for full-page sections

### Typography — The Most Important Rule

Three distinct font roles, never mixed:

**1. Display / Hero Headlines**

- Font: Fredoka One, Boogaloo, or any bubbly rounded display font
- Always UPPERCASE
- Color: #7C3AED (electric violet)
- Text stroke effect: thick dark ink outline simulating comic-book lettering
  ```css
  -webkit-text-stroke: 3px #120e16;
  text-shadow:
    3px 3px 0 #120e16,
    -1px -1px 0 #120e16,
    1px -1px 0 #120e16,
    -1px 1px 0 #120e16;
  ```

* Size: clamp(48px, 8vw, 96px) for hero. Smaller section headers: clamp(28px, 4vw, 48px)
* Line height: 0.95–1.05 — very tight
* Used for: hero headline, major section headings, pricing section headline

**2. Section Sub-headings**

- Font: Fredoka One or bold rounded sans, NO stroke
- Lowercase or title case (NOT all caps)
- Color: #120E16
- Size: clamp(20px, 3vw, 32px), weight 700
- Used for: feature sub-headings ("Get Your Posture Score"), card titles

**3. Body / Everything Else**

- Font: 'Courier Prime', 'Courier New', or any monospace
- Color: #5C526A on lavender cream, rgba(255,255,255,0.75) on dark panels
- Size: 14–16px, line-height 1.7
- Used for: ALL body copy, feature bullet lists, pricing feature lists, nav links, footer links, legal text, subheadlines
- This is non-negotiable: monospace for body text is the most distinctive typographic choice in this system

**On dark panels:**

- Headings: white, Fredoka, uppercase, NO stroke (stroke doesn't read on dark)
- Stats/numbers: #00E5A3 cyber mint, Fredoka, bold
- Body: monospace, rgba(255,255,255,0.75)

### Navbar

- Background: transparent (sits on lavender cream)
- Logo: rounded square icon (illustrated mascot or emoji-style) + brand name in body font or light sans
- Right side: ghost pill button ("Pricing") + electric violet pill CTA ("Buy now")
- Ghost button: 2px solid #120E16 border, lavender cream/white bg, border-radius 100px, monospace font
- CTA button: #7C3AED bg, white text, border-radius 100px, 2px solid #120E16 border, box-shadow: 3px 3px 0 #120E16
- No underlines, no hover backgrounds on links — just color transitions

### Hero Section

- Background: #F4F0FF (lavender cream)
- Display headline: massive, electric violet, stroked, UPPERCASE, Fredoka — takes up 40-50% of viewport height
- Subheadline: monospace, centered, 16-18px, dark, max-width 560px
- Key terms in the subheadline get a violet dashed box highlight: `border: 1.5px dashed #7C3AED; padding: 2px 6px; border-radius: 4px`
- Bold key words with `font-weight: 700`

- Primary CTA: large pill button, #7C3AED, white text, 2px dark border, 4px dark bottom-right shadow, border-radius 100px, padding 14px 36px, font-size 18px, Fredoka or bold rounded font
- Below CTA: small monospace text "30-day money-back guarantee" or trust text in muted plum color
- Decorative mascot/emoji scattered in margins at low opacity (8-15%)

### Section Label Pills

- Used to label special sections above the content ("PRIVACY FIRST", "ONE-TIME PAYMENT")
- Style: dark bg (#120E16), white monospace text, border-radius 100px, padding 6px 18px, font-size 12px, font-weight 500, letter-spacing 0.05em
- Positioned centered above the section content, slightly overlapping the section border
- Alternate: lavender cream bg with dark border for sections on lavender cream background

### Feature Sections

- Layout: alternating two-column — text left + dark UI card right, then dark UI card left + text right
- Text column: sub-heading (bold rounded, no stroke) + body paragraph (monospace) + checklist items
- Dark UI card: #1A1528 bg, border-radius 12-16px, overflow hidden — shows app screenshot or mock UI
- Gap between columns: 48-64px
- Section spacing: 80-100px between major sections

### Checklist Items

- Icon: cyber mint circle (#00E5A3), 24px, border 2px solid #120E16, contains dark ✓ checkmark
- Text: monospace, 14-15px, #120E16 on lavender cream
- Gap between icon and text: 12px
- Spacing between items: 12-16px

### Dark Panel Sections

- Full-width dark card: background #1A1528, border-radius 20-24px, padding 48-64px
- Section label pill sits above, slightly overlapping the top border
- Content: centered icon (colored circle, 56-64px) + large white display heading (Fredoka, uppercase, NO stroke) + monospace body text
- Stats row: 3 columns, stat value in cyber mint Fredoka font (large, 36-48px bold), label below in white monospace
- Used for: privacy/trust sections, stats callouts, any "serious but still on-brand" content

### Pricing Card

- Isolated, centered card — NOT a grid of plans (whimsical SaaS often has one price)
- Card: white bg, border-radius 16-20px, border 2px solid #120E16, box-shadow: 6px 6px 0 #120E16
- Slight counter-clockwise rotation: transform: rotate(-1deg) or rotate(-0.5deg) — gives handmade feel
- Card header bar: #7C3AED electric violet, padding 12px 20px, monospace text "ONE-TIME PAYMENT" in white, small circle radio button right-aligned
- Price display: huge handwritten/rounded font, dark color — current price large, old price small + strikethrough gray + positioned left of/above main price
- Feature list: cyber mint checklist items (same as above)
- CTA button: full-width, electric violet, pill shape, dark border + shadow, white text, Fredoka font

### Pricing Headline (above card)

- Use the display font (Fredoka, stroked, uppercase, electric violet) for the pricing section headline
- Make it provocative and specific: directly comparing value ("CHEAPER THAN ONE DOCTOR VISIT")
- Subtext in monospace, centered, specific numbers that justify the comparison

### Dark UI Cards (Feature Mockups)

- Background: #1A1528 or #211B33
- Border-radius: 12-16px
- Contain real-looking mini UI: tables, leaderboards, app screenshots
- Internal headings: cyber mint (#00E5A3) Fredoka, uppercase
- Internal text: white monospace
- Live indicator: green dot + "LIVE" text in small monospace

### Letter / Storytelling Section

- Dark pill label above: "A letter from the future" — dark bg, white rounded font
- Visual: illustrated envelope with letter peeking out + wax seal
- Letter paper: off-white/aged paper texture (#F2EEF9), typewriter font (Courier), text in dark violet-tinted brown
- Bold text in electric violet for emotional emphasis
- This section is purely narrative — no buttons, no bullets, just story

### Footer

- Background: #1A1528 (same dark as panels)
- Top accent: thin violet gradient line at very top (2-3px)
- Left: brand name in display font (Fredoka, electric violet+stroke) + founder avatar (small circle photo) + "Built by [Name]" in monospace + 1-2 sentence personal origin story in monospace, rgba(255,255,255,0.6)
- Right: 3 columns with cyber mint uppercase Fredoka headers ("PRODUCT", "LEGAL", "SUPPORT") + monospace links in rgba(255,255,255,0.7)
- Bottom: thin separator + centered copyright in monospace + small mascot emoji
- No heavy borders or boxes — just color contrast creates the zones

### Responsive Rules

- Mobile: display headline scales down to clamp(36px, 10vw, 56px)
- Feature sections: stack single column, dark UI card goes below text
- Dark panels: reduce padding to 32px 20px
- Pricing card: remove rotation on mobile, full-width
- Nav: hamburger menu, hide ghost button, keep CTA

### Scattered Decorative Elements

- Small mascot/logo icons scattered in page margins at 8-12% opacity
- Use sparingly: 2-3 per page section maximum
- Position: absolute, outside main content flow, non-interactive
- Size: 20-40px
- This adds the "hand-built personal project" texture without cluttering content

### What NOT to Do

- Do not use the display font (Fredoka+stroke) for body text — monospace ONLY for body
- Do not use the stroke effect on dark backgrounds — unreadable
- Do not center all text — left-align feature text, center only hero and dark panel sections
- Do not use gradients — this system is flat (shadows via offset box-shadow, not blur)
- Do not use more than one pricing plan — whimsical SaaS is direct: one product, one price
- Do not make the lavender cream background pure white — #F4F0FF specifically
- Do not use rounded icons from icon packs — use emoji or custom illustrated mascots
- Do not add animations beyond subtle hover lifts — the personality comes from typography, not motion
