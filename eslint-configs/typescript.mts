import type { Linter } from 'eslint';

export const typescriptConfig: Linter.Config[] = [
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          format: ['camelCase', 'UPPER_CASE', 'snake_case', 'PascalCase'],
          selector: 'variable',
          leadingUnderscore: 'allow',
        },
        { format: ['camelCase', 'PascalCase'], selector: 'function' },
        { format: ['PascalCase'], prefix: ['I'], selector: 'interface' },
        { format: ['PascalCase'], prefix: ['T'], selector: 'typeAlias' },
      ],
    },
  },
];
