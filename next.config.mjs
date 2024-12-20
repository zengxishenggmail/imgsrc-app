/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

export default nextConfig
