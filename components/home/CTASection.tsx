'use client';

import React from 'react';

import { motion } from 'framer-motion';

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { ArrowRight, Calendar, MessageCircle, Mail } from 'lucide-react';



export default function CTASection() {

  return (

    <section className="py-24 relative overflow-hidden">

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

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}

          <motion.div

            initial={{ opacity: 0, x: -50 }}

            whileInView={{ opacity: 1, x: 0 }}

            viewport={{ once: true }}

          >

            <motion.span 

              className="inline-block bg-yellow-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold mb-6"

              initial={{ scale: 0 }}

              whileInView={{ scale: 1 }}

              viewport={{ once: true }}

              transition={{ delay: 0.2, type: "spring" }}

            >

              🚀 Start Your Journey Today

            </motion.span>

            

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">

              Ready to Transform

              <br />

              <span className="text-yellow-400">Your Future?</span>

            </h2>

            

            <p className="text-xl text-purple-100 mb-8 leading-relaxed">

              Take the first step towards your international education journey. 

              Our expert counsellors are ready to guide you every step of the way.

            </p>



            {/* Quick Actions */}

            <div className="grid sm:grid-cols-2 gap-4 mb-8">

              <motion.div 

                className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10"

                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.15)" }}

              >

                <Calendar className="w-8 h-8 text-yellow-400 mb-3" />

                <h3 className="font-semibold text-white mb-1">Book Consultation</h3>

                <p className="text-purple-200 text-sm">Free 30-min session</p>

              </motion.div>

              

              <motion.div 

                className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10"

                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.15)" }}

              >

                <MessageCircle className="w-8 h-8 text-pink-400 mb-3" />

                <h3 className="font-semibold text-white mb-1">Live Chat</h3>

                <p className="text-purple-200 text-sm">Instant support 24/7</p>

              </motion.div>

            </div>



            <div className="flex flex-col sm:flex-row gap-4">

              <Button 

                size="lg"

                className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-8 py-6 text-lg rounded-full font-semibold shadow-lg shadow-yellow-400/30"

              >

                Apply Now

                <ArrowRight className="ml-2 h-5 w-5" />

              </Button>

              <Button 

                size="lg"

                variant="outline"

                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full"

              >

                Call Us: +44 20 1234 5678

              </Button>

            </div>

          </motion.div>



          {/* Right Content - Newsletter */}

          <motion.div

            initial={{ opacity: 0, x: 50 }}

            whileInView={{ opacity: 1, x: 0 }}

            viewport={{ once: true }}

            transition={{ delay: 0.2 }}

          >

            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl">

              <div className="text-center mb-8">

                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">

                  <Mail className="w-8 h-8 text-purple-600" />

                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2">Stay Updated</h3>

                <p className="text-slate-600">Get the latest scholarships, events, and university news</p>

              </div>



              <form className="space-y-4">

                <Input 

                  placeholder="Your full name"

                  className="py-6 px-5 rounded-xl border-slate-200 focus:border-purple-500"

                />

                <Input 

                  type="email"

                  placeholder="Your email address"

                  className="py-6 px-5 rounded-xl border-slate-200 focus:border-purple-500"

                />

                <Input 

                  placeholder="Phone number (optional)"

                  className="py-6 px-5 rounded-xl border-slate-200 focus:border-purple-500"

                />

                

                <Button 

                  type="submit"

                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-lg rounded-xl shadow-lg shadow-purple-500/30"

                >

                  Get Free Consultation

                  <ArrowRight className="ml-2 h-5 w-5" />

                </Button>

              </form>



              <p className="text-center text-sm text-slate-500 mt-6">

                By signing up, you agree to our <a href="#" className="text-purple-600 underline">Terms</a> and <a href="#" className="text-purple-600 underline">Privacy Policy</a>

              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>

  );

}