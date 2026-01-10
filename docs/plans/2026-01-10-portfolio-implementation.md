# Portfolio Website Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform the Lumen Next.js template into Jacob Rees's portfolio website for Front-End Developer job hunting.

**Architecture:** Next.js App Router with MDX for project content. Reuse Lumen components with content modifications. Static generation for all pages.

**Tech Stack:** Next.js 16, React, TypeScript, Tailwind CSS, shadcn/ui, MDX

**Projects:** 5 total (CanonCore, Vepple, Pavers, MusicCount, Waveger)

---

## Content Availability Summary

### Available from Help Files (Claude can extract):

| Content                                  | Source File                                                             |
| ---------------------------------------- | ----------------------------------------------------------------------- |
| Name, email, phone, location             | `Help Files/CV.md`                                                      |
| LinkedIn, GitHub URLs                    | `Help Files/CV.md`                                                      |
| Professional summary                     | `Help Files/CV.md`                                                      |
| Revolution Viewing/Vepple details        | `Help Files/CV.md` (lines 14-20)                                        |
| Pavers details + metrics                 | `Help Files/CV.md` (lines 22-28)                                        |
| CanonCore full description               | `Help Files/canoncore-v2/CLAUDE.md`                                     |
| MusicCount description                   | `Help Files/MusicCount/CLAUDE.md`                                       |
| Waveger description                      | `Help Files/canoncore-v2/CV.md`                                         |
| Skills list (languages, frameworks)      | `Help Files/CV.md`                                                      |
| Education (Leeds, 2:1, First in project) | `Help Files/CV.md`                                                      |
| Profile photo                            | `Help Files/Old Website Files/Home Page_files/Me.jpeg`                  |
| Favicon                                  | `Help Files/JR Favicon.png`                                             |
| CV PDF                                   | `Help Files/CV.pdf`                                                     |
| Revolution Viewing logo                  | `Help Files/rv-logo-green-digital-gh-091118.png.webp`                   |
| Pavers logo                              | `Help Files/image_stack_img-2515.png`                                   |
| MusicCount screenshots (18 images)       | `Help Files/MusicCount/Screenshots/`                                    |
| Waveger mockups + screenshots            | `Help Files/Waveger/` and `Help Files/Old Website Files/Waveger_files/` |
| CanonCore logos                          | `Help Files/canoncore-v2/public/`                                       |

### Screenshots - Optional (Add Later)

| Project    | Status                       | Notes                                               |
| ---------- | ---------------------------- | --------------------------------------------------- |
| CanonCore  | Can generate with Playwright | See instructions below                              |
| Vepple     | Link to live site instead    | Public pages OK per contract "public domain" clause |
| Pavers     | Link to live site instead    | Public pages OK                                     |
| MusicCount | 18 screenshots available     | `Help Files/MusicCount/Screenshots/`                |
| Waveger    | Mockups available            | `Help Files/Waveger/`                               |

#### CanonCore Screenshot Instructions (Optional)

To generate CanonCore screenshots with Playwright:

1. First populate CanonCore with good-looking demo items/artwork
2. Open Claude Code in canoncore folder:
   ```bash
   cd "/Users/jacobrees/lumen-nextjs-template-1.0.0/Help Files/canoncore-v2"
   ```
3. Tell Claude:
   > "Write a Playwright script `e2e/portfolio-screenshots.ts` that takes portfolio screenshots. Log in, then capture: sign-in page, sign-up page, my-items tree view, my-items grid view, an item detail page with hero banner, settings dialog, and docs page. Save to `portfolio-screenshots/` folder at 1920x1080. Then run it."

#### Vepple/Pavers Legal Note

Per Revolution Viewing employment contract (clause 16.1): Confidentiality restrictions "cease to apply to any information... which may be in the public domain."

**Safe approaches:**

- Link to live sites (vepple.co.uk, pavers.co.uk)
- Describe contributions with metrics from CV
- Screenshots of public-facing pages (what any visitor can see)

**Avoid:** Internal dashboards, admin panels, unreleased features, client data

---

## Phase 1: Setup & Cleanup ✅

### Task 1.1: Delete Unused Files ✅

**Files to delete:**

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

**Step 1:** Delete all unused directories and files
**Step 2:** Run `npm run build` to verify no broken imports
**Step 3:** Commit

---

### Task 1.2: Update Branding ✅

**Files to modify:**

- `src/app/layout.tsx` - metadata title/description
- `src/app/favicon.ico` - replace with JR Favicon
- `public/` - add favicon files

