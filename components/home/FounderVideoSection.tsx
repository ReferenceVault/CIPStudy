'use client';

import React, { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import { Play, X, Quote, Award, Users, Globe } from 'lucide-react';

// Replace with your YouTube video ID when you have a founder video
const FOUNDER_VIDEO_YOUTUBE_ID = 'YOUR_VIDEO_ID';
const FOUNDER_VIDEO_THUMBNAIL = `https://img.youtube.com/vi/${FOUNDER_VIDEO_YOUTUBE_ID === 'YOUR_VIDEO_ID' ? 'dQw4w9WgXcQ' : FOUNDER_VIDEO_YOUTUBE_ID}/maxresdefault.jpg`;

export default function FounderVideoSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="py-[86px] bg-gradient-to-b from-white to-purple-50 relative overflow-hidden px-[3%]">
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-200/30 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl translate-y-1/2" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-11 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-200/50 group cursor-pointer"
              onClick={() => setIsVideoOpen(true)}
            >
              <img
                src={FOUNDER_VIDEO_THUMBNAIL}
                alt="Dr. Gautham Kolluri – Founder Video"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/40 to-transparent group-hover:from-purple-900/90 transition-all duration-300" />
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer group-hover:bg-yellow-400 transition-colors duration-300"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Play className="w-10 h-10 text-purple-600 ml-1" fill="currentColor" />
                </motion.div>
              </motion.div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white/80 text-sm mb-2">Watch Our Story</p>
                <h3 className="text-white text-2xl font-bold">A Message from Dr. Gautham Kolluri</h3>
              </div>
            </div>
            <motion.div
              className="absolute -bottom-6 -left-6 w-32 h-32 border-4 border-yellow-400 rounded-2xl -z-10"
              initial={{ rotate: 0 }}
              animate={{ rotate: 6 }}
            />
            <motion.div className="absolute -top-6 -right-6 w-24 h-24 bg-pink-500/20 rounded-full blur-xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text text-sm font-semibold tracking-wider uppercase mb-3">
              Meet Our Founder
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Driven by a <span className="text-purple-600"> Passion</span> for{' '}
              <span className="text-pink-600"> Education</span>
            </h2>
            <div className="mb-5">
              <Quote className="w-8 h-8 text-purple-200 mb-3" />
              <p className="text-base text-slate-600 leading-relaxed italic">
                &quot;I started Study Abroad with a simple belief: every student deserves access to
                world-class education, regardless of where they come from. Our mission is to break
                down barriers and open doors to global opportunities.&quot;
              </p>
            </div>
            <div className="flex items-center gap-3 mb-5 p-3 bg-white rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
                alt="Dr. Gautham Kolluri"
                className="w-12 h-12 rounded-full object-cover border-2 border-purple-200"
              />
              <div>
                <h4 className="font-bold text-slate-900 text-base">Dr. Gautham Kolluri</h4>
                <p className="text-purple-600 text-sm">RCIC Founder Study Abroad</p>
                <p className="text-slate-500 text-sm">Regulated Canadian Immigration Consultant</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <motion.div
                className="text-center p-3 bg-white rounded-xl shadow-md"
                whileHover={{ y: -5 }}
              >
                <Award className="w-6 h-6 text-yellow-500 mx-auto mb-1.5" />
                <p className="font-bold text-slate-900">15+ Years</p>
                <p className="text-sm text-slate-500">Experience</p>
              </motion.div>
              <motion.div
                className="text-center p-3 bg-white rounded-xl shadow-md"
                whileHover={{ y: -5 }}
              >
                <Users className="w-6 h-6 text-purple-500 mx-auto mb-1.5" />
                <p className="font-bold text-slate-900">10,000+</p>
                <p className="text-sm text-slate-500">Students Helped</p>
              </motion.div>
              <motion.div
                className="text-center p-3 bg-white rounded-xl shadow-md"
                whileHover={{ y: -5 }}
              >
                <Globe className="w-6 h-6 text-pink-500 mx-auto mb-1.5" />
                <p className="font-bold text-slate-900">20+</p>
                <p className="text-sm text-slate-500">Countries</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${FOUNDER_VIDEO_YOUTUBE_ID}?autoplay=1`}
                title="A Message from Dr. Gautham Kolluri"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
