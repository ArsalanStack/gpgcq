/** @type {import('next').NextConfig} */
const nextConfig = {
   async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'gpgcq.com' || 'www.gpgcq.com' || 'localhost:3000',
          },
        ],
        destination: 'https://gpgcq.vercel.app/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;

