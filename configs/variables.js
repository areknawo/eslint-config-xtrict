const { ERROR } = require("../values");

module.exports = {
  rules: {
    "init-declarations": ERROR,
    "no-label-var": ERROR,
    "no-undef-init": ERROR,
    "no-undefined": ERROR,
    "no-use-before-define": ERROR
  },
  extends: ["eslint:recommended"]
};
