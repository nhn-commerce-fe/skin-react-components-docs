'use strict';
(self.webpackChunk_shopby_react_components = self.webpackChunk_shopby_react_components || []).push([
  [6608],
  {
    './dist/esm/manage/SearchAddressProvider/SearchAddressProvider.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Example: () => Example,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => SearchAddressProvider_stories,
        });
      __webpack_require__('../../node_modules/core-js/modules/es.array.map.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.function.bind.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.object.assign.js');
      var jsx_runtime = __webpack_require__('../../node_modules/react/jsx-runtime.js'),
        handlers = __webpack_require__('../shared/dist/esm/msw/handlers/index.js'),
        AddressItem = __webpack_require__('./dist/esm/manage/AddressItem/AddressItem.js'),
        SearchField = __webpack_require__('./dist/esm/common/SearchField/SearchField.js'),
        react =
          (__webpack_require__('../../node_modules/core-js/modules/es.array.concat.js'),
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
          __webpack_require__('../../node_modules/core-js/modules/es.array.from.js'),
          __webpack_require__('../../node_modules/react/index.js')),
        helpers = __webpack_require__('../shared/dist/esm/helpers/index.js');
      function _toConsumableArray(arr) {
        return (
          (function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return _arrayLikeToArray(arr);
          })(arr) ||
          (function _iterableToArray(iter) {
            if (('undefined' != typeof Symbol && null != iter[Symbol.iterator]) || null != iter['@@iterator'])
              return Array.from(iter);
          })(arr) ||
          _unsupportedIterableToArray(arr) ||
          (function _nonIterableSpread() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
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
          _unsupportedIterableToArray(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (o) {
          if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          return (
            'Object' === n && o.constructor && (n = o.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(o)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? _arrayLikeToArray(o, minLen)
              : void 0
          );
        }
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var _manageHelper$address = helpers.aV.address,
        Helper = _manageHelper$address.Helper,
        QUERY_KEY = _manageHelper$address.QUERY_KEY,
        DEFAULT_SEARCH_ADDRESS_PROVIDER_STATE_searchResult = null,
        DEFAULT_SEARCH_ADDRESS_PROVIDER_STATE_pageNumber = 1,
        DEFAULT_SEARCH_ADDRESS_PROVIDER_STATE_keyword = '',
        SearchAddressActionContext = (0, react.createContext)(null),
        SearchAddressStateContext = (0, react.createContext)(null),
        useSearchAddressStateContext = function useSearchAddressStateContext() {
          var context = (0, react.useContext)(SearchAddressStateContext);
          if (!context) throw new Error('INVALID_SearchAddressStateContext');
          return context;
        };
      const SearchAddressProvider_SearchAddressProvider = function SearchAddressProvider(_ref) {
        var _ref$pageSize = _ref.pageSize,
          pageSize = void 0 === _ref$pageSize ? 10 : _ref$pageSize,
          children = _ref.children,
          _ref$usesAccumulation = _ref.usesAccumulation,
          usesAccumulation = void 0 !== _ref$usesAccumulation && _ref$usesAccumulation,
          executeQuery = (0, react.useMemo)(function () {
            return (0, helpers.p6)(new Helper());
          }, []).executeQuery,
          _useState2 = _slicedToArray((0, react.useState)(DEFAULT_SEARCH_ADDRESS_PROVIDER_STATE_searchResult), 2),
          searchResult = _useState2[0],
          setSearchResult = _useState2[1],
          _useState4 = _slicedToArray((0, react.useState)(DEFAULT_SEARCH_ADDRESS_PROVIDER_STATE_pageNumber), 2),
          pageNumber = _useState4[0],
          setPageNumber = _useState4[1],
          _useState6 = _slicedToArray((0, react.useState)(DEFAULT_SEARCH_ADDRESS_PROVIDER_STATE_keyword), 2),
          keyword = _useState6[0],
          setKeyword = _useState6[1],
          action = (0, react.useMemo)(function () {
            return {
              searchAddresses: function searchAddresses(_ref3) {
                var pageNumber = _ref3.pageNumber,
                  keyword = _ref3.keyword;
                return executeQuery(QUERY_KEY.QUERY_ADDRESSES, {
                  payload: { pageNumber, keyword, pageSize },
                  onSuccess: function onSuccess(_ref4) {
                    !(function handleGetAddressSearchSuccess(_ref2) {
                      var searchData = _ref2.searchData,
                        pageNumber = _ref2.pageNumber;
                      setPageNumber(pageNumber);
                      var totalCount = searchData.totalCount,
                        responseItems = searchData.items;
                      setSearchResult(function (prev) {
                        var _prev$items,
                          items = usesAccumulation
                            ? [].concat(
                                _toConsumableArray(
                                  null !== (_prev$items = null == prev ? void 0 : prev.items) && void 0 !== _prev$items
                                    ? _prev$items
                                    : []
                                ),
                                _toConsumableArray(responseItems)
                              )
                            : responseItems;
                        return { totalCount, items, itemsLength: items.length };
                      });
                    })({ searchData: _ref4.data, pageNumber });
                  },
                });
              },
              resetSearchResult: function resetSearchResult() {
                return setSearchResult(DEFAULT_SEARCH_ADDRESS_PROVIDER_STATE_searchResult);
              },
              updateKeyword: function updateKeyword(keyword) {
                return setKeyword(keyword);
              },
              updatePageNumber: function updatePageNumber(pageNumber) {
                return setPageNumber(pageNumber);
              },
            };
          }, []);
        return (0, jsx_runtime.jsx)(SearchAddressActionContext.Provider, {
          value: action,
          children: (0, jsx_runtime.jsx)(SearchAddressStateContext.Provider, {
            value: { searchResult, keyword, pageNumber },
            children,
          }),
        });
      };
      const SearchAddressForm_SearchAddressForm = function SearchAddressForm(_ref) {
        var placeholder = _ref.placeholder,
          action = (function useSearchAddressActionContext() {
            var context = (0, react.useContext)(SearchAddressActionContext);
            if (!context) throw new Error('INVALID_SearchAddressActionContext');
            return context;
          })(),
          keyword = useSearchAddressStateContext().keyword;
        return (0, jsx_runtime.jsx)(SearchField.Z, {
          searchValue: keyword,
          placeholder,
          onSearchBtnClick: function handleSearchBtnClick() {
            action.resetSearchResult(), action.searchAddresses({ pageNumber: 1, keyword });
          },
          onClearBtnClick: function handleClearBtnClick() {
            action.resetSearchResult(), action.updateKeyword('');
          },
          onChange: function handleTextFieldChange(_ref2) {
            var value = _ref2.currentTarget.value;
            action.updateKeyword(value);
          },
        });
      };
      var SearchAddressItemsExample = function SearchAddressItemsExample() {
          var searchResult = useSearchAddressStateContext().searchResult;
          if (!searchResult) return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {});
          var items = searchResult.items,
            handleClick = function handleClick(_ref) {
              var zipCode = _ref.zipCode,
                jibunAddress = _ref.jibunAddress,
                roadAddress = _ref.roadAddress;
              alert('우편번호: ' + zipCode + ' \n도로명 주소: ' + roadAddress + ' \n지번: ' + jibunAddress);
            };
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children:
              null == items
                ? void 0
                : items.map(function (_ref2, idx) {
                    var zipCode = _ref2.zipCode,
                      jibunAddress = _ref2.jibunAddress,
                      roadAddress = _ref2.roadAddress;
                    return (0,
                    jsx_runtime.jsx)(AddressItem.Z, { zipCode, roadAddress: jibunAddress, jibunAddress: roadAddress, onClick: handleClick }, idx);
                  }),
          });
        },
        SearchAddressProviderExample = function SearchAddressProviderExample() {
          return (0, jsx_runtime.jsxs)(SearchAddressProvider_SearchAddressProvider, {
            children: [
              (0, jsx_runtime.jsx)(SearchAddressForm_SearchAddressForm, {
                placeholder: '키워드를 입력하세요. (어떤 키워드를 입력해도 결과는 동일합니다.) ',
              }),
              (0, jsx_runtime.jsx)(SearchAddressItemsExample, {}),
            ],
          });
        };
      const SearchAddressProvider_stories = {
        title: 'providers/SearchAddress',
        component: SearchAddressProviderExample,
      };
      var Example = function Template() {
        return (0, jsx_runtime.jsx)(SearchAddressProviderExample, {});
      }.bind({});
      (Example.parameters = { msw: { handlers: [handlers.bY] } }),
        (Example.parameters = Object.assign(
          { storySource: { source: '() => _jsx(SearchAddressProviderExample, {})' } },
          Example.parameters
        ));
      var __namedExportsOrder = ['Example'];
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
    './dist/esm/common/SearchField/SearchField.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        ),
        _IconBtn_IconBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./dist/esm/common/IconBtn/IconBtn.js'),
        _TextField_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './dist/esm/common/TextField/TextField.js'
        );
      const __WEBPACK_DEFAULT_EXPORT__ = function SearchField(_ref) {
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
    },
    './dist/esm/common/TextField/TextField.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      __webpack_require__('../../node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.array.index-of.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.string.replace.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.regexp.exec.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.object.assign.js');
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('../../node_modules/react/index.js'),
        _shopby_shared_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          '../shared/dist/esm/constants/index.js'
        ),
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
      var TextField = (0, react__WEBPACK_IMPORTED_MODULE_7__.forwardRef)(function (_ref, ref) {
        var value = _ref.value,
          className = _ref.className,
          _ref$testId = _ref.testId,
          testId = void 0 === _ref$testId ? 'text-field' : _ref$testId,
          valid = _ref.valid,
          onChange = _ref.onChange,
          props = _objectWithoutProperties(_ref, _excluded);
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)('span', {
          className: 'text-field ' + (null != className ? className : ''),
          children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
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
                    ((value = value.replace(_shopby_shared_constants__WEBPACK_IMPORTED_MODULE_8__.Iu[valid], '')),
                    (e.currentTarget.value = value)),
                    null == onChange || onChange(e);
                },
              },
              props
            )
          ),
        });
      });
      (TextField.displayName = 'TextField'),
        (TextField.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'TextField',
          props: { testId: { defaultValue: { value: "'text-field'", computed: !1 }, required: !1 } },
        });
      const __WEBPACK_DEFAULT_EXPORT__ = TextField;
      'undefined' != typeof STORYBOOK_REACT_CLASSES &&
        (STORYBOOK_REACT_CLASSES['dist/esm/common/TextField/TextField.js'] = {
          name: 'TextField',
          docgenInfo: TextField.__docgenInfo,
          path: 'dist/esm/common/TextField/TextField.js',
        });
    },
    './dist/esm/manage/AddressItem/AddressItem.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        '../../node_modules/react/jsx-runtime.js'
      );
      const __WEBPACK_DEFAULT_EXPORT__ = function AddressItem(_ref) {
        var _ref$roadAddressLabel = _ref.roadAddressLabel,
          roadAddressLabel = void 0 === _ref$roadAddressLabel ? '도로명' : _ref$roadAddressLabel,
          _ref$jibunAddressLabe = _ref.jibunAddressLabel,
          jibunAddressLabel = void 0 === _ref$jibunAddressLabe ? '지번' : _ref$jibunAddressLabe,
          _ref$zipCode = _ref.zipCode,
          zipCode = void 0 === _ref$zipCode ? '' : _ref$zipCode,
          _ref$roadAddress = _ref.roadAddress,
          roadAddress = void 0 === _ref$roadAddress ? '' : _ref$roadAddress,
          _ref$jibunAddress = _ref.jibunAddress,
          jibunAddress = void 0 === _ref$jibunAddress ? '' : _ref$jibunAddress,
          _onClick = _ref.onClick;
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
          className: 'address',
          children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
              className: 'address__zip-code',
              children: zipCode,
            }),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('dl', {
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                  className: 'address__row',
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('dt', {
                      className: 'address__label',
                      children: roadAddressLabel,
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('dd', {
                      className: 'address__detail',
                      children: roadAddress,
                    }),
                  ],
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                  className: 'address__row',
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('dt', {
                      className: 'address__label',
                      children: jibunAddressLabel,
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('dd', {
                      className: 'address__detail',
                      children: jibunAddress,
                    }),
                  ],
                }),
              ],
            }),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('button', {
              className: 'address__btn',
              onClick: function onClick() {
                return null == _onClick ? void 0 : _onClick({ zipCode, roadAddress, jibunAddress });
              },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('span', {
                className: 'a11y',
                children: 'Address',
              }),
            }),
          ],
        });
      };
    },
  },
]);
