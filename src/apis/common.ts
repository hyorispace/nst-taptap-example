import ky from 'ky';

export const clientApi = ky.create({
  prefix: '/api',
  retry: 0,
});

const SERVER_SIDE_BASE_URL =
  process.env.NEXT_PUBLIC_ENV_MODE === 'production'
    ? process.env.PROD_API_URL
    : process.env.DEV_API_URL;

export const serverApi = ky.create({
  prefix: SERVER_SIDE_BASE_URL ?? '',
});
