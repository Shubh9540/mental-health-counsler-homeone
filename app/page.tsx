import React from 'react';
import { HealthCounselorTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';

import { Header } from '@/components/common/Header';
import { Hero } from '@/components/sections/Hero';
import { AboutUs } from '@/components/sections/AboutUs';
import { Services } from '@/components/sections/Services';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Impact } from '@/components/sections/Impact';
import { Team } from '@/components/sections/Team';
import { Gallery } from '@/components/sections/Gallery';
import { Testimonials } from '@/components/sections/Testimonials';
import { ContactUs } from '@/components/sections/ContactUs';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Home() {
  const templateData: HealthCounselorTemplateData = rawData;
  const sectionData = templateData?.categories?.HealthCounselor?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col scroll-smooth">
      <Header data={sectionData.Header?.variants?.HealthCounselorHeader2} />
      <Hero data={sectionData.Hero?.variants?.HealthCounselorHero2} />
      <AboutUs data={sectionData.AboutUs?.variants?.HealthCounselorAboutUs2} />
      <Services data={sectionData.Services?.variants?.HealthCounselorServices2} />
      <WhyChooseUs data={sectionData.WhyChooseUs?.variants?.HealthCounselorWhyChooseUs2} />
      <Impact data={sectionData.Counter?.variants?.HealthCounselorCounter2} />
      <Team data={sectionData.Team?.variants?.HealthCounselorTeam2} />
      <Gallery data={sectionData.Gallery?.variants?.HealthCounselorGallery2} />
      <Testimonials data={sectionData.Testimonials?.variants?.HealthCounselorTestimonials2} />
      <ContactUs data={sectionData.ContactUs?.variants?.HealthCounselorContactUs2} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
