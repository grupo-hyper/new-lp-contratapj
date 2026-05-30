# ContrataPJ Clone — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Next.js + TypeScript + Tailwind + shadcn/ui clone of https://contratapj.com.br with identical content and visually faithful design.

**Architecture:** Next.js App Router with static pages, content stored in typed TS modules, images downloaded to `public/`, shadcn/ui for primitives, Tailwind for styling. No CMS or backend — fully static.

**Tech Stack:** Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui, lucide-react (icons), next/font (Google Fonts), next/image.

**Working directory:** `/Users/yourdev/Desktop/Segundo-Cerebro/Landing Pages/Contrata PJ` (referred to as `$ROOT` below).

---

## Phase 1 — Project Setup

### Task 1.1: Initialize Next.js project

**Files:**
- Create: `$ROOT/package.json`, `$ROOT/tsconfig.json`, `$ROOT/next.config.js`, `$ROOT/tailwind.config.ts`, `$ROOT/app/`

- [ ] **Step 1: Bootstrap Next.js in the existing folder**

```bash
cd "/Users/yourdev/Desktop/Segundo-Cerebro/Landing Pages/Contrata PJ"
# Folder is not empty (has DESIGN.md, plans/, index.html). Init Next in place.
npx create-next-app@latest . --typescript --tailwind --app --eslint --src-dir=false --import-alias="@/*" --use-npm --yes
```

If `create-next-app` refuses on non-empty dir, move existing files temporarily:

```bash
mkdir -p _staging
mv DESIGN.md plans index.html .claude _staging/
npx create-next-app@latest . --typescript --tailwind --app --eslint --src-dir=false --import-alias="@/*" --use-npm --yes
mv _staging/* _staging/.claude .
rmdir _staging
```

- [ ] **Step 2: Verify dev server boots**

```bash
npm run dev
```

Expected: server starts on http://localhost:3000 (or 3001 if 3000 is busy). Open it and see the default Next.js welcome page. Then stop with Ctrl+C.

- [ ] **Step 3: Initial commit**

```bash
git init
git add -A
git commit -m "chore: scaffold Next.js + TypeScript + Tailwind project"
```

---

### Task 1.2: Install shadcn/ui

**Files:**
- Create: `$ROOT/components/ui/`, `$ROOT/lib/utils.ts`, `$ROOT/components.json`

- [ ] **Step 1: Init shadcn/ui**

```bash
npx shadcn@latest init -d
```

When prompted, accept defaults: style=default, baseColor=slate, cssVariables=yes.

- [ ] **Step 2: Add the components we'll need**

```bash
npx shadcn@latest add button card accordion sheet dialog
```

- [ ] **Step 3: Install icons**

```bash
npm install lucide-react
```

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore: add shadcn/ui components and lucide-react"
```

---

### Task 1.3: Configure fonts and theme colors

**Files:**
- Modify: `$ROOT/app/layout.tsx`
- Modify: `$ROOT/app/globals.css`
- Modify: `$ROOT/tailwind.config.ts`

- [ ] **Step 1: Set up Google Fonts (Plus Jakarta Sans + Outfit) in `app/layout.tsx`**

Replace the existing `import { Inter }` and `Inter({...})` lines with:

```tsx
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700"],
});
```

Then update the `<html>` element to apply the font variables:

```tsx
<html lang="pt-BR" className={`${jakarta.variable} ${outfit.variable}`}>
  <body className="font-sans">{children}</body>
</html>
```

Also update `metadata`:

```tsx
export const metadata: Metadata = {
  title: "ContrataPJ — Gestão de Contratos PJ",
  description: "O 1º sistema de gestão PJ's do Brasil. O mais completo e eficiente!",
};
```

- [ ] **Step 2: Extend Tailwind config**

In `tailwind.config.ts`, inside `theme.extend`, add:

```ts
fontFamily: {
  sans: ['var(--font-jakarta)', 'sans-serif'],
  heading: ['var(--font-outfit)', 'sans-serif'],
},
colors: {
  brand: {
    50: '#eff6ff',
    100: '#dbeafe',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#0c1f5c',
  },
},
```

Note: exact brand colors will be tuned in Phase 6 when comparing to original.

- [ ] **Step 3: Verify font loads**

```bash
npm run dev
```

Open http://localhost:3000 — text should now be in Plus Jakarta Sans (not the default Geist). Stop server.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: configure Plus Jakarta Sans + Outfit fonts and brand colors"
```

---

