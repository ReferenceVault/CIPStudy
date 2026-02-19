'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

interface BlogPost {
  _id: string;
  id: string;
  title: string;
  description?: string;
  thumbnail?: string;
  createdAt: string;
  updatedAt: string;
}

const labelColors = [
  { bg: 'bg-red-500', text: 'text-white' },
  { bg: 'bg-blue-500', text: 'text-white' },
  { bg: 'bg-yellow-400', text: 'text-gray-900' },
  { bg: 'bg-green-500', text: 'text-white' },
  { bg: 'bg-purple-500', text: 'text-white' },
  { bg: 'bg-orange-500', text: 'text-white' },
];

const labels = ['Latest', 'Update', 'Important', 'Good News', 'News', 'Announcement'];

export default function BlogSection() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3002';
      // Filter blogs by platform "cip study" for home page
      const response = await fetch(`${backendUrl}/api/blogs?platform=${encodeURIComponent('cip study')}`);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error:', {
          status: response.status,
          statusText: response.statusText,
          error: errorText,
          url: `${backendUrl}/api/blogs?platform=${encodeURIComponent('cip study')}`
        });
        throw new Error(`Failed to fetch blogs: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      const fetchedBlogs = data.data?.blogs || [];
      setBlogs(fetchedBlogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      // Check if it's a network error
      if (error instanceof TypeError && error.message.includes('fetch')) {
        console.error('Network error - Backend server may not be running or CORS issue');
      }
      // Don't set any blogs on error - will show "No blog posts available yet"
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getBlogLabel = (index: number) => {
    return {
      label: labels[index % labels.length],
      ...labelColors[index % labelColors.length],
    };
  };

  const getThumbnailUrl = (thumbnail?: string) => {
    if (!thumbnail) return null;
    if (thumbnail.startsWith('http://') || thumbnail.startsWith('https://')) {
      return thumbnail;
    }
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3002';
    if (thumbnail.startsWith('/')) {
      return `${backendUrl}${thumbnail}`;
    }
    return `${backendUrl}/${thumbnail}`;
  };

  const featuredBlog = blogs[0];
  const otherBlogs = blogs.slice(1, 4);

  return (
    <section className="py-[69px] bg-slate-50 relative overflow-hidden px-[3%]">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-9"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text text-sm font-semibold tracking-wider uppercase mb-3">
              Latest Updates
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Stay <span className="text-purple-600">Informed</span>
            </h2>
          </div>
          <Link
            href="/blogs"
            className="inline-flex items-center border-2 border-purple-200 hover:border-purple-500 rounded-full px-5 py-2.5 self-start md:self-auto transition-colors"
          >
            View All Blogs
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </motion.div>
        
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-600 mb-8">No blog posts available yet.</p>
            {/* View All Blogs Button - Always visible */}
            <div className="text-center">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                View All Blogs <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-5">
            {/* Featured Article */}
            {featuredBlog && (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:row-span-2"
              >
                <Link href={`/blog?id=${featuredBlog.id || featuredBlog._id}`}>
                  <Card className="h-full border-0 shadow-xl overflow-hidden group cursor-pointer hover:shadow-2xl transition-shadow duration-300">
                    <CardContent className="p-0 h-full flex flex-col">
                      <div className="relative h-56 lg:h-64 overflow-hidden">
                        {getThumbnailUrl(featuredBlog.thumbnail) ? (
                          <Image
                            src={getThumbnailUrl(featuredBlog.thumbnail)!}
                            alt={featuredBlog.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 flex items-center justify-center text-white/70 text-sm">
                            No Image
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-3 left-3">
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${getBlogLabel(0).bg} ${getBlogLabel(0).text}`}>
                            {getBlogLabel(0).label}
                          </span>
                        </div>

                        {/* Featured Badge */}
                        <div className="absolute top-3 right-3">
                          <span className="bg-yellow-400 text-slate-900 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                            Featured
                          </span>
                        </div>
                      </div>

                      <div className="p-5 lg:p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(featuredBlog.createdAt)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            4 min read
                          </span>
                        </div>

                        <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                          {featuredBlog.title}
                        </h3>

                        <p className="text-slate-600 leading-relaxed mb-4 flex-1 line-clamp-3">
                          {featuredBlog.description || 'Read more about this update.'}
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
                </Link>
              </motion.div>
            )}

            {/* Other Articles */}
            <div className="space-y-5">
              {otherBlogs.map((post, index) => {
                const blogId = post.id || post._id;
                const labelInfo = getBlogLabel(index + 1);
                const thumbnailUrl = getThumbnailUrl(post.thumbnail);
                
                return (
                  <motion.div
                    key={blogId}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={`/blog?id=${blogId}`}>
                      <Card className="border-0 shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-0">
                          <div className="flex flex-col sm:flex-row">
                            <div className="sm:w-32 h-32 overflow-hidden flex-shrink-0 relative bg-purple-900/30">
                              {thumbnailUrl ? (
                                <Image
                                  src={thumbnailUrl}
                                  alt={post.title}
                                  fill
                                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                                  sizes="128px"
                                />
                              ) : (
                                <div className="w-full h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 flex items-center justify-center text-white/70 text-xs">
                                  No Image
                                </div>
                              )}
                            </div>
                            <div className="p-4 flex-1">
                              <div className="flex items-center gap-2.5 mb-2.5">
                                <span className={`px-1.5 py-0.5 rounded-full text-xs font-medium ${labelInfo.bg} ${labelInfo.text}`}>
                                  {labelInfo.label}
                                </span>
                                <span className="text-xs text-slate-400">{formatDate(post.createdAt)}</span>
                              </div>
                              <h4 className="font-bold text-slate-900 mb-1.5 group-hover:text-purple-600 transition-colors line-clamp-2">
                                {post.title}
                              </h4>
                              <p className="text-sm text-slate-500 line-clamp-2">
                                {post.description || 'Read more.'}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
