import path from 'node:path';

const buildPrettierCommand = (filenames) =>
  `prettier --write ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`;

const buildEslintCommand = (filenames) =>
  `eslint --fix --format codeframe ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`;

const lintStagedConfig = {
  '*.{ts,tsx,mts}': (filenames) => [buildEslintCommand(filenames)],
  '*.{js,jsx,json,css,md}': (filenames) => [buildPrettierCommand(filenames)],
};

export default lintStagedConfig;
