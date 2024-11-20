import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    env: {
      node: true, // Enables Node.js global variables and scope
      es2021: true, // Adds ES2021 global variables
    },
    rules: {
      'no-console': 'off', // Allow console statements
      'prefer-const': 'error', // Enforce `const` when variables are not reassigned
      eqeqeq: 'error', // Enforce strict equality (`===` and `!==`)
    },
  },
  pluginJs.configs.recommended,
];
