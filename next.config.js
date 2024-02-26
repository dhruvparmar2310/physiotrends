/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  env: {
    LOCALHOST: 'http://localhost:3000',
    DEPLOY: 'https://physiotrends.vercel.app/',
  },
}

module.exports = nextConfig