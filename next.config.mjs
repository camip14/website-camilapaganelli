/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // El sitio vive bajo /es y /en. La raíz y los links de la versión original van al español.
      { source: "/", destination: "/es", permanent: false },
      { source: "/about", destination: "/es/sobre-mi", permanent: false },
      { source: "/sobre-mi", destination: "/es/sobre-mi", permanent: false },
    ];
  },
};

export default nextConfig;
