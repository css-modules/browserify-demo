const babelify = require('babelify')

module.exports = function setup (b, opts) {
  b.transform(babelify, {
    presets: [ 'es2015', 'react' ]
  })
}
