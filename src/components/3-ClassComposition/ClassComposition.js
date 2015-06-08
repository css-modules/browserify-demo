var h = require('hyperscript');

var StyleVariantA = require('./StyleVariantA/StyleVariantA');
var StyleVariantB = require('./StyleVariantB/StyleVariantB');

module.exports = h('div', [
  StyleVariantA,
  h('br'),
  StyleVariantB
]);
