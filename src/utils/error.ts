import { type HTTPError, isHTTPError } from 'ky';

import type { TError } from '@/types/error';

type TApiError = HTTPError<TError> & { data: TError };

/** ky의 HTTPError를 백엔드 에러 응답(TError) 타입으로 좁히는 타입 가드 */
export function isApiError(error: unknown): error is TApiError {
  return isHTTPError<TError>(error);
}
