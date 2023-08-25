/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.experiments.asyncWebAssembly = true;
    config.experiments.layers = true;
    // resolve.fallback.stream = false;
    // console.log(config);
    return config;
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["@prisma/client", "bcrypt"],
  },
  cleanDistDir: false,
};

module.exports = nextConfig;
