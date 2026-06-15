"use client";

import { Users, FileText, Receipt, CreditCard } from "lucide-react";
import { FeatureCarousel } from "@/components/ui/feature-carousel";
import { HOME } from "@/lib/content";

const ICONS = [Users, FileText, Receipt, CreditCard];

const features = HOME.features.map((f, i) => ({
  id: i + 1,
  icon: ICONS[i],
  title: f.title,
  description: f.description,
  image: f.image,
}));

export function Features() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-slate-900 max-w-3xl mx-auto mb-12 md:mb-16">
          Tudo o que você precisa para gerenciar seus PJs em um só lugar
        </h2>
        <FeatureCarousel features={features} />
      </div>
    </section>
  );
}
