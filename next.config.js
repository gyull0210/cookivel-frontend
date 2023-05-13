// next.config.js
const withTwin = require('./withTwin.js')

/**
 * @type {import('next').NextConfig}
 */
module.exports = withTwin({
  images: {
    domains: ['api.lorem.space', 'i.pravatar.cc','loremflickr.com','cloudflare-ipfs.com'],
  },
  reactStrictMode: true,
  async rewrites(){
    return [
      { source:'/list',
        destination: 'https://picsum.photos/v2/list'       
      }
    ]
  }
  // ...
})