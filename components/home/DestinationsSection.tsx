'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, Users, DollarSign, FileCheck, Briefcase, Clock, MapPin
} from 'lucide-react';
import Image from 'next/image';

const destinations = [
  {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    heroImage: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1200&h=600&fit=crop',
    universities: 100,
    students: 800,
    description: 'Canada is one of the most preferred destinations for international students due to its high-quality education system and globally accepted qualifications. Institutions focus strongly on practical learning and employability. The country offers a safe, multicultural environment and a high standard of living. Students benefit from clear immigration rules and generous work rights. Canada actively encourages international graduates to stay back. Post-study employment options are well structured. English is the main language of instruction. Long-term settlement prospects are strong.',
    avgTuition: 'CAD 18K–25K / year',
    studyVisaFee: 'CAD 235',
    workWhileStudy: '24 hrs/week, full-time breaks',
    postStudyWork: 'PGWP up to 3 yrs',
    prPathway: 'Express Entry (CEC), PNPs',
  },
  {
    id: 'usa',
    name: 'United States',
    flag: '🇺🇸',
    heroImage: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=600&fit=crop',
    universities: 200,
    students: 1500,
    description: 'The United States is known for its world-leading universities and research-driven education. It offers a wide range of programs across all disciplines. Degrees from the US are highly valued globally. Students gain exposure to advanced technology and innovation hubs. Academic flexibility is a key advantage. Work opportunities are structured and regulated. Long-term settlement is possible but competitive. Career outcomes depend strongly on employer sponsorship.',
    avgTuition: 'USD 22K–35K / year',
    studyVisaFee: 'USD 535',
    workWhileStudy: 'CPT/OPT and only on campus',
    postStudyWork: 'OPT 12–36 months',
    prPathway: 'H-1B → Employer GC',
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=600&fit=crop',
    universities: 150,
    students: 1200,
    description: 'The UK offers globally recognized degrees with shorter course durations. Education focuses on academic depth and independent learning. Students benefit from a strong quality assurance system. The UK attracts international employers and global exposure. Courses are intensive and career-oriented. Healthcare is covered under the visa system. Post-study work options are clearly defined. Long-term residence is achievable through skilled employment.',
    avgTuition: 'GBP 15K–25K / year',
    studyVisaFee: 'GBP 490 + IHS',
    workWhileStudy: '20 hrs/week',
    postStudyWork: 'Graduate Route 2 yrs',
    prPathway: 'Skilled Worker → ILR',
  },
  {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    heroImage: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1200&h=600&fit=crop',
    universities: 80,
    students: 600,
    description: 'Australia is known for its high academic standards and strong student welfare. Institutions emphasize practical skills and industry exposure. The country offers a relaxed lifestyle and safe environment. International students enjoy generous work rights. Education quality is strictly regulated by the government. Australia follows a transparent points-based immigration system. Graduates are in demand across key skill sectors. Settlement pathways are clearly defined.',
    avgTuition: 'AUD 22K–35K / year',
    studyVisaFee: 'AUD 710',
    workWhileStudy: '48 hrs/fortnight',
    postStudyWork: '485 Visa 2–4 yrs',
    prPathway: 'GSM (189/190), State Nom.',
  },
  {
    id: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    heroImage: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&h=600&fit=crop',
    universities: 120,
    students: 500,
    description: 'Germany is a leading destination for affordable, high-quality education. It is especially strong in engineering, technology, and applied sciences. Public universities are highly subsidized. Programs emphasize practical training and industry collaboration. Germany has a strong economy and skill shortages. Many postgraduate programs are available in English. Students benefit from excellent infrastructure. Long-term career stability is a major advantage.',
    avgTuition: 'EUR 3K–12K / year',
    studyVisaFee: 'EUR 75',
    workWhileStudy: '120 full / 240 half days',
    postStudyWork: 'Job Search 18 months',
    prPathway: 'EU Blue Card → PR',
  }
];

export default function DestinationsSection() {
  const [selectedDestination, setSelectedDestination] = useState(destinations[0]);

  return (
    <section className="bg-white relative overflow-hidden px-[3%]">
      {/* Hero Section */}
      <div className="relative pt-12 pb-12 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text text-xs font-semibold tracking-wider uppercase mb-2">
              Study Destinations
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
              Explore World-Class{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Study Destinations
              </span>
            </h2>
            <p className="text-base text-purple-100">
              Discover opportunities in the world&apos;s top study destinations. 
              Find the perfect country and university for your academic goals.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Destination Tabs */}
      <div className="py-4 border-b border-slate-100 sticky top-20 bg-white z-30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-3">
            {destinations.map((dest) => (
              <button
                key={dest.id}
                onClick={() => setSelectedDestination(dest)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  selectedDestination.id === dest.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30 scale-105'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span className="text-xl">{dest.flag}</span>
                <span>{dest.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Destination Details */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedDestination.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="pt-6 pb-16"
        >
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-4">
              {/* Left Panel - Hero Image with Overlay Stats */}
              <div className="relative h-[350px] rounded-2xl overflow-hidden mt-12">
                <Image 
                  src={selectedDestination.heroImage}
                  alt={selectedDestination.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl font-bold text-white uppercase tracking-wider">{selectedDestination.id}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{selectedDestination.name}</h3>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-white">
                      <Building2 className="w-4 h-4" />
                      <span className="text-sm font-semibold">{selectedDestination.universities}+ Universities</span>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                      <Users className="w-4 h-4" />
                      <span className="text-sm font-semibold">{selectedDestination.students}+ Students Placed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Panel - Content */}
              <div className="bg-white rounded-3xl pt-0 px-6 pb-6 flex flex-col space-y-5">
                {/* Description */}
                <p className="text-base text-slate-600 leading-relaxed">
                  {selectedDestination.description}
                </p>

                {/* Key Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl border border-purple-100">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-purple-600 uppercase tracking-wide">Avg Tuition</p>
                      <p className="text-sm font-semibold text-slate-900">{selectedDestination.avgTuition}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl border border-purple-100">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileCheck className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-purple-600 uppercase tracking-wide">Study Visa Fee</p>
                      <p className="text-sm font-semibold text-slate-900">{selectedDestination.studyVisaFee}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl border border-purple-100">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-purple-600 uppercase tracking-wide">Work While Study</p>
                      <p className="text-sm font-semibold text-slate-900">{selectedDestination.workWhileStudy}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl border border-purple-100">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-purple-600 uppercase tracking-wide">Post-Study Work</p>
                      <p className="text-sm font-semibold text-slate-900">{selectedDestination.postStudyWork}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl border border-purple-100 sm:col-span-2">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-purple-600 uppercase tracking-wide">PR Pathway</p>
                      <p className="text-sm font-semibold text-slate-900">{selectedDestination.prPathway}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
