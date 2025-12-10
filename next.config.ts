import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: 'www.facebook.com',
      },
    ],
    qualities: [100]
  },
};

export default nextConfig;
