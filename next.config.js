/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    HOST_API: process.env.HOST_API
  }
}

module.exports = nextConfig
