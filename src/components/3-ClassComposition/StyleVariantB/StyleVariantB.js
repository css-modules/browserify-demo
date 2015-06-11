var styles = require('./StyleVariantB.css');

var h = require('hyperscript');

module.exports = h('div', { className: styles.root },
  h('p', { className: styles.text }, 'Style Variant B')
);
