var styles = require('./ScopedAnimations.css');

var h = require('hyperscript');

module.exports = h('div', { className: styles.root },
  h('div', { className: styles.ball })
);
