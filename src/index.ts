// eslint-disable-next-line import/no-internal-modules
import '@rushstack/eslint-patch/modern-module-resolution'

import { cwd } from 'process'

export = {
  extends: ['./typescript', './prettier', './import', './rules', './json'],
  ignorePatterns: ['/dist', '/build', '/bin', '/node_modules', 'package.json', '/.yarn', '*.md'],
  parserOptions: { tsconfigRootDir: cwd() },
}