**Step 1:** Copy `Help Files/JR Favicon.png` to `public/favicon.png`
**Step 2:** Update metadata in layout.tsx:

```tsx
export const metadata: Metadata = {
  title: 'Jacob Rees | Front-End Developer',
  description:
    'Front-End Developer with full-stack experience, specializing in Vue.js, React, and Next.js',
};
```

**Step 3:** Commit

---

### Task 1.3: Update Navigation ✅

**Files to modify:**

- `src/components/header.tsx`
- `src/components/footer.tsx`

**Content from CV.md:**

- LinkedIn: linkedin.com/in/jacobdanielrees
- GitHub: github.com/jacobreesgit
- Email: jacobrees@icloud.com

**Header links:**

- Home (/)
- Projects (/projects)
- About (/about)
- Contact (/contact)
- CV (external PDF link - USER TO PROVIDE URL)

**Footer:**

- Same links + social icons

**Step 1:** Update header nav items
**Step 2:** Update footer with contact links
**Step 3:** Commit

---

## Phase 2: Home Page

### Task 2.1: Hero Section

**File:** `src/components/sections/hero.tsx`

**Content from CV.md:**

```
Name: Jacob Rees
Title: Front-End Developer
Summary: Front-End Developer with full-stack experience and a strong
background in UI & UX design, specializing in creating intuitive,
feature-rich applications that prioritize the user experience.
```

**Buttons:**

- "View Projects" → /projects
- "Download CV" → USER TO PROVIDE PDF URL

**Image:** `Help Files/Old Website Files/Home Page_files/Me.jpeg`

**Step 1:** Update hero text content
**Step 2:** Add profile image
**Step 3:** Update CTA buttons
**Step 4:** Commit

---

### Task 2.2: Tech Stack Marquee

**File:** `src/components/sections/logos.tsx`

**Skills from CV.md:**

- Vue.js, React, Next.js, TypeScript, JavaScript
- Node.js, Pinia, Tailwind, Sass
- Figma, Docker, Vercel

**Step 1:** Replace company logos with tech stack icons (Simple Icons or similar)
**Step 2:** Update component to display skill names
**Step 3:** Commit

---

### Task 2.3: Featured Projects Grid

**File:** `src/components/sections/features-grid.tsx`

**Projects (3 hero cards):**

1. **CanonCore** (from canoncore-v2/CLAUDE.md)
   - Full-stack media library
   - Next.js, React, TypeScript, PostgreSQL
   - Screenshot: USER TO PROVIDE

2. **Vepple** (from CV.md lines 14-20)
   - Virtual campus tours for 30+ UK universities
   - Vue.js, Pinia, Quasar, Firebase
   - Screenshot: USER TO PROVIDE (NDA?)

3. **Pavers** (from CV.md lines 22-28)
   - E-commerce component library
   - Shopify Liquid, Sanity CMS, Algolia
   - Screenshot: USER TO PROVIDE

**Step 1:** Modify grid to show 3 project cards
**Step 2:** Add project content
**Step 3:** Add placeholder images (user replaces later)
**Step 4:** Link each card to /projects/[slug]
**Step 5:** Add "View All Projects" button
**Step 6:** Commit

---

### Task 2.4: Skills Carousel

**File:** `src/components/sections/features-carousel.tsx`

**Categories from CV.md:**

- **Front-End:** Vue.js, React, Next.js, TypeScript, Tailwind, Sass
- **Full-Stack:** Node.js, PostgreSQL, Prisma, REST APIs
- **Mobile:** Swift, SwiftUI, iOS development
- **Tools:** Figma, Docker, Git, Vercel, GTM, Google Analytics

**Step 1:** Update carousel items with skill categories
**Step 2:** Add relevant icons
**Step 3:** Commit

---

### Task 2.5: About Preview

**File:** `src/components/sections/why-we-began.tsx`

**Content from CV.md:**

- Photo: Me.jpeg
- Brief intro text
- Stats: 3+ years experience, 30+ universities (Vepple), 160+ stores (Pavers)

**Step 1:** Replace company story with personal intro
**Step 2:** Add photo
**Step 3:** Add key stats
**Step 4:** "Learn More" → /about
**Step 5:** Commit

---

## Phase 3: Projects Page

### Task 3.1: Projects Index Page

**File:** `src/app/(main)/projects/page.tsx` (CREATE)

**Layout:**

- Page header: "Projects"
- Hero projects grid (3 large cards)
- Secondary projects grid (2 smaller cards)

**Hero Projects:**

1. CanonCore
2. Vepple
3. Pavers

**Secondary Projects:** 4. MusicCount 5. Waveger

