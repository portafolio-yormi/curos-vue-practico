module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended', // o 'plugin:vue/recommended' si usas Vue 2
    '@vue/eslint-config-prettier'
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error']
  }
}
