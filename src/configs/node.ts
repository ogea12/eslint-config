import type { ConfigWithExtends } from 'typescript-eslint'

import pluginNode from 'eslint-plugin-n'

/** ESLint configuration object for Node's rules. */
const config: ConfigWithExtends = {
  name: 'Node',
  plugins: { node: pluginNode },
  rules: {
    'node/handle-callback-err': ['error', '^(err|error)$'],
    'node/no-deprecated-api': 'error',
    'node/no-exports-assign': 'error',
    'node/no-new-require': 'error',
    'node/no-path-concat': 'error',
    'node/prefer-global/buffer': ['error', 'never'],
    'node/prefer-global/process': ['off', 'never'],
    'node/process-exit-as-throw': 'error',
  },
}

export default config
