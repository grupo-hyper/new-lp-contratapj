import { ShinyButton } from "@/components/ui/shiny-button";
import { HOME, SITE } from "@/lib/content";

export function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-brand-950"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px),radial-gradient(circle at 80% 15%, rgba(37,99,235,0.40), transparent 42%),radial-gradient(circle at 8% 95%, rgba(37,99,235,0.22), transparent 45%)",
        backgroundSize: "46px 46px,46px 46px,100% 100%,100% 100%",
      }}
    >
      <div className="container mx-auto px-4 py-20 lg:py-28 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: text + CTA */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              {HOME.hero.title}
              <br />
              <span className="text-brand-500">{HOME.hero.titleHighlight}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg text-white/80 leading-relaxed">
              {HOME.hero.description}
            </p>
            <ShinyButton
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 w-full"
            >
              {HOME.hero.ctaLabel}
            </ShinyButton>
          </div>

          {/* Right: device mockup illustration */}
          <div className="flex-1 w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero-mockup.svg"
              alt="Plataforma ContrataPJ no notebook e no celular"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
