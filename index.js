(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {"logo":"_src_components_0_Logo_Logo__logo"}
},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Logo = require('./Logo.css');

var _Logo2 = _interopRequireDefault(_Logo);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Logo = function (_Component) {
  _inherits(Logo, _Component);

  function Logo() {
    _classCallCheck(this, Logo);

    return _possibleConstructorReturn(this, (Logo.__proto__ || Object.getPrototypeOf(Logo)).apply(this, arguments));
  }

  _createClass(Logo, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: _Logo2.default.logo });
    }
  }]);

  return Logo;
}(_react.Component);

exports.default = Logo;
;

},{"./Logo.css":1,"react":"react"}],3:[function(require,module,exports){
module.exports = {"niceGray":"#777","root":"_src_components_1_ScopedSelectors_ScopedSelectors__root","text":"_src_components_1_ScopedSelectors_ScopedSelectors__text"}
},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ScopedSelectors = require('./ScopedSelectors.css');

var _ScopedSelectors2 = _interopRequireDefault(_ScopedSelectors);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScopedSelectors = function (_Component) {
  _inherits(ScopedSelectors, _Component);

  function ScopedSelectors() {
    _classCallCheck(this, ScopedSelectors);

    return _possibleConstructorReturn(this, (ScopedSelectors.__proto__ || Object.getPrototypeOf(ScopedSelectors)).apply(this, arguments));
  }

  _createClass(ScopedSelectors, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _ScopedSelectors2.default.root },
        _react2.default.createElement(
          'p',
          { className: _ScopedSelectors2.default.text },
          'Scoped Selectors'
        )
      );
    }
  }]);

  return ScopedSelectors;
}(_react.Component);

exports.default = ScopedSelectors;
;

},{"./ScopedSelectors.css":3,"react":"react"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ScopedSelectors = require('./ScopedSelectors');

var _ScopedSelectors2 = _interopRequireDefault(_ScopedSelectors);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Snippet = require('../shared/Snippet/Snippet');

var _Snippet2 = _interopRequireDefault(_Snippet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var js = "import styles from './ScopedSelectors.css';\n\nimport React, { Component } from 'react';\n\nexport default class ScopedSelectors extends Component {\n\n  render() {\n    return (\n      <div className={ styles.root }>\n        <p className={ styles.text }>Scoped Selectors</p>\n      </div>\n    );\n  }\n\n};\n";
var css = "@value niceGray: #777;\n\n.root {\n  border-width: 2px;\n  border-style: solid;\n  border-color: niceGray;\n  padding: 0 20px;\n  margin: 0 6px;\n  max-width: 400px;\n}\n\n.text {\n  color: niceGray;\n  font-size: 24px;\n  font-family: helvetica, arial, sans-serif;\n  font-weight: 600;\n}\n";

var ScopedSelectorsDemo = function (_Component) {
  _inherits(ScopedSelectorsDemo, _Component);

  function ScopedSelectorsDemo() {
    _classCallCheck(this, ScopedSelectorsDemo);

    return _possibleConstructorReturn(this, (ScopedSelectorsDemo.__proto__ || Object.getPrototypeOf(ScopedSelectorsDemo)).apply(this, arguments));
  }

  _createClass(ScopedSelectorsDemo, [{
    key: 'render',
    value: function render() {
      var files = [{ name: 'ScopedSelectors.js', source: js }, { name: 'ScopedSelectors.css', source: css }];

      return _react2.default.createElement(
        _Snippet2.default,
        { files: files },
        _react2.default.createElement(_ScopedSelectors2.default, null)
      );
    }
  }]);

  return ScopedSelectorsDemo;
}(_react.Component);

exports.default = ScopedSelectorsDemo;
;

},{"../shared/Snippet/Snippet":24,"./ScopedSelectors":4,"react":"react"}],6:[function(require,module,exports){
module.exports = {"root":"_src_components_2_GlobalSelectors_GlobalSelectors__root"}
},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GlobalSelectors = require('./GlobalSelectors.css');

var _GlobalSelectors2 = _interopRequireDefault(_GlobalSelectors);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GlobalSelectors = function (_Component) {
  _inherits(GlobalSelectors, _Component);

  function GlobalSelectors() {
    _classCallCheck(this, GlobalSelectors);

    return _possibleConstructorReturn(this, (GlobalSelectors.__proto__ || Object.getPrototypeOf(GlobalSelectors)).apply(this, arguments));
  }

  _createClass(GlobalSelectors, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _GlobalSelectors2.default.root },
        _react2.default.createElement(
          'p',
          null,
          'Global Selectors'
        )
      );
    }
  }]);

  return GlobalSelectors;
}(_react.Component);

