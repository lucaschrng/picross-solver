module.exports = {
  root: true,
  env: {browser: true, es2020: true},
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@stylistic'
  ],
  rules: {
    'quotes': ['error', 'single'],
    '@stylistic/indent': ['error', 2],
    'object-curly-spacing': ['error', 'always'],
  },
}
