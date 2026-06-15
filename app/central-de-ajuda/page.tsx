import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ShinyButton } from "@/components/ui/shiny-button";
import { HELP_CENTER, SITE } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Central de Ajuda | ${SITE.name}`,
  description:
    "Encontre respostas para as dúvidas mais frequentes sobre a ContrataPJ — contratos, pagamentos, planos e muito mais.",
};

export default function CentralDeAjudaPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#5A4FF3] to-[#7B6FF6] py-12 md:py-20 text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Central de Ajuda
          </h1>
          <p className="text-lg md:text-xl text-white/80">
            Tire suas dúvidas sobre a ContrataPJ. Encontre respostas rápidas por categoria.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-10 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-12">
            {HELP_CENTER.categories.map((category, catIdx) => (
              <div key={catIdx} id={category.slug}>
                <h2 className="font-heading text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200">
                  {category.title}
                </h2>
                <Accordion className="bg-white rounded-xl shadow-sm overflow-hidden">
                  {category.topics.map((topic, topicIdx) => (
                    <AccordionItem
                      key={topicIdx}
                      value={`${catIdx}-${topicIdx}`}
                    >
                      <AccordionTrigger className="text-left text-base font-medium px-6">
                        {topic.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-slate-600 leading-relaxed px-6">
                        {topic.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 bg-white text-center">
        <div className="container mx-auto px-4 max-w-xl">
          <h3 className="font-heading text-2xl font-bold text-slate-900 mb-3">
            Ainda tem dúvidas?
          </h3>
          <p className="text-slate-600 mb-6">
            Nossa equipe de suporte está disponível para ajudar você.
          </p>
          <ShinyButton
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar com o suporte
          </ShinyButton>
        </div>
      </section>
    </main>
  );
}
