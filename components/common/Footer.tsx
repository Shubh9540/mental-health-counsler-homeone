'use client';
import React from 'react';
import Link from 'next/link';
import { FooterData } from '@/types/templates.types';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt 
} from 'react-icons/fa';

const renderSocialIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF': return <FaFacebookF />;
    case 'FaInstagram': return <FaInstagram />;
    case 'FaLinkedinIn': return <FaLinkedinIn />;
    case 'FaYoutube': return <FaYoutube />;
    default: return null;
  }
};

export const Footer = ({ data }: { data?: FooterData }) => {
  if (!data) return null;

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[var(--color-primary)] text-white pt-16 sm:pt-20 pb-8 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Col 1: Brand & About (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start gap-5">
            {data.logo ? (
              <a href="#" onClick={scrollToTop} className="inline-block transition-transform hover:scale-105 duration-300">
                <img 
                  src={data.logo} 
                  alt={data.logoAlt} 
                  className="h-20 sm:h-24 lg:h-28 w-auto max-w-[280px] sm:max-w-[320px] object-contain drop-shadow-md" 
                />
              </a>
            ) : (
              <h3 className="text-2xl font-bold font-serif">{data.brandTitle}</h3>
            )}
            
            <p className="text-white/75 text-sm sm:text-base leading-relaxed max-w-md font-light">
              {data.description}
            </p>

            {/* Social Icons with circular badges */}
            <div className="flex items-center gap-3 pt-2">
              {data.socialLinks?.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--color-accent)] border border-white/15 text-white flex items-center justify-center text-sm transition-all duration-300 hover:-translate-y-1"
                >
                  {renderSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation / Quick Links (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="text-base font-serif font-bold text-white tracking-wider uppercase border-b border-white/10 pb-3">
              {data.col2Title || 'Navigation'}
            </h4>
            
            <ul className="grid grid-cols-2 gap-y-3 gap-x-6">
              {data.quickLinks?.map((link) => (
                <li key={link.id}>
                  {link.url === '#' ? (
                    <button
                      type="button"
                      onClick={scrollToTop}
                      className="text-white/75 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1.5 hover:translate-x-1 transition-transform"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-light)] opacity-70" />
                      {link.label}
                    </button>
                  ) : (
                    <Link 
                      href={link.url}
                      className="text-white/75 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1.5 hover:translate-x-1 transition-transform"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-light)] opacity-70" />
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Info (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-base font-serif font-bold text-white tracking-wider uppercase border-b border-white/10 pb-3">
              {data.col3Title || 'Contact Details'}
            </h4>
            
            <div className="flex flex-col gap-4 text-white/80 text-sm">
              
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-white/10 border border-white/15 text-[var(--color-accent-light)] flex items-center justify-center shrink-0 text-xs mt-0.5 aspect-square">
                  <FaMapMarkerAlt />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-wider text-white/50 font-medium">Address</span>
                  <span className="text-sm text-white/90 leading-snug">{data.contactInfo?.address}</span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-white/10 border border-white/15 text-[var(--color-accent-light)] flex items-center justify-center shrink-0 text-xs mt-0.5 aspect-square">
                  <FaPhoneAlt />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-wider text-white/50 font-medium">Phone</span>
                  <a 
                    href={`tel:${data.contactInfo?.phone?.replace(/\s+/g, '')}`} 
                    className="text-sm font-semibold text-white hover:text-[var(--color-accent-light)] transition-colors"
                  >
                    {data.contactInfo?.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-white/10 border border-white/15 text-[var(--color-accent-light)] flex items-center justify-center shrink-0 text-xs mt-0.5 aspect-square">
                  <FaEnvelope />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-wider text-white/50 font-medium">Email</span>
                  <a 
                    href={`mailto:${data.contactInfo?.email}`} 
                    className="text-sm font-semibold text-white hover:text-[var(--color-accent-light)] transition-colors"
                  >
                    {data.contactInfo?.email}
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 text-center text-xs sm:text-sm text-white/60">
          <p className="leading-relaxed">
            {data.copyrightText}
          </p>
        </div>

      </div>
    </footer>
  );
};
