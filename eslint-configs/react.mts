import type { Linter } from 'eslint';

export const reactConfig: Linter.Config[] = [
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      'react/jsx-no-useless-fragment': 'error',
      'react-hooks/exhaustive-deps': 'error',
    },
  },
];
