/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  exportPathMap: function () {
    return {
      "/restaurant/[slug]/menu": { page: "/restaurant/[slug]/menu" },
      "/restaurant/[slug]": { page: "/restaurant/[slug]" },
    };
  },
};

module.exports = nextConfig;
