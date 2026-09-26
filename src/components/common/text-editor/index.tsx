'use client';

import { Editor } from '@hyorispace/nst-tiptap';

import { extensions, toolbarItems } from './preset';

type TTextEditorProps = {
  /** 초기 내용 (HTML 문자열) */
  content?: string;
  className?: string;
  /** 내용이 바뀔 때마다 HTML 문자열로 전달한다. */
  onChange?: (html: string) => void;
};

export default function TextEditor({
  className,
  content,
  onChange,
}: TTextEditorProps) {
  return (
    <Editor
      content={content}
      extensions={extensions}
      toolbarItems={toolbarItems}
      onUpdate={(editor) => onChange?.(editor.getHTML())}
      className={className}
    />
  );
}
