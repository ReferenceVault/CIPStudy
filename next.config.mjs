/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // This replaces `next export`
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