## Phase 2 — Content Collection

### Task 2.1: Download all images from original site

**Files:**
- Create: `$ROOT/scripts/download-assets.ts`
- Create: `$ROOT/public/images/` (target directory)

- [ ] **Step 1: Create the download script**

Create `scripts/download-assets.ts`:

```ts
import fs from "node:fs/promises";
import path from "node:path";
import https from "node:https";

const IMAGES = [
  // Logos
  "2025/03/LOGOB.png",
  "2025/03/Logo.png",
  // Brand mentions
  "2025/07/323634_1689418867.png",
  "2025/07/622105211f288975177934bd_GPinho-Normal.png",
  "2025/07/Allied-IT-colorido-1.png",
  "2025/07/Investidores.vc_-1-1.png",
  "2025/07/Logotipo_Solida_Sin_Tagline_RGB_Positivo_Color_Alta-1024x322-1.png",
  "2025/07/logo-proesc-Natalia-Mendonca-1-e1769459604184.png",
  "2025/07/logo2.png",
  // Hero background
  "2025/07/bg-banner_home.png",
  // Feature/section images
  "2025/07/img-home-contract.png",
  "2025/07/img-home-dash1-1024x765.png",
  "2025/07/img-home-dash2-1024x765.png",
  "2025/07/img-home-dash3-1024x765.png",
  "2025/07/img-home-notas-1.png",
  "2025/07/img-cta-final-1.png",
  // UI icons / decorations
  "2025/07/check.png",
  "2025/07/Rectangle-3.png",
  "2025/07/Rectangle-3-1.png",
  "2025/07/Rectangle-3-2.png",
  "2025/07/Rectangle-3-3.png",
  "2025/07/Rectangle-3-4.png",
  "2025/07/Rectangle-3-5.png",
];

const BASE = "https://contratapj.com.br/wp-content/uploads/";
const OUT_DIR = path.join(process.cwd(), "public", "images");

function download(url: string, dest: string): Promise<void> {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return download(res.headers.location, dest).then(resolve, reject);
        }
        if (res.statusCode !== 200) {
          return reject(new Error(`${res.statusCode} ${url}`));
        }
        const chunks: Buffer[] = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", async () => {
          await fs.writeFile(dest, Buffer.concat(chunks));
          resolve();
        });
      })
      .on("error", reject);
  });
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  for (const rel of IMAGES) {
    const url = BASE + rel;
    const name = path.basename(rel);
    const dest = path.join(OUT_DIR, name);
    try {
      await download(url, dest);
      console.log("✓", name);
    } catch (err) {
      console.error("✗", name, (err as Error).message);
    }
  }
}

main();
```

- [ ] **Step 2: Install tsx to run TS scripts**

```bash
npm install -D tsx
```

- [ ] **Step 3: Run the download script**

```bash
npx tsx scripts/download-assets.ts
```

Expected: lines like `✓ Logo.png`, `✓ bg-banner_home.png`, etc. for each image. Check `ls public/images/` shows ~23 files.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore: download original site images to public/images"
```

---

### Task 2.2: Create content module with all texts

**Files:**
- Create: `$ROOT/lib/content.ts`

- [ ] **Step 1: Create `lib/content.ts` with typed content**

```ts
export const SITE = {
  name: "ContrataPJ",
  tagline: "Gestão simplificada",
  whatsapp: "https://api.whatsapp.com/send/?phone=5521999508940&text=Olá%2C+gostaria+de+falar+com+um+vendedor%21",
  loginUrl: "https://app.contratapj.com.br/login",
  videoId: "sfZpi_Ue9is", // YouTube video ID on the home hero
};

