import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // campus-lp.cabuild.jp を独立サブドメインで配信するため basePath は持たない
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
