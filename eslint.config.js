import globals from 'globals'
import pluginReact from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'
import reactRefresh from 'eslint-plugin-react-refresh'
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,jsx}'], languageOptions: { globals: globals.browser } },
  pluginReact.configs.flat.recommended,
  reactRefresh.configs.recommended,
  {
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      'no-unused-vars': ['warn', { varsIgnorePattern: '^[A-Z_]' }],
      indent: ['warn', 2],
      quotes: ['warn', 'single'],
      semi: ['warn', 'never'],
      'no-trailing-spaces': ['warn'],
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    }
  },
])
