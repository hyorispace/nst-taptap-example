import { PropsWithChildren } from 'react';

import { ChevronDownIcon } from 'public/icons';

export default function TestComp({ children }: PropsWithChildren) {
  return (
    <button className="flex items-center gap-2">
      {children}
      <ChevronDownIcon className="size-24 shrink-0" />
    </button>
  );
}
