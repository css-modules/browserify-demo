(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
var split = require('browser-split')
var ClassList = require('class-list')
require('html-element')

function context () {

  var cleanupFuncs = []

  function h() {
    var args = [].slice.call(arguments), e = null
    function item (l) {
      var r
      function parseClass (string) {
        var m = split(string, /([\.#]?[a-zA-Z0-9_:-]+)/)
        if(/^\.|#/.test(m[1]))
          e = document.createElement('div')
        forEach(m, function (v) {
          var s = v.substring(1,v.length)
          if(!v) return
          if(!e)
            e = document.createElement(v)
          else if (v[0] === '.')
            ClassList(e).add(s)
          else if (v[0] === '#')
            e.setAttribute('id', s)
        })
      }

      if(l == null)
        ;
      else if('string' === typeof l) {
        if(!e)
          parseClass(l)
        else
          e.appendChild(r = document.createTextNode(l))
      }
      else if('number' === typeof l
        || 'boolean' === typeof l
        || l instanceof Date
        || l instanceof RegExp ) {
          e.appendChild(r = document.createTextNode(l.toString()))
      }
      //there might be a better way to handle this...
      else if (isArray(l))
        forEach(l, item)
      else if(isNode(l))
        e.appendChild(r = l)
      else if(l instanceof Text)
        e.appendChild(r = l)
      else if ('object' === typeof l) {
        for (var k in l) {
          if('function' === typeof l[k]) {
            if(/^on\w+/.test(k)) {
              (function (k, l) { // capture k, l in the closure
                if (e.addEventListener){
                  e.addEventListener(k.substring(2), l[k], false)
                  cleanupFuncs.push(function(){
                    e.removeEventListener(k.substring(2), l[k], false)
                  })
                }else{
                  e.attachEvent(k, l[k])
                  cleanupFuncs.push(function(){
                    e.detachEvent(k, l[k])
                  })
                }
              })(k, l)
            } else {
              // observable
              e[k] = l[k]()
              cleanupFuncs.push(l[k](function (v) {
                e[k] = v
              }))
            }
          }
          else if(k === 'style') {
            if('string' === typeof l[k]) {
              e.style.cssText = l[k]
            }else{
              for (var s in l[k]) (function(s, v) {
                if('function' === typeof v) {
                  // observable
                  e.style.setProperty(s, v())
                  cleanupFuncs.push(v(function (val) {
                    e.style.setProperty(s, val)
                  }))
                } else
                  e.style.setProperty(s, l[k][s])
              })(s, l[k][s])
            }
          } else if (k.substr(0, 5) === "data-") {
            e.setAttribute(k, l[k])
          } else {
            e[k] = l[k]
          }
        }
      } else if ('function' === typeof l) {
        //assume it's an observable!
        var v = l()
        e.appendChild(r = isNode(v) ? v : document.createTextNode(v))

        cleanupFuncs.push(l(function (v) {
          if(isNode(v) && r.parentElement)
            r.parentElement.replaceChild(v, r), r = v
          else
            r.textContent = v
        }))
      }

      return r
    }
    while(args.length)
      item(args.shift())

    return e
  }

  h.cleanup = function () {
    for (var i = 0; i < cleanupFuncs.length; i++){
      cleanupFuncs[i]()
    }
    cleanupFuncs.length = 0
  }

  return h
}

var h = module.exports = context()
h.context = context

function isNode (el) {
  return el && el.nodeName && el.nodeType
}

function isText (el) {
  return el && el.nodeName === '#text' && el.nodeType == 3
}

function forEach (arr, fn) {
  if (arr.forEach) return arr.forEach(fn)
  for (var i = 0; i < arr.length; i++) fn(arr[i], i)
}

function isArray (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]'
}

},{"browser-split":3,"class-list":4,"html-element":1}],3:[function(require,module,exports){
/*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * ECMAScript compliant, uniform cross-browser split method
 */

/**
 * Splits a string into an array of strings using a regex or string separator. Matches of the
 * separator are not included in the result array. However, if `separator` is a regex that contains
 * capturing groups, backreferences are spliced into the result each time `separator` is matched.
 * Fixes browser bugs compared to the native `String.prototype.split` and can be used reliably
 * cross-browser.
 * @param {String} str String to split.
 * @param {RegExp|String} separator Regex or string to use for separating the string.
 * @param {Number} [limit] Maximum number of items to include in the result array.
 * @returns {Array} Array of substrings.
 * @example
 *
 * // Basic use
 * split('a b c d', ' ');
 * // -> ['a', 'b', 'c', 'd']
 *
 * // With limit
 * split('a b c d', ' ', 2);
 * // -> ['a', 'b']
 *
 * // Backreferences in result array
 * split('..word1 word2..', /([a-z]+)(\d+)/i);
 * // -> ['..', 'word', '1', ' ', 'word', '2', '..']
 */
module.exports = (function split(undef) {

  var nativeSplit = String.prototype.split,
    compliantExecNpcg = /()??/.exec("")[1] === undef,
    // NPCG: nonparticipating capturing group
    self;

  self = function(str, separator, limit) {
    // If `separator` is not a regex, use `nativeSplit`
    if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
      return nativeSplit.call(str, separator, limit);
    }
    var output = [],
      flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.extended ? "x" : "") + // Proposed for ES6
      (separator.sticky ? "y" : ""),
      // Firefox 3+
      lastLastIndex = 0,
      // Make `global` and avoid `lastIndex` issues by working with a copy
      separator = new RegExp(separator.source, flags + "g"),
      separator2, match, lastIndex, lastLength;
    str += ""; // Type-convert
    if (!compliantExecNpcg) {
      // Doesn't need flags gy, but they don't hurt
      separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
    }
    /* Values for `limit`, per the spec:
     * If undefined: 4294967295 // Math.pow(2, 32) - 1
     * If 0, Infinity, or NaN: 0
     * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
     * If negative number: 4294967296 - Math.floor(Math.abs(limit))
     * If other: Type-convert, then use the above rules
     */
    limit = limit === undef ? -1 >>> 0 : // Math.pow(2, 32) - 1
    limit >>> 0; // ToUint32(limit)
    while (match = separator.exec(str)) {
      // `separator.lastIndex` is not reliable cross-browser
      lastIndex = match.index + match[0].length;
      if (lastIndex > lastLastIndex) {
        output.push(str.slice(lastLastIndex, match.index));
        // Fix browsers whose `exec` methods don't consistently return `undefined` for
        // nonparticipating capturing groups
        if (!compliantExecNpcg && match.length > 1) {
          match[0].replace(separator2, function() {
            for (var i = 1; i < arguments.length - 2; i++) {
              if (arguments[i] === undef) {
                match[i] = undef;
              }
            }
          });
        }
        if (match.length > 1 && match.index < str.length) {
          Array.prototype.push.apply(output, match.slice(1));
        }
        lastLength = match[0].length;
        lastLastIndex = lastIndex;
        if (output.length >= limit) {
          break;
        }
      }
      if (separator.lastIndex === match.index) {
        separator.lastIndex++; // Avoid an infinite loop
      }
    }
    if (lastLastIndex === str.length) {
      if (lastLength || !separator.test("")) {
        output.push("");
      }
    } else {
      output.push(str.slice(lastLastIndex));
    }
    return output.length > limit ? output.slice(0, limit) : output;
  };

  return self;
})();

},{}],4:[function(require,module,exports){
// contains, add, remove, toggle
var indexof = require('indexof')

module.exports = ClassList

function ClassList(elem) {
    var cl = elem.classList

    if (cl) {
        return cl
    }

    var classList = {
        add: add
        , remove: remove
        , contains: contains
        , toggle: toggle
        , toString: $toString
        , length: 0
        , item: item
    }

    return classList

    function add(token) {
        var list = getTokens()
        if (indexof(list, token) > -1) {
            return
        }
        list.push(token)
        setTokens(list)
    }

    function remove(token) {
        var list = getTokens()
            , index = indexof(list, token)

        if (index === -1) {
            return
        }

        list.splice(index, 1)
        setTokens(list)
    }

    function contains(token) {
        return indexof(getTokens(), token) > -1
    }

    function toggle(token) {
        if (contains(token)) {
            remove(token)
            return false
        } else {
            add(token)
            return true
        }
    }

    function $toString() {
        return elem.className
    }

    function item(index) {
        var tokens = getTokens()
        return tokens[index] || null
    }

    function getTokens() {
        var className = elem.className

        return filter(className.split(" "), isTruthy)
    }

    function setTokens(list) {
        var length = list.length

        elem.className = list.join(" ")
        classList.length = length

        for (var i = 0; i < list.length; i++) {
            classList[i] = list[i]
        }

        delete list[length]
    }
}

function filter (arr, fn) {
    var ret = []
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i])) ret.push(arr[i])
    }
    return ret
}

