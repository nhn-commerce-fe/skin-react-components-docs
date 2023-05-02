'use strict';
(self.webpackChunk_shopby_react_components = self.webpackChunk_shopby_react_components || []).push([
  [3523],
  {
    './common/RecentKeywordProvider/RecentKeywordProvider.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Template: () => Template,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__('../../node_modules/core-js/modules/es.object.assign.js'),
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
      var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('../../node_modules/react/index.js'),
        react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          '../../node_modules/react-router-dom/dist/index.js'
        ),
        _RecentKeyword_RecentKeyword__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          './common/RecentKeyword/RecentKeyword.tsx'
        ),
        _SearchField__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__('./common/SearchField/SearchField.tsx'),
        _RecentKeywordProvider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          './common/RecentKeywordProvider/RecentKeywordProvider.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        );
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
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: 'Providers/RecentKeyword',
        component: _RecentKeyword_RecentKeyword__WEBPACK_IMPORTED_MODULE_14__.Z,
      };
      var Example = function Example() {
          var _useState2 = _slicedToArray((0, react__WEBPACK_IMPORTED_MODULE_12__.useState)(''), 2),
            keyword = _useState2[0],
            setKeyword = _useState2[1],
            add = (0, _RecentKeywordProvider__WEBPACK_IMPORTED_MODULE_15__.Kd)().add;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment,
            {
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_SearchField__WEBPACK_IMPORTED_MODULE_16__.Z, {
                  searchValue: keyword,
                  onSearchBtnClick: function onSearchBtnClick() {
                    return add(keyword);
                  },
                  onClearBtnClick: function onClearBtnClick() {
                    return setKeyword('');
                  },
                  onChange: function onChange(_ref) {
                    var target = _ref.target;
                    return setKeyword(target.value);
                  },
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(
                  _RecentKeyword_RecentKeyword__WEBPACK_IMPORTED_MODULE_14__.Z,
                  {
                    onKeywordClick: function onKeywordClick(keyword) {
                      return console.log(keyword);
                    },
                  }
                ),
              ],
            }
          );
        },
        Template = function Template() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(
            react_router_dom__WEBPACK_IMPORTED_MODULE_17__.VK,
            {
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(
                _RecentKeywordProvider__WEBPACK_IMPORTED_MODULE_15__.ZP,
                { children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(Example, {}) }
              ),
            }
          );
        };
      (Template.displayName = 'Template'),
        (Template.parameters = Object.assign(
          {
            storySource: {
              source:
                '() => (\n  <Router>\n    <RecentKeywordProvider>\n      <Example />\n    </RecentKeywordProvider>\n  </Router>\n)',
            },
          },
          Template.parameters
        ));
      var __namedExportsOrder = ['Template'];
    },
    './common/Icon/Icon.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      __webpack_require__('../../node_modules/core-js/modules/es.function.name.js');
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        ),
        Icon = function Icon(_ref) {
          var _ref$className = _ref.className,
            className = void 0 === _ref$className ? '' : _ref$className,
            name = _ref.name;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('span', {
            className: 'ico ico--' + name + ' ' + className,
          });
        };
      Icon.displayName = 'Icon';
      const __WEBPACK_DEFAULT_EXPORT__ = Icon;
      try {
        (Icon.displayName = 'Icon'),
          (Icon.__docgenInfo = {
            description: '',
            displayName: 'Icon',
            props: {
              name: {
                defaultValue: null,
                description: '',
                name: 'name',
                required: !0,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"a-star"' },
                    { value: '"angle-r"' },
                    { value: '"face"' },
                    { value: '"magnet"' },
                    { value: '"exclamation"' },
                    { value: '"shopping-bag"' },
                    { value: '"a"' },
                    { value: '"angle-down"' },
                    { value: '"arrow-left"' },
                    { value: '"bars"' },
                    { value: '"basket"' },
                    { value: '"basket-white-gray-bg"' },
                    { value: '"blog"' },
                    { value: '"caret-down"' },
                    { value: '"check-white"' },
                    { value: '"checked-gray-bg"' },
                    { value: '"circle-x-gray-bg"' },
                    { value: '"circle-x-white-bg"' },
                    { value: '"clock"' },
                    { value: '"coupon-bottom-gray"' },
                    { value: '"coupon-bottom-red"' },
                    { value: '"coupon-top-gray"' },
                    { value: '"coupon-top-red"' },
                    { value: '"download-gray"' },
                    { value: '"download-red"' },
                    { value: '"download-white"' },
                    { value: '"exclamation-white-bg"' },
                    { value: '"facebook-black-bg"' },
                    { value: '"go-top"' },
                    { value: '"insta-black-bg"' },
                    { value: '"like-gray"' },
                    { value: '"like-red"' },
                    { value: '"lock"' },
                    { value: '"m-circle"' },
                    { value: '"q"' },
                    { value: '"no-items"' },
                    { value: '"p-circle"' },
                    { value: '"question-round"' },
                    { value: '"share-node"' },
                    { value: '"shipping-car"' },
                    { value: '"url-gray-bg"' },
                    { value: '"x-black"' },
                    { value: '"x-gray"' },
                    { value: '"tweet-black-bg"' },
                    { value: '"arrow-down-arrow-up"' },
                    { value: '"youtube-black-bg"' },
                    { value: '"pay-account-black"' },
                    { value: '"pay-account-white"' },
                    { value: '"pay-credit-card-black"' },
                    { value: '"pay-credit-card-white"' },
                    { value: '"pay-etc-black"' },
                    { value: '"pay-etc-white"' },
                    { value: '"pay-mobile-black"' },
                    { value: '"pay-mobile-white"' },
                    { value: '"pay-virtual-account-black"' },
                    { value: '"pay-virtual-account-white"' },
                    { value: '"pay-realtime-account-black"' },
                    { value: '"pay-realtime-account-white"' },
                    { value: '"tosspay"' },
                    { value: '"tosspay-white"' },
                    { value: '"chai"' },
                    { value: '"chai-white"' },
                    { value: '"naverpay"' },
                    { value: '"naverpay-white"' },
                    { value: '"payco"' },
                    { value: '"payco-white"' },
                    { value: '"kakaopay"' },
                    { value: '"kakaopay-white"' },
                    { value: '"delivery"' },
                    { value: '"heart-gray"' },
                    { value: '"heart-black"' },
                  ],
                },
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
            (STORYBOOK_REACT_CLASSES['common/Icon/Icon.tsx#Icon'] = {
              docgenInfo: Icon.__docgenInfo,
              name: 'Icon',
              path: 'common/Icon/Icon.tsx#Icon',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './common/IconBtn/IconBtn.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _Icon_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./common/Icon/Icon.tsx'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/react/jsx-runtime.js'),
        IconBtn = function IconBtn(_ref) {
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
      IconBtn.displayName = 'IconBtn';
      const __WEBPACK_DEFAULT_EXPORT__ = IconBtn;
      try {
        (IconBtn.displayName = 'IconBtn'),
          (IconBtn.__docgenInfo = {
            description: '',
            displayName: 'IconBtn',
            props: {
              iconType: {
                defaultValue: null,
                description: '',
                name: 'iconType',
                required: !1,
                type: { name: 'Nullable<IconName>' },
              },
              label: {
                defaultValue: { value: '' },
                description: '',
                name: 'label',
                required: !1,
                type: { name: 'string | number' },
              },
              rounded: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'rounded',
                required: !1,
                type: { name: 'boolean' },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: { name: '((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)' },
              },
              className: {
                defaultValue: { value: '' },
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              testId: {
                defaultValue: { value: 'icon-btn' },
                description: '',
                name: 'testId',
                required: !1,
                type: { name: 'string' },
              },
              disabled: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'disabled',
                required: !1,
                type: { name: 'boolean' },
              },
              hiddenLabel: {
                defaultValue: { value: 'true' },
                description: '',
                name: 'hiddenLabel',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['common/IconBtn/IconBtn.tsx#IconBtn'] = {
              docgenInfo: IconBtn.__docgenInfo,
              name: 'IconBtn',
              path: 'common/IconBtn/IconBtn.tsx#IconBtn',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './common/RecentKeyword/RecentKeyword.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      __webpack_require__('../../node_modules/core-js/modules/es.array.map.js');
      var _RecentKeywordItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './common/RecentKeywordItem/RecentKeywordItem.tsx'
        ),
        _RecentKeywordProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './common/RecentKeywordProvider/RecentKeywordProvider.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/react/jsx-runtime.js'),
        RecentKeywordTop = function RecentKeywordTop() {
          var deleteAll = (0, _RecentKeywordProvider__WEBPACK_IMPORTED_MODULE_2__.Kd)().deleteAll;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)('div', {
            className: 'recent-keyword__top',
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('p', { children: '최근검색어' }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('button', {
                onClick: function onClick() {
                  return deleteAll();
                },
                children: '검색어 전체삭제',
              }),
            ],
          });
        };
      RecentKeywordTop.displayName = 'RecentKeywordTop';
      var EmptyRecentKeyword = function EmptyRecentKeyword() {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('div', {
          className: 'recent-keyword__content-empty',
          children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('p', {
            children: '최근 검색어 내역이 없습니다.',
          }),
        });
      };
      EmptyRecentKeyword.displayName = 'EmptyRecentKeyword';
      var RecentKeywordContent = function RecentKeywordContent(_ref) {
        var onKeywordClick = _ref.onKeywordClick,
          _useRecentKeywordStat = (0, _RecentKeywordProvider__WEBPACK_IMPORTED_MODULE_2__.Oc)(),
          keywords = _useRecentKeywordStat.keywords,
          size = _useRecentKeywordStat.size,
          action = (0, _RecentKeywordProvider__WEBPACK_IMPORTED_MODULE_2__.Kd)(),
          onDelete = function onDelete(keyword) {
            action.delete(keyword);
          };
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('div', {
          className: 'recent-keyword__content',
          children: size
            ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('ul', {
                'data-testid': 'recent-keyword__list',
                children: keywords.map(function (keyword, idx) {
                  return (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_RecentKeywordItem__WEBPACK_IMPORTED_MODULE_3__.Z, { onClick: onKeywordClick, onDelete, keyword }, 'recent-keyword-' + keyword + '_' + idx);
                }),
              })
            : (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(EmptyRecentKeyword, {}),
        });
      };
      RecentKeywordContent.displayName = 'RecentKeywordContent';
      var RecentKeyword = function RecentKeyword(_ref2) {
        var onKeywordClick = _ref2.onKeywordClick,
          _ref2$className = _ref2.className,
          className = void 0 === _ref2$className ? '' : _ref2$className;
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)('div', {
          className: 'recent-keyword ' + className,
          children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RecentKeywordTop, {}),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RecentKeywordContent, { onKeywordClick }),
          ],
        });
      };
      RecentKeyword.displayName = 'RecentKeyword';
      const __WEBPACK_DEFAULT_EXPORT__ = RecentKeyword;
      try {
        (RecentKeyword.displayName = 'RecentKeyword'),
          (RecentKeyword.__docgenInfo = {
            description: '',
            displayName: 'RecentKeyword',
            props: {
              onKeywordClick: {
                defaultValue: null,
                description: '',
                name: 'onKeywordClick',
                required: !0,
                type: { name: '(keyword: string) => void' },
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
            (STORYBOOK_REACT_CLASSES['common/RecentKeyword/RecentKeyword.tsx#RecentKeyword'] = {
              docgenInfo: RecentKeyword.__docgenInfo,
              name: 'RecentKeyword',
              path: 'common/RecentKeyword/RecentKeyword.tsx#RecentKeyword',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './common/RecentKeywordItem/RecentKeywordItem.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _IconBtn_IconBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./common/IconBtn/IconBtn.tsx'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/react/jsx-runtime.js'),
        RecentKeywordItem = function RecentKeywordItem(_ref) {
          var keyword = _ref.keyword,
            onDelete = _ref.onDelete,
            _ref$deleteBtnTestId = _ref.deleteBtnTestId,
            deleteBtnTestId =
              void 0 === _ref$deleteBtnTestId ? 'recent-keyword__item-delete-btn' : _ref$deleteBtnTestId,
            _onClick = _ref.onClick;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('li', {
            className: 'recent-keyword__item',
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('button', {
                onClick: function onClick() {
                  return _onClick(keyword);
                },
                children: keyword,
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_IconBtn_IconBtn__WEBPACK_IMPORTED_MODULE_1__.Z, {
                testId: deleteBtnTestId,
                onClick: function onClick() {
                  return onDelete(keyword);
                },
                label: '인풋 클리어',
                iconType: 'circle-x-gray-bg',
              }),
            ],
          });
        };
      RecentKeywordItem.displayName = 'RecentKeywordItem';
      const __WEBPACK_DEFAULT_EXPORT__ = RecentKeywordItem;
      try {
        (RecentKeywordItem.displayName = 'RecentKeywordItem'),
          (RecentKeywordItem.__docgenInfo = {
            description: '',
            displayName: 'RecentKeywordItem',
            props: {
              keyword: { defaultValue: null, description: '', name: 'keyword', required: !0, type: { name: 'string' } },
              onDelete: {
                defaultValue: null,
                description: '',
                name: 'onDelete',
                required: !0,
                type: { name: '(keyword: string) => void' },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !0,
                type: { name: '(keyword: string) => void' },
              },
              deleteBtnTestId: {
                defaultValue: { value: 'recent-keyword__item-delete-btn' },
                description: '',
                name: 'deleteBtnTestId',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['common/RecentKeywordItem/RecentKeywordItem.tsx#RecentKeywordItem'] = {
              docgenInfo: RecentKeywordItem.__docgenInfo,
              name: 'RecentKeywordItem',
              path: 'common/RecentKeywordItem/RecentKeywordItem.tsx#RecentKeywordItem',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './common/RecentKeywordProvider/RecentKeywordProvider.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        Kd: () => useRecentKeywordActionContext,
        Oc: () => useRecentKeywordStateContext,
        ZP: () => __WEBPACK_DEFAULT_EXPORT__,
      });
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
      var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('../../node_modules/react/index.js'),
        _shopby_shared_helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          '../shared/dist/esm/helpers/index.js'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        );
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
      var _commonHelper$recentK = _shopby_shared_helpers__WEBPACK_IMPORTED_MODULE_12__.xt.recentKeyword,
        Helper = _commonHelper$recentK.Helper,
        QUERY_KEY = _commonHelper$recentK.QUERY_KEY,
        MUTATION_KEY = _commonHelper$recentK.MUTATION_KEY,
        DEFAULT_STATE_keywords = [],
        RecentKeywordStateContext = (0, react__WEBPACK_IMPORTED_MODULE_11__.createContext)(null),
        RecentKeywordActionContext = (0, react__WEBPACK_IMPORTED_MODULE_11__.createContext)(null),
        RecentKeywordProvider = function RecentKeywordProvider(_ref) {
          var children = _ref.children,
            _ref$maxSize = _ref.maxSize,
            maxSize = void 0 === _ref$maxSize ? Helper.MAX_SIZE : _ref$maxSize,
            _useState2 = _slicedToArray((0, react__WEBPACK_IMPORTED_MODULE_11__.useState)(DEFAULT_STATE_keywords), 2),
            keywords = _useState2[0],
            setKeywords = _useState2[1],
            size = (0, react__WEBPACK_IMPORTED_MODULE_11__.useMemo)(
              function () {
                return keywords.length;
              },
              [keywords]
            ),
            _useMemo = (0, react__WEBPACK_IMPORTED_MODULE_11__.useMemo)(function () {
              return (0, _shopby_shared_helpers__WEBPACK_IMPORTED_MODULE_12__.p6)(new Helper({ maxSize }));
            }, []),
            executeQuery = _useMemo.executeQuery,
            executeMutation = _useMemo.executeMutation,
            addKeyword = executeMutation(MUTATION_KEY.POST_KEYWORD).mutate,
            deleteKeyword = executeMutation(MUTATION_KEY.DELETE_KEYWORD).mutate,
            deleteAllKeywords = executeMutation(MUTATION_KEY.DELETE_ALL_KEYWORDS).mutate,
            action = (0, react__WEBPACK_IMPORTED_MODULE_11__.useMemo)(function () {
              return {
                add: function add(keyword) {
                  addKeyword({
                    payload: { keyword },
                    onSuccess: function onSuccess(_ref2) {
                      var data = _ref2.data;
                      setKeywords(data);
                    },
                  });
                },
                delete: function _delete(keyword) {
                  deleteKeyword({
                    payload: { keyword },
                    onSuccess: function onSuccess(_ref3) {
                      var data = _ref3.data;
                      setKeywords(data);
                    },
                  });
                },
                deleteAll: function deleteAll() {
                  deleteAllKeywords({
                    onSuccess: function onSuccess(_ref4) {
                      var data = _ref4.data;
                      setKeywords(data);
                    },
                  });
                },
              };
            }, []);
          return (
            (0, react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(function () {
              executeQuery(QUERY_KEY.QUERY_KEYWORDS_BY_LATEST, {
                onSuccess: function onSuccess(_ref5) {
                  var data = _ref5.data;
                  setKeywords(data);
                },
              });
            }, []),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(RecentKeywordStateContext.Provider, {
              value: { size, keywords },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(RecentKeywordActionContext.Provider, {
                value: action,
                children,
              }),
            })
          );
        };
      RecentKeywordProvider.displayName = 'RecentKeywordProvider';
      const __WEBPACK_DEFAULT_EXPORT__ = RecentKeywordProvider;
      var useRecentKeywordStateContext = function useRecentKeywordStateContext() {
          var ctx = (0, react__WEBPACK_IMPORTED_MODULE_11__.useContext)(RecentKeywordStateContext);
          if (!ctx) throw new Error('INVALID_RecentKeywordStateContext');
          return ctx;
        },
        useRecentKeywordActionContext = function useRecentKeywordActionContext() {
          var ctx = (0, react__WEBPACK_IMPORTED_MODULE_11__.useContext)(RecentKeywordActionContext);
          if (!ctx) throw new Error('INVALID_RecentKeywordActionContext');
          return ctx;
        };
      try {
        (RecentKeywordProvider.displayName = 'RecentKeywordProvider'),
          (RecentKeywordProvider.__docgenInfo = {
            description: '',
            displayName: 'RecentKeywordProvider',
            props: {
              onClientError: {
                defaultValue: null,
                description: '',
                name: 'onClientError',
                required: !1,
                type: { name: '((errorInfo: ErrorOption) => void)' },
              },
              maxSize: {
                defaultValue: { value: 'Helper.MAX_SIZE' },
                description: '',
                name: 'maxSize',
                required: !1,
                type: { name: 'number' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['common/RecentKeywordProvider/RecentKeywordProvider.tsx#RecentKeywordProvider'] = {
              docgenInfo: RecentKeywordProvider.__docgenInfo,
              name: 'RecentKeywordProvider',
              path: 'common/RecentKeywordProvider/RecentKeywordProvider.tsx#RecentKeywordProvider',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './common/SearchField/SearchField.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _IconBtn_IconBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./common/IconBtn/IconBtn.tsx'),
        _TextField_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./common/TextField/TextField.tsx'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/react/jsx-runtime.js'),
        SearchField = function SearchField(_ref) {
          var searchValue = _ref.searchValue,
            placeholder = _ref.placeholder,
            onSearchBtnClick = _ref.onSearchBtnClick,
            onClearBtnClick = _ref.onClearBtnClick,
            onChange = _ref.onChange,
            _ref$searchFieldTestI = _ref.searchFieldTestId,
            searchFieldTestId = void 0 === _ref$searchFieldTestI ? 'search-field' : _ref$searchFieldTestI,
            _ref$textFieldTestId = _ref.textFieldTestId,
            textFieldTestId = void 0 === _ref$textFieldTestId ? 'text-field' : _ref$textFieldTestId,
            _ref$clearBtnTestId = _ref.clearBtnTestId,
            clearBtnTestId = void 0 === _ref$clearBtnTestId ? 'clear-btn' : _ref$clearBtnTestId,
            _ref$searchBtnTestId = _ref.searchBtnTestId,
            searchBtnTestId = void 0 === _ref$searchBtnTestId ? 'search-btn' : _ref$searchBtnTestId,
            _ref$className = _ref.className,
            className = void 0 === _ref$className ? '' : _ref$className;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('span', {
            className: 'search-field ' + className,
            'data-testid': searchFieldTestId,
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('span', {
                className: 'search-field__input',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _TextField_TextField__WEBPACK_IMPORTED_MODULE_1__.Z,
                    {
                      value: searchValue,
                      testId: textFieldTestId,
                      onChange,
                      onKeyPress: function handleKeyPress(_ref2) {
                        'Enter' === _ref2.key && (null == onSearchBtnClick || onSearchBtnClick());
                      },
                      placeholder,
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _IconBtn_IconBtn__WEBPACK_IMPORTED_MODULE_2__.Z,
                    {
                      onClick: onClearBtnClick,
                      className: 'search-field__clear-btn',
                      label: '입력 내용 삭제',
                      iconType: 'circle-x-gray-bg',
                      testId: clearBtnTestId,
                    }
                  ),
                ],
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_IconBtn_IconBtn__WEBPACK_IMPORTED_MODULE_2__.Z, {
                className: 'search-field__submit-btn',
                label: searchValue + ' 검색하기',
                iconType: 'magnet',
                onClick: onSearchBtnClick,
                testId: searchBtnTestId,
              }),
            ],
          });
        };
      SearchField.displayName = 'SearchField';
      const __WEBPACK_DEFAULT_EXPORT__ = SearchField;
      try {
        (SearchField.displayName = 'SearchField'),
          (SearchField.__docgenInfo = {
            description: '',
            displayName: 'SearchField',
            props: {
              searchValue: {
                defaultValue: null,
                description: '',
                name: 'searchValue',
                required: !1,
                type: { name: 'string' },
              },
              placeholder: {
                defaultValue: null,
                description: '',
                name: 'placeholder',
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
              onSearchBtnClick: {
                defaultValue: null,
                description: '',
                name: 'onSearchBtnClick',
                required: !1,
                type: { name: '(() => void)' },
              },
              onClearBtnClick: {
                defaultValue: null,
                description: '',
                name: 'onClearBtnClick',
                required: !1,
                type: { name: '((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)' },
              },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !1,
                type: { name: '((event: ChangeEvent<HTMLInputElement>) => void)' },
              },
              searchFieldTestId: {
                defaultValue: { value: 'search-field' },
                description: '',
                name: 'searchFieldTestId',
                required: !1,
                type: { name: 'string' },
              },
              textFieldTestId: {
                defaultValue: { value: 'text-field' },
                description: '',
                name: 'textFieldTestId',
                required: !1,
                type: { name: 'string' },
              },
              clearBtnTestId: {
                defaultValue: { value: 'clear-btn' },
                description: '',
                name: 'clearBtnTestId',
                required: !1,
                type: { name: 'string' },
              },
              searchBtnTestId: {
                defaultValue: { value: 'search-btn' },
                description: '',
                name: 'searchBtnTestId',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['common/SearchField/SearchField.tsx#SearchField'] = {
              docgenInfo: SearchField.__docgenInfo,
              name: 'SearchField',
              path: 'common/SearchField/SearchField.tsx#SearchField',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './common/TextField/TextField.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      __webpack_require__('../../node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.array.index-of.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.string.replace.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.regexp.exec.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.object.assign.js');
      var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('../../node_modules/react/index.js'),
        _shopby_shared_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          '../shared/dist/esm/constants/index.js'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('../../node_modules/react/jsx-runtime.js'),
        _excluded = ['value', 'className', 'testId', 'valid', 'onChange'];
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
      var TextField = (0, react__WEBPACK_IMPORTED_MODULE_6__.forwardRef)(function (_ref, ref) {
        var value = _ref.value,
          className = _ref.className,
          _ref$testId = _ref.testId,
          testId = void 0 === _ref$testId ? 'text-field' : _ref$testId,
          valid = _ref.valid,
          onChange = _ref.onChange,
          props = _objectWithoutProperties(_ref, _excluded);
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)('span', {
          className: 'text-field ' + (null != className ? className : ''),
          children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
            'input',
            Object.assign(
              {
                ref,
                'data-testid': testId,
                type: 'text',
                value,
                onChange: function handleChange(e) {
                  var value = e.currentTarget.value;
                  valid &&
                    ((value = value.replace(_shopby_shared_constants__WEBPACK_IMPORTED_MODULE_7__.Iu[valid], '')),
                    (e.currentTarget.value = value)),
                    null == onChange || onChange(e);
                },
              },
              props
            )
          ),
        });
      });
      TextField.displayName = 'TextField';
      const __WEBPACK_DEFAULT_EXPORT__ = TextField;
      try {
        (TextField.displayName = 'TextField'),
          (TextField.__docgenInfo = {
            description: '',
            displayName: 'TextField',
            props: {
              testId: {
                defaultValue: { value: 'text-field' },
                description: '',
                name: 'testId',
                required: !1,
                type: { name: 'string' },
              },
              valid: {
                defaultValue: null,
                description: '',
                name: 'valid',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"NUMBER"' },
                    { value: '"ENGLISH_NUMBER"' },
                    { value: '"ENGLISH_NUMBER_SPECIAL"' },
                    { value: '"CURRENCY"' },
                    { value: '"NEGATIVE_NUM"' },
                    { value: '"DECIMAL_NUM"' },
                    { value: '"NO_SPECIAL"' },
                    { value: '"NO_PART_SPECIAL"' },
                    { value: '"NO_SPECIAL_SPACE"' },
                    { value: '"NO_SPACE"' },
                    { value: '"NO_ENGLISH"' },
                    { value: '"NO_NUMBER"' },
                    { value: '"NO_PASSWORD_SPECIAL"' },
                    { value: '"NON_PASSWORD_SPECIAL"' },
                    { value: '"NO_KOREAN"' },
                    { value: '"NO_COMMON_SPECIAL"' },
                    { value: '"NO_QUATATION"' },
                    { value: '"EMAIL_ID"' },
                    { value: '"EMAIL_DOMAIN"' },
                  ],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['common/TextField/TextField.tsx#TextField'] = {
              docgenInfo: TextField.__docgenInfo,
              name: 'TextField',
              path: 'common/TextField/TextField.tsx#TextField',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
  },
]);
