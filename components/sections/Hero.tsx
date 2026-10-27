import React from 'react';
import { HeroData } from '@/types/templates.types';
import Link from 'next/link';
import { FaArrowRight, FaShieldAlt, FaUserCheck, FaHeart } from 'react-icons/fa';

export const Hero = ({ data }: { data?: HeroData }) => {
  if (!data) return null;

  return (
    <section id="hero" className="relative w-full min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden scroll-mt-20">
      
      {/* Full-width Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={data.image1} 
          alt="Counseling and Therapy" 
          className="w-full h-full object-cover object-[center_right] sm:object-center" 
        />
        {/* Solid Dark Readability Gradient (Strong contrast on text side) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary)]/85 to-[var(--color-primary)]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/90 via-transparent to-[var(--color-primary)]/60" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-10 pt-32 pb-16 lg:pt-40 lg:pb-24 flex flex-col justify-center min-h-[85vh]">
        <div className="max-w-2xl lg:max-w-3xl flex flex-col items-start text-left">
          
          {/* Elegant Subtitle */}
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 sm:w-12 h-[2px] bg-[var(--color-accent-light)]" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[var(--color-accent-light)] uppercase">
              {data.subtitle}
            </span>
          </div>

          {/* Large Bold Headline with Crystal Clear Colors */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black text-white leading-[1.15] tracking-tight mb-6 drop-shadow-lg">
            <span>{data.title1}</span>{' '}
            <span className="text-[var(--color-accent-light)] block sm:inline">
              {data.title2}
            </span>
          </h1>

          {/* Description with High Contrast White Text */}
          <p className="text-base sm:text-lg lg:text-xl text-white font-medium leading-relaxed mb-10 max-w-2xl drop-shadow-md">
            {data.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-12">
            {data.button1 && (
              <Link 
                href={data.button1.url} 
                className="group inline-flex items-center gap-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-muted)] text-white text-sm sm:text-base font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
              >
                <span>{data.button1.text.replace('>', '').trim()}</span>
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            )}

            {data.button2 && (
              <Link 
                href={data.button2.url} 
                className="inline-flex items-center justify-center bg-[var(--color-primary-dark)]/80 hover:bg-[var(--color-primary-dark)] border-2 border-white/30 text-white text-sm sm:text-base font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                {data.button2.text.replace('>', '').trim()}
              </Link>
            )}
          </div>

          {/* Trust Highlights / Badges with Dark Backdrops for Sharp Visibility */}
          <div className="w-full pt-8 border-t border-white/20 grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center shrink-0 shadow-md">
                <FaShieldAlt className="text-base" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-white/75 uppercase tracking-wider font-semibold">Privacy</span>
                <span className="text-xs sm:text-sm font-bold text-white">100% Confidential</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center shrink-0 shadow-md">
                <FaUserCheck className="text-base" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-white/75 uppercase tracking-wider font-semibold">Experts</span>
                <span className="text-xs sm:text-sm font-bold text-white">Certified Doctors</span>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center shrink-0 shadow-md">
                <FaHeart className="text-base" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-white/75 uppercase tracking-wider font-semibold">Support</span>
                <span className="text-xs sm:text-sm font-bold text-white">Personalized Care</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
