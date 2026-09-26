'use client';

import {
  SubmitHandler,
  useController,
  useForm,
  useWatch,
} from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { Viewer } from '@hyorispace/nst-tiptap';
import {
  Button,
  Card,
  Dialog,
  Field,
  Separator,
} from '@naraspace-technology/nds/components';

import TextEditor from '@/components/common/text-editor';
import { extensions } from '@/components/common/text-editor/preset';
import { contentSchema, TContentForm } from '@/schemas/contentSchema';

const INITIAL_CONTENT =
  '<h1>nst-tiptap 테스트</h1><p>내용을 작성하고 미리보기 버튼을 눌러보세요.</p>';

export default function Home() {
  const { control, handleSubmit } = useForm<TContentForm>({
    resolver: zodResolver(contentSchema),
    defaultValues: {
      contents: INITIAL_CONTENT,
      contentText: INITIAL_CONTENT,
    },
  });

  const { field: contentField } = useController({ name: 'contents', control });
  const {
    field: contentTextField,
    fieldState: { error: contentTextError },
  } = useController({ name: 'contentText', control });

  const contents = useWatch({ name: 'contents', control });

  const onSubmit: SubmitHandler<TContentForm> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Dialog.Root>
        <Card.Root className="mx-auto max-w-900 flex-col gap-16 p-20">
          <div className="flex items-start justify-between gap-16">
            <Card.Body className="gap-4">
              <Card.Title>nst-tiptap 에디터</Card.Title>
              <Card.Subtitle className="text-text-secondary">
                내용을 작성하고 미리보기로 뷰어 화면을 확인하세요.
              </Card.Subtitle>
            </Card.Body>
            <div className="flex shrink-0 gap-8">
              <Dialog.Trigger
                render={<Button type="button" variant="outline" />}
              >
                미리보기
              </Dialog.Trigger>
              <Button type="submit" variant="solid">
                작성
              </Button>
            </div>
          </div>

          <Separator />

          <Field.Root invalid={!!contentTextError}>
            <TextEditor
              content={INITIAL_CONTENT}
              isError={!!contentTextError}
              onChange={({ html, text }) => {
                contentField.onChange(html);
                contentTextField.onChange(text);
              }}
            />
            <Field.Error match={!!contentTextError}>
              {contentTextError?.message}
            </Field.Error>
          </Field.Root>
        </Card.Root>

        <Dialog.Popup className="max-h-[85vh] w-800">
          <Dialog.Title>미리보기</Dialog.Title>
          <Dialog.Description className="text-text-secondary">
            작성한 내용이 뷰어에서 보이는 화면입니다.
          </Dialog.Description>
          <Separator />
          <div className="-mx-20 overflow-y-auto">
            <Viewer content={contents} extensions={extensions} />
          </div>
          <Dialog.Footer>
            <Dialog.Cancel>닫기</Dialog.Cancel>
          </Dialog.Footer>
        </Dialog.Popup>
      </Dialog.Root>
    </form>
  );
}
