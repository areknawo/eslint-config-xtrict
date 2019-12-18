const { ERROR } = require("../values");

module.exports = {
  rules: {
    "arrow-body-style": ERROR,
    "arrow-parens": ERROR,
    "arrow-spacing": ERROR,
    "generator-star-spacing": [ERROR, "after"],
    "no-confusing-arrow": ERROR,
    "no-duplicate-imports": [ERROR, { includeExports: true }],
    "no-useless-computed-key": ERROR,
    "no-useless-rename": ERROR,
    "no-var": ERROR,
    "object-shorthand": [
      ERROR,
      "always",
      { avoidQuotes: true, ignoreConstructors: true }
    ],
    "prefer-arrow-callback": ERROR,
    "prefer-const": ERROR,
    "prefer-destructuring": ERROR,
    "prefer-numeric-literals": ERROR,
    "prefer-rest-params": ERROR,
    "prefer-spread": ERROR,
    "prefer-template": ERROR,
    "rest-spread-spacing": ERROR,
    "sort-imports": ERROR,
    "symbol-description": ERROR,
    "template-curly-spacing": ERROR,
    "yield-star-spacing": [ERROR, "after"]
  },
  extends: ["eslint:recommended"]
};
