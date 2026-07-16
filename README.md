# Ayman Khan — Personal Portfolio Website

A personal portfolio website built from scratch with HTML, CSS, and vanilla JavaScript, hosted on GitHub Pages. This document is the Web Design Document for the project. It covers the planning questions, wireframe, and technical overview.

**Live site:** https://aymanakhan.github.io/cs355_project_1--personal_portfolio/<br>
**Repo:** https://github.com/aymanakhan/cs355_project_1--personal_portfolio

---

## Project Overview

A single-page scrolling portfolio for Ayman Khan, a computer science student at Queens College and founder of Dirtcode. The site has five sections — Home, About, Skills, Projects, and Contact — reachable both by scrolling and by clicking the navigation bar, which jumps directly to each section. The goal is to introduce Ayman professionally, highlight technical skills, showcase real project work (including Dirtcode itself), and give visitors a clear way to get in touch.

## Target Audience

- Potential recruiters evaluating my technical skills
- Anyone reviewing my coursework
- Potential collaborators or early users interested in Dirtcode

---

## Part 1: Content

1. **Full name:** Ayman Khan
2. **Purpose of the site and Target audience:** To showcase my skills and projects, including my startup Dirtcode, and to serve as an online resume.
3. **Target audience:** Potential recruiters, collaborators, and anyone interested in what I'm building.
4. **Skills to highlight:** Python, C++, Java, HTML, CSS, JavaScript; Git, GitHub, VS Code, Cursor, Claude Code, Codex; problem solving, teamwork, entrepreneurship, APIs and cloud services.
5. **Projects/work shown:** Dirtcode, Quant Strategy Backtester (in progress), Community Resource Finder (in progress), Energy Usage Predictor (in progress).
6. **Short professional bio:** Computer science student at Queens College, based in Flushing, NY, working toward building Dirtcode which is a collective of builders creating practical technology at the intersection of climate, access, and community.
7. **Pages/sections included:** Home, About, Skills, Projects, Contact (all on one scrolling page).
8. **Career goal / desired role:** Software developer / founder — growing Dirtcode into a real-world startup while building strong software engineering fundamentals.
9. **Technologies/tools with experience:** Python, C++, Java, HTML, CSS, JavaScript, Git, GitHub, VS Code, Cursor, Claude Code, Codex, Pandas, React, Node.js, Scikit-learn.
10. **Achievements/experiences worth highlighting:** Built and deployed a personal portfolio and startup website using HTML, CSS, and JavaScript. Founded Dirtcode, a technology-focused community centered on practical, real-world projects. Used Git and GitHub to manage code, document projects, and track development progress. Balanced a double major in Computer Science and Applied Mathematics while developing independent projects.
11. **Call-to-action for visitors:** View Projects and Contact Me buttons in the hero, a Download Resume button, and a contact form plus GitHub/LinkedIn/Email links in the Contact section. 
12. **Resume included?** Yes — linked from the "Download Resume" button (`assets/resume.pdf`).
13. **Social/professional links:** GitHub (github.com/aymanakhan), LinkedIn (linkedin.com/in/aymanakhan), Email (khan.aymanawsaf@gmail.com).

## Part 2: Design

1. **Overall style:** A pixel/voxel "blocky" aesthetic — dark background, hard square edges (no rounded corners anywhere), and a single green accent color, inspired by Minecraft-style visual design. Chosen to feel distinctive and technical rather than a generic template look.
2. **Color scheme:** Near-black background (`#1a1a1a`) with a green accent (`#66bb6a`) for headings, borders, and buttons; light text (`#f0f0f0`) for readability; a muted gray (`#888`) for secondary text; orange/red reserved only for warnings and form errors. Green ties back to the "Dirtcode" name and its focus on climate/nature-oriented projects. Full palette documented in `css/style.css`.
3. **Fonts:** "Press Start 2P" (pixel display font) for headings, buttons, and labels; "VT323" (pixel monospace font) for body text and paragraphs, chosen for readability at longer text lengths.
4. **Personality/field reflection:** The pixel-art aesthetic reflects a hands-on, builder mentality — matching the "tinkerers and problem-solvers" description of Dirtcode and a CS/software background.
5. **Homepage layout:** A centered hero section with name, one-line tagline, and three call-to-action buttons, followed by stacked full-width sections for About, Skills, Projects, and Contact.
6. **Project section organization:** A two-column grid of project cards (one column on mobile), each with a status badge (Live / Coming Soon), title, description, and tech tags.
7. **Mobile-friendly / responsive:** Yes. Layout uses `flex`/`grid` with fluid type (`clamp()`), and the navbar collapses into a hamburger menu below 680px; the project grid drops to one column below 700px.
8. **Visual hierarchy:** Large pixel-font headings in green draw the eye first, followed by body copy in a lighter, taller pixel font; buttons and tags use small caps-style pixel text to read as UI rather than content.
9. **Consistency across sections:** A shared token system (colors, fonts, spacing, button/card styles) is defined once in `css/style.css` using CSS variables and reused everywhere, so every section looks part of the same system.
10. **Accessibility considerations:** High-contrast light text on a dark background, visible green focus states on form fields, semantic HTML landmarks (`header`, `main`, `nav`, `footer`), descriptive `alt` text on the profile image, and labels tied to every form input.
11. **Icons/images/illustrations:** A profile photo in the About section (`assets/profile.jpg`). Icons are intentionally avoided in favor of text-based pixel buttons and tags to keep the aesthetic consistent.
12. **Inspiration:** Minecraft's visual style, and [Gazi Jarin](https://www.gazijarin.com/#intro)'s one scrolling page portfolio website.

