import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

/**
 * https://github.com/pmndrs/zustand/discussions/842#discussioncomment-8942352
 */

const isDevMode = process.env.NODE_ENV === 'development';

export const createState = <T>(name: string, fn: StateCreator<T, [], []>) =>
  isDevMode
    ? create(
        devtools(fn as StateCreator<T, [['zustand/devtools', never]], []>, {
          name,
          anonymousActionType: `${name}/action`,
        }),
      )
    : create(fn);
