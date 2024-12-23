import { isPackageExists } from 'local-pkg'

/** Check if `prettier` package is installed. */
const hasPrettier = isPackageExists('prettier')

/** Check if `typescript` package is installed. */
const hasTypeScript = isPackageExists('typescript')

/** Check if `tailwindcss` package is installed. */
const hasTailwindCSS = isPackageExists('tailwindcss')

/** Check if `@adonisjs/core` package is installed. */
const hasAdonisJS = isPackageExists('@adonisjs/core')

export { hasAdonisJS, hasPrettier, hasTailwindCSS, hasTypeScript }
