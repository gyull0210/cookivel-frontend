/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "*", "random.imagecdn.app", "www.poemist.com/api/v1/randompoems"],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
