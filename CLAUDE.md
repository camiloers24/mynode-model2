# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite)
npm run build     # Production build
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

No test suite is configured.

## Architecture

This is a **React + Vite** marketing/product page for the MyNode Model Two Bitcoin node. It's a single-page app with no routing.

### Performance strategy

The app uses a deliberate two-tier loading approach:
- **Critical (eager):** `Navbar`, `Banner`, `SmoothScroll` — imported directly, rendered immediately for LCP
- **Deferred (lazy):** All other sections wrapped in a single `<Suspense>` boundary in [App.jsx](src/App.jsx)

The 3D hero in [Hero3D.jsx](src/components/Hero3D.jsx) uses a poster image (`/model-two-revb.webp` for desktop, `/poster-mobile.webp` for mobile) that fades out once the Three.js canvas finishes loading. The Canvas itself is deferred 100ms post-mount to avoid blocking first paint. An `IntersectionObserver` pauses the 3D rotation when the component is off-screen.

### Key components

| Component | Role |
|---|---|
| [SectionWrapper.jsx](src/components/SectionWrapper.jsx) | Layout shell for every section — constrained max-width, consistent padding, optional `Reveal` animation |
| [Reveal.jsx](src/components/Reveal.jsx) | Framer Motion scroll-triggered fade-up animation (wraps children in every `SectionWrapper` by default) |
| [SmoothScroll.jsx](src/components/SmoothScroll.jsx) | Initializes Lenis smooth scroll globally; renders nothing |
| [ModelTwo.jsx](src/components/ModelTwo.jsx) | Three.js mesh with custom `MeshPhysicalMaterial`/`MeshStandardMaterial` per part; loads `/model-two.glb` via Draco compression (`/draco/` decoder path) |
| [Hero3D.jsx](src/components/Hero3D.jsx) | React Three Fiber `Canvas` hosting the rotating model, poster fallback, and OrbitControls |

### Styling

Tailwind CSS with a custom color palette (`mn-black`, `mn-orange`, `card-color`, etc.) defined in [tailwind.config.js](tailwind.config.js). Global base styles in [src/index.css](src/index.css). The design is dark-first (black backgrounds, zinc/white text, orange accents matching Bitcoin/MyNode branding).

### Static assets

Public assets served from `/public/`:
- `/model-two-v2.glb` — Draco-compressed 3D model (Blender-optimized, 2.8MB)
- `/model-two-revb.webp`, `/poster-mobile.webp` — poster fallback images
- `/draco/` — Draco WASM decoder files for `useGLTF`
- `/apps/` — app icon assets for `Features.jsx` (served as static files, not bundled by Vite)
