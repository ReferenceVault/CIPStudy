'use client';

import React, { useState, useEffect } from 'react';

import Link from 'next/link';

import { motion, AnimatePresence } from 'framer-motion';

import { Button } from "@/components/ui/button";

import { 

  GraduationCap, 

  Menu, 

  X, 

  Mail

} from 'lucide-react';



export default function Header() {

  const [isScrolled, setIsScrolled] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



  useEffect(() => {

    const handleScroll = () => {

      setIsScrolled(window.scrollY > 50);

    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, []);



  const navLinks = [

    { name: 'Home', href: '/' },

    { name: 'Programs', href: '/programs' },

    { name: 'Destinations', href: '/destinations' },

    { name: 'About Us', href: '/about' },

    { name: 'Contact', href: '/contact' }

  ];



  return (

    <motion.header 

      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${

        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'

      }`}

      initial={{ y: -100 }}

      animate={{ y: 0 }}

      transition={{ duration: 0.5 }}

    >

      <div className="container mx-auto px-6 lg:px-12">

        <nav className="flex items-center justify-between h-20">

          {/* Logo */}

          <Link href="/" className="flex items-center gap-3">

            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">

              <GraduationCap className="w-7 h-7 text-white" />

            </div>

            <div>

              <span className="text-xl font-bold text-slate-900">Study</span>

              <span className="text-xl font-bold text-purple-600">Global</span>

            </div>

          </Link>



          {/* Desktop Navigation */}

          <div className="hidden lg:flex items-center gap-8">

            {navLinks.map((link) => (

              <Link

                key={link.href}

                href={link.href}

                className="text-sm font-medium transition-colors hover:text-purple-600 text-slate-700"

              >

                {link.name}

              </Link>

            ))}

          </div>



          {/* CTA Buttons */}

          <div className="hidden lg:flex items-center gap-4">

            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-6">

              Apply Now

            </Button>

          </div>



          {/* Mobile Menu Button */}

          <button

            className="lg:hidden p-2"

            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}

          >

            {isMobileMenuOpen ? (

              <X className="w-6 h-6 text-slate-900" />

            ) : (

              <Menu className="w-6 h-6 text-slate-900" />

            )}

          </button>

        </nav>

      </div>



      {/* Mobile Menu */}

      <AnimatePresence>

        {isMobileMenuOpen && (

          <motion.div

            initial={{ opacity: 0, height: 0 }}

            animate={{ opacity: 1, height: 'auto' }}

            exit={{ opacity: 0, height: 0 }}

            className="lg:hidden bg-white border-t"

          >

            <div className="container mx-auto px-6 py-6 space-y-4">

              {navLinks.map((link) => (

                <Link

                  key={link.href}

                  href={link.href}

                  className="block text-lg font-medium text-slate-700 hover:text-purple-600 py-2"

                  onClick={() => setIsMobileMenuOpen(false)}

                >

                  {link.name}

                </Link>

              ))}

              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full py-6 mt-4">

                Apply Now

              </Button>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.header>

  );

}
