'use client';

import React from 'react';

import { motion } from 'framer-motion';



const partners = [

  { name: "British Council", abbr: "BC" },

  { name: "UKVI", abbr: "UKVI" },

  { name: "ICEF", abbr: "ICEF" },

  { name: "EAIE", abbr: "EAIE" },

  { name: "NAFSA", abbr: "NAFSA" },

  { name: "QAA", abbr: "QAA" }

];



export default function PartnersSection() {

  return (

    <section className="py-[58px] bg-slate-50 border-y border-slate-100">

      <div className="container mx-auto px-6 lg:px-12">

        <motion.div 

          className="text-center mb-9"

          initial={{ opacity: 0 }}

          whileInView={{ opacity: 1 }}

          viewport={{ once: true }}

        >

          <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">

            Recognized & Accredited By

          </p>

        </motion.div>



        {/* Infinite Scroll Partners */}

        <div className="relative overflow-hidden">

          <motion.div 

            className="flex gap-12 items-center"

            animate={{ x: [0, -1000] }}

            transition={{ 

              duration: 20, 

              repeat: Infinity, 

              ease: "linear" 

            }}

          >

            {[...partners, ...partners, ...partners].map((partner, index) => (

              <div 

                key={index}

                className="flex-shrink-0 px-8 py-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"

              >

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">

                    <span className="text-sm font-bold text-purple-600">{partner.abbr.slice(0, 2)}</span>

                  </div>

                  <span className="text-slate-700 font-semibold whitespace-nowrap">{partner.name}</span>

                </div>

              </div>

            ))}

          </motion.div>

          

          {/* Gradient Overlays */}

          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />

          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />

        </div>

      </div>

    </section>

  );

}