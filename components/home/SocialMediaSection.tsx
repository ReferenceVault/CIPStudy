'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube } from 'lucide-react';
import Image from 'next/image';

interface SocialMediaPost {
  _id?: string;
  id: string;
  title?: string;
  description?: string;
  url: string;
  thumbnail?: string;
  createdAt?: string;
  date?: string;
}

interface Media {
  _id: string;
  id: string;
  linkType: 'youtube' | 'instagram';
  linkTitle: string;
  description?: string;
  thumbnail?: string;
  linkUrl: string;
  createdAt: string;
  updatedAt: string;
}

// Sample data for preview
const sampleInstagramReels: SocialMediaPost[] = [
  {
    id: '1',
    title: 'Open work permits for family members',
    description: 'Who can apply - Changes to eligibility',
    url: 'https://www.instagram.com/p/DSk7qZQEaHV/',
    thumbnail: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=800&fit=crop',
    date: '2 days ago',
  },
  {
    id: '2',
    title: 'Express Entry Draw Update',
    description: 'Latest Express Entry draw results and CRS score trends',
    url: 'https://www.instagram.com/gautham.kolluri.cip/',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=800&fit=crop',
    date: '3 days ago',
  },
  {
    id: '3',
    title: 'Study Permit Success Story',
    description: 'Another successful study permit application!',
    url: 'https://www.instagram.com/gautham.kolluri.cip/',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop',
    date: '5 days ago',
  },
  {
    id: '4',
    title: 'Immigration Tips & Guidance',
    description: 'Expert tips on navigating the Canadian immigration process',
    url: 'https://www.instagram.com/gautham.kolluri.cip/',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop',
    date: '1 week ago',
  },
];

const sampleYouTubeVideos: SocialMediaPost[] = [
  {
    id: '1',
    title: 'Study Permit Application Guide',
    description: 'Complete guide to applying for a Canadian study permit. Step-by-step tutorial.',
    url: 'https://www.youtube.com/watch?v=example1',
    thumbnail: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1280&h=720&fit=crop',
    date: '2 days ago',
  },
  {
    id: '2',
    title: 'Express Entry Explained',
    description: 'Understanding the Express Entry system and how to improve your CRS score.',
    url: 'https://www.youtube.com/watch?v=example2',
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1280&h=720&fit=crop',
    date: '4 days ago',
  },
  {
    id: '3',
    title: 'PNP Programs Overview',
    description: 'Learn about Provincial Nominee Programs across all Canadian provinces.',
    url: 'https://www.youtube.com/watch?v=example3',
    thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1280&h=720&fit=crop',
    date: '1 week ago',
  },
  {
    id: '4',
    title: 'Work Permit Options',
    description: 'Explore different work permit options available for coming to Canada.',
    url: 'https://www.youtube.com/watch?v=example4',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1280&h=720&fit=crop',
    date: '2 weeks ago',
  },
];

