# ContrataPJ — Clone do Site (Next.js)

**Data:** 2026-05-30
**Origem:** https://contratapj.com.br
**Destino:** `/Users/yourdev/Desktop/Segundo-Cerebro/Landing Pages/Contrata PJ`

---

## Objetivo

Recriar o site contratapj.com.br como projeto Next.js local, mantendo conteúdo idêntico e visual fiel, mas com código limpo e moderno (sem arrastar o "espaguete" gerado pelo WordPress + Elementor).

## Stack

- **Framework:** Next.js 14+ (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Componentes UI:** shadcn/ui
- **Fontes:** Plus Jakarta Sans (texto) + Outfit (títulos) — via `next/font/google`
- **Linter/Format:** ESLint + Prettier (padrão do `create-next-app`)

## Escopo

**Páginas (clone completo):**
- `/` — Home
- `/funcionalidades` — Funcionalidades
- `/planos` — Planos
- `/contato` — Contato
- `/blog` — Blog index
- `/blog/[slug]` — Post individual
- `/central-de-ajuda` — Central de Ajuda

**Funcionalidades interativas (básico):**
- Botão "Solicitar Demonstração" → abre WhatsApp (link original)
- Vídeo do YouTube embedado na home, tocando normalmente
- Menu mobile com hamburger funcional
- Botão flutuante de WhatsApp no canto inferior direito
- Navegação entre páginas funcional

**Fora de escopo (não-funcional, só visual):**
- Formulários reais com backend
- Sistema de comentários do blog
- Pesquisa
- Login (link preservado, mas redireciona para sistema externo)

## Fidelidade

Visualmente fiel — mesmo layout, mesmas cores, mesma hierarquia, mesmas imagens — mas reconstruído em código limpo. Pequenas diferenças visuais (espaçamentos, sombras) são aceitáveis; o resultado deve "parecer o mesmo site" para um visitante.

## Conteúdo

**Idêntico ao original:**
- Textos (headlines, descrições, FAQs, posts do blog)
- Imagens (baixadas via script para `public/images/`)
- Vídeo (embed do mesmo ID YouTube)
- Links externos (WhatsApp, login)

## Arquitetura

```
Landing Pages/Contrata PJ/
├── app/
│   ├── page.tsx                       # Home (/)
│   ├── funcionalidades/page.tsx
│   ├── planos/page.tsx
│   ├── contato/page.tsx
│   ├── blog/
│   │   ├── page.tsx                   # Lista de posts
│   │   └── [slug]/page.tsx            # Post individual
│   ├── central-de-ajuda/page.tsx
│   ├── layout.tsx                     # Header + Footer globais
│   └── globals.css                    # Tailwind base + variáveis
├── components/
│   ├── ui/                            # shadcn (Button, Card, Accordion, Sheet, etc.)
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppButton.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Features.tsx
│       ├── Pricing.tsx
│       ├── Testimonials.tsx
│       ├── FAQ.tsx
│       ├── CTASection.tsx
│       └── BlogCard.tsx
├── lib/
│   ├── content.ts                     # Textos e dados estruturados
│   └── blog-posts.ts                  # Posts do blog (título, slug, conteúdo)
├── public/
│   └── images/                        # Imagens baixadas
├── scripts/
│   └── download-assets.ts             # Script para baixar imagens do original
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
├── package.json
└── DESIGN.md (este arquivo)
```

## Componentes

### Layout global
- **Header:** logo, menu (Funcionalidades, Planos, Blog, Contato, Central de Ajuda), botão "Solicitar Demonstração" (WhatsApp), botão "Login" (link externo).
- **MobileMenu:** drawer (shadcn `Sheet`) com mesmos itens do header.
- **Footer:** links, redes sociais, copyright.
- **WhatsAppButton:** posição `fixed` no canto inferior direito, ícone do WhatsApp, link para conversa.

### Seções reusáveis
- **Hero:** título + subtítulo + descrição + CTA + vídeo YouTube (`<iframe>` ou `react-youtube`).
- **Features:** grid responsivo de funcionalidades com ícones.
- **Pricing:** cards de planos lado a lado.
- **Testimonials:** depoimentos (carrossel ou grid).
- **FAQ:** shadcn `Accordion`.
- **CTASection:** chamada final, fundo destacado.
- **BlogCard:** card com imagem, título, data, resumo (usado na lista de blog).

### Componentes shadcn/ui necessários
`Button`, `Card`, `Accordion`, `Sheet`, `Dialog` (opcional, para abrir vídeo em modal)

## Data flow

- **Conteúdo estático:** `lib/content.ts` exporta objetos tipados (TypeScript) com todos os textos e dados de cada seção. Páginas importam só o que usam.
- **Posts do blog:** `lib/blog-posts.ts` exporta array de posts com `slug`, `title`, `date`, `excerpt`, `content` (markdown ou HTML). `/blog/[slug]` resolve via `generateStaticParams`.
- **Sem CMS/banco:** tudo estático, ideal para SSG (Static Site Generation). Build gera HTML em todas as páginas.

## Cores e tipografia

Extraído do site original:

```ts
// tailwind.config.ts (excerpt)
colors: {
  primary: { DEFAULT: '#1e3a8a', /* azul escuro do hero */ },
  accent: { /* cor secundária dos botões */ },
}
fontFamily: {
  sans: ['var(--font-jakarta)', 'sans-serif'],
  heading: ['var(--font-outfit)', 'sans-serif'],
}
```

(Valores exatos confirmados na fase 1 inspecionando o CSS do site.)

## Plano de implementação (fases)

1. **Setup base** — `create-next-app`, instalar Tailwind/shadcn, configurar fontes e cores.
2. **Coleta de conteúdo** — script `scripts/download-assets.ts` baixa imagens; extração de textos para `lib/content.ts`.
3. **Layout global** — `Header`, `MobileMenu`, `Footer`, `WhatsAppButton`, `app/layout.tsx`.
4. **Páginas estáticas** — Home (com todas as seções), Funcionalidades, Planos, Contato.
5. **Blog e Central de Ajuda** — `/blog`, `/blog/[slug]`, `/central-de-ajuda`.
6. **Polimento** — responsividade, acessibilidade, SEO/metadata, Lighthouse pass.

Cada fase tem critério de sucesso verificável (página abre, layout correto em desktop+mobile, links funcionando).

## Critérios de sucesso

- [ ] `npm run dev` inicia o projeto sem erros
- [ ] Todas as 7 páginas (home + 6 outras) renderizam corretamente
- [ ] Visual fiel ao original (comparação lado-a-lado convence "é o mesmo site")
- [ ] Responsivo em mobile (375px), tablet (768px), desktop (1280px)
- [ ] WhatsApp button funciona e abre conversa
- [ ] Vídeo YouTube toca na home
- [ ] Menu mobile abre/fecha
- [ ] Build de produção (`npm run build`) passa sem erro
- [ ] Lighthouse score Performance ≥ 90 e Accessibility ≥ 90

## Riscos / pontos de atenção

- **Fontes Google:** Plus Jakarta Sans + Outfit precisam estar disponíveis no Google Fonts (já confirmei que sim).
- **Imagens grandes:** `bg-banner_home.png` pode ser pesado. Otimizar via `next/image`.
- **Blog dinâmico:** Como o blog original tem várias páginas, a extração de conteúdo de cada post precisa ser feita em escala. Se forem poucos posts (< 20), faço manualmente; se forem muitos, scrapeo programaticamente.
- **Vídeo do YouTube:** O ID do vídeo na home precisa ser extraído do HTML original.
