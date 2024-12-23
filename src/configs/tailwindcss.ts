import pluginTailwindCSS from 'eslint-plugin-tailwindcss'

import flattenArray from '../lib/flatten_array.js'

/** ESLint configuration object for Tailwind CSS's rules. */
const config = flattenArray(pluginTailwindCSS.configs['flat/recommended'])
config.name = 'Tailwind CSS' // Override the configuration name

export default config
