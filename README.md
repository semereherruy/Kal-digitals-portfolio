# Kal Digitals — Digital Agency Landing Page

**Kal Digitals** is a premium, high-performance digital agency landing page built with Next.js 16, React 19, and Framer Motion. The site features multilingual support (English, Tigrinya & Amharic), modern glassmorphism aesthetics, smooth animations, and interactive 3D elements powered by Three.js.

---

## ✨ Features

- 🌐 **Multilingual** — Full support for English, Tigrinya, and Amharic with language switching
- 🎬 **Framer Motion Animations** — Smooth entrance, scroll-triggered, and micro-interaction animations
- 🌌 **3D Visuals** — Immersive React Three Fiber / Drei powered 3D hero section
- 🎨 **Premium UI** — Glassmorphism cards, gradient surfaces, and refined color palette (navy, cream, gold)
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop
- ⚡ **Next.js 16 App Router** — Modern React Server Components with Turbopack
- 🧩 **TailwindCSS v4** — Utility-first styling with CSS custom properties (design tokens)
- 💬 **Modern Contact Form** — Glassmorphism form with input animations, validation, and status feedback
- 🦶 **Polished Footer** — Multi-column layout with social links, navigation, and smooth hover effects
- 🔄 **Smooth Scrolling** — Lenis-powered buttery smooth scroll navigation

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.2.3 | React framework with App Router |
| React | 19.2.4 | UI library |
| TypeScript | ^5 | Type safety |
| TailwindCSS | ^4 | Utility-first styling |
| Framer Motion | ^12 | Animations & transitions |
| Three.js | ^0.183 | 3D rendering engine |
| React Three Fiber | ^9 | React renderer for Three.js |
| Drei | ^10 | Three.js helper components |
| Lucide React | ^1 | Icon library |
| Clsx | ^2 | Conditional classnames |
| Tailwind Merge | ^3 | Tailwind class merging |

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
├── public/                    # Static assets (images, fonts, icons)
├── src/
│   ├── app/                   # Next.js App Router (pages, layouts, globals.css)
│   │   ├── layout.tsx         # Root layout with font configuration
│   │   ├── page.tsx           # Homepage (assembles all sections)
│   │   └── globals.css        # Global styles + design tokens
│   ├── components/            # Reusable UI components
│   │   ├── Hero.tsx           # 3D animated hero section
│   │   ├── Navbar.tsx         # Fixed navigation bar
│   │   ├── Contact.tsx        # Modern glassmorphism contact form
│   │   ├── Footer.tsx         # Enhanced multi-column footer
│   │   ├── Services.tsx       # Services showcase
│   │   ├── Portfolio.tsx      # Work gallery
│   │   ├── About.tsx          # About section
│   │   ├── Process.tsx        # Workflow steps
│   │   ├── WhyChooseUs.tsx    # Value propositions
│   │   ├── Testimonials.tsx   # Client testimonials
│   │   ├── TrustStrip.tsx     # Trust indicators
│   │   ├── CTA.tsx            # Call-to-action banner
│   │   └── ui/                # Base UI components (Skeleton, etc.)
│   ├── contexts/              # React contexts
│   │   └── LanguageContext.tsx # i18n provider
│   ├── data/                  # Static content
│   │   └── siteContent.ts     # Contact info & copy for all languages
│   ├── lib/                   # Shared utilities
│   │   └── utils.ts           # cn, smoothScrollTo, Framer Motion variants
│   └── types/                 # TypeScript types (if present)
├── .eslintrc.json             # ESLint configuration
├── next.config.ts             # Next.js configuration
├── tailwind.config.*          # TailwindCSS configuration (if present)
├── tsconfig.json              # TypeScript configuration
├── package.json               # Dependencies & scripts
└── README.md                  # Project documentation
```

---

## 🧾 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server with Turbopack |
| `npm run build` | Create optimized production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint code quality checks |

---

## 🌍 Localization

The site supports three languages:

- 🇬🇧 **English** (default)
- 🇪🇷 **Tigrinya** (`ti`)
- 🇪🇹 **Amharic** (`am`)

Language strings are managed via the `translations` object in `src/data/siteContent.ts`. Each component uses the `useLanguage()` hook to access the `t()` function for translations.

To add a new language:
1. Add language key to the `Language` type in `LanguageContext.tsx`
2. Extend the `translations` object with translated strings
3. Language switcher UI (if present) will auto-display new option

---

## 🎨 Design Tokens

The site uses CSS custom properties defined in `globals.css` for consistent theming:

- `--navy`, `--navy-mid`, `--navy-light` — Deep blue palette
- `--cream`, `--cream-dark` — Warm off-white backgrounds
- `--gold`, `--gold-light`, `--gold-dim` — Ethiopian-inspired accent
- `--terra`, `--terra-light` — Terracotta accent color
- `--teal`, `--teal-light` — Complementary accent
- `--text-primary`, `--text-secondary`, `--text-muted` — Text colors
- `--shadow-sm`, `--shadow-md`, `--shadow-lg` — Elevation system
- `--shadow-gold` — Gold-tinted glow for highlights
- `--radius-sm` – `--radius-xl` — Border radius scale
- `--font-sans`, `--font-serif`, `--font-ethiopic` — Typefaces

---

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to a GitHub repository.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js and configures the build settings.

### Self-Hosting

```bash
npm run build
npm run start
```

The production server starts at `http://localhost:3000`.

---

## 📄 License

This project is proprietary. All rights reserved © Kal Digitals.

---

## 🙋 Support

For issues, feature requests, or collaboration inquiries, reach out via the contact section on the live site or email **hello@kaldigitals.com**.
