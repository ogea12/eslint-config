import type { ConfigWithExtends } from 'typescript-eslint'

import pluginJSDoc from 'eslint-plugin-jsdoc'

import { hasTypeScript } from '../lib/env.js'

/** ESLint configuration object for JSDoc's rules. */
const config: ConfigWithExtends = {
  name: 'ogea12:jsdoc',
  plugins: { jsdoc: pluginJSDoc },
  rules: {
    'jsdoc/check-access': 'warn',
    'jsdoc/check-param-names': 'warn',
    'jsdoc/check-property-names': 'warn',
    'jsdoc/check-types': 'warn',
    'jsdoc/empty-tags': 'warn',
    'jsdoc/implements-on-classes': 'warn',
    'jsdoc/no-defaults': 'warn',
    'jsdoc/no-multi-asterisks': 'warn',
    'jsdoc/require-description-complete-sentence': 'warn',
    'jsdoc/require-hyphen-before-param-description': 'warn',
    'jsdoc/require-param-name': 'warn',
    'jsdoc/require-property': 'warn',
    'jsdoc/require-property-description': 'warn',
    'jsdoc/require-property-name': 'warn',
    'jsdoc/require-returns-check': 'warn',
    'jsdoc/require-returns-description': 'warn',
    'jsdoc/require-yields-check': 'warn',
    'jsdoc/check-alignment': 'warn',
    'jsdoc/multiline-blocks': 'warn',
  },
}

if (!hasTypeScript) {
  config.rules = {
    ...config.rules,
    'jsdoc/require-returns': 'warn',
    'jsdoc/require-param-type': 'warn',
  }
}

export default config
