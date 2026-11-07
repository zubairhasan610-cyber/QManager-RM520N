import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: { cpus: 1, webpackBuildWorker: false },
  /* config options here */
  webpack: (config) => {
    config.resolve.alias["@"] = process.cwd();
    config.parallelism = 1;
    return config;
  },
  output: "export",
  trailingSlash: true,

  // Uncomment for local dev. Comment out before `bun run build` (static export).
  // async rewrites() {
  //   return [
  //     {
  //       source: "/cgi-bin/:path*",
  //       // Disable lighttpd's HTTP→HTTPS redirect on the modem for local dev.
  //       // Bun doesn't support NODE_TLS_REJECT_UNAUTHORIZED for self-signed certs.
  //       destination: "http://192.168.225.1/cgi-bin/:path*",
  //       // Tailscale alternative:
  //       // destination: "http://toothless.tail23767.ts.net/cgi-bin/:path*",
  //       basePath: false,
  //     },
  //   ];
  // },
};

export default nextConfig;
