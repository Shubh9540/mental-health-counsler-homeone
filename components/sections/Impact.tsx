'use client';
import React from 'react';
import { CounterData } from '@/types/templates.types';
import CountUp from 'react-countup';
import { FaAward, FaUsers, FaComments, FaTasks } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaAward': return <FaAward size={28} />;
    case 'FaUsers': return <FaUsers size={28} />;
    case 'FaComments': return <FaComments size={28} />;
    case 'FaTasks': return <FaTasks size={28} />;
    default: return <FaAward size={28} />;
  }
};

export const Impact = ({ data }: { data?: CounterData }) => {
  if (!data || !data.items) return null;

  return (
    <section id="impact" className="relative py-16 lg:py-20 bg-[var(--color-primary)] text-white scroll-mt-24">
      <div className="relative z-10 max-w-[1250px] mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:divide-x lg:divide-white/10">
          {data.items.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center px-4">
              
              {/* Icon Circle */}
              <div className="w-16 h-16 rounded-2xl bg-white/10 text-[var(--color-accent-light)] flex items-center justify-center mb-5 shadow-inner">
                {renderIcon(item.icon)}
              </div>

              {/* Number with suffix */}
              <div className="text-4xl lg:text-5xl font-bold font-serif mb-2 tracking-tight text-white">
                <CountUp
                  end={item.number}
                  duration={2.5}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                />
                {item.suffix && <span>{item.suffix}</span>}
              </div>

              {/* Sub-label */}
              <p className="text-sm font-medium text-white/80 whitespace-pre-line leading-relaxed">
                {item.label || item.title}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
