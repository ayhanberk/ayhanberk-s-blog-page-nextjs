/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "images.pexels.com"
            },
            {
                protocol: 'https',
                hostname: "placehold.co"
            },
            {
                protocol: 'https',
                hostname: "avatars.githubusercontent.com"
            },
            {
                protocol: "https",
                hostname: "**",
            },

        ]
    },
};

export default nextConfig;
