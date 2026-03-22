/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath: '/portfolio', // Uncomment this line ONLY when deploying to GitHub Pages!
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
