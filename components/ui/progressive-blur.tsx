import { cn } from "@/lib/utils";

interface ProgressiveBlurProps {
  direction?: "left" | "right";
  blurIntensity?: number;
  className?: string;
}

export function ProgressiveBlur({
  direction = "left",
  className,
}: ProgressiveBlurProps) {
  const gradient =
    direction === "left"
      ? "linear-gradient(to right, white, transparent)"
      : "linear-gradient(to left, white, transparent)";

  return (
    <div
      className={cn("pointer-events-none", className)}
      style={{ background: gradient }}
    />
  );
}