**Step 1:** Create projects page
**Step 2:** Import and use features-grid.tsx
**Step 3:** Add project data
**Step 4:** Commit

---

### Task 3.2: Project MDX Content Files

**Create:** `src/content/projects/` directory with 5 MDX files

#### canoncore.mdx

**Source:** `Help Files/canoncore-v2/CLAUDE.md`

```yaml
---
title: 'CanonCore'
category: 'Full-Stack Application'
description: 'A full-stack media library for organizing and streaming personal media collections'
technologies:
  ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS']
github: 'https://github.com/jacobreesgit/canoncore'
year: '2025'
featured: true
---
```

Content: Extract from CLAUDE.md - project overview, features, architecture

#### vepple.mdx

**Source:** `Help Files/CV.md` lines 14-20

```yaml
---
title: 'Vepple'
category: 'Enterprise Platform'
description: 'Virtual experience platform powering campus tours for 30+ UK universities'
technologies: ['Vue.js', 'Pinia', 'Quasar', 'Firebase', 'Mapbox GL', 'Figma']
link: 'https://vepple.co.uk'
year: '2023-Present'
featured: true
---
```

Content: Features from CV (campus tours, interactive maps, events, analytics)

#### pavers.mdx

**Source:** `Help Files/CV.md` lines 22-28

```yaml
---
title: 'Pavers'
category: 'E-Commerce'
description: 'WCAG-compliant component library for UK footwear retailer with 160+ stores'
technologies: ['Shopify Liquid', 'Sanity CMS', 'jQuery', 'Algolia', 'Jest']
link: 'https://pavers.co.uk'
year: '2022-2023'
featured: true
---
```

Content: Component library, CMS integration, conversion metrics

#### musiccount.mdx

**Source:** `Help Files/MusicCount/CLAUDE.md`

```yaml
---
title: 'MusicCount'
category: 'iOS Application'
description: 'Native iOS app for music discovery and comparison'
technologies: ['Swift', 'SwiftUI', 'Swift Testing']
year: '2025'
featured: false
---
```

Content: From CLAUDE.md + screenshots available

#### waveger.mdx

**Source:** `Help Files/canoncore-v2/CV.md` + `Help Files/Waveger/`

```yaml
---
title: 'Waveger'
category: 'University Project'
description: 'Full-stack music prediction platform - final year project achieving First class'
technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Spotify API']
year: '2022'
featured: false
---
```

Content: From CV + university project files

**Step 1:** Create content/projects directory
**Step 2:** Create 5 MDX files with frontmatter
**Step 3:** Add content from Help Files sources
**Step 4:** Commit

---

### Task 3.3: Individual Project Page Template

**File:** `src/app/(main)/projects/[slug]/page.tsx` (CREATE)

**Uses:**

- `project4.tsx` - Header + hero image
- `tech-badges.tsx` - Technology pills
- MDX content rendering

**Step 1:** Create dynamic route
**Step 2:** Load MDX content by slug
**Step 3:** Render with project4 layout
**Step 4:** Add tech badges
**Step 5:** Add navigation (back to projects, next/prev)
**Step 6:** Commit

---

## Phase 4: About Page

### Task 4.1: About Hero

**File:** `src/app/(main)/about/page.tsx` (MODIFY existing)

**Uses:** `about-hero.tsx`

**Content from CV.md:**

- Photo: Me.jpeg
- Name: Jacob Rees
- Location: Durham, England
- Stats:
  - 3+ Years Experience
  - 30+ Universities (Vepple platform)
  - 160+ Stores (Pavers)

**Step 1:** Update about-hero with personal content
**Step 2:** Add photo
**Step 3:** Update stats
**Step 4:** Commit

---

### Task 4.2: My Story Section

**File:** `src/components/sections/why-we-began.tsx` (reuse on about page)

**Content:** Write personal narrative (can draft from CV summary + education)

**Step 1:** Add story section to about page
**Step 2:** Write intro paragraphs
**Step 3:** Commit

---

### Task 4.3: Experience Timeline

**File:** Uses `experience3.tsx`

**Content from CV.md:**

```
1. Front-End Developer, Revolution Viewing (Mar 2023 - Present)
   - Developed Vepple platform for 30+ universities

2. Web Developer, Pavers (Aug 2022 - Mar 2023)
   - Component library, 160+ stores

3. BA Digital Media, University of Leeds (2019 - 2022)
   - 2:1 overall, First in final coding project
```

**Step 1:** Update experience3.tsx data
**Step 2:** Add download resume link (CV.pdf available in Help Files)
**Step 3:** Commit

---

