import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compress: true,
  reactStrictMode: true,
  images: { unoptimized: true },
};

export default nextConfig;
