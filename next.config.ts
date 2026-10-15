import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The online form now lives on the main second-opinion page.
      { source: "/online-second-opinion", destination: "/second-opinion#request", permanent: true },
      // Short, printable link to the Google review form (used on the QR review card).
      { source: "/review", destination: "https://g.page/r/CSSEc0Zle1CJEBM/review", permanent: false },
    ];
  },
};

export default nextConfig;
