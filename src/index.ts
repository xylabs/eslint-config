// eslint-disable-next-line import/no-internal-modules
import '@rushstack/eslint-patch/modern-module-resolution'

import { cwd } from 'process'

export = {
  extends: ['./typescript', './prettier', './import', './rules', './json', './markdown'],
  ignorePatterns: ['dist/**/*.*', 'build/**/*.*', 'bin/**/*.*', 'node_modules/**/*.*'],
  parserOptions: { tsconfigRootDir: cwd() },
}
