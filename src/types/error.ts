import { ERROR_CODES } from '@/constants/errorCode';

// TODO: API 에러 형식에 맞게 수정 필요
export type TError = {
  code: (typeof ERROR_CODES)[keyof typeof ERROR_CODES];
  message: string;
  statusCode: number;
};
