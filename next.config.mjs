/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // Static export for nginx deployment
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
