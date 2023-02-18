/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    runtime: 'nodejs',
    appDir: true,
    swcMinify: true,
  },
};

module.exports = nextConfig;
