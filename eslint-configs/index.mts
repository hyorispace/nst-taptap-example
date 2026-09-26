import { baseConfig } from './base.mjs';
import { jsxA11yConfig } from './jsx-a11y.mjs';
import { perfectionistConfig } from './perfectionist.mjs';
import { prettierConfig } from './prettier.mjs';
import { reactConfig } from './react.mjs';
import { tanstackQueryConfig } from './tanstack-query.mjs';
import { typescriptConfig } from './typescript.mjs';
import { unusedImportsConfig } from './unused-imports.mjs';

import type { Linter } from 'eslint';

export const customConfigs: Linter.Config[] = [
  ...typescriptConfig,
  ...reactConfig,
  ...jsxA11yConfig,
  ...unusedImportsConfig,
  ...perfectionistConfig,
  ...tanstackQueryConfig,
  ...prettierConfig,
  ...baseConfig,
];
