"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type YouTubeCardProps = {
  videoId: string;
  className?: string;
};

export function YouTubeCard({ videoId, className }: YouTubeCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const poster = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div
      className={cn(
        "relative rounded-xl overflow-hidden shadow-2xl group",
        className
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isPlaying ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="ContrataPJ apresentação"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full aspect-video"
        />
      ) : (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={poster}
            alt="Thumbnail do vídeo ContrataPJ"
            className="w-full aspect-video object-cover"
          />

          <AnimatePresence>
            {(isHovering || true) && (
              <motion.div
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovering ? 1 : 0.7 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center bg-black/20"
              >
                <motion.div
                  animate={{ scale: isHovering ? 1.1 : 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => setIsPlaying(true)}
                    className="bg-black/30 hover:bg-black/50 text-white rounded-full w-16 h-16 pointer-events-auto"
                    aria-label="Reproduzir vídeo"
                  >
                    <Play className="w-8 h-8 fill-white" />
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="absolute left-3 bottom-3 text-xs text-white/70 bg-black/30 px-2 py-1 rounded-full pointer-events-none">
            Paused
          </div>
        </>
      )}
    </div>
  );
}