### Task 4.4: Companies/Tech Section

**File:** `src/components/sections/team-showcase.tsx`

**Companies (logos - USER TO PROVIDE or skip):**

- Revolution Viewing
- Pavers
- University of Leeds

**Tech stack icons:** Can use Simple Icons

**Step 1:** Update to show companies worked with
**Step 2:** Add placeholder for logos
**Step 3:** Commit

---

## Phase 5: Contact Page

### Task 5.1: Contact Page Layout

**File:** `src/app/(main)/contact/page.tsx` (MODIFY existing)

**Uses:** `projects15d.tsx` (modified - static cards)

**Content from CV.md:**

- Email: jacobrees@icloud.com
- LinkedIn: linkedin.com/in/jacobdanielrees
- GitHub: github.com/jacobreesgit
- Location: Durham, England
- CV: USER TO PROVIDE PDF URL

**Cards:**

1. Email - jacobrees@icloud.com
2. LinkedIn - /in/jacobdanielrees
3. GitHub - /jacobreesgit
4. Download CV - PDF link

**Step 1:** Update contact page layout
**Step 2:** Configure projects15d cards with contact info
**Step 3:** Add location text
**Step 4:** Commit

---

## Phase 6: Polish

### Task 6.1: SEO & Meta Tags

**Files:**

- `src/app/layout.tsx`
- Each page's metadata

**Step 1:** Add Open Graph tags
**Step 2:** Add Twitter cards
**Step 3:** Verify meta descriptions per page
**Step 4:** Commit

---

### Task 6.2: Responsive Testing

**Step 1:** Test all pages on mobile
**Step 2:** Fix any layout issues
**Step 3:** Commit

---

### Task 6.3: Final Review

**Step 1:** Verify all links work
**Step 2:** Check all images load
**Step 3:** Run Lighthouse audit
**Step 4:** Final commit and push

---

## User Action Items Checklist

All essential content is available. Screenshots are optional enhancements.

### Available Now

- [x] CV PDF file (`Help Files/CV.pdf`)
- [x] Profile photo (`Help Files/Old Website Files/Home Page_files/Me.jpeg`)
- [x] Favicon (`Help Files/JR Favicon.png`)
- [x] Revolution Viewing logo (`Help Files/rv-logo-green-digital-gh-091118.png.webp`)
- [x] Pavers logo (`Help Files/image_stack_img-2515.png`)
- [x] MusicCount screenshots (18 images in `Help Files/MusicCount/Screenshots/`)
- [x] Waveger mockups (`Help Files/Waveger/`)

### Optional (Add Later)

- [ ] CanonCore screenshots (can generate with Playwright)
- [ ] Vepple screenshots (public pages only)
- [ ] Pavers screenshots (public pages only)
- [ ] University of Leeds logo

---

## Available Assets Reference

### Use Real Assets (Available Now)

```
Help Files/Old Website Files/Home Page_files/Me.jpeg       → Profile photo
Help Files/JR Favicon.png                                   → Favicon
Help Files/CV.pdf                                           → CV download
Help Files/rv-logo-green-digital-gh-091118.png.webp        → Revolution Viewing logo
Help Files/image_stack_img-2515.png                        → Pavers logo
Help Files/MusicCount/Screenshots/                          → 18 app screenshots
Help Files/Waveger/CP The Practice/Project Files/           → Mockups & designs
Help Files/Old Website Files/Waveger_files/                 → Dashboard screenshots
Help Files/canoncore-v2/public/                             → CanonCore logos
```

### Use Placeholders (placehold.co)

For missing images, use `https://placehold.co` with dark theme styling:

| Usage               | Placeholder URL                                                |
| ------------------- | -------------------------------------------------------------- |
| Project hero (wide) | `https://placehold.co/1920x1080/1a1a2e/FFFFFF?text=CanonCore`  |
| Project card (grid) | `https://placehold.co/800x600/1a1a2e/FFFFFF?text=Project+Name` |
| Project thumbnail   | `https://placehold.co/400x300/1a1a2e/FFFFFF?text=Thumbnail`    |

**Projects needing placeholders:**

- CanonCore (hero + card images)
- Vepple (hero + card images)
- Pavers (hero + card images)

**Projects with real images:**

- MusicCount → use screenshots from `Help Files/MusicCount/Screenshots/`
- Waveger → use mockups from `Help Files/Waveger/`

---

## Estimated Implementation

- **Phase 1 (Setup):** 3 tasks
- **Phase 2 (Home):** 5 tasks
- **Phase 3 (Projects):** 3 tasks
- **Phase 4 (About):** 4 tasks
- **Phase 5 (Contact):** 1 task
- **Phase 6 (Polish):** 3 tasks

