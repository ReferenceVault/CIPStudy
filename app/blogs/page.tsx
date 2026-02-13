'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';
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
    description: 'IRCC has conducted a new Express Entry draw, issuing 3,500 invitations to apply for permanent residence. The minimum CRS score was 485 points. This is great news for candidates in the pool.',
    thumbnail: '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: '2',
    id: '2',
    title: 'Provincial Nominee Program Updates: Ontario Opens New Stream',
    description: 'Ontario has announced a new stream under the Provincial Nominee Program targeting tech workers. This stream offers faster processing times and lower requirements for eligible candidates.',
    thumbnail: '',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    updatedAt: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    _id: '3',
    id: '3',
    title: 'Study Permit Processing Times Reduced for 2024',
    description: 'IRCC has announced reduced processing times for study permit applications. Most applications are now processed within 4-6 weeks, down from the previous 8-12 weeks.',
    thumbnail: '',
    createdAt: new Date(Date.now() - 172800000).toISOString(),
    updatedAt: new Date(Date.now() - 172800000).toISOString(),
  },
  {
    _id: '4',
    id: '4',
    title: 'New Work Permit Options for Spouses of International Students',
    description: 'The government has expanded work permit eligibility for spouses of international students. This change allows more families to work while studying in Canada.',
    thumbnail: '',
    createdAt: new Date(Date.now() - 259200000).toISOString(),
    updatedAt: new Date(Date.now() - 259200000).toISOString(),
  },
  {
    _id: '5',
    id: '5',
    title: 'Citizenship Application Fees Updated for 2024',
    description: 'IRCC has updated citizenship application fees effective January 2024. The new fee structure applies to all applications submitted after the effective date.',
    thumbnail: '',
    createdAt: new Date(Date.now() - 345600000).toISOString(),
    updatedAt: new Date(Date.now() - 345600000).toISOString(),
  },
  {
    _id: '6',
    id: '6',
    title: 'Family Sponsorship Processing Times Improve',
    description: 'Processing times for family sponsorship applications have improved significantly. Spousal sponsorship applications are now processed in approximately 12 months.',
    thumbnail: '',
    createdAt: new Date(Date.now() - 432000000).toISOString(),
    updatedAt: new Date(Date.now() - 432000000).toISOString(),
  },
  {
    _id: '7',
    id: '7',
    title: 'Quebec Immigration Program Updates: New Selection Criteria',
    description: 'Quebec has updated its immigration selection criteria for skilled workers. The new system places greater emphasis on French language proficiency and work experience.',
    thumbnail: '',
    createdAt: new Date(Date.now() - 518400000).toISOString(),
    updatedAt: new Date(Date.now() - 518400000).toISOString(),
  },
  {
    _id: '8',
    id: '8',
    title: 'Post-Graduation Work Permit Extension Program Launched',
    description: 'A new program allows certain PGWP holders to extend their work permits for an additional 18 months. This provides more time to gain Canadian experience and apply for permanent residence.',
    thumbnail: '',
    createdAt: new Date(Date.now() - 604800000).toISOString(),
    updatedAt: new Date(Date.now() - 604800000).toISOString(),
  },
  {
    _id: '9',
    id: '9',
    title: 'Rural and Northern Immigration Pilot Program Expands',
    description: 'The RNIP program has expanded to include more communities across Canada. This program helps smaller communities attract and retain skilled workers.',
    thumbnail: '',
    createdAt: new Date(Date.now() - 691200000).toISOString(),
    updatedAt: new Date(Date.now() - 691200000).toISOString(),
  },
];

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3002';
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
      const allBlogs = data.data?.blogs || [];
      // Use sample blogs if no blogs are fetched, limit to 9
      const blogsToShow = allBlogs.length > 0 ? allBlogs : sampleBlogs;
      setBlogs(blogsToShow.slice(0, 9));
    } catch (error) {
      console.error('Error fetching blogs:', error);
      // Check if it's a network error
      if (error instanceof TypeError && error.message.includes('fetch')) {
        console.error('Network error - Backend server may not be running or CORS issue');
      }
      // Use sample blogs on error
      setBlogs(sampleBlogs.slice(0, 9));
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50/30 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white pt-[46px] pb-[69px] px-[3%]">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600" />
        <div className="absolute inset-0 opacity-35" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }} />
        <div className="absolute inset-0 opacity-45 mix-blend-screen" style={{
          background: 'radial-gradient(circle at 18% 12%, rgba(255,168,76,0.42), rgba(255,168,76,0) 48%), radial-gradient(circle at 82% 18%, rgba(86,196,255,0.35), rgba(86,196,255,0) 45%)',
        }} />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-14 md:pt-20 md:pb-24 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-4">
              <span className="inline-block bg-white/15 text-white px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-2 mx-auto w-fit">
                Weekly Updates <span className="text-xs">↑</span>
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Latest Study Abroad News
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto">
              Stay informed with the latest updates on Canadian study programs, universities, and educational opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Blogs Grid Section */}
      <section className="py-12 md:py-16 px-[3%]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">No blog posts available yet.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((post, index) => {
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
                    className="bg-white rounded-xl border-2 border-purple-200 shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-400"
                  >
                    {/* Image with Label */}
                    <div className="relative h-48 bg-purple-900/30 overflow-hidden">
                      <div className="absolute top-4 left-4 z-10">
                        <span className={`${labelInfo.bg} ${labelInfo.text} px-3 py-1 rounded-full text-xs font-semibold`}>
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
                    <div className="p-6">
                      {/* Date */}
                      <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.createdAt)}</span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 hover:text-purple-600 transition-colors">
                        {post.title}
                      </h3>
                      
                      {/* Description */}
                      {post.description && (
                        <p className="text-slate-600 mb-4 leading-relaxed line-clamp-3">
                          {post.description}
                        </p>
                      )}
                      
                      {/* Read More Link */}
                      <Link 
                        href={`/blog/${blogId}`}
                        className="text-purple-600 font-medium hover:text-purple-700 transition inline-flex items-center gap-2"
                      >
                        Read More <ArrowRight size={16} />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
