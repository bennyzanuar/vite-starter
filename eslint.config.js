import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';
import tailwind from 'eslint-plugin-tailwindcss';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y'; // This is the plugin object

export default [
  // Global ignores - add other config files
  { ignores: [
      'dist/', 
      'node_modules/', 
      'eslint.config.js', 
      'postcss.config.js', 
      'tailwind.config.js',
      // 'vite.config.ts', // Consider if this also needs to be ignored from type-aware app source linting
    ] 
  },

  // Base config for all JavaScript/TypeScript files (that are not ignored)
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    }
  },
  
  // TypeScript specific configurations (parser setup)
  // This applies to files NOT ignored above.
  {
    files: ['**/*.{ts,tsx,cts,mts}'], // This should not include vite.config.ts if it's in ignores
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.app.json', './tsconfig.node.json'], // Point to the app-specific tsconfig
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  js.configs.recommended, // For JS files (not ignored)
  ...tseslint.configs.recommendedTypeChecked, // For TS files (not ignored)
  ...tseslint.configs.stylisticTypeChecked, // For TS files (not ignored)

  // React specific configurations
  {
    files: ['**/*.{jsx,tsx}'],
    ...react.configs.flat.recommended, 
    languageOptions: { 
      ...react.configs.flat.recommended.languageOptions,
      globals: { ...globals.browser },
    },
    plugins: {
      'react': react, 
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
    settings: {
      react: { version: 'detect' },
    },
  },
  
  // JSX A11y configurations
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: {
      'jsx-a11y': pluginJsxA11y,
    },
    rules: {
      ...(pluginJsxA11y.configs.recommended ? pluginJsxA11y.configs.recommended.rules : {}),
    },
  },

  ...tailwind.configs['flat/recommended'], // Applies to files matched by its internal config
  
  // Custom rule adjustments for TypeScript files (ensure this doesn't apply to JS or ignored files)
  {
    files: ['**/*.{ts,tsx,cts,mts}'], // Apply these rule adjustments only to non-ignored TS files
    rules: {
      '@typescript-eslint/await-thenable': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/consistent-indexed-object-style': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
    }
  },
  eslintConfigPrettier, // Should be last
];
