import { createBasicPreset } from '@hyorispace/nst-tiptap';

/**
 * 에디터와 뷰어가 함께 쓰는 프리셋.
 * 뷰어도 에디터와 같은 extensions를 써야 저장한 내용이 똑같이 렌더링된다.
 *
 * client 컴포넌트('use client')에서만 import한다.
 * 옵션은 기능별로 켜고 끈다. 예: createBasicPreset({ strike: false, placeholder: { placeholder: '내용' } })
 */
export const preset = createBasicPreset();

export const { extensions, toolbarItems } = preset;
