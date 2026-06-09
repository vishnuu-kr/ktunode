/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 365,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "date-fns"],
  },
  async headers() {
    return [
      {
        source: "/:path*\\.(js|css|woff|woff2|ttf|eot|ico|svg|png|jpg|jpeg|gif|webp|avif)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/notes/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
        ],
      },
      {
        source: "/api/health",
        headers: [
          { key: "Cache-Control", value: "no-store, max-age=0" },
        ],
      },
    ];
  },
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
