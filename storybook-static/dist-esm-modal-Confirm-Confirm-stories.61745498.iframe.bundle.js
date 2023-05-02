/*! For license information please see dist-esm-modal-Confirm-Confirm-stories.61745498.iframe.bundle.js.LICENSE.txt */
'use strict';
(self.webpackChunk_shopby_react_components = self.webpackChunk_shopby_react_components || []).push([
  [5882, 1890],
  {
    './dist/esm/modal/Confirm/Confirm.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          IconConfirm: () => IconConfirm,
          MessageConfirm: () => MessageConfirm,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__('../../node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.function.bind.js');
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        ),
        _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./dist/esm/common/Button/Button.js'),
        _Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./dist/esm/modal/Modal.js'),
        _ModalProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./dist/esm/modal/ModalProvider.js');
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: 'Modal/Confirm',
        component: __webpack_require__('./dist/esm/modal/Confirm/Confirm.js').default,
      };
      var MockContent = function MockContent(props) {
          var openConfirm = (0, _ModalProvider__WEBPACK_IMPORTED_MODULE_4__.$7)().openConfirm;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_common__WEBPACK_IMPORTED_MODULE_5__.Z, {
            label: 'confirm 창 열기',
            onClick: function onClick() {
              openConfirm(Object.assign({}, props));
            },
          });
        },
        Default = function Default(props) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
            _ModalProvider__WEBPACK_IMPORTED_MODULE_4__.ZP,
            {
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MockContent, Object.assign({}, props)),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Modal__WEBPACK_IMPORTED_MODULE_6__.Z, {}),
              ],
            }
          );
        },
        MessageConfirm = Default.bind({});
      MessageConfirm.args = {
        message: '게시글을 삭제하시겠습니까?',
        iconPath: null,
        confirmLabel: '삭제하기',
        onConfirm: function onConfirm() {
          return null;
        },
        cancelLabel: '취소하기',
        onCancel: function onCancel() {
          return null;
        },
      };
      var IconConfirm = Default.bind({});
      (IconConfirm.args = {
        message: '장바구니에 담았습니다.',
        iconPath: null,
        confirmLabel: '장바구니 가기',
        onConfirm: function onConfirm() {
          return null;
        },
        cancelLabel: '쇼핑계속하기',
        onCancel: function onCancel() {
          return null;
        },
      }),
        (MessageConfirm.parameters = Object.assign(
          {
            storySource: {
              source:
                '(props) => (_jsxs(ModalProvider, { children: [_jsx(MockContent, { ...props }), _jsx(Modal, {})] }))',
            },
          },
          MessageConfirm.parameters
        )),
        (IconConfirm.parameters = Object.assign(
          {
            storySource: {
              source:
                '(props) => (_jsxs(ModalProvider, { children: [_jsx(MockContent, { ...props }), _jsx(Modal, {})] }))',
            },
          },
          IconConfirm.parameters
        ));
      var __namedExportsOrder = ['MessageConfirm', 'IconConfirm'];
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
    './dist/esm/modal/Confirm/Confirm.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, { default: () => __WEBPACK_DEFAULT_EXPORT__ });
      __webpack_require__('../../node_modules/core-js/modules/es.promise.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.object.to-string.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.object.define-property.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.symbol.description.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.symbol.iterator.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.string.iterator.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.array.iterator.js'),
        __webpack_require__('../../node_modules/core-js/modules/web.dom-collections.iterator.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.symbol.async-iterator.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.symbol.to-string-tag.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.math.to-string-tag.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.json.to-string-tag.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.object.create.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.object.get-prototype-of.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.array.for-each.js'),
        __webpack_require__('../../node_modules/core-js/modules/web.dom-collections.for-each.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.function.name.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.object.set-prototype-of.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.array.reverse.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.array.slice.js');
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          '../../node_modules/react/jsx-runtime.js'
        ),
        _common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          './dist/esm/common/VisibleComponent/VisibleComponent.js'
        ),
        _common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__('./dist/esm/common/Button/Button.js'),
        _ModalProvider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__('./dist/esm/modal/ModalProvider.js');
      function _regeneratorRuntime() {
        _regeneratorRuntime = function _regeneratorRuntime() {
          return exports;
        };
        var exports = {},
          Op = Object.prototype,
          hasOwn = Op.hasOwnProperty,
          defineProperty =
            Object.defineProperty ||
            function (obj, key, desc) {
              obj[key] = desc.value;
            },
          $Symbol = 'function' == typeof Symbol ? Symbol : {},
          iteratorSymbol = $Symbol.iterator || '@@iterator',
          asyncIteratorSymbol = $Symbol.asyncIterator || '@@asyncIterator',
          toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag';
        function define(obj, key, value) {
          return Object.defineProperty(obj, key, { value, enumerable: !0, configurable: !0, writable: !0 }), obj[key];
        }
        try {
          define({}, '');
        } catch (err) {
          define = function define(obj, key, value) {
            return (obj[key] = value);
          };
        }
        function wrap(innerFn, outerFn, self, tryLocsList) {
          var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
            generator = Object.create(protoGenerator.prototype),
            context = new Context(tryLocsList || []);
          return defineProperty(generator, '_invoke', { value: makeInvokeMethod(innerFn, self, context) }), generator;
        }
        function tryCatch(fn, obj, arg) {
          try {
            return { type: 'normal', arg: fn.call(obj, arg) };
          } catch (err) {
            return { type: 'throw', arg: err };
          }
        }
        exports.wrap = wrap;
        var ContinueSentinel = {};
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}
        var IteratorPrototype = {};
        define(IteratorPrototype, iteratorSymbol, function () {
          return this;
        });
        var getProto = Object.getPrototypeOf,
          NativeIteratorPrototype = getProto && getProto(getProto(values([])));
        NativeIteratorPrototype &&
          NativeIteratorPrototype !== Op &&
          hasOwn.call(NativeIteratorPrototype, iteratorSymbol) &&
          (IteratorPrototype = NativeIteratorPrototype);
        var Gp = (GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype));
        function defineIteratorMethods(prototype) {
          ['next', 'throw', 'return'].forEach(function (method) {
            define(prototype, method, function (arg) {
              return this._invoke(method, arg);
            });
          });
        }
        function AsyncIterator(generator, PromiseImpl) {
          function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if ('throw' !== record.type) {
              var result = record.arg,
                value = result.value;
              return value && 'object' == typeof value && hasOwn.call(value, '__await')
                ? PromiseImpl.resolve(value.__await).then(
                    function (value) {
                      invoke('next', value, resolve, reject);
                    },
                    function (err) {
                      invoke('throw', err, resolve, reject);
                    }
                  )
                : PromiseImpl.resolve(value).then(
                    function (unwrapped) {
                      (result.value = unwrapped), resolve(result);
                    },
                    function (error) {
                      return invoke('throw', error, resolve, reject);
                    }
                  );
            }
            reject(record.arg);
          }
          var previousPromise;
          defineProperty(this, '_invoke', {
            value: function value(method, arg) {
              function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function (resolve, reject) {
                  invoke(method, arg, resolve, reject);
                });
              }
              return (previousPromise = previousPromise
                ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
                : callInvokeWithMethodAndArg());
            },
          });
        }
        function makeInvokeMethod(innerFn, self, context) {
          var state = 'suspendedStart';
          return function (method, arg) {
            if ('executing' === state) throw new Error('Generator is already running');
            if ('completed' === state) {
              if ('throw' === method) throw arg;
              return doneResult();
            }
            for (context.method = method, context.arg = arg; ; ) {
              var delegate = context.delegate;
              if (delegate) {
                var delegateResult = maybeInvokeDelegate(delegate, context);
                if (delegateResult) {
                  if (delegateResult === ContinueSentinel) continue;
                  return delegateResult;
                }
              }
              if ('next' === context.method) context.sent = context._sent = context.arg;
              else if ('throw' === context.method) {
                if ('suspendedStart' === state) throw ((state = 'completed'), context.arg);
                context.dispatchException(context.arg);
              } else 'return' === context.method && context.abrupt('return', context.arg);
              state = 'executing';
              var record = tryCatch(innerFn, self, context);
              if ('normal' === record.type) {
                if (((state = context.done ? 'completed' : 'suspendedYield'), record.arg === ContinueSentinel))
                  continue;
                return { value: record.arg, done: context.done };
              }
              'throw' === record.type &&
                ((state = 'completed'), (context.method = 'throw'), (context.arg = record.arg));
            }
          };
        }
        function maybeInvokeDelegate(delegate, context) {
          var methodName = context.method,
            method = delegate.iterator[methodName];
          if (void 0 === method)
            return (
              (context.delegate = null),
              ('throw' === methodName &&
                delegate.iterator.return &&
                ((context.method = 'return'),
                (context.arg = void 0),
                maybeInvokeDelegate(delegate, context),
                'throw' === context.method)) ||
                ('return' !== methodName &&
                  ((context.method = 'throw'),
                  (context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")))),
              ContinueSentinel
            );
          var record = tryCatch(method, delegate.iterator, context.arg);
          if ('throw' === record.type)
            return (context.method = 'throw'), (context.arg = record.arg), (context.delegate = null), ContinueSentinel;
          var info = record.arg;
          return info
            ? info.done
              ? ((context[delegate.resultName] = info.value),
                (context.next = delegate.nextLoc),
                'return' !== context.method && ((context.method = 'next'), (context.arg = void 0)),
                (context.delegate = null),
                ContinueSentinel)
              : info
            : ((context.method = 'throw'),
              (context.arg = new TypeError('iterator result is not an object')),
              (context.delegate = null),
              ContinueSentinel);
        }
        function pushTryEntry(locs) {
          var entry = { tryLoc: locs[0] };
          1 in locs && (entry.catchLoc = locs[1]),
            2 in locs && ((entry.finallyLoc = locs[2]), (entry.afterLoc = locs[3])),
            this.tryEntries.push(entry);
        }
        function resetTryEntry(entry) {
          var record = entry.completion || {};
          (record.type = 'normal'), delete record.arg, (entry.completion = record);
        }
        function Context(tryLocsList) {
          (this.tryEntries = [{ tryLoc: 'root' }]), tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
        }
        function values(iterable) {
          if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if ('function' == typeof iterable.next) return iterable;
            if (!isNaN(iterable.length)) {
              var i = -1,
                next = function next() {
                  for (; ++i < iterable.length; )
                    if (hasOwn.call(iterable, i)) return (next.value = iterable[i]), (next.done = !1), next;
                  return (next.value = void 0), (next.done = !0), next;
                };
              return (next.next = next);
            }
          }
          return { next: doneResult };
        }
        function doneResult() {
          return { value: void 0, done: !0 };
        }
        return (
          (GeneratorFunction.prototype = GeneratorFunctionPrototype),
          defineProperty(Gp, 'constructor', { value: GeneratorFunctionPrototype, configurable: !0 }),
          defineProperty(GeneratorFunctionPrototype, 'constructor', { value: GeneratorFunction, configurable: !0 }),
          (GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, 'GeneratorFunction')),
          (exports.isGeneratorFunction = function (genFun) {
            var ctor = 'function' == typeof genFun && genFun.constructor;
            return !!ctor && (ctor === GeneratorFunction || 'GeneratorFunction' === (ctor.displayName || ctor.name));
          }),
          (exports.mark = function (genFun) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
                : ((genFun.__proto__ = GeneratorFunctionPrototype),
                  define(genFun, toStringTagSymbol, 'GeneratorFunction')),
              (genFun.prototype = Object.create(Gp)),
              genFun
            );
          }),
          (exports.awrap = function (arg) {
            return { __await: arg };
          }),
          defineIteratorMethods(AsyncIterator.prototype),
          define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
            return this;
          }),
          (exports.AsyncIterator = AsyncIterator),
          (exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
            void 0 === PromiseImpl && (PromiseImpl = Promise);
            var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
            return exports.isGeneratorFunction(outerFn)
              ? iter
              : iter.next().then(function (result) {
                  return result.done ? result.value : iter.next();
                });
          }),
          defineIteratorMethods(Gp),
          define(Gp, toStringTagSymbol, 'Generator'),
          define(Gp, iteratorSymbol, function () {
            return this;
          }),
          define(Gp, 'toString', function () {
            return '[object Generator]';
          }),
          (exports.keys = function (val) {
            var object = Object(val),
              keys = [];
            for (var key in object) keys.push(key);
            return (
              keys.reverse(),
              function next() {
                for (; keys.length; ) {
                  var key = keys.pop();
                  if (key in object) return (next.value = key), (next.done = !1), next;
                }
                return (next.done = !0), next;
              }
            );
          }),
          (exports.values = values),
          (Context.prototype = {
            constructor: Context,
            reset: function reset(skipTempReset) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(resetTryEntry),
                !skipTempReset)
              )
                for (var name in this)
                  't' === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = void 0);
            },
            stop: function stop() {
              this.done = !0;
              var rootRecord = this.tryEntries[0].completion;
              if ('throw' === rootRecord.type) throw rootRecord.arg;
              return this.rval;
            },
            dispatchException: function dispatchException(exception) {
              if (this.done) throw exception;
              var context = this;
              function handle(loc, caught) {
                return (
                  (record.type = 'throw'),
                  (record.arg = exception),
                  (context.next = loc),
                  caught && ((context.method = 'next'), (context.arg = void 0)),
                  !!caught
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i],
                  record = entry.completion;
                if ('root' === entry.tryLoc) return handle('end');
                if (entry.tryLoc <= this.prev) {
                  var hasCatch = hasOwn.call(entry, 'catchLoc'),
                    hasFinally = hasOwn.call(entry, 'finallyLoc');
                  if (hasCatch && hasFinally) {
                    if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                    if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                  } else if (hasCatch) {
                    if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                  } else {
                    if (!hasFinally) throw new Error('try statement without catch or finally');
                    if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                  }
                }
              }
            },
            abrupt: function abrupt(type, arg) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, 'finallyLoc') && this.prev < entry.finallyLoc) {
                  var finallyEntry = entry;
                  break;
                }
              }
              finallyEntry &&
                ('break' === type || 'continue' === type) &&
                finallyEntry.tryLoc <= arg &&
                arg <= finallyEntry.finallyLoc &&
                (finallyEntry = null);
              var record = finallyEntry ? finallyEntry.completion : {};
              return (
                (record.type = type),
                (record.arg = arg),
                finallyEntry
                  ? ((this.method = 'next'), (this.next = finallyEntry.finallyLoc), ContinueSentinel)
                  : this.complete(record)
              );
            },
            complete: function complete(record, afterLoc) {
              if ('throw' === record.type) throw record.arg;
              return (
                'break' === record.type || 'continue' === record.type
                  ? (this.next = record.arg)
                  : 'return' === record.type
                  ? ((this.rval = this.arg = record.arg), (this.method = 'return'), (this.next = 'end'))
                  : 'normal' === record.type && afterLoc && (this.next = afterLoc),
                ContinueSentinel
              );
            },
            finish: function finish(finallyLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc)
                  return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
              }
            },
            catch: function _catch(tryLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                  var record = entry.completion;
                  if ('throw' === record.type) {
                    var thrown = record.arg;
                    resetTryEntry(entry);
                  }
                  return thrown;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function delegateYield(iterable, resultName, nextLoc) {
              return (
                (this.delegate = { iterator: values(iterable), resultName, nextLoc }),
                'next' === this.method && (this.arg = void 0),
                ContinueSentinel
              );
            },
          }),
          exports
        );
      }
      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg),
            value = info.value;
        } catch (error) {
          return void reject(error);
        }
        info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw);
      }
      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
            args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
            }
            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
            }
            _next(void 0);
          });
        };
      }
      var IconTemplate = function IconTemplate(_ref) {
        var message = _ref.message,
          iconPath = _ref.iconPath;
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)('div', {
          className: 'modal__content modal__content--confirm',
          children: [
            iconPath &&
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)('img', { src: iconPath, alt: '컨펌창 아이콘' }),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)('span', {
              className: 'modal__text',
              children: message,
            }),
          ],
        });
      };
      const __WEBPACK_DEFAULT_EXPORT__ = function Confirm() {
        var closeConfirm = (0, _ModalProvider__WEBPACK_IMPORTED_MODULE_22__.$7)().closeConfirm,
          _useModalStateContext2 = (0, _ModalProvider__WEBPACK_IMPORTED_MODULE_22__.Zy)().confirmState,
          isOpen = _useModalStateContext2.isOpen,
          message = _useModalStateContext2.message,
          iconPath = _useModalStateContext2.iconPath,
          confirmLabel = _useModalStateContext2.confirmLabel,
          _onConfirm = _useModalStateContext2.onConfirm,
          cancelLabel = _useModalStateContext2.cancelLabel,
          _onCancel = _useModalStateContext2.onCancel,
          Content = _useModalStateContext2.Content;
        if (!isOpen) return null;
        var onConfirm = (function () {
            var _ref2 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee() {
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  for (;;)
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        return (_context.next = 2), null == _onConfirm ? void 0 : _onConfirm();
                      case 2:
                        return (_context.next = 4), closeConfirm();
                      case 4:
                      case 'end':
                        return _context.stop();
                    }
                }, _callee);
              })
            );
            return function onConfirm() {
              return _ref2.apply(this, arguments);
            };
          })(),
          onCancel = (function () {
            var _ref3 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee2() {
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  for (;;)
                    switch ((_context2.prev = _context2.next)) {
                      case 0:
                        return (_context2.next = 2), null == _onCancel ? void 0 : _onCancel();
                      case 2:
                        return (_context2.next = 4), closeConfirm();
                      case 4:
                      case 'end':
                        return _context2.stop();
                    }
                }, _callee2);
              })
            );
            return function onCancel() {
              return _ref3.apply(this, arguments);
            };
          })();
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)('div', {
          className: 'modal__box modal__box--confirm',
          children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)('div', {
              className: 'modal__content',
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(
                _common__WEBPACK_IMPORTED_MODULE_23__.Z,
                {
                  shows: !!Content,
                  TruthyComponent: Content,
                  FalsyComponent: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(IconTemplate, {
                    message,
                    iconPath,
                  }),
                }
              ),
            }),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)('div', {
              className: 'modal__btns',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_common__WEBPACK_IMPORTED_MODULE_24__.Z, {
                  'data-testid': 'cancel-btn',
                  label: cancelLabel,
                  onClick: onCancel,
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_common__WEBPACK_IMPORTED_MODULE_24__.Z, {
                  'data-testid': 'confirm-btn',
                  label: confirmLabel,
                  onClick: onConfirm,
                }),
              ],
            }),
          ],
        });
      };
    },
    './dist/esm/modal/Modal.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => modal_Modal });
      var jsx_runtime = __webpack_require__('../../node_modules/react/jsx-runtime.js'),
        react = __webpack_require__('../../node_modules/react/index.js'),
        ModalProvider = __webpack_require__('./dist/esm/modal/ModalProvider.js');
      __webpack_require__('../../node_modules/core-js/modules/es.promise.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.object.to-string.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.string.iterator.js'),
        __webpack_require__('../../node_modules/core-js/modules/es.array.iterator.js'),
        __webpack_require__('../../node_modules/core-js/modules/web.dom-collections.iterator.js');
      const modalRepository = {
        alert: (0, react.lazy)(function () {
          return __webpack_require__
            .e(4043)
            .then(__webpack_require__.bind(__webpack_require__, './dist/esm/modal/Alert/Alert.js'));
        }),
        confirm: (0, react.lazy)(function () {
          return __webpack_require__
            .e(1890)
            .then(__webpack_require__.bind(__webpack_require__, './dist/esm/modal/Confirm/Confirm.js'));
        }),
      };
      var Portal = __webpack_require__('./dist/esm/modal/Portal/Portal.js');
      const modal_Modal = function Modal(_ref) {
        var _ref$className = _ref.className,
          className = void 0 === _ref$className ? '' : _ref$className,
          _ref$id = _ref.id,
          id = void 0 === _ref$id ? '' : _ref$id,
          type = (0, ModalProvider.Zy)().modalState.type;
        if (!type) return null;
        var Content = modalRepository[type];
        return Content
          ? (0, jsx_runtime.jsx)(react.Suspense, {
              fallback: null,
              children: (0, jsx_runtime.jsxs)(Portal.Z, {
                id: 'modal-' + id,
                children: [
                  (0, jsx_runtime.jsx)('div', { className: 'tool-tip' === type ? '' : 'dim' }),
                  (0, jsx_runtime.jsx)('div', {
                    className: 'modal ' + (null != className ? className : ''),
                    children: (0, jsx_runtime.jsx)(Content, {}),
                  }),
                ],
              }),
            })
          : null;
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