**Total:** 19 tasks (5 projects: CanonCore, Vepple, Pavers, MusicCount, Waveger)

---

## COMPLETE PAGE CONTENT

All copy/content for implementation. Use exactly as written.

---

### HOME PAGE

#### Hero Section

**Headline:** Jacob Rees

**Subheadline:** Front-End Developer

**Description:** Front-End Developer with full-stack experience and a strong background in UI & UX design, specialising in creating intuitive, feature-rich applications that prioritise the user experience.

**Primary Button:** View Projects → /projects

**Secondary Button:** Download CV → /cv.pdf

**Image:** Me.jpeg (from Help Files)

---

#### Tech Stack Marquee

Display as scrolling icons with labels:

```
Vue.js | React | Next.js | TypeScript | JavaScript | Node.js | Pinia | Tailwind | Sass | Figma | Docker | Vercel
```

---

#### Featured Projects Grid (3 Cards)

**Card 1: CanonCore**

- Category: Full-Stack Application
- Description: Built a full-stack media library with drag-and-drop organisation, Google Drive streaming, and 464+ tests. Next.js 16, React 19, PostgreSQL.
- Tech: Next.js, React, TypeScript, PostgreSQL
- Image: `https://placehold.co/800x600/1a1a2e/FFFFFF?text=CanonCore`
- Link: /projects/canoncore

**Card 2: Vepple**

- Category: Enterprise Platform
- Description: Architected features for virtual campus tour platform serving 30+ UK universities. Events system, A/B testing, 41% increased session duration.
- Tech: Vue.js, Pinia, Quasar, Firebase
- Image: `https://placehold.co/800x600/1a1a2e/FFFFFF?text=Vepple`
- Link: /projects/vepple

**Card 3: Pavers**

- Category: E-Commerce
- Description: Developed WCAG 2.1 AA component library for 160+ store retailer. Algolia search (+10% conversions), weather-based recommendations (+7% conversion).
- Tech: Shopify Liquid, Sanity CMS, Algolia
- Image: `https://placehold.co/800x600/1a1a2e/FFFFFF?text=Pavers`
- Link: /projects/pavers

**Button:** View All Projects → /projects

---

#### Skills Carousel (4 Categories)

**Category 1: Front-End**

- Icon: Code/Monitor
- Skills: Vue.js, React, Next.js, TypeScript, Tailwind, Sass
- Description: Building responsive, accessible interfaces with modern frameworks

**Category 2: Full-Stack**

- Icon: Server/Database
- Skills: Node.js, PostgreSQL, Prisma, REST APIs, GraphQL
- Description: End-to-end application development from database to deployment

**Category 3: Mobile**

- Icon: Smartphone
- Skills: Swift, SwiftUI, iOS Development
- Description: Native iOS applications with modern Swift patterns

**Category 4: Tools & Design**

- Icon: Palette/Settings
- Skills: Figma, Docker, Git, Vercel, GTM, Google Analytics
- Description: Design systems, DevOps, and analytics integration

---

#### About Preview Section

**Headline:** About Me

**Text:** I've been building things with code since secondary school. Today I create intuitive, feature-rich applications that prioritise the user experience.

**Stats:**

- 3+ Years Experience
- 30+ Universities (Vepple)
- 160+ Stores (Pavers)

**Button:** Learn More → /about

**Image:** Me.jpeg

---

### PROJECTS PAGE

#### Page Header

**Headline:** Projects

**Subheadline:** A selection of professional and personal work

---

#### All Project Cards

**Hero Projects (Large Cards):**

1. **CanonCore** - Full-Stack Application
   - Built a full-stack media library with drag-and-drop organisation, Google Drive streaming, and 464+ tests
   - Next.js, React, TypeScript, PostgreSQL, Prisma

2. **Vepple** - Enterprise Platform
   - Architected features for virtual campus platform serving 30+ UK universities with 41% increased session duration
   - Vue.js, Pinia, Quasar, Firebase, Mapbox GL

3. **Pavers** - E-Commerce
   - Developed WCAG 2.1 AA component library for 160+ store retailer driving 10%+ conversion improvements
   - Shopify Liquid, Sanity CMS, Algolia, jQuery

**Secondary Projects (Smaller Cards):**

4. **MusicCount** - iOS Application
   - Built native iOS app for syncing play counts across duplicate songs with MusicKit API integration
   - Swift, SwiftUI, MusicKit, Swift Testing

