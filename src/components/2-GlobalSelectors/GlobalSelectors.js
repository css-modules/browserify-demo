var styles = require('./GlobalSelectors.css');
require('insert-css')(styles);

var h = require('hyperscript');

module.exports = h('div', { className: styles.root },
  h('p', 'Global Selectors')
);
