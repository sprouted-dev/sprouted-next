/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    runtime: "edge",
    appDir: true,
    swcMinify: true,
  },
};

module.exports = nextConfig;
