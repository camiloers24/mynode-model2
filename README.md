
---

# MyNode Model Two — Landing Page

A high-performance, premium landing page for the **MyNode Model Two**. Built with a focus on fluid user experience (UX), sophisticated animations, and extreme asset optimization to ensure top-tier Core Web Vitals.

## 🚀 Tech Stack

* **React 18** – UI Framework.
* **Tailwind CSS** – Utility-first styling.
* **Framer Motion** – Orchestration for scroll reveals and micro-interactions.
* **Lenis** – Smooth scroll engine for organic navigation inertia.
* **Vite** – Ultra-fast build tool and development server.

---

## 🛠️ Architecture & Components

The project follows a **"Master Wrapper"** pattern to ensure perfect alignment and consistency across all sections:

* **`SectionWrapper.jsx`**: Handles responsive max-width (up to `3xl` screens), adaptive padding, and automatic scroll-reveal integration.
* **`Reveal.jsx`**: A high-order utility using `framer-motion` to trigger entrance animations as elements enter the viewport.
* **`SmoothScroll.jsx`**: Seamless Lenis integration to provide a premium "Apple-like" scroll feel on desktop.

---

## ⚡ Performance Optimization (Core Web Vitals)

### 1. Image Optimization (LCP)

Heavy PNG assets were converted to **WebP** via FFmpeg, reducing payload size by over **75%** without visual degradation.

* **LCP Priority:** Critical assets (Hero/Banner) use `fetchpriority="high"` and `loading="eager"`.
* **Modern Formats:** Standardized on WebP for hardware renders and transparency support.

### 2. Iframe "Scroll Trap" Fix

The Video section implements a smart `pointer-events` toggle. This prevents the YouTube iframe from hijacking the mouse wheel, ensuring the smooth scroll remains uninterrupted while allowing interaction on click.

### 3. FFmpeg Workflow

Mass optimization via PowerShell:

```powershell
ls *.png | foreach { ffmpeg -i $_.Name -vcodec libwebp -lossless 0 -q:v 80 ($_.BaseName + ".webp") }

```

---

## 📦 Getting Started

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/mynode-model2.git

```


2. **Install dependencies:**
```bash
npm install

```


3. **Run development server:**
```bash
npm run dev

```



---

## 🎨 Design Language

* **Palette:** Deep Black (`#000000`) background, `orange-500` accents, and `zinc` secondary text.
* **Effects:** Subtle glassmorphism (`backdrop-blur`), low-opacity borders (`border-white/10`), and **Ambient Glow** layers for depth.
* **Typography:** Clean Sans-serif with aggressive letter-spacing (`tracking-widest`) on small headers for an industrial, high-end aesthetic.

---

