"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import Image from "next/image";

interface FeatureItem {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
}

interface FeatureCarouselProps {
  features: FeatureItem[];
}

export function FeatureCarousel({ features }: FeatureCarouselProps) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Auto-advance progress bar (~6s per feature)
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 60);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const t = setTimeout(() => {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }, 200);
      return () => clearTimeout(t);
    }
  }, [progress, features.length]);

  // Keep active feature centred on mobile horizontal scroll
  useEffect(() => {
    const activeEl = featureRefs.current[currentFeature];
    const container = containerRef.current;
    if (activeEl && container) {
      const containerRect = container.getBoundingClientRect();
      const elementRect = activeEl.getBoundingClientRect();
      container.scrollTo({
        left:
          activeEl.offsetLeft - (containerRect.width - elementRect.width) / 2,
        behavior: "smooth",
      });
    }
  }, [currentFeature]);

  const handleFeatureClick = (index: number) => {
    setCurrentFeature(index);
    setProgress(0);
  };

  return (
    <div className="grid lg:grid-cols-2 lg:gap-16 gap-8 items-center">
      {/* Left: feature list with progress */}
      <div
        ref={containerRef}
        className="lg:space-y-6 md:space-x-6 lg:space-x-0 overflow-x-auto no-scrollbar lg:overflow-visible flex lg:flex-col flex-row order-1 pb-4 scroll-smooth"
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;
          const isActive = currentFeature === index;

          return (
            <div
              key={feature.id}
              ref={(el) => {
                featureRefs.current[index] = el;
              }}
              className="relative cursor-pointer flex-shrink-0"
              onClick={() => handleFeatureClick(index)}
            >
              <div
                className={`flex lg:flex-row flex-col items-start gap-4 p-4 max-w-sm lg:max-w-2xl transition-all duration-300 ${
                  isActive
                    ? "bg-white md:shadow-xl rounded-xl md:border border-slate-200"
                    : ""
                }`}
              >
                {/* Icon */}
                <div
                  className={`p-3 hidden md:block rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-brand-600 text-white"
                      : "bg-brand-600/10 text-brand-600"
                  }`}
                >
                  <Icon size={24} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3
                    className={`font-heading text-lg md:mt-4 lg:mt-0 font-semibold mb-2 transition-colors duration-300 ${
                      isActive ? "text-slate-900" : "text-slate-700"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`transition-colors duration-300 text-sm leading-relaxed ${
                      isActive ? "text-slate-600" : "text-slate-500"
                    }`}
                  >
                    {feature.description}
                  </p>
                  <div className="mt-4 bg-slate-200 rounded-sm h-1 overflow-hidden">
                    {isActive && (
                      <motion.div
                        className="h-full bg-gradient-to-r from-brand-500 to-brand-600"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1, ease: "linear" }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Right: image */}
      <div className="relative order-2 w-full max-w-2xl mx-auto lg:scale-110 lg:origin-left">
        <motion.div
          key={currentFeature}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative"
        >
          <Image
            className="rounded-2xl border border-slate-100 shadow-lg w-full h-auto"
            src={features[currentFeature].image}
            alt={features[currentFeature].title}
            width={800}
            height={600}
          />
        </motion.div>
      </div>
    </div>
  );
}
