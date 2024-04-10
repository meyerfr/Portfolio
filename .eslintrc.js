module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["eslint:recommended", "plugin:react/recommended", "plugin:import/recommended", "prettier"],
	settings: {
		react: {
			version: "detect",
		},
		"import/resolver": {
			node: {
				extensions: [".js", ".jsx"],
			},
		},
	},
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script",
			},
		},
		{
			files: ["*.js", "*.jsx"],
			rules: {
				"simple-import-sort/imports": [
					"error",
					{
						groups: [
							// Packages `react` related packages come first.
							["^react", "^@?\\w"],
							// Internal packages.
							["^(@|components)(/.*|$)"],
							// Side effect imports.
							["^\\u0000"],
							// Other relative imports. Put same-folder imports and `.` last.
							["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
							// Parent imports. Put `..` last.
							["^\\.\\.(?!/?$)", "^\\.\\./?$"],
							// Style imports.
							["^.+\\.?(css)$"],
						],
					},
				],
			},
		},
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "simple-import-sort"],
	rules: {
		"react/prop-types": "off",
		"import/no-named-as-default": 0,
		"import/no-named-as-default-member": 0,
		"simple-import-sort/imports": "error",
		"simple-import-sort/exports": "error",
		indent: "off",
		// indent: [
		// 	"error",
		// 	"tab",
		// 	{
		// 		SwitchCase: 1,
		// 	},
		// ],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "never"],
	},
}
