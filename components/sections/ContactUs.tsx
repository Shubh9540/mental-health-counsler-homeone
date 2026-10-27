'use client';
import React, { useState } from 'react';
import { ContactUsData } from '@/types/templates.types';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

export const ContactUs = ({ data }: { data?: ContactUsData }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!data) return null;

  return (
    <section id="contact" className="w-full py-20 lg:py-28 bg-[var(--color-bg-alt)] relative scroll-mt-20 overflow-hidden">
      
      <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-10 relative z-10">

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
            {data.title1}{' '}
            <span className="text-[var(--color-accent-muted)] font-normal italic">
              {data.title2}
            </span>
          </h2>

          <p className="text-[var(--color-text-light)] max-w-xl text-sm sm:text-base leading-relaxed font-light">
            {data.description}
          </p>
        </div>

        {/* Modern Wix Studio Architecture: Solid Dark Side + Crisp Form Side */}
        <div className="w-full bg-white rounded-[2.5rem] shadow-xl border border-[var(--color-border)] overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Solid Deep Purple Container with 100% Crisp Visibility (5 Cols) */}
          <div className="lg:col-span-5 bg-[var(--color-primary)] text-white p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
            
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] text-[var(--color-accent-light)] uppercase block mb-3">
                {data.cardSubtitle || 'DIRECT CONTACT'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4 leading-snug">
                {data.cardTitle || 'Talk to Us Directly'}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed font-light mb-8">
                {data.cardDescription || 'Reach out by phone or email anytime. We are always ready to assist you.'}
              </p>
            </div>

            {/* Clean High-Contrast Contact Info List */}
            <div className="flex flex-col divide-y divide-white/10">
              
              {/* Phone */}
              <div className="py-5 first:pt-0 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/15 text-[var(--color-accent-light)] flex items-center justify-center shrink-0 text-base aspect-square">
                  <FaPhoneAlt />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-wider text-white/60 font-medium">
                    {data.contactInfo.phoneTitle}
                  </span>
                  <span className="text-base font-semibold text-white mt-0.5">
                    {data.contactInfo.phone?.split('\n')[0]}
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="py-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/15 text-[var(--color-accent-light)] flex items-center justify-center shrink-0 text-base aspect-square">
                  <FaEnvelope />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-wider text-white/60 font-medium">
                    {data.contactInfo.emailTitle}
                  </span>
                  <span className="text-base font-semibold text-white mt-0.5">
                    {data.contactInfo.email?.split('\n')[0]}
                  </span>
                </div>
              </div>

              {/* Address */}
              <div className="py-5 last:pb-0 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/15 text-[var(--color-accent-light)] flex items-center justify-center shrink-0 text-base aspect-square">
                  <FaMapMarkerAlt />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-wider text-white/60 font-medium">
                    {data.contactInfo.addressTitle}
                  </span>
                  <span className="text-sm text-white/90 leading-relaxed mt-0.5 font-light">
                    {data.contactInfo.address?.replace('\n', ', ')}
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Clean Light Form (7 Cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center bg-white">
            
            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--color-primary)] mb-2">
                {data.form.title}
              </h3>
              <p className="text-sm text-[var(--color-text-light)] leading-relaxed font-light">
                {data.form.description}
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[var(--color-bg-alt)] border border-[var(--color-accent)]/30 text-center">
                <div className="w-14 h-14 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  ✓
                </div>
                <h4 className="text-lg font-bold text-[var(--color-primary)] mb-1">Message Sent Successfully!</h4>
                <p className="text-xs text-[var(--color-text-light)]">We will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="flex flex-col gap-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={data.form.namePlaceholder}
                      className="w-full px-4 py-3.5 rounded-xl bg-[var(--color-bg-alt)] border border-[var(--color-border)] text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={data.form.emailPlaceholder}
                      className="w-full px-4 py-3.5 rounded-xl bg-[var(--color-bg-alt)] border border-[var(--color-border)] text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder={data.form.phonePlaceholder}
                      className="w-full px-4 py-3.5 rounded-xl bg-[var(--color-bg-alt)] border border-[var(--color-border)] text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder={data.form.subjectPlaceholder || 'Consultation Request'}
                      className="w-full px-4 py-3.5 rounded-xl bg-[var(--color-bg-alt)] border border-[var(--color-border)] text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={data.form.messagePlaceholder}
                    className="w-full px-4 py-3.5 rounded-xl bg-[var(--color-bg-alt)] border border-[var(--color-border)] text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-muted)] text-white text-sm sm:text-base font-bold py-4 px-9 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>{data.form.buttonText}</span>
                    <FaPaperPlane className="text-xs" />
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
