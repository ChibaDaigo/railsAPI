/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  watchers: {
    webpack: {
      poll: true,
    },
  },
};

export default nextConfig;
