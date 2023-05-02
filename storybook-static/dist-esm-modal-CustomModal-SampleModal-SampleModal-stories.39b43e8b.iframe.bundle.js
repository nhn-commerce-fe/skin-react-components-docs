'use strict';
(self.webpackChunk_shopby_react_components = self.webpackChunk_shopby_react_components || []).push([
  [2819],
  {
    './dist/esm/modal/CustomModal/SampleModal/SampleModal.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          SampleComponent: () => SampleComponent,
          SampleHook: () => SampleHook,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => SampleModal_stories,
        });
      __webpack_require__('../../node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.function.bind.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.array.is-array.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.symbol.description.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.object.to-string.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.symbol.iterator.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.string.iterator.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.array.iterator.js'),
        __webpack_require__('../../node_modules/core-js/modules/web.dom-collections.iterator.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.array.slice.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.function.name.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.array.from.js');
      var jsx_runtime = __webpack_require__('../../node_modules/react/jsx-runtime.js'),
        react = __webpack_require__('../../node_modules/react/index.js'),
        Button = __webpack_require__('./dist/esm/common/Button/Button.js'),
        ModalProvider = __webpack_require__('./dist/esm/modal/ModalProvider.js'),
        omit =
          (__webpack_require__('../../node_modules/core-js/modules/es.object.keys.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.array.index-of.js'),
          __webpack_require__('../../node_modules/lodash-es/omit.js')),
        Portal = __webpack_require__('./dist/esm/modal/Portal/Portal.js');
      __webpack_require__('../../node_modules/core-js/modules/es.promise.js');
      const customModalRepository = {
        SampleModal: (0, react.lazy)(function () {
          return Promise.resolve().then(
            __webpack_require__.bind(__webpack_require__, './dist/esm/modal/CustomModal/SampleModal/SampleModal.js')
          );
        }),
      };
      var _excluded = ['name', 'isOpen'],
        _excluded2 = ['className', 'id', 'children'];
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
      var ContentWrapper = function ContentWrapper(_ref) {
          var className = _ref.className,
            Children = _ref.Children,
            LazyContent = _ref.LazyContent,
            _ref$id = _ref.id,
            id = void 0 === _ref$id ? '' : _ref$id;
          return (0, jsx_runtime.jsx)(react.Suspense, {
            fallback: null,
            children: (0, jsx_runtime.jsxs)(Portal.Z, {
              id: 'custom-modal-' + id,
              children: [
                (0, jsx_runtime.jsx)('div', { className: 'dim' }),
                (0, jsx_runtime.jsx)('div', {
                  className: 'modal ' + (null != className ? className : ''),
                  children: null != Children ? Children : LazyContent,
                }),
              ],
            }),
          });
        },
        HookContent = function HookContent() {
          var _useModalStateContext2 = (0, ModalProvider.Zy)().customModalState,
            name = _useModalStateContext2.name,
            isOpen = _useModalStateContext2.isOpen,
            rest = _objectWithoutProperties(_useModalStateContext2, _excluded);
          if (!isOpen) return null;
          if (!name) return null;
          var Content = customModalRepository[name];
          return Content
            ? (0, jsx_runtime.jsx)(ContentWrapper, {
                LazyContent: (0, jsx_runtime.jsx)(Content, Object.assign({}, rest)),
              })
            : null;
        };
      const CustomModal_CustomModal = function CustomModal(_ref2) {
        var _ref2$className = _ref2.className,
          className = void 0 === _ref2$className ? '' : _ref2$className,
          id = _ref2.id,
          children = _ref2.children,
          props = _objectWithoutProperties(_ref2, _excluded2);
        return children
          ? (0, jsx_runtime.jsx)(ContentWrapper, {
              className,
              id,
              Children: (0, react.cloneElement)(children, Object.assign({}, (0, omit.Z)(props, ['children']))),
            })
          : (0, jsx_runtime.jsx)(HookContent, {});
      };
      var SampleModal = __webpack_require__('./dist/esm/modal/CustomModal/SampleModal/SampleModal.js');
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
      const SampleModal_stories = { title: 'Modal/CustomModal', component: SampleModal.default };
      var MockHookContent = function MockHookContent(props) {
          var _useModalActionContex = (0, ModalProvider.$7)(),
            openCustomModal = _useModalActionContex.openCustomModal,
            closeCustomModal = _useModalActionContex.closeCustomModal;
          return (0, jsx_runtime.jsx)(Button.Z, {
            label: 'custom modal 열기',
            onClick: function onClick() {
              openCustomModal(
                Object.assign({}, props, {
                  onTest: function onTest() {
                    closeCustomModal();
                  },
                })
              );
            },
          });
        },
        SampleHook = function DefaultHook(props) {
          return (0, jsx_runtime.jsxs)(ModalProvider.ZP, {
            children: [
              (0, jsx_runtime.jsx)(MockHookContent, Object.assign({}, props)),
              (0, jsx_runtime.jsx)(CustomModal_CustomModal, {}),
            ],
          });
        }.bind({});
      SampleHook.args = { name: 'SampleModal' };
      var MockComponentContent = function MockComponentContent() {
          var _useState2 = _slicedToArray((0, react.useState)(!1), 2),
            isOpen = _useState2[0],
            setIsOpen = _useState2[1];
          return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              (0, jsx_runtime.jsx)(Button.Z, {
                label: 'component 타입으로 모달 열기',
                onClick: function onClick() {
                  setIsOpen(!0);
                },
              }),
              isOpen &&
                (0, jsx_runtime.jsx)(CustomModal_CustomModal, {
                  children: (0, jsx_runtime.jsx)(SampleModal.default, {
                    onTest: function onTest() {
                      return setIsOpen(!1);
                    },
                  }),
                }),
            ],
          });
        },
        SampleComponent = function DefaultComponent() {
          return (0, jsx_runtime.jsx)(ModalProvider.ZP, { children: (0, jsx_runtime.jsx)(MockComponentContent, {}) });
        }.bind({});
      (SampleHook.parameters = Object.assign(
        {
          storySource: {
            source:
              '(props) => (_jsxs(ModalProvider, { children: [_jsx(MockHookContent, { ...props }), _jsx(CustomModal, {})] }))',
          },
        },
        SampleHook.parameters
      )),
        (SampleComponent.parameters = Object.assign(
          { storySource: { source: '() => (_jsx(ModalProvider, { children: _jsx(MockComponentContent, {}) }))' } },
          SampleComponent.parameters
        ));
      var __namedExportsOrder = ['SampleHook', 'SampleComponent'];
    },
    './dist/esm/common/Button/Button.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      __webpack_require__('../../node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.array.index-of.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.object.assign.js');
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('../../node_modules/react/index.js'),
        _excluded = ['theme', 'label', 'className', 'children'];
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
      var Button = (0, react__WEBPACK_IMPORTED_MODULE_5__.forwardRef)(function (_ref, ref) {
        var _ref$theme = _ref.theme,
          theme = void 0 === _ref$theme ? 'default' : _ref$theme,
          label = _ref.label,
          _ref$className = _ref.className,
          className = void 0 === _ref$className ? '' : _ref$className,
          children = _ref.children,
          props = _objectWithoutProperties(_ref, _excluded);
        return (0,
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)('button', Object.assign({ ref, type: 'button', className: 'btn btn--' + theme + ' ' + className }, props, { children: children || label }));
      });
      Button.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Button',
        props: {
          theme: { defaultValue: { value: "'default'", computed: !1 }, required: !1 },
          className: { defaultValue: { value: "''", computed: !1 }, required: !1 },
        },
      };
      const __WEBPACK_DEFAULT_EXPORT__ = Button;
      (Button.displayName = 'Button'),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['dist/esm/common/Button/Button.js'] = {
            name: 'Button',
            docgenInfo: Button.__docgenInfo,
            path: 'dist/esm/common/Button/Button.js',
          });
    },
    './dist/esm/modal/CustomModal/SampleModal/SampleModal.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, { default: () => __WEBPACK_DEFAULT_EXPORT__ });
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        '../../node_modules/react/jsx-runtime.js'
      );
      const __WEBPACK_DEFAULT_EXPORT__ = function SampleModal(_ref) {
        var onTest = _ref.onTest;
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
          onClick: onTest,
          children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h1', { children: 'TestBoardModal' }),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              children: '자유롭게 컴포넌트를 작성하세요.',
            }),
          ],
        });
      };
    },
    './dist/esm/modal/ModalProvider.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, {
        $7: () => useModalActionContext,
        ZP: () => __WEBPACK_DEFAULT_EXPORT__,
        Zy: () => useModalStateContext,
      });
      __webpack_require__('../../node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.function.name.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.array.is-array.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.symbol.description.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.object.to-string.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.symbol.iterator.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.string.iterator.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.array.iterator.js'),
        __webpack_require__('../../node_modules/core-js/modules/web.dom-collections.iterator.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.array.slice.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.array.from.js');
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('../../node_modules/react/index.js'),
        lodash_es__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('../../node_modules/lodash-es/cloneDeep.js');
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
      var defaultModalState = { type: null, name: null },
        defaultAlertState = {
          isOpen: !1,
          label: '확인',
          message: '',
          onClose: function onClose() {
            return null;
          },
          Content: null,
        },
        defaultConfirmState = {
          isOpen: !1,
          message: '',
          iconPath: '',
          confirmLabel: '등록',
          onConfirm: function onConfirm() {
            return null;
          },
          cancelLabel: '취소',
          onCancel: function onCancel() {
            return null;
          },
          Content: null,
        },
        defaultCustomModalState = { name: null, isOpen: !1, Content: null },
        ModalStateContext = (0, react__WEBPACK_IMPORTED_MODULE_13__.createContext)(null),
        ModalActionContext = (0, react__WEBPACK_IMPORTED_MODULE_13__.createContext)(null);
      const __WEBPACK_DEFAULT_EXPORT__ = function ModalProvider(_ref) {
        var children = _ref.children,
          _useState2 = _slicedToArray(
            (0, react__WEBPACK_IMPORTED_MODULE_13__.useState)(
              (0, lodash_es__WEBPACK_IMPORTED_MODULE_14__.Z)(defaultModalState)
            ),
            2
          ),
          modalState = _useState2[0],
          setModalState = _useState2[1],
          _useState4 = _slicedToArray(
            (0, react__WEBPACK_IMPORTED_MODULE_13__.useState)(
              (0, lodash_es__WEBPACK_IMPORTED_MODULE_14__.Z)(defaultAlertState)
            ),
            2
          ),
          alertState = _useState4[0],
          setAlert = _useState4[1],
          _useState6 = _slicedToArray(
            (0, react__WEBPACK_IMPORTED_MODULE_13__.useState)(
              (0, lodash_es__WEBPACK_IMPORTED_MODULE_14__.Z)(defaultConfirmState)
            ),
            2
          ),
          confirmState = _useState6[0],
          setConfirm = _useState6[1],
          _useState8 = _slicedToArray(
            (0, react__WEBPACK_IMPORTED_MODULE_13__.useState)(
              (0, lodash_es__WEBPACK_IMPORTED_MODULE_14__.Z)(defaultCustomModalState)
            ),
            2
          ),
          customModalState = _useState8[0],
          setCustom = _useState8[1],
          action = (0, react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(function () {
            return {
              openAlert: function openAlert(payload) {
                requestAnimationFrame(function () {
                  setAlert(function (prev) {
                    return Object.assign({}, prev, payload, { isOpen: !0 });
                  }),
                    setModalState(function (prev) {
                      return Object.assign({}, prev, { type: 'alert' });
                    });
                });
              },
              closeAlert: function closeAlert() {
                setAlert((0, lodash_es__WEBPACK_IMPORTED_MODULE_14__.Z)(defaultAlertState)),
                  setModalState(function (prev) {
                    return Object.assign({}, prev, { type: null });
                  });
              },
              openConfirm: function openConfirm(payload) {
                requestAnimationFrame(function () {
                  setConfirm(function (prev) {
                    return Object.assign({}, prev, payload, { isOpen: !0 });
                  }),
                    setModalState(function (prev) {
                      return Object.assign({}, prev, { type: 'confirm' });
                    });
                });
              },
              closeConfirm: function closeConfirm() {
                setConfirm((0, lodash_es__WEBPACK_IMPORTED_MODULE_14__.Z)(defaultConfirmState)),
                  setModalState(function (prev) {
                    return Object.assign({}, prev, { type: null });
                  });
              },
              openCustomModal: function openCustomModal(payload) {
                requestAnimationFrame(function () {
                  setCustom(function (prev) {
                    return Object.assign({}, prev, payload, { isOpen: !0 });
                  }),
                    setModalState(function (prev) {
                      return Object.assign({}, prev, { type: 'customModal', name: payload.name });
                    });
                });
              },
              closeCustomModal: function closeCustomModal() {
                setCustom((0, lodash_es__WEBPACK_IMPORTED_MODULE_14__.Z)(defaultCustomModalState)),
                  setModalState(function (prev) {
                    return Object.assign({}, prev, { type: null, name: null });
                  });
              },
            };
          }, []);
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(ModalStateContext.Provider, {
          value: { modalState, alertState, confirmState, customModalState },
          children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(ModalActionContext.Provider, {
            value: action,
            children,
          }),
        });
      };
      var useModalStateContext = function useModalStateContext() {
          var ctx = (0, react__WEBPACK_IMPORTED_MODULE_13__.useContext)(ModalStateContext);
          if (!ctx) throw new Error('INVALID_ModalStateContext');
          return ctx;
        },
        useModalActionContext = function useModalActionContext() {
          var ctx = (0, react__WEBPACK_IMPORTED_MODULE_13__.useContext)(ModalActionContext);
          if (!ctx) throw new Error('INVALID_ModalActionContext');
          return ctx;
        };
    },
    './dist/esm/modal/Portal/Portal.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/react/index.js'),
        react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/react-dom/index.js'),
        _shopby_shared_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../shared/dist/esm/utils/index.js'),
        toggleBackgroundScroll = function toggleBackgroundScroll(preventScroll) {
          (0, _shopby_shared_utils__WEBPACK_IMPORTED_MODULE_2__.og)(
            (0, _shopby_shared_utils__WEBPACK_IMPORTED_MODULE_2__.qs)('body'),
            'prevent-scroll',
            preventScroll
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = function Portal(_ref2) {
        var id = _ref2.id,
          children = _ref2.children,
          portalRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
        return (
          (function bindPortalRef(_ref) {
            var portalRef = _ref.portalRef,
              id = _ref.id;
            if (!document.querySelector('#' + id)) {
              var el = (0, _shopby_shared_utils__WEBPACK_IMPORTED_MODULE_2__.ut)('div');
              (el.id = id), (el.className = 'portal'), (portalRef.current = el);
            }
          })({ portalRef, id }),
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
            return (
              (0, _shopby_shared_utils__WEBPACK_IMPORTED_MODULE_2__.CN)('beforeend', portalRef.current),
              toggleBackgroundScroll(!0),
              function () {
                var _portalRef$current;
                toggleBackgroundScroll(!1),
                  null === (_portalRef$current = portalRef.current) ||
                    void 0 === _portalRef$current ||
                    _portalRef$current.remove();
              }
            );
          }, []),
          (0, react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(children, portalRef.current)
        );
      };
    },
  },
]);
