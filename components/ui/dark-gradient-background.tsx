import type React from "react";

interface GradientBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export function GradientBackground({
  children,
  className = "",
}: GradientBackgroundProps) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* Gradiente principal — cores ContrataPJ (azul-marinho → azul da marca) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #050a1f 0%, #0c1f5c 30%, #1e3a8a 65%, #2563eb 100%)",
        }}
      />

      {/* Grid geométrico */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Linhas diagonais para textura extra */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Conteúdo */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
