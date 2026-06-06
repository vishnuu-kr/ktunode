/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/ingest/static/:path*',
        destination: 'https://us-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/ingest/:path*',
        destination: 'https://us.i.posthog.com/:path*',
      },
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
  outputFileTracingIncludes: {
    '/api/notes': ['./src/data/topic-path-map.json'],
    '/api/notes/route': ['./src/data/topic-path-map.json'],
    '/api/subjects': ['./src/data/subjects/**/*'],
    '/api/subjects/route': ['./src/data/subjects/**/*'],
  },
  outputFileTracingExcludes: {
    '*': ['./public/notes/**/*'],
    '**/*': ['./public/notes/**/*'],
  },
};

export default nextConfig;