exports.default = GlobalSelectors;
;

},{"./GlobalSelectors.css":6,"react":"react"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GlobalSelectors = require('./GlobalSelectors');

var _GlobalSelectors2 = _interopRequireDefault(_GlobalSelectors);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Snippet = require('../shared/Snippet/Snippet');

var _Snippet2 = _interopRequireDefault(_Snippet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var js = "import styles from './GlobalSelectors.css';\n\nimport React, { Component } from 'react';\n\nexport default class GlobalSelectors extends Component {\n\n  render() {\n    return (\n      <div className={ styles.root }>\n        <p>Global Selectors</p>\n      </div>\n    );\n  }\n\n};\n";
var css = ".root {\n  border-width: 2px;\n  border-style: solid;\n  border-color: brown;\n  padding: 0 20px;\n  margin: 0 6px;\n  max-width: 400px;\n}\n\n.root :global p {\n  color: brown;\n  font-size: 24px;\n  font-family: helvetica, arial, sans-serif;\n  font-weight: 600;\n}\n";

var GlobalSelectorsDemo = function (_Component) {
  _inherits(GlobalSelectorsDemo, _Component);

  function GlobalSelectorsDemo() {
    _classCallCheck(this, GlobalSelectorsDemo);

    return _possibleConstructorReturn(this, (GlobalSelectorsDemo.__proto__ || Object.getPrototypeOf(GlobalSelectorsDemo)).apply(this, arguments));
  }

  _createClass(GlobalSelectorsDemo, [{
    key: 'render',
    value: function render() {
      var files = [{ name: 'GlobalSelectors.js', source: js }, { name: 'GlobalSelectors.css', source: css }];

      return _react2.default.createElement(
        _Snippet2.default,
        { files: files },
        _react2.default.createElement(_GlobalSelectors2.default, null)
      );
    }
  }]);

  return GlobalSelectorsDemo;
}(_react.Component);

exports.default = GlobalSelectorsDemo;
;

},{"../shared/Snippet/Snippet":24,"./GlobalSelectors":7,"react":"react"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _StyleVariantA = require('./StyleVariantA/StyleVariantA');

var _StyleVariantA2 = _interopRequireDefault(_StyleVariantA);

var _StyleVariantB = require('./StyleVariantB/StyleVariantB');

var _StyleVariantB2 = _interopRequireDefault(_StyleVariantB);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClassComposition = function (_Component) {
  _inherits(ClassComposition, _Component);

  function ClassComposition() {
    _classCallCheck(this, ClassComposition);

    return _possibleConstructorReturn(this, (ClassComposition.__proto__ || Object.getPrototypeOf(ClassComposition)).apply(this, arguments));
  }

  _createClass(ClassComposition, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_StyleVariantA2.default, null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(_StyleVariantB2.default, null)
      );
    }
  }]);

  return ClassComposition;
}(_react.Component);

