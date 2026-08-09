import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  // O GitHub Pages deste repositório publica em
  // https://rafanthx13.github.io/my-personal-web-site/
  basePath: isProduction ? "/my-personal-web-site" : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
