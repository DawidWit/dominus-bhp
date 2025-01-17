import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Zasoby statyczne generowane przez Next.js
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // 1 rok
          },
        ],
      },
      {
        // Twoje obrazy i inne zasoby statyczne
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // 1 rok
          },
        ],
      },
      {
        // Pliki JavaScript i inne dynamiczne zasoby
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400", // 1 dzień
          },
        ],
      },
    ];
  },
};

export default nextConfig;
