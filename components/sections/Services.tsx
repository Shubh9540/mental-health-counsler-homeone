import React from 'react';
import { ServicesData } from '@/types/templates.types';
import Link from 'next/link';
import { FaUserAlt, FaUserFriends, FaUsers, FaChild, FaSpa, FaChartBar, FaArrowRight } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaUserAlt': return <FaUserAlt />;
    case 'FaUserFriends': return <FaUserFriends />;
    case 'FaUsers': return <FaUsers />;
    case 'FaChild': return <FaChild />;
    case 'FaSpa': return <FaSpa />;
    case 'FaChartBar': return <FaChartBar />;
    default: return <FaUserAlt />;
  }
};

export const Services = ({ data }: { data?: ServicesData }) => {
  if (!data) return null;

  return (
    <section id="services" className="w-full py-20 lg:py-28 bg-[var(--color-bg-alt)] relative scroll-mt-20">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-10 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-18">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[var(--color-accent)]" />
            <h4 className="text-[var(--color-accent)] font-bold text-xs tracking-widest uppercase">
              {data.subtitle}
            </h4>
            <span className="w-8 h-[2px] bg-[var(--color-accent)]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-primary)] leading-tight mb-4">
            {data.title1} <span className="text-[var(--color-accent-muted)]">{data.title2}</span>
          </h2>

          <p className="text-[var(--color-text-light)] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-light">
            {data.description}
          </p>
        </div>

        {/* Full Image Cards Grid with Smooth Hover Reveal Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.services?.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-lg hover:shadow-2xl transition-all duration-500 bg-[var(--color-primary)] cursor-pointer"
            >
              {/* Background Cover Image with Hover Zoom */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Natural Resting Gradient (Always Dark at bottom for Title readability) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dark)]/90 via-[var(--color-primary-dark)]/30 to-transparent group-hover:opacity-0 transition-opacity duration-500" />

              {/* Hover Dark Overlay (Solid & Deep for 100% Crisp Visibility) */}
              <div className="absolute inset-0 bg-[var(--color-primary-dark)]/95 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Top Corner Icon Pill */}
              <div className="absolute top-5 right-5 w-12 h-12 rounded-2xl bg-white/95 backdrop-blur-md text-[var(--color-accent)] flex items-center justify-center text-lg shadow-md group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors duration-300 z-10">
                {renderIcon(service.icon)}
              </div>

              {/* Default Bottom State: Title visible when NOT hovering */}
              <div className="absolute bottom-0 inset-x-0 p-7 group-hover:opacity-0 group-hover:translate-y-4 transition-all duration-300 z-10">
                <h3 className="text-2xl font-serif font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {service.title}
                </h3>
              </div>

              {/* Hover Revealed State: Detail + Book / Contact Button */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out z-10">
                <h3 className="text-2xl font-serif font-extrabold text-white mb-3 drop-shadow-md">
                  {service.title}
                </h3>
                
                <p className="text-sm sm:text-base text-white/95 leading-relaxed mb-6 font-medium drop-shadow-sm">
                  {service.description}
                </p>

                <div>
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2.5 bg-[var(--color-accent)] hover:bg-[var(--color-accent-muted)] text-white text-xs sm:text-sm font-bold py-3.5 px-7 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl"
                  >
                    <span>Contact Us</span>
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
