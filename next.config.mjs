/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},
  serverExternalPackages: ["pdf-parse"],

  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
