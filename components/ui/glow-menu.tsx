"use client";

import * as React from "react";
import { motion, type Variants } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export interface GlowMenuItem {
  icon: LucideIcon;
  label: string;
  href: string;
  gradient: string;
}

interface MenuBarProps {
  items: GlowMenuItem[];
  activeHref?: string;
  className?: string;
}

const itemVariants: Variants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
};

const backVariants: Variants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
};

const glowVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: "easeInOut" },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
};

const navGlowVariants: Variants = {
  initial: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
};

const sharedTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
  duration: 0.5,
};

export function MenuBar({ className, items, activeHref }: MenuBarProps) {
  return (
    <motion.nav
      className={cn(
        "relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white/70 p-1.5 shadow-sm backdrop-blur-lg",
        className
      )}
      initial="initial"
      whileHover="hover"
    >
      {/* nav-wide glow */}
      <motion.div
        className="pointer-events-none absolute -inset-2 z-0 rounded-3xl"
        style={{
          background:
            "radial-gradient(circle at center, rgba(59,130,246,0.18) 0%, rgba(37,99,235,0.10) 45%, transparent 75%)",
        }}
        variants={navGlowVariants}
      />

      <ul className="relative z-10 flex items-center gap-1">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = item.href === activeHref;

          return (
            <motion.li key={item.label} className="relative">
              <Link href={item.href} className="block">
                <motion.div
                  className="group relative block overflow-visible rounded-xl"
                  style={{ perspective: "600px" }}
                  whileHover="hover"
                  initial="initial"
                >
                  {/* per-item glow */}
                  <motion.div
                    className="pointer-events-none absolute inset-0 z-0"
                    variants={glowVariants}
                    animate={isActive ? "hover" : "initial"}
                    style={{
                      background: item.gradient,
                      opacity: isActive ? 1 : 0,
                      borderRadius: "16px",
                    }}
                  />

                  {/* front face */}
                  <motion.div
                    className={cn(
                      "relative z-10 flex items-center gap-2 rounded-xl bg-transparent px-3 py-1.5 transition-colors",
                      isActive
                        ? "text-brand-700"
                        : "text-slate-600 group-hover:text-brand-700"
                    )}
                    variants={itemVariants}
                    transition={sharedTransition}
                    style={{
                      transformStyle: "preserve-3d",
                      transformOrigin: "center bottom",
                    }}
                  >
                    <span
                      className={cn(
                        "transition-colors",
                        isActive
                          ? "text-brand-600"
                          : "text-slate-500 group-hover:text-brand-600"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </motion.div>

                  {/* back face (flips in on hover) */}
                  <motion.div
                    className={cn(
                      "absolute inset-0 z-10 flex items-center gap-2 rounded-xl bg-transparent px-3 py-1.5 transition-colors",
                      isActive
                        ? "text-brand-700"
                        : "text-slate-600 group-hover:text-brand-700"
                    )}
                    variants={backVariants}
                    transition={sharedTransition}
                    style={{
                      transformStyle: "preserve-3d",
                      transformOrigin: "center top",
                      rotateX: 90,
                    }}
                  >
                    <span
                      className={cn(
                        "transition-colors",
                        isActive
                          ? "text-brand-600"
                          : "text-slate-500 group-hover:text-brand-600"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </motion.div>
                </motion.div>
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </motion.nav>
  );
}
