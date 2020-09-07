webpackHotUpdate("static/development/pages/chat.js",{

/***/ "./pages/chat.js":
/*!***********************!*\
  !*** ./pages/chat.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Chat; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/utils.module.scss */ "./styles/utils.module.scss");
/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Chat(props) {
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    home: true
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, _components_layout__WEBPACK_IMPORTED_MODULE_2__["siteTitle"])), __jsx("section", {
    className: "flex-col mx-auto"
  }, __jsx("div", {
    className: "text-center font-semibold text-4xl mx-auto",
    style: {
      border: "1px solid lightblue",
      borderRadius: "15px",
      height: "1200px",
      padding: "75px 0 0 0"
    }
  }, __jsx("main", {
    "class": "chat-main"
  }, __jsx("div", {
    "class": "chat-sidebar"
  }, __jsx("h3", null, __jsx("i", {
    "class": "fas fa-comments"
  }), " Room Name:"), __jsx("h2", {
    id: "room-name"
  }), __jsx("h3", null, __jsx("i", {
    "class": "fas fa-users"
  }), " Users:"), __jsx("ul", {
    id: "users"
  })), __jsx("div", {
    "class": "chat-messages"
  })), __jsx("div", {
    "class": "chat-form-container"
  }, __jsx("form", {
    id: "chat-form"
  }, __jsx("input", {
    style: {
      border: "1px solid",
      borderRadius: "15px",
      marginLeft: "500px",
      width: "500px"
    },
    id: "msg",
    type: "text",
    placeholder: "Enter Message",
    required: true,
    autocomplete: "off"
  }), __jsx("button", {
    "class": "btn"
  }, __jsx("i", {
    "class": "fas fa-paper-plane"
  }), " Send")))), __jsx("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/qs/6.9.2/qs.min.js",
    integrity: "sha256-TDxXjkAUay70ae/QJBEpGKkpVslXaHHayklIVglFRT4=",
    crossorigin: "anonymous"
  }), __jsx("script", {
    src: "/socket.io/socket.io.js"
  }), __jsx("script", {
    src: "js/main.js"
  })));
}

/***/ })

})
//# sourceMappingURL=chat.js.38f6a31c803cfdf63587.hot-update.js.map