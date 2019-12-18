const { ERROR, WARN, OFF } = require("../values");

module.exports = {
  rules: {
    "jsdoc/check-examples": OFF,
    "jsdoc/check-indentation": WARN,
    "jsdoc/check-syntax": WARN,
    "jsdoc/check-types": OFF,
    "jsdoc/match-description": WARN,
    "jsdoc/no-types": WARN,
    "jsdoc/no-undefined-types": OFF,
    "jsdoc/require-description-complete-sentence": WARN,
    "jsdoc/require-description": OFF,
    "jsdoc/require-example": OFF,
    "jsdoc/require-hyphen-before-param-description": WARN,
    "jsdoc/require-jsdoc": [
      ERROR,
      {
        require: {
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          ClassExpression: true,
          FunctionDeclaration: true,
          FunctionExpression: true,
          MethodDefinition: true
        },
        exemptEmptyFunctions: true
      }
    ],
    "jsdoc/require-param-type": OFF,
    "jsdoc/require-returns-type": OFF,
    "jsdoc/valid-types": OFF
  },
  settings: {
    jsdoc: {
      ignorePrivate: true
    }
  },
  plugins: ["jsdoc"],
  extends: ["eslint:recommended", "plugin:jsdoc/recommended"]
};
