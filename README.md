# High-End Scrollytelling Personal Portfolio

A premium, interactive personal portfolio website designed to showcase digital experiences, blending 3D-like scrollytelling sequences with modern glassmorphism UI elements.

![Portfolio Preview](./public/preview-demo.png) *(Preview snapshot representation)*

## ✨ Key Features

- **HTML5 Canvas Scrollytelling**: An ultra-smooth, scroll-driven sequence of 120 high-quality images rendering seamlessly on a `500vh` sticky canvas, providing a 3D video-scrubbing illusion without the weight of `<video>` tags.
- **Framer Motion Parallax**: Cinematic entrance and exit animations for typography and UI elements perfectly synced to the user's scroll depth (`scrollYProgress`).
- **Retina Displays Optimization**: Dynamic internal resolution upscaling calculation (`window.devicePixelRatio`) to guarantee butter-smooth vector-like crispness across all mobile and high-end workstation displays.
- **Glassmorphism Projects Grid**: An advanced, beautifully crafted glass UI featuring thin borders (`border-white/10`), ambient radial glow states on hover, and structural blurring (`backdrop-blur-xl`).
- **Tailwind CSS & Next.js 14**: Built heavily on the modern App Router architecture, ensuring high performance, layout preservation, and highly composable styling out of the box.

## 🚀 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, React Server Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Animation Engine**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Graphics**: Vanilla HTML5 `<canvas>` Context API
- **Icons**: [Lucide React](https://lucide.dev/)

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/JeswinJestin/Demo_3D-Scroll-Portfolio.git
   cd Demo_3D-Scroll-Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   *or if utilizing yarn/pnpm:* `yarn install` / `pnpm install`

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Experience the Build**:
   Navigate to `http://localhost:3000` in your browser. Scroll slowly to experience the sequence!

## 📂 Project Structure

- `src/components/ScrollyCanvas.tsx`: The core logic dictating how the 120 `webp` frames are sequentially fetched in the background and rendered pixel-perfectly matching scroll behavior.
- `src/components/Overlay.tsx`: The parallax floating text sections mapping to percentages (0-20%, 30-45%, 60-80%).
- `src/components/Projects.tsx`: The curated digital works grid leveraging interactive glass states.
- `src/components/Navbar.tsx`: Global navigation interface.
- `src/components/SectionDivider.tsx`: Visual breaker bridging the immersive canvas and static data components.
- `public/sequence/`: Internal directory hosting the optimized sequence frames.

## 🤝 Contribution

This repository is primarily a personal creative endeavor, but suggestions, tips, and structural refactors to enhance framerates or reduce Main Thread blocking are always highly appreciated! Feel free to open an issue or fork the project.

---
*Coded with precision to bridge design and engineering.*
