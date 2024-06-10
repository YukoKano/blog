/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
        port: "",
        pathname: "/assets/2dc8ddbf4d1c41f1ab0581cb917c5e12/**",
      },
    ],
  },
};

export default nextConfig;
