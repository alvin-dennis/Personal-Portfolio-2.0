import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.weserv.nl",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
