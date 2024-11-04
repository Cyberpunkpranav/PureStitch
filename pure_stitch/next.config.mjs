/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
    env: {
        API_URL: 'http://localhost:8080',
        NEW_ARRIVALS_BG_URL:'http://localhost:8080/api/products/types/images',
        POST_MEDIA_URL:'http://localhost:8080/api/products/media'

      },
};

export default nextConfig;
