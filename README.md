# Arun Raj N.P — QA Engineer Portfolio

A futuristic, cyber-minimal portfolio website for **Arun Raj N.P**, QA Tester / Junior QA Engineer, built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

> "Ensuring Quality. Delivering Reliability."

---

## ✨ Features

- Animated hero with typewriter role rotation, mouse-responsive glow, and floating HUD cards
- Animated about timeline, skill cards, and scroll-triggered reveals
- QA Command Center with animated counters
- Experience timeline, expandable project cards, QA artifacts hub
- Animated Bug Tracker terminal with typing effect
- Automation Journey roadmap
- Postman-style API testing cards
- Certification showcase
- **Recruiter Mode** — floating toggle that disables heavy animations and surfaces key info for hiring managers
- Glassmorphism contact section with working mailto form
- Fully responsive, accessible (visible focus states, reduced-motion support), and SEO-optimized

---

## 🛠 Tech Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS 3
- Framer Motion
- Lucide React Icons
- React Router (HashRouter — GitHub Pages friendly)

---

## 🚀 Getting Started Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

---

## 📁 Project Structure

```
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── 404.html              # SPA fallback for GitHub Pages
│   └── resume/
│       └── PLACEHOLDER.txt   # Replace with Arun_Raj_NP_Resume.pdf
├── src/
│   ├── components/           # All section components
│   ├── data/
│   │   └── content.ts        # ALL editable site content lives here
│   ├── hooks/                # Custom hooks (counters, recruiter mode, mouse position)
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .github/workflows/deploy.yml  # Auto-deploy to GitHub Pages
├── vite.config.ts
├── tailwind.config.js
└── package.json
```

---

## ✏️ Editing Content

Almost everything (name, roles, projects, skills, experience, certifications, contact links) is centralized in:

```
src/data/content.ts
```

Edit values there — no need to touch component files for content changes.

### Replacing the Avatar

The hero section uses a placeholder HUD avatar (`src/components/Hero.tsx`). To use a real photo:

1. Add your image to `src/assets/` (e.g. `profile.jpg`)
2. In `Hero.tsx`, replace the placeholder `<div>` inside the glass circle with:
   ```tsx
   <img src={profileImg} alt="Arun Raj N.P" className="w-full h-full object-cover rounded-full" />
   ```
   and add `import profileImg from '../assets/profile.jpg'` at the top.

### Adding Your Resume

Place your resume PDF at `public/resume/Arun_Raj_NP_Resume.pdf` (this exact path is referenced by the "Download Resume" button via `personalInfo.resumeUrl` in `content.ts`).

### Updating Social Links

Edit `github` and `linkedin` fields in `src/data/content.ts`.

---

## 🌐 Deploying to GitHub Pages

### Option A — Automatic (GitHub Actions, recommended)

1. Push this repository to GitHub.
2. In **Settings → Pages**, set **Source** to "GitHub Actions".
3. **Important:** Open `vite.config.ts` and set the `base` path to match your repository name:
   ```ts
   base: '/your-repo-name/',
   ```
   If deploying to a root user/org site (`username.github.io`), set `base: '/'` instead.
4. Also update `public/404.html` to match the same path.
5. Push to the `main` branch — the included workflow (`.github/workflows/deploy.yml`) will build and deploy automatically.
6. Your site will be live at `https://<username>.github.io/<repo-name>/`.

### Option B — Manual (gh-pages package)

```bash
npm install
npm run build
npm run deploy
```

This uses the `gh-pages` package (already in `devDependencies`) to push the `dist/` folder to the `gh-pages` branch. Ensure `vite.config.ts`'s `base` is set correctly first (see step 3 above).

---

## ♿ Accessibility & Performance Notes

- All interactive elements have visible focus states (`:focus-visible`)
- `prefers-reduced-motion` is respected — animations are disabled for users who request it
- Recruiter Mode further reduces motion and visual effects on demand
- Images/avatars are placeholders by design to keep initial load light — replace with optimized (WebP/AVIF) assets for best Lighthouse scores
- Fonts are loaded via `<link rel="preconnect">` for faster font delivery

---

## 📄 License

This portfolio template is free to use and modify for personal portfolio purposes.
