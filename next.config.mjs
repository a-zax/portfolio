/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio', // Enabled for GitHub Pages deployment.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
