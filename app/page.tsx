import React from 'react';

import HeroSection from '@/components/home/HeroSection';

import ServicesSection from '@/components/home/ServicesSection';

import StatsSection from '@/components/home/StatsSection';

import FounderVideoSection from '@/components/home/FounderVideoSection';

import TestimonialsSection from '@/components/home/TestimonialsSection';

import HowItWorksSection from '@/components/home/HowItWorksSection';

import AboutSection from '@/components/home/AboutSection';

import DestinationsSection from '@/components/home/DestinationsSection';

import SocialMediaSection from '@/components/home/SocialMediaSection';

import BlogSection from '@/components/home/BlogSection';

import PartnersSection from '@/components/home/PartnersSection';

import CTASection from '@/components/home/CTASection';



export default function Home() {

  return (

    <div className="overflow-hidden">

      <HeroSection />

      <ServicesSection />

      <StatsSection />

      <HowItWorksSection />

      <AboutSection />

      <FounderVideoSection />

      <DestinationsSection />

      <SocialMediaSection />

      <BlogSection />

      <TestimonialsSection />

      <PartnersSection />

      <CTASection />

    </div>

  );

}
