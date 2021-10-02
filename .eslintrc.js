module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': () => {
      if (typeof process.env.NODE_ENV === 'production') {
        return 'warn'
      }

      return 'off'
    },
    'no-debugger': () => {
      if (typeof process.env.NODE_ENV === 'production') {
        return 'warn'
      }

      return 'off'
    },
    'prettier/prettier': ['error'],
  },
}
