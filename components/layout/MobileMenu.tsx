"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import { NAV, SITE } from "@/lib/content";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button variant="ghost" size="icon" aria-label="Abrir menu" />
        }
      >
        <Menu className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="mt-6 flex flex-col gap-4 px-4">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-medium text-slate-800 hover:text-brand-700"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-2">
            <Button
              render={
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
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
            >
              Login
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
