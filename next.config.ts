import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { remotePatterns: [{ hostname: "avatars.githubusercontent.com", protocol: "https" }, { hostname: "cdn.simpleicons.org", protocol: "https" }] },
};

export default nextConfig;
