/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
        port: "",
        pathname: "/ios/256/**"
      }
    ]
  }
}

module.exports = nextConfig
