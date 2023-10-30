/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  pageExtensions:
    process.env.APP_ENV === "production"
      ? ["page.tsx"]
      : ["page.tsx", "api.ts"],
};

module.exports = nextConfig;