export const NAV = [
  { label: "Funcionalidades", href: "/funcionalidades" },
  { label: "Planos", href: "/planos" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
  { label: "Central de Ajuda", href: "/central-de-ajuda" },
];

export const HOME = {
  hero: {
    title: "O 1º sistema de gestão PJ's do Brasil!",
    titleHighlight: "O mais completo e eficiente!",
    description:
      "A ContrataPJ permite monitorar seus PJs, criar contratos automaticamente, receber notas fiscais na data desejada, pagar todas as notas com apenas 1 boleto, deixando você livre para se preocupar com o que realmente importa.",
    ctaLabel: "Solicitar demonstração",
  },
  features: [
    {
      title: "Gestão de PJs",
      description:
        "Centralize informações de todos os seus prestadores PJ em um único lugar com dashboards em tempo real.",
      image: "/images/img-home-dash1-1024x765.png",
    },
    {
      title: "Contratos automáticos",
      description:
        "Crie contratos PJ de forma automatizada, com modelos personalizados e assinatura digital integrada.",
      image: "/images/img-home-contract.png",
    },
    {
      title: "Notas fiscais",
      description:
        "Receba todas as notas fiscais dos seus PJs nas datas combinadas, com lembretes e verificação automática.",
      image: "/images/img-home-notas-1.png",
    },
    {
      title: "Pagamento centralizado",
      description:
        "Pague todas as notas fiscais com apenas 1 boleto consolidado, simplificando seu financeiro.",
      image: "/images/img-home-dash2-1024x765.png",
    },
  ],
  brandLogos: [
    "/images/Logotipo_Solida_Sin_Tagline_RGB_Positivo_Color_Alta-1024x322-1.png",
    "/images/Allied-IT-colorido-1.png",
    "/images/Investidores.vc_-1-1.png",
    "/images/622105211f288975177934bd_GPinho-Normal.png",
    "/images/logo-proesc-Natalia-Mendonca-1-e1769459604184.png",
    "/images/logo2.png",
  ],
  faq: [
    {
      question: "Preciso mudar minha forma de pagamento ou sistema financeiro atual?",
      answer:
        "Não. O ContrataPJ se integra ao seu fluxo financeiro atual — você continua usando seus sistemas, e o nosso consolida tudo num boleto único.",
    },
    {
      question: "O sistema é seguro e está em conformidade com a LGPD?",
      answer:
        "Sim. Seguimos as melhores práticas de segurança e somos totalmente aderentes à Lei Geral de Proteção de Dados (LGPD).",
    },
    // Additional FAQs will be added in Task 4.6 after scraping the original
  ],
} as const;

export const PRICING = {
  // To be filled in Task 5.2 (Planos page) after scraping prices from original
  plans: [] as Array<{ name: string; price: string; features: string[]; ctaLabel: string }>,
};
```

- [ ] **Step 2: Verify it compiles**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add content module with home page texts and site config"
```

---

## Phase 3 — Global Layout

### Task 3.1: Build Header component

**Files:**
- Create: `$ROOT/components/layout/Header.tsx`

- [ ] **Step 1: Create the Header component**

```tsx
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { NAV, SITE } from "@/lib/content";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur border-b">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/Logo.png"
            alt="ContrataPJ"
            width={140}
            height={40}
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 hover:text-brand-700 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button asChild variant="default" size="sm" className="bg-brand-900 hover:bg-brand-800">
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
              Solicitar Demonstração
            </a>
          </Button>
          <Button asChild variant="outline" size="sm">
            <a href={SITE.loginUrl} target="_blank" rel="noopener noreferrer">
              Login
            </a>
          </Button>
        </div>

        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
```

---

### Task 3.2: Build MobileMenu component

**Files:**
- Create: `$ROOT/components/layout/MobileMenu.tsx`

- [ ] **Step 1: Create MobileMenu using shadcn Sheet**

```tsx
"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import { NAV, SITE } from "@/lib/content";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Abrir menu">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="mt-6 flex flex-col gap-4">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-medium text-slate-800 hover:text-brand-700"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-2">
            <Button asChild className="bg-brand-900 hover:bg-brand-800">
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                Solicitar Demonstração
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={SITE.loginUrl} target="_blank" rel="noopener noreferrer">
                Login
              </a>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
```

---

### Task 3.3: Build Footer component

**Files:**
- Create: `$ROOT/components/layout/Footer.tsx`

- [ ] **Step 1: Create Footer**

```tsx
import Link from "next/link";
import Image from "next/image";
import { NAV } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <Image
            src="/images/LOGOB.png"
            alt="ContrataPJ"
            width={160}
            height={45}
          />
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            O 1º sistema de gestão PJ's do Brasil. Centralize, automatize e simplifique a gestão dos seus PJs.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white mb-3">Navegação</h4>
          <ul className="space-y-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/politica-de-privacidade" className="text-sm hover:text-white">
                Política de Privacidade
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white mb-3">Contato</h4>
          <p className="text-sm">contato@contratapj.com.br</p>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} ContrataPJ. Todos os direitos reservados.
      </div>
    </footer>
  );
}
```

---

### Task 3.4: Build WhatsAppButton (floating)

**Files:**
- Create: `$ROOT/components/layout/WhatsAppButton.tsx`

- [ ] **Step 1: Create the floating WhatsApp button**

```tsx
import { SITE } from "@/lib/content";

export function WhatsAppButton() {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg hover:bg-green-600 transition-colors"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 text-white" fill="currentColor">
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.86 2.722.86.36 0 1.45-.43 1.747-.974.227-.418.227-.747.227-.747-.057-.286-.286-.43-.516-.602-.215-.144-.49-.34-.745-.486zM16 6.49c-5.245 0-9.5 4.255-9.5 9.5 0 1.832.516 3.55 1.404 5.01L7 25.5l4.595-.886a9.466 9.466 0 0 0 4.405 1.083c5.245 0 9.5-4.255 9.5-9.5S21.245 6.49 16 6.49z" />
      </svg>
    </a>
  );
}
```

---

### Task 3.5: Wire global layout

**Files:**
- Modify: `$ROOT/app/layout.tsx`

- [ ] **Step 1: Update root layout to include Header, Footer, WhatsAppButton**

```tsx
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
});
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ContrataPJ — Gestão de Contratos PJ",
  description:
    "O 1º sistema de gestão PJ's do Brasil. O mais completo e eficiente!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${outfit.variable}`}>
      <body className="font-sans bg-white text-slate-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
