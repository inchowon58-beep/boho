import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  outputFileTracingExcludes: {
    "*": ["./public/images/**"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/%EC%9D%B8%EC%B2%9C%EA%B0%95%EC%95%84%EC%A7%80%EB%B3%B4%ED%98%B8%EC%86%8C",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
