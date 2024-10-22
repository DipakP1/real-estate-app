// import nextPWA from 'next-pwa';
import withSerwistInit from "@serwist/next";

/** @type {import('next').NextConfig} */

const withSerwist = withSerwistInit({
  // cacheOnFrontEndNav: true,
  swSrc: "src/sw.ts",
  swDest: "public/sw.js",
  reloadOnOnline: true,
  disable: process.env.NODE_ENV === "development", // to disable pwa in development
});

const nextConfig = {
  swcMinify: true,
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.example.com",
        port: "",
        pathname: "/account123/**",
      },
    ],
  },
};

// const withPWA = nextPWA({
//   dest: "public", // Destination directory for the PWA files
//   disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
//   register: true, // Register the PWA service worker
//   skipWaiting: true, // Skip waiting for service worker activation
// });

export default withSerwist(nextConfig);
// module.exports = withPWA(nextConfig);
