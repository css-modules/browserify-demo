var styles = require('./GlobalSelectors.css');
console.log(styles.toString());
require('insert-css')(styles);

var h = require('hyperscript');

module.exports = h('div', { className: styles.root },
  h('p', 'Global Selectors')
);
