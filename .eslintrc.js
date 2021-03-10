module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  // 所有在 规则页面 被标记为对号的的规则将会默认开启
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // 额外的语言特性
    project: './tsconfig.eslint.json',
    // Airbnb's ESLint config requires this
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12, // ECMAScript版本
    sourceType: 'module', // 如果你的代码是 ECMAScript 模块
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.json', '.ts', '.d.ts', '.tsx', 'jsx'],
      },
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
  },
  rules: {
    // Include .prettierrc.js rules
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true,
      },
    ],
    // We will use TypeScript's types for component props instead
    'react/prop-types': 'off',
    // We don't want unused vars
    '@typescript-eslint/no-unused-vars': ['error'],
    eqeqeq: [2, 'always'], // 要求使用 === 和 !==
    quotes: [2, 'single'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react/jsx-one-expression-per-line': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        variables: false,
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'object-curly-newline': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
