import { z } from 'zod';

const ERROR_MESSAGE = {
  CONTENT: {
    REQUIRED: '본문 영역에 텍스트를 작성해 주세요.',
  },
};

export const contentSchema = z.object({
  /** 에디터 내용 (HTML 문자열) */
  contents: z.string(),
  /** 에디터 내용의 순수 텍스트. 빈 내용인지 검사하는 용도로만 쓴다. */
  contentText: z.string().trim().min(1, ERROR_MESSAGE.CONTENT.REQUIRED),
});

export type TContentForm = z.infer<typeof contentSchema>;