exports.default = ClassComposition;
;

},{"./StyleVariantA/StyleVariantA":12,"./StyleVariantB/StyleVariantB":14,"react":"react"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ClassComposition = require('./ClassComposition');

var _ClassComposition2 = _interopRequireDefault(_ClassComposition);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Snippet = require('../shared/Snippet/Snippet');

var _Snippet2 = _interopRequireDefault(_Snippet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var js = "import styles from './StyleVariantA.css';\n\nimport React, { Component } from 'react';\n\nexport default class StyleVariantA extends Component {\n\n  render() {\n    return (\n      <div className={styles.root}>\n        <p className={styles.text}>Style Variant A</p>\n      </div>\n    );\n  }\n\n};\n";
var css = ".root {\n  composes: box from \"../../shared/styles/layout.css\";\n  border-color: red;\n}\n\n.text {\n  composes: heading from \"../../shared/styles/typography.css\";\n  color: red;\n}\n";
var layoutCss = ".box {\n  border-width: 2px;\n  border-style: solid;\n  padding: 0 20px;\n  margin: 0 6px;\n  max-width: 400px;\n}\n";
var typographyCss = ".heading {\n  font-size: 24px;\n  font-family: helvetica, arial, sans-serif;\n  font-weight: 600;\n}\n";

var ClassCompositionDemo = function (_Component) {
  _inherits(ClassCompositionDemo, _Component);

  function ClassCompositionDemo() {
    _classCallCheck(this, ClassCompositionDemo);

    return _possibleConstructorReturn(this, (ClassCompositionDemo.__proto__ || Object.getPrototypeOf(ClassCompositionDemo)).apply(this, arguments));
  }

  _createClass(ClassCompositionDemo, [{
    key: 'render',
    value: function render() {
      var files = [{ name: 'StyleVariantA.js', source: js }, { name: 'StyleVariantA.css', source: css }, { name: 'shared/styles/layout.css', source: layoutCss }, { name: 'shared/styles/typography.css', source: typographyCss }];

      return _react2.default.createElement(
        _Snippet2.default,
        { files: files },
        _react2.default.createElement(_ClassComposition2.default, null)
      );
    }
  }]);

  return ClassCompositionDemo;
}(_react.Component);

exports.default = ClassCompositionDemo;
;

},{"../shared/Snippet/Snippet":24,"./ClassComposition":9,"react":"react"}],11:[function(require,module,exports){
require("/home/rof/src/github.com/css-modules/browserify-demo/src/components/shared/styles/layout.css")
require("/home/rof/src/github.com/css-modules/browserify-demo/src/components/shared/styles/typography.css")
module.exports = {"root":"_src_components_3_ClassComposition_StyleVariantA_StyleVariantA__root _src_components_shared_styles_layout__box","text":"_src_components_3_ClassComposition_StyleVariantA_StyleVariantA__text _src_components_shared_styles_typography__heading"}
},{"/home/rof/src/github.com/css-modules/browserify-demo/src/components/shared/styles/layout.css":27,"/home/rof/src/github.com/css-modules/browserify-demo/src/components/shared/styles/typography.css":28}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _StyleVariantA = require('./StyleVariantA.css');

var _StyleVariantA2 = _interopRequireDefault(_StyleVariantA);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StyleVariantA = function (_Component) {
  _inherits(StyleVariantA, _Component);

  function StyleVariantA() {
    _classCallCheck(this, StyleVariantA);

    return _possibleConstructorReturn(this, (StyleVariantA.__proto__ || Object.getPrototypeOf(StyleVariantA)).apply(this, arguments));
  }

  _createClass(StyleVariantA, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _StyleVariantA2.default.root },
        _react2.default.createElement(
          'p',
          { className: _StyleVariantA2.default.text },
          'Style Variant A'
        )
      );
    }
  }]);

  return StyleVariantA;
}(_react.Component);

exports.default = StyleVariantA;
;

},{"./StyleVariantA.css":11,"react":"react"}],13:[function(require,module,exports){
require("/home/rof/src/github.com/css-modules/browserify-demo/src/components/shared/styles/layout.css")
require("/home/rof/src/github.com/css-modules/browserify-demo/src/components/shared/styles/typography.css")
module.exports = {"root":"_src_components_3_ClassComposition_StyleVariantB_StyleVariantB__root _src_components_shared_styles_layout__box","text":"_src_components_3_ClassComposition_StyleVariantB_StyleVariantB__text _src_components_shared_styles_typography__heading"}
},{"/home/rof/src/github.com/css-modules/browserify-demo/src/components/shared/styles/layout.css":27,"/home/rof/src/github.com/css-modules/browserify-demo/src/components/shared/styles/typography.css":28}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _StyleVariantB = require('./StyleVariantB.css');

var _StyleVariantB2 = _interopRequireDefault(_StyleVariantB);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StyleVariantB = function (_Component) {
  _inherits(StyleVariantB, _Component);

  function StyleVariantB() {
    _classCallCheck(this, StyleVariantB);

    return _possibleConstructorReturn(this, (StyleVariantB.__proto__ || Object.getPrototypeOf(StyleVariantB)).apply(this, arguments));
  }

  _createClass(StyleVariantB, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _StyleVariantB2.default.root },
        _react2.default.createElement(
          'p',
          { className: _StyleVariantB2.default.text },
          'Style Variant B'
        )
      );
    }
  }]);

  return StyleVariantB;
}(_react.Component);

