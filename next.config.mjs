/** @type {import('next').NextConfig} */
const nextConfig = {
  // All env vars starting with NEXT_PUBLIC_ are exposed to the browser.
  // Keys without that prefix stay server-side only.
  experimental: {
    serverActions: { allowedOrigins: ['localhost:3000'] },
  },
}

export default nextConfig
