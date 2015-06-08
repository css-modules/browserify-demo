var styles = require('./ScopedAnimations.css');
require('insert-css')(styles);

var h = require('hyperscript');

module.exports = h('div', { className: styles.root },
  h('div', { className: styles.ball })
);
