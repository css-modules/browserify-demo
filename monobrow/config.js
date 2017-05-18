const m = require('monobrow')

module.exports = {
  entry: 'src/index.js',
  output: {
    dir: 'dist',
    vendor: 'vendor.js'
  },

  vendor: [
    'react',
    'react-dom'
  ],

  // disable browserify-incremental as css-modulesify is not yet compatible
  inc: false,

  packs: [
    require('./babel'),
    require('./css-modules'),
  ]
}
