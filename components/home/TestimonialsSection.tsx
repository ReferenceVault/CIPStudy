'use client';

import React, { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import Image from 'next/image';

import { Quote, Star, GraduationCap, ChevronLeft, ChevronRight, Play } from 'lucide-react';

import { Button } from "@/components/ui/button";



const testimonials = [

  {

    id: 1,

    name: "Adaora Okonkwo",

    location: "Lagos, Nigeria",

    program: "MSc International Business",

    university: "University of Manchester",

    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face",

    quote: "Study Global made my dream of studying in the UK a reality. Their team guided me through every step, from choosing the right program to securing my visa. I couldn't have done it without them!",

    rating: 5,

    flag: "🇳🇬"

  },

  {

    id: 2,

    name: "Emmanuel Asante",

    location: "Accra, Ghana",

    program: "MBA",

    university: "London Business School",

    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",

    quote: "The personalized attention I received was incredible. They understood my goals and matched me with the perfect university. Their visa expertise was invaluable - 100% recommend!",

    rating: 5,

    flag: "🇬🇭"

  },

  {

    id: 3,

    name: "Fatima Al-Hassan",

    location: "Doha, Qatar",

    program: "LLM International Law",

    university: "King's College London",

    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",

    quote: "From the initial consultation to my arrival in London, Study Global was there every step of the way. Their knowledge of UK universities is unmatched. I'm now living my dream!",

    rating: 5,

    flag: "🇶🇦"

  },

  {

    id: 4,

    name: "David Kimani",

    location: "Nairobi, Kenya",

    program: "BSc Computer Science",

    university: "University of Edinburgh",

    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",

    quote: "The scholarship guidance alone was worth it! They helped me secure partial funding and made studying abroad affordable. Professional, caring, and truly committed to student success.",

    rating: 5,

    flag: "🇰🇪"

  },

  {

    id: 5,

    name: "Priya Sharma",

    location: "Mumbai, India",

    program: "MSc Data Science",

    university: "Imperial College London",

    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",

    quote: "I was overwhelmed by the application process, but Study Global simplified everything. Their step-by-step approach made it stress-free. Now I'm studying at my dream university!",

    rating: 5,

    flag: "🇮🇳"

  }

];



export default function TestimonialsSection() {

  const [activeIndex, setActiveIndex] = useState(0);



  const nextSlide = () => {

    setActiveIndex((prev) => (prev + 1) % testimonials.length);

  };



  const prevSlide = () => {

    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  };



  const getCirclePosition = (index: number) => {

    const total = testimonials.length;

    const angle = ((index - activeIndex) * (360 / total)) - 90;

    const radius = 224;

    const x = Math.cos((angle * Math.PI) / 180) * radius;

    const y = Math.sin((angle * Math.PI) / 180) * radius;

    return { x, y };

  };



  return (

    <section className="py-[69px] bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">

      {/* Background Decorations */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-100/50 rounded-full blur-3xl" />

      <motion.div 

        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-dashed border-purple-200/50 rounded-full"

        animate={{ rotate: 360 }}

        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}

      />

      <motion.div 

        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] border border-pink-200/30 rounded-full"

        animate={{ rotate: -360 }}

        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}

      />



      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Section Header */}

        <motion.div 

          className="text-center mb-6"

          initial={{ opacity: 0, y: 30 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

        >

          <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text text-sm font-semibold tracking-wider uppercase mb-3">

            Success Stories

          </span>

          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">

            Voices of

            <span className="text-purple-600"> Success</span>

          </h2>

        </motion.div>



        {/* Circular Testimonials Layout */}

        <div className="relative min-h-[560px] flex items-center justify-center">

          

          {/* Orbiting Profile Circles - Desktop */}

          <div className="hidden lg:block absolute inset-0">

            {testimonials.map((testimonial, index) => {

              const pos = getCirclePosition(index);

              const isActive = index === activeIndex;

              

              return (

                <motion.div

                  key={testimonial.id}

                  className="absolute left-1/2 top-1/2 cursor-pointer"

                  animate={{

                    x: pos.x - 32,

                    y: pos.y - 32,

                    scale: isActive ? 1.3 : 0.9,

                    zIndex: isActive ? 20 : 10

                  }}

                  transition={{ type: "spring", stiffness: 100, damping: 20 }}

                  onClick={() => setActiveIndex(index)}

                >

                  <motion.div 

                    className={`relative w-16 h-16 rounded-full overflow-hidden border-4 transition-all duration-300 ${

                      isActive 

                        ? 'border-purple-500 shadow-xl shadow-purple-500/30' 

                        : 'border-white shadow-lg hover:border-purple-300'

                    }`}

                    whileHover={{ scale: 1.1 }}

                  >

                    <Image 

                      src={testimonial.image}

                      alt={testimonial.name}

                      width={80}

                      height={80}

                      className="w-full h-full object-cover"

                    />

                    {isActive && (

                      <motion.div 

                        className="absolute inset-0 bg-purple-500/20"

                        initial={{ opacity: 0 }}

                        animate={{ opacity: 1 }}

                      />

                    )}

                  </motion.div>

                  

                  {/* Flag */}

                  <div className="absolute -bottom-1 -right-1 text-lg">

                    {testimonial.flag}

                  </div>



                  {/* Active Indicator Ring */}

                  {isActive && (

                    <motion.div 

                      className="absolute -inset-2 border-2 border-purple-400 rounded-full"

                      initial={{ scale: 0.8, opacity: 0 }}

                      animate={{ scale: 1, opacity: 1 }}

                      layoutId="activeRing"

                    />

                  )}

                </motion.div>

              );

            })}

          </div>



          {/* Center Content Card */}

          <div className="relative z-30 max-w-xl mx-auto">

            <AnimatePresence mode="wait">

              <motion.div

                key={activeIndex}

                initial={{ opacity: 0, scale: 0.9, y: 20 }}

                animate={{ opacity: 1, scale: 1, y: 0 }}

                exit={{ opacity: 0, scale: 0.9, y: -20 }}

                transition={{ duration: 0.4 }}

                className="bg-white rounded-3xl shadow-2xl shadow-purple-100/50 p-6 lg:p-8 text-center"

              >

                {/* Quote Icon */}

                <motion.div 

                  className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 -mt-11 shadow-lg"

                  initial={{ rotate: -20 }}

                  animate={{ rotate: 0 }}

                >

                  <Quote className="w-6 h-6 text-white" />

                </motion.div>



                {/* Mobile Profile Image */}

                <div className="lg:hidden mb-4">

                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-purple-200 mx-auto shadow-lg">

                    <Image 

                      src={testimonials[activeIndex].image}

                      alt={testimonials[activeIndex].name}

                      width={96}

                      height={96}

                      className="w-full h-full object-cover"

                    />

                  </div>

                </div>



                {/* Rating */}

                <div className="flex justify-center gap-1 mb-4">

                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (

                    <motion.div

                      key={i}

                      initial={{ opacity: 0, scale: 0 }}

                      animate={{ opacity: 1, scale: 1 }}

                      transition={{ delay: i * 0.1 }}

                    >

                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />

                    </motion.div>

                  ))}

                </div>



                {/* Quote */}

                <p className="text-base lg:text-lg text-slate-700 leading-relaxed mb-5 italic">

                  &ldquo;{testimonials[activeIndex].quote}&rdquo;

                </p>



                {/* Divider */}

                <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4" />



                {/* Name & Info */}

                <h3 className="text-lg font-bold text-slate-900 mb-1">

                  {testimonials[activeIndex].name}

                </h3>

                <p className="text-purple-600 text-sm mb-2">

                  {testimonials[activeIndex].location} {testimonials[activeIndex].flag}

                </p>

                

                <div className="inline-flex items-center gap-2 bg-purple-50 px-3 py-1.5 rounded-full">

                  <GraduationCap className="w-4 h-4 text-purple-600" />

                  <span className="text-sm text-slate-700">{testimonials[activeIndex].program}</span>

                </div>

                <p className="text-sm text-pink-600 font-medium mt-2">

                  {testimonials[activeIndex].university}

                </p>

              </motion.div>

            </AnimatePresence>



            {/* Navigation Buttons */}

            <div className="flex justify-center gap-4 mt-6">

              <Button

                variant="outline"

                size="icon"

                onClick={prevSlide}

                className="w-12 h-12 rounded-full border-2 border-purple-200 hover:border-purple-500 hover:bg-purple-50 transition-all"

              >

                <ChevronLeft className="w-4 h-4" />

              </Button>



              {/* Dots - Mobile */}

              <div className="flex items-center gap-2 lg:hidden">

                {testimonials.map((_, index) => (

                  <button

                    key={index}

                    onClick={() => setActiveIndex(index)}

                    className={`transition-all duration-300 rounded-full ${

                      index === activeIndex 

                        ? 'w-6 h-2.5 bg-gradient-to-r from-purple-500 to-pink-500' 

                        : 'w-2.5 h-2.5 bg-slate-300 hover:bg-purple-300'

                    }`}

                  />

                ))}

              </div>



              <Button

                variant="outline"

                size="icon"

                onClick={nextSlide}

                className="w-12 h-12 rounded-full border-2 border-purple-200 hover:border-purple-500 hover:bg-purple-50 transition-all"

              >

                <ChevronRight className="w-4 h-4" />

              </Button>

            </div>

          </div>



          {/* Decorative Circles */}

          <motion.div 

            className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full"

            animate={{ y: [0, -20, 0] }}

            transition={{ duration: 4, repeat: Infinity }}

          />

          <motion.div 

            className="absolute bottom-10 right-10 w-16 h-16 bg-pink-400/20 rounded-full"

            animate={{ y: [0, 20, 0] }}

            transition={{ duration: 5, repeat: Infinity }}

          />

          <motion.div 

            className="absolute top-1/3 right-20 w-12 h-12 bg-purple-400/20 rounded-full"

            animate={{ x: [0, 15, 0] }}

            transition={{ duration: 6, repeat: Infinity }}

          />

        </div>



        {/* Bottom Stats */}

        <motion.div 

          className="mt-7 flex flex-wrap justify-center gap-7"

          initial={{ opacity: 0 }}

          whileInView={{ opacity: 1 }}

          viewport={{ once: true }}

        >

          {[

            { value: "3,000+", label: "Students Placed" },

            { value: "4.9★", label: "Average Rating" },

            { value: "98%", label: "Satisfaction" }

          ].map((stat, index) => (

            <div key={index} className="text-center">

              <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">

                {stat.value}

              </p>

              <p className="text-sm text-slate-500">{stat.label}</p>

            </div>

          ))}

        </motion.div>

      </div>

    </section>

  );

}