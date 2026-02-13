'use client';

import { useState, useEffect, useCallback, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar } from 'lucide-react';
import Image from 'next/image';

interface Blog {
  _id: string;
  id: string;
  title: string;
  description?: string;
  content: string;
  thumbnail?: string;
  images?: string[];
  createdAt: string;
  updatedAt: string;
  createdBy?: {
    firstName?: string;
    lastName?: string;
    email?: string;
  };
}

function BlogContent() {
  const searchParams = useSearchParams();
  const blogId = searchParams.get('id');
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchBlog = useCallback(async () => {
    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3002';
      if (!blogId) {
        throw new Error('Invalid blog ID');
      }

      const response = await fetch(`${backendUrl}/api/blogs/${blogId}`);

      if (!response.ok) {
        throw new Error('Failed to fetch blog');
      }

      const data = await response.json();
      setBlog(data.data?.blog);
    } catch (err: any) {
      setError(err.message || 'Failed to load blog');
    } finally {
      setLoading(false);
    }
  }, [blogId]);

  useEffect(() => {
    if (!blogId) {
      setError('Invalid blog ID');
      setLoading(false);
      return;
    }
    fetchBlog();
  }, [blogId, fetchBlog]);

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const processContentImages = (htmlContent: string): string => {
    if (!htmlContent) return '';
    
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3002';
    
    return htmlContent.replace(/<img([^>]+)src=["']([^"']+)["']/gi, (match, attrs, src) => {
      // If it's already a full URL (http/https), keep it
      if (src.startsWith('http://') || src.startsWith('https://')) {
        return match;
      }
      
      // If it's a relative path starting with /, prepend backend URL
      if (src.startsWith('/')) {
        const fullUrl = `${backendUrl}${src}`;
        return `<img${attrs}src="${fullUrl}"`;
      }
      
      // Otherwise, assume it's already a full URL or S3 URL
      return match;
    });
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white pt-24">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-[3%] pt-24">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Blog Not Found</h1>
          <p className="text-slate-600 mb-6">{error || 'The blog you are looking for does not exist.'}</p>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full transition"
          >
            <ArrowLeft size={18} />
            <span>Back to Blogs</span>
          </Link>
        </div>
      </div>
    );
  }

  const thumbnailUrl = getThumbnailUrl(blog.thumbnail);
  const processedContent = processContentImages(blog.content);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Thumbnail */}
      {thumbnailUrl && (
        <div className="relative h-96 bg-purple-900 overflow-hidden">
          <Image
            src={thumbnailUrl}
            alt={blog.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-12 pt-24">
        {/* Back Button */}
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-6 transition"
        >
          <ArrowLeft size={18} />
          <span>Back to Blogs</span>
        </Link>

        {/* Blog Header */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg border-2 border-purple-200 p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{formatDate(blog.createdAt)}</span>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-slate-900 mb-4">{blog.title}</h1>

          {blog.description && (
            <p className="text-xl text-slate-600 leading-relaxed">{blog.description}</p>
          )}
        </motion.div>

        {/* Blog Content */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg border-2 border-purple-200 p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div
            className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-p:leading-relaxed prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg prose-img:my-8 prose-strong:text-slate-900"
            dangerouslySetInnerHTML={{ __html: processedContent }}
          />
        </motion.div>

        {/* Back to Blogs */}
        <div className="mt-8 text-center">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full transition"
          >
            <ArrowLeft size={18} />
            <span>Back to All Blogs</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function BlogView() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-white pt-24">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
      </div>
    }>
      <BlogContent />
    </Suspense>
  );
}
