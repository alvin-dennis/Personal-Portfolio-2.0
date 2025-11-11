import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
