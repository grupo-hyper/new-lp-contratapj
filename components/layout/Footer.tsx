import Link from "next/link";
import Image from "next/image";

type IconProps = { className?: string };

function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="2.5"
        y="2.5"
        width="19"
        height="19"
        rx="3.5"
        stroke="currentColor"
        strokeWidth={2}
      />
      <path
        fill="currentColor"
        d="M7 10h2.2v7H7v-7zM8.1 6.4a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6zM10.9 10H13v1h.03c.3-.55 1.05-1.13 2.15-1.13 2.3 0 2.72 1.5 2.72 3.46V17h-2.2v-3.26c0-.78-.02-1.78-1.1-1.78-1.1 0-1.27.85-1.27 1.73V17h-2.2v-7z"
      />
    </svg>
  );
}

function FacebookIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="2.5"
        y="2.5"
        width="19"
        height="19"
        rx="3.5"
        stroke="currentColor"
        strokeWidth={2}
      />
      <path
        fill="currentColor"
        d="M13.2 21v-6.3h2.1l.35-2.5H13.2v-1.6c0-.72.3-1.2 1.36-1.2h1.18V7.15c-.36-.05-1.1-.1-1.95-.1-1.93 0-3.19 1.16-3.19 3.3v1.85H8.9v2.5h1.7V21h2.6z"
      />
    </svg>
  );
}

const COLUMNS = [
  {
    title: "ContrataPJ",
    links: [
      { label: "Planos", href: "/planos" },
      { label: "Blog", href: "/blog" },
      { label: "Contato", href: "/contato" },
    ],
  },
  {
    title: "Funcionalidades",
    links: [
      { label: "Gestão de PJ's", href: "/funcionalidades#gestao-pj" },
      { label: "Financeiro", href: "/funcionalidades#pagamento" },
      { label: "Contratos", href: "/funcionalidades#contratos" },
      { label: "Notas Fiscais", href: "/funcionalidades#notas" },
      { label: "Dashboard e Relatórios", href: "/funcionalidades#dashboard" },
    ],
  },
  {
    title: "Central de Ajuda",
    links: [
      { label: "Contratante", href: "/central-de-ajuda" },
      { label: "Prestador", href: "/central-de-ajuda" },
      { label: "Sobre a Plataforma", href: "/central-de-ajuda" },
    ],
  },
];

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/contratapj/", icon: InstagramIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/contratapj/?originalSubdomain=br", icon: LinkedinIcon },
  { label: "Facebook", href: "https://www.facebook.com/contratapj/", icon: FacebookIcon },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      {/* Top — light */}
      <div className="bg-slate-50">
        <div className="container mx-auto px-4 py-14">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
            {/* Logo */}
            <div className="lg:col-span-1">
              <Image
                src="/images/Logo.png"
                alt="ContrataPJ"
                width={150}
                height={42}
              />
            </div>

            {/* Link columns */}
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="font-heading text-base font-bold text-slate-900 mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-600 hover:text-brand-600 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social + support */}
            <div>
              <h4 className="font-heading text-base font-bold text-slate-900 mb-4">
                Nossas Redes
              </h4>
              <div className="flex items-center gap-4">
                {SOCIALS.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="text-slate-700 hover:text-brand-600 transition-colors"
                    >
                      <Icon className="h-6 w-6" />
                    </a>
                  );
                })}
              </div>

              <h4 className="font-heading text-base font-bold text-slate-900 mt-8 mb-2">
                Nosso suporte
              </h4>
              <a
                href="mailto:suporte@contratapj.com.br"
                className="text-sm text-slate-600 hover:text-brand-600 transition-colors"
              >
                suporte@contratapj.com.br
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom — dark */}
      <div className="bg-brand-950 text-slate-300">
        <div className="container mx-auto px-4 py-6 text-center text-xs leading-relaxed">
          <p>Copyright © {year} Grupo Hyper – Todos os direitos reservados</p>
          <p className="mt-1">
            <Link
              href="/politica-de-privacidade"
              className="text-brand-300 hover:text-white underline"
            >
              Política de Privacidade
            </Link>{" "}
            |{" "}
            <Link
              href="/termos-e-condicoes"
              className="text-brand-300 hover:text-white underline"
            >
              Termos e Condições
            </Link>
          </p>
          <p className="mt-2 text-slate-400">
            51.810.313/0001-46 – Contrata Pj Ltda – Avenida Oscar Niemeyer, 2000,
            Bloco 1 Sala 401, Santo Cristo, Rio de Janeiro – RJ
          </p>
        </div>
      </div>
    </footer>
  );
}
