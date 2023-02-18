/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    runtime: "experimental-edge",
    appDir: true,
    swcMinify: true,
  },
};

module.exports = nextConfig;
