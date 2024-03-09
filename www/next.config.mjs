/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    assetPrefix: `${process.env.PUBLIC_ASSET_URL}/${process.env.ASSET_HASH}`,
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
