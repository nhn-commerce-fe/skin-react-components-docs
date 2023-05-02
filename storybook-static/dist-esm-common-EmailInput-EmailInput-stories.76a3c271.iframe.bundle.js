'use strict';
(self.webpackChunk_shopby_react_components = self.webpackChunk_shopby_react_components || []).push([
  [7411],
  {
    './dist/esm/common/EmailInput/EmailInput.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => EmailInput_stories,
        });
      __webpack_require__('../../node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.function.bind.js');
      var jsx_runtime = __webpack_require__('../../node_modules/react/jsx-runtime.js'),
        react = __webpack_require__('../../node_modules/react/index.js'),
        TextField = __webpack_require__('./dist/esm/common/TextField/TextField.js'),
        EmailInput = (0, react.forwardRef)(function (_ref, ref) {
          var id = _ref.id,
            domain = _ref.domain,
            onIdChange = _ref.onIdChange,
            onDomainChange = _ref.onDomainChange,
            onValueChange = _ref.onValueChange,
            onIdBlur = _ref.onIdBlur,
            onDomainBlur = _ref.onDomainBlur,
            _ref$className = _ref.className,
            className = void 0 === _ref$className ? '' : _ref$className,
            _ref$idDisabled = _ref.idDisabled,
            idDisabled = void 0 !== _ref$idDisabled && _ref$idDisabled,
            _ref$domainDisabled = _ref.domainDisabled,
            domainDisabled = void 0 !== _ref$domainDisabled && _ref$domainDisabled,
            idInputRef = (0, react.useRef)(null),
            domainInputRef = (0, react.useRef)(null);
          (0, react.useImperativeHandle)(ref, function () {
            return {
              getValue: function getValue() {
                return id + '@' + domain;
              },
              getId: function getId() {
                return id;
              },
              getDomain: function getDomain() {
                return domain;
              },
              focusId: function focusId() {
                var _idInputRef$current;
                return null === (_idInputRef$current = idInputRef.current) || void 0 === _idInputRef$current
                  ? void 0
                  : _idInputRef$current.focus();
              },
              focusDomain: function focusDomain() {
                var _domainInputRef$curre;
                return null === (_domainInputRef$curre = domainInputRef.current) || void 0 === _domainInputRef$curre
                  ? void 0
                  : _domainInputRef$curre.focus();
              },
            };
          });
          return (0, jsx_runtime.jsxs)('div', {
            className: 'email-input ' + className,
            children: [
              (0, jsx_runtime.jsx)(TextField.Z, {
                className: 'email-input__id',
                ref: idInputRef,
                value: id,
                onChange: function handleIdChange(e) {
                  var value = e.currentTarget.value;
                  null == onIdChange || onIdChange(e), null == onValueChange || onValueChange(value + '@' + domain);
                },
                onBlur: function handleIdBlur(e) {
                  null == onIdBlur || onIdBlur(e);
                },
                valid: 'EMAIL_ID',
                maxLength: 64,
                disabled: idDisabled,
              }),
              '@',
              (0, jsx_runtime.jsx)(TextField.Z, {
                className: 'email-input__domain',
                ref: domainInputRef,
                value: domain,
                onChange: function handleDomainChange(e) {
                  var value = e.currentTarget.value;
                  null == onDomainChange || onDomainChange(e), null == onValueChange || onValueChange(id + '@' + value);
                },
                onBlur: function handleDomainBlur(e) {
                  null == onDomainBlur || onDomainBlur(e);
                },
                valid: 'EMAIL_DOMAIN',
                maxLength: 255,
                disabled: domainDisabled,
              }),
            ],
          });
        });
      (EmailInput.displayName = 'EmailInput'),
        (EmailInput.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'EmailInput',
          props: {
            className: { defaultValue: { value: "''", computed: !1 }, required: !1 },
            idDisabled: { defaultValue: { value: 'false', computed: !1 }, required: !1 },
            domainDisabled: { defaultValue: { value: 'false', computed: !1 }, required: !1 },
          },
        });
      const EmailInput_EmailInput = EmailInput;
      'undefined' != typeof STORYBOOK_REACT_CLASSES &&
        (STORYBOOK_REACT_CLASSES['dist/esm/common/EmailInput/EmailInput.js'] = {
          name: 'EmailInput',
          docgenInfo: EmailInput.__docgenInfo,
          path: 'dist/esm/common/EmailInput/EmailInput.js',
        });
      const EmailInput_stories = { title: 'common/EmailInput', component: EmailInput_EmailInput };
      var Default = function Template(args) {
        return (0, jsx_runtime.jsx)(EmailInput_EmailInput, Object.assign({}, args));
      }.bind({});
      (Default.args = {}),
        (Default.parameters = Object.assign(
          { storySource: { source: '(args) => _jsx(EmailInput, { ...args })' } },
          Default.parameters
        ));
      var __namedExportsOrder = ['Default'];
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
