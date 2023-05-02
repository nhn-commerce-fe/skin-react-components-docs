'use strict';
(self.webpackChunk_shopby_react_components = self.webpackChunk_shopby_react_components || []).push([
  [1468],
  {
    './dist/esm/common/CharacterCounter/CharacterCounter.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          CharacterTemplate: () => CharacterTemplate,
          WordTemplate: () => WordTemplate,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => CharacterCounter_stories,
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
        utils =
          (__webpack_require__('../../node_modules/core-js/modules/es.number.constructor.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.array.filter.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.string.split.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.regexp.exec.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.array.join.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.string.trim.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.object.keys.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.array.index-of.js'),
          __webpack_require__('../shared/dist/esm/utils/index.js')),
        constants =
          (__webpack_require__('../../node_modules/core-js/modules/es.string.replace.js'),
          __webpack_require__('../shared/dist/esm/constants/index.js')),
        _excluded = ['onChange', 'className', 'valid'];
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
      var TextArea = (0, react.forwardRef)(function (_ref, ref) {
        var onChange = _ref.onChange,
          className = _ref.className,
          valid = _ref.valid,
          props = _objectWithoutProperties(_ref, _excluded);
        return (0, jsx_runtime.jsx)(
          'textarea',
          Object.assign({ className: 'text-area ' + (null != className ? className : ''), ref }, props, {
            onChange: function handleChange(event) {
              var value = event.currentTarget.value;
              valid && ((value = value.replace(constants.Iu[valid], '')), (event.currentTarget.value = value)),
                null == onChange || onChange(event);
            },
          })
        );
      });
      (TextArea.displayName = 'TextArea'),
        (TextArea.__docgenInfo = { description: '', methods: [], displayName: 'TextArea' });
      const TextArea_TextArea = TextArea;
      'undefined' != typeof STORYBOOK_REACT_CLASSES &&
        (STORYBOOK_REACT_CLASSES['dist/esm/common/TextArea/TextArea.js'] = {
          name: 'TextArea',
          docgenInfo: TextArea.__docgenInfo,
          path: 'dist/esm/common/TextArea/TextArea.js',
        });
      var TextField = __webpack_require__('./dist/esm/common/TextField/TextField.js'),
        VisibleComponent = __webpack_require__('./dist/esm/common/VisibleComponent/VisibleComponent.js'),
        CharacterCounter_excluded = ['limitCount', 'onChange', 'onBlur', 'value', 'textType', 'counterType'];
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
      function CharacterCounter_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function CharacterCounter_objectWithoutPropertiesLoose(source, excluded) {
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
      var getCountStatusFunction = function getCountStatusFunction(limitCount) {
          var getWordStatus = (function getWordStatusFunction(limitCount) {
              return function (value) {
                var _limitCount$word,
                  _value$split$filter,
                  _slicedWords$length,
                  wordLimitCount = Number(
                    null !== (_limitCount$word = null == limitCount ? void 0 : limitCount.word) &&
                      void 0 !== _limitCount$word
                      ? _limitCount$word
                      : 0
                  ),
                  words =
                    null !== (_value$split$filter = null == value ? void 0 : value.split(' ').filter(Boolean)) &&
                    void 0 !== _value$split$filter
                      ? _value$split$filter
                      : [],
                  slicedWords = null == words ? void 0 : words.slice(0, wordLimitCount),
                  wordCounterUsed = wordLimitCount > 0,
                  isGreaterThanWordCount = wordCounterUsed && (null == words ? void 0 : words.length) >= wordLimitCount;
                return {
                  value: isGreaterThanWordCount ? slicedWords.join(' ') : value,
                  count:
                    null !== (_slicedWords$length = null == slicedWords ? void 0 : slicedWords.length) &&
                    void 0 !== _slicedWords$length
                      ? _slicedWords$length
                      : 0,
                  isGreaterThanLimitCount: isGreaterThanWordCount,
                  used: wordCounterUsed,
                };
              };
            })(limitCount),
            getCharacterStatus = (function getCharacterStatusFunction(limitCount) {
              return function (value) {
                var _limitCount$character,
                  _slicedCharacter$trim,
                  characterLimitCount = Number(
                    null !== (_limitCount$character = null == limitCount ? void 0 : limitCount.character) &&
                      void 0 !== _limitCount$character
                      ? _limitCount$character
                      : 0
                  ),
                  slicedCharacter = null == value ? void 0 : value.slice(0, characterLimitCount),
                  count =
                    null !==
                      (_slicedCharacter$trim =
                        null == slicedCharacter ? void 0 : slicedCharacter.trim().replaceAll('\n', '').length) &&
                    void 0 !== _slicedCharacter$trim
                      ? _slicedCharacter$trim
                      : 0,
                  characterCounterUsed = characterLimitCount > 0,
                  isGreaterThanCharacterCount = characterCounterUsed && count >= characterLimitCount;
                return {
                  value: isGreaterThanCharacterCount ? slicedCharacter : value,
                  count,
                  isGreaterThanLimitCount: isGreaterThanCharacterCount,
                  used: characterCounterUsed,
                };
              };
            })(limitCount);
          return function (value) {
            return { word: getWordStatus(value), character: getCharacterStatus(value) };
          };
        },
        CharacterCounter = (0, react.forwardRef)(function (_ref, ref) {
          var _ref$limitCount = _ref.limitCount,
            limitCount = void 0 === _ref$limitCount ? { word: 0, character: 0 } : _ref$limitCount,
            onChange = _ref.onChange,
            onBlur = _ref.onBlur,
            value = _ref.value,
            _ref$textType = _ref.textType,
            textType = void 0 === _ref$textType ? 'INPUT' : _ref$textType,
            props = (_ref.counterType, CharacterCounter_objectWithoutProperties(_ref, CharacterCounter_excluded)),
            getCountStatus = getCountStatusFunction(limitCount),
            _getCountStatus = getCountStatus(value),
            word = _getCountStatus.word,
            character = _getCountStatus.character,
            _useState2 = _slicedToArray((0, react.useState)(word.count), 2),
            wordCount = _useState2[0],
            setWordCount = _useState2[1],
            _useState4 = _slicedToArray((0, react.useState)(character.count), 2),
            characterCount = _useState4[0],
            setCharacterCount = _useState4[1],
            handleChange = function handleChange(event) {
              var value = event.currentTarget.value,
                _getCountStatus2 = getCountStatus(value),
                word = _getCountStatus2.word,
                character = _getCountStatus2.character;
              setWordCount(word.count),
                setCharacterCount(character.count),
                null == onChange || onChange({ word, character });
            },
            handleBlur = function handleBlur(event) {
              var value = event.currentTarget.value,
                _getCountStatus3 = getCountStatus(value),
                word = _getCountStatus3.word,
                character = _getCountStatus3.character;
              setWordCount(word.count),
                setCharacterCount(character.count),
                null == onBlur || onBlur({ word, character });
            };
          return (0,
          jsx_runtime.jsxs)('div', { className: 'character-counter', children: [(0, jsx_runtime.jsx)(VisibleComponent.Z, { shows: 'INPUT' === textType, TruthyComponent: (0, jsx_runtime.jsx)(TextField.Z, Object.assign({ ref }, props, { onChange: handleChange, onBlur: handleBlur, value })), FalsyComponent: (0, jsx_runtime.jsx)(TextArea_TextArea, Object.assign({ ref }, props, { onChange: handleChange, onBlur: handleBlur, value })) }), (0, jsx_runtime.jsx)(VisibleComponent.Z, { shows: Number(null == limitCount ? void 0 : limitCount.word) > 0, TruthyComponent: (0, jsx_runtime.jsxs)('span', { className: 'character-counter__status character-counter__status--word', children: [(0, jsx_runtime.jsx)('span', { className: 'character-counter__count', children: (0, utils.o5)(wordCount) }), (0, jsx_runtime.jsxs)('span', { className: 'character-counter__limit-count', children: [' / ', (0, utils.o5)(limitCount.word)] })] }) }), (0, jsx_runtime.jsx)(VisibleComponent.Z, { shows: Number(null == limitCount ? void 0 : limitCount.character) > 0, TruthyComponent: (0, jsx_runtime.jsxs)('span', { className: 'character-counter__status character-counter__status--character', children: [(0, jsx_runtime.jsx)('span', { className: 'character-counter__count', children: (0, utils.o5)(characterCount) }), (0, jsx_runtime.jsxs)('span', { className: 'character-counter__limit-count', children: [' / ', (0, utils.o5)(limitCount.character)] })] }) })] });
        });
      (CharacterCounter.displayName = 'CharacterCounter'),
        (CharacterCounter.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'CharacterCounter',
          props: {
            limitCount: { defaultValue: { value: '{ word: 0, character: 0 }', computed: !1 }, required: !1 },
            textType: { defaultValue: { value: "'INPUT'", computed: !1 }, required: !1 },
          },
        });
      const CharacterCounter_CharacterCounter = CharacterCounter;
      function CharacterCounter_stories_slicedToArray(arr, i) {
        return (
          (function CharacterCounter_stories_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function CharacterCounter_stories_iterableToArrayLimit(arr, i) {
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
          (function CharacterCounter_stories_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return CharacterCounter_stories_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return CharacterCounter_stories_arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function CharacterCounter_stories_nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function CharacterCounter_stories_arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      'undefined' != typeof STORYBOOK_REACT_CLASSES &&
        (STORYBOOK_REACT_CLASSES['dist/esm/common/CharacterCounter/CharacterCounter.js'] = {
          name: 'CharacterCounter',
          docgenInfo: CharacterCounter.__docgenInfo,
          path: 'dist/esm/common/CharacterCounter/CharacterCounter.js',
        });
      const CharacterCounter_stories = {
        title: 'common/CharacterCounter',
        component: CharacterCounter_CharacterCounter,
      };
      var Template = function Template(args) {
          var _useState2 = CharacterCounter_stories_slicedToArray((0, react.useState)(args.value), 2),
            value = _useState2[0],
            setValue = _useState2[1];
          return (0, jsx_runtime.jsx)(
            CharacterCounter_CharacterCounter,
            Object.assign({}, args, {
              value,
              onChange: function handleChange(status) {
                var _args$onChange;
                'WORD' === args.counterType ? setValue(status.word.value) : setValue(status.character.value),
                  null === (_args$onChange = args.onChange) ||
                    void 0 === _args$onChange ||
                    _args$onChange.call(args, status);
              },
            })
          );
        },
        CharacterTemplate = Template.bind({});
      CharacterTemplate.args = {
        counterType: 'CHARACTER',
        limitCount: { character: 10 },
        value: '',
        onChange: function onChange(param) {
          console.log(param);
        },
      };
      var WordTemplate = Template.bind({});
      (WordTemplate.args = {
        counterType: 'WORD',
        limitCount: { word: 10 },
        value: '',
        onChange: function onChange(param) {
          console.log(param);
        },
      }),
        (CharacterTemplate.parameters = Object.assign(
          {
            storySource: {
              source:
                "(args) => {\n    const [value, setValue] = useState(args.value);\n    const handleChange = (status) => {\n        if (args.counterType === 'WORD') {\n            setValue(status.word.value);\n        }\n        else {\n            setValue(status.character.value);\n        }\n        args.onChange?.(status);\n    };\n    return _jsx(CharacterCounter, { ...args, value: value, onChange: handleChange });\n}",
            },
          },
          CharacterTemplate.parameters
        )),
        (WordTemplate.parameters = Object.assign(
          {
            storySource: {
              source:
                "(args) => {\n    const [value, setValue] = useState(args.value);\n    const handleChange = (status) => {\n        if (args.counterType === 'WORD') {\n            setValue(status.word.value);\n        }\n        else {\n            setValue(status.character.value);\n        }\n        args.onChange?.(status);\n    };\n    return _jsx(CharacterCounter, { ...args, value: value, onChange: handleChange });\n}",
            },
          },
          WordTemplate.parameters
        ));
      var __namedExportsOrder = ['CharacterTemplate', 'WordTemplate'];
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
    './dist/esm/common/VisibleComponent/VisibleComponent.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        '../../node_modules/react/jsx-runtime.js'
      );
      const __WEBPACK_DEFAULT_EXPORT__ = function VisibleComponent(_ref) {
        var shows = _ref.shows,
          TruthyComponent = _ref.TruthyComponent,
          _ref$FalsyComponent = _ref.FalsyComponent,
          FalsyComponent =
            void 0 === _ref$FalsyComponent
              ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                  {}
                )
              : _ref$FalsyComponent;
        return ('function' == typeof shows && shows()) || shows ? TruthyComponent : FalsyComponent;
      };
    },
  },
]);
