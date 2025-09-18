/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'gpgcq.com' }],
        destination: 'https://gpgcq.vercel.app/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.gpgcq.com' }],
        destination: 'https://gpgcq.vercel.app/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'localhost:3000' }],
        destination: 'https://gpgcq.vercel.app/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;