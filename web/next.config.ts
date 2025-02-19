import type { NextConfig } from "next";
import { PATH } from "./constants/PATH";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: PATH.property,
        destination: PATH.home,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
