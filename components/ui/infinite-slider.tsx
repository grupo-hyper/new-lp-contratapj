"use client";

import { cn } from "@/lib/utils";

interface InfiniteSliderProps {
  children: React.ReactNode;
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  reverse?: boolean;
  className?: string;
}

export function InfiniteSlider({
  children,
  gap = 40,
  speed = 30,
  speedOnHover,
  reverse = false,
  className,
}: InfiniteSliderProps) {
  /*
   * Each copy has padding-right === gap so that copy_width = N*(logoWidth+gap).
   * Total track = 2 * copy_width → translateX(-50%) lands exactly at the
   * start of the second copy, creating a seamless loop.
   */
  const copyStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
    gap: `${gap}px`,
    paddingRight: `${gap}px`,
  };

  return (
    <>
      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .infinite-slider-track {
          animation: infinite-scroll ${speed}s linear infinite ${reverse ? "reverse" : "normal"};
        }
        ${
          speedOnHover != null
            ? `.infinite-slider-track:hover { animation-duration: ${speedOnHover}s; }`
            : ""
        }
      `}</style>

      <div className={cn("overflow-hidden w-full", className)}>
        <div className="infinite-slider-track flex w-max items-center">
          <div style={copyStyle}>{children}</div>
          <div style={copyStyle}>{children}</div>
        </div>
      </div>
    </>
  );
}
