"use client";

import { useEffect, useState } from "react";

export interface WordCarouselProps {
  phrases: string[];
}

export default function WordCarousel({ phrases }: WordCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000); // Change phrase every 3 seconds

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <div className="relative h-10 w-full max-w-3xl mx-auto">
      <div className="h-10 flex items-center justify-center">
        <span className="text-2xl font-medium text-slate-600 dark:text-slate-300 whitespace-nowrap transition-opacity duration-500">
          {phrases[currentIndex]}
        </span>
      </div>
    </div>
  );
}