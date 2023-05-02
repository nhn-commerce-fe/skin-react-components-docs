/*! For license information please see common-OffCanvas-OffCanvas-stories.175a651b.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_shopby_react_components = self.webpackChunk_shopby_react_components || []).push([
  [1588],
  {
    './common/OffCanvas/OffCanvas.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => OffCanvas_stories,
        });
      __webpack_require__('../../node_modules/core-js/modules/es.object.assign.js');
      var dist = __webpack_require__('../../node_modules/react-router-dom/dist/index.js'),
        react =
          (__webpack_require__('../../node_modules/core-js/modules/es.array.is-array.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.symbol.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.symbol.description.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.object.to-string.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.symbol.iterator.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.string.iterator.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.array.iterator.js'),
          __webpack_require__('../../node_modules/core-js/modules/web.dom-collections.iterator.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.array.slice.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.function.name.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.array.from.js'),
          __webpack_require__('../../node_modules/react/index.js')),
        react_router_dist = __webpack_require__('../../node_modules/react-router/dist/index.js'),
        jsx_runtime = __webpack_require__('../../node_modules/react/jsx-runtime.js');
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i = null == arr ? null : ('undefined' != typeof Symbol && arr[Symbol.iterator]) || arr['@@iterator'];
            if (null != _i) {
              var _s,
                _e,
                _x,
                _r,
                _arr = [],
                _n = !0,
                _d = !1;
              try {
                if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
                  if (Object(_i) !== _i) return;
                  _n = !1;
                } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
              } catch (err) {
                (_d = !0), (_e = err);
              } finally {
                try {
                  if (!_n && null != _i.return && ((_r = _i.return()), Object(_r) !== _r)) return;
                } finally {
                  if (_d) throw _e;
                }
              }
              return _arr;
            }
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var DEFAULT_STATE_OFFCANVAS_STATUS = { visible: !1 },
        OffCanvasStateContext = (0, react.createContext)(null),
        OffCanvasActionContext = (0, react.createContext)(null),
        OffCanvasProvider = function OffCanvasProvider(_ref) {
          var children = _ref.children,
            _useState2 = _slicedToArray((0, react.useState)(DEFAULT_STATE_OFFCANVAS_STATUS), 2),
            OffCanvasState = _useState2[0],
            setOffCanvasState = _useState2[1],
            location = (0, react_router_dist.TH)(),
            action = (0, react.useMemo)(function () {
              return {
                openCanvas: function openCanvas() {
                  setOffCanvasState(function () {
                    return { visible: !0 };
                  });
                },
                closeCanvas: function closeCanvas() {
                  setOffCanvasState(function () {
                    return { visible: !1 };
                  });
                },
              };
            }, []);
          return (
            (0, react.useEffect)(
              function () {
                action.closeCanvas();
              },
              [location.pathname]
            ),
            (0, jsx_runtime.jsx)(OffCanvasStateContext.Provider, {
              value: OffCanvasState,
              children: (0, jsx_runtime.jsx)(OffCanvasActionContext.Provider, { value: action, children }),
            })
          );
        };
      OffCanvasProvider.displayName = 'OffCanvasProvider';
      const OffCanvas_OffCanvasProvider = OffCanvasProvider;
      try {
        (OffCanvasProvider.displayName = 'OffCanvasProvider'),
          (OffCanvasProvider.__docgenInfo = {
            description: '',
            displayName: 'OffCanvasProvider',
            props: {
              onClientError: {
                defaultValue: null,
                description: '',
                name: 'onClientError',
                required: !1,
                type: { name: '((errorInfo: ErrorOption) => void)' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['common/OffCanvas/OffCanvasProvider.tsx#OffCanvasProvider'] = {
              docgenInfo: OffCanvasProvider.__docgenInfo,
              name: 'OffCanvasProvider',
              path: 'common/OffCanvas/OffCanvasProvider.tsx#OffCanvasProvider',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var OffCanvas = function OffCanvas(_ref) {
        var _ref$className = _ref.className,
          className = void 0 === _ref$className ? '' : _ref$className,
          children = _ref.children,
          visible = (function useOffCanvasStateContext() {
            var ctx = (0, react.useContext)(OffCanvasStateContext);
            if (!ctx) throw new Error('INVALID_OffCanvasStateContext');
            return ctx;
          })().visible;
        return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [
            (0, jsx_runtime.jsxs)('section', {
              className: 'offcanvas ' + (visible ? 'is-active' : '') + ' ' + className,
              children: [(0, jsx_runtime.jsx)('h2', { className: 'a11y', children: '전체메뉴' }), children],
            }),
            visible && (0, jsx_runtime.jsx)('div', { className: 'offcanvas__dim ' + (visible ? 'is-active' : '') }),
          ],
        });
      };
      const OffCanvas_OffCanvas = OffCanvas;
      try {
        (OffCanvas.displayName = 'OffCanvas'),
          (OffCanvas.__docgenInfo = {
            description: '',
            displayName: 'OffCanvas',
            props: {
              onClientError: {
                defaultValue: null,
                description: '',
                name: 'onClientError',
                required: !1,
                type: { name: '((errorInfo: ErrorOption) => void)' },
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
            (STORYBOOK_REACT_CLASSES['common/OffCanvas/OffCanvas.tsx#OffCanvas'] = {
              docgenInfo: OffCanvas.__docgenInfo,
              name: 'OffCanvas',
              path: 'common/OffCanvas/OffCanvas.tsx#OffCanvas',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const OffCanvas_stories = { title: 'layout/OffCanvas', component: OffCanvas_OffCanvas };
      var MockContent = function MockContent() {
        var openCanvas = (function useOffCanvasActionContext() {
          var ctx = (0, react.useContext)(OffCanvasActionContext);
          if (!ctx) throw new Error('INVALID_OffCanvasActionContext');
          return ctx;
        })().openCanvas;
        return (0, jsx_runtime.jsx)('button', {
          style: { cursor: 'pointer' },
          onClick: function onClick() {
            openCanvas();
          },
          children: 'toggle OffCanvas',
        });
      };
      MockContent.displayName = 'MockContent';
      var Default = function Default() {
        return (0, jsx_runtime.jsx)(dist.VK, {
          children: (0, jsx_runtime.jsxs)(OffCanvas_OffCanvasProvider, {
            children: [
              (0, jsx_runtime.jsx)(MockContent, {}),
              (0, jsx_runtime.jsx)(OffCanvas_OffCanvas, {
                children: (0, jsx_runtime.jsx)('p', { className: 'l-panel', children: 'hello' }),
              }),
            ],
          }),
        });
      };
      (Default.displayName = 'Default'),
        (Default.parameters = Object.assign(
          {
            storySource: {
              source:
                '() => (\n  <Router>\n    <OffCanvasProvider>\n      <MockContent />\n      <OffCanvas>\n        <p className="l-panel">hello</p>\n      </OffCanvas>\n    </OffCanvasProvider>\n  </Router>\n)',
            },
          },
          Default.parameters
        ));
      var __namedExportsOrder = ['Default'];
    },
    '../../node_modules/core-js/internals/array-reduce.js': (module, __unused_webpack_exports, __webpack_require__) => {
      var aCallable = __webpack_require__('../../node_modules/core-js/internals/a-callable.js'),
        toObject = __webpack_require__('../../node_modules/core-js/internals/to-object.js'),
        IndexedObject = __webpack_require__('../../node_modules/core-js/internals/indexed-object.js'),
        lengthOfArrayLike = __webpack_require__('../../node_modules/core-js/internals/length-of-array-like.js'),
        $TypeError = TypeError,
        createMethod = function (IS_RIGHT) {
          return function (that, callbackfn, argumentsLength, memo) {
            aCallable(callbackfn);
            var O = toObject(that),
              self = IndexedObject(O),
              length = lengthOfArrayLike(O),
              index = IS_RIGHT ? length - 1 : 0,
              i = IS_RIGHT ? -1 : 1;
            if (argumentsLength < 2)
              for (;;) {
                if (index in self) {
                  (memo = self[index]), (index += i);
                  break;
                }
                if (((index += i), IS_RIGHT ? index < 0 : length <= index))
                  throw $TypeError('Reduce of empty array with no initial value');
              }
            for (; IS_RIGHT ? index >= 0 : length > index; index += i)
              index in self && (memo = callbackfn(memo, self[index], index, O));
            return memo;
          };
        };
      module.exports = { left: createMethod(!1), right: createMethod(!0) };
    },
    '../../node_modules/core-js/modules/es.array.index-of.js': (
      __unused_webpack_module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      'use strict';
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
    '../../node_modules/core-js/modules/es.array.reduce.js': (
      __unused_webpack_module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      'use strict';
      var $ = __webpack_require__('../../node_modules/core-js/internals/export.js'),
        $reduce = __webpack_require__('../../node_modules/core-js/internals/array-reduce.js').left,
        arrayMethodIsStrict = __webpack_require__('../../node_modules/core-js/internals/array-method-is-strict.js'),
        CHROME_VERSION = __webpack_require__('../../node_modules/core-js/internals/engine-v8-version.js');
      $(
        {
          target: 'Array',
          proto: !0,
          forced:
            (!__webpack_require__('../../node_modules/core-js/internals/engine-is-node.js') &&
              CHROME_VERSION > 79 &&
              CHROME_VERSION < 83) ||
            !arrayMethodIsStrict('reduce'),
        },
        {
          reduce: function reduce(callbackfn) {
            var length = arguments.length;
            return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : void 0);
          },
        }
      );
    },
    '../../node_modules/core-js/modules/es.date.to-string.js': (
      __unused_webpack_module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var uncurryThis = __webpack_require__('../../node_modules/core-js/internals/function-uncurry-this.js'),
        defineBuiltIn = __webpack_require__('../../node_modules/core-js/internals/define-built-in.js'),
        DatePrototype = Date.prototype,
        nativeDateToString = uncurryThis(DatePrototype.toString),
        thisTimeValue = uncurryThis(DatePrototype.getTime);
      'Invalid Date' != String(new Date(NaN)) &&
        defineBuiltIn(DatePrototype, 'toString', function toString() {
          var value = thisTimeValue(this);
          return value == value ? nativeDateToString(this) : 'Invalid Date';
        });
    },
    '../../node_modules/react/cjs/react-jsx-runtime.production.min.js': (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      'use strict';
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
      'use strict';
      module.exports = __webpack_require__('../../node_modules/react/cjs/react-jsx-runtime.production.min.js');
    },
  },
]);
