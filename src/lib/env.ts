import { isPackageListedSync } from 'local-pkg'

/** Checks if `prettier` package is installed. */
const hasPrettier = isPackageListedSync('prettier')

/** Checks if `typescript` package is installed. */
const hasTypeScript = isPackageListedSync('typescript')

/** Checks if `unocss` package is installed. */
const hasUnoCSS = isPackageListedSync('unocss')

/** Checks if `storybook` package is installed. */
const hasStorybook = isPackageListedSync('storybook')

/** Checks if `@adonisjs/core` package is installed. */
const hasAdonisJS = isPackageListedSync('@adonisjs/core')

export { hasAdonisJS, hasPrettier, hasStorybook, hasTypeScript, hasUnoCSS }
