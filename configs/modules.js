const { ERROR } = require("../values");

module.exports = {
  rules: {
    "import/exports-last": ERROR,
    "import/no-default-export": ERROR,
    "import/group-exports": ERROR
  },
  plugins: ["import"],
  extends: ["eslint:recommended"]
};
