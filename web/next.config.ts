import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/en/property",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
