"use client";

import { useEffect, useRef, useState } from "react";
import { HOME } from "@/lib/content";

// Configuração fixa da espiral — cores da marca ContrataPJ
const SPIRAL = {
  points: 700,
  dotRadius: 1.8,
  duration: 3.0,
  color: "#3b82f6", // brand-500
  opacityMin: 0.25,
  opacityMax: 0.9,
  sizeMin: 0.5,
  sizeMax: 1.4,
};

export function FAQ() {
  const spiralRef = useRef<HTMLDivElement | null>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!spiralRef.current) return;

    const SIZE = 560;
    const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
    const N = SPIRAL.points;
    const DOT = SPIRAL.dotRadius;
    const CENTER = SIZE / 2;
    const PADDING = 4;
    const MAX_R = CENTER - PADDING - DOT;

    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", String(SIZE));
    svg.setAttribute("height", String(SIZE));
    svg.setAttribute("viewBox", `0 0 ${SIZE} ${SIZE}`);

    for (let i = 0; i < N; i++) {
      const idx = i + 0.5;
      const frac = idx / N;
      const r = Math.sqrt(frac) * MAX_R;
      const theta = idx * GOLDEN_ANGLE;
      const x = CENTER + r * Math.cos(theta);
      const y = CENTER + r * Math.sin(theta);

      const c = document.createElementNS(svgNS, "circle");
      c.setAttribute("cx", x.toFixed(3));
      c.setAttribute("cy", y.toFixed(3));
      c.setAttribute("r", String(DOT));
      c.setAttribute("fill", SPIRAL.color);
      c.setAttribute("opacity", "0.6");

      const animR = document.createElementNS(svgNS, "animate");
      animR.setAttribute("attributeName", "r");
      animR.setAttribute(
        "values",
        `${DOT * SPIRAL.sizeMin};${DOT * SPIRAL.sizeMax};${DOT * SPIRAL.sizeMin}`
      );
      animR.setAttribute("dur", `${SPIRAL.duration}s`);
      animR.setAttribute("begin", `${(frac * SPIRAL.duration).toFixed(3)}s`);
      animR.setAttribute("repeatCount", "indefinite");
      animR.setAttribute("calcMode", "spline");
      animR.setAttribute("keySplines", "0.4 0 0.6 1;0.4 0 0.6 1");
      c.appendChild(animR);

      const animO = document.createElementNS(svgNS, "animate");
      animO.setAttribute("attributeName", "opacity");
      animO.setAttribute(
        "values",
        `${SPIRAL.opacityMin};${SPIRAL.opacityMax};${SPIRAL.opacityMin}`
      );
      animO.setAttribute("dur", `${SPIRAL.duration}s`);
      animO.setAttribute("begin", `${(frac * SPIRAL.duration).toFixed(3)}s`);
      animO.setAttribute("repeatCount", "indefinite");
      animO.setAttribute("calcMode", "spline");
      animO.setAttribute("keySplines", "0.4 0 0.6 1;0.4 0 0.6 1");
      c.appendChild(animO);

      svg.appendChild(c);
    }

    spiralRef.current.innerHTML = "";
    spiralRef.current.appendChild(svg);
  }, []);

  const filtered = query
    ? HOME.faq.filter(({ question, answer }) =>
        (question + answer).toLowerCase().includes(query.toLowerCase())
      )
    : HOME.faq;

  return (
    <section className="relative w-full overflow-hidden bg-brand-950 text-white">
      {/* Espiral de fundo */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40 [mask-image:radial-gradient(circle_at_center,rgba(255,255,255,1),rgba(255,255,255,0.1)_60%,transparent_75%)]"
        style={{ mixBlendMode: "screen" }}
      >
        <div ref={spiralRef} />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-16 md:py-24">
        {/* Header */}
        <header className="mb-10 flex flex-col gap-4 border-b border-white/20 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">
              Perguntas frequentes
            </h2>
            <p className="mt-2 text-sm md:text-base text-white/70">
              Tire suas dúvidas sobre a ContrataPJ.
            </p>
          </div>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar pergunta…"
            className="h-10 w-full sm:w-64 rounded-xl border border-white/20 bg-transparent px-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-brand-400"
          />
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {filtered.map((item, i) => (
            <FAQItem
              key={i}
              q={item.question}
              a={item.answer}
              index={i + 1}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-8 text-center text-sm text-white/50">
            Nenhuma pergunta encontrada para “{query}”.
          </p>
        )}
      </div>
    </section>
  );
}

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm transition hover:border-brand-400/60">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between text-left"
        aria-expanded={open}
      >
        <div className="flex items-baseline gap-3">
          <span className="text-xs text-brand-300/70">
            {String(index).padStart(2, "0")}
          </span>
          <h3 className="text-base md:text-lg font-semibold leading-tight">
            {q}
          </h3>
        </div>
        <span className="ml-4 text-white/60 transition group-hover:text-brand-300">
          {open ? "–" : "+"}
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(.4,0,.2,1)] ${
          open ? "mt-3 grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="text-sm text-white/70 leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}
