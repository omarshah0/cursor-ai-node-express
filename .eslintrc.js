module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [
          {
            pattern: 'express',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/routes/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/generated/client',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['express'],
        warnOnUnassignedImports: true,
      },
    ],
    'import/newline-after-import': ['error', { count: 1 }],
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        afterBlockComment: true,
        beforeLineComment: true,
        afterLineComment: true,
        allowBlockStart: true,
        allowBlockEnd: true,
        allowObjectStart: true,
        allowObjectEnd: true,
        allowArrayStart: true,
        allowArrayEnd: true,
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
};