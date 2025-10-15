import type { NextConfig } from "next";

// // 로컬호스트 ver
// const nextConfig: NextConfig = {
//   /* config options here */
//   // 외부 이미지 허용
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "**", // 모든 호스트 허용
//       },
//     ],
//   },
// };

// 배포 ver
const nextConfig: NextConfig = {
  output: "export",
  image: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
