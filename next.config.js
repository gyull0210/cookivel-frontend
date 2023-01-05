// next.config.js
const withTwin = require('./withTwin.js')

/**
 * @type {import('next').NextConfig}
 */
module.exports = withTwin({
  images: {
    domains: ['picsum.photos','api.lorem.space'],
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