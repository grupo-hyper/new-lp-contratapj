import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PRICING, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: `Planos — ${SITE.name}`,
  description:
    "Escolha o plano ContrataPJ ideal para sua empresa. Planos por prestador ativo, sem taxas escondidas.",
};

export default function PlanosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-900 py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold">
            {PRICING.hero.title}
          </h1>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">
            {PRICING.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {PRICING.plans.map((plan) => (
              <Card
                key={plan.name}
                className={`flex flex-col ${
                  plan.highlighted
                    ? "border-brand-600 border-2 shadow-xl"
                    : "border-slate-200 shadow-md"
                }`}
              >
                {plan.highlighted && (
                  <div className="bg-brand-600 text-white text-center text-sm font-semibold py-2 rounded-t-lg">
                    Mais popular
                  </div>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-slate-900">
                    Plano {plan.name}
                  </CardTitle>
                  <div className="mt-2">
                    <span className="text-4xl font-extrabold text-slate-900">
                      {plan.price}
                    </span>
                    <span className="ml-2 text-slate-500 text-sm">
                      {plan.priceDetail}
                    </span>
                  </div>
                  <p className="mt-2 text-slate-600 text-sm">{plan.tagline}</p>
                </CardHeader>

                <CardContent className="flex flex-col flex-1">
                  <ul className="space-y-3 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check
                          className="mt-0.5 shrink-0 text-brand-600"
                          size={18}
                        />
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Button
                      size="lg"
                      className={`w-full ${
                        plan.highlighted
                          ? "bg-brand-600 hover:bg-brand-700 text-white"
                          : ""
                      }`}
                      render={
                        <a
                          href={SITE.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      }
                    >
                      {plan.ctaLabel}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise / 50+ PJs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900">
            {PRICING.enterprise.title}{" "}
            <strong>{PRICING.enterprise.subtitle}</strong>
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            {PRICING.enterprise.description}
          </p>

          <ul className="mt-8 space-y-3 text-left inline-block">
            {PRICING.enterprise.perks.map((perk) => (
              <li key={perk} className="flex items-center gap-3">
                <Check className="shrink-0 text-brand-600" size={20} />
                <span className="text-slate-700">{perk}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Button
              size="lg"
              render={
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              {PRICING.enterprise.ctaLabel}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
