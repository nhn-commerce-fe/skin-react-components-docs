/*! For license information please see common-ShoppingBasket-ShoppingBasket-stories.56a9c435.iframe.bundle.js.LICENSE.txt */
'use strict';
(self.webpackChunk_shopby_react_components = self.webpackChunk_shopby_react_components || []).push([
  [174],
  {
    './common/ShoppingBasket/ShoppingBasket.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => ShoppingBasket_stories,
        });
      __webpack_require__('../../node_modules/core-js/modules/es.object.assign.js');
      var jsx_runtime = __webpack_require__('../../node_modules/react/jsx-runtime.js'),
        ShoppingBasket = function ShoppingBasket(_ref) {
          var _ref$count = _ref.count,
            count = void 0 === _ref$count ? 0 : _ref$count,
            _ref$className = _ref.className,
            className = void 0 === _ref$className ? '' : _ref$className,
            onClick = _ref.onClick;
          return (0, jsx_runtime.jsxs)('div', {
            onClick,
            className: 'sc-shopping-basket-button shopping-basket ' + className,
            children: [
              (0, jsx_runtime.jsx)('span', { className: 'a11y', children: '장바구니' }),
              (0, jsx_runtime.jsx)('span', { className: 'shopping-basket__count', children: count }),
            ],
          });
        };
      ShoppingBasket.displayName = 'ShoppingBasket';
      const ShoppingBasket_ShoppingBasket = ShoppingBasket;
      try {
        (ShoppingBasket.displayName = 'ShoppingBasket'),
          (ShoppingBasket.__docgenInfo = {
            description: '',
            displayName: 'ShoppingBasket',
            props: {
              count: {
                defaultValue: { value: '0' },
                description: '',
                name: 'count',
                required: !1,
                type: { name: 'number' },
              },
              className: {
                defaultValue: { value: '' },
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: { name: 'MouseEventHandler<HTMLDivElement>' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['common/ShoppingBasket/ShoppingBasket.tsx#ShoppingBasket'] = {
              docgenInfo: ShoppingBasket.__docgenInfo,
              name: 'ShoppingBasket',
              path: 'common/ShoppingBasket/ShoppingBasket.tsx#ShoppingBasket',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const ShoppingBasket_stories = { title: 'common/ShoppingBasket', component: ShoppingBasket_ShoppingBasket };
      var Default = function Default(args) {
        return (0, jsx_runtime.jsx)(ShoppingBasket_ShoppingBasket, Object.assign({}, args));
      };
      (Default.displayName = 'Default'),
        (Default.parameters = Object.assign(
          { storySource: { source: '(args) => <ShoppingBasket {...args} />' } },
          Default.parameters
        ));
      var __namedExportsOrder = ['Default'];
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
