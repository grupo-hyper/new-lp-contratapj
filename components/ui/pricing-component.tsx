import { Check } from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";

interface PlanCard {
  name: string;
  description: string;
  price: string;
  priceDetail: string;
  badge: string;
  features: string[];
}

interface PricingCardsProps {
  starter: PlanCard;
  pro: PlanCard;
  ctaHref: string;
  ctaLabel: string;
}

export function PricingCards({
  starter,
  pro,
  ctaHref,
  ctaLabel,
}: PricingCardsProps) {
  return (
    <div className="w-full flex justify-center">
      {/* Escala uniforme (~2/3) — encolhe largura e altura na mesma proporção */}
      <div className="origin-top scale-100 md:scale-[0.76] md:-mb-[12%]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[900px] mx-auto items-stretch">
        {/* Light card — Starter */}
        <div className="h-full flex flex-col rounded-3xl p-2 bg-white/65 backdrop-blur-md border border-slate-200/70 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.15)] ring-1 ring-inset ring-white/40">
          <div className="rounded-2xl p-8 mb-2 bg-white/80 backdrop-blur-sm border border-slate-200/80 ring-1 ring-inset ring-slate-900/5">
            <div className="mb-6 flex items-start justify-between gap-3">
              <div>
                <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900">
                  {starter.name}
                </h2>
                <p className="text-slate-600 text-base leading-relaxed mt-1 min-h-[5rem]">
                  {starter.description}
                </p>
              </div>
              <span className="shrink-0 inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur">
                {starter.badge}
              </span>
            </div>

            <div className="flex items-baseline mb-8">
              <span className="text-5xl font-bold tracking-tighter text-slate-900">
                {starter.price}
              </span>
              <span className="text-slate-400 text-lg ml-2">
                {starter.priceDetail}
              </span>
            </div>

            <ShinyButton
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              {ctaLabel}
            </ShinyButton>
          </div>

          <div className="flex-1 px-6 pb-6 pt-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-slate-200/70 ring-1 ring-inset ring-white/30">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4">
              {starter.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-600" />
                  <span className="text-slate-800 text-sm font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dark card — Plus (azul da marca) */}
        <div className="h-full flex flex-col rounded-3xl p-2 bg-brand-950/80 backdrop-blur-md border border-brand-800 shadow-[0_12px_50px_-15px_rgba(12,31,92,0.55)] ring-1 ring-inset ring-white/5">
          <div className="rounded-2xl p-8 mb-2 bg-brand-900/70 backdrop-blur-sm border border-brand-800 ring-1 ring-inset ring-white/10">
            <div className="mb-6 flex items-start justify-between gap-3">
              <div>
                <h2 className="font-heading text-3xl font-bold tracking-tight text-white">
                  {pro.name}
                </h2>
                <p className="text-blue-100 text-base leading-relaxed mt-1 min-h-[5rem]">
                  {pro.description}
                </p>
              </div>
              <span className="shrink-0 inline-flex items-center rounded-full border border-blue-300/60 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                {pro.badge}
              </span>
            </div>

            <div className="flex items-baseline mb-8">
              <span className="text-5xl font-bold tracking-tighter text-white">
                {pro.price}
              </span>
              <span className="text-blue-200 text-lg ml-2">
                {pro.priceDetail}
              </span>
            </div>

            <ShinyButton
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              {ctaLabel}
            </ShinyButton>
          </div>

          <div className="flex-1 px-6 pb-6 pt-4 bg-brand-900/55 backdrop-blur-sm rounded-2xl border border-brand-800 ring-1 ring-inset ring-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4">
              {pro.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-300" />
                  <span className="text-white text-sm font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
