module.exports = function setup (b, opts) {
  b.plugin('css-modulesify', {
    output: 'dist/main.css',
    postcssBefore: [
      require('postcss-color-rebeccapurple')
    ],
    postcssAfter: [
      require('autoprefixer')
    ]
  })
}
