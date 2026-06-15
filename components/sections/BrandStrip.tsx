import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { cn } from "@/lib/utils";

const LOGOS = [
  { src: "/images/Logotipo_Solida_Sin_Tagline_RGB_Positivo_Color_Alta-1024x322-1.png", alt: "Sólida" },
  { src: "/images/Allied-IT-colorido-1.png", alt: "Allied IT" },
  { src: "/images/Investidores.vc_-1-1.png", alt: "Investidores.vc" },
  { src: "/images/622105211f288975177934bd_GPinho-Normal.png", alt: "Grupo Pinho" },
  { src: "/images/logo-proesc-Natalia-Mendonca-1-e1769459604184.png", alt: "Proesc" },
  { src: "/images/logo2.png", alt: "Giross" },
  { src: "/images/logo-g4.png", alt: "G4", className: "h-20" },
  { src: "/images/logo-allu.png", alt: "allu", className: "h-20" },
  { src: "/images/logo-minimal.png", alt: "Minimal", className: "h-20" },
];

export function BrandStrip() {
  return (
    <section className="py-10 bg-white">
      <p className="text-center text-sm uppercase tracking-widest font-semibold text-slate-700 mb-6">
        Empresas que confiam na Contrata PJ
      </p>

      <div className="relative mx-auto max-w-4xl">
        <InfiniteSlider gap={56} speed={27} speedOnHover={53} reverse={false}>
          {LOGOS.map((logo) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              className={cn(
                "h-8 w-auto object-contain select-none pointer-events-none grayscale opacity-80",
                logo.className
              )}
            />
          ))}
        </InfiniteSlider>

        <ProgressiveBlur
          direction="left"
          className="absolute top-0 left-0 h-full w-32"
        />
        <ProgressiveBlur
          direction="right"
          className="absolute top-0 right-0 h-full w-32"
        />
      </div>
    </section>
  );
}
