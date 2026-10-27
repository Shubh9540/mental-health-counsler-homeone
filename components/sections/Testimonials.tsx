'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { TestimonialsData } from '@/types/templates.types';
import useEmblaCarousel from 'embla-carousel-react';
import { FaArrowLeft, FaArrowRight, FaQuoteLeft, FaStar } from 'react-icons/fa';

export const Testimonials = ({ data }: { data?: TestimonialsData }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    skipSnaps: false
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (!data || !data.testimonials) return null;

  return (
    <section id="testimonials" className="bg-[var(--color-primary)] py-20 lg:py-28 relative overflow-hidden text-white scroll-mt-20">
      
      {/* Background ambient lighting */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[var(--color-accent)]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[var(--color-accent-muted)]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-10 relative flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* Left Side: Header & Nav Controls */}
        <div className="w-full lg:w-[35%] flex flex-col justify-center text-left">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[var(--color-accent-light)]" />
            <h4 className="text-[var(--color-accent-light)] font-bold text-xs tracking-widest uppercase">
              {data.subtitle}
            </h4>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight mb-4">
            {data.title1}{' '}
            <span className="text-[var(--color-accent-light)] font-normal italic">
              {data.title2}
            </span>
          </h2>

          <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8 font-light">
            {data.description}
          </p>

          {/* Carousel Arrows (Infinite Loop Navigation) */}
          <div className="flex items-center gap-4">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-white/20 bg-white/10 hover:bg-white text-white hover:text-[var(--color-primary)] flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <FaArrowLeft className="text-sm" />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-white/20 bg-white/10 hover:bg-white text-white hover:text-[var(--color-primary)] flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer"
              aria-label="Next Testimonial"
            >
              <FaArrowRight className="text-sm" />
            </button>
          </div>
        </div>

        {/* Right Side: Carousel Slides with Infinite Loop */}
        <div className="w-full lg:w-[65%] overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-6">
            {data.testimonials.map((item) => (
              <div key={item.id} className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] pl-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/15 p-7 sm:p-8 rounded-3xl h-full flex flex-col justify-between hover:bg-white/15 transition-colors duration-300 shadow-lg">
                  <div>
                    {/* Stars & Quote Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex text-[var(--color-accent-light)] text-sm gap-1">
                        {[...Array(item.rating || 5)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                      <FaQuoteLeft className="text-white/20 text-2xl" />
                    </div>

                    <p className="text-white/95 text-sm sm:text-base leading-relaxed italic mb-6 font-light">
                      &quot;{item.quote}&quot;
                    </p>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center gap-4 pt-5 border-t border-white/10">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white/25 shadow-sm"
                    />
                    <div>
                      <h4 className="font-bold text-white text-base leading-tight">{item.name}</h4>
                      {item.location && (
                        <p className="text-xs text-white/70 font-light mt-0.5">{item.location}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
