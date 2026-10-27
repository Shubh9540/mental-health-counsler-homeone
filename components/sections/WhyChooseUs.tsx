import React from 'react';
import { WhyChooseUsData } from '@/types/templates.types';
import { FaLaptopMedical, FaBrain, FaUserMd, FaFileMedical } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaLaptopMedical': return <FaLaptopMedical />;
    case 'FaBrain': return <FaBrain />;
    case 'FaUserMd': return <FaUserMd />;
    case 'FaFileMedical': return <FaFileMedical />;
    default: return <FaBrain />;
  }
};

export const WhyChooseUs = ({ data }: { data?: WhyChooseUsData }) => {
  if (!data) return null;

  return (
    <section id="why-choose-us" className="w-full py-16 lg:py-20 bg-white relative overflow-hidden scroll-mt-24">
      <div className="max-w-[1250px] mx-auto px-4 md:px-6 lg:px-8 relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-14">

        {/* Left Side: Content & Features */}
        <div className="w-full lg:w-1/2 flex flex-col">
          
          {/* Subtitle */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[2px] bg-[var(--color-accent)]" />
            <h4 className="text-[var(--color-accent)] font-bold text-xs tracking-widest uppercase">
              {data.subtitle}
            </h4>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-primary)] leading-tight mb-4">
            {data.title1} <span className="text-[var(--color-accent-muted)]">{data.title2}</span>
          </h2>

          {/* Subheading */}
          {data.subheading && (
            <h3 className="text-lg font-medium text-[var(--color-accent)] mb-3">
              {data.subheading}
            </h3>
          )}

          {/* Description */}
          <p className="text-[var(--color-text-light)] text-sm sm:text-base leading-relaxed mb-8">
            {data.description}
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.features?.map((item) => (
              <div 
                key={item.id} 
                className="p-5 rounded-2xl bg-[var(--color-bg-alt)] border border-[var(--color-border)] flex items-start gap-4 hover:border-[var(--color-accent-muted)] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center shrink-0 text-xl">
                  {renderIcon(item.icon)}
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-primary)] text-sm sm:text-base mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--color-text-light)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-lg aspect-[4/4.5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src={data.image} 
              alt="Why Choose Us" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

      </div>
    </section>
  );
};
