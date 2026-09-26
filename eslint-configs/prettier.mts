import defaultPrettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

import type { Linter } from 'eslint';

export const prettierConfig: Linter.Config[] = [
  {
    files: ['**/*.{ts,tsx,mts}'],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'warn',
    },
  },
  defaultPrettierConfig,
];
