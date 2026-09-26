const commitlintConfig = {
  extends: ['@commitlint/config-conventional'],
  plugins: ['commitlint-plugin-function-rules'],
  rules: {
    'subject-empty': [0],
    'type-empty': [0],
    'type-enum': [0],
    'header-max-length': [0],
    'subject-case': [0],
    'function-rules/scope-enum': [
      2,
      'always',
      ({ header }) => {
        const regex =
          /(feat|fix|hotfix|refactor|modify|style|add|rename|remove|docs|test|chore|temp|perf|ci|revert|assets)+: .+/;
        return regex.test(header)
          ? [true]
          : [
              false,
              `🚨 커밋 형식은 "prefix: commit message"의 형태여야 합니다.`,
            ];
      },
    ],
  },
};

export default commitlintConfig;
