import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { NAV, SITE } from "@/lib/content";
import { MobileMenu } from "./MobileMenu";

export function Header() {
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

        <nav className="hidden lg:flex items-center gap-6">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 hover:text-brand-700 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button
            render={
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            size="sm"
            className="bg-brand-900 hover:bg-brand-800 text-white"
          >
            Solicitar Demonstração
          </Button>
          <Button
            render={
              <a
                href={SITE.loginUrl}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            variant="outline"
            size="sm"
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
