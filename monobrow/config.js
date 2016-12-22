const m = require('monobrow')
const browserDeps = require('./deps').modules

module.exports = {
  entry: 'src/index.js',
  outDir: 'dist',

  // disable browserify-incremental as css-modulesify is not yet compatible
  inc: false,

  setup: [
    require('./babel'),
    require('./css-modules'),

    // browser dependencies will be included in a separate bundle
    m.external(browserDeps)
  ]
}
