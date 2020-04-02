webpackHotUpdate("static/development/pages/user/[id].js",{

/***/ "./pages/user/[id].tsx":
/*!*****************************!*\
  !*** ./pages/user/[id].tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");


var _this = undefined,
    _jsxFileName = "/Users/zhentianwan/Documents/programming/next.js/my-app/pages/user/[id].tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var fetcher = function fetcher(url) {
  var res, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetcher$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(url));

        case 2:
          res = _context.sent;

          if (res.ok) {
            _context.next = 5;
            break;
          }

          throw Error("Yo that's NOT OK!!!");

        case 5:
          _context.next = 7;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 7:
          data = _context.sent;
          return _context.abrupt("return", data);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

var UserData = function UserData() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var id = router.query.id;

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_4__["default"])("/api/user/".concat(id), fetcher),
      data = _useSWR.data,
      error = _useSWR.error;

  if (error) {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
      status: "error",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 12
      }
    }, error);
  }

  if (!data) {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
      status: "info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 12
      }
    }, "Loading...");
  }

  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["SimpleGrid"], {
    columns: 2,
    width: "2xs",
    spacingY: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    fontWeight: "blod",
    marginRight: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, "UserID"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, data.id), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    fontWeight: "blod",
    marginRight: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, "Name"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, data.name), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    fontWeight: "blod",
    marginRight: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, "Email"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, data.email));
};

var user = function user() {
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    flexDirection: "columns",
    alignItems: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
    as: "h1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, "User"));
};

/* harmony default export */ __webpack_exports__["default"] = (user);

/***/ })

})
//# sourceMappingURL=[id].js.16fca95a0a30b4f9725e.hot-update.js.map