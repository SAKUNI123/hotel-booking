/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com', // For istockphoto images
      },
      {
        protocol: 'https',
        hostname: 'www.google.com', // Add this to handle Google URLs
      },
    ],
  },
};

module.exports = nextConfig;
