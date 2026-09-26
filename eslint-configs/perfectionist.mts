import perfectionist from 'eslint-plugin-perfectionist';

import type { Linter } from 'eslint';

export const perfectionistConfig: Linter.Config[] = [
  {
    files: ['**/*.{ts,tsx,mts}'],
    plugins: {
      perfectionist,
    },
    rules: {
      'perfectionist/sort-enums': 'error',
      'perfectionist/sort-exports': 'error',
      'perfectionist/sort-heritage-clauses': 'error',
      'perfectionist/sort-maps': 'error',
      'perfectionist/sort-sets': 'error',
      'perfectionist/sort-named-exports': 'error',
      'perfectionist/sort-named-imports': 'error',
      'perfectionist/sort-jsx-props': [
        'error',
        {
          type: 'natural',
          groups: ['reserved', 'unknown', 'callback', 'style'],
          customGroups: [
            {
              groupName: 'reserved',
              elementNamePattern: ['key', 'ref'],
            },
            {
              groupName: 'callback',
              elementNamePattern: '^on.+',
            },
            {
              groupName: 'style',
              elementNamePattern: 'className',
            },
          ],
        },
      ],
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'natural',
          groups: [
            ['builtin'],
            ['react'],
            ['external'],
            ['internal'],
            ['parent'],
            ['sibling'],
            ['public'],
            ['side-effect', 'side-effect-style'],
            ['index'],
            ['style'],
            ['type-builtin'],
            ['type-external'],
            ['type-internal'],
            ['type-parent'],
            ['type-sibling'],
            ['type-index'],
            ['unknown'],
          ],
          customGroups: [
            {
              groupName: 'react',
              elementNamePattern: ['^react'],
            },
            {
              groupName: 'public',
              elementNamePattern: ['^public'],
            },
            {
              groupName: 'internal',
              elementNamePattern: ['^@/.*$'],
            },
          ],
        },
      ],
      'perfectionist/sort-object-types': [
        'error',
        {
          type: 'unsorted',
          groups: ['top', 'unknown', 'method', 'bottom'],
          customGroups: [
            {
              groupName: 'top',
              selector: 'property',
              elementNamePattern: '^children$',
            },
            {
              groupName: 'bottom',
              elementNamePattern: '^on.+',
            },
          ],
        },
      ],
      'perfectionist/sort-objects': [
        'error',
        {
          type: 'unsorted',
          groups: ['top', 'unknown', 'method', 'bottom'],
          customGroups: [
            {
              groupName: 'top',
              selector: 'property',
              elementNamePattern: '^children$',
            },
            {
              groupName: 'bottom',
              elementNamePattern: '^on.+',
            },
          ],
        },
      ],
    },
  },
];
