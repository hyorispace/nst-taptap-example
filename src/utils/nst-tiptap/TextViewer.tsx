'use client';

import { Viewer } from '@hyorispace/nst-tiptap';

import { preset } from './preset';

import type { TViewerProps } from '@hyorispace/nst-tiptap';

export type TTextViewerProps = Omit<TViewerProps, 'preset' | 'extensions'>;

/** 프리셋을 연결한 뷰어. Server Component에서 바로 렌더링할 수 있다. */
export function TextViewer(props: TTextViewerProps) {
  return <Viewer preset={preset} {...props} />;
}
