module.exports = {
  extends: ['plugin:vue/recommended', '@vue/standard', '@vue/typescript/recommended', '.eslintrc-js.js'],
  rules: {
    // Override
    'vue/no-deprecated-filter': 'off', // TODO: Reenable this

    // Additional
    'vue/component-name-in-template-casing': ['error', 'PascalCase']
  }
}
