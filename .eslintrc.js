module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'global-require': 'off',
    'no-unused-vars': 'off',
    'vue/no-unused-vars': 'off',
    "@typescript-eslint/no-unused-vars": [
        "error",
        { "argsIgnorePattern": "^_" }
    ],
  },
};
