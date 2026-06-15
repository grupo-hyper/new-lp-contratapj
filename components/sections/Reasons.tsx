"use client";

import { useState } from "react";
import { Warp } from "@paper-design/shaders-react";
import {
  UserPlus,
  FileSignature,
  Wallet,
  Plug,
  FileBarChart,
  LayoutDashboard,
  Building2,
  Receipt,
  Landmark,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { REASONS } from "@/lib/content";

type Tab = "empresas" | "prestadores";

const ICONS: Record<Tab, LucideIcon[]> = {
  empresas: [UserPlus, FileSignature, Wallet, Plug, FileBarChart, LayoutDashboard],
  prestadores: [UserPlus, Building2, Receipt, Landmark, FileSignature, ShieldCheck],
};

// Paletas de azul da marca para o shader (variações por card)
const SHADER_CONFIGS = [
  {
    proportion: 0.3, softness: 0.8, distortion: 0.15, swirl: 0.6,
    swirlIterations: 8, shape: "checks" as const, shapeScale: 0.08,
    colors: ["hsl(224, 76%, 22%)", "hsl(217, 91%, 60%)", "hsl(213, 94%, 50%)", "hsl(210, 100%, 70%)"],
  },
  {
    proportion: 0.4, softness: 1.2, distortion: 0.2, swirl: 0.9,
    swirlIterations: 12, shape: "stripes" as const, shapeScale: 0.12,
    colors: ["hsl(226, 71%, 18%)", "hsl(221, 83%, 53%)", "hsl(217, 91%, 60%)", "hsl(213, 94%, 75%)"],
  },
  {
    proportion: 0.35, softness: 0.9, distortion: 0.18, swirl: 0.7,
    swirlIterations: 10, shape: "checks" as const, shapeScale: 0.1,
    colors: ["hsl(222, 80%, 20%)", "hsl(224, 76%, 48%)", "hsl(217, 91%, 60%)", "hsl(210, 100%, 72%)"],
  },
  {
    proportion: 0.45, softness: 1.1, distortion: 0.22, swirl: 0.8,
    swirlIterations: 15, shape: "stripes" as const, shapeScale: 0.09,
    colors: ["hsl(228, 70%, 16%)", "hsl(221, 83%, 53%)", "hsl(213, 94%, 58%)", "hsl(206, 100%, 70%)"],
  },
  {
    proportion: 0.38, softness: 0.95, distortion: 0.16, swirl: 0.85,
    swirlIterations: 11, shape: "checks" as const, shapeScale: 0.11,
    colors: ["hsl(224, 76%, 22%)", "hsl(217, 91%, 55%)", "hsl(213, 94%, 62%)", "hsl(210, 100%, 74%)"],
  },
  {
    proportion: 0.42, softness: 1.0, distortion: 0.19, swirl: 0.75,
    swirlIterations: 9, shape: "stripes" as const, shapeScale: 0.13,
    colors: ["hsl(226, 71%, 18%)", "hsl(224, 76%, 48%)", "hsl(217, 91%, 60%)", "hsl(212, 96%, 72%)"],
  },
];

export function Reasons() {
  const [activeTab, setActiveTab] = useState<Tab>("empresas");
  const items = REASONS[activeTab];
  const icons = ICONS[activeTab];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-slate-900 mb-8">
          6 razões para você usar a ContrataPJ
        </h2>

        {/* Tab toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full bg-slate-100 p-1 gap-1">
            <button
              onClick={() => setActiveTab("empresas")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                activeTab === "empresas"
                  ? "bg-brand-600 text-white shadow"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Empresas
            </button>
            <button
              onClick={() => setActiveTab("prestadores")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                activeTab === "prestadores"
                  ? "bg-brand-600 text-white shadow"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Prestadores
            </button>
          </div>
        </div>

        {/* Shader cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const cfg = SHADER_CONFIGS[i % SHADER_CONFIGS.length];
            const Icon = icons[i];
            return (
              <div key={item.number} className="relative h-64">
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <Warp
                    style={{ height: "100%", width: "100%" }}
                    proportion={cfg.proportion}
                    softness={cfg.softness}
                    distortion={cfg.distortion}
                    swirl={cfg.swirl}
                    swirlIterations={cfg.swirlIterations}
                    shape={cfg.shape}
                    shapeScale={cfg.shapeScale}
                    scale={1}
                    rotation={0}
                    speed={0.8}
                    colors={cfg.colors}
                  />
                </div>

                <div className="relative z-10 p-7 rounded-3xl h-full flex flex-col bg-brand-950/75 border border-white/15">
                  <div className="mb-5 flex items-center justify-between">
                    <Icon className="w-9 h-9 text-white drop-shadow" />
                    <span className="text-sm font-mono text-white/60">
                      0{item.number}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white leading-snug mt-auto">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
