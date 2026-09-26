'use client';

import { Editor } from '@hyorispace/nst-tiptap';
import { cn } from '@naraspace-technology/nds/utils';

import { extensions, toolbarItems } from './preset';

type TTextEditorValue = {
  /** 에디터 내용 (HTML 문자열) */
  html: string;
  /** 에디터 내용의 순수 텍스트 */
  text: string;
};

type TTextEditorProps = {
  /** 초기 내용 (HTML 문자열) */
  content?: string;
  className?: string;
  isError?: boolean;
  /** 내용이 바뀔 때마다 HTML 문자열과 순수 텍스트를 함께 전달한다. */
  onChange?: (value: TTextEditorValue) => void;
};

export default function TextEditor({
  className,
  content,
  isError,
  onChange,
}: TTextEditorProps) {
  return (
    <Editor
      content={content}
      extensions={extensions}
      toolbarItems={toolbarItems}
      onUpdate={(editor) =>
        onChange?.({ html: editor.getHTML(), text: editor.getText() })
      }
      className={cn(
        isError && '[--editor-border-color:var(--status-danger)]',
        className,
      )}
    />
  );
}
