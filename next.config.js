/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["tailwindcss.com"],
    },
};

module.exports = nextConfig;
