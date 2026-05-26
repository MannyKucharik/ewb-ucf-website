import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  trailingSlash: true, // <-- Add this line to fix the 404 on refresh!
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;