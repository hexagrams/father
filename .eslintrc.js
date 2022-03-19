module.exports = {
  extends: [
    'eslint-config-ali/typescript/react',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 1,
  },
};
