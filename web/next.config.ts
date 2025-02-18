import type { NextConfig } from "next";
import { PATH } from "./constants/PATH";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/login",
        destination: PATH.login,
        permanent: false,
      },
      {
        source: "/register",
        destination: PATH.register,
        permanent: false,
      },
      {
        source: PATH.property,
        destination: PATH.home,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
