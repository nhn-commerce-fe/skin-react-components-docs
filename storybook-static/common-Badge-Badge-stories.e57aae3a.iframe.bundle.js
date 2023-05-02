/*! For license information please see common-Badge-Badge-stories.e57aae3a.iframe.bundle.js.LICENSE.txt */
'use strict';
(self.webpackChunk_shopby_react_components = self.webpackChunk_shopby_react_components || []).push([
  [3919],
  {
    './common/Badge/Badge.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Round: () => Round,
          Square: () => Square,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Badge_stories,
        });
      __webpack_require__('../../node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.function.bind.js');
      var jsx_runtime = __webpack_require__('../../node_modules/react/jsx-runtime.js'),
        Badge = function Badge(_ref) {
          var label = _ref.label,
            _ref$badgeType = _ref.badgeType,
            badgeType = void 0 === _ref$badgeType ? 'square' : _ref$badgeType,
            _ref$colorType = _ref.colorType,
            colorType = void 0 === _ref$colorType ? 'caution' : _ref$colorType,
            _ref$className = _ref.className,
            className = void 0 === _ref$className ? '' : _ref$className;
          return (0, jsx_runtime.jsx)('span', {
            className: 'badge badge--' + badgeType + ' badge--' + colorType + ' ' + className,
            children: label,
          });
        };
      Badge.displayName = 'Badge';
      const Badge_Badge = Badge;
      try {
        (Badge.displayName = 'Badge'),
          (Badge.__docgenInfo = {
            description: '',
            displayName: 'Badge',
            props: {
              label: { defaultValue: null, description: '', name: 'label', required: !0, type: { name: 'string' } },
              badgeType: {
                defaultValue: { value: 'square' },
                description: '',
                name: 'badgeType',
                required: !1,
                type: { name: 'enum', value: [{ value: '"square"' }, { value: '"round"' }] },
              },
              colorType: {
                defaultValue: { value: 'caution' },
                description: '',
                name: 'colorType',
                required: !1,
                type: { name: 'enum', value: [{ value: '"caution"' }, { value: '"primary"' }, { value: '"line"' }] },
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
            (STORYBOOK_REACT_CLASSES['common/Badge/Badge.tsx#Badge'] = {
              docgenInfo: Badge.__docgenInfo,
              name: 'Badge',
              path: 'common/Badge/Badge.tsx#Badge',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const Badge_stories = { title: 'common/Badge', component: Badge_Badge };
      var Template = function Template(args) {
        return (0, jsx_runtime.jsx)(Badge_Badge, Object.assign({}, args));
      };
      Template.displayName = 'Template';
      var Square = Template.bind({});
      Square.args = { label: '1', badgeType: 'square', colorType: 'caution' };
      var Round = Template.bind({});
      (Round.args = { label: '상품태그', badgeType: 'round', colorType: 'line' }),
        (Square.parameters = Object.assign(
          { storySource: { source: '(args) => <Badge {...args} />' } },
          Square.parameters
        )),
        (Round.parameters = Object.assign(
          { storySource: { source: '(args) => <Badge {...args} />' } },
          Round.parameters
        ));
      var __namedExportsOrder = ['Square', 'Round'];
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
