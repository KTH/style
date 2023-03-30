/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    SERVER_URL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  },
  experimental: {
    appDir: false,
  },
};

module.exports = nextConfig;
