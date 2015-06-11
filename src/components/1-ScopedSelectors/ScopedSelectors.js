var styles = require('./ScopedSelectors.css');

var h = require('hyperscript');

module.exports = h('div', { className: styles.root },
  h('p', { className: styles.text }, 'Scoped Selectors')
);
