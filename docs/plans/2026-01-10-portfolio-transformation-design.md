# Portfolio Website Transformation Design

## Overview

Transform the Lumen Next.js template into Jacob Rees's personal portfolio website, optimized for job hunting as a Front-End Developer (with full-stack and mobile capabilities showcased).

## Goals

- **Primary:** Attract recruiters and hiring managers for Front-End Developer roles
- **Secondary:** Demonstrate full-stack depth (CanonCore, Next.js, PostgreSQL) and iOS capability (MusicCount)
- **Style:** Keep the existing Lumen aesthetic - bold, dark mode, gradients, smooth animations

## Site Structure

### Navigation

- **Home** - Landing page with hero, featured work, skills
- **Projects** - Full project showcase with case studies
- **About** - Personal story and experience
- **Contact** - Get in touch
- **CV** - Download/view link (opens PDF)

### URL Structure

```
/                    → Home
/projects            → All projects grid
/projects/[slug]     → Individual case studies
/about               → About page
/contact             → Contact page
```

---

## Projects

### Hero Projects (featured prominently)

1. **CanonCore** - Full-stack media library (Next.js, PostgreSQL)
2. **Vepple** - Virtual campus tours for 30+ UK universities (Vue.js, Pinia, Quasar)
3. **Pavers** - E-commerce & component libraries (Shopify, Sanity CMS)

### Secondary Projects

4. **MusicCount** - iOS app (Swift, SwiftUI)
5. **Waveger** - University project
6. **Sustainability Speaks** - Freelance UI/UX & Web (Figma, podcast platform)

---

## Page-by-Page Component Breakdown

### HOME PAGE

| Section           | Component               | Custom Needed?            | Content Source                     |
| ----------------- | ----------------------- | ------------------------- | ---------------------------------- |
| Hero              | `hero.tsx`              | Minor text changes        | `CV.md` intro line                 |
| Tech Stack        | `logos.tsx`             | Swap logos → tech icons   | Source SVGs from Simple Icons      |
| Featured Projects | `features-grid.tsx`     | Reduce to 3 cards         | Project screenshots + descriptions |
| Skills Carousel   | `features-carousel.tsx` | Change icons/content      | `CV.md` skills section             |
| About Preview     | `why-we-began.tsx`      | Simplify to photo + stats | `Me.jpeg` + CV stats               |

```
┌─────────────────────────────────────────────┐
│  HEADER (sticky)                            │
│  Jacob Rees | Projects | About | Contact |CV│
├─────────────────────────────────────────────┤
│  HERO (hero.tsx)                            │
│  "Jacob Rees"                               │
│  Front-End Developer with full-stack...    │
│  [View Projects] [Download CV]              │
│  Your photo or project collage              │
├─────────────────────────────────────────────┤
│  TECH STACK (logos.tsx → marquee)           │
│  Vue.js | React | Next.js | TypeScript...  │
├─────────────────────────────────────────────┤
│  FEATURED PROJECTS (features-grid.tsx)      │
│  CanonCore | Vepple | Pavers               │
│  [View All Projects →]                      │
├─────────────────────────────────────────────┤
│  SKILLS CAROUSEL (features-carousel.tsx)    │
│  Front-End | Full-Stack | Mobile | Design   │
├─────────────────────────────────────────────┤
│  ABOUT PREVIEW (why-we-began.tsx)           │
│  Photo + brief intro + key stats            │
│  [Learn More →]                             │
├─────────────────────────────────────────────┤
│  FOOTER                                     │
└─────────────────────────────────────────────┘
```

---

### PROJECTS PAGE (`/projects`)

| Section            | Component                     | Custom Needed?        | Content Source  |
| ------------------ | ----------------------------- | --------------------- | --------------- |
| Page Header        | `about-hero.tsx` (simplified) | Just title + subtitle | -               |
| Hero Project Cards | `features-grid.tsx`           | 3 large cards         | Project folders |
| Secondary Cards    | `features-grid.tsx`           | 3 smaller cards       | Project folders |

```
┌─────────────────────────────────────────────┐
│  PAGE HERO - "Projects"                     │
├─────────────────────────────────────────────┤
│  HERO PROJECTS (large cards)                │
│  CanonCore | Vepple | Pavers               │
├─────────────────────────────────────────────┤
│  SECONDARY PROJECTS (smaller cards)         │
│  MusicCount | Waveger | Sustainability      │
└─────────────────────────────────────────────┘
```

