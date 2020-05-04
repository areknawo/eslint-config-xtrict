const { ERROR, OFF } = require("../values");

module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: "./**/tsconfig.json",
		ecmaVersion: 2019,
		sourceType: "module",
	},
	rules: {
		"@typescript-eslint/array-type": [ERROR, { default: "array-simple" }],
		"@typescript-eslint/await-thenable": ERROR,
		"@typescript-eslint/ban-ts-ignore": ERROR,
		"@typescript-eslint/ban-types": [
			ERROR,
			{
				types: {
					Number: {
						message: "Use number instead",
						fixWith: "number",
					},
					String: {
						message: "Use string instead",
						fixWith: "string",
					},
					Boolean: {
						message: "Use boolean instead",
						fixWith: "boolean",
					},
					Symbol: {
						message: "Use symbol instead",
						fixWith: "symbol",
					},
					Object: {
						message: "Use object instead",
						fixWith: "object",
					},
				},
			},
		],
		"@typescript-eslint/consistent-type-definitions": ["error", "interface"],
		"@typescript-eslint/explicit-function-return-type": [
			"error",
			{
				allowExpressions: true,
				allowTypedFunctionExpressions: true,
				allowHigherOrderFunctions: true,
			},
		],
		"func-call-spacing": OFF,
		"@typescript-eslint/func-call-spacing": ERROR,
		"@typescript-eslint/generic-type-naming": [ERROR, "^[A-Z]$"],
		"@typescript-eslint/indent": OFF,
		"@typescript-eslint/member-ordering": ERROR,
		"no-empty-function": OFF,
		"@typescript-eslint/no-empty-function": ERROR,
		"@typescript-eslint/no-empty-interface": [
			ERROR,
			{
				allowSingleExtends: true,
			},
		],
		"@typescript-eslint/no-explicit-any": OFF,
		"@typescript-eslint/no-extraneous-class": [ERROR, { allowConstructorOnly: true }],
		"@typescript-eslint/no-for-in-array": ERROR,
		"@typescript-eslint/no-inferrable-types": [
			ERROR,
			{
				ignoreParameters: false,
				ignoreProperties: false,
			},
		],
		"no-magic-numbers": OFF,
		"@typescript-eslint/no-magic-numbers": [
			ERROR,
			{
				ignore: [0, 1, -1],
				ignoreArrayIndexes: true,
				ignoreNumericLiteralTypes: true,
				ignoreEnums: true,
			},
		],
		"@typescript-eslint/no-non-null-assertion": OFF,
		"@typescript-eslint/no-object-literal-type-assertion": OFF,
		"@typescript-eslint/no-require-imports": ERROR,
		"@typescript-eslint/no-this-alias": [
			ERROR,
			{
				allowDestructuring: true,
			},
		],
		"@typescript-eslint/camelcase": OFF,
		"@typescript-eslint/no-type-alias": OFF,
		"@typescript-eslint/no-unnecessary-qualifier": ERROR,
		"@typescript-eslint/no-unnecessary-type-assertion": ERROR,
		"@typescript-eslint/no-useless-constructor": ERROR,
		"@typescript-eslint/prefer-for-of": ERROR,
		"@typescript-eslint/prefer-function-type": ERROR,
		"@typescript-eslint/prefer-includes": ERROR,
		"@typescript-eslint/prefer-regexp-exec": ERROR,
		"@typescript-eslint/prefer-string-starts-ends-with": ERROR,
		"@typescript-eslint/require-array-sort-compare": ERROR,
		"@typescript-eslint/restrict-plus-operands": ERROR,
		"semi": OFF,
		"@typescript-eslint/semi": ERROR,
		"@typescript-eslint/unified-signatures": ERROR,
		"no-mixed-spaces-and-tabs": [ERROR, "smart-tabs"],
		"no-dupe-class-members": OFF,
		"no-unused-vars": OFF,
	},
	plugins: ["@typescript-eslint", "import"],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:import/typescript",
	],
};
