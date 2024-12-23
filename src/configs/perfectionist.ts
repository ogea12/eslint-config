import type { ConfigWithExtends } from 'typescript-eslint'

import pluginPerfectionist from 'eslint-plugin-perfectionist'

/** ESLint configuration object for Perfectionist's rules. */
const config: ConfigWithExtends = {
  name: 'Perfectionist',
  plugins: { perfectionist: pluginPerfectionist },
  rules: {
    'perfectionist/sort-imports': [
      'error',
      { type: 'natural', internalPattern: ['^~/.+', '^#.+'] },
    ],
    'perfectionist/sort-named-imports': ['error', { type: 'natural' }],
    'perfectionist/sort-named-exports': ['error', { type: 'natural' }],
    'perfectionist/sort-exports': ['error', { type: 'natural' }],
    'perfectionist/sort-jsx-props': [
      'error',
      {
        type: 'natural',
        groups: ['multiline', 'unknown', 'shorthand', 'callback'],
        customGroups: { callback: '^on.+' },
      },
    ],
  },
}

export default config
