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
