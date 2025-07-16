/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "sjcetpalai.ac.in",
      },
      {
        protocol: "https",
        hostname: "skillicons.dev",
      },
    ],
  },
};

module.exports = nextConfig;
