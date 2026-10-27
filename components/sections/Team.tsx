import React from 'react';
import { TeamData } from '@/types/templates.types';

export const Team = ({ data }: { data?: TeamData }) => {
  if (!data) return null;

  return (
    <section id="team" className="w-full py-20 lg:py-28 bg-white relative scroll-mt-20">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-10">

        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[var(--color-accent)]" />
            <h4 className="text-[var(--color-accent)] font-bold text-xs tracking-widest uppercase">
              {data.subtitle}
            </h4>
            <span className="w-8 h-[2px] bg-[var(--color-accent)]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-primary)] mb-4">
            {data.title1} <span className="text-[var(--color-accent-muted)]">{data.title2}</span>
          </h2>

          {data.description && (
            <p className="text-[var(--color-text-light)] max-w-2xl text-sm sm:text-base leading-relaxed font-light">
              {data.description}
            </p>
          )}
        </div>

        {/* Team Grid — Editorial Wix Studio Arch Frame Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {data.members?.map((member) => (
            <div 
              key={member.id} 
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              
              {/* Arch Shaped Image Container (Curved top, flat bottom) */}
              <div className="relative w-full aspect-[3.4/4.5] rounded-t-full rounded-b-2xl overflow-hidden bg-[var(--color-bg-alt)] border-2 border-[var(--color-border)] group-hover:border-[var(--color-accent)]/50 shadow-sm group-hover:shadow-xl transition-all duration-500 ease-out p-1.5 bg-gradient-to-b from-[var(--color-bg-decorative)] to-white">
                <div className="w-full h-full rounded-t-full rounded-b-xl overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  {/* Gentle gradient overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Text Area Below Arch with Natural Rhythm */}
              <div className="pt-6 flex flex-col items-center w-full">
                <h3 className="text-xl font-bold font-serif text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300 mb-1">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-[var(--color-accent-muted)] tracking-wide">
                  {member.role}
                </p>
                <div className="w-6 h-[1.5px] bg-[var(--color-border)] group-hover:w-12 group-hover:bg-[var(--color-accent)] transition-all duration-300 mt-3" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
