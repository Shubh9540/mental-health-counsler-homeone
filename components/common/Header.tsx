'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { HeaderData } from '@/types/templates.types';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Header = ({ data }: { data?: HeaderData }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      setIsScrolled(scrollPos > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
    };
  }, []);

  if (!data) return null;

  return (
    <header 
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-[var(--color-header-sticky)] shadow-xl py-3 lg:py-4 border-b border-white/10' 
          : 'bg-gradient-to-b from-[var(--color-primary)]/85 via-[var(--color-primary)]/45 to-transparent py-5 lg:py-6'
      }`}
    >
      <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 gap-6">
        
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <img 
            src={data.logo} 
            alt={data.logoAlt || 'Logo'} 
            className={`object-contain transition-all duration-300 ${
              isScrolled ? 'h-14 sm:h-16 lg:h-16' : 'h-16 sm:h-20 lg:h-20'
            }`} 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-5">
          {data.navLinks?.map((link) => (
            <Link 
              key={link.id} 
              href={link.url}
              className="px-3 py-2 text-sm xl:text-base font-semibold tracking-wide text-white/95 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        {data.contactButton && (
          <div className="hidden lg:flex items-center shrink-0">
            <Link 
              href={data.contactButton.url}
              className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-muted)] text-white text-sm xl:text-base font-semibold py-3 px-7 rounded-full transition-all duration-300 shadow-md hover:shadow-xl whitespace-nowrap"
            >
              {data.contactButton.text}
            </Link>
          </div>
        )}

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white text-2xl p-2 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[var(--color-primary)] border-t border-white/10 px-6 py-6 flex flex-col gap-3 shadow-2xl">
          {data.navLinks?.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white text-base font-medium py-2.5 border-b border-white/5 hover:text-[var(--color-accent-light)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          {data.contactButton && (
            <Link
              href={data.contactButton.url}
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[var(--color-accent)] text-white text-center text-base font-semibold py-3.5 px-6 rounded-full mt-3 shadow-md"
            >
              {data.contactButton.text}
            </Link>
          )}
        </div>
      )}
    </header>
  );
};
