var styles = require('./CompositionOverrides.css');

var h = require('hyperscript');

module.exports = h('div', { className: styles.root },
  h('p', { className: styles.text }, 'Class Composition with Overrides')
);
