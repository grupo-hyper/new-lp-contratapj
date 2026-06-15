import Image from "next/image";
import { ShinyButton } from "@/components/ui/shiny-button";
import { GradientBackground } from "@/components/ui/dark-gradient-background";
import { SITE } from "@/lib/content";

export function CTASection() {
  return (
    <GradientBackground className="py-12 md:py-20 text-white">
      <div className="container mx-auto px-4 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight">
            Pronto para simplificar a gestão dos seus PJs?
          </h2>
          <p className="mt-4 text-white/85 text-base md:text-lg">
            Fale com um especialista e veja na prática como a ContrataPJ pode transformar seu processo.
          </p>
          <ShinyButton
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8"
          >
            Solicitar Demonstração
          </ShinyButton>
        </div>
        <div className="relative h-72 md:h-96">
          <Image
            src="/images/img-cta-final-1.png"
            alt="Demonstração da plataforma ContrataPJ"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </GradientBackground>
  );
}
