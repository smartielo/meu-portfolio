import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  reactCompiler: true,
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
      },
    ],
  },
};

export default nextConfig;