exports.default = StyleVariantB;
;

},{"./StyleVariantB.css":13,"react":"react"}],15:[function(require,module,exports){
require("/home/rof/src/github.com/css-modules/browserify-demo/src/components/shared/styles/layout.css")
require("/home/rof/src/github.com/css-modules/browserify-demo/src/components/shared/styles/typography.css")
module.exports = {"root":"_src_components_4_CompositionOverrides_CompositionOverrides__root _src_components_shared_styles_layout__box","text":"_src_components_4_CompositionOverrides_CompositionOverrides__text _src_components_shared_styles_typography__heading"}
},{"/home/rof/src/github.com/css-modules/browserify-demo/src/components/shared/styles/layout.css":27,"/home/rof/src/github.com/css-modules/browserify-demo/src/components/shared/styles/typography.css":28}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CompositionOverrides = require('./CompositionOverrides.css');

var _CompositionOverrides2 = _interopRequireDefault(_CompositionOverrides);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CompositionOverrides = function (_Component) {
  _inherits(CompositionOverrides, _Component);

  function CompositionOverrides() {
    _classCallCheck(this, CompositionOverrides);

    return _possibleConstructorReturn(this, (CompositionOverrides.__proto__ || Object.getPrototypeOf(CompositionOverrides)).apply(this, arguments));
  }

  _createClass(CompositionOverrides, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _CompositionOverrides2.default.root },
        _react2.default.createElement(
          'p',
          { className: _CompositionOverrides2.default.text },
          'Class Composition with Overrides'
        )
      );
    }
  }]);

  return CompositionOverrides;
}(_react.Component);

exports.default = CompositionOverrides;
;

},{"./CompositionOverrides.css":15,"react":"react"}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CompositionOverrides = require('./CompositionOverrides');

var _CompositionOverrides2 = _interopRequireDefault(_CompositionOverrides);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Snippet = require('../shared/Snippet/Snippet');

