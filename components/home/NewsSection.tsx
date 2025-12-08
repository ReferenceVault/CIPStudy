'use client';

import React from 'react';

import { motion } from 'framer-motion';

import Image from 'next/image';

import { Card, CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Calendar, ArrowRight, Clock, Tag } from 'lucide-react';

type NewsCategory = "Visa Updates" | "Scholarships" | "Rankings" | "Company News";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: NewsCategory;
  featured?: boolean;
}

const newsItems: NewsItem[] = [

  {

    id: 1,

    title: "UK Announces New Graduate Visa Extension for International Students",

    excerpt: "The UK government has announced extended post-study work rights for international graduates, offering up to 3 years of work experience.",

    image: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=600&h=400&fit=crop",

    date: "Dec 2, 2024",

    readTime: "4 min read",

    category: "Visa Updates",

    featured: true

  },

  {

    id: 2,

    title: "Scholarship Deadline: Commonwealth Scholarships 2025",

    excerpt: "Applications are now open for fully-funded Commonwealth Scholarships. Don't miss this opportunity!",

    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",

    date: "Nov 28, 2024",

    readTime: "3 min read",

    category: "Scholarships"

  },

  {

    id: 3,

    title: "Top 10 Universities in Canada for 2025 Rankings Released",

    excerpt: "The latest QS World University Rankings reveal Canada's top institutions for international students.",

    image: "https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=600&h=400&fit=crop",

    date: "Nov 25, 2024",

    readTime: "5 min read",

    category: "Rankings"

  },

  {

    id: 4,

    title: "Study Global Opens New Office in Dubai",

    excerpt: "Expanding our reach to better serve students in the Middle East region with personalized consultations.",

    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop",

    date: "Nov 20, 2024",

    readTime: "2 min read",

    category: "Company News"

  }

];



const categoryColors: Record<NewsCategory, string> = {

  "Visa Updates": "bg-blue-100 text-blue-700",

  "Scholarships": "bg-green-100 text-green-700",

  "Rankings": "bg-purple-100 text-purple-700",

  "Company News": "bg-pink-100 text-pink-700"

};



export default function NewsSection() {

  const featuredNews = newsItems.find(item => item.featured);

  const otherNews = newsItems.filter(item => !item.featured);



  return (

    <section className="py-24 bg-slate-50 relative overflow-hidden">

      {/* Background Decoration */}

      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl -translate-y-1/2" />

      

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Section Header */}

        <motion.div 

          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"

          initial={{ opacity: 0, y: 30 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

        >

          <div>

            <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text text-sm font-semibold tracking-wider uppercase mb-4">

              Latest News

            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">

              Stay <span className="text-purple-600">Informed</span>

            </h2>

          </div>

          <Button 

            variant="outline" 

            className="border-2 border-purple-200 hover:border-purple-500 rounded-full px-6 self-start md:self-auto"

          >

            View All News

            <ArrowRight className="ml-2 w-4 h-4" />

          </Button>

        </motion.div>



        {/* News Grid */}

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Featured Article */}

          {featuredNews && (

            <motion.div

              initial={{ opacity: 0, x: -30 }}

              whileInView={{ opacity: 1, x: 0 }}

              viewport={{ once: true }}

              className="lg:row-span-2"

            >

              <Card className="h-full border-0 shadow-xl overflow-hidden group cursor-pointer hover:shadow-2xl transition-shadow duration-300">

                <CardContent className="p-0 h-full flex flex-col">

                  <div className="relative h-72 lg:h-80 overflow-hidden">

                    <motion.div

                      whileHover={{ scale: 1.05 }}

                      transition={{ duration: 0.5 }}

                      className="w-full h-full"

                    >

                      <Image 

                        src={featuredNews.image}

                        alt={featuredNews.title}

                        fill

                        className="object-cover"

                      />

                    </motion.div>

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

                    

                    {/* Category Badge */}

                    <div className="absolute top-4 left-4">

                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[featuredNews.category]}`}>

                        {featuredNews.category}

                      </span>

                    </div>



                    {/* Featured Badge */}

                    <div className="absolute top-4 right-4">

                      <span className="bg-yellow-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">

                        Featured

                      </span>

                    </div>

                  </div>



                  <div className="p-6 lg:p-8 flex-1 flex flex-col">

                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">

                      <span className="flex items-center gap-1">

                        <Calendar className="w-4 h-4" />

                        {featuredNews.date}

                      </span>

                      <span className="flex items-center gap-1">

                        <Clock className="w-4 h-4" />

                        {featuredNews.readTime}

                      </span>

                    </div>



                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors">

                      {featuredNews.title}

                    </h3>



                    <p className="text-slate-600 leading-relaxed mb-6 flex-1">

                      {featuredNews.excerpt}

                    </p>



                    <motion.div 

                      className="flex items-center text-purple-600 font-semibold"

                      whileHover={{ x: 5 }}

                    >

                      Read Full Article

                      <ArrowRight className="ml-2 w-4 h-4" />

                    </motion.div>

                  </div>

                </CardContent>

              </Card>

            </motion.div>

          )}



          {/* Other Articles */}

          <div className="space-y-6">

            {otherNews.map((news, index) => (

              <motion.div

                key={news.id}

                initial={{ opacity: 0, x: 30 }}

                whileInView={{ opacity: 1, x: 0 }}

                viewport={{ once: true }}

                transition={{ delay: index * 0.1 }}

              >

                <Card className="border-0 shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">

                  <CardContent className="p-0">

                    <div className="flex flex-col sm:flex-row">

                      <div className="sm:w-40 h-40 sm:h-auto overflow-hidden flex-shrink-0 relative">

                        <motion.div

                          whileHover={{ scale: 1.1 }}

                          transition={{ duration: 0.5 }}

                          className="w-full h-full"

                        >

                          <Image 

                            src={news.image}

                            alt={news.title}

                            fill

                            className="object-cover"

                          />

                        </motion.div>

                      </div>

                      <div className="p-5 flex-1">

                        <div className="flex items-center gap-3 mb-3">

                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${categoryColors[news.category]}`}>

                            {news.category}

                          </span>

                          <span className="text-xs text-slate-400">{news.date}</span>

                        </div>

                        <h4 className="font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">

                          {news.title}

                        </h4>

                        <p className="text-sm text-slate-500 line-clamp-2">

                          {news.excerpt}

                        </p>

                      </div>

                    </div>

                  </CardContent>

                </Card>

              </motion.div>

            ))}

          </div>

        </div>



        {/* Newsletter CTA */}

        <motion.div 

          className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 lg:p-12 text-center"

          initial={{ opacity: 0, y: 30 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

        >

          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">

            Never Miss an Update

          </h3>

          <p className="text-purple-100 mb-6 max-w-xl mx-auto">

            Subscribe to our newsletter for the latest scholarships, visa updates, and education news.

          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">

            <input 

              type="email" 

              placeholder="Enter your email"

              className="flex-1 px-5 py-3 rounded-full border-0 focus:ring-2 focus:ring-yellow-400 outline-none"

            />

            <Button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 rounded-full px-8 font-semibold">

              Subscribe

            </Button>

          </div>

        </motion.div>

      </div>

    </section>

  );

}