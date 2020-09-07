webpackHotUpdate("static/development/pages/community.js",{

/***/ "./pages/community.js":
/*!****************************!*\
  !*** ./pages/community.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Community; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/utils.module.scss */ "./styles/utils.module.scss");
/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Community(props) {
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    home: true
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, _components_layout__WEBPACK_IMPORTED_MODULE_2__["siteTitle"])), __jsx("section", {
    className: "flex-col mx-auto"
  }, __jsx("div", {
    className: "text-center font-semibold text-4xl mx-auto",
    style: {
      border: "1px solid bold lightblue",
      borderRadius: "15px",
      height: "400px",
      padding: "75px 0 0 0"
    }
  }, __jsx("form", {
    action: "./chat"
  }, __jsx("div", {
    "class": "form-control"
  }, __jsx("label", {
    "for": "username",
    style: {
      marginTop: "50px"
    }
  }, "Username"), __jsx("input", {
    style: {
      border: "1px solid",
      borderRadius: "15px",
      marginLeft: "30px"
    },
    type: "text",
    name: "username",
    id: "username",
    placeholder: "Enter username...",
    required: true
  })), __jsx("div", {
    "class": "form-control"
  }, __jsx("label", {
    "for": "room",
    style: {}
  }, "Choose a Room"), __jsx("select", {
    name: "room",
    id: "room",
    style: {
      border: "1px solid",
      borderRadius: "15px",
      marginLeft: "30px"
    }
  }, __jsx("option", {
    value: "friends"
  }, "Make friends"), __jsx("option", {
    value: "vent"
  }, "Vent"), __jsx("option", {
    value: "advice"
  }, "Advice"), __jsx("option", {
    value: "Music"
  }, "Music"), __jsx("option", {
    value: "Gaming"
  }, "Gaming"))), __jsx("button", {
    type: "submit",
    "class": "btn",
    style: {
      width: "200px",
      backgroundColor: "lightblue",
      borderRadius: "15px",
      marginTop: "50px"
    }
  }, "Join Chat")))));
}

/***/ })

})
//# sourceMappingURL=community.js.45602e6bcba033865c5a.hot-update.js.map