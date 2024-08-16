module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['plugin:prettier/recommended'],
  rules: {
    semi: 'error',
    'prefer-const': 'error',
  },
};
