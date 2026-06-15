"use client";

import * as React from "react";
import { motion, PanInfo } from "motion/react";
import { cn } from "@/lib/utils";

interface VideoItem {
  id: string;
  title: string;
}

interface VideoCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  videos: VideoItem[];
  showArrows?: boolean;
  showDots?: boolean;
}

export function VideoCarousel({
  className,
  videos,
  showArrows = true,
  showDots = true,
  ...props
}: VideoCarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [exitX, setExitX] = React.useState(0);

  const advance = (dir: number) => {
    setExitX(dir * 300);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
      setExitX(0);
    }, 200);
  };

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (Math.abs(info.offset.x) > 100) {
      advance(info.offset.x > 0 ? 1 : -1);
    }
  };

  return (
    <div
      className={cn("w-full flex flex-col items-center justify-center", className)}
      {...props}
    >
      <div className="relative w-full max-w-2xl aspect-video">
        {videos.map((video, index) => {
          const isCurrentCard = index === currentIndex;
          const isPrevCard = index === (currentIndex + 1) % videos.length;
          const isNextCard = index === (currentIndex + 2) % videos.length;

          if (!isCurrentCard && !isPrevCard && !isNextCard) return null;

          return (
            <motion.div
              key={video.id}
              className={cn(
                "absolute w-full h-full rounded-2xl overflow-hidden bg-white shadow-xl",
                isCurrentCard
                  ? "cursor-grab active:cursor-grabbing"
                  : "pointer-events-none"
              )}
              style={{ zIndex: isCurrentCard ? 3 : isPrevCard ? 2 : 1 }}
              drag={isCurrentCard ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.7}
              onDragEnd={isCurrentCard ? handleDragEnd : undefined}
              initial={{
                scale: 0.95,
                opacity: 0,
                y: isCurrentCard ? 0 : isPrevCard ? 12 : 24,
                rotate: isCurrentCard ? 0 : isPrevCard ? -2 : -4,
              }}
              animate={{
                scale: isCurrentCard ? 1 : 0.95,
                opacity: isCurrentCard ? 1 : isPrevCard ? 0.6 : 0.3,
                x: isCurrentCard ? exitX : 0,
                y: isCurrentCard ? 0 : isPrevCard ? 12 : 24,
                rotate: isCurrentCard ? exitX / 20 : isPrevCard ? -2 : -4,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </motion.div>
          );
        })}
      </div>

      {/* Title of current video */}
      <p className="mt-6 text-sm font-medium text-slate-600 text-center max-w-md px-2">
        {videos[currentIndex].title}
      </p>

      {/* Controls */}
      <div className="mt-4 flex items-center gap-6">
        {showArrows && (
          <button
            type="button"
            onClick={() => advance(-1)}
            aria-label="Vídeo anterior"
            className="w-10 h-10 rounded-full border border-slate-200 bg-white text-slate-500 hover:text-brand-600 hover:border-brand-300 transition-colors flex items-center justify-center text-xl"
          >
            &larr;
          </button>
        )}

        {showDots && (
          <div className="flex justify-center gap-2">
            {videos.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  index === currentIndex ? "bg-brand-600" : "bg-slate-300"
                )}
              />
            ))}
          </div>
        )}

        {showArrows && (
          <button
            type="button"
            onClick={() => advance(1)}
            aria-label="Próximo vídeo"
            className="w-10 h-10 rounded-full border border-slate-200 bg-white text-slate-500 hover:text-brand-600 hover:border-brand-300 transition-colors flex items-center justify-center text-xl"
          >
            &rarr;
          </button>
        )}
      </div>
    </div>
  );
}
