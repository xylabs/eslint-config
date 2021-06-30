// eslint-disable-next-line no-undef
module.exports = {
  extends: ['./index.js', 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/prop-types': ['off'],
    'react/react-in-jsx-scope': ['off'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
