/*! For license information please see common-Counter-Counter-stories.d16a8c5c.iframe.bundle.js.LICENSE.txt */
'use strict';
(self.webpackChunk_shopby_react_components = self.webpackChunk_shopby_react_components || []).push([
  [6538],
  {
    './common/Counter/Counter.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          CounterComponent: () => CounterComponent,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__('../../node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.function.bind.js');
      var _Counter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./common/Counter/Counter.tsx'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/react/jsx-runtime.js');
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: 'common/Counter',
        component: _Counter__WEBPACK_IMPORTED_MODULE_3__.Z,
      };
      var Template = function Template(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
          _Counter__WEBPACK_IMPORTED_MODULE_3__.Z,
          Object.assign({}, args)
        );
      };
      Template.displayName = 'Template';
      var CounterComponent = Template.bind({});
      (CounterComponent.args = {
        count: 0,
        onChangeValue: function onChangeValue(number) {
          return console.log(number + 1);
        },
      }),
        (CounterComponent.parameters = Object.assign(
          { storySource: { source: '(args) => <Counter {...args} />' } },
          CounterComponent.parameters
        ));
      var __namedExportsOrder = ['CounterComponent'];
    },
    './common/Counter/Counter.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      __webpack_require__('../../node_modules/core-js/modules/es.number.constructor.js');
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        ),
        Counter = function Counter(_ref) {
          var _ref$count = _ref.count,
            count = void 0 === _ref$count ? 0 : _ref$count,
            onChangeValue = _ref.onChangeValue,
            _ref$className = _ref.className,
            className = void 0 === _ref$className ? '' : _ref$className;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)('span', {
            className: 'counter ' + className,
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)('button', {
                className: 'counter__btn',
                onClick: function onClick() {
                  return (function decrease(value) {
                    var number = value - 1;
                    onChangeValue(number > 0 ? number : 1);
                  })(count);
                },
                children: [
                  '-',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('span', {
                    className: 'a11y',
                    children: '감소',
                  }),
                ],
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('span', {
                className: 'counter__input',
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('input', {
                  type: 'number',
                  value: count,
                  onChange: function onChange(_ref2) {
                    var currentTarget = _ref2.currentTarget;
                    return (function changeCount(value) {
                      onChangeValue(value > 0 ? value : 1);
                    })(Number(currentTarget.value));
                  },
                }),
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)('button', {
                className: 'counter__btn',
                onClick: function onClick() {
                  return (function increase(value) {
                    onChangeValue(value + 1);
                  })(count);
                },
                children: [
                  '+',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('span', {
                    className: 'a11y',
                    children: '증가',
                  }),
                ],
              }),
            ],
          });
        };
      Counter.displayName = 'Counter';
      const __WEBPACK_DEFAULT_EXPORT__ = Counter;
      try {
        (Counter.displayName = 'Counter'),
          (Counter.__docgenInfo = {
            description: '',
            displayName: 'Counter',
            props: {
              count: {
                defaultValue: { value: '0' },
                description: '',
                name: 'count',
                required: !1,
                type: { name: 'number' },
              },
              onChangeValue: {
                defaultValue: null,
                description: '',
                name: 'onChangeValue',
                required: !0,
                type: { name: '(value: number) => void' },
              },
              className: {
                defaultValue: { value: '' },
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['common/Counter/Counter.tsx#Counter'] = {
              docgenInfo: Counter.__docgenInfo,
              name: 'Counter',
              path: 'common/Counter/Counter.tsx#Counter',
            });
      } catch (__react_docgen_typescript_loader_error) {}
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
