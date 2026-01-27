'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";

const locations = [
  {
    country: 'India',
    flag: '🇮🇳',
    offices: [
      {
        city: 'Hyderabad',
        address: 'Ground Floor, Linus Building, 1-8-313, Near, Passport Office Rd, opp. US Consulate General, Patigadda, Begumpet, Hyderabad, Telangana, 500003',
        phone: '+91 91334 33001',
        color: 'from-purple-500 to-purple-600',
        bgColor: 'bg-purple-50',
        iconColor: 'text-purple-600'
      },
      {
        city: 'Ahmedabad',
        address: 'T junction, 203, Shivalik Staymev, At Sardar Patel Ring Rd, Ambli, Ahmedabad, Gujarat, 380007',
        phone: '+91 70758 33008',
        color: 'from-pink-500 to-pink-600',
        bgColor: 'bg-pink-50',
        iconColor: 'text-pink-600'
      },
      {
        city: 'Ludhiana',
        address: '272-A, Second Floor, Krishna Mandir Rd, Near Ishmeet Singh Chowk, Nehru Nagar, Model Town Extension Ludhiana, Punjab 141001',
        phone: '+91 91542 54599',
        color: 'from-cyan-500 to-blue-500',
        bgColor: 'bg-cyan-50',
        iconColor: 'text-cyan-600'
      },
      {
        city: 'Kochi',
        address: 'Opposite to Parthas 1st Floor, Kavitha Building, Mahatma Gandhi Rd, Jos Junction, Kochi, Kerala 682016',
        phone: '+91 91334 33001',
        color: 'from-purple-500 to-pink-600',
        bgColor: 'bg-purple-50',
        iconColor: 'text-purple-600'
      },
      {
        city: 'Vijayawada',
        address: 'Flat No : 301, Naga\'S Hafeez Plaza, D. No : 40-1-62, MG Rd, Gurunanak Nagar, K P Nagar, Benz Circle, Vijayawada, Andhra Pradesh 520010',
        phone: '+91 70759 33005',
        color: 'from-indigo-500 to-purple-500',
        bgColor: 'bg-indigo-50',
        iconColor: 'text-indigo-600'
      }
    ]
  }
];

export default function ContactSection() {
  const [selectedCountry, setSelectedCountry] = useState('India');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    location: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const selectedCountryData = locations.find(loc => loc.country === selectedCountry);

  return (
    <section className="pt-[120px] pb-[69px] bg-gradient-to-br from-purple-50 via-white to-cyan-50 relative overflow-hidden px-[3%]">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text text-sm font-semibold tracking-wider uppercase mb-3">
            Get In Touch
          </span>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Visit us at any of our offices or reach out to us. We're here to help you on your journey to study abroad.
          </p>
        </motion.div>

        {/* Country Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {locations.map((location) => (
            <button
              key={location.country}
              onClick={() => setSelectedCountry(location.country)}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                selectedCountry === location.country
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <span className="mr-2">{location.flag}</span>
              {location.country}
            </button>
          ))}
        </motion.div>

        {/* Locations Grid */}
        {selectedCountryData && (
          <motion.div
            key={selectedCountry}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {selectedCountryData.offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${office.bgColor} rounded-2xl p-6 border border-white shadow-lg hover:shadow-xl transition-all duration-300 group`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${office.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-bold ${office.iconColor} mb-3`}>{office.city}</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-3">
                    <MapPin className={`w-5 h-5 ${office.iconColor} flex-shrink-0 mt-1`} />
                    <p className="text-sm text-gray-600 leading-relaxed">{office.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className={`w-5 h-5 ${office.iconColor} flex-shrink-0`} />
                    <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-sm text-gray-700 hover:text-purple-600 transition-colors">
                      {office.phone}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Location
                  </label>
                  <select
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a location</option>
                    {selectedCountryData?.offices.map((office) => (
                      <option key={office.city} value={office.city}>{office.city}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-lg rounded-full shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300"
              >
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

