module.exports = {
  root: true,

  env: {
    node: true,
    jest: true,
  },

  extends: ['plugin:vue/vue3-essential', '@vue/airbnb'],

  parserOptions: {
    parser: 'babel-eslint',
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'linebreak-style': 0,
    'max-len': ['error', { code: 300 }],
  },

  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],

  extends: ['plugin:vue/vue3-essential', '@vue/airbnb'],
};
