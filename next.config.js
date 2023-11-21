/** @type {import('next').NextConfig} */

const { withContentlayer } = require('next-contentlayer')

const nextConfig = {swcMinify: true }

module.exports = withContentlayer(nextConfig)