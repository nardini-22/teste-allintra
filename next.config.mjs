/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_WEBSOCKET_URL: process.env.NEXT_WEBSOCKET_URL,
  },
}

export default nextConfig
