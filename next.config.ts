import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // If your repository is named username.github.io, you don't need this
  // If it's a custom repository name, you need to set the base path
  // basePath: '/your-repo-name', // Remove this line if your repo is username.github.io
};

export default nextConfig;
