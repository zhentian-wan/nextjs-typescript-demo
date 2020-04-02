webpackHotUpdate("static/development/pages/user/[id].js",{

/***/ "./pages/user/[id].tsx":
/*!*****************************!*\
  !*** ./pages/user/[id].tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");


var _this = undefined,
    _jsxFileName = "/Users/zhentianwan/Documents/programming/next.js/my-app/pages/user/[id].tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var UserData = function UserData() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var id = router.id;

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_4__["default"])("/api/user/".concat(id)),
      data = _useSWR.data,
      error = _useSWR.error;

  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["SimpleGrid"], {
    columns: 2,
    width: "2xs",
    spacingY: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    fontWeight: "blod",
    marginRight: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, "UserID"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, "data.id"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    fontWeight: "blod",
    marginRight: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, "Name"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, "data.name"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    fontWeight: "blod",
    marginRight: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, "Email"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, "data.email"));
};

var user = function user() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var _router$query = router.query,
      id = _router$query.id,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_router$query, ["id"]);
};

/* harmony default export */ __webpack_exports__["default"] = (user);

/***/ })

})
//# sourceMappingURL=[id].js.61f842cc068fe573ab5b.hot-update.js.map