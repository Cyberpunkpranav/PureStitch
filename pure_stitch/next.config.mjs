/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
    env: {
        API_URL: 'http://localhost:8080',
        NEW_ARRIVALS_BG_URL:'http://localhost:8080/api/products/types/images',
        NEW_ARRIVALS_POSTS:'http://localhost:8080/api/products/',
        POST_MEDIA_URL:'http://localhost:8080/api/products/media',
        ARRIVAL_POST_MEDIA :'http://localhost:8080/api/arrivals/media'
      },
};

export default nextConfig;
