import type { NextConfig } from "next";

const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete 
    // even if your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Keep your other config like output: 'export' here
};

export default nextConfig;
