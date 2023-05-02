/*! For license information please see dist-esm-common-IconBtn-IconBtn-stories.f8e8334b.iframe.bundle.js.LICENSE.txt */
'use strict';
(self.webpackChunk_shopby_react_components = self.webpackChunk_shopby_react_components || []).push([
  [7474],
  {
    './dist/esm/common/IconBtn/IconBtn.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Facebook: () => Facebook,
          PicBtn: () => PicBtn,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__('../../node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.function.bind.js');
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        ),
        _IconBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./dist/esm/common/IconBtn/IconBtn.js');
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: 'common/IconBtn',
        component: _IconBtn__WEBPACK_IMPORTED_MODULE_3__.Z,
      };
      var Template = function Template(args) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            _IconBtn__WEBPACK_IMPORTED_MODULE_3__.Z,
            Object.assign({}, args)
          );
        },
        PicBtn = Template.bind({});
      PicBtn.args = { label: '찜하기', iconType: 'a-star' };
      var Facebook = Template.bind({});
      (Facebook.args = { label: 'facebook', iconType: 'facebook-black-bg', rounded: !0 }),
        (PicBtn.parameters = Object.assign(
          { storySource: { source: '(args) => _jsx(IconBtn, { ...args })' } },
          PicBtn.parameters
        )),
        (Facebook.parameters = Object.assign(
          { storySource: { source: '(args) => _jsx(IconBtn, { ...args })' } },
          Facebook.parameters
        ));
      var __namedExportsOrder = ['PicBtn', 'Facebook'];
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
    './dist/esm/common/IconBtn/IconBtn.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        ),
        _Icon_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./dist/esm/common/Icon/Icon.js');
      const __WEBPACK_DEFAULT_EXPORT__ = function IconBtn(_ref) {
        var _ref$label = _ref.label,
          label = void 0 === _ref$label ? '' : _ref$label,
          iconType = _ref.iconType,
          _ref$rounded = _ref.rounded,
          rounded = void 0 !== _ref$rounded && _ref$rounded,
          onClick = _ref.onClick,
          _ref$className = _ref.className,
          className = void 0 === _ref$className ? '' : _ref$className,
          _ref$testId = _ref.testId,
          testId = void 0 === _ref$testId ? 'icon-btn' : _ref$testId,
          _ref$disabled = _ref.disabled,
          disabled = void 0 !== _ref$disabled && _ref$disabled,
          _ref$hiddenLabel = _ref.hiddenLabel,
          hiddenLabel = void 0 === _ref$hiddenLabel || _ref$hiddenLabel;
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('button', {
          type: 'button',
          className: (rounded ? 'icon-btn--round' : '') + ' ' + (null != className ? className : ''),
          disabled,
          onClick,
          'data-testid': testId,
          children: [
            iconType &&
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__.Z, {
                name: iconType,
              }),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('span', {
              className: hiddenLabel ? 'a11y' : '',
              children: label,
            }),
          ],
        });
      };
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
