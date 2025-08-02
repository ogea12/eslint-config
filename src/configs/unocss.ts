import type { ConfigWithExtends } from 'typescript-eslint'

import pluginUnoCSS from '@unocss/eslint-plugin'

/** ESLint configuration object for UnoCSS's rules. */
const config: ConfigWithExtends = {
  name: 'ogea12:unocss',
  plugins: { unocss: pluginUnoCSS },
  rules: {
    'unocss/order': ['warn', { unoFunctions: ['classnames', 'clsx', 'ctl', 'cva', 'cx'] }],
    'unocss/order-attributify': 'warn',
  },
}

export default config
