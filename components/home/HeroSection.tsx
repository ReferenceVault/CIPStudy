'use client';

import React from 'react';

import { motion } from 'framer-motion';

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { Search, ArrowRight } from 'lucide-react';



export default function HeroSection() {

  return (

    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-white">

      {/* Floating Decorative Elements */}

      <motion.div 

        className="absolute top-20 right-20 w-64 h-64 bg-yellow-300/20 rounded-full blur-3xl"

        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}

        transition={{ duration: 8, repeat: Infinity }}

      />

      <motion.div 

        className="absolute bottom-20 left-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"

        animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}

        transition={{ duration: 10, repeat: Infinity }}

      />



      <div className="container mx-auto px-6 lg:px-12 pt-[164px] pb-20 relative z-10">

        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">

          {/* Left Content */}

          <motion.div

            initial={{ opacity: 0, x: -50 }}

            animate={{ opacity: 1, x: 0 }}

            transition={{ duration: 0.8 }}

          >

            <motion.div 

              className="inline-block mb-6"

              initial={{ scale: 0 }}

              animate={{ scale: 1 }}

              transition={{ delay: 0.3, type: "spring" }}

            >

              <span className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-full text-sm font-medium">

                🎓 Start Your Global Journey

              </span>

            </motion.div>

            

            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">

              Your Future

              <span className="relative">

                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"> Awaits </span>

                <motion.svg 

                  className="absolute -bottom-2 left-0 w-full"

                  viewBox="0 0 200 12"

                  initial={{ pathLength: 0 }}

                  animate={{ pathLength: 1 }}

                  transition={{ delay: 1, duration: 1 }}

                >

                  <motion.path

                    d="M0 6 Q50 0 100 6 T200 6"

                    fill="none"

                    stroke="#FACC15"

                    strokeWidth="4"

                    strokeLinecap="round"

                  />

                </motion.svg>

              </span>

              <br />Abroad

            </h1>

            

            <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">

              Join thousands of international students building better futures through world-class education. 

              We guide you every step of the way.

            </p>



            <div className="flex flex-col sm:flex-row gap-4 mb-12">

              <Button 

                size="lg" 

                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-purple-500/30 transition-all hover:shadow-xl hover:shadow-purple-500/40"

              >

                Apply Now

                <ArrowRight className="ml-2 h-5 w-5" />

              </Button>

              <Button 

                size="lg" 

                variant="outline"

                className="border-2 border-slate-300 hover:border-purple-500 px-8 py-6 text-lg rounded-full"

              >

                Explore Programs

              </Button>

            </div>



            {/* Search Box */}

            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-2 max-w-lg">

              <div className="flex items-center gap-2">

                <div className="flex-1 relative">

                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />

                  <Input 

                    placeholder="Search courses, universities..."

                    className="pl-12 pr-4 py-6 border-0 focus-visible:ring-0 text-lg"

                  />

                </div>

                <Button className="bg-purple-600 hover:bg-purple-700 px-6 py-6 rounded-xl">

                  <Search className="h-5 w-5" />

                </Button>

              </div>

            </div>

          </motion.div>



          {/* Right Content - Image Collage */}

          <motion.div

            className="relative hidden lg:block"

            initial={{ opacity: 0, x: 50 }}

            animate={{ opacity: 1, x: 0 }}

            transition={{ duration: 0.8, delay: 0.2 }}

          >

            <div className="relative">

              {/* Main Image */}

              <motion.div 

                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"

                whileHover={{ scale: 1.02 }}

                transition={{ type: "spring", stiffness: 300 }}

              >

                <img 

                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=700&fit=crop"

                  alt="Students studying abroad"

                  className="w-full h-[500px] object-cover"

                />

                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent" />

              </motion.div>



              {/* Floating Cards */}

              <motion.div 

                className="absolute -left-8 top-20 bg-white rounded-2xl p-4 shadow-xl z-20"

                animate={{ y: [0, -10, 0] }}

                transition={{ duration: 4, repeat: Infinity }}

              >

                <div className="flex items-center gap-3">

                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">

                    <span className="text-2xl">🎯</span>

                  </div>

                  <div>

                    <p className="font-bold text-slate-900">99%</p>

                    <p className="text-sm text-slate-500">Visa Success</p>

                  </div>

                </div>

              </motion.div>



              <motion.div 

                className="absolute -right-4 bottom-32 bg-white rounded-2xl p-4 shadow-xl z-20"

                animate={{ y: [0, 10, 0] }}

                transition={{ duration: 5, repeat: Infinity }}

              >

                <div className="flex items-center gap-3">

                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">

                    <span className="text-2xl">🏛️</span>

                  </div>

                  <div>

                    <p className="font-bold text-slate-900">150+</p>

                    <p className="text-sm text-slate-500">Partner Universities</p>

                  </div>

                </div>

              </motion.div>



              {/* Decorative Circle */}

              <div className="absolute -bottom-10 -left-10 w-40 h-40 border-4 border-yellow-400 rounded-full opacity-50" />

              <div className="absolute -top-5 -right-5 w-24 h-24 bg-pink-500/20 rounded-full blur-xl" />

            </div>

          </motion.div>

        </div>

      </div>



      {/* Bottom Wave */}

      <div className="absolute bottom-0 left-0 right-0">

        <svg viewBox="0 0 1440 120" fill="none" className="w-full">

          <path 

            d="M0 120L48 105C96 90 192 60 288 45C384 30 480 30 576 37.5C672 45 768 60 864 67.5C960 75 1056 75 1152 67.5C1248 60 1344 45 1392 37.5L1440 30V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" 

            fill="url(#wave-gradient)"

          />

          <defs>

            <linearGradient id="wave-gradient" x1="0" y1="0" x2="1440" y2="0">

              <stop stopColor="#FACC15" />

              <stop offset="0.5" stopColor="#A855F7" />

              <stop offset="1" stopColor="#EC4899" />

            </linearGradient>

          </defs>

        </svg>

      </div>

    </section>

  );

}