var _Snippet2 = _interopRequireDefault(_Snippet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var js = "import styles from './CompositionOverrides.css';\n\nimport React, { Component } from 'react';\n\nexport default class CompositionOverrides extends Component {\n\n  render() {\n    return (\n      <div className={styles.root}>\n        <p className={styles.text}>Class Composition with Overrides</p>\n      </div>\n    );\n  }\n\n};\n";
var css = ".root {\n  composes: box from \"../shared/styles/layout.css\";\n  border-style: dotted;\n  border-color: green;\n}\n\n.text {\n  composes: heading from \"../shared/styles/typography.css\";\n  font-weight: 200;\n  color: green;\n}\n";
var layoutCss = ".box {\n  border-width: 2px;\n  border-style: solid;\n  padding: 0 20px;\n  margin: 0 6px;\n  max-width: 400px;\n}\n";
var typographyCss = ".heading {\n  font-size: 24px;\n  font-family: helvetica, arial, sans-serif;\n  font-weight: 600;\n}\n";

var CompositionOverridesDemo = function (_Component) {
  _inherits(CompositionOverridesDemo, _Component);

  function CompositionOverridesDemo() {
    _classCallCheck(this, CompositionOverridesDemo);

    return _possibleConstructorReturn(this, (CompositionOverridesDemo.__proto__ || Object.getPrototypeOf(CompositionOverridesDemo)).apply(this, arguments));
  }

  _createClass(CompositionOverridesDemo, [{
    key: 'render',
    value: function render() {
      var files = [{ name: 'CompositionOverrides.js', source: js }, { name: 'CompositionOverrides.css', source: css }, { name: 'shared/styles/layout.css', source: layoutCss }, { name: 'shared/styles/typography.css', source: typographyCss }];

      return _react2.default.createElement(
        _Snippet2.default,
        { files: files },
        _react2.default.createElement(_CompositionOverrides2.default, null)
      );
    }
  }]);

  return CompositionOverridesDemo;
}(_react.Component);

exports.default = CompositionOverridesDemo;
;

},{"../shared/Snippet/Snippet":24,"./CompositionOverrides":16,"react":"react"}],18:[function(require,module,exports){
require("/home/rof/src/github.com/css-modules/browserify-demo/src/components/shared/styles/animation-values.css")
require("/home/rof/src/github.com/css-modules/browserify-demo/src/components/shared/styles/animations.css")
module.exports = {"root":"_src_components_5_ScopedAnimations_ScopedAnimations__root","ball":"_src_components_5_ScopedAnimations_ScopedAnimations__ball _src_components_shared_styles_animations__bounce"}
},{"/home/rof/src/github.com/css-modules/browserify-demo/src/components/shared/styles/animation-values.css":25,"/home/rof/src/github.com/css-modules/browserify-demo/src/components/shared/styles/animations.css":26}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ScopedAnimations = require('./ScopedAnimations.css');

var _ScopedAnimations2 = _interopRequireDefault(_ScopedAnimations);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScopedAnimations = function (_Component) {
  _inherits(ScopedAnimations, _Component);

  function ScopedAnimations() {
    _classCallCheck(this, ScopedAnimations);

    return _possibleConstructorReturn(this, (ScopedAnimations.__proto__ || Object.getPrototypeOf(ScopedAnimations)).apply(this, arguments));
  }

  _createClass(ScopedAnimations, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _ScopedAnimations2.default.root },
        _react2.default.createElement('div', { className: _ScopedAnimations2.default.ball })
      );
    }
  }]);

  return ScopedAnimations;
}(_react.Component);

exports.default = ScopedAnimations;
;

},{"./ScopedAnimations.css":18,"react":"react"}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ScopedAnimations = require('./ScopedAnimations');

var _ScopedAnimations2 = _interopRequireDefault(_ScopedAnimations);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Snippet = require('../shared/Snippet/Snippet');

