'use client';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { GalleryData, GalleryImage } from '@/types/templates.types';
import useEmblaCarousel from 'embla-carousel-react';
import { FaArrowLeft, FaArrowRight, FaTimes, FaSearchPlus } from 'react-icons/fa';

export const Gallery = ({ data }: { data?: GalleryData }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-slide that pauses on hover
  useEffect(() => {
    if (!emblaApi) return;

    const startAutoplay = () => {
      stopAutoplay();
      autoplayTimerRef.current = setInterval(() => {
        if (!isHovered) {
          emblaApi.scrollNext();
        }
      }, 3000);
    };

    const stopAutoplay = () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
        autoplayTimerRef.current = null;
      }
    };

    startAutoplay();

    return () => {
      stopAutoplay();
    };
  }, [emblaApi, isHovered]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const activeIndex = activeImage && data?.images 
    ? data.images.findIndex((img) => img.id === activeImage.id) 
    : -1;

  const handleLightboxPrev = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!data?.images || activeIndex === -1) return;
    const prevIndex = (activeIndex - 1 + data.images.length) % data.images.length;
    setActiveImage(data.images[prevIndex]);
  }, [data?.images, activeIndex]);

  const handleLightboxNext = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!data?.images || activeIndex === -1) return;
    const nextIndex = (activeIndex + 1) % data.images.length;
    setActiveImage(data.images[nextIndex]);
  }, [data?.images, activeIndex]);

  // Handle keyboard events (Escape, ArrowLeft, ArrowRight) in lightbox
  useEffect(() => {
    if (!activeImage) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveImage(null);
      if (e.key === 'ArrowLeft') handleLightboxPrev();
      if (e.key === 'ArrowRight') handleLightboxNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImage, handleLightboxPrev, handleLightboxNext]);

  if (!data || !data.images) return null;

  return (
    <section id="gallery" className="w-full bg-[var(--color-bg-alt)] py-20 lg:py-28 relative scroll-mt-20 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-10">

        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[var(--color-accent)]" />
              <h4 className="text-[var(--color-accent)] font-bold text-xs tracking-widest uppercase">
                {data.subtitle}
              </h4>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-primary)]">
              {data.title1}{' '}
              <span className="text-[var(--color-accent-muted)] font-normal italic">
                {data.title2}
              </span>
            </h2>
          </div>

          {/* Working Arrow Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              aria-label="Previous Image"
              className="w-12 h-12 rounded-full border border-[var(--color-border)] bg-white hover:bg-[var(--color-accent)] text-[var(--color-primary)] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
            >
              <FaArrowLeft className="text-sm" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next Image"
              className="w-12 h-12 rounded-full border border-[var(--color-border)] bg-white hover:bg-[var(--color-accent)] text-[var(--color-primary)] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
            >
              <FaArrowRight className="text-sm" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport (Hover pauses auto-slide) */}
        <div 
          className="overflow-hidden" 
          ref={emblaRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex -ml-6">
            {data.images.map((item) => (
              <div 
                key={item.id} 
                className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6"
              >
                <div
                  onClick={() => setActiveImage(item)}
                  className="relative group overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500 w-full aspect-[4/3.2] cursor-pointer border border-[var(--color-border)]"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />

                  {/* Hover Overlay with Zoom Icon */}
                  <div className="absolute inset-0 bg-[var(--color-primary-dark)]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/95 text-[var(--color-accent)] flex items-center justify-center text-lg shadow-xl scale-75 group-hover:scale-100 transition-transform duration-300">
                      <FaSearchPlus />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal (Click to open full size image with prev/next navigation) */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in-up select-none"
          onClick={() => setActiveImage(null)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center text-xl transition-all duration-300 cursor-pointer shadow-lg"
            aria-label="Close Preview"
          >
            <FaTimes />
          </button>

          {/* Previous Arrow Button */}
          <button
            type="button"
            onClick={handleLightboxPrev}
            className="absolute left-3 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white text-white hover:text-[var(--color-primary)] border border-white/20 flex items-center justify-center text-sm sm:text-base transition-all duration-300 cursor-pointer shadow-2xl backdrop-blur-sm"
            aria-label="Previous image"
          >
            <FaArrowLeft />
          </button>

          {/* Next Arrow Button */}
          <button
            type="button"
            onClick={handleLightboxNext}
            className="absolute right-3 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white text-white hover:text-[var(--color-primary)] border border-white/20 flex items-center justify-center text-sm sm:text-base transition-all duration-300 cursor-pointer shadow-2xl backdrop-blur-sm"
            aria-label="Next image"
          >
            <FaArrowRight />
          </button>

          {/* Full Image Container */}
          <div 
            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage.image}
              alt={activeImage.alt}
              className="max-h-[80vh] w-auto max-w-[90vw] object-contain rounded-2xl shadow-2xl"
            />
            {data.images && activeIndex !== -1 && (
              <span className="text-white/60 text-xs sm:text-sm mt-3 font-medium">
                {activeIndex + 1} / {data.images.length}
              </span>
            )}
          </div>
        </div>
      )}

    </section>
  );
};
