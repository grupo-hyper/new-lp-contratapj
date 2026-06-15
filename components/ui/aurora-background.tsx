"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export function AuroraBackground({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden bg-brand-950 text-white",
        className
      )}
      {...props}
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={
          {
            "--transparent": "transparent",
            // Aurora em tons de azul da marca ContrataPJ
            "--aurora":
              "repeating-linear-gradient(100deg, #1d4ed8 10%, #93c5fd 15%, #60a5fa 20%, #c7d2fe 25%, #3b82f6 30%)",
            "--dark-gradient":
              "repeating-linear-gradient(100deg, #0c1f5c 0%, #0c1f5c 7%, var(--transparent) 10%, var(--transparent) 12%, #0c1f5c 16%)",
          } as React.CSSProperties
        }
      >
        <div
          className={cn(
            `pointer-events-none absolute -inset-[10px] will-change-transform
             [background-image:var(--dark-gradient),var(--aurora)]
             [background-size:300%,_200%] [background-position:50%_50%,50%_50%]
             opacity-40 blur-[10px]
             after:absolute after:inset-0 after:content-[""]
             after:[background-image:var(--dark-gradient),var(--aurora)]
             after:[background-size:200%,_100%] after:[background-attachment:fixed]
             after:mix-blend-difference after:animate-aurora`,
            showRadialGradient &&
              "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]"
          )}
        />
      </div>
      {children}
    </div>
  );
}
