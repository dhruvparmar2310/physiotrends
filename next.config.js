// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     unoptimized: true
//   },
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.pdf$/,
//       use: {
//         loader: 'file-loader',
//         options: {
//           publicPath: '/_next',
//           name: 'static/media/[name].[hash].[ext]',
//         },
//       },
//     });

//     return config;
//   },
//   env: {
//     LOCALHOST: 'http://localhost:3000',
//     DEPLOY: 'https://physiotrends.vercel.app/',
//   },
// }

// module.exports = nextConfig
const withPWA = require('next-pwa');

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next',
          name: 'static/media/[name].[hash].[ext]',
        },
      },
    });

    return config;
  },
  env: {
    LOCALHOST: 'http://localhost:3000',
    DEPLOY: 'https://physiotrends.vercel.app/',
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development'
  },
});