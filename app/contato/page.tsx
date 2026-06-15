import type { Metadata } from "next";
import { ShinyButton } from "@/components/ui/shiny-button";
import { SITE } from "@/lib/content";
import { Mail, Phone, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: `Contato — ${SITE.name}`,
  description:
    "Fale com a ContrataPJ pelo WhatsApp, e-mail ou telefone. Estamos aqui para te ajudar.",
};

export default function ContatoPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-12 md:py-20 bg-brand-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold">Contato</h1>
          <p className="mt-4 text-lg text-white/85 max-w-2xl mx-auto">
            Estamos aqui para te ajudar. Fale com a gente pelo canal que preferir.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 grid gap-8 md:grid-cols-3 max-w-5xl">
          {/* WhatsApp */}
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 rounded-2xl border bg-slate-50 hover:bg-slate-100 transition-colors"
          >
            <MessageCircle className="h-10 w-10 text-green-600" />
            <h3 className="mt-4 font-heading text-xl font-semibold">WhatsApp</h3>
            <p className="mt-2 text-sm text-slate-600">
              Resposta rápida pelo nosso canal oficial.
            </p>
          </a>

          {/* E-mail */}
          <a
            href="mailto:contato@contratapj.com.br"
            className="block p-6 rounded-2xl border bg-slate-50 hover:bg-slate-100 transition-colors"
          >
            <Mail className="h-10 w-10 text-brand-700" />
            <h3 className="mt-4 font-heading text-xl font-semibold">E-mail</h3>
            <p className="mt-2 text-sm text-slate-600">contato@contratapj.com.br</p>
          </a>

          {/* Telefone — text only, not clickable */}
          <div className="p-6 rounded-2xl border bg-slate-50">
            <Phone className="h-10 w-10 text-brand-700" />
            <h3 className="mt-4 font-heading text-xl font-semibold">Telefone</h3>
            <p className="mt-2 text-sm text-slate-600">(21) 99950-8940</p>
          </div>
        </div>

        {/* CTA */}
        <div className="container mx-auto px-4 mt-12 text-center">
          <ShinyButton
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar demonstração agora
          </ShinyButton>
        </div>
      </section>
    </>
  );
}
