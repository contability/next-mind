"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/TodoList/index.tsx":
/*!***************************************!*\
  !*** ./components/TodoList/index.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_project_next_mind_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/palette */ \"./styles/palette.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"D:\\\\project\\\\next-mind\\\\components\\\\TodoList\\\\index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,D_project_next_mind_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\n\n\nvar CheckMarkIcon = function CheckMarkIcon(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"svg\", _objectSpread(_objectSpread({}, props), {}, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"path\", {\n      d: \"M21 6.285 9.84 19.018 3 13l1.319-1.49 5.341 4.686L19.525 5 21 6.285z\"\n    }, void 0, false, void 0, this)\n  }), void 0, false, void 0, this);\n};\n\n_c3 = CheckMarkIcon;\nCheckMarkIcon.defaultProps = {\n  width: \"24\",\n  height: \"24\",\n  xmlns: \"http://www.w3.org/2000/svg\",\n  fillRule: \"evenodd\",\n  clipRule: \"evenodd\"\n};\n\nvar TrashCanIcon = function TrashCanIcon(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"svg\", _objectSpread(_objectSpread({}, props), {}, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"path\", {\n      d: \"M19 24H5a2 2 0 0 1-2-2V5H2V3h6V1.5C8 .673 8.673 0 9.5 0h5c.825 0 1.5.671 1.5 1.5V3h6v2h-1v17a2 2 0 0 1-2 2zm0-19H5v16.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V5zm-9 4a1 1 0 0 0-2 0v9a1 1 0 0 0 2 0V9zm6 0a1 1 0 0 0-2 0v9a1 1 0 0 0 2 0V9zm-2-7h-4v1h4V2z\"\n    }, void 0, false, void 0, this)\n  }), void 0, false, void 0, this);\n};\n\n_c4 = TrashCanIcon;\nTrashCanIcon.defaultProps = {\n  width: \"24\",\n  height: \"24\",\n  xmlns: \"http://www.w3.org/2000/svg\",\n  fillRule: \"evenodd\",\n  clipRule: \"evenodd\"\n};\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"TodoList__Container\",\n  componentId: \"sc-1v721uk-0\"\n})([\"width:100%;.todo-num{margin-left:12px;}.todo-list-header{padding:12px;border-bottom:1px solid \", \";.todo-list-last-todo{font-size:14px;span{margin-left:8px;}}}.todo-list-header-colors{display:flex;.todo-list-header-color-num{display:flex;margin-right:8px;p{font-size:14px;line-height:16px;margin:0;margin-left:6px;}.todo-list-header-round-color{width:16px;height:16px;border-radius:50%;}}}.bg-blue{background-color:\", \";}.bg-green{background-color:\", \";}.bg-navy{background-color:\", \";}.bg-orange{background-color:\", \";}.bg-red{background-color:\", \";}.bg-yellow{background-color:\", \";}.todo-list{.todo-item{display:flex;justify-content:space-between;align-items:center;width:100%;height:52px;border-bottom:1px solid \", \";.todo-left-side{width:100%;height:100%;display:flex;align-items:center;.todo-color-block{width:12px;height:100%;}.checked-todo-text{color:\", \";text-decoration:line-through;}.todo-text{margin-left:12px;font-size:16px;}}.todo-right-side{display:flex;margin-right:12px;svg{&:first-child{margin-right:16px;}}.todo-trash-can{width:22px;path{fill:\", \";}}.todo-check-mark{fill:\", \";}.todo-button{width:20px;height:20px;border-radius:50%;border:1px solid \", \";background-color:transparent;outline:none;}}}}\"], _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].blue, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].green, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].navy, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].orange, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].red, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].yellow, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deep_red, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deep_green, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].gray);\n_c = Container;\n\nvar TodoList = function TodoList(_ref) {\n  _s();\n\n  var todos = _ref.todos;\n  // const getTodoColorNums = useCallback(() => {\n  //   let red = 0;\n  //   let orange = 0;\n  //   let yellow = 0;\n  //   let green = 0;\n  //   let blue = 0;\n  //   let navy = 0;\n  //   todos.map(todo => {\n  //     switch (todo.color) {\n  //       case 'red':\n  //         red += 1;\n  //         break;\n  //       case 'orange':\n  //         orange += 1;\n  //         break;\n  //       case 'yellow':\n  //         yellow += 1;\n  //         break;\n  //       case 'green':\n  //         green += 1;\n  //         break;\n  //       case 'blue':\n  //         blue += 1;\n  //         break;\n  //       case 'navy':\n  //         navy += 1;\n  //         break;\n  //     }\n  //   });\n  //   return {\n  //     red,\n  //     orange,\n  //     yellow,\n  //     green,\n  //     blue,\n  //     navy,\n  //   };\n  // }, [todos]);\n  var getTodoColorNums = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {\n    var colors = {};\n    todos.map(function (todo) {\n      var value = colors[todo.color];\n      if (!value) colors[\"\".concat(todo.color)] = 1;else colors[\"\".concat(todo.color)] = value + 1;\n    });\n    return colors;\n  }, [todos]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Container, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"todo-list-header\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n        className: \"todo-list-last-todo\",\n        children: [\"\\uB0A8\\uC740 TODO \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n          children: [todos.length, \"\\uAC1C\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 193,\n          columnNumber: 19\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 192,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"todo-list-header-colors\",\n        children: Object.keys(getTodoColorNums).map(function (color, colorIndex) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: \"todo-list-header-color-num\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n              className: \"todo-list-header-round-color bg-\".concat(color)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 198,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n              children: [getTodoColorNums[color], \"\\uAC1C\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 199,\n              columnNumber: 15\n            }, _this)]\n          }, colorIndex, true, {\n            fileName: _jsxFileName,\n            lineNumber: 197,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 195,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 191,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"ul\", {\n      className: \"todo-list\",\n      children: todos.map(function (todo) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"li\", {\n          className: \"todo-item\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: \"todo-left-side\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n              className: \"todo-color-block bg-\".concat(todo.color)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 208,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n              className: \"todo-text \".concat(todo.checked ? 'checked-todo-text' : ''),\n              children: todo.text\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 209,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 207,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: \"todo-right-side\",\n            children: todo.checked ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(TrashCanIcon, {\n                className: \"todo-trash-can\",\n                onClick: function onClick() {}\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 215,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(CheckMarkIcon, {\n                className: \"todo-check-mark\",\n                onClick: function onClick() {}\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 216,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n              type: \"button\",\n              className: \"todo-button\",\n              onClick: function onClick() {}\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 219,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 211,\n            columnNumber: 13\n          }, _this)]\n        }, todo.id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 206,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 204,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 190,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(TodoList, \"K2kEZdPbRyPKztXpAoLQnlgKUfY=\");\n\n_c2 = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"TodoList\");\n$RefreshReg$(_c3, \"CheckMarkIcon\");\n$RefreshReg$(_c4, \"TrashCanIcon\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtZQUFkO2NBQUE7Y0FBQTtjQUFBO1lBQUEsU0FERixlQUVFO2NBQUcsU0FBUyxzQkFBZUYsSUFBSSxDQUFDTyxPQUFMLEdBQWUsbUJBQWYsR0FBcUMsRUFBcEQsQ0FBWjtjQUFBLFVBQXVFUCxJQUFJLENBQUNRO1lBQTVFO2NBQUE7Y0FBQTtjQUFBO1lBQUEsU0FGRjtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUEsU0FERixlQUtFO1lBQUssU0FBUyxFQUFDLGlCQUFmO1lBQUEsVUFFR1IsSUFBSSxDQUFDTyxPQUFMLGdCQUNDO2NBQUEsd0JBQ0UsOERBQUMsWUFBRDtnQkFBYyxTQUFTLEVBQUMsZ0JBQXhCO2dCQUF5QyxPQUFPLEVBQUUsbUJBQU0sQ0FBRTtjQUExRDtnQkFBQTtnQkFBQTtnQkFBQTtjQUFBLFNBREYsZUFFRSw4REFBQyxhQUFEO2dCQUFlLFNBQVMsRUFBQyxpQkFBekI7Z0JBQTJDLE9BQU8sRUFBRSxtQkFBTSxDQUFFO2NBQTVEO2dCQUFBO2dCQUFBO2dCQUFBO2NBQUEsU0FGRjtZQUFBLGdCQURELGdCQU1DO2NBQVEsSUFBSSxFQUFDLFFBQWI7Y0FBc0IsU0FBUyxFQUFDLGFBQWhDO2NBQThDLE9BQU8sRUFBRSxtQkFBTSxDQUFFO1lBQS9EO2NBQUE7Y0FBQTtjQUFBO1lBQUE7VUFSSjtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBTEY7UUFBQSxHQUErQlAsSUFBSSxDQUFDUyxFQUFwQztVQUFBO1VBQUE7VUFBQTtRQUFBLFNBRGE7TUFBQSxDQUFkO0lBREg7TUFBQTtNQUFBO01BQUE7SUFBQSxTQWRGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURGO0FBc0NELENBM0ZEOztHQUFNZDs7TUFBQUE7QUE2Rk4sK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub2RvTGlzdC9pbmRleC50c3g/ZjYwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tICcuLi8uLi9zdHlsZXMvcGFsZXR0ZSc7XHJcbmltcG9ydCB7IFRvZG9UeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMvdG9kbyc7XHJcbmltcG9ydCBDaGVja01hcmtJY29uIGZyb20gJy4uLy4uL3N2Zy9pY29ucy9zeXN0ZW0vc3lzdGVtX2NoZWNrLnN2Zyc7XHJcbmltcG9ydCBUcmFzaENhbkljb24gZnJvbSAnLi4vLi4vc3ZnL2ljb25zL3N5c3RlbS9zeXN0ZW1fdHJhc2hfY2FuLnN2Zyc7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAudG9kby1udW0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgfVxyXG5cclxuICAudG9kby1saXN0LWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5fTtcclxuXHJcbiAgICAudG9kby1saXN0LWxhc3QtdG9kbyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRvZG8tbGlzdC1oZWFkZXItY29sb3JzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAudG9kby1saXN0LWhlYWRlci1jb2xvci1udW0ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgICB9XHJcbiAgICAgIC50b2RvLWxpc3QtaGVhZGVyLXJvdW5kLWNvbG9yIHtcclxuICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYmctYmx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuYmx1ZX07XHJcbiAgfVxyXG4gIC5iZy1ncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuZ3JlZW59O1xyXG4gIH1cclxuICAuYmctbmF2eSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUubmF2eX07XHJcbiAgfVxyXG4gIC5iZy1vcmFuZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLm9yYW5nZX07XHJcbiAgfVxyXG4gIC5iZy1yZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLnJlZH07XHJcbiAgfVxyXG4gIC5iZy15ZWxsb3cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLnllbGxvd307XHJcbiAgfVxyXG5cclxuICAudG9kby1saXN0IHtcclxuICAgIC50b2RvLWl0ZW0ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheX07XHJcblxyXG4gICAgICAudG9kby1sZWZ0LXNpZGUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLnRvZG8tY29sb3ItYmxvY2sge1xyXG4gICAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2hlY2tlZC10b2RvLXRleHQge1xyXG4gICAgICAgICAgY29sb3I6ICR7cGFsZXR0ZS5ncmF5fTtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9kby10ZXh0IHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnRvZG8tcmlnaHQtc2lkZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcblxyXG4gICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRvZG8tdHJhc2gtY2FuIHtcclxuICAgICAgICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgICAgICAgcGF0aCB7XHJcbiAgICAgICAgICAgIGZpbGw6ICR7cGFsZXR0ZS5kZWVwX3JlZH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudG9kby1jaGVjay1tYXJrIHtcclxuICAgICAgICAgIGZpbGw6ICR7cGFsZXR0ZS5kZWVwX2dyZWVufTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50b2RvLWJ1dHRvbiB7XHJcbiAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5fTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHtcclxuICB0b2RvczogVG9kb1R5cGVbXTtcclxufVxyXG5cclxudHlwZSBPYmplY3RJbmRleFR5cGUgPSB7XHJcbiAgW2tleTogc3RyaW5nXTogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG59O1xyXG5cclxuY29uc3QgVG9kb0xpc3Q6IFJlYWN0LkZDPElQcm9wcz4gPSAoeyB0b2RvcyB9OiBJUHJvcHMpID0+IHtcclxuICAvLyBjb25zdCBnZXRUb2RvQ29sb3JOdW1zID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gIC8vICAgbGV0IHJlZCA9IDA7XHJcbiAgLy8gICBsZXQgb3JhbmdlID0gMDtcclxuICAvLyAgIGxldCB5ZWxsb3cgPSAwO1xyXG4gIC8vICAgbGV0IGdyZWVuID0gMDtcclxuICAvLyAgIGxldCBibHVlID0gMDtcclxuICAvLyAgIGxldCBuYXZ5ID0gMDtcclxuXHJcbiAgLy8gICB0b2Rvcy5tYXAodG9kbyA9PiB7XHJcbiAgLy8gICAgIHN3aXRjaCAodG9kby5jb2xvcikge1xyXG4gIC8vICAgICAgIGNhc2UgJ3JlZCc6XHJcbiAgLy8gICAgICAgICByZWQgKz0gMTtcclxuICAvLyAgICAgICAgIGJyZWFrO1xyXG4gIC8vICAgICAgIGNhc2UgJ29yYW5nZSc6XHJcbiAgLy8gICAgICAgICBvcmFuZ2UgKz0gMTtcclxuICAvLyAgICAgICAgIGJyZWFrO1xyXG4gIC8vICAgICAgIGNhc2UgJ3llbGxvdyc6XHJcbiAgLy8gICAgICAgICB5ZWxsb3cgKz0gMTtcclxuICAvLyAgICAgICAgIGJyZWFrO1xyXG4gIC8vICAgICAgIGNhc2UgJ2dyZWVuJzpcclxuICAvLyAgICAgICAgIGdyZWVuICs9IDE7XHJcbiAgLy8gICAgICAgICBicmVhaztcclxuICAvLyAgICAgICBjYXNlICdibHVlJzpcclxuICAvLyAgICAgICAgIGJsdWUgKz0gMTtcclxuICAvLyAgICAgICAgIGJyZWFrO1xyXG4gIC8vICAgICAgIGNhc2UgJ25hdnknOlxyXG4gIC8vICAgICAgICAgbmF2eSArPSAxO1xyXG4gIC8vICAgICAgICAgYnJlYWs7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH0pO1xyXG5cclxuICAvLyAgIHJldHVybiB7XHJcbiAgLy8gICAgIHJlZCxcclxuICAvLyAgICAgb3JhbmdlLFxyXG4gIC8vICAgICB5ZWxsb3csXHJcbiAgLy8gICAgIGdyZWVuLFxyXG4gIC8vICAgICBibHVlLFxyXG4gIC8vICAgICBuYXZ5LFxyXG4gIC8vICAgfTtcclxuICAvLyB9LCBbdG9kb3NdKTtcclxuXHJcbiAgY29uc3QgZ2V0VG9kb0NvbG9yTnVtcyA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgY29sb3JzOiBPYmplY3RJbmRleFR5cGUgPSB7fTtcclxuICAgIHRvZG9zLm1hcCh0b2RvID0+IHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBjb2xvcnNbdG9kby5jb2xvcl07XHJcbiAgICAgIGlmICghdmFsdWUpIGNvbG9yc1tgJHt0b2RvLmNvbG9yfWBdID0gMTtcclxuICAgICAgZWxzZSBjb2xvcnNbYCR7dG9kby5jb2xvcn1gXSA9IHZhbHVlICsgMTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjb2xvcnM7XHJcbiAgfSwgW3RvZG9zXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZG8tbGlzdC1oZWFkZXJcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0b2RvLWxpc3QtbGFzdC10b2RvXCI+XHJcbiAgICAgICAgICDrgqjsnYAgVE9ETyA8c3Bhbj57dG9kb3MubGVuZ3RofeqwnDwvc3Bhbj5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2RvLWxpc3QtaGVhZGVyLWNvbG9yc1wiPlxyXG4gICAgICAgICAge09iamVjdC5rZXlzKGdldFRvZG9Db2xvck51bXMpLm1hcCgoY29sb3IsIGNvbG9ySW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2RvLWxpc3QtaGVhZGVyLWNvbG9yLW51bVwiIGtleT17Y29sb3JJbmRleH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0b2RvLWxpc3QtaGVhZGVyLXJvdW5kLWNvbG9yIGJnLSR7Y29sb3J9YH0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPHA+e2dldFRvZG9Db2xvck51bXNbY29sb3JdfeqwnDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJ0b2RvLWxpc3RcIj5cclxuICAgICAgICB7dG9kb3MubWFwKHRvZG8gPT4gKFxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRvZG8taXRlbVwiIGtleT17dG9kby5pZH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9kby1sZWZ0LXNpZGVcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRvZG8tY29sb3ItYmxvY2sgYmctJHt0b2RvLmNvbG9yfWB9IC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgdG9kby10ZXh0ICR7dG9kby5jaGVja2VkID8gJ2NoZWNrZWQtdG9kby10ZXh0JyA6ICcnfWB9Pnt0b2RvLnRleHR9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2RvLXJpZ2h0LXNpZGVcIj5cclxuICAgICAgICAgICAgICB7LyogeyF0b2RvLmNoZWNrZWQgJiYgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwidG9kby1idXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7fX0+PC9idXR0b24+fSAqL31cclxuICAgICAgICAgICAgICB7dG9kby5jaGVja2VkID8gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPFRyYXNoQ2FuSWNvbiBjbGFzc05hbWU9XCJ0b2RvLXRyYXNoLWNhblwiIG9uQ2xpY2s9eygpID0+IHt9fSAvPlxyXG4gICAgICAgICAgICAgICAgICA8Q2hlY2tNYXJrSWNvbiBjbGFzc05hbWU9XCJ0b2RvLWNoZWNrLW1hcmtcIiBvbkNsaWNrPXsoKSA9PiB7fX0gLz5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJ0b2RvLWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHt9fT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3Q7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZU1lbW8iLCJzdHlsZWQiLCJwYWxldHRlIiwiQ2hlY2tNYXJrSWNvbiIsIlRyYXNoQ2FuSWNvbiIsIkNvbnRhaW5lciIsImRpdiIsImdyYXkiLCJibHVlIiwiZ3JlZW4iLCJuYXZ5Iiwib3JhbmdlIiwicmVkIiwieWVsbG93IiwiZGVlcF9yZWQiLCJkZWVwX2dyZWVuIiwiVG9kb0xpc3QiLCJ0b2RvcyIsImdldFRvZG9Db2xvck51bXMiLCJjb2xvcnMiLCJtYXAiLCJ0b2RvIiwidmFsdWUiLCJjb2xvciIsImxlbmd0aCIsIk9iamVjdCIsImtleXMiLCJjb2xvckluZGV4IiwiY2hlY2tlZCIsInRleHQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TodoList/index.tsx\n"));

/***/ })

});