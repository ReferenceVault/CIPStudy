'use client';

import React from 'react';

import { motion } from 'framer-motion';

import Image from 'next/image';

import { Card, CardContent } from "@/components/ui/card";

import { MapPin, GraduationCap, ArrowRight } from 'lucide-react';

const destinations = [

  {

    country: "United Kingdom",

    flag: "🇬🇧",

    universities: 85,

    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop",

    highlight: "World-class education hub"

  },

  {

    country: "United States",

    flag: "🇺🇸",

    universities: 45,

    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600&h=400&fit=crop",

    highlight: "Innovation & research leaders"

  },

  {

    country: "Canada",

    flag: "🇨🇦",

    universities: 30,

    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&h=400&fit=crop",

    highlight: "Welcoming international community"

  },

  {

    country: "Australia",

    flag: "🇦🇺",

    universities: 25,

    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600&h=400&fit=crop",

    highlight: "Quality lifestyle & education"

  }

];

export default function DestinationsSection() {

  return (

    <section className="py-24 bg-white relative overflow-hidden">

      {/* Background Decoration */}

      <div className="absolute inset-0 opacity-5">

        <div className="absolute top-0 left-0 w-full h-full" style={{

          backgroundImage: 'radial-gradient(circle at 2px 2px, purple 1px, transparent 0)',

          backgroundSize: '40px 40px'

        }} />

      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Section Header */}

        <motion.div 

          className="text-center mb-16"

          initial={{ opacity: 0, y: 30 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

        >

          <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text text-sm font-semibold tracking-wider uppercase mb-4">

            Study Destinations

          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">

            Where Will You

            <span className="text-purple-600"> Study?</span>

          </h2>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto">

            Explore top study destinations with world-renowned universities and vibrant student communities

          </p>

        </motion.div>

        {/* Destinations Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {destinations.map((dest, index) => (

            <motion.div

              key={index}

              initial={{ opacity: 0, y: 30 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}

              transition={{ delay: index * 0.1 }}

            >

              <Card className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">

                <CardContent className="p-0 relative">

                  {/* Image */}

                  <div className="relative h-64 overflow-hidden">

                    <motion.div

                      whileHover={{ scale: 1.1 }}

                      transition={{ duration: 0.6 }}

                      className="w-full h-full"

                    >

                      <Image 

                        src={dest.image}

                        alt={dest.country}

                        fill

                        className="object-cover"

                      />

                    </motion.div>

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

                    

                    {/* Flag Badge */}

                    <motion.div 

                      className="absolute top-4 right-4 text-4xl"

                      whileHover={{ scale: 1.2, rotate: 10 }}

                    >

                      {dest.flag}

                    </motion.div>

                    {/* Content Overlay */}

                    <div className="absolute bottom-0 left-0 right-0 p-6">

                      <h3 className="text-2xl font-bold text-white mb-2">{dest.country}</h3>

                      <p className="text-purple-200 text-sm mb-3">{dest.highlight}</p>

                      <div className="flex items-center gap-4 text-white/80 text-sm">

                        <span className="flex items-center gap-1">

                          <GraduationCap className="w-4 h-4" />

                          {dest.universities}+ Universities

                        </span>

                      </div>

                    </div>

                  </div>

                  {/* Hover Overlay */}

                  <motion.div 

                    className="absolute inset-0 bg-gradient-to-t from-purple-600 to-pink-600 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center"

                  >

                    <div className="text-center text-white">

                      <p className="text-lg font-semibold mb-2">Explore Programs</p>

                      <motion.div

                        className="inline-flex items-center gap-2"

                        whileHover={{ x: 5 }}

                      >

                        View Details <ArrowRight className="w-5 h-5" />

                      </motion.div>

                    </div>

                  </motion.div>

                </CardContent>

              </Card>

            </motion.div>

          ))}

        </div>

        {/* World Map Decoration */}

        <motion.div 

          className="mt-16 text-center"

          initial={{ opacity: 0 }}

          whileInView={{ opacity: 1 }}

          viewport={{ once: true }}

        >

          <div className="inline-flex items-center gap-3 bg-purple-50 px-6 py-3 rounded-full">

            <MapPin className="w-5 h-5 text-purple-600" />

            <span className="text-slate-700">We also support destinations in <strong>Germany, Ireland, Netherlands</strong> and more</span>

          </div>

        </motion.div>

      </div>

    </section>

  );

}