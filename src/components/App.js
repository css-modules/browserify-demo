var styles = require('./App.css');
require('insert-css')(styles);

var h = require('hyperscript');

var ScopedSelectors = require('./1-ScopedSelectors/ScopedSelectors');
var GlobalSelectors = require('./2-GlobalSelectors/GlobalSelectors');
var ClassComposition = require('./3-ClassComposition/ClassComposition');
var CompositionOverrides = require('./4-CompositionOverrides/CompositionOverrides');
var ScopedAnimations = require('./5-ScopedAnimations/ScopedAnimations');

module.exports = h('div', { className: styles.app }, [
  h('h1', 'CSS Modules Browserify Demo'),

  h('hr', { className: styles.hr }),

  h('h2', 'Scoped Selectors'),
  h('p', 'In CSS Modules, selectors are scoped by default.'),
  h('p', [
    'The following component uses two classes, ',
    h('strong', '.root'),
    ' and ',
    h('strong', '.text'),
    ', both of which would typically be too vague in a larger project.'
  ]),
  h('p', [
    'CSS Module semantics ensure that these ',
    h('strong', 'classes are locally scoped'),
    ' to the component and don\'t collide with other classes in the global scope.'
  ]),
  ScopedSelectors,

  h('hr', { className: styles.hr }),

  h('h2', { className: styles.incomplete }, 'Global Selectors (INCOMPLETE)'),
  h('p', [
    'Although they should be used as sparingly as possible, ',
    h('strong', 'global selectors are still available when required.')
  ]),
  h('p', [
    'The following component styles all ',
    h('strong', '<p>'),
    ' tags nested inside it.'
  ]),
  GlobalSelectors,

  h('hr', { className: styles.hr }),

  h('h2', { className: styles.incomplete }, 'Class Composition (INCOMPLETE)'),
  h('p', [
    'Both of the components below have ',
    h('strong', 'locally scoped CSS'),
    ' that ',
    h('strong', 'composes a common set of CSS Modules.')
  ]),
  h('p', [
    'Since ',
    h('strong', 'identifiers from CSS Modules can be composed'),
    ', the resulting markup is optimised by ',
    h('b', 'reusing classes between components.')
  ]),
  ClassComposition,

  h('hr', { className: styles.hr }),

  h('h2', { className: styles.incomplete }, 'Composition Overrides (INCOMPLETE)'),
  h('p', [
    'When composing classes, ',
    h('strong', ' style properties can be overridden'),
    ' as you\'d expect.'
  ]),
  h('p', 'The following component composes two different classes, but provides overrides which then take precedence.'),
  CompositionOverrides,

  h('hr', { className: styles.hr }),

  h('h2', { className: styles.incomplete }, 'Scoped Animations (INCOMPLETE)'),
  h('p', [
    'CSS Modules even provide ',
    h('strong', 'locally scoped animations'),
    ', which are typically defined in the global scope.'
  ]),
  h('p', 'The animation\'s keyframes are private to the animations module, only exposed publicly via a class which this component inherits from.'),
  ScopedAnimations
]);
