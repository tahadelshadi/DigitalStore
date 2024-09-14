import nextPWA from 'next-pwa';

// PWA configuration
const withPWA = nextPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development', // Disable PWA in development
  register: true,
  skipWaiting: true,
});

/** @type {import('next').NextConfig} */
// Main Next.js config
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

export default withPWA(nextConfig);