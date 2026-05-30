import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { BrandStrip } from "@/components/sections/BrandStrip";
import { Features } from "@/components/sections/Features";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "ContrataPJ — Gestão de Contratos PJ",
  description:
    "O 1º sistema de gestão PJ's do Brasil. Gerencie prestadores, contratos, notas fiscais e pagamentos em uma plataforma completa.",
};

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
