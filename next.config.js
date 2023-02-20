/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
  images: {
    domains: [
      "images.unsplash.com",
      "c8.alamy.com",
      "images.pexels.com",
      "thumbs.dreamstime.com",
    ],
  },
};

module.exports = nextConfig;
