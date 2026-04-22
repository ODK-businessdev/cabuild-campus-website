import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  basePath: '/campus/lp',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
