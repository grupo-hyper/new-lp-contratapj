"use client";

import { useState } from "react";
import { REASONS } from "@/lib/content";

type Tab = "empresas" | "prestadores";

export function Reasons() {
  const [activeTab, setActiveTab] = useState<Tab>("empresas");
  const items = REASONS[activeTab];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-slate-900 mb-8">
          6 razões para você usar a ContrataPJ
        </h2>

        {/* Tab toggle */}
        <div className="flex justify-center mb-10">
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

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.number}
              className="flex flex-col items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-600 text-white text-xl font-bold flex-shrink-0">
                {item.number}
              </span>
              <p className="font-heading text-lg font-semibold text-slate-800 leading-snug">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
