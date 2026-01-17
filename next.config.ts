import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  reactStrictMode: true,
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "sjcetpalai.ac.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "mulearn.org",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
