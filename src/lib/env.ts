import { isPackageExists } from 'local-pkg'

/** Checks if `prettier` package is installed. */
const hasPrettier = isPackageExists('prettier')

/** Checks if `typescript` package is installed. */
const hasTypeScript = isPackageExists('typescript')

/** Checks if `unocss` package is installed. */
const hasUnoCSS = isPackageExists('unocss')

/** Checks if `storybook` package is installed. */
const hasStorybook = isPackageExists('storybook')

/** Checks if `@adonisjs/core` package is installed. */
const hasAdonisJS = isPackageExists('@adonisjs/core')

export { hasAdonisJS, hasPrettier, hasStorybook, hasTypeScript, hasUnoCSS }
