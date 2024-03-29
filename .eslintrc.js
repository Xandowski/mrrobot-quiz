module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: ['error', 'never'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    // 'react/jsx-props-no-spreading': [enabled, {
    //   html: 'ignore' | 'enforce',
    //   custom: 'ignore' | 'enforce',
    //   explicitSpread: 'ignore' | 'enforce',
    //   exceptions: [string],
    // }],
  },

}
