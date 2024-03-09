/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    assetPrefix: process.env.PUBLIC_ASSET_URL,
    images: {
        unoptimized: true,
    }/*,
    experimental: {
        outputFileTracingExcludes: {
           '*': ['**swc/core**']
        },
    },*/
};

export default nextConfig;
