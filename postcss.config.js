module.exports = {
  plugins: [
    require('precss'),
    require('postcss-mixins'),
    require('postcss-inline-svg'),
    require("postcss-color-function"),
    require('autoprefixer'),
    require('postcss-automath'),
    require('postcss-hexrgba'),
    require('postcss-extend'),
    require('postcss-each')
  ]
}
