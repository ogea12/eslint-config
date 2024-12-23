import type { ConfigWithExtends } from 'typescript-eslint'

/** Default list of folders and files to ignore. */
const IGNORES = [
  '**/node_modules',
  '**/package-lock.json',
  '**/yarn.lock',
  '**/pnpm-lock.yaml',
  '**/bun.lockb',
  '**/build',
  '**/dist',
  '**/out',
  '**/target',
  '**/output',
  '**/coverage',
  '**/temp',
  '**/fixtures',
  '**/.nuxt',
  '**/.vercel',
  '**/.output',
  '**/.fleet',
  '**/.idea',
  '**/.vscode',
  '**/*.min.*',
]

/** ESLint configuration object for folders and files to ignore. */
const config: ConfigWithExtends = {
  ignores: IGNORES,
}

export default config
