import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [],
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