---

### INDIVIDUAL PROJECT PAGE (`/projects/[slug]`)

| Section                    | Component               | Custom Needed?       | Content Source  |
| -------------------------- | ----------------------- | -------------------- | --------------- |
| Project Hero               | `project4.tsx`          | ✓ Downloaded         | MDX frontmatter |
| Challenge/Solution/Results | `project4.tsx`          | Built-in sections    | Project MDX     |
| Tech Stack Badges          | `tech-badges.tsx`       | ✓ Created            | MDX frontmatter |
| Links                      | `button.tsx`            | -                    | MDX frontmatter |
| Screenshots                | `features-carousel.tsx` | Or simple image grid | Project folders |

**Content sources per project:**

| Project               | Help Files Source                 | Screenshots              | Live Link                   |
| --------------------- | --------------------------------- | ------------------------ | --------------------------- |
| CanonCore             | `Help Files/canoncore-v2/`        | Need to capture          | GitHub                      |
| Vepple                | `CV.md` details                   | Need from Jacob (NDA?)   | vepple.co.uk?               |
| Pavers                | `CV.md` details                   | Need from Jacob          | pavers.co.uk                |
| MusicCount            | `Help Files/MusicCount/CLAUDE.md` | App Store?               | App Store?                  |
| Waveger               | `Help Files/Waveger/` + old site  | Old site has screenshots | -                           |
| Sustainability Speaks | LinkedIn description              | Need from Jacob          | sustainabilityspeaks.co.uk? |

---

### ABOUT PAGE (`/about`)

| Section             | Component           | Custom Needed?     | Content Source        |
| ------------------- | ------------------- | ------------------ | --------------------- |
| Hero + Stats        | `about-hero.tsx`    | Change stats       | `CV.md`               |
| My Story            | `why-we-began.tsx`  | Photo + paragraphs | `Me.jpeg` + write new |
| Experience Timeline | `experience3.tsx`   | ✓ Downloaded       | `CV.md` work history  |
| Companies/Tech      | `team-showcase.tsx` | Swap logos         | Company logos         |

```
┌─────────────────────────────────────────────┐
│  ABOUT HERO - Photo grid + stats            │
├─────────────────────────────────────────────┤
│  MY STORY - Photo + intro text              │
│  What I'm looking for in next role          │
├─────────────────────────────────────────────┤
│  EXPERIENCE TIMELINE                        │
│  2023-Present: Revolution Viewing           │
│  2022-2023: Pavers                          │
│  2022: Sustainability Speaks (Freelance)    │
│  2019-2022: University of Leeds             │
├─────────────────────────────────────────────┤
│  COMPANIES/TECH LOGOS                       │
└─────────────────────────────────────────────┘
```

---

### CONTACT PAGE (`/contact`)

| Section       | Component         | Custom Needed?               | Content Source |
| ------------- | ----------------- | ---------------------------- | -------------- |
| Hero text     | Simple heading    | Minimal                      | -              |
| Contact Cards | `projects15d.tsx` | ✓ Downloaded (video removed) | `CV.md` links  |
| Location      | Simple text       | -                            | -              |

```
┌─────────────────────────────────────────────┐
│  "Get in Touch"                             │
│  Open to new opportunities                  │
├─────────────────────────────────────────────┤
│  Email | LinkedIn | GitHub | CV Download    │
├─────────────────────────────────────────────┤
│  Based in Durham, England                   │
│  Open to remote / hybrid                    │
└─────────────────────────────────────────────┘
```

---

## Custom Components (Downloaded/Created)

Components sourced from shadcnblocks and custom:

1. **Project Hero** - `src/components/project4.tsx` (shadcnblocks) - Full case study layout with header, hero image, challenge/solution/outcome sections
2. **Tech Stack Badges** - `src/components/sections/tech-badges.tsx` (custom) - Row of skill pills using existing Badge component
3. **Experience Timeline** - `src/components/experience3.tsx` (shadcnblocks) - Timeline with experience list and download resume button
4. **Contact Cards** - `src/components/projects15d.tsx` (shadcnblocks, modified) - 2x2 grid with static image cards (video removed)

---

## Component Mapping (Lumen → Portfolio)

