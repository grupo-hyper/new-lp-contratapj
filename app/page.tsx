import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { BrandStrip } from "@/components/sections/BrandStrip";
import { Features } from "@/components/sections/Features";
import { VideoTestimonials } from "@/components/sections/VideoTestimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "ContrataPJ — Gestão de Contratos PJ",
  description:
    "O 1º sistema de gestão PJ's do Brasil. Gerencie prestadores, contratos, notas fiscais e pagamentos em uma plataforma completa.",
};

// Gradientes seguindo a curva smoothstep (3t²−2t³) com 11 pontos. A inclinação
// é quase nula nas pontas, então o topo "encosta" na cor sólida da seção sem
// nenhuma linha perceptível, e o mesmo na base.
const brand950ToWhite =
  "linear-gradient(to bottom, #0c1f5c 0%, #132561 10%, #25366d 20%, #404f7f 30%, #626e95 40%, #868fae 50%, #a9b0c6 60%, #cbcfdc 70%, #e6e8ee 80%, #f8f9fa 90%, #ffffff 100%)";
// white → #050a1f (topo escuro da CTASection com gradiente)
const whiteToCtaTop =
  "linear-gradient(to bottom, #ffffff 0%, #f8f8f9 10%, #e5e6e8 20%, #c9cacf 30%, #a7a9b0 40%, #82848f 50%, #5d606e 60%, #3b3f4f 70%, #1f2336 80%, #0c1125 90%, #050a1f 100%)";
// #2563eb (base azul da CTASection) → #0c1f5c (FAQ navy)
const ctaBottomToFaq =
  "linear-gradient(to bottom, #2563eb 0%, #225cdc 20%, #1c4bb9 40%, #1841a3 50%, #15378e 60%, #0f266b 80%, #0c1f5c 100%)";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="h-56" style={{ background: brand950ToWhite }} />
      <BrandStrip />
      {/* white → slate-50 (cores quase iguais, transição curta basta) */}
      <div className="h-24 bg-gradient-to-b from-white to-slate-50" />
      <Features />
      {/* Features e Pricing são slate-50 — sem divisor */}
      <Pricing />
      {/* slate-50 → white (VideoTestimonials) */}
      <div className="h-16 bg-gradient-to-b from-slate-50 to-white" />
      <VideoTestimonials />
      <div className="h-56" style={{ background: whiteToCtaTop }} />
      <CTASection />
      <div className="h-40" style={{ background: ctaBottomToFaq }} />
      <FAQ />
    </>
  );
}
