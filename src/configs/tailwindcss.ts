import pluginTailwindCSS from 'eslint-plugin-tailwindcss'

import flattenArray from '../lib/flatten_array.js'

/** ESLint configuration object for Tailwind CSS's rules. */
const config = flattenArray(pluginTailwindCSS.configs['flat/recommended'])
config.name = 'Tailwind CSS' // Override the configuration name
config.settings = {
  tailwindcss: { callees: ['classnames', 'clsx', 'ctl', 'cva', 'tv', 'twMerge'] },
}

export default config
