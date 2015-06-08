var styles = require('./InheritanceOverrides.css');
require('insert-css')(styles);

var h = require('hyperscript');

module.exports = h('div', { className: styles.root },
  h('p', { className: styles.text }, 'Inherited Styles with Overrides')
);
