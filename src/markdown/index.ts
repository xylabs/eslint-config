export = {
  extends: ['plugin:md/recommended'],
  overrides: [
    {
      files: ['*.md'],
      parser: 'markdown-eslint-parser',
      rules: {
        'md/remark': [
          'error',
          {
            plugins: ['preset-lint-markdown-style-guide', 'frontmatter', ['lint-maximum-line-length', 240], ['lint-list-item-indent', 'tab-size']],
          },
        ],
      },
    },
  ],
}
