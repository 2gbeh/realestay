import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/property",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
