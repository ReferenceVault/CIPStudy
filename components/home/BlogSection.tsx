'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import Image from 'next/image';

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

// Sample blogs for demonstration
const sampleBlogs: BlogPost[] = [
  {
    _id: '1',
    id: '1',
    title: 'New Express Entry Draw Announced: 3,500 Invitations Issued',
    description: 'IRCC has conducted a new Express Entry draw, issuing 3,500 invitations to apply for permanent residence. The minimum CRS score was 485 points.',
    thumbnail: '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: '2',
    id: '2',
    title: 'Provincial Nominee Program Updates: Ontario Opens New Stream',
    description: 'Ontario has announced a new stream under the Provincial Nominee Program targeting tech workers.',
    thumbnail: '',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    updatedAt: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    _id: '3',
    id: '3',
    title: 'Study Permit Processing Times Reduced for 2024',
    description: 'IRCC has announced reduced processing times for study permit applications. Most applications are now processed within 4-6 weeks.',
    thumbnail: '',
    createdAt: new Date(Date.now() - 172800000).toISOString(),
    updatedAt: new Date(Date.now() - 172800000).toISOString(),
  },
  {
    _id: '4',
    id: '4',
    title: 'New Work Permit Options for Spouses of International Students',
    description: 'The government has expanded work permit eligibility for spouses of international students.',
    thumbnail: '',
    createdAt: new Date(Date.now() - 259200000).toISOString(),
    updatedAt: new Date(Date.now() - 259200000).toISOString(),
  },
];

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
      // Use sample blogs if no blogs are fetched
      setBlogs(fetchedBlogs.length > 0 ? fetchedBlogs : sampleBlogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      // Check if it's a network error
      if (error instanceof TypeError && error.message.includes('fetch')) {
        console.error('Network error - Backend server may not be running or CORS issue');
      }
      // Use sample blogs on error
      setBlogs(sampleBlogs);
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

  return (
    <section className="pt-[46px] pb-[69px] bg-gradient-to-b from-purple-50/30 to-white relative overflow-hidden px-[3%]">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-100/50 rounded-full blur-3xl translate-y-1/2" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text text-sm font-semibold tracking-wider uppercase mb-3">
            Latest Updates
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Stay <span className="text-purple-600">Informed</span>
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Stay informed with the latest updates on Canadian study programs, universities, and educational opportunities.
          </p>
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
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {blogs.slice(0, 4).map((post, index) => {
                const blogId = post.id || post._id;
                const labelInfo = getBlogLabel(index);
                const thumbnailUrl = getThumbnailUrl(post.thumbnail);
                
                return (
                  <motion.div
                    key={blogId}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white rounded-lg border-2 border-purple-200 shadow-md overflow-hidden hover:border-purple-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Image with Label */}
                    <div className="relative h-32 bg-purple-900/30 overflow-hidden">
                      <div className="absolute top-2 left-2 z-10">
                        <span className={`${labelInfo.bg} ${labelInfo.text} px-2 py-0.5 rounded-full text-xs font-semibold`}>
                          {labelInfo.label}
                        </span>
                      </div>
                      {thumbnailUrl ? (
                        <Image
                          src={thumbnailUrl}
                          alt={post.title}
                          fill
                          className="object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 flex items-center justify-center text-white/70 text-sm">
                          No Image
                        </div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="p-4">
                      {/* Date */}
                      <div className="flex items-center gap-1 text-xs text-slate-500 mb-2">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(post.createdAt)}</span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-base font-bold text-slate-900 mb-2 line-clamp-2 hover:text-purple-600 transition-colors">
                        {post.title}
                      </h3>
                      
                      {/* Description */}
                      {post.description && (
                        <p className="text-sm text-slate-600 mb-3 leading-relaxed line-clamp-2">
                          {post.description}
                        </p>
                      )}
                      
                      {/* Read More Link */}
                      <Link 
                        href={`/blog/${blogId}`}
                        className="text-purple-600 font-medium hover:text-purple-700 transition inline-flex items-center gap-1 text-sm"
                      >
                        Read More <ArrowRight size={14} />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            {/* View All Blogs Button */}
            <div className="text-center">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                View All Blogs <ArrowRight size={20} />
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
