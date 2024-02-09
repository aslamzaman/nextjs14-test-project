/** @type {import('next').NextConfig} */
const nextConfig = {    
    trailingSlash: true,
    output: 'export',
    images: {
        unoptimized: false,
      },
}

module.exports = nextConfig
