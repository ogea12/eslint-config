import type { ConfigWithExtends } from 'typescript-eslint'

import pluginAdonisJS from '@adonisjs/eslint-plugin'

/** ESLint configuration object for AdonisJS's rules. */
const config: ConfigWithExtends = {
  name: 'ogea12:adonisjs',
  plugins: { '@adonisjs': pluginAdonisJS },
  rules: {
    '@adonisjs/prefer-lazy-controller-import': 'error',
    '@adonisjs/prefer-lazy-listener-import': 'error',
  },
}

export default config
