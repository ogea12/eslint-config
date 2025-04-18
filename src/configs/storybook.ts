import pluginStorybook from 'eslint-plugin-storybook'

import flattenArray from '../lib/flatten_array.js'

/** ESLint configuration object for Storybook's rules. */
const config = flattenArray(pluginStorybook.configs['flat/recommended'])
config.name = 'ogea12:storybook' // Override the configuration name

export default config
