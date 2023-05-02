/*! For license information please see common-SelectBox-SelectBox-stories.ac0d3400.iframe.bundle.js.LICENSE.txt */
'use strict';
(self.webpackChunk_shopby_react_components = self.webpackChunk_shopby_react_components || []).push([
  [2940],
  {
    './common/SelectBox/SelectBox.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Sort: () => Sort,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__('../../node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.function.bind.js');
      var _SelectBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./common/SelectBox/SelectBox.tsx'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/react/jsx-runtime.js');
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: 'common/SelectBox',
        component: _SelectBox__WEBPACK_IMPORTED_MODULE_3__.Z,
      };
      var Template = function Template(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
          _SelectBox__WEBPACK_IMPORTED_MODULE_3__.Z,
          Object.assign({}, args)
        );
      };
      Template.displayName = 'Template';
      var Default = Template.bind({});
      Default.args = {
        hasEmptyOption: !0,
        emptyOptionLabel: '선택해주세요',
        options: [
          { value: 'shopby', label: '샵바이' },
          { value: 'godo', label: '고도몰' },
        ],
      };
      var Sort = Template.bind({});
      (Sort.args = {
        hasEmptyOption: !0,
        emptyOptionLabel: '선택해주세요',
        options: [
          { value: 'shopby', label: '샵바이' },
          { value: 'godo', label: '고도몰' },
        ],
        hasSortOption: !0,
      }),
        (Default.parameters = Object.assign(
          { storySource: { source: '(args) => <SelectBox {...args} />' } },
          Default.parameters
        )),
        (Sort.parameters = Object.assign(
          { storySource: { source: '(args) => <SelectBox {...args} />' } },
          Sort.parameters
        ));
      var __namedExportsOrder = ['Default', 'Sort'];
    },
    './common/SelectBox/SelectBox.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      __webpack_require__('../../node_modules/core-js/modules/es.array.map.js');
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/react/index.js'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/react/jsx-runtime.js'),
        SelectBox = (0, react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function (_ref, ref) {
          var _ref$value = _ref.value,
            value = void 0 === _ref$value ? '' : _ref$value,
            _ref$hasEmptyOption = _ref.hasEmptyOption,
            hasEmptyOption = void 0 !== _ref$hasEmptyOption && _ref$hasEmptyOption,
            _ref$emptyOptionLabel = _ref.emptyOptionLabel,
            emptyOptionLabel = void 0 === _ref$emptyOptionLabel ? '' : _ref$emptyOptionLabel,
            options = _ref.options,
            onSelect = _ref.onSelect,
            _ref$hasSortOption = _ref.hasSortOption,
            hasSortOption = void 0 !== _ref$hasSortOption && _ref$hasSortOption,
            _ref$className = _ref.className,
            className = void 0 === _ref$className ? '' : _ref$className,
            disabled = _ref.disabled;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('span', {
            className: 'select-box ' + className + ' ' + (hasSortOption ? 'select-box--sort' : ''),
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)('select', {
              ref,
              onChange: onSelect,
              value,
              disabled,
              children: [
                hasEmptyOption &&
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('option', {
                    value: '',
                    disabled: !0,
                    children: emptyOptionLabel,
                  }),
                options &&
                  options.map(function (item) {
                    return (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('option', { value: item.value, disabled: null == item ? void 0 : item.disabled, children: item.label }, item.value);
                  }),
              ],
            }),
          });
        });
      const __WEBPACK_DEFAULT_EXPORT__ = SelectBox;
      SelectBox.displayName = 'SelectBox';
      try {
        (SelectBox.displayName = 'SelectBox'),
          (SelectBox.__docgenInfo = {
            description: '',
            displayName: 'SelectBox',
            props: {
              options: {
                defaultValue: null,
                description: '',
                name: 'options',
                required: !1,
                type: { name: 'SelectBoxOption[]' },
              },
              value: {
                defaultValue: { value: '' },
                description: '',
                name: 'value',
                required: !1,
                type: { name: 'string' },
              },
              hasEmptyOption: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'hasEmptyOption',
                required: !1,
                type: { name: 'boolean' },
              },
              emptyOptionLabel: {
                defaultValue: { value: '' },
                description: '',
                name: 'emptyOptionLabel',
                required: !1,
                type: { name: 'string' },
              },
              className: {
                defaultValue: { value: '' },
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              hasSortOption: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'hasSortOption',
                required: !1,
                type: { name: 'boolean' },
              },
              disabled: {
                defaultValue: null,
                description: '',
                name: 'disabled',
                required: !1,
                type: { name: 'boolean' },
              },
              onSelect: {
                defaultValue: null,
                description: '',
                name: 'onSelect',
                required: !1,
                type: { name: '((event: ChangeEvent<HTMLSelectElement>) => void)' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['common/SelectBox/SelectBox.tsx#SelectBox'] = {
              docgenInfo: SelectBox.__docgenInfo,
              name: 'SelectBox',
              path: 'common/SelectBox/SelectBox.tsx#SelectBox',
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
