/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        outputFileTracingIgnores: [
            // '**canvas**',
            '**swc/core**'
        ],
    },
};

export default nextConfig;
