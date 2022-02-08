module.exports = {
  extends: ['.eslintrc-js.js', 'standard-with-typescript'],
  parserOptions: {
    project: ['**/tsconfig.eslint.json'],
    tsconfigRootDir: __dirname
  },
  rules: {
    // Override
    '@typescript-eslint/space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
    '@typescript-eslint/strict-boolean-expressions': ['error', { allowString: true, allowNullableString: true }],

    // Additional
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'no-type-imports' }]
  }
}
