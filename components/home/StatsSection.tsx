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

    <section className="py-24 relative overflow-hidden">

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

          className="text-center mb-16"

          initial={{ opacity: 0, y: 30 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

          transition={{ duration: 0.6 }}

        >

          <span className="inline-block bg-yellow-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">

            WHO WE ARE

          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">

            A Global Education Consultancy

          </h2>

          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">

            Study Global is headquartered in London, UK, with presence in Nigeria, Ghana, Kenya, and Qatar. 

            We partner with accredited universities worldwide to help students achieve their dreams.

          </p>

        </motion.div>



        {/* Stats Grid */}

        <motion.div 

          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"

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

              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/20 transition-all duration-300">

                <motion.div 

                  className="text-5xl lg:text-6xl font-bold text-white mb-2"

                  whileInView={{ scale: [0.5, 1.1, 1] }}

                  viewport={{ once: true }}

                  transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}

                >

                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />

                </motion.div>

                <h3 className="text-xl font-semibold text-yellow-400 mb-2">{stat.label}</h3>

                <p className="text-purple-200 text-sm">{stat.description}</p>

              </div>

            </motion.div>

          ))}

        </motion.div>



        {/* Trust Badges */}

        <motion.div 

          className="mt-16 flex flex-wrap justify-center items-center gap-8"

          initial={{ opacity: 0 }}

          whileInView={{ opacity: 1 }}

          viewport={{ once: true }}

          transition={{ delay: 0.8 }}

        >

          <p className="text-purple-200 text-sm">Trusted by leading institutions:</p>

          <div className="flex flex-wrap justify-center gap-8 opacity-60">

            {['British Council', 'UKVI', 'EAIE', 'ICEF'].map((partner, i) => (

              <div key={i} className="text-white font-semibold text-lg px-4 py-2 border border-white/20 rounded-lg">

                {partner}

              </div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>

  );

}