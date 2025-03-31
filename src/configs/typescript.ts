import tseslint from 'typescript-eslint'

import flattenArray from '../lib/flatten_array.js'

/** ESLint configuration object for TypeScript's rules. */
const config = flattenArray(tseslint.configs['strict'])
config.name = 'ogea12:typescript' // Override the configuration name
config.rules = {
  ...config.rules,
  '@typescript-eslint/consistent-type-imports': [
    'error',
    { prefer: 'type-imports', disallowTypeAnnotations: false },
  ],
  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': [
    'error',
    { functions: false, classes: false, variables: true },
  ],
  '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
  '@typescript-eslint/prefer-ts-expect-error': 'error',
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      args: 'all',
      argsIgnorePattern: '^_',
      caughtErrors: 'all',
      caughtErrorsIgnorePattern: '^_',
      destructuredArrayIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      ignoreRestSiblings: true,
    },
  ],
  'no-redeclare': 'off',
  '@typescript-eslint/no-redeclare': 'error',
  'no-dupe-class-members': 'off',
  '@typescript-eslint/no-dupe-class-members': 'error',
  'no-loss-of-precision': 'off',
  '@typescript-eslint/no-loss-of-precision': 'error',
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'variableLike',
      format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      filter: { regex: '^_', match: false },
    },
    { selector: 'typeLike', format: ['PascalCase'] },
    { selector: 'class', format: ['PascalCase'] },
  ],
  '@typescript-eslint/consistent-type-definitions': 'off',
  '@typescript-eslint/consistent-indexed-object-style': 'off',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/parameter-properties': 'off',
  '@typescript-eslint/no-empty-interface': 'off',
  '@typescript-eslint/ban-ts-ignore': 'off',
  '@typescript-eslint/no-empty-function': 'off',
  '@typescript-eslint/no-non-null-assertion': 'off',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/no-namespace': 'off',
  '@typescript-eslint/triple-slash-reference': 'off',
  '@typescript-eslint/no-empty-object-type': 'off',
  '@typescript-eslint/no-unused-expressions': 'off',
}

export default config
