module.exports = require('babel-jest').createTransformer({
  presets: ["es2015", "react"],
  plugins: ["babel-plugin-transform-class-properties"]
});