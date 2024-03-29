/** @type {import('next').NextConfig} */
const withExportImages = require('next-export-optimize-images')

const nextConfig = withExportImages({
    output: 'export',
    experimental: {
        appDir: true,
    },

    basePath: process.env.NEXT_PUBLIC_BASE_PATH,

    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        })

        return config
    },

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.youtube.com"
            }
        ]
    },
});

module.exports = nextConfig;