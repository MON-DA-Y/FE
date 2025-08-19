import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // 외부 이미지 허용
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // 모든 호스트 허용
      },
    ],
  },
};

export default nextConfig;
