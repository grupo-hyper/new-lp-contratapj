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
          render={
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            />
          }
          size="lg"
          className="mt-10 bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 py-6 text-base"
        >
          {HOME.hero.ctaLabel}
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
