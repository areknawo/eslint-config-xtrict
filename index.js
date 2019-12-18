module.exports = {
  extends: [
    "./configs/errors",
    "./configs/variables",
    "./configs/es6",
    "./configs/modules",
    "./configs/jsdoc",
    "./configs/style",
    "./configs/practices",
    "./configs/typescript"
  ].map(require.resolve)
};
