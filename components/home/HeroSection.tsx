'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, BookOpen, Briefcase, Globe, GraduationCap, Award, Star, Rocket, Target, Plane, PlayCircle } from 'lucide-react';
import Image from 'next/image';

const words = ['Student Success', 'Global Dreams', 'Bright Futures', 'Your Journey'];

export default function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWord];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < word.length) {
          setDisplayText(word.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(word.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentWord((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWord]);

  const floatingImages = [
    { 
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face', 
      position: 'left-[8%] top-[20%]', 
      tag: 'Success', 
      tagIcon: Award, 
      delay: 0, 
      color: 'bg-gradient-to-br from-yellow-400 to-orange-500'
    },
    { 
      src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face', 
      position: 'left-[15%] bottom-[25%]', 
      tag: 'Learning', 
      tagIcon: BookOpen, 
      delay: 0.2, 
      color: 'bg-gradient-to-br from-cyan-400 to-blue-500'
    },
    { 
      src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face', 
      position: 'right-[15%] bottom-[22%]', 
      tag: 'Career', 
      tagIcon: Briefcase, 
      delay: 0.4, 
      color: 'bg-gradient-to-br from-purple-500 to-pink-600'
    },
    { 
      src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face', 
      position: 'right-[8%] top-[25%]', 
      tag: 'Global', 
      tagIcon: Globe, 
      delay: 0.6, 
      color: 'bg-gradient-to-br from-emerald-400 to-teal-500'
    },
  ];

  const floatingTags = [
    { 
      tag: 'Immigration', 
      icon: Plane, 
      position: 'left-[calc(12%+20px)] top-[45%]', 
      delay: 0.8, 
      color: 'bg-gradient-to-br from-indigo-500 to-purple-500'
    },
    { 
      tag: 'Video Training', 
      icon: PlayCircle, 
      position: 'right-[calc(12%+20px)] top-[50%]', 
      delay: 1.2, 
      color: 'bg-gradient-to-br from-pink-500 to-rose-500'
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-50 via-white to-cyan-50">
      {/* Animated Wavy Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top wave */}
        <svg 
          className="absolute top-[85px] left-0 w-full h-32" 
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{ d: "M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,0 L0,0 Z" }}
            animate={{ 
              d: [
                "M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,0 L0,0 Z",
                "M0,40 C360,0 720,100 1080,40 C1260,10 1380,70 1440,40 L1440,0 L0,0 Z",
                "M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,0 L0,0 Z"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            fill="#FCD34D"
            fillOpacity="0.8"
          />
        </svg>

        {/* Bottom wave */}
        <svg 
          className="absolute bottom-0 left-0 w-full h-48" 
          viewBox="0 0 1440 200" 
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{ d: "M0,100 C240,150 480,50 720,100 C960,150 1200,50 1440,100 L1440,200 L0,200 Z" }}
            animate={{
              d: [
                "M0,100 C240,150 480,50 720,100 C960,150 1200,50 1440,100 L1440,200 L0,200 Z",
                "M0,80 C240,30 480,130 720,80 C960,30 1200,130 1440,80 L1440,200 L0,200 Z",
                "M0,100 C240,150 480,50 720,100 C960,150 1200,50 1440,100 L1440,200 L0,200 Z"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            fill="#EC4899"
            fillOpacity="0.6"
          />
          <motion.path
            initial={{ d: "M0,120 C360,170 720,70 1080,120 C1260,145 1380,95 1440,120 L1440,200 L0,200 Z" }}
            animate={{
              d: [
                "M0,120 C360,170 720,70 1080,120 C1260,145 1380,95 1440,120 L1440,200 L0,200 Z",
                "M0,140 C360,90 720,190 1080,140 C1260,115 1380,165 1440,140 L1440,200 L0,200 Z",
                "M0,120 C360,170 720,70 1080,120 C1260,145 1380,95 1440,120 L1440,200 L0,200 Z"
              ]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            fill="#8B5CF6"
            fillOpacity="0.5"
          />
          <motion.path
            initial={{ d: "M0,150 C480,100 960,180 1440,140 L1440,200 L0,200 Z" }}
            animate={{
              d: [
                "M0,150 C480,100 960,180 1440,140 L1440,200 L0,200 Z",
                "M0,160 C480,200 960,120 1440,160 L1440,200 L0,200 Z",
                "M0,150 C480,100 960,180 1440,140 L1440,200 L0,200 Z"
              ]
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            fill="#FCD34D"
            fillOpacity="0.7"
          />
        </svg>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-yellow-300/40 to-orange-400/40 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-cyan-300/40 to-blue-400/40 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl" 
        />
        
        {/* Colorful dots pattern */}
        <div className="absolute top-32 left-32 grid grid-cols-6 gap-3 opacity-30">
          {[...Array(30)].map((_, i) => (
            <motion.div 
              key={i} 
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
              className={`w-2 h-2 rounded-full ${
                i % 3 === 0 ? 'bg-yellow-400' : i % 3 === 1 ? 'bg-cyan-400' : 'bg-purple-400'
              }`} 
            />
          ))}
        </div>
        <div className="absolute bottom-32 right-32 grid grid-cols-6 gap-3 opacity-30">
          {[...Array(30)].map((_, i) => (
            <motion.div 
              key={i} 
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
              className={`w-2 h-2 rounded-full ${
                i % 3 === 0 ? 'bg-pink-400' : i % 3 === 1 ? 'bg-emerald-400' : 'bg-orange-400'
              }`} 
            />
          ))}
        </div>

        {/* Floating Decorative Shapes - Similar to images */}
        {/* Outlined Circles */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] left-[10%] w-24 h-24 border-2 border-dashed border-purple-400/60 rounded-full z-5"
        />
        <motion.div
          animate={{ 
            y: [0, 25, 0],
            rotate: [360, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-[20%] right-[12%] w-32 h-32 border-2 border-dashed border-cyan-400/60 rounded-full z-5"
        />
        <motion.div
          animate={{ 
            x: [0, 20, 0],
            rotate: [0, -180],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[45%] right-[20%] w-20 h-20 border-2 border-solid border-pink-400/50 rounded-full z-5"
        />

        {/* Star Outlines */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0 }}
          className="absolute top-[35%] right-[25%] z-5"
        >
          <Star className="w-8 h-8 text-yellow-400/70 fill-none stroke-2" />
        </motion.div>
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.3, 1],
            y: [0, -15, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          className="absolute bottom-[30%] left-[18%] z-5"
        >
          <Star className="w-6 h-6 text-purple-400/60 fill-none stroke-2" />
        </motion.div>

        {/* Yellow Stars on Left Side */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.15, 1],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="absolute top-[25%] left-[10%] z-5"
        >
          <Star className="w-10 h-10 text-yellow-400/80 fill-yellow-400/30 stroke-2" />
        </motion.div>
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.25, 1],
            y: [0, -20, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          className="absolute top-[45%] left-[6%] z-5"
        >
          <Star className="w-7 h-7 text-yellow-400/75 fill-yellow-400/25 stroke-2" />
        </motion.div>
        <motion.div
          animate={{ 
            rotate: [0, -360],
            scale: [1, 1.2, 1],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
          className="absolute top-[60%] left-[12%] z-5"
        >
          <Star className="w-5 h-5 text-yellow-400/70 fill-yellow-400/20 stroke-2" />
        </motion.div>
        <motion.div
          animate={{ 
            rotate: [0, 180, 360],
            scale: [1, 1.3, 1],
            y: [0, 15, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[30%] left-[4%] z-5"
        >
          <Star className="w-4 h-4 text-yellow-400/65 fill-yellow-400/15 stroke-2" />
        </motion.div>
        <motion.div
          animate={{ 
            rotate: [360, 180, 0],
            scale: [1, 1.15, 1],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2.4 }}
          className="absolute top-[70%] left-[8%] z-5"
        >
          <Star className="w-6 h-6 text-yellow-400/75 fill-yellow-400/25 stroke-2" />
        </motion.div>
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            y: [0, -10, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2.8 }}
          className="absolute top-[50%] left-[2%] z-5"
        >
          <Star className="w-3 h-3 text-yellow-400/60 fill-yellow-400/15 stroke-2" />
        </motion.div>

        {/* Geometric Shapes - Triangles */}
        <motion.div
          animate={{ 
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
            y: [0, 20, 0]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] left-[5%] z-5"
        >
          <svg width="64" height="64" viewBox="0 0 64 64" className="text-pink-400/50">
            <path 
              d="M32 8 L56 56 L8 56 Z" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            />
          </svg>
        </motion.div>

        {/* Rounded Squares */}
        <motion.div
          animate={{ 
            rotate: [0, -90, -180, -270, -360],
            scale: [1, 1.1, 1],
            x: [0, 15, 0]
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
          className="absolute top-[55%] right-[8%] w-14 h-14 border-2 border-cyan-400/50 rounded-2xl z-5"
        />
        <motion.div
          animate={{ 
            rotate: [360, 270, 180, 90, 0],
            scale: [1, 0.9, 1],
            y: [0, -20, 0]
          }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          className="absolute bottom-[40%] left-[22%] w-12 h-12 border-2 border-yellow-400/50 rounded-xl z-5"
        />

        {/* Small Floating Icons */}
        <motion.div
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, 15, -15, 0],
            opacity: [0.9, 1, 0.9]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[35%] left-[25%] z-5"
        >
          <div className="w-12 h-12 bg-blue-400/90 rounded-xl flex items-center justify-center shadow-lg">
            <Rocket className="w-7 h-7 text-purple-700" />
          </div>
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -10, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          className="absolute bottom-[25%] right-[18%] z-5"
        >
          <Target className="w-5 h-5 text-cyan-500/60" />
        </motion.div>
        <motion.div
          animate={{ 
            x: [0, 15, -15, 0],
            rotate: [0, 360],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="absolute top-[50%] right-[30%] z-5"
        >
          <Sparkles className="w-7 h-7 text-yellow-500/60" />
        </motion.div>

        {/* Additional Small Circles */}
        <motion.div
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.7, 0.4],
            x: [0, 10, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] right-[15%] w-3 h-3 bg-pink-400/50 rounded-full z-5"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
            y: [0, -15, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-[35%] left-[15%] w-4 h-4 bg-purple-400/50 rounded-full z-5"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.6, 1],
            opacity: [0.5, 0.8, 0.5],
            x: [0, -10, 0],
            y: [0, 10, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[45%] left-[30%] w-3 h-3 bg-cyan-400/50 rounded-full z-5"
        />
      </div>

      {/* Floating Student Images - Hidden on mobile */}
      <div className="hidden lg:block">
        {floatingImages.map((img, index) => {
          const TagIcon = img.tagIcon;
          return (
            <motion.div
              key={index}
              className={`absolute ${img.position} z-10`}
              initial={{ opacity: 0, scale: 0.5, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: img.delay + 0.5, duration: 0.8, type: "spring" }}
            >
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{ repeat: Infinity, duration: 5, delay: img.delay }}
                className="relative"
              >
                <div className={`w-32 h-32 rounded-3xl ${img.color} p-1.5 shadow-2xl rotate-6`}>
                  <Image
                    src={img.src}
                    alt="Student"
                    width={128}
                    height={128}
                    className="w-full h-full rounded-3xl object-cover"
                  />
                </div>
                {/* Bottom Right Tag */}
                <motion.div
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: img.delay + 1, type: "spring" }}
                  className="absolute -bottom-3 -right-3 bg-white rounded-2xl px-4 py-2 shadow-xl flex items-center gap-2 border-2 border-purple-200"
                >
                  <TagIcon className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-bold text-gray-800">{img.tag}</span>
                </motion.div>
                
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Floating Tags - Independent from Images */}
      <div className="hidden lg:block">
        {floatingTags.map((tagItem, index) => {
          const TagIcon = tagItem.icon;
          return (
            <motion.div
              key={index}
              className={`absolute ${tagItem.position} z-10`}
              initial={{ opacity: 0, scale: 0.5, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: tagItem.delay, duration: 0.8, type: "spring" }}
            >
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 3, 0, -3, 0]
                }}
                transition={{ repeat: Infinity, duration: 4, delay: tagItem.delay }}
                className={`${tagItem.color} rounded-2xl px-4 py-2.5 shadow-xl flex items-center gap-2 border-2 border-white/20`}
              >
                <TagIcon className="w-4 h-4 text-white" />
                <span className="text-sm font-bold text-white">{tagItem.tag}</span>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[180px] pb-[72px]">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 text-white px-6 py-3 rounded-full text-sm font-bold mb-7 shadow-lg"
          >
            <Sparkles className="w-5 h-5" />
            🌍 Empowering Students Worldwide
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-0 tracking-tight"
          >
            Your Way to
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center py-2 -mt-2"
          >
            <span className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent leading-none pb-2">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-6 mb-12 leading-relaxed"
          >
            Join a growing community of international students building better futures through education, mentorship, and career opportunities.
          </motion.p>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-3">Higher Ed Institutions</p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300"
              >
                Book a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-3">Students & Grads</p>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50 px-8 py-6 text-lg rounded-full transition-all duration-300"
              >
                Sign Up Free
                <Sparkles className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
