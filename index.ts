import type { ConfigWithExtends } from 'typescript-eslint'

import tseslint from 'typescript-eslint'

import configAdonisJS from './src/configs/adonisjs.js'
import configIgnores from './src/configs/ignores.js'
import configJavaScript from './src/configs/javascript.js'
import configJSDoc from './src/configs/jsdoc.js'
import configNode from './src/configs/node.js'
import configPerfectionist from './src/configs/perfectionist.js'
import configStorybook from './src/configs/storybook.js'
import configPrettier from './src/configs/prettier.js'
import configTailwindCSS from './src/configs/tailwindcss.js'
import configTypeScript from './src/configs/typescript.js'
import configUnicorn from './src/configs/unicorn.js'
import {
  hasAdonisJS,
  hasPrettier,
  hasStorybook,
  hasTailwindCSS,
  hasTypeScript,
} from './src/lib/env.js'

export function configure(...configsToMerge: ConfigWithExtends[]) {
  // Check if TypeScript's configuration should be enabled
  if (hasTypeScript) {
    configsToMerge.push(configTypeScript)
  }

  // Check if Tailwind CSS's configuration should be enabled
  if (hasTailwindCSS) {
    configsToMerge.push(configTailwindCSS)
  }

  // Check if Storybook's configuration should be enabled
  if (hasStorybook) {
    configsToMerge.push(configStorybook)
  }

  // Check if AdonisJS's configuration should be enabled
  if (hasAdonisJS) {
    configsToMerge.push(configAdonisJS)
  }

  // Check if Prettier's configuration should be enabled
  if (hasPrettier) {
    configsToMerge.push(configPrettier)
  }

  return tseslint.config(
    configIgnores,
    configJavaScript,
    configUnicorn,
    configJSDoc,
    configNode,
    configPerfectionist,
    ...configsToMerge
  )
}
