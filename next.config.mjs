/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://gpgcq.vercel.app/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;

