import type { Metadata } from "next";
import Image from "next/image";
import { FEATURES_PAGE, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: `Funcionalidades — ${SITE.name}`,
  description:
    "Conheça todas as funcionalidades da ContrataPJ: gestão de prestadores, contratos, notas fiscais, pagamentos e dashboards em uma plataforma.",
};

export default function FuncionalidadesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-900 py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold">
            {FEATURES_PAGE.hero.title}
          </h1>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">
            {FEATURES_PAGE.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Feature sections — alternating image/text layout */}
      {FEATURES_PAGE.sections.map((section, index) => {
        const imageRight = index % 2 === 0;
        return (
          <section
            key={section.id}
            id={section.id}
            className={`py-20 ${index % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
          >
            <div className="container mx-auto px-4">
              <div
                className={`flex flex-col gap-10 md:gap-16 items-center ${
                  imageRight ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="rounded-2xl overflow-hidden shadow-md bg-slate-100 aspect-[4/3]">
                    <Image
                      src={section.image}
                      alt={section.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2">
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-slate-600 leading-relaxed text-lg">
                    {section.description}
                  </p>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
