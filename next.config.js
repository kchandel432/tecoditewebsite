/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },

    // Allow dev access for both localhost and your network
    allowedDevOrigins: ['http://localhost:3000', 'http://192.168.136.1:3000', 'http://192.168.31.236:3000'],
}

module.exports = nextConfig
