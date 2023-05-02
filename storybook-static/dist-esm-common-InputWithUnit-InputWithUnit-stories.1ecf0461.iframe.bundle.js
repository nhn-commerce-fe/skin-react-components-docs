'use strict';
(self.webpackChunk_shopby_react_components = self.webpackChunk_shopby_react_components || []).push([
  [8178],
  {
    './dist/esm/common/InputWithUnit/InputWithUnit.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          InputWithUnitComp: () => InputWithUnitComp,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => InputWithUnit_stories,
        });
      __webpack_require__('../../node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.function.bind.js');
      var jsx_runtime = __webpack_require__('../../node_modules/react/jsx-runtime.js'),
        react =
          (__webpack_require__('../../node_modules/core-js/modules/es.object.keys.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.array.index-of.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.symbol.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.number.constructor.js'),
          __webpack_require__('../../node_modules/react/index.js')),
        utils = __webpack_require__('../shared/dist/esm/utils/index.js'),
        TextField = __webpack_require__('./dist/esm/common/TextField/TextField.js'),
        _excluded = ['unitLabel', 'className', 'value', 'valid', 'showsComma'];
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
      const InputWithUnit_InputWithUnit = function InputWithUnit(_ref) {
        var unitLabel = _ref.unitLabel,
          _ref$className = _ref.className,
          className = void 0 === _ref$className ? '' : _ref$className,
          value = _ref.value,
          valid = _ref.valid,
          showsComma = _ref.showsComma,
          props = _objectWithoutProperties(_ref, _excluded),
          _showsComma = (0, react.useMemo)(
            function () {
              return (
                !(!showsComma || 'NUMBER' !== valid) ||
                (showsComma &&
                  'NUMBER' !== valid &&
                  console.error('showsComma 옵션을 활성화하려면 valid가 NUMBER로 설정되어야 합니다.'),
                !1)
              );
            },
            [valid, showsComma]
          ),
          _value = (0, react.useMemo)(
            function () {
              if (void 0 !== value) return _showsComma ? (0, utils.o5)(Number(value)) : value;
            },
            [_showsComma, value]
          );
        return (0, jsx_runtime.jsxs)('div', {
          className: 'input-with-unit ' + className,
          children: [
            (0, jsx_runtime.jsx)(
              TextField.Z,
              Object.assign({}, props, { className: 'input-with-unit__input', value: _value, valid, placeholder: '' })
            ),
            (0, jsx_runtime.jsxs)('span', { className: 'input-with-unit__unit', children: [unitLabel, ' '] }),
          ],
        });
      };
      const InputWithUnit_stories = { title: 'common/InputWithUnit', component: InputWithUnit_InputWithUnit };
      var InputWithUnitComp = function Template(args) {
        return (0, jsx_runtime.jsx)(InputWithUnit_InputWithUnit, Object.assign({}, args));
      }.bind({});
      (InputWithUnitComp.args = { unitLabel: '원', showsComma: !0, value: '10000', valid: 'NUMBER' }),
        (InputWithUnitComp.parameters = Object.assign(
          { storySource: { source: '(args) => _jsx(InputWithUnit, { ...args })' } },
          InputWithUnitComp.parameters
        ));
      var __namedExportsOrder = ['InputWithUnitComp'];
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
  },
]);