var _Snippet2 = _interopRequireDefault(_Snippet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var js = "import styles from './ScopedAnimations.css';\n\nimport React, { Component } from 'react';\n\nexport default class ScopedAnimations extends Component {\n\n  render() {\n    return (\n      <div className={styles.root}>\n        <div className={styles.ball} />\n      </div>\n    );\n  }\n\n};\n";
var css = ".root {\n  padding: 20px 10px;\n}\n\n.ball {\n  composes: bounce from \"../shared/styles/animations.css\";\n  width: 40px;\n  height: 40px;\n  border-radius: 20px;\n  background: rebeccapurple;\n}\n";
var animationsCss = "@value bounceAmount: -20px;\n@value duration as bounceDuration from \"./animation-values.css\";\n\n@keyframes bounce {\n  33% { transform: translateY(bounceAmount); }\n  66% { transform: translateY(0px); }\n}\n\n.bounce {\n  animation: bounce bounceDuration infinite ease-in-out;\n}\n";

var ScopedAnimationsDemo = function (_Component) {
  _inherits(ScopedAnimationsDemo, _Component);

  function ScopedAnimationsDemo() {
    _classCallCheck(this, ScopedAnimationsDemo);

    return _possibleConstructorReturn(this, (ScopedAnimationsDemo.__proto__ || Object.getPrototypeOf(ScopedAnimationsDemo)).apply(this, arguments));
  }

  _createClass(ScopedAnimationsDemo, [{
    key: 'render',
    value: function render() {
      var files = [{ name: 'ScopedAnimations.js', source: js }, { name: 'ScopedAnimations.css', source: css }, { name: 'shared/styles/animations.css', source: animationsCss }];

      return _react2.default.createElement(
        _Snippet2.default,
        { files: files },
        _react2.default.createElement(_ScopedAnimations2.default, null)
      );
    }
  }]);

  return ScopedAnimationsDemo;
}(_react.Component);

exports.default = ScopedAnimationsDemo;
;

},{"../shared/Snippet/Snippet":24,"./ScopedAnimations":19,"react":"react"}],21:[function(require,module,exports){
module.exports = {"app":"_src_components_App__app","hr":"_src_components_App__hr"}
},{}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _App = require('./App.css');

var _App2 = _interopRequireDefault(_App);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Logo = require('./0-Logo/Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _ScopedSelectorsDemo = require('./1-ScopedSelectors/ScopedSelectorsDemo');

var _ScopedSelectorsDemo2 = _interopRequireDefault(_ScopedSelectorsDemo);

var _GlobalSelectorsDemo = require('./2-GlobalSelectors/GlobalSelectorsDemo');

var _GlobalSelectorsDemo2 = _interopRequireDefault(_GlobalSelectorsDemo);

var _ClassCompositionDemo = require('./3-ClassComposition/ClassCompositionDemo');

var _ClassCompositionDemo2 = _interopRequireDefault(_ClassCompositionDemo);

var _CompositionOverridesDemo = require('./4-CompositionOverrides/CompositionOverridesDemo');

var _CompositionOverridesDemo2 = _interopRequireDefault(_CompositionOverridesDemo);

var _ScopedAnimationsDemo = require('./5-ScopedAnimations/ScopedAnimationsDemo');

var _ScopedAnimationsDemo2 = _interopRequireDefault(_ScopedAnimationsDemo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _App2.default.app },
        _react2.default.createElement(_Logo2.default, null),
        _react2.default.createElement(
          'h1',
          null,
          'CSS Modules Browserify Demo'
        ),
        _react2.default.createElement('hr', { className: _App2.default.hr }),
        _react2.default.createElement(
          'h2',
          null,
          'Scoped Selectors'
        ),
        _react2.default.createElement(
          'p',
          null,
          'In CSS Modules, selectors are scoped by default.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'The following component uses two classes, ',
          _react2.default.createElement(
            'strong',
            null,
            '.root'
          ),
          ' and ',
          _react2.default.createElement(
            'strong',
            null,
            '.text'
          ),
          ', both of which would typically be too vague in a larger project.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'CSS Module semantics ensure that these ',
          _react2.default.createElement(
            'strong',
            null,
            'classes are locally scoped'
          ),
          ' to the component and don\'t collide with other classes in the global scope.'
        ),
        _react2.default.createElement(_ScopedSelectorsDemo2.default, null),
        _react2.default.createElement('hr', { className: _App2.default.hr }),
        _react2.default.createElement(
          'h2',
          null,
          'Global Selectors'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Although they should be used as sparingly as possible, ',
          _react2.default.createElement(
            'strong',
            null,
            'global selectors are still available when required.'
          )
        ),
        _react2.default.createElement(
          'p',
          null,
          'The following component styles all ',
          _react2.default.createElement(
            'strong',
            null,
            '<p>'
          ),
          ' tags nested inside it.'
        ),
        _react2.default.createElement(_GlobalSelectorsDemo2.default, null),
        _react2.default.createElement('hr', { className: _App2.default.hr }),
        _react2.default.createElement(
          'h2',
          null,
          'Class Composition'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Both of the components below have ',
          _react2.default.createElement(
            'strong',
            null,
            'locally scoped CSS'
          ),
          ' that is ',
          _react2.default.createElement(
            'strong',
            null,
            'composed from a common set of CSS Modules.'
          )
        ),
        _react2.default.createElement(
          'p',
          null,
          'Since ',
          _react2.default.createElement(
            'strong',
            null,
            'CSS Modules can be composed'
          ),
          ', the resulting markup is optimised by ',
          _react2.default.createElement(
            'b',
            null,
            'reusing classes between components'
          ),
          '.'
        ),
        _react2.default.createElement(_ClassCompositionDemo2.default, null),
        _react2.default.createElement('hr', { className: _App2.default.hr }),
        _react2.default.createElement(
          'h2',
          null,
          'Composition Overrides'
        ),
        _react2.default.createElement(
          'p',
          null,
          'When composing classes, ',
          _react2.default.createElement(
            'strong',
            null,
            'inherited style properties can be overridden'
          ),
          ' as you\'d expect.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'The following component composes two different classes, but provides overrides which then take precedence.'
        ),
        _react2.default.createElement(_CompositionOverridesDemo2.default, null),
        _react2.default.createElement('hr', { className: _App2.default.hr }),
        _react2.default.createElement(
          'h2',
          null,
          'Scoped Animations'
        ),
        _react2.default.createElement(
          'p',
          null,
          'CSS Modules even provide ',
          _react2.default.createElement(
            'strong',
            null,
            'locally scoped animations'
          ),
          ', which are typically defined in the global scope.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'The animation\'s keyframes are private to the animations module, only exposed publicly via a class which this component inherits from.'
        ),
        _react2.default.createElement(_ScopedAnimationsDemo2.default, null)
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;
;

},{"./0-Logo/Logo":2,"./1-ScopedSelectors/ScopedSelectorsDemo":5,"./2-GlobalSelectors/GlobalSelectorsDemo":8,"./3-ClassComposition/ClassCompositionDemo":10,"./4-CompositionOverrides/CompositionOverridesDemo":17,"./5-ScopedAnimations/ScopedAnimationsDemo":20,"./App.css":21,"react":"react"}],23:[function(require,module,exports){
module.exports = {"root":"_src_components_shared_Snippet_Snippet__root","output":"_src_components_shared_Snippet_Snippet__output","outputContent":"_src_components_shared_Snippet_Snippet__outputContent","file":"_src_components_shared_Snippet_Snippet__file","fileName":"_src_components_shared_Snippet_Snippet__fileName","pre":"_src_components_shared_Snippet_Snippet__pre"}
},{}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Snippet = require('./Snippet.css');

var _Snippet2 = _interopRequireDefault(_Snippet);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Snippet = function (_Component) {
  _inherits(Snippet, _Component);

  function Snippet() {
    _classCallCheck(this, Snippet);

    return _possibleConstructorReturn(this, (Snippet.__proto__ || Object.getPrototypeOf(Snippet)).apply(this, arguments));
  }

  _createClass(Snippet, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _Snippet2.default.root },
        _react2.default.createElement(
          'div',
          { className: _Snippet2.default.output },
          _react2.default.createElement(
            'div',
            { className: _Snippet2.default.fileName },
            'Output'
          ),
          _react2.default.createElement(
            'div',
            { className: _Snippet2.default.outputContent },
            this.props.children
          )
        ),
        this.props.files.map(function (file) {
          return _react2.default.createElement(
            'div',
            { key: file.name, className: _Snippet2.default.file },
            _react2.default.createElement(
              'div',
              { className: _Snippet2.default.fileName },
              file.name
            ),
            _react2.default.createElement(
              'pre',
              { className: _Snippet2.default.pre },
              file.source
            )
          );
        })
      );
    }
  }]);

  return Snippet;
}(_react.Component);

exports.default = Snippet;
;

},{"./Snippet.css":23,"react":"react"}],25:[function(require,module,exports){
module.exports = {"duration":"0.6s"}
},{}],26:[function(require,module,exports){
require("/home/rof/src/github.com/css-modules/browserify-demo/src/components/shared/styles/animation-values.css")
module.exports = {"bounceAmount":"-20px","bounceDuration":"0.6s","bounce":"_src_components_shared_styles_animations__bounce"}
},{"/home/rof/src/github.com/css-modules/browserify-demo/src/components/shared/styles/animation-values.css":25}],27:[function(require,module,exports){
module.exports = {"box":"_src_components_shared_styles_layout__box"}
},{}],28:[function(require,module,exports){
module.exports = {"heading":"_src_components_shared_styles_typography__heading"}
},{}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof document !== 'undefined') {
  _reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('outlet'));
}

exports.default = _App2.default;

},{"./components/App":22,"react":"react","react-dom":"react-dom"}]},{},[29]);
