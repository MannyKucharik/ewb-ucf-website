import type { NextConfig } from "next";

const nextConfig = {
  output: 'export', // This is the crucial line
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
