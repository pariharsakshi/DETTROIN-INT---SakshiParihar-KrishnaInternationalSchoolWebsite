# Excellence International School - Redesign

This project is a complete modern redesign of the Excellence International School (Aligarh) website, built as a submission for the Dettroin Full Stack Developer Internship (Round 1).

## 📋 Submission Details

| Field | Detail |
|---|---|
| **Full Name** | Prathamesh Dhadbale |
| **Intern ID** | intern-prathamesh-website |
| **Email Address** | dhadbaleprathmesh@gmail.com |
| **GitHub Username** | prathameshdhadbale |
| **Selected Website** | [excellenceinternationalschool.com](https://excellenceinternationalschool.com/) |
| **Live Demo Link** | [dettroin-int-prathamesh-website.vercel.app](https://dettroin-int-prathamesh-website.vercel.app/) |
| **Technologies Used** | React 18, Vite, Tailwind CSS v4, React Router DOM v6, Framer Motion, Lucide React |

### Key Improvements Made

- Replaced the original WordPress/Elementor template with a fully custom, component-driven React architecture
- New Navy / Teal / Gold / Off-White color system and an Inter + Outfit typography pairing, in place of the original green/gold/cream scheme
- Fully responsive rebuild, optimized from 320px mobile up through ultra-wide desktop
- Smooth scroll and entrance micro-interactions via Framer Motion for a more engaging, modern feel
- Centralized image registry with lazy loading and a Vite build pipeline for significantly faster load times
- Improved semantic HTML, ARIA labels on interactive elements, and SEO meta tags for better accessibility and discoverability
- Custom-built lightbox gallery (from scratch) in place of a static image grid
- Intelligent sticky navigation with dropdowns and a mobile hamburger drawer for clearer, easier navigation

## 🚀 Live Demo

[Live Here](https://dettroin-int-prathamesh-website.vercel.app/)

## 🎨 Design Philosophy

The goal was to move away from a traditional WordPress/Elementor template and create a bespoke, modern, and highly engaging user interface.

- **Color Palette:** Professional Navy (`#0F2A4A`), Trustworthy Teal (`#1A7A6D`), Accent Gold (`#D4A843`), and Clean Off-White (`#FAF7F2`).
- **Typography:** Modern sans-serif stack combining `Inter` (for readable body text) and `Outfit` (for bold, geometric headings).
- **Interactions:** Micro-interactions and scroll animations powered by Framer Motion to make the UI feel alive without being overwhelming.

## 🛠 Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4 (using the new CSS-native `@theme` architecture)
- **Routing:** React Router DOM v6
- **Animations:** Framer Motion
- **Icons:** Lucide React & Custom SVGs

## 📂 Project Structure (Modular Architecture)

The codebase adheres strictly to a clean, component-driven architecture:

```
src/
├── components/
│   ├── common/         # Reusable UI (Navbar, Footer, SectionHeading, Buttons)
│   └── sections/       # Large page blocks (Hero, About, AcademicStages, etc.)
├── data/               # Centralized data (navigation.js, images.js)
├── layouts/            # Page layouts (MainLayout with Outlet)
├── pages/              # Route entry points (HomePage, AboutPage, etc.)
└── index.css           # Global Tailwind v4 theme and typography imports
```

## ⚡ Key Features Developed

- **Responsive Layout:** fully optimized from mobile (320px) to ultra-wide desktop displays.
- **Sticky Navigation:** Intelligent navbar with dropdowns and mobile hamburger drawer.
- **Dynamic Routing:** Multi-page SPA setup simulating the actual information architecture (Home, About, Academics, Admissions, Gallery, Contact).
- **Performance Optimized:** Centralized image registry, lazy loading, and modern build tooling via Vite.
- **SEO & Accessibility:** Proper semantic HTML, ARIA labels for interactive elements, and SEO meta tags included.
- **Custom Lightbox:** Built from scratch in the Gallery using Framer Motion.

## 💻 Getting Started

To run this project locally:

1. Clone the repository:
```
git clone <repository-url>
```

2. Install dependencies:
```
npm install
```

3. Start the development server:
```
npm run dev
```

4. Build for production:
```
npm run build
```
