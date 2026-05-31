import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { BrandStrip } from "@/components/sections/BrandStrip";
import { Features } from "@/components/sections/Features";
import { Reasons } from "@/components/sections/Reasons";
import { PopularPosts } from "@/components/sections/PopularPosts";
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
// slate-50 → #050a1f (topo escuro da CTASection com gradiente)
const slate50ToCtaTop =
  "linear-gradient(to bottom, #f8fafc 0%, #f1f3f6 10%, #dfe1e5 20%, #c4c6cc 30%, #a2a6ae 40%, #7e828e 50%, #5b5e6d 60%, #393e4f 70%, #1e2336 80%, #0c1125 90%, #050a1f 100%)";
// #2563eb (base azul da CTASection) → white
const ctaBottomToWhite =
  "linear-gradient(to bottom, #2563eb 0%, #2b67ec 10%, #3c73ed 20%, #5485ef 30%, #729af2 40%, #92b1f5 50%, #b2c8f8 60%, #d0ddfb 70%, #e8effd 80%, #f9fbfe 90%, #ffffff 100%)";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="h-56" style={{ background: brand950ToWhite }} />
      <BrandStrip />
      {/* white → slate-50 (cores quase iguais, transição curta basta) */}
      <div className="h-24 bg-gradient-to-b from-white to-slate-50" />
      <Features />
      {/* white → white (Reasons is white bg) */}
      <Reasons />
      {/* white → slate-50 */}
      <div className="h-16 bg-gradient-to-b from-white to-slate-50" />
      <PopularPosts />
      {/* slate-50 → white */}
      <div className="h-16 bg-gradient-to-b from-slate-50 to-white" />
      <VideoTestimonials />
      {/* white → slate-50 (Pricing) */}
      <div className="h-16 bg-gradient-to-b from-white to-slate-50" />
      {/* Features e Pricing são slate-50 — sem divisor escuro entre eles */}
      <Pricing />
      <div className="h-56" style={{ background: slate50ToCtaTop }} />
      <CTASection />
      <div className="h-56" style={{ background: ctaBottomToWhite }} />
      <FAQ />
    </>
  );
}
