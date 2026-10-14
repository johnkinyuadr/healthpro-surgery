import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The online form now lives on the main second-opinion page.
      { source: "/online-second-opinion", destination: "/second-opinion#request", permanent: true },
    ];
  },
};

export default nextConfig;
