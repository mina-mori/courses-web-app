module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect', // Or specify e.g., '18.0' if known
    },
  },
  rules: {
    // Add any custom rules
  },
};
