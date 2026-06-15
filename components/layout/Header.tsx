"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Home, LayoutGrid, Tag, Newspaper, Mail, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { MenuBar, type GlowMenuItem } from "@/components/ui/glow-menu";
import { SITE } from "@/lib/content";
import { MobileMenu } from "./MobileMenu";

const ICON_BY_HREF: Record<string, typeof Home> = {
  "/": Home,
  "/funcionalidades": LayoutGrid,
  "/planos": Tag,
  "/blog": Newspaper,
  "/contato": Mail,
  "/central-de-ajuda": HelpCircle,
};

const GLOW = (a: number) =>
  `radial-gradient(circle, rgba(59,130,246,${a}) 0%, rgba(37,99,235,${a * 0.4}) 50%, rgba(29,78,216,0) 100%)`;

const MENU_ITEMS: GlowMenuItem[] = [
  { label: "Início", href: "/" },
  { label: "Funcionalidades", href: "/funcionalidades" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
  { label: "Central de Ajuda", href: "/central-de-ajuda" },
].map((item) => ({
  ...item,
  icon: ICON_BY_HREF[item.href],
  gradient: GLOW(0.15),
}));

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur border-b">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/Logo.png"
            alt="ContrataPJ"
            width={140}
            height={40}
            priority
          />
        </Link>

        <div className="hidden lg:block">
          <MenuBar items={MENU_ITEMS} activeHref={pathname} />
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <ShinyButton
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
          >
            Solicitar Demonstração
          </ShinyButton>
          <Button
            render={
              <a
                href={SITE.loginUrl}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            variant="outline"
            className="h-auto rounded-full px-5 py-[0.45rem] text-sm font-medium border-slate-200"
          >
            Login
          </Button>
        </div>

        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