function isTruthy(value) {
    return !!value
}

},{"indexof":5}],5:[function(require,module,exports){

var indexOf = [].indexOf;

module.exports = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};
},{}],6:[function(require,module,exports){
var inserted = {};

module.exports = function (css, options) {
    if (inserted[css]) return;
    inserted[css] = true;
    
    var elem = document.createElement('style');
    elem.setAttribute('type', 'text/css');

    if ('textContent' in elem) {
      elem.textContent = css;
    } else {
      elem.styleSheet.cssText = css;
    }
    
    var head = document.getElementsByTagName('head')[0];
    if (options && options.prepend) {
        head.insertBefore(elem, head.childNodes[0]);
    } else {
        head.appendChild(elem);
    }
};

},{}],7:[function(require,module,exports){
module.exports = {"root":"_ScopedSelectors__root","text":"_ScopedSelectors__text"}
module.exports.toString = function () { return "\n._ScopedSelectors__root {\n  border-width: 2px;\n  border-style: solid;\n  border-color: #777;\n  padding: 0 20px;\n  margin: 0 6px;\n  max-width: 400px;\n}\n\n._ScopedSelectors__text {\n  color: #777;\n  font-size: 24px;\n  font-family: helvetica, arial, sans-serif;\n  font-weight: 600;\n}\n"; }
},{}],8:[function(require,module,exports){
var styles = require('./ScopedSelectors.css');
require('insert-css')(styles);

var h = require('hyperscript');

module.exports = h('div', { className: styles.root },
  h('p', { className: styles.text }, 'Scoped Selectors')
);

},{"./ScopedSelectors.css":7,"hyperscript":2,"insert-css":6}],9:[function(require,module,exports){
module.exports = {"root":"_GlobalSelectors__root"}
module.exports.toString = function () { return "\n._GlobalSelectors__root {\n  border-width: 2px;\n  border-style: solid;\n  border-color: brown;\n  padding: 0 20px;\n  margin: 0 6px;\n  max-width: 400px;\n}\n\n:local(.root) p {\n  color: brown;\n  font-size: 24px;\n  font-family: helvetica, arial, sans-serif;\n  font-weight: 600;\n}\n"; }
},{}],10:[function(require,module,exports){
var styles = require('./GlobalSelectors.css');
console.log(styles.toString());
require('insert-css')(styles);

var h = require('hyperscript');

module.exports = h('div', { className: styles.root },
  h('p', 'Global Selectors')
);

},{"./GlobalSelectors.css":9,"hyperscript":2,"insert-css":6}],11:[function(require,module,exports){
var h = require('hyperscript');

var StyleVariantA = require('./StyleVariantA/StyleVariantA');
var StyleVariantB = require('./StyleVariantB/StyleVariantB');

module.exports = h('div', [
  StyleVariantA,
  h('br'),
  StyleVariantB
]);

},{"./StyleVariantA/StyleVariantA":13,"./StyleVariantB/StyleVariantB":15,"hyperscript":2}],12:[function(require,module,exports){
module.exports = {"root":"_StyleVariantA__root","text":"_StyleVariantA__text"}
module.exports.toString = function () { return "\n._StyleVariantA__root {\n  /*extends: box from \"../../../shared/styles/layout.css\";*/\n  border-color: red;\n}\n\n._StyleVariantA__text {\n  /*extends: heading from \"../../../shared/styles/typography.css\";*/\n  color: red;\n}\n"; }
},{}],13:[function(require,module,exports){
var styles = require('./StyleVariantA.css');
require('insert-css')(styles);

var h = require('hyperscript');

module.exports = h('div', { className: styles.root },
  h('p', { className: styles.text }, 'Style Variant A')
);

},{"./StyleVariantA.css":12,"hyperscript":2,"insert-css":6}],14:[function(require,module,exports){
module.exports = {"root":"_StyleVariantB__root","text":"_StyleVariantB__text"}
module.exports.toString = function () { return "\n._StyleVariantB__root {\n  /*extends: box from \"../../../shared/styles/layout.css\";*/\n  border-color: blue;\n}\n\n._StyleVariantB__text {\n  /*extends: heading from \"../../../shared/styles/typography.css\";*/\n  color: blue;\n}\n"; }
},{}],15:[function(require,module,exports){
var styles = require('./StyleVariantB.css');
require('insert-css')(styles);

var h = require('hyperscript');

module.exports = h('div', { className: styles.root },
  h('p', { className: styles.text }, 'Style Variant B')
);

},{"./StyleVariantB.css":14,"hyperscript":2,"insert-css":6}],16:[function(require,module,exports){
module.exports = {"root":"_InheritanceOverrides__root","text":"_InheritanceOverrides__text"}
module.exports.toString = function () { return "\n._InheritanceOverrides__root {\n  /*extends: box from \"../../shared/styles/layout.css\";*/\n  border-style: dotted;\n  border-color: green;\n}\n\n._InheritanceOverrides__text {\n  /*extends: heading from \"../../shared/styles/typography.css\";*/\n  font-weight: 200;\n  color: green;\n}\n"; }
},{}],17:[function(require,module,exports){
var styles = require('./InheritanceOverrides.css');
require('insert-css')(styles);

var h = require('hyperscript');

module.exports = h('div', { className: styles.root },
  h('p', { className: styles.text }, 'Inherited Styles with Overrides')
);

},{"./InheritanceOverrides.css":16,"hyperscript":2,"insert-css":6}],18:[function(require,module,exports){
module.exports = {"root":"_ScopedAnimations__root","ball":"_ScopedAnimations__ball"}
module.exports.toString = function () { return "\n._ScopedAnimations__root {\n  padding: 20px 10px;\n}\n\n._ScopedAnimations__ball {\n  /*extends: bounce from \"../../shared/styles/animations.css\";*/\n  width: 40px;\n  height: 40px;\n  border-radius: 20px;\n  background: rebeccapurple;\n}\n"; }
},{}],19:[function(require,module,exports){
var styles = require('./ScopedAnimations.css');
require('insert-css')(styles);

var h = require('hyperscript');

module.exports = h('div', { className: styles.root },
  h('div', { className: styles.ball })
);

},{"./ScopedAnimations.css":18,"hyperscript":2,"insert-css":6}],20:[function(require,module,exports){
module.exports = {"app":"_App__app","hr":"_App__hr","incomplete":"_App__incomplete"}
module.exports.toString = function () { return "\n._App__app {\n  text-size-adjust: none;\n  font-family: helvetica, arial, sans-serif;\n  line-height: 200%;\n  padding: 6px 20px 30px;\n}\n\n._App__hr {\n  margin: 40px 0;\n  height: 1px;\n  border: 0;\n  background: #ccc;\n}\n\n._App__incomplete {\n  color: red;\n}\n"; }
},{}],21:[function(require,module,exports){
var styles = require('./App.css');
require('insert-css')(styles);

var h = require('hyperscript');

var ScopedSelectors = require('./1-ScopedSelectors/ScopedSelectors');
var GlobalSelectors = require('./2-GlobalSelectors/GlobalSelectors');
var ClassInheritance = require('./3-ClassInheritance/ClassInheritance');
var InheritanceOverrides = require('./4-InheritanceOverrides/InheritanceOverrides');
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

  h('h2', { className: styles.incomplete }, 'Class Inheritance (INCOMPLETE)'),
  h('p', [
    'Both of the components below have ',
    h('strong', 'locally scoped CSS'),
    ' that ',
    h('strong', 'inherits from a common set of CSS Modules.')
  ]),
  h('p', [
    'Since ',
    h('strong', 'CSS Modules can be composed'),
    ', the resulting markup is optimised by ',
    h('b', 'reusing classes between components.')
  ]),
  ClassInheritance,

  h('hr', { className: styles.hr }),

  h('h2', { className: styles.incomplete }, 'Inheritance Overrides (INCOMPLETE)'),
  h('p', [
    'When extending classes, ',
    h('strong', 'inherited style properties can be overridden'),
    ' as you\'d expect.'
  ]),
  h('p', 'The following component extends two different classes, but provides overrides which then take precedence.'),
  InheritanceOverrides,

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

},{"./1-ScopedSelectors/ScopedSelectors":8,"./2-GlobalSelectors/GlobalSelectors":10,"./3-ClassInheritance/ClassInheritance":11,"./4-InheritanceOverrides/InheritanceOverrides":17,"./5-ScopedAnimations/ScopedAnimations":19,"./App.css":20,"hyperscript":2,"insert-css":6}],22:[function(require,module,exports){
var App = require('./components/App');

document.getElementById('content').appendChild(App);

},{"./components/App":21}]},{},[22]);
