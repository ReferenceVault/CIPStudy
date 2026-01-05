'use client';

import React from 'react';

import { motion, animate } from 'framer-motion';

import { useEffect, useState } from 'react';

import Image from 'next/image';



const stats = [

  { value: 3000, suffix: "+", label: "Students Enrolled", description: "Successfully placed worldwide" },

  { value: 150, suffix: "+", label: "Partner Universities", description: "Across UK, USA, Canada & Europe" },

  { value: 99, suffix: "%", label: "Visa Success Rate", description: "Industry-leading approval rate" },

  { value: 15, suffix: "+", label: "Years Experience", description: "Trusted education consultancy" }

];



function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {

  const [displayValue, setDisplayValue] = useState(0);



  useEffect(() => {

    const controls = animate(0, value, {

      duration: 2.5,

      ease: "easeOut",

      onUpdate: (latest) => setDisplayValue(Math.round(latest))

    });

    return () => controls.stop();

  }, [value]);



  return (

    <span>

      {displayValue.toLocaleString()}{suffix}

    </span>

  );

}



export default function StatsSection() {

  return (

    <section className="pt-[46px] pb-[69px] relative overflow-hidden px-[3%]">

      {/* Background Image with Overlay */}

      <div className="absolute inset-0">

        <Image 

          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&h=800&fit=crop"

          alt="University campus"

          fill

          className="object-cover"

        />

        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/95 via-purple-800/90 to-pink-900/95" />

      </div>



      {/* Decorative Elements */}

      <motion.div 

        className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full"

        animate={{ rotate: 360 }}

        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}

      />

      <motion.div 

        className="absolute bottom-10 right-10 w-48 h-48 border border-white/10 rounded-full"

        animate={{ rotate: -360 }}

        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}

      />



      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Section Header */}

        <motion.div 

          className="text-center mb-10"

          initial={{ opacity: 0, y: 30 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

          transition={{ duration: 0.6 }}

        >

          <span className="inline-block bg-yellow-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold mb-3">

            WHO WE ARE

          </span>

          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">

            A Global Education Consultancy

          </h2>

          <h3 className="text-xl lg:text-2xl font-semibold text-white/90 mb-3">

            First True Virtual EdTech Study Abroad Platform

          </h3>

          <p className="text-base text-purple-100 max-w-3xl mx-auto leading-relaxed">

            CIP is First True Virtual EdTech Study Abroad Platform headquartered in Toronto, Canada, with presence in India, Nepal, Pakistan, Bangladesh, Ukraine Philippines and Brazil. We&apos;ve revolutionized international education recruitment. We partner with accredited universities worldwide to help students achieve their global dreams.

          </p>

        </motion.div>



        {/* Stats Grid */}

        <motion.div 

          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"

          initial={{ opacity: 0 }}

          whileInView={{ opacity: 1 }}

          viewport={{ once: true }}

          transition={{ delay: 0.3 }}

        >

          {stats.map((stat, index) => (

            <motion.div

              key={index}

              className="text-center group"

              initial={{ opacity: 0, y: 30 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}

              transition={{ delay: index * 0.1 + 0.4 }}

            >

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/20 transition-all duration-300">

                <motion.div 

                  className="text-3xl lg:text-4xl font-bold text-white mb-1"

                  whileInView={{ scale: [0.5, 1.1, 1] }}

                  viewport={{ once: true }}

                  transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}

                >

                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />

                </motion.div>

                <h3 className="text-sm font-semibold text-yellow-400 mb-1">{stat.label}</h3>

                <p className="text-purple-200 text-xs">{stat.description}</p>

              </div>

            </motion.div>

          ))}

        </motion.div>



        {/* Trust Badges */}

        <motion.div 

          className="mt-10 text-center"

          initial={{ opacity: 0 }}

          whileInView={{ opacity: 1 }}

          viewport={{ once: true }}

          transition={{ delay: 0.8 }}

        >

          <p className="text-purple-100 text-base max-w-2xl mx-auto leading-relaxed">Connect with 500+ universities via Zoom consultations available 24/7. Everything online, Apply from anywhere.</p>

        </motion.div>

      </div>

    </section>

  );

}