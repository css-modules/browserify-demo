var styles = require('./ScopedSelectors.css');
require('insert-css')(styles);

var h = require('hyperscript');

module.exports = h('div', { className: styles.root },
  h('p', { className: styles.text }, 'Scoped Selectors')
);
