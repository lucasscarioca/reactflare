import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import pluginQuery from '@tanstack/eslint-plugin-query'
import pluginRouter from '@tanstack/eslint-plugin-router'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'

export default tseslint.config([
	globalIgnores(['dist']),
	...pluginQuery.configs['flat/recommended'],
	...pluginRouter.configs['flat/recommended'],
	{
		files: ['**/*.{ts,tsx}'],
		extends: [
			js.configs.recommended,
			tseslint.configs.recommended,
			reactHooks.configs['recommended-latest'],
			reactRefresh.configs.vite,
		],
		rules: {
			'react-refresh/only-export-components': 'off',
			'no-console': ['warn'],
		},
		languageOptions: {
			ecmaVersion: 2020,
			globals: {
				...globals.browser,
			},
		},
	},
])
