/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/PortfolioWebsite' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/PortfolioWebsite/' : '',
}

module.exports = nextConfig 