npm run dev
```

Open http://localhost:3000. Expected:
- Header with logo + nav links + 2 buttons (Solicitar Demonstração, Login)
- Default Next.js page content in the middle (until home is built)
- Footer at the bottom with 3 columns
- Floating green WhatsApp button bottom-right
- Resize to mobile width → menu hamburger appears, click opens drawer

Stop server.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: build global layout (Header, MobileMenu, Footer, WhatsApp button)"
```

---

## Phase 4 — Home Page

### Task 4.1: Build Hero section

**Files:**
- Create: `$ROOT/components/sections/Hero.tsx`

- [ ] **Step 1: Create Hero with title, description, CTA, and YouTube video**

```tsx
import { Button } from "@/components/ui/button";
import { HOME, SITE } from "@/lib/content";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-brand-900 text-white"
      style={{
        backgroundImage: "url('/images/bg-banner_home.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 py-24 lg:py-32 flex flex-col items-center text-center">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
          {HOME.hero.title}
          <br />
          <span className="font-bold">{HOME.hero.titleHighlight}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base md:text-lg text-white/90">
          {HOME.hero.description}
        </p>
        <Button
          asChild
          size="lg"
          className="mt-10 bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 py-6 text-base"
        >
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
            {HOME.hero.ctaLabel}
          </a>
        </Button>

        <div className="mt-14 w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-2xl">
          <iframe
            src={`https://www.youtube.com/embed/${SITE.videoId}`}
            title="ContrataPJ apresentação"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
```

---

### Task 4.2: Build Features section

**Files:**
- Create: `$ROOT/components/sections/Features.tsx`

- [ ] **Step 1: Create Features grid**

```tsx
import Image from "next/image";
import { HOME } from "@/lib/content";

