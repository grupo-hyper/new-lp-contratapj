"use client";

import type React from "react";
import { cn } from "@/lib/utils";

interface ShinyButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  size?: "default" | "sm";
  target?: string;
  rel?: string;
}

export function ShinyButton({
  children,
  href,
  onClick,
  className = "",
  size = "default",
  target,
  rel,
}: ShinyButtonProps) {
  const classes = cn("shiny-cta", size === "sm" && "shiny-cta--sm", className);

  if (href) {
    return (
      <a href={href} target={target} rel={rel} onClick={onClick} className={classes}>
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      <span>{children}</span>
    </button>
  );
}
