'use client';

import React from 'react';

import { motion } from 'framer-motion';

import { Card, CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { GraduationCap, Building2, FileCheck, Plane, Users, Briefcase, Globe, Shield, Handshake } from 'lucide-react';

const services = [

  {

    icon: GraduationCap,

    title: "Expert Consultation",

    description: "Personalized guidance from experienced counsellors who understand your academic aspirations and help you choose the perfect program.",

    color: "from-purple-500 to-purple-600",

    bgColor: "bg-purple-50",

    iconBg: "bg-purple-100"

  },

  {

    icon: Building2,

    title: "Partner Universities",

    description: "Access to 150+ prestigious universities worldwide with insider insights into programs, culture, and admission processes.",

    color: "from-pink-500 to-pink-600",

    bgColor: "bg-pink-50",

    iconBg: "bg-pink-100"

  },

  {

    icon: FileCheck,

    title: "Visa Assistance",

    description: "Comprehensive support throughout your visa application with a 99% success rate. We handle the paperwork so you can focus on your future.",

    color: "from-yellow-500 to-orange-500",

    bgColor: "bg-yellow-50",

    iconBg: "bg-yellow-100"

  },

  {

    icon: Plane,

    title: "Pre-Departure Support",

    description: "From accommodation to travel arrangements, we ensure you're fully prepared for your new adventure abroad.",

    color: "from-cyan-500 to-blue-500",

    bgColor: "bg-cyan-50",

    iconBg: "bg-cyan-100"

  },

  {

    icon: Users,

    title: "Student Engagement Hub",

    description: "Centralized platform to manage and support international students throughout their journey.",

    color: "from-emerald-500 to-teal-500",

    bgColor: "bg-emerald-50",

    iconBg: "bg-emerald-100"

  },

  {

    icon: Handshake,

    title: "Mentorship Network",

    description: "Connect with alumni mentors who have successfully navigated the international student journey.",

    color: "from-indigo-500 to-purple-500",

    bgColor: "bg-indigo-50",

    iconBg: "bg-indigo-100"

  },

  {

    icon: Briefcase,

    title: "Career Pathways",

    description: "Access exclusive job opportunities, internships, and career resources tailored for international students.",

    color: "from-orange-500 to-red-500",

    bgColor: "bg-orange-50",

    iconBg: "bg-orange-100"

  },

  {

    icon: Shield,

    title: "Immigration Support",

    description: "Automated visa tracking and compliance tools to ensure student success.",

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

    <section className="pt-[54px] pb-[86px] bg-white relative overflow-hidden">

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

          <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text text-sm font-semibold tracking-wider uppercase mb-[14px]">

            Our Services

          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-5">

            How We Help You

            <span className="text-purple-600"> Succeed</span>

          </h2>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto">

            From the first consultation to your arrival at university, we're with you every step of the way.

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