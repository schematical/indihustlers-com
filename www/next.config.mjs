/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        outputFileTracingExcludes: {
           '*': ['**swc/core**']
        },
    },
};

export default nextConfig;
