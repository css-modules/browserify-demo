var styles = require('./GlobalSelectors.css');

var h = require('hyperscript');

module.exports = h('div', { className: styles.root },
  h('p', 'Global Selectors')
);
