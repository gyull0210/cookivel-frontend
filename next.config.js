// next.config.js
const withTwin = require('./withTwin.js')
const path = require('path');
/**
 * @type {import('next').NextConfig}
 */
module.exports = withTwin({
  swcMinify: true,
  images: {
    domains: ['loremflickr.com','cloudflare-ipfs.com', 'avatars.githubusercontent.com'],
  },
  reactStrictMode: true,
  async rewrites(){
    return [
      { source:'/list',
        destination: 'https://picsum.photos/v2/list'       
      }
    ]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // ...
})