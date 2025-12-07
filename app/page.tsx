import React from 'react';

import HeroSection from '@/components/home/HeroSection';

import ServicesSection from '@/components/home/ServicesSection';

import StatsSection from '@/components/home/StatsSection';

import FounderVideoSection from '@/components/home/FounderVideoSection';

import TestimonialsSection from '@/components/home/TestimonialsSection';

import DestinationsSection from '@/components/home/DestinationsSection';

import NewsSection from '@/components/home/NewsSection';

import PartnersSection from '@/components/home/PartnersSection';

import CTASection from '@/components/home/CTASection';



export default function Home() {

  return (

    <div className="overflow-hidden">

      <HeroSection />

      <ServicesSection />

      <StatsSection />

      <FounderVideoSection />

      <DestinationsSection />

      <TestimonialsSection />

      <NewsSection />

      <PartnersSection />

      <CTASection />

    </div>

  );

}