| Original Component         | New Purpose                   | Action |
| -------------------------- | ----------------------------- | ------ |
| `hero.tsx`                 | Your intro section            | MODIFY |
| `logos.tsx`                | Tech stack marquee            | MODIFY |
| `features-grid.tsx`        | Projects grid                 | MODIFY |
| `features-showcase.tsx`    | Project case studies          | MODIFY |
| `features-carousel.tsx`    | Skills showcase / screenshots | MODIFY |
| `why-we-began.tsx`         | About preview (home)          | MODIFY |
| `about-hero.tsx`           | About page header             | MODIFY |
| `team-showcase.tsx`        | Companies worked with         | MODIFY |
| `benefits-showcase.tsx`    | -                             | DELETE |
| `video-showcase.tsx`       | -                             | DELETE |
| `testimonials.tsx`         | -                             | DELETE |
| `testimonials-marquee.tsx` | -                             | DELETE |
| `faq-section.tsx`          | -                             | DELETE |
| `pricing.tsx`              | -                             | DELETE |
| `pricing-table.tsx`        | -                             | DELETE |

---

## Technical Implementation

### Files to DELETE

```
src/app/(main)/blog/
src/app/(main)/pricing/
src/app/(main)/faq/
src/app/(auth)/
src/components/sections/pricing.tsx
src/components/sections/pricing-table.tsx
src/components/sections/faq-section.tsx
src/components/sections/testimonials.tsx
src/components/sections/testimonials-marquee.tsx
src/components/sections/benefits-showcase.tsx
src/components/sections/video-showcase.tsx
```

### Files to CREATE

```
src/app/(main)/projects/page.tsx
src/app/(main)/projects/[slug]/page.tsx
src/content/projects/
  ├── canoncore.mdx
  ├── vepple.mdx
  ├── pavers.mdx
  ├── musiccount.mdx
  ├── waveger.mdx
  └── sustainability-speaks.mdx
```

### Custom Components (Already Downloaded/Created)

```
src/components/project4.tsx              ✓ Downloaded from shadcnblocks
src/components/sections/tech-badges.tsx  ✓ Created (uses existing Badge)
src/components/experience3.tsx           ✓ Downloaded from shadcnblocks
src/components/projects15d.tsx           ✓ Downloaded from shadcnblocks (video removed)
```

### Files to MODIFY

```
src/app/(main)/page.tsx        → New home layout
src/app/(main)/about/page.tsx  → Your story + timeline
src/app/(main)/contact/page.tsx → Simple contact links
src/components/sections/hero.tsx → Your intro
src/components/sections/logos.tsx → Tech stack
src/components/sections/features-grid.tsx → Projects grid
src/components/header.tsx → Updated nav
src/components/footer.tsx → Your links
```

---

## Assets

### Available (from Help Files)

- `Help Files/Old Website Files/Home Page_files/Me.jpeg` - Your photo
- `Help Files/JR Favicon.png` - Favicon
- `Help Files/CV.md` - Experience, skills, stats
- `Help Files/canoncore-v2/` - Full codebase + CLAUDE.md
- `Help Files/MusicCount/CLAUDE.md` - App description
- `Help Files/Waveger/` - Project files
- `Help Files/Old Website Files/Waveger_files/` - Screenshots

### Needed from Jacob

- Vepple screenshots/description (NDA permitting)
- Pavers screenshots/description
- CanonCore screenshots
- Sustainability Speaks screenshots
- Tech stack SVG logos (or use Simple Icons)
- Company logos (Revolution Viewing, Pavers)

---

## Content Requirements

### Hero Section

- Tagline (e.g., "Front-End Developer")
- 1-2 sentence intro (use CV summary)

### Project Case Studies (each)

- Brief description (2-3 sentences)
- Challenge / Solution / Results
- Tech stack list
- Screenshots (2-4)
- Links (live site, GitHub)

### About Page

- Your story (why development)
- What you're looking for
- Photo

---

## Implementation Order

1. **Setup** - Delete unused files, update package.json, favicon
2. **Navigation** - Update header/footer with new links
3. **Home Page** - Hero, tech stack, featured projects, about preview
4. **Projects Page** - Grid layout with all 6 projects
5. **Individual Project Pages** - Case study template + content
6. **About Page** - Story, timeline, companies
7. **Contact Page** - Simple contact links
8. **Polish** - Animations, responsive, SEO meta tags
