import type { ConfigWithExtends } from 'typescript-eslint'

import configPrettier from 'eslint-config-prettier'
import pluginPrettier from 'eslint-plugin-prettier/recommended'

/** ESLint configuration object for Prettier's rules. */
const config: ConfigWithExtends = {
  name: 'Prettier',
  plugins: { ...pluginPrettier.plugins },
  rules: {
    ...configPrettier.rules,
    ...pluginPrettier.rules,
    'prettier/prettier': 'warn',
  },
}

export default config
