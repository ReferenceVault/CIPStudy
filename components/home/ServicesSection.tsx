'use client';

import React from 'react';

import { motion } from 'framer-motion';

import { Card, CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { GraduationCap, Building2, FileCheck, Plane, Users, Briefcase, Globe, Shield, Handshake, DollarSign, Clock } from 'lucide-react';

const services = [

  {

    icon: GraduationCap,

    title: "Expert Consultation",

    description: "Personalized guidance from experienced counsellors who understand your academic aspirations and help you choose the perfect program",

    color: "from-purple-500 to-purple-600",

    bgColor: "bg-purple-50",

    iconBg: "bg-purple-100"

  },

  {

    icon: Building2,

    title: "University Placement",

    description: "Access to 200+ partner universities worldwide. We match you with institutions that fit your profile and aspirations.",

    color: "from-pink-500 to-pink-600",

    bgColor: "bg-pink-50",

    iconBg: "bg-pink-100"

  },

  {

    icon: DollarSign,

    title: "Student Loans",

    description: "Financial Support - Student loan assistance and payment solutions for international students. Payment plans. Currency exchange guidance.",

    color: "from-green-500 to-emerald-600",

    bgColor: "bg-green-50",

    iconBg: "bg-green-100"

  },

  {

    icon: FileCheck,

    title: "Visa Assistance",

    description: "Comprehensive support through the entire visa application process with a 95% success rate. Visa tracking and compliance tools to ensure student success.",

    color: "from-yellow-500 to-orange-500",

    bgColor: "bg-yellow-50",

    iconBg: "bg-yellow-100"

  },

  {

    icon: Plane,

    title: "Pre-Departure Support",

    description: "Everything you need before you travel - from flights, accommodation booking to travel arrangements, airport pickup and orientation.",

    color: "from-cyan-500 to-blue-500",

    bgColor: "bg-cyan-50",

    iconBg: "bg-cyan-100"

  },

  {

    icon: Clock,

    title: "24/7 Student Support",

    description: "Centralized platform and 24/7 zoom virtual office staff to manage and support international students throughout their journey.",

    color: "from-emerald-500 to-teal-500",

    bgColor: "bg-emerald-50",

    iconBg: "bg-emerald-100"

  },

  {

    icon: Handshake,

    title: "Mentorship & Career",

    description: "Connect with alumni mentors who have successfully navigated the journey. Access exclusive job opportunities, internships, and career resources tailored for international students.",

    color: "from-indigo-500 to-purple-500",

    bgColor: "bg-indigo-50",

    iconBg: "bg-indigo-100"

  },

  {

    icon: Shield,

    title: "Immigration Support",

    description: "Post-study work permits and permanent residency pathway guidance. Work permit assistance. PR pathway guidance. Family sponsorship. Compliance support.",

    color: "from-violet-500 to-purple-500",

    bgColor: "bg-violet-50",

    iconBg: "bg-violet-100"

  }

];

const containerVariants = {

  hidden: { opacity: 0 },

  visible: {

    opacity: 1,

    transition: {

      staggerChildren: 0.15

    }

  }

};

const cardVariants = {

  hidden: { opacity: 0, y: 40 },

  visible: { 

    opacity: 1, 

    y: 0,

    transition: { duration: 0.6, ease: "easeOut" }

  }

};

export default function ServicesSection() {

  return (

    <section className="pt-[46px] pb-[69px] bg-white relative overflow-hidden px-[3%]">

      {/* Background Decorations */}

      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Section Header */}

        <motion.div 

          className="text-center mb-14"

          initial={{ opacity: 0, y: 30 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

          transition={{ duration: 0.6 }}

        >

          <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text text-sm font-semibold tracking-wider uppercase mb-0.5">

            Our Services

          </span>

          <h2 className="text-[1.9rem] lg:text-[2.55rem] font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent mb-0.5">

            First True Virtual EdTech Platform

          </h2>

          <h3 className="text-[1.0625rem] lg:text-[1.2rem] font-semibold text-slate-700 max-w-2xl mx-auto mb-2">

            How We Help You <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent font-semibold">Succeed</span>

          </h3>

          <p className="text-[1.0625rem] text-slate-600 max-w-2xl mx-auto">

            Get expert guidance from anywhere in the world, 24/7. 
            From the first consultation to your arrival at university, till your immigration, we&apos;re with you 24/7 every step of the way.

          </p>

        </motion.div>

        {/* Services Grid */}

        <motion.div 

          className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"

          variants={containerVariants}

          initial="hidden"

          whileInView="visible"

          viewport={{ once: true, margin: "-100px" }}

        >

          {services.map((service, index) => (

            <motion.div key={index} variants={cardVariants}>

              <Card className="group h-full border-0 shadow-lg shadow-slate-100 hover:shadow-2xl hover:shadow-purple-100/50 transition-all duration-500 overflow-hidden">

                <CardContent className="p-5">

                  {/* Icon */}

                  <motion.div 

                    className={`w-12 h-12 ${service.iconBg} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}

                    whileHover={{ rotate: [0, -10, 10, 0] }}

                    transition={{ duration: 0.5 }}

                  >

                    <service.icon 
                      className={`w-6 h-6 bg-gradient-to-r ${service.color} bg-clip-text`} 
                      style={{ 
                        color: service.color.includes('purple-500') ? '#9333EA' : 
                               service.color.includes('pink') ? '#EC4899' : 
                               service.color.includes('yellow') ? '#EAB308' : 
                               service.color.includes('cyan') || service.color.includes('blue-500') ? '#06B6D4' : 
                               service.color.includes('emerald') || service.color.includes('teal') ? '#10B981' : 
                               service.color.includes('indigo') ? '#6366F1' : 
                               service.color.includes('orange') || service.color.includes('red') ? '#F97316' : 
                               service.color.includes('violet') ? '#8B5CF6' : '#9333EA' 
                      }} 
                    />

                  </motion.div>

                  {/* Content */}

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">

                    {service.title}

                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">

                    {service.description}

                  </p>

                </CardContent>

                {/* Bottom Gradient Bar */}

                <div className={`h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

              </Card>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>

  );

}