// Instagram Reel Card Component
function InstagramReelCard({ reel, index }: { reel: SocialMediaPost; index: number }) {
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(reel.thumbnail || null);
  const reelId = reel.id || reel._id || String(index);
  
  useEffect(() => {
    const fetchThumbnail = async () => {
      if (reel.thumbnail && reel.thumbnail.trim() !== '') {
        if (reel.thumbnail.startsWith('http://') || reel.thumbnail.startsWith('https://')) {
          setThumbnailUrl(reel.thumbnail);
          return;
        }
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3002';
        setThumbnailUrl(reel.thumbnail.startsWith('/') ? `${backendUrl}${reel.thumbnail}` : `${backendUrl}/${reel.thumbnail}`);
        return;
      }
      setThumbnailUrl(null);
    };
    
    fetchThumbnail();
  }, [reel.thumbnail, reel.url]);
  
  return (
    <motion.a
      href={reel.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg border-2 border-purple-200 shadow-md transition-all duration-300 bg-white hover:border-purple-400 hover:shadow-lg hover:-translate-y-1 focus:outline-none"
    >
      {/* Thumbnail/Image */}
      {thumbnailUrl ? (
        <div className="relative h-32 overflow-hidden">
          <Image
            src={thumbnailUrl}
            alt={reel.title || 'Instagram reel'}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          {/* Instagram Icon Overlay */}
          <div className="absolute top-2 right-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
              <Instagram className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      ) : (
        <div className="relative h-32 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 flex items-center justify-center overflow-hidden">
          <div className="relative z-10">
            <Instagram className="w-8 h-8 text-white opacity-90" />
          </div>
          <div className="absolute top-3 left-3 w-12 h-12 bg-white/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-3 right-3 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          <div className="absolute top-2 right-2 z-10">
            <div className="w-8 h-8 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/50">
              <Instagram className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      )}
      
      {/* Content */}
      <div className="p-2.5 bg-white">
        {reel.title && (
          <h3 className="text-slate-900 font-semibold text-xs mb-0.5 group-hover:text-purple-600 transition-colors line-clamp-2">
            {reel.title}
          </h3>
        )}
        {reel.date && (
          <span className="text-slate-500 text-[10px]">{reel.date}</span>
        )}
      </div>
    </motion.a>
  );
}

export default function SocialMediaSection() {
  const [instagramReels, setInstagramReels] = useState<SocialMediaPost[]>(sampleInstagramReels);
  const [youtubeVideos, setYoutubeVideos] = useState<SocialMediaPost[]>(sampleYouTubeVideos);
  const [loading, setLoading] = useState(true);

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} week${Math.floor(diffDays / 7) > 1 ? 's' : ''} ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} month${Math.floor(diffDays / 30) > 1 ? 's' : ''} ago`;
    return `${Math.floor(diffDays / 365)} year${Math.floor(diffDays / 365) > 1 ? 's' : ''} ago`;
  };

  const getYouTubeThumbnail = (url: string) => {
    let videoId = '';
    
    if (url.includes('youtube.com/watch?v=')) {
      videoId = url.split('v=')[1]?.split('&')[0] || '';
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0] || '';
    } else if (url.includes('youtube.com/shorts/')) {
      videoId = url.split('shorts/')[1]?.split('?')[0] || '';
    } else if (url.includes('youtube.com/embed/')) {
      videoId = url.split('embed/')[1]?.split('?')[0] || '';
    }
    
    if (videoId) {
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    }
    
    return null;
  };

  const getInstagramThumbnail = async (url: string): Promise<string | null> => {
    try {
      const response = await fetch(`/api/instagram-thumbnail?url=${encodeURIComponent(url)}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.thumbnail_url) {
          return data.thumbnail_url;
        }
      }
    } catch (err) {
      console.log('Failed to fetch Instagram thumbnail:', err);
    }
    
    return null;
  };

  const fetchSocialMediaPosts = useCallback(async () => {
    try {
      setLoading(true);
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3002';
      
      const response = await fetch(`${backendUrl}/api/media`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch media');
      }

      const data = await response.json();
      const mediaList: Media[] = data.data?.media || [];

      // Filter Instagram media
      const instagramMediaList = mediaList
        .filter(m => m.linkType === 'instagram')
        .slice(0, 4);

      const instagramMedia = await Promise.all(
        instagramMediaList.map(async (media): Promise<SocialMediaPost> => {
          let thumbnail = media.thumbnail;
          if (!thumbnail) {
            thumbnail = await getInstagramThumbnail(media.linkUrl) || undefined;
          }
          return {
            id: media.id || media._id,
            _id: media._id,
            title: media.linkTitle,
            description: media.linkTitle,
            url: media.linkUrl,
            thumbnail: thumbnail,
            createdAt: media.createdAt,
            date: formatDate(media.createdAt),
          };
        })
      );

      // Filter and map YouTube media
      const youtubeMedia = mediaList
        .filter(m => m.linkType === 'youtube')
        .slice(0, 4)
        .map((media): SocialMediaPost => {
          let thumbnail = media.thumbnail;
          if (!thumbnail) {
            thumbnail = getYouTubeThumbnail(media.linkUrl) || undefined;
          }
          return {
            id: media.id || media._id,
            _id: media._id,
            title: media.linkTitle,
            description: media.linkTitle,
            url: media.linkUrl,
            thumbnail: thumbnail,
            createdAt: media.createdAt,
            date: formatDate(media.createdAt),
          };
        });

      // Use API data if available, otherwise use sample data
      setInstagramReels(instagramMedia.length > 0 ? instagramMedia : sampleInstagramReels);
      setYoutubeVideos(youtubeMedia.length > 0 ? youtubeMedia : sampleYouTubeVideos);
    } catch (error) {
      console.error('Error fetching social media posts:', error);
      // Use sample data on error
      setInstagramReels(sampleInstagramReels);
      setYoutubeVideos(sampleYouTubeVideos);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSocialMediaPosts();
  }, [fetchSocialMediaPosts]);

  return (
    <section className="pt-[46px] pb-[69px] bg-gradient-to-b from-white to-purple-50/30 relative overflow-hidden px-[3%]">
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
            Social Media Updates
          </span>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Latest updates on our Instagram and YouTube Channel
          </p>
        </motion.div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
          </div>
        ) : (
          <>
            {/* Instagram Reels - First Row */}
            <div className="mb-6">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {instagramReels.map((reel, index) => (
                  <InstagramReelCard key={reel.id || reel._id || String(index)} reel={reel} index={index} />
                ))}
              </motion.div>
            </div>

            {/* YouTube Videos - Second Row */}
            <div>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {youtubeVideos.map((video, index) => {
                  const videoId = video.id || video._id || String(index);
                  const thumbnailUrl = video.thumbnail || getYouTubeThumbnail(video.url);
                  return (
                    <motion.a
                      key={videoId}
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="group relative overflow-hidden rounded-lg border-2 border-purple-200 shadow-md transition-all duration-300 bg-white hover:border-purple-400 hover:shadow-lg hover:-translate-y-1 focus:outline-none"
                    >
                      {/* Thumbnail/Image */}
                      {thumbnailUrl ? (
                        <div className="relative h-32 overflow-hidden">
                          <Image
                            src={thumbnailUrl}
                            alt={video.title || 'YouTube video'}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                          {/* YouTube Icon Overlay */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                              <Youtube className="w-5 h-5 text-white ml-0.5" />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="relative h-32 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 flex items-center justify-center">
                          <Youtube className="w-8 h-8 text-white" />
                        </div>
                      )}
                      
                      {/* Content */}
                      <div className="p-2.5 bg-white">
                        {video.title && (
                          <h3 className="text-slate-900 font-semibold text-xs mb-0.5 group-hover:text-purple-600 transition-colors line-clamp-2">
                            {video.title}
                          </h3>
                        )}
                        {video.date && (
                          <span className="text-slate-500 text-[10px]">{video.date}</span>
                        )}
                      </div>
                    </motion.a>
                  );
                })}
              </motion.div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

