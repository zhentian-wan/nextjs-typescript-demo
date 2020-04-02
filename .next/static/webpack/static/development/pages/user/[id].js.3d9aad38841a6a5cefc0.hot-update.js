webpackHotUpdate("static/development/pages/user/[id].js",{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./pages/user/[id].tsx":
/*!*****************************!*\
  !*** ./pages/user/[id].tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");



var _this = undefined,
    _jsxFileName = "/Users/zhentianwan/Documents/programming/next.js/my-app/pages/user/[id].tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var fetcher = function fetcher(url) {
  var res, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function fetcher$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(fetch(url));

        case 2:
          res = _context.sent;

          if (res.ok) {
            _context.next = 5;
            break;
          }

          throw Error("Yo that's NOT OK!!!");

        case 5:
          _context.next = 7;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(res.json());

        case 7:
          data = _context.sent;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

var UserData = function UserData() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var id = router.query.id;

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_5__["default"])("/api/user/".concat(id)),
      data = _useSWR.data,
      error = _useSWR.error;

  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["SimpleGrid"], {
    columns: 2,
    width: "2xs",
    spacingY: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    fontWeight: "blod",
    marginRight: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, "UserID"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, "data.id"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    fontWeight: "blod",
    marginRight: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, "Name"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, "data.name"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    fontWeight: "blod",
    marginRight: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, "Email"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, "data.email"));
};

var user = function user() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _router$query = router.query,
      id = _router$query.id,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_router$query, ["id"]);
};

/* harmony default export */ __webpack_exports__["default"] = (user);

/***/ })

})
//# sourceMappingURL=[id].js.3d9aad38841a6a5cefc0.hot-update.js.map