5. **Waveger** - University Project
   - Engineered music chart prediction game achieving First class grade with 3,000+ users and 150,000+ views
   - JavaScript, Python, Flask, Firebase, PostgreSQL, Spotify API

---

### INDIVIDUAL PROJECT CONTENT (MDX)

---

#### CanonCore (canoncore.mdx)

```yaml
---
title: 'CanonCore'
category: 'Full-Stack Application'
description: 'A full-stack media library for organising and streaming personal media collections'
technologies:
  [
    'Next.js',
    'React',
    'TypeScript',
    'PostgreSQL',
    'Prisma',
    'Tailwind CSS',
    'Vitest',
    'Playwright',
  ]
github: 'https://github.com/jacobreesgit/canoncore'
year: '2025'
featured: true
---
```

**Overview**

I built CanonCore as a full-stack media library application that enables users to organise, browse, and stream their personal media collections. Built with Next.js 16, React 19, and PostgreSQL, it provides a cinematic interface for managing movies, TV shows, music, and other media.

**Key Features**

- **Hierarchical Organisation:** Engineered drag-and-drop reordering system with dnd-kit supporting unlimited nesting depth, dual view modes (tree and grid), and optimistic UI updates
- **Media Streaming:** Built video/audio streaming API with HTTP Range header support for seeking, subtitle rendering (SRT, VTT, ASS), and playback position persistence
- **Google Drive Integration:** Architected OAuth 2.0 flow with AES-256-GCM encrypted token storage, bidirectional sync with circuit breaker pattern, and resumable uploads for large files
- **Cinematic UI:** Designed hero banners with artwork, dark mode interface, and smooth animations using Tailwind CSS and shadcn/ui components
- **Production Security:** Implemented OWASP security headers (HSTS, CSP, X-Frame-Options), Redis rate limiting (Upstash), and comprehensive input validation with Zod

**Technical Highlights**

- Developed comprehensive test suite with 464+ unit tests, integration tests against real PostgreSQL, and Playwright E2E tests with Page Object Model
- Implemented structured logging with Pino including distributed request tracing via x-request-id headers
- Built authentication system with NextAuth.js v5 including email/password flow, password reset via Resend, and bcrypt hashing
- Created 20-page MDX documentation site with Fumadocs featuring collapsible navigation and dark mode support

---

#### Vepple (vepple.mdx)

```yaml
---
title: 'Vepple'
category: 'Enterprise Platform'
description: 'Virtual experience platform powering campus tours for 30+ UK universities'
technologies:
  ['Vue.js', 'Pinia', 'Quasar', 'Firebase', 'Mapbox GL', 'GTM', 'Figma']
link: 'https://vepple.co.uk'
year: '2023-Present'
featured: true
---
```

**Overview**

Vepple is a virtual experience platform serving 30+ UK universities. As a Front-End Developer at Revolution Viewing, I led development of major features that transformed how universities engage prospective students through personalised virtual campus tours.

**Key Contributions**

**Events Management System**
Architected a comprehensive events system with Firebase Firestore real-time chat, 1-second status updates, session scheduling with timezone-aware validation, itinerary management, and iCal calendar export. Enabled universities to host hybrid virtual/on-campus open day events with session booking, live/scheduled/on-demand availability filtering, and map marker integration.

**A/B Testing Framework**
Designed and implemented a production A/B testing framework with GDPR-compliant tracking and GTM data layer integration. Reduced bounce rate by 19% through data-driven navigation pattern testing.

**Mobile Navigation Overhaul**
Led complete mobile navigation architecture redesign, replacing header with a 3-tier footer navigation system (Explore, Maps, Events, Checklist, More). Engineered custom bottom sheet filter components and TikTok-inspired session pages with caption truncation and landscape handling. Increased session duration by 41% and mobile engagement by 85%.

**Accessibility Mode**
Built comprehensive WCAG-compliant accessibility system with automatic background video pausing, transcript expansion for audio/video content, audio descriptions, `prefers-reduced-motion` media query detection for automatic activation, and persistent preferences via cookies/localStorage.

**Custom Map UI**
Developed interactive maps with Mapbox GL JS featuring custom directions API integration, session location markers, and map-based event filtering. Map users viewed 68% more pages than non-map users.

**Video Analytics**
Engineered granular video engagement tracking system capturing duration, watch progress, video type classification, and exit reasons with GTM data layer integration for comprehensive analytics.

**Panorama & Guided Tours**
Enhanced panorama viewer with dynamic zoom logic and responsive aspect ratio handling. Built Guided Tour suite with intro/end screens, autoplay with accessibility integration, mini-map toggle, progress tracking, and multi-CTA support.

