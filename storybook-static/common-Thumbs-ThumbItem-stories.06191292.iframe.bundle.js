'use strict';
(self.webpackChunk_shopby_react_components = self.webpackChunk_shopby_react_components || []).push([
  [1815],
  {
    './common/Thumbs/ThumbItem.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          ThumbItemComp: () => ThumbItemComp,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__('../../node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.function.bind.js');
      var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          '../../node_modules/react-router-dom/dist/index.js'
        ),
        _ThumbItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./common/Thumbs/ThumbItem.tsx'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/react/jsx-runtime.js');
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: 'components/ThumbItem',
        component: _ThumbItem__WEBPACK_IMPORTED_MODULE_3__.Z,
      };
      var Template = function Template(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
          react_router_dom__WEBPACK_IMPORTED_MODULE_4__.VK,
          {
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              _ThumbItem__WEBPACK_IMPORTED_MODULE_3__.Z,
              Object.assign({}, args)
            ),
          }
        );
      };
      Template.displayName = 'Template';
      var ThumbItemComp = Template.bind({});
      (ThumbItemComp.args = {
        src: '',
        href: '',
        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', { children: 'hello' }),
      }),
        (ThumbItemComp.parameters = Object.assign(
          { storySource: { source: '(args) => (\n  <Router>\n    <ThumbItem {...args} />\n  </Router>\n)' } },
          ThumbItemComp.parameters
        ));
      var __namedExportsOrder = ['ThumbItemComp'];
    },
    './common/Thumbs/ThumbItem.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _shopby_shared_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../shared/dist/esm/utils/index.js'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/react/jsx-runtime.js'),
        ThumbItem = function ThumbItem(_ref) {
          var href = _ref.href,
            _ref$HoverViewCompone = _ref.HoverViewComponent,
            HoverViewComponent =
              void 0 === _ref$HoverViewCompone
                ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                    {}
                  )
                : _ref$HoverViewCompone,
            _ref$resize = _ref.resize,
            resize = void 0 === _ref$resize ? '' : _ref$resize,
            adult = _ref.adult,
            src = _ref.src,
            children = _ref.children,
            _ref$className = _ref.className,
            className = void 0 === _ref$className ? '' : _ref$className,
            _ref$alt = _ref.alt,
            alt = void 0 === _ref$alt ? '' : _ref$alt;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)('div', {
            className: 'thumb-item ' + className,
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)('div', {
                className: 'thumb-item__media',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)('a', {
                    href,
                    className: 'thumb-item__img-box',
                    children: [
                      adult &&
                        !(0, _shopby_shared_utils__WEBPACK_IMPORTED_MODULE_0__.kJ)() &&
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('span', {
                          className: 'bg bg--adult thumb-item__adult',
                          children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('span', {
                            className: 'a11y',
                            children: '성인 인증이 필요 합니다.',
                          }),
                        }),
                      src &&
                        (!adult || (0, _shopby_shared_utils__WEBPACK_IMPORTED_MODULE_0__.kJ)()) &&
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('span', {
                          className: 'thumb-item__img',
                          children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('img', {
                            src: src + (resize ? '?' + resize : ''),
                            alt,
                            loading: 'lazy',
                          }),
                        }),
                    ],
                  }),
                  HoverViewComponent,
                ],
              }),
              children &&
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('div', {
                  className: 'thumb-item__info',
                  children,
                }),
            ],
          });
        };
      ThumbItem.displayName = 'ThumbItem';
      const __WEBPACK_DEFAULT_EXPORT__ = ThumbItem;
      try {
        (ThumbItem.displayName = 'ThumbItem'),
          (ThumbItem.__docgenInfo = {
            description: '',
            displayName: 'ThumbItem',
            props: {
              onClientError: {
                defaultValue: null,
                description: '',
                name: 'onClientError',
                required: !1,
                type: { name: '((errorInfo: ErrorOption) => void)' },
              },
              href: { defaultValue: null, description: '', name: 'href', required: !0, type: { name: 'string' } },
              src: { defaultValue: null, description: '', name: 'src', required: !1, type: { name: 'string' } },
              className: {
                defaultValue: { value: '' },
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              adult: { defaultValue: null, description: '', name: 'adult', required: !1, type: { name: 'boolean' } },
              HoverViewComponent: {
                defaultValue: { value: '<></>' },
                description: '',
                name: 'HoverViewComponent',
                required: !1,
                type: { name: 'Element' },
              },
              resize: {
                defaultValue: { value: '' },
                description: '',
                name: 'resize',
                required: !1,
                type: { name: 'string' },
              },
              alt: {
                defaultValue: { value: '' },
                description: '',
                name: 'alt',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['common/Thumbs/ThumbItem.tsx#ThumbItem'] = {
              docgenInfo: ThumbItem.__docgenInfo,
              name: 'ThumbItem',
              path: 'common/Thumbs/ThumbItem.tsx#ThumbItem',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
  },
]);
