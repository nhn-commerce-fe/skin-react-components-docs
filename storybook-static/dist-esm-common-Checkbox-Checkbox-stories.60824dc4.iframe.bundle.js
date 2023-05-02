/*! For license information please see dist-esm-common-Checkbox-Checkbox-stories.60824dc4.iframe.bundle.js.LICENSE.txt */
'use strict';
(self.webpackChunk_shopby_react_components = self.webpackChunk_shopby_react_components || []).push([
  [7846],
  {
    './dist/esm/common/Checkbox/Checkbox.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Checkbox_stories,
        });
      __webpack_require__('../../node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.function.bind.js');
      var jsx_runtime = __webpack_require__('../../node_modules/react/jsx-runtime.js'),
        react =
          (__webpack_require__('../../node_modules/core-js/modules/es.object.keys.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.array.index-of.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.symbol.js'),
          __webpack_require__('../../node_modules/react/index.js')),
        Icon = __webpack_require__('./dist/esm/common/Icon/Icon.js'),
        _excluded = ['label', 'className', 'isRounded', 'children'];
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]));
        }
        return target;
      }
      var Checkbox = (0, react.forwardRef)(function (_ref, ref) {
        var label = _ref.label,
          _ref$className = _ref.className,
          className = void 0 === _ref$className ? '' : _ref$className,
          _ref$isRounded = _ref.isRounded,
          isRounded = void 0 !== _ref$isRounded && _ref$isRounded,
          children = _ref.children,
          props = _objectWithoutProperties(_ref, _excluded);
        return (0,
        jsx_runtime.jsxs)('label', { className: 'check-radio ' + (isRounded ? 'check-radio--rounded' : '') + ' ' + className, children: [(0, jsx_runtime.jsx)('input', Object.assign({ ref, type: 'checkbox' }, props)), (0, jsx_runtime.jsx)('span', { className: 'check-radio__ico', children: (0, jsx_runtime.jsx)(Icon.Z, { name: 'check-white' }) }), label ? (0, jsx_runtime.jsx)('span', { className: 'check-radio__label', children: label }) : children] });
      });
      (Checkbox.displayName = 'Checkbox'),
        (Checkbox.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Checkbox',
          props: {
            className: { defaultValue: { value: "''", computed: !1 }, required: !1 },
            isRounded: { defaultValue: { value: 'false', computed: !1 }, required: !1 },
          },
        });
      const Checkbox_Checkbox = Checkbox;
      'undefined' != typeof STORYBOOK_REACT_CLASSES &&
        (STORYBOOK_REACT_CLASSES['dist/esm/common/Checkbox/Checkbox.js'] = {
          name: 'Checkbox',
          docgenInfo: Checkbox.__docgenInfo,
          path: 'dist/esm/common/Checkbox/Checkbox.js',
        });
      const Checkbox_stories = { title: 'common/Checkbox', component: Checkbox_Checkbox };
      var Default = function Template(args) {
        return (0, jsx_runtime.jsx)(Checkbox_Checkbox, Object.assign({}, args));
      }.bind({});
      (Default.args = { label: 'checkbox', className: 'check-radio--rounded' }),
        (Default.parameters = Object.assign(
          { storySource: { source: '(args) => _jsx(Checkbox, { ...args })' } },
          Default.parameters
        ));
      var __namedExportsOrder = ['Default'];
    },
    './dist/esm/common/Icon/Icon.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      __webpack_require__('../../node_modules/core-js/modules/es.function.name.js');
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        '../../node_modules/react/jsx-runtime.js'
      );
      const __WEBPACK_DEFAULT_EXPORT__ = function Icon(_ref) {
        var _ref$className = _ref.className,
          className = void 0 === _ref$className ? '' : _ref$className,
          name = _ref.name;
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('span', {
          className: 'ico ico--' + name + ' ' + className,
        });
      };
    },
    '../../node_modules/core-js/modules/es.array.index-of.js': (
      __unused_webpack_module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var $ = __webpack_require__('../../node_modules/core-js/internals/export.js'),
        uncurryThis = __webpack_require__('../../node_modules/core-js/internals/function-uncurry-this-clause.js'),
        $indexOf = __webpack_require__('../../node_modules/core-js/internals/array-includes.js').indexOf,
        arrayMethodIsStrict = __webpack_require__('../../node_modules/core-js/internals/array-method-is-strict.js'),
        nativeIndexOf = uncurryThis([].indexOf),
        NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
      $(
        { target: 'Array', proto: !0, forced: NEGATIVE_ZERO || !arrayMethodIsStrict('indexOf') },
        {
          indexOf: function indexOf(searchElement) {
            var fromIndex = arguments.length > 1 ? arguments[1] : void 0;
            return NEGATIVE_ZERO
              ? nativeIndexOf(this, searchElement, fromIndex) || 0
              : $indexOf(this, searchElement, fromIndex);
          },
        }
      );
    },
    '../../node_modules/react/cjs/react-jsx-runtime.production.min.js': (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      var f = __webpack_require__('../../node_modules/react/index.js'),
        k = Symbol.for('react.element'),
        l = Symbol.for('react.fragment'),
        m = Object.prototype.hasOwnProperty,
        n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        p = { key: !0, ref: !0, __self: !0, __source: !0 };
      function q(c, a, g) {
        var b,
          d = {},
          e = null,
          h = null;
        for (b in (void 0 !== g && (e = '' + g),
        void 0 !== a.key && (e = '' + a.key),
        void 0 !== a.ref && (h = a.ref),
        a))
          m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
        if (c && c.defaultProps) for (b in (a = c.defaultProps)) void 0 === d[b] && (d[b] = a[b]);
        return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
      }
      (exports.Fragment = l), (exports.jsx = q), (exports.jsxs = q);
    },
    '../../node_modules/react/jsx-runtime.js': (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__('../../node_modules/react/cjs/react-jsx-runtime.production.min.js');
    },
  },
]);