**Impact Metrics**

- 30+ UK universities using the platform
- 41% increase in session duration (mobile)
- 85% increase in mobile engagement
- 19% reduction in bounce rate
- 68% more pages viewed by map users

---

#### Pavers (pavers.mdx)

```yaml
---
title: 'Pavers'
category: 'E-Commerce'
description: 'WCAG-compliant component library for UK footwear retailer with 160+ stores'
technologies:
  ['Shopify Liquid', 'Sanity CMS', 'jQuery', 'Algolia', 'Jest', 'Bootstrap']
link: 'https://pavers.co.uk'
year: '2022-2023'
featured: true
---
```

**Overview**

As a Web Developer at Pavers, I built front-end solutions for a major UK footwear retailer with 160+ physical stores and an e-commerce platform serving millions of customers. My work focused on creating an accessible, performant shopping experience across multiple brands.

**Key Contributions**

**Component Library**
Developed a WCAG 2.1 AA-compliant component library using Shopify Liquid and jQuery with Bootstrap grid system. Built reusable components for product cards, navigation menus, promotional banners, and checkout flows. The library enabled content teams to customise pages via Sanity CMS headless architecture, deployed across 5+ brands including Jones Bootmaker and Herring Shoes.

**Search Enhancement**
Integrated Algolia InstantSearch with faceted filtering, typo tolerance, and synonym handling. Configured relevance ranking based on popularity, stock levels, and margin. Drove a 10% increase in search-driven conversions.

**Personalisation Engine**
Engineered location-based personalisation combining Lucky Orange session recordings with a weather API. Built recommendation logic showing weather-appropriate footwear (boots in cold/wet, sandals in warm) based on user's location. Achieved 7%+ conversion improvement on personalised recommendations.

**Testing Infrastructure**
Increased front-end test coverage by 40% through Jest-based tests for critical user flows including add-to-cart, checkout, and search. Implemented snapshot testing for component regression prevention.

**Impact Metrics**

- 160+ retail stores supported by e-commerce platform
- 5+ brands powered by shared component library
- 10% increase in search-driven conversions
- 7%+ conversion improvement from weather-based recommendations
- 40% increase in front-end test coverage

---

#### MusicCount (musiccount.mdx)

```yaml
---
title: 'MusicCount'
category: 'iOS Application'
description: 'Native iOS app for syncing play counts across duplicate songs in Apple Music'
technologies:
  ['Swift', 'SwiftUI', 'MusicKit', 'Swift Testing', 'Swift Concurrency']
github: 'https://github.com/jacobreesgit/MusicCount'
year: '2025'
featured: false
---
```

**Overview**

I built MusicCount as a native iOS application that helps music enthusiasts keep their play count statistics accurate across their Apple Music library. It automatically discovers duplicate songs with mismatched play counts and provides tools to sync them.

**Key Features**

- **Library Browser:** Built a full music library viewer using MusicKit API with play count display, supporting sort by title, artist, album, or play count with instant filtering
- **Smart Suggestions:** Engineered duplicate detection algorithm that identifies songs with matching titles/artists but mismatched play counts across albums, compilations, and singles
- **Queue & Match:** Developed queuing system allowing users to add songs multiple times to match play counts between different versions of the same track
- **Privacy First:** Designed with complete on-device processing—no servers, no analytics, no data leaves the device

**Technical Details**

Built with SwiftUI using the Model-View architecture pattern (no ViewModels) with @Observable macro for reactive state management. Implemented Swift Concurrency throughout (async/await, actors, @MainActor isolation) for thread-safe code. Tested with Swift Testing framework using @Test macros and #expect assertions. Follows Apple Human Interface Guidelines with full Dynamic Type and VoiceOver accessibility support.

---

#### Waveger (waveger.mdx)

```yaml
---
title: 'Waveger'
category: 'University Project'
description: 'Music chart prediction game achieving First class grade'
technologies:
  [
    'JavaScript',
    'HTML',
    'CSS',
    'Bootstrap',
    'Python',
    'Flask',
    'PostgreSQL',
    'Firebase',
    'Spotify API',
  ]
year: '2022'
featured: false
---
```

**Overview**

Waveger was my final year project at the University of Leeds, achieving a First class grade. I built a full-stack music chart prediction game that lets users predict which songs will chart each week, competing against friends on leaderboards.

**Key Features**

