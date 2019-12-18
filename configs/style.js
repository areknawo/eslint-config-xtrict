const { ERROR, OFF } = require("../values");

module.exports = {
	rules: {
		"array-bracket-newline": [ERROR, "consistent"],
		"array-bracket-spacing": ERROR,
		"array-element-newline": [ERROR, "consistent"],
		"block-spacing": ERROR,
		"brace-style": ERROR,
		"camelcase": ERROR,
		"comma-dangle": [ERROR, "never"],
		"comma-spacing": ERROR,
		"comma-style": ERROR,
		"computed-property-spacing": ERROR,
		"consistent-this": ERROR,
		"eol-last": ERROR,
		"func-name-matching": ERROR,
		"func-names": [ERROR, "never"],
		"func-style": ERROR,
		"implicit-arrow-linebreak": ERROR,
		"key-spacing": ERROR,
		"keyword-spacing": ERROR,
		"line-comment-position": ERROR,
		"linebreak-style": ERROR,
		"lines-between-class-members": [ERROR, "always"],
		"max-depth": ERROR,
		"max-len": [ERROR, { code: 100, tabWidth: 1 }],
		"max-lines": [ERROR, { max: 400, skipBlankLines: true, skipComments: true }],
		"max-lines-per-function": [ERROR, { skipBlankLines: true, skipComments: true }],
		"max-params": ERROR,
		"max-statements": [ERROR, 20, { ignoreTopLevelFunctions: true }],
		"max-statements-per-line": ERROR,
		"multiline-comment-style": ERROR,
		"multiline-ternary": [ERROR, "never"],
		"new-cap": [ERROR, { capIsNew: false }],
		"new-parens": ERROR,
		"newline-per-chained-call": ERROR,
		"no-array-constructor": ERROR,
		"no-inline-comments": ERROR,
		"no-lonely-if": ERROR,
		"no-mixed-operators": ERROR,
		"no-multi-assign": ERROR,
		"no-multiple-empty-lines": [ERROR, { max: 1 }],
		"no-negated-condition": ERROR,
		"no-nested-ternary": ERROR,
		"no-new-object": ERROR,
		"no-plusplus": [ERROR, { allowForLoopAfterthoughts: true }],
		"no-tabs": [ERROR, { allowIndentationTabs: true }],
		"no-trailing-spaces": ERROR,
		"no-underscore-dangle": [ERROR, { enforceInMethodNames: true }],
		"no-unneeded-ternary": [ERROR, { defaultAssignment: false }],
		"no-whitespace-before-property": ERROR,
		"nonblock-statement-body-position": ERROR,
		"object-curly-newline": OFF,
		"object-curly-spacing": [ERROR, "always"],
		"object-property-newline": ERROR,
		"one-var": [ERROR, "never"],
		"one-var-declaration-per-line": [ERROR, "always"],
		"operator-assignment": ERROR,
		"operator-linebreak": [ERROR, "after"],
		"padding-line-between-statements": [
			ERROR,
			{
				blankLine: "always",
				prev: ["const", "let", "var"],
				next: "*"
			},
			{
				blankLine: "always",
				prev: "*",
				next: ["const", "let", "var"]
			},
			{
				blankLine: "always",
				prev: "*",
				next: ["block", "block-like"]
			},
			{
				blankLine: "always",
				prev: ["block", "block-like"],
				next: "*"
			},
			{
				blankLine: "always",
				prev: "*",
				next: "export"
			},
			{
				blankLine: "never",
				prev: "export",
				next: "export"
			},
			{
				blankLine: "always",
				prev: "import",
				next: "*"
			},
			{ blankLine: "never", prev: "import", next: "import" },
			{
				blankLine: "always",
				prev: "*",
				next: "expression"
			},
			{ blankLine: "never", prev: "expression", next: "expression" },
			{
				blankLine: "always",
				prev: "*",
				next: "return"
			},
			{
				blankLine: "always",
				prev: ["const", "let", "var"],
				next: ["const", "let", "var"]
			},
			{
				blankLine: "never",
				prev: "const",
				next: "const"
			},
			{
				blankLine: "never",
				prev: "let",
				next: "let"
			},
			{
				blankLine: "never",
				prev: "var",
				next: "var"
			}
		],
		"prefer-object-spread": ERROR,
		"quote-props": [ERROR, "consistent-as-needed"],
		"quotes": [ERROR, "double", { avoidEscape: true, allowTemplateLiterals: true }],
		"semi": ERROR,
		"semi-spacing": ERROR,
		"semi-style": ERROR,
		"sort-keys": [ERROR, "asc", { natural: true }],
		"sort-vars": ERROR,
		"space-before-blocks": ERROR,
		"space-in-parens": ERROR,
		"space-infix-ops": ERROR,
		"space-unary-ops": [ERROR, { words: true, nonwords: false }],
		"spaced-comment": ERROR,
		"switch-colon-spacing": ERROR,
		"template-tag-spacing": ERROR,
		"wrap-regex": ERROR
	},
	plugins: ["prettier"],
	extends: ["eslint:recommended", "prettier", "prettier/@typescript-eslint"]
};
