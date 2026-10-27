import React from 'react';
import { AboutUsData } from '@/types/templates.types';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export const AboutUs = ({ data }: { data?: AboutUsData }) => {
  if (!data) return null;

  return (
    <section id="about" className="w-full py-24 lg:py-32 bg-white relative scroll-mt-16">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Header Row — Wix Studio Style Clean Section Tag & Editorial Intro */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-14 border-b border-[var(--color-border)] mb-16 lg:mb-20">
          <div className="max-w-xl">
            <span className="text-xs font-semibold tracking-[0.25em] text-[var(--color-accent)] uppercase block mb-3">
              {data.subtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[var(--color-primary)] leading-[1.2]">
              {data.title1}{' '}
              <span className="italic font-light text-[var(--color-accent)]">
                {data.title2}
              </span>
            </h2>
          </div>

          <div className="max-w-md lg:pb-1">
            <p className="text-base text-[var(--color-text-light)] leading-relaxed font-normal">
              {data.description1}
            </p>
          </div>
        </div>

        {/* Main Content Grid — Asymmetrical Wix Studio Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Clean Full-bleed Image Frame (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full aspect-[16/11] rounded-3xl overflow-hidden bg-[var(--color-bg-alt)]">
              <img
                src={data.imageMain}
                alt="Therapy space"
                className="w-full h-full object-cover object-center hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </div>
          </div>

          {/* Right Column: Editorial Text, Numbered Principles & Stat Badge (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col lg:pt-4">
            
            {data.description2 && (
              <p className="text-sm sm:text-base text-[var(--color-text-light)] leading-relaxed mb-8 pb-6 border-b border-[var(--color-border)]">
                {data.description2}
              </p>
            )}

            {/* Clean Numbered Principles */}
            <div className="flex flex-col divide-y divide-[var(--color-border)] mb-8">
              {data.features?.map((item, index) => (
                <div key={item.id} className="py-5 first:pt-0 last:pb-0 flex items-start gap-5 group">
                  <span className="font-serif text-xl sm:text-2xl text-[var(--color-accent-light)] group-hover:text-[var(--color-accent)] transition-colors shrink-0">
                    0{index + 1}
                  </span>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-[var(--color-primary)] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[var(--color-text-light)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stat Box positioned cleanly under right-side content */}
            <div className="pt-6 border-t border-[var(--color-border)] flex items-center gap-4">
              <span className="font-serif text-3xl sm:text-4xl font-normal text-[var(--color-primary)] shrink-0">
                {data.yearsOfExperience}
              </span>
              <span className="text-xs sm:text-sm text-[var(--color-text-light)] leading-snug">
                {data.experienceLabel}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