export function Features() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-slate-900 max-w-3xl mx-auto">
          Tudo o que você precisa para gerenciar seus PJs em um só lugar
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {HOME.features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 mb-4">
                <Image
                  src={f.image}
                  alt={f.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading text-xl font-semibold text-slate-900">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### Task 4.3: Build BrandStrip (logos of companies)

**Files:**
- Create: `$ROOT/components/sections/BrandStrip.tsx`

- [ ] **Step 1: Create brand logos strip**

```tsx
import Image from "next/image";
import { HOME } from "@/lib/content";

export function BrandStrip() {
  return (
    <section className="py-12 bg-white border-y">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm uppercase tracking-wider text-slate-500 mb-8">
          Empresas que confiam na ContrataPJ
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 grayscale opacity-80">
          {HOME.brandLogos.map((logo) => (
            <Image
              key={logo}
              src={logo}
              alt="Logo cliente"
              width={140}
              height={48}
              className="h-10 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### Task 4.4: Build CTASection

**Files:**
- Create: `$ROOT/components/sections/CTASection.tsx`

- [ ] **Step 1: Create final call-to-action section**

```tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/content";

export function CTASection() {
  return (
    <section className="py-20 bg-brand-900 text-white">
      <div className="container mx-auto px-4 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight">
            Pronto para simplificar a gestão dos seus PJs?
          </h2>
          <p className="mt-4 text-white/85 text-base md:text-lg">
            Fale com um especialista e veja na prática como a ContrataPJ pode transformar seu processo.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-white text-brand-900 hover:bg-slate-100 rounded-full px-8 py-6"
          >
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
              Solicitar Demonstração
            </a>
          </Button>
        </div>
        <div className="relative h-72 md:h-96">
          <Image
            src="/images/img-cta-final-1.png"
            alt="ContrataPJ"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
```

---

### Task 4.5: Build FAQ section

**Files:**
- Create: `$ROOT/components/sections/FAQ.tsx`

- [ ] **Step 1: Create FAQ using shadcn Accordion**

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HOME } from "@/lib/content";

export function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-slate-900">
          Perguntas frequentes
        </h2>
        <Accordion type="single" collapsible className="mt-10">
          {HOME.faq.map((item, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-left text-base font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-slate-600 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
```

---

### Task 4.6: Scrape additional FAQ entries from original

**Files:**
- Modify: `$ROOT/lib/content.ts` (extend `HOME.faq`)

- [ ] **Step 1: Extract all FAQ questions and answers from the homepage HTML**

```bash
curl -s https://contratapj.com.br -A "Mozilla/5.0" --max-time 30 -o /tmp/original.html
grep -oE 'e-n-accordion-item-title-text[^<]*<[^>]+> [^<]+' /tmp/original.html | sed 's/.*> //' | head -20
```

Manually review the output to identify all question texts; for each, locate the matching answer in the HTML (search for the question, then find the content of its `e-n-accordion-content`).

- [ ] **Step 2: Add all entries to `lib/content.ts`**

Edit `HOME.faq` to include every FAQ entry from the original (at least 5-8 entries typically). Use the same shape:

```ts
{ question: "...", answer: "..." }
```

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: populate all home FAQ entries from original site"
```

---

### Task 4.7: Compose Home page

**Files:**
- Modify: `$ROOT/app/page.tsx`

- [ ] **Step 1: Replace default home with composed sections**

```tsx
import { Hero } from "@/components/sections/Hero";
import { BrandStrip } from "@/components/sections/BrandStrip";
import { Features } from "@/components/sections/Features";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandStrip />
      <Features />
      <CTASection />
      <FAQ />
    </>
  );
}
```

- [ ] **Step 2: Verify visually**

```bash
npm run dev
```

Open http://localhost:3000. Check all sections render in order: Hero with video → BrandStrip → Features grid → CTASection → FAQ accordion. Compare side-by-side with https://contratapj.com.br — visual flow should match. Note any obvious discrepancies (spacing, colors, alignment) for Phase 6 polish.

Stop server.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: compose home page with hero, features, brands, CTA, FAQ"
```

---

## Phase 5 — Other Pages

### Task 5.1: Funcionalidades page

**Files:**
- Create: `$ROOT/app/funcionalidades/page.tsx`
- Modify: `$ROOT/lib/content.ts` (add `FEATURES_PAGE` export)

- [ ] **Step 1: Scrape content from original**

```bash
curl -s https://contratapj.com.br/funcionalidades -A "Mozilla/5.0" --max-time 30 -o /tmp/funcionalidades.html
```

Inspect for section headlines, descriptions, images. Look for anchors `#contratos`, `#dashboard`, `#gestao-pj`, `#notas`, `#pagamento` — these are the 5 main feature sections.

- [ ] **Step 2: Add structured content to `lib/content.ts`**

```ts
export const FEATURES_PAGE = {
  hero: {
    title: "Funcionalidades",
    subtitle: "Todas as ferramentas para gerir seus PJs em uma plataforma",
  },
  sections: [
    {
      id: "gestao-pj",
      title: "Gestão de PJ's",
      description: "...", // copy from original
      image: "/images/img-home-dash1-1024x765.png",
    },
    {
      id: "contratos",
      title: "Contratos",
      description: "...",
      image: "/images/img-home-contract.png",
    },
    {
      id: "notas",
      title: "Notas Fiscais",
      description: "...",
      image: "/images/img-home-notas-1.png",
    },
    {
      id: "pagamento",
      title: "Pagamento",
      description: "...",
      image: "/images/img-home-dash2-1024x765.png",
    },
    {
      id: "dashboard",
      title: "Dashboard",
      description: "...",
      image: "/images/img-home-dash3-1024x765.png",
    },
  ],
};
```

Fill `description` with actual content scraped from the original page.

- [ ] **Step 3: Create the page**

```tsx
import Image from "next/image";
import { FEATURES_PAGE } from "@/lib/content";

export default function FuncionalidadesPage() {
  return (
    <>
      <section className="py-20 bg-brand-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold">
            {FEATURES_PAGE.hero.title}
          </h1>
          <p className="mt-4 text-lg text-white/85 max-w-2xl mx-auto">
            {FEATURES_PAGE.hero.subtitle}
          </p>
        </div>
      </section>

      {FEATURES_PAGE.sections.map((s, idx) => (
        <section
          key={s.id}
          id={s.id}
          className={`py-20 ${idx % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
        >
          <div
            className={`container mx-auto px-4 grid gap-10 md:grid-cols-2 items-center ${
              idx % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
            }`}
          >
            <Image
              src={s.image}
              alt={s.title}
              width={1024}
              height={765}
              className="rounded-xl shadow-lg"
            />
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900">
                {s.title}
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                {s.description}
              </p>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
```

- [ ] **Step 4: Verify and commit**

```bash
npm run dev   # check at http://localhost:3000/funcionalidades
```

```bash
git add -A
git commit -m "feat: add Funcionalidades page"
```

---

### Task 5.2: Planos page

**Files:**
- Create: `$ROOT/app/planos/page.tsx`
- Modify: `$ROOT/lib/content.ts` (populate `PRICING.plans`)

- [ ] **Step 1: Scrape plans from original**

```bash
curl -s https://contratapj.com.br/planos -A "Mozilla/5.0" --max-time 30 -o /tmp/planos.html
```

Identify each plan card: name, price, features list, CTA label.

- [ ] **Step 2: Populate `PRICING.plans` in `lib/content.ts`**

```ts
export const PRICING = {
  plans: [
    {
      name: "Essencial",
      price: "R$ X/mês",
      features: ["..."], // copy from original
      ctaLabel: "Solicitar demonstração",
    },
    // ... more plans
  ],
};
```

- [ ] **Step 3: Create the Planos page**

```tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PRICING, SITE } from "@/lib/content";
import { Check } from "lucide-react";

export default function PlanosPage() {
  return (
    <>
      <section className="py-20 bg-brand-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold">Planos</h1>
          <p className="mt-4 text-lg text-white/85">
            Escolha o plano ideal para o tamanho da sua operação.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 grid gap-6 md:grid-cols-3">
          {PRICING.plans.map((plan) => (
            <Card key={plan.name} className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">{plan.name}</CardTitle>
                <div className="mt-2 text-3xl font-bold text-brand-900">
                  {plan.price}
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 flex-1">
                <ul className="space-y-2 flex-1">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-brand-900 hover:bg-brand-800">
                  <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                    {plan.ctaLabel}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 4: Verify and commit**

```bash
git add -A
git commit -m "feat: add Planos page"
```

---

### Task 5.3: Contato page

**Files:**
- Create: `$ROOT/app/contato/page.tsx`

- [ ] **Step 1: Create static Contato page (no real form backend per design — basic functional only)**

```tsx
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/content";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function ContatoPage() {
  return (
    <>
      <section className="py-20 bg-brand-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold">Contato</h1>
          <p className="mt-4 text-lg text-white/85 max-w-2xl mx-auto">
            Estamos aqui para te ajudar. Fale com a gente pelo canal que preferir.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid gap-8 md:grid-cols-3 max-w-5xl">
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 rounded-2xl border bg-slate-50 hover:bg-slate-100 transition-colors"
          >
            <MessageCircle className="h-10 w-10 text-green-600" />
            <h3 className="mt-4 font-heading text-xl font-semibold">WhatsApp</h3>
            <p className="mt-2 text-sm text-slate-600">
              Resposta rápida pelo nosso canal oficial.
            </p>
          </a>
          <a
            href="mailto:contato@contratapj.com.br"
            className="block p-6 rounded-2xl border bg-slate-50 hover:bg-slate-100 transition-colors"
          >
            <Mail className="h-10 w-10 text-brand-700" />
            <h3 className="mt-4 font-heading text-xl font-semibold">E-mail</h3>
            <p className="mt-2 text-sm text-slate-600">
              contato@contratapj.com.br
            </p>
          </a>
          <div className="p-6 rounded-2xl border bg-slate-50">
            <Phone className="h-10 w-10 text-brand-700" />
            <h3 className="mt-4 font-heading text-xl font-semibold">Telefone</h3>
            <p className="mt-2 text-sm text-slate-600">(21) 99950-8940</p>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-12 text-center">
          <Button asChild size="lg" className="bg-brand-900 hover:bg-brand-800 rounded-full px-8">
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
              Solicitar demonstração agora
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Verify and commit**

```bash
git add -A
git commit -m "feat: add Contato page"
```

---

### Task 5.4: Blog index and dynamic post page

**Files:**
- Create: `$ROOT/app/blog/page.tsx`
- Create: `$ROOT/app/blog/[slug]/page.tsx`
- Create: `$ROOT/lib/blog-posts.ts`
- Create: `$ROOT/components/sections/BlogCard.tsx`

- [ ] **Step 1: Scrape blog post list from original**

```bash
curl -s https://contratapj.com.br/blog -A "Mozilla/5.0" --max-time 30 -o /tmp/blog.html
```

Identify each post card: title, slug (URL path after `/blog/`), date, excerpt, cover image URL.

- [ ] **Step 2: Create `lib/blog-posts.ts`**

```ts
export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  cover: string;
  content: string; // HTML
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "como-calcular-iva-contrato-pj",
    title: "Como calcular o IVA no contrato PJ",
    date: "2025-...",
    excerpt: "...",
    cover: "/images/blog/como-calcular-iva.jpg",
    content: "<p>...</p>", // scraped HTML
  },
  // ... more posts
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
```

For each post: fetch `curl -s https://contratapj.com.br/blog/<slug>` and extract content body (typically `.entry-content` or main `<article>`). Download cover images into `public/images/blog/`.

- [ ] **Step 3: Create `BlogCard` component**

```tsx
import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog-posts";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-md transition-shadow"
    >
      <div className="aspect-video bg-slate-100 relative">
        <Image src={post.cover} alt={post.title} fill className="object-cover" />
      </div>
      <div className="p-5">
        <p className="text-xs text-slate-500">{post.date}</p>
        <h3 className="mt-2 font-heading text-lg font-semibold text-slate-900">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-slate-600 line-clamp-3">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}
```

- [ ] **Step 4: Create blog index page**

```tsx
import { BLOG_POSTS } from "@/lib/blog-posts";
import { BlogCard } from "@/components/sections/BlogCard";

export default function BlogPage() {
  return (
    <>
      <section className="py-20 bg-brand-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold">Blog</h1>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 5: Create dynamic post page**

```tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getPostBySlug } from "@/lib/blog-posts";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <article className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <p className="text-sm text-slate-500">{post.date}</p>
        <h1 className="mt-2 font-heading text-3xl md:text-4xl font-bold text-slate-900">
          {post.title}
        </h1>
        <div className="mt-6 aspect-video relative rounded-xl overflow-hidden">
          <Image src={post.cover} alt={post.title} fill className="object-cover" />
        </div>
        <div
          className="prose prose-slate mt-8 max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}
```

- [ ] **Step 6: Install Tailwind typography plugin (for `.prose`)**

```bash
npm install -D @tailwindcss/typography
```

Add to `tailwind.config.ts` plugins:

```ts
plugins: [require("@tailwindcss/typography")],
```

- [ ] **Step 7: Verify and commit**

```bash
npm run dev   # check /blog and one /blog/<slug>
```

```bash
git add -A
git commit -m "feat: add blog index, dynamic post page, and typography plugin"
```

---

### Task 5.5: Central de Ajuda

**Files:**
- Create: `$ROOT/app/central-de-ajuda/page.tsx`
- Modify: `$ROOT/lib/content.ts` (add `HELP_CENTER`)

- [ ] **Step 1: Scrape original**

```bash
curl -s https://contratapj.com.br/central-de-ajuda -A "Mozilla/5.0" --max-time 30 -o /tmp/ajuda.html
```

Inspect for help categories/topics structure (likely accordion-based FAQ).

- [ ] **Step 2: Add to `lib/content.ts`**

```ts
export const HELP_CENTER = {
  categories: [
    {
      title: "Primeiros passos",
      topics: [
        { question: "...", answer: "..." },
      ],
    },
    // ... more categories
  ],
};
```

- [ ] **Step 3: Create the page**

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HELP_CENTER } from "@/lib/content";

export default function CentralDeAjudaPage() {
  return (
    <>
      <section className="py-20 bg-brand-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold">
            Central de Ajuda
          </h1>
          <p className="mt-4 text-lg text-white/85">
            Encontre respostas para suas perguntas.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl space-y-12">
          {HELP_CENTER.categories.map((cat) => (
            <div key={cat.title}>
              <h2 className="font-heading text-2xl font-semibold text-slate-900 mb-4">
                {cat.title}
              </h2>
              <Accordion type="single" collapsible>
                {cat.topics.map((t, i) => (
                  <AccordionItem key={i} value={`${cat.title}-${i}`}>
                    <AccordionTrigger className="text-left text-base">
                      {t.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-slate-600">
                      {t.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 4: Verify and commit**

```bash
git add -A
git commit -m "feat: add Central de Ajuda page"
```

---

## Phase 6 — Polish

### Task 6.1: Responsive check on all pages

- [ ] **Step 1: Boot dev server and visit each page at three viewport widths (375px, 768px, 1280px)**

```bash
npm run dev
```

Pages to check: `/`, `/funcionalidades`, `/planos`, `/contato`, `/blog`, `/blog/<one-slug>`, `/central-de-ajuda`. Use browser devtools responsive mode.

Look for: text overflow, broken grids, images stretched, sticky header overlapping content, mobile menu working.

- [ ] **Step 2: Fix layout issues**

Common fixes:
- Add `flex-wrap` or `grid-cols-1 md:grid-cols-2` where needed.
- Adjust padding (`py-24` desktop → `py-12` mobile via `py-12 md:py-24`).
- Image aspect ratios with `aspect-video` / `aspect-square`.

- [ ] **Step 3: Commit fixes**

```bash
git add -A
git commit -m "fix: responsive layout adjustments across pages"
```

---

### Task 6.2: Color tuning from original

- [ ] **Step 1: Use browser devtools eyedropper on https://contratapj.com.br**

Sample these exact pixel values:
- Hero background dominant blue
- Primary button background
- Footer background
- Body text on light background
- Headings

- [ ] **Step 2: Update `brand` palette in `tailwind.config.ts`**

Replace placeholder hex values in `colors.brand` with measured colors. Adjust component classes if needed.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "style: tune brand colors to match original site"
```

---

### Task 6.3: Accessibility audit

- [ ] **Step 1: Run Lighthouse on home page**

```bash
npm run build && npm start
```

In Chrome devtools → Lighthouse → run Performance + Accessibility audits on http://localhost:3000.

- [ ] **Step 2: Fix items flagged**

Common items:
- Missing `alt` on `<Image>` → fix in components.
- Insufficient color contrast → adjust Tailwind color classes.
- Missing `<label>` for interactive elements → add `aria-label`.

- [ ] **Step 3: Re-run Lighthouse to confirm Accessibility ≥ 90**

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "a11y: fix accessibility issues flagged by Lighthouse"
```

---

### Task 6.4: SEO metadata per page

- [ ] **Step 1: Add `metadata` export to each page**

In each `app/<page>/page.tsx`, export `metadata`:

```ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Funcionalidades — ContrataPJ",
  description: "Conheça todas as funcionalidades do ContrataPJ ...",
};
```

For blog posts (dynamic): export `generateMetadata` function:

```ts
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  return {
    title: post ? `${post.title} — ContrataPJ Blog` : "Post não encontrado",
    description: post?.excerpt,
  };
}
```

- [ ] **Step 2: Verify with `npm run build` (catches any TS errors)**

```bash
npm run build
```

Expected: build completes successfully, all pages pre-rendered as static.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add per-page SEO metadata"
```

---

### Task 6.5: Final visual comparison

- [ ] **Step 1: Open both sites side-by-side**

Tab A: http://localhost:3000 (`npm run dev`)
Tab B: https://contratapj.com.br

Scroll through each page on both. Note discrepancies.

- [ ] **Step 2: Fix major discrepancies**

Acceptable differences: subtle spacing, font rendering, minor color shades.
Not acceptable: missing sections, wrong layout direction, broken images, wrong text.

- [ ] **Step 3: Final commit and tag**

```bash
git add -A
git commit -m "polish: final visual adjustments to match original"
git tag v1.0-clone-complete
```

---

## Success Criteria

- [ ] `npm run dev` boots without errors
- [ ] All 7 routes render: `/`, `/funcionalidades`, `/planos`, `/contato`, `/blog`, `/blog/<slug>`, `/central-de-ajuda`
- [ ] Header + Footer + WhatsApp button present on every page
- [ ] Mobile menu opens/closes properly
- [ ] YouTube video plays on home hero
- [ ] WhatsApp button links to the correct number
- [ ] `npm run build` succeeds with no errors
- [ ] Lighthouse Performance ≥ 90, Accessibility ≥ 90 on home
- [ ] Side-by-side comparison with original is convincingly the same site
