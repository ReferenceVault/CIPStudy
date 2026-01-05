'use client';

import React from 'react';

import { motion } from 'framer-motion';

import { Button } from "@/components/ui/button";

import { ArrowRight, Calendar, MessageCircle } from 'lucide-react';



export default function CTASection() {

  return (

    <section className="py-[69px] relative overflow-hidden px-[3%]">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900" />

      

      {/* Animated Background Elements */}

      <motion.div 

        className="absolute top-0 left-0 w-full h-full opacity-10"

        style={{

          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'

        }}

      />

      

      {/* Floating Orbs */}

      <motion.div 

        className="absolute top-20 right-20 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl"

        animate={{ scale: [1, 1.3, 1], x: [0, 30, 0] }}

        transition={{ duration: 8, repeat: Infinity }}

      />

      <motion.div 

        className="absolute bottom-20 left-20 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl"

        animate={{ scale: [1.2, 1, 1.2], y: [0, -30, 0] }}

        transition={{ duration: 10, repeat: Infinity }}

      />



      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">

          {/* Left Content */}

          <motion.div

            initial={{ opacity: 0, x: -50 }}

            whileInView={{ opacity: 1, x: 0 }}

            viewport={{ once: true }}

          >

            <motion.span 

              className="inline-block bg-yellow-400 text-slate-900 px-3 py-1.5 rounded-full text-sm font-semibold mb-4"

              initial={{ scale: 0 }}

              whileInView={{ scale: 1 }}

              viewport={{ once: true }}

              transition={{ delay: 0.2, type: "spring" }}

            >

              🚀 Start Your Journey Today

            </motion.span>

            

            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">

              Ready to Transform

              <br />

              <span className="text-yellow-400">Your Future?</span>

            </h2>

            

            <p className="text-base lg:text-lg text-purple-100 mb-5 leading-relaxed">

              Take the first step towards your international education journey. 

              Our expert counsellors are ready to guide you every step of the way.

            </p>



            {/* Quick Actions */}

            <div className="grid sm:grid-cols-2 gap-3 mb-5">

              <motion.div 

                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10"

                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.15)" }}

              >

                <Calendar className="w-6 h-6 text-yellow-400 mb-2.5" />

                <h3 className="font-semibold text-white mb-1 text-sm lg:text-base">Book Consultation</h3>

                <p className="text-purple-200 text-sm">Free 30-min session</p>

              </motion.div>

              

              <motion.div 

                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10"

                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.15)" }}

              >

                <MessageCircle className="w-6 h-6 text-pink-400 mb-2.5" />

                <h3 className="font-semibold text-white mb-1 text-sm lg:text-base">Live Chat</h3>

                <p className="text-purple-200 text-sm">Instant support 24/7</p>

              </motion.div>

            </div>



            <div className="flex flex-col sm:flex-row gap-4">

              <Button 

                size="lg"

                className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-6 py-5 text-base rounded-full font-semibold shadow-lg shadow-yellow-400/30"

              >

                Apply Now

                <ArrowRight className="ml-2 h-4 w-4" />

              </Button>

            </div>

          </motion.div>

          {/* Right Content - Newsletter */}

          <motion.div

            initial={{ opacity: 0, x: 50 }}

            whileInView={{ opacity: 1, x: 0 }}

            viewport={{ once: true }}

            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/20"

          >

            <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">

              Never Miss an Update

            </h3>

            <p className="text-purple-100 mb-5">

              Subscribe to our newsletter for the latest scholarships, visa updates, and education news.

            </p>

            <div className="flex flex-col sm:flex-row gap-3">

              <input 

                type="email" 

                placeholder="Enter your email"

                className="flex-1 px-4 py-2.5 rounded-full border-0 focus:ring-2 focus:ring-yellow-400 outline-none text-slate-900"

              />

              <Button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 rounded-full px-6 font-semibold whitespace-nowrap">

                Subscribe

              </Button>

            </div>

          </motion.div>

        </div>

      </div>

    </section>

  );

}