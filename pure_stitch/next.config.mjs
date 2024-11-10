/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['192.168.0.100'],
  },
    env: {
        API_URL: 'http://192.168.0.100:8080',
        NEW_ARRIVALS_BG_URL:'http://192.168.0.100:8080/api/products/types/images',
        POST_MEDIA_URL:'http://192.168.0.100:8080/api/products/media'

      },
};

export default nextConfig;
