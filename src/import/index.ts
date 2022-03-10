export = {
  extends: ['plugin:import/errors', 'plugin:import/warnings', 'plugin:import/typescript'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        'import/namespace': ['warn'],
        'import/no-absolute-path': ['warn'],
        'import/no-cycle': [
          'off',
          {
            maxDepth: 2,
          },
        ],
        'import/no-default-export': ['warn'],
        'import/no-deprecated': ['warn'],
        'import/no-internal-modules': [
          'warn',
          {
            allow: ['lodash/*'],
          },
        ],
        'import/no-named-as-default': ['warn'],
        'import/no-restricted-paths': ['warn'],
        'import/no-self-import': ['warn'],
        'import/no-useless-path-segments': ['warn'],
        'simple-import-sort/exports': ['warn'],
        'simple-import-sort/imports': ['warn'],
      },
    },
  ],
  plugins: ['import', 'simple-import-sort'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
}
