"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/todos/[id]";
exports.ids = ["pages/api/todos/[id]"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./lib/data/index.ts":
/*!***************************!*\
  !*** ./lib/data/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"(api)/./lib/data/todo/index.ts\");\n\nconst Data = {\n  todo: _todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGF0YS9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRUEsTUFBTUMsSUFBSSxHQUFHO0VBQUNELElBQUlBLCtDQUFBQTtBQUFMLENBQWI7QUFFQSxpRUFBZUMsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtbWluZC8uL2xpYi9kYXRhL2luZGV4LnRzP2EyNTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRvZG8gZnJvbSBcIi4vdG9kb1wiO1xyXG5cclxuY29uc3QgRGF0YSA9IHt0b2RvfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGE7Il0sIm5hbWVzIjpbInRvZG8iLCJEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/data/index.ts\n");

/***/ }),

/***/ "(api)/./lib/data/todo/index.ts":
/*!********************************!*\
  !*** ./lib/data/todo/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst getList = () => {\n  const todosBuffer = (0,fs__WEBPACK_IMPORTED_MODULE_0__.readFileSync)('data/todos.json');\n  const todosString = todosBuffer.toString();\n  if (!todosString) return [];\n  const todos = JSON.parse(todosString);\n  return todos;\n};\n\nconst exist = ({\n  id\n}) => {\n  const todos = getList(); // some : id가 있다면 true를 리턴하고, id가 없다면 false를 리턴\n\n  const todo = todos.some(todo => todo.id === id);\n  return todo;\n};\n\nconst write = async todos => {\n  (0,fs__WEBPACK_IMPORTED_MODULE_0__.writeFileSync)('data/todos.json', JSON.stringify(todos));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  getList,\n  exist,\n  write\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGF0YS90b2RvL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUdBLE1BQU1FLE9BQU8sR0FBRyxNQUFNO0VBQ3BCLE1BQU1DLFdBQVcsR0FBR0gsZ0RBQVksQ0FBQyxpQkFBRCxDQUFoQztFQUNBLE1BQU1JLFdBQVcsR0FBR0QsV0FBVyxDQUFDRSxRQUFaLEVBQXBCO0VBQ0EsSUFBSSxDQUFDRCxXQUFMLEVBQWtCLE9BQU8sRUFBUDtFQUVsQixNQUFNRSxLQUFpQixHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osV0FBWCxDQUExQjtFQUNBLE9BQU9FLEtBQVA7QUFDRCxDQVBEOztBQVNBLE1BQU1HLEtBQUssR0FBRyxDQUFDO0VBQUVDO0FBQUYsQ0FBRCxLQUE0QjtFQUN4QyxNQUFNSixLQUFLLEdBQUdKLE9BQU8sRUFBckIsQ0FEd0MsQ0FFeEM7O0VBQ0EsTUFBTVMsSUFBSSxHQUFHTCxLQUFLLENBQUNNLElBQU4sQ0FBV0QsSUFBSSxJQUFJQSxJQUFJLENBQUNELEVBQUwsS0FBWUEsRUFBL0IsQ0FBYjtFQUNBLE9BQU9DLElBQVA7QUFDRCxDQUxEOztBQU9BLE1BQU1FLEtBQUssR0FBRyxNQUFPUCxLQUFQLElBQTZCO0VBQ3pDTCxpREFBYSxDQUFDLGlCQUFELEVBQW9CTSxJQUFJLENBQUNPLFNBQUwsQ0FBZVIsS0FBZixDQUFwQixDQUFiO0FBQ0QsQ0FGRDs7QUFJQSxpRUFBZTtFQUFFSixPQUFGO0VBQVdPLEtBQVg7RUFBa0JJO0FBQWxCLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LW1pbmQvLi9saWIvZGF0YS90b2RvL2luZGV4LnRzPzRiOTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVhZEZpbGVTeW5jLCB3cml0ZUZpbGVTeW5jIH0gZnJvbSAnZnMnO1xyXG5pbXBvcnQgeyBUb2RvVHlwZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL3RvZG8nO1xyXG5cclxuY29uc3QgZ2V0TGlzdCA9ICgpID0+IHtcclxuICBjb25zdCB0b2Rvc0J1ZmZlciA9IHJlYWRGaWxlU3luYygnZGF0YS90b2Rvcy5qc29uJyk7XHJcbiAgY29uc3QgdG9kb3NTdHJpbmcgPSB0b2Rvc0J1ZmZlci50b1N0cmluZygpO1xyXG4gIGlmICghdG9kb3NTdHJpbmcpIHJldHVybiBbXTtcclxuXHJcbiAgY29uc3QgdG9kb3M6IFRvZG9UeXBlW10gPSBKU09OLnBhcnNlKHRvZG9zU3RyaW5nKTtcclxuICByZXR1cm4gdG9kb3M7XHJcbn07XHJcblxyXG5jb25zdCBleGlzdCA9ICh7IGlkIH06IHsgaWQ6IG51bWJlciB9KSA9PiB7XHJcbiAgY29uc3QgdG9kb3MgPSBnZXRMaXN0KCk7XHJcbiAgLy8gc29tZSA6IGlk6rCAIOyeiOuLpOuptCB0cnVl66W8IOumrO2EtO2VmOqzoCwgaWTqsIAg7JeG64uk66m0IGZhbHNl66W8IOumrO2EtFxyXG4gIGNvbnN0IHRvZG8gPSB0b2Rvcy5zb21lKHRvZG8gPT4gdG9kby5pZCA9PT0gaWQpO1xyXG4gIHJldHVybiB0b2RvO1xyXG59O1xyXG5cclxuY29uc3Qgd3JpdGUgPSBhc3luYyAodG9kb3M6IFRvZG9UeXBlW10pID0+IHtcclxuICB3cml0ZUZpbGVTeW5jKCdkYXRhL3RvZG9zLmpzb24nLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgeyBnZXRMaXN0LCBleGlzdCwgd3JpdGUgfTtcclxuIl0sIm5hbWVzIjpbInJlYWRGaWxlU3luYyIsIndyaXRlRmlsZVN5bmMiLCJnZXRMaXN0IiwidG9kb3NCdWZmZXIiLCJ0b2Rvc1N0cmluZyIsInRvU3RyaW5nIiwidG9kb3MiLCJKU09OIiwicGFyc2UiLCJleGlzdCIsImlkIiwidG9kbyIsInNvbWUiLCJ3cml0ZSIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/data/todo/index.ts\n");

/***/ }),

