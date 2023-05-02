'use strict';
(self.webpackChunk_shopby_react_components = self.webpackChunk_shopby_react_components || []).push([
  [1737],
  {
    './dist/esm/common/PhoneNumberInput/PhoneNumberInput.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => PhoneNumberInput_stories,
        });
      __webpack_require__('../../node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.function.bind.js');
      var jsx_runtime = __webpack_require__('../../node_modules/react/jsx-runtime.js'),
        react =
          (__webpack_require__('../../node_modules/core-js/modules/es.array.map.js'),
          __webpack_require__('../../node_modules/react/index.js')),
        SelectBox = __webpack_require__('./dist/esm/common/SelectBox/SelectBox.js'),
        TextField = __webpack_require__('./dist/esm/common/TextField/TextField.js'),
        DEFAULT_CARRIER_NUMBERS_BY_STRING = ['010', '011', '016', '017', '018', '019'],
        PhoneNumberInput = (0, react.forwardRef)(function (_ref, ref) {
          var _ref$carrierNumber = _ref.carrierNumber,
            carrierNumber = void 0 === _ref$carrierNumber ? '' : _ref$carrierNumber,
            _ref$firstSerial = _ref.firstSerial,
            firstSerial = void 0 === _ref$firstSerial ? '' : _ref$firstSerial,
            _ref$secondSerial = _ref.secondSerial,
            secondSerial = void 0 === _ref$secondSerial ? '' : _ref$secondSerial,
            onCarrierNumberSelect = _ref.onCarrierNumberSelect,
            onFirstSerialChange = _ref.onFirstSerialChange,
            onSecondSerialChange = _ref.onSecondSerialChange,
            onSecondSerialBlur = _ref.onSecondSerialBlur,
            onChange = _ref.onChange,
            _ref$carrierNumbersBy = _ref.carrierNumbersByString,
            carrierNumbersByString =
              void 0 === _ref$carrierNumbersBy ? DEFAULT_CARRIER_NUMBERS_BY_STRING : _ref$carrierNumbersBy,
            _ref$className = _ref.className,
            className = void 0 === _ref$className ? '' : _ref$className,
            _ref$carrierNumberDis = _ref.carrierNumberDisabled,
            carrierNumberDisabled = void 0 !== _ref$carrierNumberDis && _ref$carrierNumberDis,
            _ref$firstSerialDisab = _ref.firstSerialDisabled,
            firstSerialDisabled = void 0 !== _ref$firstSerialDisab && _ref$firstSerialDisab,
            _ref$secondSerialDisa = _ref.secondSerialDisabled,
            secondSerialDisabled = void 0 !== _ref$secondSerialDisa && _ref$secondSerialDisa,
            selectBoxOptions = carrierNumbersByString.map(function (number) {
              return { label: number, value: number };
            }),
            carrierNumberSelectRef = (0, react.useRef)(null),
            firstSerialInputRef = (0, react.useRef)(null),
            secondSerialInputRef = (0, react.useRef)(null);
          (0, react.useImperativeHandle)(ref, function () {
            return {
              getValue: function getValue() {
                return carrierNumber + '-' + firstSerial + '-' + secondSerial;
              },
              focusCarrierNumber: function focusCarrierNumber() {
                var _carrierNumberSelectR;
                null === (_carrierNumberSelectR = carrierNumberSelectRef.current) ||
                  void 0 === _carrierNumberSelectR ||
                  _carrierNumberSelectR.focus();
              },
              focusFirstSerial: function focusFirstSerial() {
                var _firstSerialInputRef$;
                null === (_firstSerialInputRef$ = firstSerialInputRef.current) ||
                  void 0 === _firstSerialInputRef$ ||
                  _firstSerialInputRef$.focus();
              },
              focusSecondSerial: function focusSecondSerial() {
                var _secondSerialInputRef;
                null === (_secondSerialInputRef = secondSerialInputRef.current) ||
                  void 0 === _secondSerialInputRef ||
                  _secondSerialInputRef.focus();
              },
            };
          });
          return (0, jsx_runtime.jsxs)('div', {
            className: 'phone-number-input ' + className,
            children: [
              (0, jsx_runtime.jsx)(SelectBox.Z, {
                ref: carrierNumberSelectRef,
                value: carrierNumber,
                options: selectBoxOptions,
                hasEmptyOption: !0,
                onSelect: function handleMobileCarrierNumberSelect(e) {
                  var _firstSerialInputRef$2,
                    carrierNumber = e.currentTarget.value;
                  null == onCarrierNumberSelect || onCarrierNumberSelect(e),
                    null == onChange || onChange(carrierNumber + '-' + firstSerial + '-' + secondSerial),
                    null === (_firstSerialInputRef$2 = firstSerialInputRef.current) ||
                      void 0 === _firstSerialInputRef$2 ||
                      _firstSerialInputRef$2.focus();
                },
                disabled: carrierNumberDisabled,
              }),
              (0, jsx_runtime.jsx)('div', { className: 'phone-number-input__bar' }),
              (0, jsx_runtime.jsx)(TextField.Z, {
                ref: firstSerialInputRef,
                className: 'phone-number-input__first-serial',
                value: firstSerial,
                onChange: function handleFirstSerialChange(e) {
                  var _secondSerialInputRef2,
                    firstSerial = e.currentTarget.value;
                  (null == onFirstSerialChange || onFirstSerialChange(e),
                  null == onChange || onChange(carrierNumber + '-' + firstSerial + '-' + secondSerial),
                  4 === firstSerial.length) &&
                    (null === (_secondSerialInputRef2 = secondSerialInputRef.current) ||
                      void 0 === _secondSerialInputRef2 ||
                      _secondSerialInputRef2.focus());
                },
                maxLength: 4,
                valid: 'NUMBER',
                disabled: firstSerialDisabled,
              }),
              (0, jsx_runtime.jsx)('div', { className: 'phone-number-input__bar' }),
              (0, jsx_runtime.jsx)(TextField.Z, {
                ref: secondSerialInputRef,
                className: 'phone-number-input__second-serial',
                value: secondSerial,
                onChange: function handleSecondSerialChange(e) {
                  var _firstSerialInputRef$3,
                    secondSerial = e.currentTarget.value;
                  (null == onSecondSerialChange || onSecondSerialChange(e),
                  null == onChange || onChange(carrierNumber + '-' + firstSerial + '-' + secondSerial),
                  secondSerial.length) ||
                    null === (_firstSerialInputRef$3 = firstSerialInputRef.current) ||
                    void 0 === _firstSerialInputRef$3 ||
                    _firstSerialInputRef$3.focus();
                },
                onBlur: function handleSecondSerialBlur(e) {
                  null == onSecondSerialBlur || onSecondSerialBlur(e);
                },
                maxLength: 4,
                valid: 'NUMBER',
                disabled: secondSerialDisabled,
              }),
            ],
          });
        });
      PhoneNumberInput.__docgenInfo = {
        description: '[휴대폰 번호 입력 인풋]\n\n- ref를 걸 수 있습니다.\n- 자동 포커싱 기능이 포함되어있습니다.',
        methods: [],
        displayName: 'PhoneNumberInput',
        props: {
          carrierNumber: { defaultValue: { value: "''", computed: !1 }, required: !1 },
          firstSerial: { defaultValue: { value: "''", computed: !1 }, required: !1 },
          secondSerial: { defaultValue: { value: "''", computed: !1 }, required: !1 },
          carrierNumbersByString: {
            defaultValue: { value: "['010', '011', '016', '017', '018', '019']", computed: !1 },
            required: !1,
          },
          className: { defaultValue: { value: "''", computed: !1 }, required: !1 },
          carrierNumberDisabled: { defaultValue: { value: 'false', computed: !1 }, required: !1 },
          firstSerialDisabled: { defaultValue: { value: 'false', computed: !1 }, required: !1 },
          secondSerialDisabled: { defaultValue: { value: 'false', computed: !1 }, required: !1 },
        },
      };
      const PhoneNumberInput_PhoneNumberInput = PhoneNumberInput;
      (PhoneNumberInput.displayName = 'PhoneNumberInput'),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['dist/esm/common/PhoneNumberInput/PhoneNumberInput.js'] = {
            name: 'PhoneNumberInput',
            docgenInfo: PhoneNumberInput.__docgenInfo,
            path: 'dist/esm/common/PhoneNumberInput/PhoneNumberInput.js',
          });
      const PhoneNumberInput_stories = {
        title: 'common/PhoneNumberInput',
        component: PhoneNumberInput_PhoneNumberInput,
      };
      var Default = function Template(args) {
        return (0, jsx_runtime.jsx)(PhoneNumberInput_PhoneNumberInput, Object.assign({}, args));
      }.bind({});
      Default.parameters = Object.assign(
        { storySource: { source: '(args) => _jsx(PhoneNumberInput, { ...args })' } },
        Default.parameters
      );
      var __namedExportsOrder = ['Default'];
    },
    './dist/esm/common/SelectBox/SelectBox.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      __webpack_require__('../../node_modules/core-js/modules/es.array.map.js');
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        ),
        SelectBox = (0, __webpack_require__('../../node_modules/react/index.js').forwardRef)(function (_ref, ref) {
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
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('span', {
            className: 'select-box ' + className + ' ' + (hasSortOption ? 'select-box--sort' : ''),
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)('select', {
              ref,
              onChange: onSelect,
              value,
              disabled,
              children: [
                hasEmptyOption &&
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('option', {
                    value: '',
                    disabled: !0,
                    children: emptyOptionLabel,
                  }),
                options &&
                  options.map(function (item) {
                    return (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('option', { value: item.value, disabled: null == item ? void 0 : item.disabled, children: item.label }, item.value);
                  }),
              ],
            }),
          });
        });
      SelectBox.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'SelectBox',
        props: {
          value: { defaultValue: { value: "''", computed: !1 }, required: !1 },
          hasEmptyOption: { defaultValue: { value: 'false', computed: !1 }, required: !1 },
          emptyOptionLabel: { defaultValue: { value: "''", computed: !1 }, required: !1 },
          hasSortOption: { defaultValue: { value: 'false', computed: !1 }, required: !1 },
          className: { defaultValue: { value: "''", computed: !1 }, required: !1 },
        },
      };
      const __WEBPACK_DEFAULT_EXPORT__ = SelectBox;
      (SelectBox.displayName = 'SelectBox'),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['dist/esm/common/SelectBox/SelectBox.js'] = {
            name: 'SelectBox',
            docgenInfo: SelectBox.__docgenInfo,
            path: 'dist/esm/common/SelectBox/SelectBox.js',
          });
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
    '../../node_modules/core-js/modules/es.array.index-of.js': (
      __unused_webpack_module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
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
  },
]);
