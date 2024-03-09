/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',

    images: {
        unoptimized: true,
    }/*,
    experimental: {
        outputFileTracingExcludes: {
           '*': ['**swc/core**']
        },
    },*/
};
if(process.env.PUBLIC_ASSET_URL){
    nextConfig.assetPrefix =`${process.env.PUBLIC_ASSET_URL}/${process.env.ASSET_HASH}`;
}
export default nextConfig;
