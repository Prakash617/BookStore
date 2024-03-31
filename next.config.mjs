import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['**', "tailwindui.com"], // Allow images from all domains
    },
};



export default withNextIntl(nextConfig);