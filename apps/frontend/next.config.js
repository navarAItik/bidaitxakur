/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    domains: ['localhost'], // Para desarrollo local si es necesario
  },
};

module.exports = nextConfig;
