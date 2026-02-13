/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to support dynamic routes with client components
  // Dynamic blog routes require client-side rendering which is incompatible with static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
