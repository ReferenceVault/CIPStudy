'use client';

import React from 'react';

import { motion } from 'framer-motion';

import { 

  Facebook,

  Instagram,

  Twitter,

  Linkedin,

  Youtube

} from 'lucide-react';



export default function SocialSidebar() {

  const socialLinks = [

    { icon: Facebook, href: '#', label: 'Facebook' },

    { icon: Instagram, href: '#', label: 'Instagram' },

    { icon: Twitter, href: '#', label: 'Twitter' },

    { icon: Linkedin, href: '#', label: 'LinkedIn' },

    { icon: Youtube, href: '#', label: 'YouTube' }

  ];



  return (

    <motion.div 

      className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-1 bg-white shadow-lg rounded-r-xl overflow-hidden"

      initial={{ x: -100 }}

      animate={{ x: 0 }}

      transition={{ delay: 1, type: "spring" }}

    >

      <div className="bg-purple-600 text-white px-3 py-2 text-xs font-medium text-center">

        <span className="writing-mode-vertical" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>

          Connect

        </span>

      </div>

      {socialLinks.map((social, index) => (

        <a

          key={index}

          href={social.href}

          className="p-3 text-slate-500 hover:text-purple-600 hover:bg-purple-50 transition-colors"

          aria-label={social.label}

        >

          <social.icon className="w-5 h-5" />

        </a>

      ))}

    </motion.div>

  );

}
