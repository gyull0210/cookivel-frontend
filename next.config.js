// next.config.js
const withTwin = require('./withTwin.js')

/**
 * @type {import('next').NextConfig}
 */
module.exports = withTwin({
  images: {
    domains: ["localhost", "*", "piscum.photos"],
  },
  reactStrictMode: true,
  // ...
})