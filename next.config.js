/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  eslint: {
    dirs: ['app'],
  },
  images: {
    domains: ['placehold.jp', 'storage.googleapis.com'],
  },
};

module.exports = nextConfig;
