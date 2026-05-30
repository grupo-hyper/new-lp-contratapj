import Link from "next/link";
import Image from "next/image";
import { NAV } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <Image
            src="/images/LOGOB.png"
            alt="ContrataPJ"
            width={160}
            height={45}
          />
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            O 1º sistema de gestão PJ&apos;s do Brasil. Centralize, automatize e simplifique a gestão dos seus PJs.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white mb-3">Navegação</h4>
          <ul className="space-y-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/politica-de-privacidade" className="text-sm hover:text-white">
                Política de Privacidade
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white mb-3">Contato</h4>
          <p className="text-sm">contato@contratapj.com.br</p>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} ContrataPJ. Todos os direitos reservados.
      </div>
    </footer>
  );
}
