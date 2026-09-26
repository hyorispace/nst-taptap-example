'use client';

import { Editor } from '@hyorispace/nst-tiptap';

import { preset } from './preset';

import type { TEditorProps } from '@hyorispace/nst-tiptap';

export type TTextEditorProps = Omit<
  TEditorProps,
  'preset' | 'extensions' | 'toolbarItems'
>;

/** 프리셋을 연결한 에디터. Server Component에서 바로 렌더링할 수 있다. */
export function TextEditor(props: TTextEditorProps) {
  return <Editor preset={preset} {...props} />;
}
