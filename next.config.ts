import type { NextConfig } from 'next';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_ENV_MODE === 'production'
    ? process.env.PROD_API_URL
    : process.env.DEV_API_URL;

const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {
    rules: {
      '*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      overrides: {
                        removeViewBox: false,
                      },
                    },
                  },
                  'removeDimensions',
                ],
              },
            },
          },
        ],
        as: '*.js',
      },
    },
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${API_BASE_URL ?? ''}/:path*`,
      },
    ];
  },
};

export default nextConfig;
