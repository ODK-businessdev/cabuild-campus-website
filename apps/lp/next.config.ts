import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  basePath: '/campus/lp',
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
