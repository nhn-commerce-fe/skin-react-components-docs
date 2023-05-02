'use strict';
(self.webpackChunk_shopby_react_components = self.webpackChunk_shopby_react_components || []).push([
  [3140],
  {
    '../shared/dist/esm/constants/cookie.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, {
        JX: () => AUTH_COOKIE_KEY_NAME,
        Tk: () => TEST_ACCESS_TOKEN,
        i8: () => GUEST_COOKIE_KEY_NAME,
        qb: () => DORMANCY_AUTH_COOKIE_KEY_NAME,
        uL: () => AGE_COOKIE_KEY_NAME,
      });
      var AUTH_COOKIE_KEY_NAME = 'SSID',
        DORMANCY_AUTH_COOKIE_KEY_NAME = 'SSDID',
        TEST_ACCESS_TOKEN = 'TEST',
        GUEST_COOKIE_KEY_NAME = 'SSGUEST',
        AGE_COOKIE_KEY_NAME = 'SS_AGE';
    },
    '../shared/dist/esm/constants/errorCode.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { C: () => SERVER_ERROR, y: () => CLIENT_ERROR });
      var CLIENT_ERROR = {
          RECENT_KEYWORD_FAIL_KEYWORD: 'CECO001',
          NONEXISTENT_MEMBER_INFORMATION: 'CECO002',
          NO_AUTHORIZATION: 'CECO003',
          CLIENT_ID_IS_NOT_IN_ENV: 'CECO004',
          GUEST_TOKEN_EXPIRED: 'CECO005',
          NON_EXIST_MEMBER_SEARCH_ACCOUNT: 'CEME001',
          ADDRESS_FAIL_KEYWORD: 'CEMA001',
          INQUIRY_FAIL_HAS_NO_TITLE: 'CEMA002',
          INQUIRY_FAIL_HAS_NO_CONTENT: 'CEMA003',
          SIGN_IN_FAIL_MEMBER_ID: 'CEAU001',
          SIGN_IN_FAIL_PASSWORD: 'CEAU002',
          SIGN_UP_FAIL_MEMBER_ID: 'CEAU003',
          SIGN_UP_FAIL_PASSWORD: 'CEAU004',
          SIGN_IN_FAIL_ORDER_NO: 'CEAU005',
          SIGN_IN_FAIL_ORDER_PASSWORD: 'CEAU006',
          SIGN_IN_FAIL_CODE: 'CEAU007',
          SIGN_IN_FAIL_PROVIDER: 'CEAU008',
          SIGN_IN_FAIL_REDIRECT_URI: 'CEAU009',
          CHECK_FAIL_PASSWORD: 'CEAU010',
          INVALID_SIGN_IN_INFORMATION: 'CEAU011',
          EMPTY_CERTIFICATED_NUMBER: 'CEAU012',
          BAD_CERTIFICATED_NUMBER: 'CEAU013',
          INCORRECT_LENGTH_CERTIFICATED_NUMBER: 'CEAU014',
          PRODUCT_FAIL_PRODUCT_NO: 'CEPR001',
          PRODUCT_FAIL_OPTION_CLASS: 'CEPR002',
          OPTION_FAIL_DUPLICATE_OPTION: 'CEPR003',
          PRODUCT_FAIL_LIMIT_OPTION_COUNT: 'CEPR004',
          NONEXISTENT_PRODUCT: 'CEPR005',
          ADULT_CERTIFIED_PRODUCT: 'CEPR006',
          INACCESSIBLE_PRODUCT: 'CEPR007',
          NOT_SELECTED_OPTION: 'CEPR008',
          NOT_INSERTED_REQUIRED_TEXT_OPTION: 'CEPR009',
          PRODUCT_DETAIL_FAIL_PROHIBITION_STATUS: 'CEPR010',
          OPTION_FAIL_INVALID_COUNT: 'CEPR011',
          ORDER_SHEET_FAIL_NO_ORDER_SHEET: 'CEOR001',
          SHIPPING_ADDRESS_FAIL_NO_POSSIBLE_ADDRESS: 'CEOR002',
          COUPON_FAIL_NO_FETCHED_COUPON: 'CEOR004',
          COUPON_FAIL_IMPOSSIBLE_PRODUCT_COUPON: 'CEOR005',
          COUPON_FAIL_IMPOSSIBLE_CART_COUPON: 'CEOR006',
          COUPON_FAIL_THERE_IS_NO_SELECTED_COUPON: 'CEOR007',
          COUPON_FAIL_REQUIRE_PRODUCT_NO: 'CEOR008',
          CART_FAIL_REQUIRE_FETCHING: 'CEOR009',
          ORDER_SHEET_FAIL_HAS_NO_PRODUCTS: 'CEOR010',
          ORDER_SHEET_FAIL_HAS_ZERO_COUNT_PRODUCT: 'CEOR011',
          ORDER_SHEET_FAIL_NO_NCP_PAY_SCRIPT: 'CEOR012',
          MY_ORDER_FAIL_NO_FETCHED_ORDER_INFO: 'CEOR013',
          MY_ORDER_FAIL_NO_ORDER: 'CEOR014',
          MY_ORDER_FAIL_NOT_YOUR_ORDER: 'CEOR015',
          MY_ORDER_FAIL_NO_FETCHED_ORDERS: 'CEOR016',
          NAVER_PAY_FAIL_NO_NAVER_PAY_BUTTON_SCRIPT: 'CEOR017',
          NAVER_PAY_FAIL_NO_ORDER_CONFIG: 'CEOR018',
          NAVER_PAY_FAIL_NO_NCP_PAY_SCRIPT: 'CEOR019',
          NAVER_PAY_FAIL_NO_ITEMS: 'CEOR020',
          NAVER_PAY_FAIL_THERE_IS_NO_PRODUCT_NO: 'CEOR021',
          ORDER_FAIL_MUST_SELECT_PAY_METHOD: 'CEOR022',
          CLAIM_FAIL_NO_CLAIM_SELECT_STATUS: 'CECL001',
          CLAIM_FAIL_INVALID_ORDER_OPTION_NO: 'CECL002',
          MY_CLAIM_FAIL_NO_FETCHED_ORDERS: 'CECL003',
          QUERY_ENABLED: 'CEQU001',
          MUTATION_ENABLED: 'CEMU001',
          FORBIDDEN_ARTICLE: 'CEDI001',
          REVIEW_FAIL_HAS_NO_CONTENT: 'CEDI002',
          PRODUCT_INQUIRY_FAIL_HAS_NO_CONTENT: 'CEDI004',
          PRODUCT_INQUIRY_FAIL_HAS_NO_TITLE: 'CEDI005',
          INTERNAL_SERVER_ERROR: 'CEDI006',
          IMAGE_FILE_FAIL_NO_EMPTY_IMAGES: 'CEST001',
          IMAGE_FILE_FAIL_LIMIT_FILE_SIZE: 'CEST002',
          IMAGE_FILE_FAIL_ONLY_IMAGE_FILE: 'CEST003',
          IMAGE_FILE_FAIL_LIMIT_COUNT: 'CEST004',
          IMAGE_FILE_FAIL_ALL_DUPLICATE_IMAGES: 'CEST005',
          NO_EXHIBITION: 'CEST006',
          NOT_IN_PROGRESS: 'CEST007',
          INACCESSIBLE: 'CEST008',
          COUPON_FAIL_REQUIRED_PROMOTION_CODE: 'CEPR001',
          COUPON_FAIL_NOT_VALID_COUPON_CODE: 'CEPR002',
        },
        SERVER_ERROR = {
          PRDS0003: 'NONEXISTENT_MEMBER_INFORMATION',
          M0013: 'NO_AUTHORIZATION',
          M0019: 'INVALID_SIGN_IN_INFORMATION',
          M0010: 'NON_EXIST_MEMBER_SEARCH_ACCOUNT',
          SPEC0001: 'NONEXISTENT_PRODUCT',
          E0008: 'ADULT_CERTIFIED_PRODUCT',
          PNPE001: 'INACCESSIBLE_PRODUCT',
          FNEC0006: 'INTERNAL_SERVER_ERROR',
          B0006: 'FORBIDDEN_ARTICLE',
          EVEC0001: 'NO_EXHIBITION',
          EVEC0002: 'NOT_IN_PROGRESS',
          EVEC0003: 'INACCESSIBLE',
          NCPE0002: 'BAD_REQUEST',
          M0034: 'BAD_REQUEST',
          E0013: 'BAD_CERTIFICATED_NUMBER',
          NCPE0003: 'NO_AUTHORIZATION',
          O7001: 'GUEST_TOKEN_EXPIRED',
          OD0005: 'MY_ORDER_FAIL_NO_ORDER',
          O0016: 'MY_ORDER_FAIL_NOT_YOUR_ORDER',
          PPVE0003: 'ADULT_CERTIFIED_PRODUCT',
          E1011: 'GUEST_TOKEN_EXPIRED',
          C0021: 'COUPON_FAIL_NOT_VALID_COUPON_CODE',
        };
    },
    '../shared/dist/esm/constants/errorMessage.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { d: () => CLIENT_ERROR_MESSAGE });
      var _CLIENT_ERROR_MESSAGE,
        _errorCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../shared/dist/esm/constants/errorCode.js'),
        CLIENT_ERROR_MESSAGE =
          (((_CLIENT_ERROR_MESSAGE = {})[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.ADULT_CERTIFIED_PRODUCT] =
            '이 상품은 성인만 구매 가능합니다.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.NONEXISTENT_PRODUCT] =
            '상품번호를 확인하세요. 상품이 존재하지 않습니다.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.INACCESSIBLE_PRODUCT] =
            '접근 불가한 상품입니다.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.NOT_INSERTED_REQUIRED_TEXT_OPTION] =
            '텍스트 옵션을 입력해주세요.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.NOT_SELECTED_OPTION] =
            '옵션을 선택해주세요.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.GUEST_TOKEN_EXPIRED] =
            '인증 정보가 만료되었습니다.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.PRODUCT_DETAIL_FAIL_PROHIBITION_STATUS] =
            '접근 불가한 상품입니다.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.OPTION_FAIL_DUPLICATE_OPTION] =
            '이미 선택된 옵션입니다.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.OPTION_FAIL_INVALID_COUNT] =
            '수량을 확인하세요.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.NO_AUTHORIZATION] =
            '로그인하셔야 본 서비스를 이용하실 수 있습니다.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.EMPTY_CERTIFICATED_NUMBER] =
            '인증번호를 입력해주세요.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.BAD_CERTIFICATED_NUMBER] =
            '잘못된 인증번호입니다.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.INCORRECT_LENGTH_CERTIFICATED_NUMBER] =
            '인증번호는 6자리입니다.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.FORBIDDEN_ARTICLE] =
            '비밀글 조회 권한이 없습니다.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.REVIEW_FAIL_HAS_NO_CONTENT] =
            '상품후기 내용을 입력해주세요.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.PRODUCT_INQUIRY_FAIL_HAS_NO_CONTENT] =
            '상품문의 내용을 입력해주세요.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.PRODUCT_INQUIRY_FAIL_HAS_NO_TITLE] =
            '상품문의 제목을 입력해주세요.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.NO_EXHIBITION] =
            '기획전을 찾을 수 없습니다.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.NOT_IN_PROGRESS] =
            '현재 진행중인 기획전이 아닙니다.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.INACCESSIBLE] =
            '접근할 수 없는 기획전 입니다.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.INTERNAL_SERVER_ERROR] =
            '[feign 통신] 내부 오류가 발생하였습니다.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.INVALID_SIGN_IN_INFORMATION] =
            '아이디 또는 비밀번호를 다시 한번 확인해 주시기 바랍니다.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.NON_EXIST_MEMBER_SEARCH_ACCOUNT] =
            '회원정보를 찾을 수 없습니다.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.ORDER_SHEET_FAIL_NO_ORDER_SHEET] =
            '먼저 fetchOrderSheet 메서드를 호출하여 주문서 데이터를 가져와야합니다.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.ORDER_SHEET_FAIL_HAS_NO_PRODUCTS] =
            '주문할 상품을 선택해주세요.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.ORDER_SHEET_FAIL_HAS_ZERO_COUNT_PRODUCT] =
            '선택 수량이 0개인 상품이 포함되어있습니다.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.ORDER_SHEET_FAIL_NO_NCP_PAY_SCRIPT] =
            'NCPPay 스크립트를 먼저 로드해주세요.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.CLIENT_ID_IS_NOT_IN_ENV] =
            'client ID를 먼저 세팅해주세요.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.CART_FAIL_REQUIRE_FETCHING] =
            '먼저 FETCH_CART 쿼리를 실행해주세요.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.SHIPPING_ADDRESS_FAIL_NO_POSSIBLE_ADDRESS] =
            '먼저 fetchPossibleShippingAddress 메서드를 호출하여 배송지 목록을 가져와야합니다.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.MY_ORDER_FAIL_NO_FETCHED_ORDER_INFO] =
            '먼저 orderInfo를 불러와야합니다. FETCH_ORDER_INFO 혹은 FETCH_GUEST_ORDER_INFO를 진행해주세요.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.MY_ORDER_FAIL_NO_ORDER] =
            '존재하지 않는 주문입니다.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.MY_ORDER_FAIL_NOT_YOUR_ORDER] =
            '확인할 수 없는 주문입니다.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.MY_ORDER_FAIL_NO_FETCHED_ORDERS] =
            '먼저 주문 내역을 조회해야합니다. FETCH_ORDERS 를 진행해주세요.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.NAVER_PAY_FAIL_NO_ORDER_CONFIG] =
            '네이버페이 주문형을 사용할 수 없는 몰입니다.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.NAVER_PAY_FAIL_NO_NCP_PAY_SCRIPT] =
            'NcpPay script를 먼저 로드해야합니다'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.NAVER_PAY_FAIL_NO_ITEMS] =
            '주문할 상품을 선택해주세요.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.NAVER_PAY_FAIL_THERE_IS_NO_PRODUCT_NO] =
            '찜할 상품 번호가 결정되지 않았습니다.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.ORDER_FAIL_MUST_SELECT_PAY_METHOD] =
            '결제 가능한 수단이 존재하지 않습니다.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.CLAIM_FAIL_NO_CLAIM_SELECT_STATUS] =
            '먼저 FETCH_CLAIM_INFO_BY_ORDER_OPTION_NO 쿼리를 실행해주세요.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.CLAIM_FAIL_INVALID_ORDER_OPTION_NO] =
            '올바르지 않은 orderOptionNo 입니다'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.ADDRESS_FAIL_KEYWORD] =
            'keyword를 반드시 넣어주세요.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.INQUIRY_FAIL_HAS_NO_TITLE] =
            '제목을 입력해주세요.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.INQUIRY_FAIL_HAS_NO_CONTENT] =
            '내용을 입력해주세요.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.COUPON_FAIL_REQUIRED_PROMOTION_CODE] =
            '쿠폰 번호를 입력해주세요.'),
          (_CLIENT_ERROR_MESSAGE[_errorCode__WEBPACK_IMPORTED_MODULE_0__.y.COUPON_FAIL_NOT_VALID_COUPON_CODE] =
            '유효하지 않은 쿠폰 번호입니다.'),
          _CLIENT_ERROR_MESSAGE);
    },
    '../shared/dist/esm/constants/index.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, {
        uL: () => cookie.uL,
        JX: () => cookie.JX,
        yw: () => errorCode.y,
        dE: () => errorMessage.d,
        L8: () => DEFAULT_PAGE_SIZE,
        eq: () => DEPTH_OPTION_MAP,
        qb: () => cookie.qb,
        SF: () => GUEST_CART,
        i8: () => cookie.i8,
        NL: () => HTTP_STATUS_CODE,
        Fg: () => ICON_SET,
        Z9: () => OPTION_SEPARATOR,
        dY: () => PAY_TYPES_OF_WHICH_ICON_HAS_NOT_BLACK_MODIFIER,
        _d: () => PAY_TYPES_THAT_SHOULD_SHOW_BANK_INFO,
        UP: () => PAY_TYPES_WHICH_DO_NOT_NEED_LABEL,
        Sj: () => PAY_TYPE_ICON_NAME_MAP,
        MX: () => PAY_TYPE_ICON_NAME_MODIFIER,
        gn: () => PLATFORM_TYPE,
        vA: () => PURCHASE_OPTION_SALE_LABEL,
        Os: () => PURCHASE_OPTION_SALE_TYPE,
        Hb: () => RECENT_KEYWORD_SET,
        Iu: () => REG_EX_FOR_VALIDATION,
        xX: () => REG_EX_FOR_WORD_CASE,
        nZ: () => SECTION_CODE,
        CA: () => errorCode.C,
        rL: () => THUMB_LIST_TYPE,
        gP: () => TYPES_WHICH_NEED_COLLECTION_INFO,
      });
      var cookie = __webpack_require__('../shared/dist/esm/constants/cookie.js'),
        errorCode = __webpack_require__('../shared/dist/esm/constants/errorCode.js'),
        REG_EX_FOR_VALIDATION = {
          NUMBER: /[^0-9]/g,
          ENGLISH_NUMBER: /[^0-9a-zA-Z]/g,
          ENGLISH_NUMBER_SPECIAL: /[^a-zA-Z\\d`~!@#$%^&*()-_=+]/g,
          CURRENCY: /[^0-9,\s]/g,
          NEGATIVE_NUM: /[^0-9-]+/g,
          DECIMAL_NUM: /[^0-9.]+/g,
          NO_SPECIAL: /[^a-zA-Z0-9ㄱ-힣]/g,
          NO_PART_SPECIAL: /['"‘”<>&]/g,
          NO_SPECIAL_SPACE: /[^a-zA-Z0-9ㄱ-힣\s]/g,
          NO_SPACE: /\s/g,
          NO_ENGLISH: /[a-zA-Z]/g,
          NO_NUMBER: /[0-9]/g,
          NO_PASSWORD_SPECIAL: /[!@#$%^&*+=-_.()]/g,
          NON_PASSWORD_SPECIAL: /[^0-9a-zA-Zㄱ-힣!@#$%^&*+=-_.()]/g,
          NO_KOREAN: /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g,
          NO_COMMON_SPECIAL: /['"<>₩\\‘”`]/g,
          NO_QUATATION: /['"‘”]/g,
          EMAIL_ID: /[^A-Za-z0-9!#$%&'*+\-/=?^_`{|}~.]/g,
          EMAIL_DOMAIN: /[^a-zA-Z0-9.-]/g,
        },
        REG_EX_FOR_WORD_CASE = { CAMEL_CASE: /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g },
        RECENT_KEYWORD_SET = 'RECENT_KEYWORD_SET',
        GUEST_CART = 'GUEST_CART',
        src =
          (__webpack_require__('../../node_modules/core-js/modules/es.array.map.js'),
          __webpack_require__('../../node_modules/core-js/modules/es.object.entries.js'),
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
          __webpack_require__('../../node_modules/@shopby/shop-sdk/build/src/index.js'));
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
      Object.entries(src.qk).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2);
        return { value: _ref2[0], label: _ref2[1] };
      });
      var OPTION_SEPARATOR = {
          LABEL: '_LABEL_',
          SELECTED: '_SELECTED_',
          VALUE: '_VALUE_',
          TEXT_OPTION_BY_OPTION: '_TEXT_OPTION_BY_OPTION_',
          TEXT_OPTION_BY_PRODUCT: '_TEXT_OPTION_BY_PRODUCT_',
        },
        PURCHASE_OPTION_SALE_TYPE = { AVAILABLE: 'AVAILABLE', TEMP_SOLD_OUT: 'TEMP_SOLD_OUT', SOLD_OUT: 'SOLD_OUT' },
        DEPTH_OPTION_MAP = { ONLY_ONE: 'ONLY_ONE', SELECTED_OPTION: 'SELECTED_OPTION', DEFAULT: 'DEFAULT' },
        PURCHASE_OPTION_SALE_LABEL = { SOLD_OUT: '품절', TEMP_SOLD_OUT: '임시품절', AVAILABLE: '' },
        SECTION_CODE = {
          PC: ['SCPC0001', 'SCPC0002', 'SCPC0003', 'SCPC0004', 'SCPC0005'],
          MOBILE_WEB: ['SCMO0001', 'SCMO0002', 'SCMO0003', 'SCMO0004', 'SCMO0005'],
        },
        THUMB_LIST_TYPE = {
          SWIPE: 'SWIPE',
          LIST: 'LIST',
          GALLERY: 'GALLERY',
          SIMPLE_IMAGE: 'SIMPLE_IMAGE',
          CART: 'CART',
          PRODUCT_MOVE: 'PRODUCT_MOVE',
        },
        errorMessage = __webpack_require__('../shared/dist/esm/constants/errorMessage.js'),
        HTTP_STATUS_CODE = {
          100: 'CONTINUE',
          200: 'OK',
          201: 'CREATED',
          202: 'ACCEPTED',
          204: 'NO_CONTENT',
          400: 'BAD_REQUEST',
          401: 'UNAUTHORIZED',
          402: 'PAYMENT_REQUIRED',
          403: 'FORBIDDEN',
          404: 'NOT_FOUND',
          406: 'NOT_ACCEPTABLE',
          407: 'PROXY_AUTHENTICATION_REQUIRED',
          408: 'REQUEST_TIMEOUT',
          412: 'PRECONDITION_FAILED',
          414: 'REQUEST_URI_TOO_LONG',
          415: 'UNSUPPORTED_MEDIA_TYPE',
          417: 'EXPECTATION_FAILED',
          418: 'MISDIRECTED_REQUEST',
          422: 'UNPROCESSABLE_ENTITY',
          423: 'LOCKED',
          500: 'INTERNAL_SERVER_ERROR',
          501: 'NOT_IMPLEMENTED',
          502: 'BAD_GATEWAY',
          503: 'SERVICE_UNAVAILABLE',
          504: 'GATEWAY_TIMEOUT',
          511: 'NETWORK_AUTHENTICATION_REQUIRED',
        },
        PLATFORM_TYPE = { MOBILE_WEB: 'MOBILE_WEB', AOS: 'AOS', IOS: 'IOS', PC: 'PC', MOBILE_APP: 'MOBILE_APP' },
        DEFAULT_PAGE_SIZE = 6,
        PAY_TYPE_ICON_NAME_MAP = {
          ACCOUNT: 'pay-account',
          CREDIT_CARD: 'pay-credit-card',
          MOBILE: 'pay-mobile',
          REALTIME_ACCOUNT_TRANSFER: 'pay-realtime-account',
          VIRTUAL_ACCOUNT: 'pay-virtual-account',
          ESCROW_REALTIME_ACCOUNT_TRANSFER: 'pay-realtime-account',
          ESCROW_VIRTUAL_ACCOUNT: 'pay-virtual-account',
          PAYCO: 'payco',
          TOSS_PAY: 'tosspay',
          CHAI: 'chai',
          KAKAO_PAY: 'kakaopay',
          NAVER_EASY_PAY: 'naverpay',
          ETC: 'pay-etc',
        },
        PAY_TYPES_OF_WHICH_ICON_HAS_NOT_BLACK_MODIFIER = ['PAYCO', 'NAVER_EASY_PAY', 'CHAI', 'TOSS_PAY', 'KAKAO_PAY'],
        PAY_TYPES_WHICH_DO_NOT_NEED_LABEL = ['PAYCO', 'NAVER_EASY_PAY', 'CHAI', 'TOSS_PAY', 'KAKAO_PAY'],
        PAY_TYPE_ICON_NAME_MODIFIER = { BLACK: '-black', WHITE: '-white' },
        ICON_SET = {
          home: {
            path: 'M17.5 63.5V34.373l23-16.639 23 16.639V63.5H45.585V52.245c0-.866-.168-2.23-.924-3.412-.8-1.25-2.193-2.184-4.365-2.184-2.17 0-3.581.93-4.407 2.169-.784 1.176-.985 2.54-.985 3.427V63.5H17.5Z',
            viewBox: '0 0 80 80',
          },
          'fill-heart': {
            path: 'M52.29 19.24c-6.382 0-10.932 3.926-12.41 6.888-1.82-3.086-8.408-8.31-14.79-6.888-7.977 1.777-12.613 11.532-5.774 21.324C25.521 49.45 34.74 56.557 39.88 61c5.319-4.443 17.728-14.216 22.16-22.213 5.596-10.097-1.773-19.547-9.75-19.547Z',
            viewBox: '0 0 80 80',
          },
          'stroke-heart': {
            path: 'M52.29 19.24c-6.382 0-10.932 3.926-12.41 6.888-1.82-3.086-8.408-8.31-14.79-6.888-7.977 1.777-12.613 11.532-5.774 21.324C25.521 49.45 34.74 56.557 39.88 61c5.319-4.443 17.728-14.216 22.16-22.213 5.596-10.097-1.773-19.547-9.75-19.547Z',
            viewBox: '0 0 80 80',
          },
          'down-load': {
            path: 'M39.5 16v35.577L27.709 39.723l-1.418 1.41 13.5 13.572.709.713.709-.713 13.5-13.571-1.418-1.41L41.5 51.576V16h-2ZM15 48v17h50V48h-2v15H17V48h-2Z',
            viewBox: '0 0 80 80',
          },
          'a-star': {
            path: 'm17.34 18.028.613-.055.227-.572L24 2.714l5.82 14.687.227.572.614.055 14.894 1.337-11.707 10.07-.47.404.153.6 3.86 15.278-12.834-8.612-.557-.374-.557.374-12.835 8.612 3.861-15.278.152-.6-.469-.404-11.707-10.07 14.894-1.337Z',
            viewBox: '0 0 80 80',
          },
          'angle-r': { path: 'm30 18 22 22-22 22', viewBox: '0 0 80 80' },
          check: { path: 'M62 25 34.5 55 18 37', viewBox: '0 0 80 80' },
          x: {
            path: 'M62.002 19.418 41.414 40l20.588 20.582-1.414 1.414L40 41.414 19.412 61.997l-1.414-1.415L38.586 40 17.998 19.418l1.414-1.415L40 38.587l20.588-20.583 1.414 1.415Z',
            viewBox: '0 0 80 80',
          },
          face: {
            path: 'm61 56.719-.002-.056c0-4.127-2.173-8-5.954-10.903C51.261 42.854 45.948 41 39.999 41s-11.261 1.854-15.045 4.76c-3.77 2.896-5.943 6.756-5.954 10.871.026.63.356 1.347 1.341 2.147 1.018.827 2.578 1.6 4.63 2.255 4.09 1.303 9.637 1.977 15.258 1.967 5.623-.01 11.128-.703 15.136-2.009 2.014-.656 3.515-1.423 4.467-2.228.924-.781 1.184-1.455 1.167-2.044Zm-44-.056c.317 11.197 46.304 11.035 45.998 0C62.998 46.908 52.701 39 40 39 27.297 39 17 46.908 17 56.663ZM40 34a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0 2c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Z',
            viewBox: '0 0 80 80',
          },
          magnet: {
            path: 'M54 36c0 9.941-8.059 18-18 18s-18-8.059-18-18 8.059-18 18-18 18 8.059 18 18Zm-4.583 14.832A19.926 19.926 0 0 1 36 56c-11.046 0-20-8.954-20-20s8.954-20 20-20 20 8.954 20 20c0 5.163-1.956 9.87-5.168 13.417l12.875 12.876-1.414 1.414-12.876-12.875Z',
            viewBox: '0 0 80 80',
          },
          hamburger: { path: 'M21 24h38M21 40h38M21 56h38', viewBox: '0 0 80 80' },
          exclamation: {
            path: 'M40 62c12.15 0 22-9.85 22-22s-9.85-22-22-22-22 9.85-22 22 9.85 22 22 22Zm0 2c13.255 0 24-10.745 24-24S53.255 16 40 16 16 26.745 16 40s10.745 24 24 24Zm1-35v14h-2V29h2Zm-1 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
            viewBox: '0 0 80 80',
          },
          'shopping-bag': {
            path: 'M32 26.64c0-1.615.51-3.537 1.741-5.035C34.945 20.142 36.904 19 40 19c3.096 0 5.055 1.142 6.259 2.605C47.49 23.103 48 25.025 48 26.64v2.289c0 .024 0 .047.002.071H31.997a.994.994 0 0 0 .003-.071V26.64ZM30.003 29a.994.994 0 0 1-.003-.071V26.64c0-1.985.616-4.383 2.196-6.305C33.806 18.378 36.346 17 40 17s6.195 1.378 7.804 3.335C49.384 22.257 50 24.655 50 26.64v2.289c0 .024 0 .047-.002.071h5.92a2 2 0 0 1 1.982 1.74l3.804 29A2 2 0 0 1 59.72 62H20.329a2 2 0 0 1-1.977-2.303l4.437-29A2 2 0 0 1 24.766 29h5.237Zm-5.237 2h31.151l3.804 29H20.329l4.437-29Z',
            viewBox: '0 0 80 80',
          },
        },
        TYPES_WHICH_NEED_COLLECTION_INFO =
          ((0, __webpack_require__('../../node_modules/lodash-es/omit.js').Z)(src.YM, [
            'OUT_OF_STOCK_SYSTEM',
            'OUT_OF_STOCK',
          ]),
          { claimTypes: ['RETURN', 'EXCHANGE'], orderStatusTypes: ['DELIVERY_ING', 'DELIVERY_DONE'] }),
        PAY_TYPES_THAT_SHOULD_SHOW_BANK_INFO = ['ACCOUNT', 'VIRTUAL_ACCOUNT', 'ESCROW_VIRTUAL_ACCOUNT'];
    },
  },
]);