/***/ "(api)/./pages/api/todos/[id]/index.ts":
/*!***************************************!*\
  !*** ./pages/api/todos/[id]/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/data */ \"(api)/./lib/data/index.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  if (req.method === 'PATCH') {\n    try {\n      const todoId = Number(req.query.id);\n      const todo = _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.exist({\n        id: todoId\n      });\n\n      if (!todo) {\n        res.statusCode = 404;\n        res.end();\n      }\n\n      const todos = await _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.getList();\n      const changedTodos = todos.map(todo => {\n        if (todo.id === todoId) return _objectSpread(_objectSpread({}, todo), {}, {\n          checked: !todo.checked\n        });\n        return todo;\n      });\n      _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.write(changedTodos);\n      res.statusCode = 200;\n      res.end();\n    } catch (error) {\n      console.log(error);\n      res.statusCode = 500;\n      res.send(error);\n    }\n\n    res.statusCode = 405;\n    return res.end();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9kb3MvW2lkXS9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBO0FBRUEsaUVBQWUsT0FBT0MsR0FBUCxFQUE0QkMsR0FBNUIsS0FBcUQ7RUFDbEUsSUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsT0FBbkIsRUFBNEI7SUFDMUIsSUFBSTtNQUNGLE1BQU1DLE1BQU0sR0FBR0MsTUFBTSxDQUFDSixHQUFHLENBQUNLLEtBQUosQ0FBVUMsRUFBWCxDQUFyQjtNQUNBLE1BQU1DLElBQUksR0FBR1IsNERBQUEsQ0FBZ0I7UUFBRU8sRUFBRSxFQUFFSDtNQUFOLENBQWhCLENBQWI7O01BQ0EsSUFBSSxDQUFDSSxJQUFMLEVBQVc7UUFDVE4sR0FBRyxDQUFDUSxVQUFKLEdBQWlCLEdBQWpCO1FBQ0FSLEdBQUcsQ0FBQ1MsR0FBSjtNQUNEOztNQUVELE1BQU1DLEtBQUssR0FBRyxNQUFNWiw4REFBQSxFQUFwQjtNQUNBLE1BQU1jLFlBQVksR0FBR0YsS0FBSyxDQUFDRyxHQUFOLENBQVVQLElBQUksSUFBSTtRQUNyQyxJQUFJQSxJQUFJLENBQUNELEVBQUwsS0FBWUgsTUFBaEIsRUFBd0IsdUNBQVlJLElBQVo7VUFBa0JRLE9BQU8sRUFBRSxDQUFDUixJQUFJLENBQUNRO1FBQWpDO1FBQ3hCLE9BQU9SLElBQVA7TUFDRCxDQUhvQixDQUFyQjtNQUtBUiw0REFBQSxDQUFnQmMsWUFBaEI7TUFDQVosR0FBRyxDQUFDUSxVQUFKLEdBQWlCLEdBQWpCO01BQ0FSLEdBQUcsQ0FBQ1MsR0FBSjtJQUNELENBakJELENBaUJFLE9BQU9PLEtBQVAsRUFBYztNQUNkQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtNQUNBaEIsR0FBRyxDQUFDUSxVQUFKLEdBQWlCLEdBQWpCO01BQ0FSLEdBQUcsQ0FBQ21CLElBQUosQ0FBU0gsS0FBVDtJQUNEOztJQUVEaEIsR0FBRyxDQUFDUSxVQUFKLEdBQWlCLEdBQWpCO0lBQ0EsT0FBT1IsR0FBRyxDQUFDUyxHQUFKLEVBQVA7RUFDRDtBQUNGLENBNUJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1taW5kLy4vcGFnZXMvYXBpL3RvZG9zL1tpZF0vaW5kZXgudHM/ZjQyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBEYXRhIGZyb20gJy4uLy4uLy4uLy4uL2xpYi9kYXRhJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSAnUEFUQ0gnKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB0b2RvSWQgPSBOdW1iZXIocmVxLnF1ZXJ5LmlkKTtcclxuICAgICAgY29uc3QgdG9kbyA9IERhdGEudG9kby5leGlzdCh7IGlkOiB0b2RvSWQgfSk7XHJcbiAgICAgIGlmICghdG9kbykge1xyXG4gICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNDA0O1xyXG4gICAgICAgIHJlcy5lbmQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgdG9kb3MgPSBhd2FpdCBEYXRhLnRvZG8uZ2V0TGlzdCgpO1xyXG4gICAgICBjb25zdCBjaGFuZ2VkVG9kb3MgPSB0b2Rvcy5tYXAodG9kbyA9PiB7XHJcbiAgICAgICAgaWYgKHRvZG8uaWQgPT09IHRvZG9JZCkgcmV0dXJuIHsgLi4udG9kbywgY2hlY2tlZDogIXRvZG8uY2hlY2tlZCB9O1xyXG4gICAgICAgIHJldHVybiB0b2RvO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIERhdGEudG9kby53cml0ZShjaGFuZ2VkVG9kb3MpO1xyXG4gICAgICByZXMuc3RhdHVzQ29kZSA9IDIwMDtcclxuICAgICAgcmVzLmVuZCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICByZXMuc3RhdHVzQ29kZSA9IDUwMDtcclxuICAgICAgcmVzLnNlbmQoZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcy5zdGF0dXNDb2RlID0gNDA1O1xyXG4gICAgcmV0dXJuIHJlcy5lbmQoKTtcclxuICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJEYXRhIiwicmVxIiwicmVzIiwibWV0aG9kIiwidG9kb0lkIiwiTnVtYmVyIiwicXVlcnkiLCJpZCIsInRvZG8iLCJleGlzdCIsInN0YXR1c0NvZGUiLCJlbmQiLCJ0b2RvcyIsImdldExpc3QiLCJjaGFuZ2VkVG9kb3MiLCJtYXAiLCJjaGVja2VkIiwid3JpdGUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/todos/[id]/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/todos/[id]/index.ts"));
module.exports = __webpack_exports__;

})();