## Part 3: Interactivity

1. **Interactive elements:** Sticky navigation bar with a mobile hamburger menu, smooth-scroll anchor links, hover/press states on all buttons and cards, and a contact form.
2. **Contact form:** Collects name, email, and message. JavaScript validates that all fields are filled in and that the email is properly formatted before "submitting," and shows an inline success or error message. The contact form is front-end only since this is a static GitHub Pages site. It validates input and shows a confirmation message, but does not actually send an email yet. To make it functional, we will need to connect it to a free service like [Formspree](https://formspree.io)
3. **JavaScript features:** Mobile menu toggle, scroll-spy that highlights the current section in the nav bar as the visitor scrolls (via `IntersectionObserver`), a live character counter on the message field, and form validation with visual feedback.
4. **User feedback on interaction:** Buttons visibly shift and change color/shadow on hover and click; invalid form fields turn red with an inline error message; the character counter turns orange near the 300-character limit; a confirmation message appears after a successful "send."
5. **Why interactivity improves UX:** It makes the single page feel organized and easy to navigate (scroll-spy nav), gives visitors confidence their message was received (form feedback), and makes the site feel responsive rather than static.

---

## Information Organization

```
Home (hero)
 └── About
      └── Skills
           └── Projects
                └── Contact
                     └── Footer (social links, back to top)
```

All sections live in one `index.html` file and are navigated via anchor links (`#about`, `#skills`, etc.) with smooth scrolling.

## Visual Design — Wireframe

```
 ┌──────────────────────────────────────────────┐
 │  Ayman Khan    Home About Skills Proj Contact │  <- sticky navbar
 ├──────────────────────────────────────────────┤
 │                                                │
 │              Hi, I'm Ayman                    │  <- hero
 │  Tackling real-world problems through code    │
 │           and experimentation                 │
 │   [ View Projects ] [ Contact ] [ Resume ]    │
 │                                                │
 ├──────────────────────────────────────────────┤
 │  About Me                                     │
 │  ┌────────┐   CS student at Queens College,   │
 │  │ photo  │   building Dirtcode...            │
 │  └────────┘   Goal / Based in / Focus          │
 ├──────────────────────────────────────────────┤
 │  Skills                                       │
 │  Languages: [Python][C++][Java][HTML]...      │
 │  Tools:     [Git][GitHub][VS Code]...         │
 │  Other:     [Problem Solving][Teamwork]...    │
 ├──────────────────────────────────────────────┤
 │  Projects                                     │
 │  ┌───────────────┐  ┌───────────────┐         │
 │  │   Dirtcode    │  │ Quant Strategy│         │
 │  │    (Live)     │  │   Backtester  │         │
 │  └───────────────┘  └───────────────┘         │
 │  ┌───────────────┐  ┌───────────────┐         │
 │  │  Community    │  │ Energy Usage  │         │
 │  │Resource Finder│  │   Predictor   │         │
 │  │(Coming Soon)  │  │    (Live)     │         │
 │  └───────────────┘  └───────────────┘         │
 ├──────────────────────────────────────────────┤
 │  Contact                                      │
 │  [ name  ]                     [ GitHub  ]    │
 │  [ email ]                     [ LinkedIn]    │
 │  [ message ]                   [ Email   ]    │
 │  [ Send Message ]                             │
 ├──────────────────────────────────────────────┤
 │  GitHub  LinkedIn  © Ayman Khan  Back to Top ↑│  <- footer
 └──────────────────────────────────────────────┘
```

On mobile (≤680px): the nav collapses into a hamburger menu, the About section stacks the photo above the text, the project grid becomes a single column, and the footer stacks and centers.

## Interaction / Functionality

- Clicking a nav link smooth-scrolls to that section and highlights it as active.
- Scrolling the page automatically updates which nav link is highlighted (scroll-spy).
- The hamburger icon toggles the mobile nav menu open/closed.
- Buttons and project cards have hover and click states for feedback.
- The contact form validates input client-side and shows success/error messages inline.

## Technical Overview

- **HTML:** Semantic, single-page structure (`index.html`)
- **CSS:** Custom stylesheet (`css/style.css`) using CSS variables for the design system, Flexbox and CSS Grid for layout, and `clamp()` for fluid typography — no framework
- **JavaScript:** Vanilla JS (`js/script.js`), no external libraries — handles navigation, scroll-spy, and form validation
- **Fonts:** Google Fonts ("Press Start 2P", "VT323")
- **Hosting:** GitHub Pages

### File structure
```
/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── profile.jpg      <- Ayman's photo
│   └── resume.pdf       <- resume
└── README.md
```

## External Resources Used

- [Google Fonts](https://fonts.google.com/) — "Press Start 2P" and "VT323"
- [Gazi Jarin](https://www.gazijarin.com/#intro)'s website
- [HTML & CSS Full Course - Beginner to Pro](https://www.youtube.com/watch?v=G3e-cpL7ofc)

## Timeline / Project Milestones

| Milestone | Target Date | Status |
|---|---|---|
| Content planning (this document) | `07/07/2026` | Done |
| Wireframe / design system | `07/07/2026` | Done |
| HTML structure | `07/14/2026` | Done |
| CSS styling | `07/14/2026` | Done |
| JavaScript interactivity | `07/14/2026` | Done |
| Content fill-in (real bio, projects, links) | `07/15/2026` | Done |
| Testing (mobile, links, form) | `07/15/2026` | Done |
| Deploy to GitHub Pages | `07/15/2026` | Done |

---
