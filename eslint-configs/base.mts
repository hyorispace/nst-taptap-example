import type { Linter } from 'eslint';

export const baseConfig: Linter.Config[] = [
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      'no-console': 'warn',
      eqeqeq: 'error',
      curly: 'error',
    },
  },
];