- **Real-Time Chart Data:** Integrated 3+ external chart sources via Python Flask API, aggregating data from Spotify, Apple Music, and UK Official Charts
- **Firebase Backend:** Implemented Firebase for real-time database, user authentication, and cloud functions
- **Prediction Engine:** Built a points-based prediction system where users submit weekly predictions and earn points based on accuracy
- **Social Features:** Developed leaderboards, friend comparisons, achievement badges, and weekly ranking notifications
- **Analytics Dashboard:** Created personal statistics dashboard showing prediction history, accuracy trends, and performance metrics

**Results**

- Attracted 3,000+ user interest through market research and beta testing
- Generated 150,000+ views through targeted social media launch strategy
- Improved user satisfaction by 24% through iterative development based on user feedback surveys
- Achieved First class grade (70%+) for final coding project

---

### ABOUT PAGE

#### Hero Section

**Headline:** Jacob Rees

**Subheadline:** Front-End Developer

**Location:** Durham, England

**Stats:**

- 3+ Years Experience
- 30+ Universities
- 160+ Stores

**Image:** Me.jpeg

---

#### My Story Section

I've been hooked on building things with code since secondary school Computer Science. What started as curiosity became a passion for the intersection of design and engineering—making things that not only work well, but feel right to use.

After studying Digital Media at Leeds (graduating with a First in my final coding project), I've spent the last 3+ years as a Front-End Developer working on products used by millions. At Revolution Viewing, I built Vepple—a platform serving 30+ UK universities—architecting everything from real-time event systems to A/B testing frameworks. At Pavers, I developed accessible component libraries powering 160+ retail stores.

What I love about this work is the variety. One day I'm refining a micro-interaction until it feels perfect; the next I'm solving a complex state management problem or debugging a tricky edge case. That blend of craft and problem-solving keeps me engaged.

I'm now looking for a role with more technical ownership and the opportunity to grow further into full-stack development. I want to build products that matter, with a team that cares about doing things properly.

---

#### Experience Timeline (Chronological Order)

**1. University of Leeds** (2019 - 2022)

- BA in Digital Media
- Achieved a 2:1 overall with a First in the final coding project

**2. Web Developer, Pavers** (Aug 2022 - Mar 2023)

- Built front-end solutions for Pavers, a UK footwear retailer with 160+ stores
- Developed a WCAG 2.1 AA-compliant component library using Shopify Liquid and jQuery, enabling content teams to customise pages via Sanity CMS across 5+ brands including Jones Bootmaker and Herring Shoes
- Integrated Algolia search, improving search relevance and driving a 10% increase in search-driven conversions
- Combined Lucky Orange with a weather API for location-based recommendations, resulting in 7%+ conversion
- Increased front-end test coverage by 40% through Jest-based tests for critical user flows
- Technologies: Shopify Liquid, Sanity CMS, Bootstrap, jQuery, Algolia, Jest, Lucky Orange, Google Tag Manager

**3. Front-End Developer, Revolution Viewing** (Mar 2023 - Present)

- Developed Vepple, a virtual experience platform for 30+ UK universities delivering personalised campus tours, interactive maps, and live events with lead capture
- Engineered the front-end using Vue.js, Pinia, and Quasar, with a Figma design system and reusable component library
- Architected Events Management System with Firebase real-time chat, 1-second status engine, and timezone-aware scheduling for hybrid open day events
- Built production A/B testing framework with GrowthBook SDK, GDPR-compliant tracking, and GTM analytics, reducing bounce rate by 19%
- Led mobile navigation overhaul with 3-tier footer architecture and custom bottom sheet components, increasing session duration by 41% and mobile engagement by 85%
- Developed custom map UI with Mapbox GL and directions API, with map users viewing 68% more pages
- Technologies: Vue.js, Pinia, Quasar, Firebase, Vitest, Figma, GTM, Google Analytics, Bitbucket Pipelines

---

### CONTACT PAGE

#### Header

**Headline:** Get in Touch

**Subheadline:** Open to new opportunities in front-end and full-stack development

**Location text:** Based in Durham, England · Open to remote and hybrid

---

#### Contact Cards (4 cards in 2x2 grid)

**Card 1: Email**

- Icon: Mail
- Label: Email
- Value: jacobrees@icloud.com
- Action: mailto:jacobrees@icloud.com

**Card 2: LinkedIn**

- Icon: LinkedIn
- Label: LinkedIn
- Value: /in/jacobdanielrees
- Action: https://linkedin.com/in/jacobdanielrees

**Card 3: GitHub**

- Icon: GitHub
- Label: GitHub
- Value: /jacobreesgit
- Action: https://github.com/jacobreesgit

**Card 4: Download CV**

- Icon: FileText/Download
- Label: CV
- Value: Download PDF
- Action: /cv.pdf
