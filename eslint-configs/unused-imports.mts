import unusedImports from 'eslint-plugin-unused-imports';

import type { Linter } from 'eslint';

export const unusedImportsConfig: Linter.Config[] = [
  {
    files: ['**/*.{ts,tsx,mts}'],
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'unused-imports/no-unused-imports': 'error',
    },
  },
];
