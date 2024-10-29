/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
    env: {
        API_URL: 'http://localhost:8080',
        ASSET_URL:'http://localhost:8080/images'
      },
};

export default nextConfig;
