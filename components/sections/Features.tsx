import Image from "next/image";
import { HOME } from "@/lib/content";

export function Features() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-slate-900 max-w-3xl mx-auto">
          Tudo o que você precisa para gerenciar seus PJs em um só lugar
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {HOME.features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 mb-4">
                <Image
                  src={f.image}
                  alt={f.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading text-xl font-semibold text-slate-900">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
