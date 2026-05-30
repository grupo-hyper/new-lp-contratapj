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
