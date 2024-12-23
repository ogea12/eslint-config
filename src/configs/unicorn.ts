import type { ConfigWithExtends } from 'typescript-eslint'

import pluginUnicorn from 'eslint-plugin-unicorn'

/** ESLint configuration object for Unicorn's rules. */
const config: ConfigWithExtends = {
  name: 'Unicorn',
  plugins: { unicorn: pluginUnicorn },
  rules: {
    'unicorn/prefer-module': 'error',
    'unicorn/prefer-node-protocol': 'error',
    'unicorn/filename-case': ['error', { case: 'snakeCase' }],
    'unicorn/no-await-expression-member': 'error',
    'unicorn/no-for-loop': 'error',
    'unicorn/no-instanceof-array': 'error',
    'unicorn/prefer-number-properties': 'error',
  },
}

export default config
