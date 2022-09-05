/** @type {import('next').NextConfig} */


const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProd ? '/vaults-and-stuff/' : '',
  images: {
    loader: 'akamai',
    path: './img',
  },
}
