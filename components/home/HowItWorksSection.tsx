'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Search, FileText, CreditCard, Plane, GraduationCap, Handshake, Shield } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: UserPlus,
    title: 'Create Your Profile',
    description: 'Sign up and complete your student profile with academic background, test scores, and study preferences. Get matched with suitable programs through our AI-powered recommendations.',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600'
  },
  {
    id: 2,
    icon: Search,
    title: 'Explore Programs',
    description: 'Browse 150,000+ programs from 500+ universities worldwide. Filter by country, field, tuition, intake dates, and scholarships. Get instant program eligibility assessment.',
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
    iconColor: 'text-pink-600'
  },
  {
    id: 3,
    icon: FileText,
    title: 'Apply Directly',
    description: 'Submit applications directly to universities with quality checks and document verification. Track application status in real-time. Get expert guidance via 24/7 Zoom consultations.',
    color: 'from-purple-500 to-pink-600',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600'
  },
  {
    id: 4,
    icon: CreditCard,
    title: 'Secure Funding',
    description: 'Access scholarships, student loans, and financial aid opportunities. Get help with tuition payment plans and currency exchange guidance for international transactions.',
    color: 'from-pink-500 to-rose-600',
    bgColor: 'bg-pink-50',
    iconColor: 'text-pink-600'
  },
  {
    id: 5,
    icon: Plane,
    title: 'Visa Assistance',
    description: 'Complete visa application support with document preparation, interview coaching, and submission guidance.',
    color: 'from-purple-600 to-indigo-600',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600'
  },
  {
    id: 6,
    icon: GraduationCap,
    title: 'Arrival & Settlement',
    description: 'Pre-departure orientation, accommodation support, airport pickup assistance, and local integration guidance. Ongoing support throughout your studies.',
    color: 'from-pink-600 to-purple-600',
    bgColor: 'bg-pink-50',
    iconColor: 'text-pink-600'
  },
  {
    id: 7,
    icon: Handshake,
    title: 'Career Mentorship',
    description: 'Connect with alumni mentors who have successfully navigated the journey. Access exclusive job opportunities, internships, and career resources tailored for international students.',
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'bg-indigo-50',
    iconColor: 'text-indigo-600'
  },
  {
    id: 8,
    icon: Shield,
    title: 'Immigration',
    description: 'Post-study work permits and permanent residency pathway guidance. Work permit assistance. PR pathway guidance. Family sponsorship. Compliance support.',
    color: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-50',
    iconColor: 'text-violet-600'
  }
];

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="pt-[46px] pb-[69px] bg-white px-[3%]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-3 py-1.5 bg-purple-50 rounded-full text-purple-600 text-xs font-medium mb-2">
            How It Works
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
            8 Steps to Your
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent"> Dream University</span>
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto mb-6">
            Our streamlined process makes studying abroad simple and stress-free
          </p>
        </motion.div>

        {/* Steps tabs */}
        <div className="flex flex-col gap-3 mb-8">
          {/* First line: Steps 1-5 */}
          <div className="flex flex-wrap justify-center gap-2">
            {steps.filter(step => step.id <= 5).map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`px-4 py-2 rounded-lg font-medium text-xs transition-all ${
                  activeStep === step.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {step.id}. {step.title}
              </button>
            ))}
          </div>
          {/* Second line: Steps 6-8 */}
          <div className="flex flex-wrap justify-center gap-2">
            {steps.filter(step => step.id > 5).map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`px-4 py-2 rounded-lg font-medium text-xs transition-all ${
                  activeStep === step.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {step.id}. {step.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active step detail */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          {steps.filter(s => s.id === activeStep).map((step) => (
            <div
              key={step.id}
              className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-5 md:p-6 border border-slate-100 shadow-lg shadow-slate-100/50"
            >
              <div className="flex flex-col md:flex-row items-center gap-5">
                <div className={`w-16 h-16 rounded-xl ${step.bgColor} flex items-center justify-center flex-shrink-0`}>
                  <step.icon className={`w-8 h-8 ${step.iconColor}`} />
                </div>
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <span className={`w-6 h-6 rounded-full bg-gradient-to-r ${step.color} text-white flex items-center justify-center text-xs font-bold`}>
                      {step.id}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Progress indicator */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeStep === step.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 w-8'
                  : 'bg-slate-200 hover:bg-slate-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

