import { createBasicPreset } from '@hyorispace/nst-tiptap';

import '@hyorispace/nst-tiptap/style.css';

/**
 * 에디터와 뷰어가 함께 쓰는 nst-tiptap 프리셋.
 * 뷰어도 에디터와 같은 extensions를 써야 내용이 똑같이 렌더링된다.
 */
export const { extensions, toolbarItems } = createBasicPreset();
