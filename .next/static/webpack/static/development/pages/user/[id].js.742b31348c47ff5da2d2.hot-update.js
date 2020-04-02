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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");




var UserData = function UserData() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var id = router.id;

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__["default"])("/api/user/".concat(id)),
      data = _useSWR.data,
      error = _useSWR.error;
};

var user = function user() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  var _router$query = router.query,
      id = _router$query.id,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_router$query, ["id"]);
};

/* harmony default export */ __webpack_exports__["default"] = (user);

/***/ })

})
//# sourceMappingURL=[id].js.742b31348c47ff5da2d2.hot-update.js.map