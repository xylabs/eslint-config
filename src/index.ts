import '@rushstack/eslint-patch'

export = {
  extends: ['./typescript', './prettier', './import', './rules', './json', './markdown'],
  ignorePatterns: ['dist/**/*.*', 'build/**/*.*', 'bin/**/*.*', 'node_modules/**/*.*'],
  parserOptions: { tsconfigRootDir: __dirname },
}
