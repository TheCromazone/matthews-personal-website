# Matthew Cromaz Personal Website - Design Spec

## Context

Matthew Cromaz needs a personal website that balances professional credibility (targeting data analyst/data scientist roles) with personal storytelling (autism journey, hobbies, personality). The site is a single-page scrolling experience with full-viewport sections, each featuring a different photo and mood, transitioning between dark and light themes as the user scrolls.

## Tech Stack

- **Vite** - Dev server with hot reload
- **Vanilla HTML/CSS/JS** - No framework overhead
- **GSAP + ScrollTrigger** - Industry-standard scroll animations, parallax, fades
- **Node.js** - For dev tooling only

## Image Assets

| File | Section | Role |
|------|---------|------|
| `me in a suit.JPEG` | Hero | Professional portrait, right side of hero |
| `me and my setup datascience.jpg` | Data Science | Full-width parallax background |
| `ai bt image.jpg` | Behavioral Tech | Section photo with warm overlay |
| `me playing frisbee.JPG` | Frisbee/Hobbies | Action shot with bright palette |
| `orfalea collge of businuess.png` | Education | Full-width parallax background |
| `bia san mateo .png` | (optional accent) | BIA exterior, secondary use |

## Section-by-Section Design

### 1. Hero (Dark, Dramatic)
- **Background**: Dark navy/charcoal gradient
- **Layout**: Split - left text, right photo (cutout style like Morgan inspiration)
- **Content**:
  - "Hello, I'm" small text
  - "MATTHEW CROMAZ" large bold display font
  - "Quantitative Economist | Data Scientist | Problem Solver" subtitle
  - Floating accent cards: "MS Quantitative Economics", "Cal Poly SLO", "Reed College BA"
- **Animations**: Staggered text entrance, photo slide-in, floating cards with subtle hover drift
- **Photo**: `me in a suit.JPEG` with background removed or masked

### 2. Data Science & Tech (Dark/Techy, Neon Accents)
- **Background**: Dark with `me and my setup datascience.jpg` as parallax backdrop
- **Color accents**: Neon cyan/blue matching RGB PC in photo
- **Content**:
  - Heading: "Data Science & Analytics"
  - Body text about passion for data, quantitative economics, Claude Code, AI tools
  - Floating skill tags animating in on scroll
- **Animations**: Parallax image, fade-in text overlay, staggered skill tag reveals

### 3. Behavioral Technician (Warm Transition)
- **Background**: Fades from dark to warm whites/soft blues
- **Photo**: `ai bt image.jpg` displayed prominently
- **Content**:
  - Heading: "Making a Difference"
  - Personal narrative: former client turned behavioral technician at BIA
  - The meaningful irony of being clinically diagnosed with autism as a child, now giving back
  - Current role: collecting performance data, implementing behavioral methodologies
- **Animations**: Cross-fade from dark section, image reveal with soft parallax, text slide-in

### 4. Ultimate Frisbee (Bright, Energetic)
- **Background**: Bright greens and sky blues, outdoor palette
- **Photo**: `me playing frisbee.JPG` with dynamic parallax
- **Content**:
  - Heading: "Beyond the Data"
  - Text about ultimate frisbee passion - pickup, league, and club
  - Energetic, fun tone
- **Animations**: Bright color sweep transition, photo zoom-in parallax, bouncy text reveals

### 5. Education (Orfalea Building Backdrop)
- **Background**: `orfalea collge of businuess.png` as full-width parallax background
- **Overlay**: Semi-transparent dark panel for text readability
- **Content**:
  - Heading: "Education"
  - Cal Poly SLO - MS Quantitative Economics, Orfalea College of Business (June 2025, GPA 3.47)
  - Reed College - BA Economics (January 2024)
  - Certifications: SIE (In Progress), CFA Investment Foundations (2026), Tableau Desktop Specialist (2025), BCAT (2025)
  - Timeline-style layout
- **Animations**: Parallax background, timeline items revealing on scroll with stagger

### 6. Projects Showcase (Clean, Card-Based)
- **Background**: Light/neutral
- **Layout**: Card grid (2-3 cards)
- **Cards**:
  1. **Rithum Economic Consulting** (Capstone) - Nested logit models, cross-price elasticities, e-commerce pricing optimization
  2. **Behavioral Economics in Gaming** (Thesis) - Loss aversion, endowment effects, loot boxes to battle passes
  3. **Investment Club** - $150K S&P 100 portfolio management, financial analysis, stock pitches
- **Animations**: Cards scale up and fade in on scroll, hover lift effect with shadow

### 7. Technical Skills (Visual Badges)
- **Background**: Light with subtle gradient
- **Layout**: Categorized badge groups
- **Categories**:
  - Languages: Python, HTML/CSS, JavaScript, C++, R
  - Tools: Microsoft Office, Tableau, R Studio, Stata, Cursor, Generative AI tools
  - Libraries: Pandas, NumPy, Sqlite3, Sklearn, StatsmodelsAPI, Matplotlib
- **Animations**: Staggered badge pop-in, subtle float on hover

### 8. Contact / Footer (Dark, Clean)
- **Background**: Dark navy matching hero for visual bookend
- **Content**:
  - Heading: "Let's Connect"
  - Email: matthewcromaz37@gmail.com
  - Phone: 415-745-5603
  - LinkedIn link
  - Simple contact CTA
  - Footer: "Built with Claude Code" note
- **Animations**: Fade-in text, subtle background particle or gradient animation

## Navigation

- Fixed top navbar, semi-transparent with backdrop blur
- Left: "MC" logo/monogram
- Right: Section links (About, Data Science, Story, Hobbies, Education, Projects, Skills, Contact)
- Active section highlighting via ScrollTrigger
- Hamburger menu on mobile

## Animation Library & Approach

- **GSAP 3 + ScrollTrigger plugin** for all scroll-based animations
- **Parallax**: Images move at different scroll speeds using ScrollTrigger
- **Section transitions**: Each section pins briefly, then fades/slides to next
- **Floating elements**: CSS keyframe animations with slight GSAP scroll offsets
- **Color transitions**: Background gradient shifts between sections via ScrollTrigger
- **Performance**: Will-change hints, GPU-accelerated transforms only, lazy-load images

## Responsive Design

- Mobile-first CSS with breakpoints at 768px and 1024px
- Hero layout stacks vertically on mobile (text above, photo below)
- Cards stack single-column on mobile
- Navigation collapses to hamburger on mobile
- Images optimized with appropriate sizing

## File Structure

```
/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.js          # GSAP animations, ScrollTrigger setup
│   ├── style.css         # All styles
│   └── assets/           # Optimized images (copied from root)
├── public/
│   └── images/           # Static images served directly
└── docs/
    └── superpowers/
        └── specs/
```

## Verification Plan

1. Run `npm create vite@latest` to scaffold, install GSAP
2. Build all sections with content and images
3. Start dev server on localhost
4. Use Puppeteer to take screenshot of each viewport-height section
5. Compare against inspiration screenshot for layout/typography/spacing
6. Two-pass visual review: identify mismatches, fix, re-screenshot
7. Test scroll animations work smoothly
8. Test responsive layout at mobile breakpoint
