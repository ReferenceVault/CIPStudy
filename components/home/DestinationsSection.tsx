'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, Building2, Users
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
    avgCost: 'CAD 20,000 - 40,000/year',
    visaTime: '8-12 weeks',
    workPermit: 'PGWP: 1-3 years',
    description: 'Canada combines high-quality education with welcoming immigration policies. Known for safety, multiculturalism, and natural beauty, Canada has become increasingly popular among international students seeking permanent residency pathways.',
    highlights: [
      'Pathway to permanent residency through Express Entry',
      'Post-graduation work permits up to 3 years',
      'Affordable compared to US and UK',
      'High quality of life and safety'
    ],
    topUniversities: [
      { name: 'University of Toronto', ranking: '#1 Canada', courses: 700 },
      { name: 'McGill University', ranking: '#2 Canada', courses: 400 },
      { name: 'University of British Columbia', ranking: '#3 Canada', courses: 500 },
      { name: 'University of Alberta', ranking: '#4 Canada', courses: 350 },
      { name: 'University of Waterloo', ranking: '#5 Canada', courses: 280 }
    ],
    popularCourses: ['Engineering', 'Computer Science', 'Business', 'Healthcare', 'Environmental Science', 'Hospitality']
  },
  {
    id: 'usa',
    name: 'United States',
    flag: '🇺🇸',
    heroImage: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=600&fit=crop',
    universities: 200,
    students: 1500,
    avgCost: '$25,000 - $55,000/year',
    visaTime: '4-6 weeks',
    workPermit: 'OPT: 1-3 years',
    description: 'The United States is the world\'s leading destination for international students. With over 4,000 accredited institutions, the US offers unparalleled diversity in programs, research opportunities, and campus experiences.',
    highlights: [
      'Most universities in global top 100 rankings',
      'Flexible curriculum with major/minor options',
      'Extensive research funding and facilities',
      'Strong alumni networks and career opportunities'
    ],
    topUniversities: [
      { name: 'Harvard University', ranking: '#1 World', courses: 400 },
      { name: 'MIT', ranking: '#2 World', courses: 250 },
      { name: 'Stanford University', ranking: '#3 World', courses: 300 },
      { name: 'Yale University', ranking: '#8 World', courses: 350 },
      { name: 'Columbia University', ranking: '#11 World', courses: 380 }
    ],
    popularCourses: ['Computer Science', 'Business/MBA', 'Engineering', 'Medicine', 'Arts & Design', 'Psychology']
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=600&fit=crop',
    universities: 150,
    students: 1200,
    avgCost: '£15,000 - £30,000/year',
    visaTime: '3-4 weeks',
    workPermit: '2 years post-study',
    description: 'The United Kingdom offers world-class education with centuries of academic excellence. Home to prestigious universities like Oxford, Cambridge, and Imperial College, the UK attracts over 600,000 international students annually.',
    highlights: [
      'Home to 4 of the world\'s top 10 universities',
      'Graduate Route visa allows 2-year work stay',
      'Rich cultural heritage and diverse student community',
      'Strong research opportunities across all fields'
    ],
    topUniversities: [
      { name: 'University of Oxford', ranking: '#1 UK', courses: 350 },
      { name: 'University of Cambridge', ranking: '#2 UK', courses: 300 },
      { name: 'Imperial College London', ranking: '#3 UK', courses: 200 },
      { name: 'University of Manchester', ranking: '#6 UK', courses: 450 },
      { name: 'University of Edinburgh', ranking: '#5 UK', courses: 380 }
    ],
    popularCourses: ['Business Management', 'Computer Science', 'Engineering', 'Medicine', 'Law', 'Data Science']
  },
  {
    id: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    heroImage: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&h=600&fit=crop',
    universities: 120,
    students: 500,
    avgCost: '€0 - €25,000/year',
    visaTime: '4-8 weeks',
    workPermit: '18 months post-study',
    description: 'Germany offers world-class education at public universities with many programs offering free or low-cost tuition even for international students. Known for excellence in engineering, technology, and research, Germany provides excellent post-study work opportunities.',
    highlights: [
      'Free tuition at most public universities',
      'Strong focus on engineering and technology',
      '18-month post-study work permit',
      'Pathway to permanent residency'
    ],
    topUniversities: [
      { name: 'Technical University of Munich', ranking: '#1 Germany', courses: 250 },
      { name: 'Heidelberg University', ranking: '#2 Germany', courses: 200 },
      { name: 'LMU Munich', ranking: '#3 Germany', courses: 300 },
      { name: 'Humboldt University Berlin', ranking: '#4 Germany', courses: 280 },
      { name: 'RWTH Aachen', ranking: '#5 Germany', courses: 320 }
    ],
    popularCourses: ['Engineering', 'Computer Science', 'Business', 'Natural Sciences', 'Medicine', 'Architecture']
  },
  {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    heroImage: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1200&h=600&fit=crop',
    universities: 80,
    students: 600,
    avgCost: 'AUD 25,000 - 45,000/year',
    visaTime: '4-8 weeks',
    workPermit: '2-4 years post-study',
    description: 'Australia offers excellent education in a stunning natural environment. With strong industry connections and generous post-study work rights, Australia is perfect for students seeking both quality education and migration opportunities.',
    highlights: [
      '6 universities in world top 100',
      'Post-study work visa up to 4 years',
      'Strong industry partnerships',
      'Beautiful weather and lifestyle'
    ],
    topUniversities: [
      { name: 'University of Melbourne', ranking: '#1 Australia', courses: 400 },
      { name: 'University of Sydney', ranking: '#2 Australia', courses: 450 },
      { name: 'Australian National University', ranking: '#3 Australia', courses: 300 },
      { name: 'University of Queensland', ranking: '#4 Australia', courses: 350 },
      { name: 'UNSW Sydney', ranking: '#5 Australia', courses: 380 }
    ],
    popularCourses: ['Engineering', 'Healthcare', 'Business', 'IT', 'Environmental Science', 'Hospitality']
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
          className="py-16"
        >
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-4">
              {/* Left Panel - Hero Image with Overlay Stats */}
              <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden">
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
              <div className="bg-white rounded-3xl p-2 flex flex-col">
                {/* Introductory Text */}
                <p className="text-base text-slate-600 leading-relaxed mb-2">
                  {selectedDestination.description}
                </p>

                {/* Top Partner Universities */}
                <h3 className="text-xl font-bold text-slate-900 mb-2">Top Partner Universities</h3>
                
                {/* University List - Show first 3 */}
                <div className="space-y-1 flex-1">
                  {selectedDestination.topUniversities.slice(0, 3).map((uni, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-2 p-2 bg-slate-50 rounded-xl hover:bg-purple-50 transition-colors"
                    >
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="text-slate-900 font-medium text-sm">{uni.name}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
