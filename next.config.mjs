/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:branch(cs|ec|me|ce|ee)/:sem(sem-\\d+)/:subject/:topic',
        destination: '/notes/:branch/:sem/:subject?branch=:branch&sem=:sem&subject=:subject&topic=:topic',
      },
      {
        source: '/:branch(cs|ec|me|ce|ee)/:sem(sem-\\d+)/:subject',
        destination: '/notes/:branch/:sem/:subject?branch=:branch&sem=:sem&subject=:subject',
      },
      {
        source: '/:branch(cs|ec|me|ce|ee)/:sem(sem-\\d+)',
        destination: '/notes/:branch/:sem?branch=:branch&sem=:sem',
      },
    ];
  },
};

export default nextConfig;
