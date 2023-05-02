'use strict';
(self.webpackChunk_shopby_react_components = self.webpackChunk_shopby_react_components || []).push([
  [9880],
  {
    './dist/esm/common/Quantity/Quantity.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          QuantityComponent: () => QuantityComponent,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Quantity_stories,
        });
      __webpack_require__('../../node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.function.bind.js');
      var jsx_runtime = __webpack_require__('../../node_modules/react/jsx-runtime.js'),
        utils = __webpack_require__('../shared/dist/esm/utils/index.js'),
        IconSVG = __webpack_require__('./dist/esm/common/IconSVG/IconSVG.js'),
        Counter = __webpack_require__('./dist/esm/common/Counter/Counter.js');
      const Quantity_Quantity = function Quantity(_ref) {
        var _ref$count = _ref.count,
          count = void 0 === _ref$count ? 0 : _ref$count,
          _onChangeValue = _ref.onChangeValue,
          onDelete = _ref.onDelete,
          info = _ref.info,
          _ref$className = _ref.className,
          className = void 0 === _ref$className ? '' : _ref$className,
          children = _ref.children;
        return (0, jsx_runtime.jsxs)('div', {
          className: 'quantity ' + className,
          children: [
            (0, jsx_runtime.jsx)('span', { className: 'quantity__label', children: info.title }),
            (0, jsx_runtime.jsxs)('div', {
              className: 'quantity__content',
              children: [
                (0, jsx_runtime.jsx)(Counter.Z, {
                  count,
                  onChangeValue: function onChangeValue(value) {
                    return null == _onChangeValue ? void 0 : _onChangeValue(value);
                  },
                }),
                (0, jsx_runtime.jsx)('em', { children: (0, utils.o5)(info.price) }),
              ],
            }),
            (0, jsx_runtime.jsxs)('button', {
              className: 'quantity__del',
              onClick: function onClick() {
                return null == onDelete ? void 0 : onDelete(info);
              },
              children: [
                (0, jsx_runtime.jsx)(IconSVG.Z, { name: 'x', size: 20 }),
                (0, jsx_runtime.jsx)('span', { className: 'a11y', children: '옵션 삭제' }),
              ],
            }),
            children,
          ],
        });
      };
      const Quantity_stories = { title: 'common/Quantity', component: Quantity_Quantity };
      var QuantityComponent = function Template(args) {
        return (0, jsx_runtime.jsx)(Quantity_Quantity, Object.assign({}, args));
      }.bind({});
      (QuantityComponent.args = { info: { id: 'new-id', title: 'free', price: 3e4 } }),
        (QuantityComponent.parameters = Object.assign(
          { storySource: { source: '(args) => _jsx(Quantity, { ...args })' } },
          QuantityComponent.parameters
        ));
      var __namedExportsOrder = ['QuantityComponent'];
    },
    './dist/esm/common/Counter/Counter.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      __webpack_require__('../../node_modules/core-js/modules/es.number.constructor.js');
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        '../../node_modules/react/jsx-runtime.js'
      );
      const __WEBPACK_DEFAULT_EXPORT__ = function Counter(_ref) {
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
    },
    './dist/esm/common/IconSVG/IconSVG.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      __webpack_require__('../../node_modules/core-js/modules/es.array.fill.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.function.name.js');
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        ),
        _shopby_shared_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          '../shared/dist/esm/constants/index.js'
        );
      const __WEBPACK_DEFAULT_EXPORT__ = function IconSVG(_ref) {
        var size = _ref.size,
          _ref$stroke = _ref.stroke,
          stroke = void 0 === _ref$stroke ? '#000' : _ref$stroke,
          _ref$fill = _ref.fill,
          fill = void 0 === _ref$fill ? '#fff' : _ref$fill,
          _ref$strokeWidth = _ref.strokeWidth,
          strokeWidth = void 0 === _ref$strokeWidth ? 2 : _ref$strokeWidth,
          name = _ref.name;
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('svg', {
          width: size,
          viewBox: _shopby_shared_constants__WEBPACK_IMPORTED_MODULE_3__.Fg[name].viewBox,
          fill,
          xmlns: 'http://www.w3.org/2000/svg',
          children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('path', {
            d: _shopby_shared_constants__WEBPACK_IMPORTED_MODULE_3__.Fg[name].path,
            stroke,
            strokeWidth,
            strokeLinejoin: 'round',
          }),
        });
      };
    },
  },
]);
