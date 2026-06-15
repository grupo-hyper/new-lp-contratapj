import { PricingCards } from "@/components/ui/pricing-component";
import { PRICING, SITE } from "@/lib/content";

export function Pricing() {
  const starter = PRICING.plans[0];
  const plus = PRICING.plans[1];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900">
            {PRICING.hero.title}
          </h2>
          <p className="mt-3 text-slate-500 max-w-xl mx-auto">
            {PRICING.hero.subtitle}
          </p>
        </div>

        <PricingCards
          ctaHref={SITE.whatsapp}
          ctaLabel="Solicitar Demonstração"
          starter={{
            name: starter.name,
            description: starter.tagline,
            price: starter.price,
            priceDetail: starter.priceDetail,
            badge: "Essencial",
            features: [...starter.features],
          }}
          pro={{
            name: plus.name,
            description: plus.tagline,
            price: plus.price,
            priceDetail: plus.priceDetail,
            badge: "Mais popular",
            features: [...plus.features],
          }}
        />
      </div>
    </section>
  );
}
