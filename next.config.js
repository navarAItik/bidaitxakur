/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return 'build-' + Date.now()
  },
};

module.exports = nextConfig;
