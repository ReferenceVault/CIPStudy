'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, Award } from 'lucide-react';
import { Button } from "@/components/ui/button";

const features = [
  "Personalized counseling tailored to your goals",
  "Direct partnerships with top-ranked universities",
  "End-to-end application management",
  "Post-arrival support and guidance",
  "Transparent pricing with no hidden fees",
  "Dedicated counselor throughout your journey"
];

function CountUp({ end, suffix = '', duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);
      
      if (progress < 1) {
        setCount(Math.floor(end * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, isInView]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function AboutSection() {
  return (
    <section className="pt-[46px] pb-[69px] bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-pink-100 rounded-full blur-3xl opacity-40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-purple-600 font-semibold text-xs uppercase tracking-wider mb-2 bg-purple-50 px-3 py-1.5 rounded-full">
              About CIP StudyAbroad
            </span>
            
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">
              Transforming Lives Through{' '}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent">
                Global Education
              </span>
            </h2>
            
            <p className="text-base text-slate-600 mb-4 leading-relaxed">
              CIP StudyAbroad is a premier education consultancy dedicated to helping ambitious 
              students achieve their dreams of studying at world-renowned universities. With a 
              presence across multiple countries, we have successfully guided thousands of 
              students to prestigious institutions worldwide.
            </p>
            
            <p className="text-base text-slate-600 mb-6 leading-relaxed">
              Our team of experienced counselors brings together expertise in international 
              education, immigration processes, and career development to provide comprehensive 
              support at every step of your journey.
            </p>

            {/* Feature List */}
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl px-6 py-4 text-base font-semibold shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-105"
            >
              Learn More About Us
            </Button>
          </motion.div>

          {/* Right Content - Stats & Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-3">
                  <div className="relative h-36 rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop" 
                      alt="Students graduating"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=400&fit=crop" 
                      alt="University campus"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-3 pt-6">
                  <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=400&fit=crop" 
                      alt="Students studying"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative h-36 rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1560439514-4e9645039924?w=400&h=300&fit=crop" 
                      alt="Consultation session"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">
                      <CountUp end={99} suffix="%" />
                    </div>
                    <div className="text-sm text-slate-600 font-medium">Success Rate</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

