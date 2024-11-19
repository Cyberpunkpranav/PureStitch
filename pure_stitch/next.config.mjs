/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['192.168.0.100'],
  },
    env: {
        API_URL: 'http://192.168.0.100:8080',
        NEW_ARRIVALS_BG_URL:'http://192.168.0.100:8080/api/products/types/images',
        NEW_ARRIVALS_POSTS:'http://192.168.0.100:8080/api/products/',
        POST_MEDIA_URL:'http://192.168.0.100:8080/api/products/media',
        ARRIVAL_POST_MEDIA :'http://192.168.0.100:8080/api/arrivals/media'
      },
};

export default nextConfig;
