'use client';

import React from 'react';

import Link from 'next/link';

import { motion } from 'framer-motion';

import { Button } from "@/components/ui/button";

import { 

  GraduationCap, 

  Facebook,

  Instagram,

  Twitter,

  Linkedin,

  Youtube,

  Mail,

  Phone,

  MapPin,

  ArrowRight,

  MessageCircle

} from 'lucide-react';



export default function Footer() {

  const socialLinks = [

    { icon: Facebook, href: '#', label: 'Facebook' },

    { icon: Instagram, href: '#', label: 'Instagram' },

    { icon: Twitter, href: '#', label: 'Twitter' },

    { icon: Linkedin, href: '#', label: 'LinkedIn' },

    { icon: Youtube, href: '#', label: 'YouTube' }

  ];



  return (

    <footer className="bg-slate-900 text-white pt-20 pb-8">

      <div className="container mx-auto px-6 lg:px-12">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Company Info */}

          <div>

            <div className="flex items-center gap-3 mb-6">

              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">

                <GraduationCap className="w-7 h-7 text-white" />

              </div>

              <div>

                <span className="text-xl font-bold">Study</span>

                <span className="text-xl font-bold text-purple-400">Global</span>

              </div>

            </div>

            <p className="text-slate-400 mb-6 leading-relaxed">

              Your trusted partner for international education. We&apos;ve helped thousands of students achieve their dreams of studying abroad.

            </p>

            <div className="flex gap-3">

              {socialLinks.map((social, index) => (

                <a

                  key={index}

                  href={social.href}

                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-purple-600 hover:text-white transition-colors"

                  aria-label={social.label}

                >

                  <social.icon className="w-5 h-5" />

                </a>

              ))}

            </div>

          </div>



          {/* Quick Links */}

          <div>

            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>

            <ul className="space-y-3">

              {['About Us', 'Our Services', 'Universities', 'Scholarships', 'Student Visa', 'FAQs'].map((item) => (

                <li key={item}>

                  <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-2">

                    <ArrowRight className="w-4 h-4" />

                    {item}

                  </a>

                </li>

              ))}

            </ul>

          </div>



          {/* Destinations */}

          <div>

            <h3 className="text-lg font-semibold mb-6">Study Destinations</h3>

            <ul className="space-y-3">

              {['United Kingdom', 'United States', 'Canada', 'Australia', 'Germany', 'Ireland'].map((item) => (

                <li key={item}>

                  <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-2">

                    <ArrowRight className="w-4 h-4" />

                    {item}

                  </a>

                </li>

              ))}

            </ul>

          </div>



          {/* Contact Info */}

          <div>

            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>

            <ul className="space-y-4">

              <li className="flex items-start gap-3">

                <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />

                <span className="text-slate-400">123 Education Street, London, UK EC1A 1BB</span>

              </li>

              <li className="flex items-center gap-3">

                <Phone className="w-5 h-5 text-purple-400" />

                <span className="text-slate-400">+44 20 1234 5678</span>

              </li>

              <li className="flex items-center gap-3">

                <Mail className="w-5 h-5 text-purple-400" />

                <span className="text-slate-400">info@studyglobal.com</span>

              </li>

            </ul>

            

            {/* WhatsApp Button */}

            <a 

              href="#" 

              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full mt-6 transition-colors"

            >

              <MessageCircle className="w-5 h-5" />

              Chat on WhatsApp

            </a>

          </div>

        </div>



        {/* Bottom Bar */}

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-slate-500 text-sm">

            © {new Date().getFullYear()} StudyGlobal. All rights reserved.

          </p>

          <div className="flex gap-6 text-sm">

            <a href="#" className="text-slate-500 hover:text-purple-400">Privacy Policy</a>

            <a href="#" className="text-slate-500 hover:text-purple-400">Terms of Service</a>

            <a href="#" className="text-slate-500 hover:text-purple-400">Cookie Policy</a>

          </div>

        </div>

      </div>



      {/* Floating WhatsApp Button - Mobile */}

      <motion.a

        href="#"

        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 lg:hidden"

        whileHover={{ scale: 1.1 }}

        whileTap={{ scale: 0.95 }}

        initial={{ scale: 0 }}

        animate={{ scale: 1 }}

        transition={{ delay: 1.5, type: "spring" }}

      >

        <MessageCircle className="w-7 h-7 text-white" />

      </motion.a>

    </footer>

  );

}
