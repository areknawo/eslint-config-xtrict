const { ERROR } = require("../values");

module.exports = {
	rules: {
		"no-await-in-loop": ERROR,
		"no-console": ERROR,
		"no-template-curly-in-string": ERROR
	},
	plugins: ["sonarjs"],
	extends: ["eslint:recommended", "plugin:sonarjs/recommended"]
};
