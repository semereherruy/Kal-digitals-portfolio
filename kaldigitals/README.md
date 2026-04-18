# Kal Digitals — Agency Landing Page

**Kal Digitals** is a modern, high-performance digital agency landing page built with Next.js 16, React 19, and Framer Motion. The site features multilingual support (English, Tigrinya & Amharic), premium glassmorphism aesthetics, and interactive 3D elements powered by Three.js.

---

## ✨ Features

- 🌐 **Multilingual** — Full support for English, Tigrinya, and Amharic
- 🎬 **Framer Motion Animations** — Smooth entrance, scroll, and micro-interaction animations
- 🌌 **3D Visuals** — React Three Fiber / Drei powered 3D hero section
- 🎨 **Premium UI** — Glassmorphism cards, gradient typography, and dark-mode-first design
- 📱 **Fully Responsive** — Mobile, tablet, and desktop layouts
- ⚡ **Next.js 16 App Router** — File-based routing with React Server Components
- 🧩 **TailwindCSS v4** — Utility-first styling with modern PostCSS pipeline

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.2.3 | React framework & routing |
| React | 19.2.4 | UI library |
| TypeScript | ^5 | Type safety |
| TailwindCSS | ^4 | Styling |
| Framer Motion | ^12 | Animations |
| Three.js | ^0.183 | 3D rendering |
| React Three Fiber | ^9 | React renderer for Three.js |
| Drei | ^10 | Three.js helper components |
| Lucide React | ^1 | Icon set |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or later
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd kaldigitals

# Install dependencies
npm install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

---

## 📁 Project Structure

```
kaldigitals/
├── public/               # Static assets (images, fonts, icons)
├── src/
│   ├── app/              # Next.js App Router pages & layouts
│   ├── components/       # Reusable UI components
│   │   ├── Hero.tsx      # 3D animated hero section
│   │   └── ...           # Other sections (Services, Portfolio, etc.)
│   └── styles/           # Global CSS and design tokens
├── next.config.ts        # Next.js configuration
├── tailwind.config.*     # TailwindCSS configuration
└── tsconfig.json         # TypeScript configuration
```

---

## 🧾 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint code checks |

---

## 🌍 Localization

The site supports three languages:

- 🇬🇧 **English** (default)
- 🇪🇷 **Tigrinya** (`ti`)
- 🇪🇹 **Amharic** (`am`)

Language strings are managed via the component-level `translations` object. To add or modify translations, update the relevant section in each component file.

---

## 📦 Deployment

The recommended way to deploy is via **[Vercel](https://vercel.com)**:

1. Push your code to a GitHub repository.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Vercel will auto-detect Next.js and configure the build settings.

Alternatively, you can build and self-host:

```bash
npm run build
npm run start
```

---

## 📄 License

This project is proprietary. All rights reserved © Kal Digitals.
