"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/boards/[boardId]",{

/***/ "./src/components/units/board/comments/commentWrite/BoardCommentWrite.container.tsx":
/*!******************************************************************************************!*\
  !*** ./src/components/units/board/comments/commentWrite/BoardCommentWrite.container.tsx ***!
  \******************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BoardComment; }\n/* harmony export */ });\n/* harmony import */ var C_Users_pjm97_OneDrive_Desktop_myreact_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_pjm97_OneDrive_Desktop_myreact_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_pjm97_OneDrive_Desktop_myreact_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _BoardCommentWrite_presenter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BoardCommentWrite.presenter */ \"./src/components/units/board/comments/commentWrite/BoardCommentWrite.presenter.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _BoardCommentwrite_queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BoardCommentwrite.queries */ \"./src/components/units/board/comments/commentWrite/BoardCommentwrite.queries.ts\");\n/* harmony import */ var _commentList_BoardCommentList_queries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../commentList/BoardCommentList.queries */ \"./src/components/units/board/comments/commentList/BoardCommentList.queries.ts\");\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _instanceof(left, right) {\n    if (right != null && typeof Symbol !== \"undefined\" && right[Symbol.hasInstance]) {\n        return right[Symbol.hasInstance](left);\n    } else {\n        return left instanceof right;\n    }\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction BoardComment() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), commentWriter = ref[0], setCommentWriter = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), commentPassword = ref1[0], setCommentPassword = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), commentContents = ref2[0], setCommentContents = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), commentRating = ref3[0], setCommentRating = ref3[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var ref4 = _slicedToArray((0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(_BoardCommentwrite_queries__WEBPACK_IMPORTED_MODULE_5__.CREATE_BOARD_COMMENTS), 1), createBoardComment = ref4[0];\n    var onChangeCommentWriter = function(e) {\n        setCommentWriter(e.target.value);\n    };\n    var onChangeCommentPassword = function(e) {\n        setCommentPassword(e.target.value);\n    };\n    var onChangeCommentContents = function(e) {\n        setCommentContents(e.target.value);\n    };\n    var onChangeCommentRating = function(rating) {\n        console.log(rating);\n    // setCommentRating(rating);\n    };\n    var onClickCommentRegister = function() {\n        var _ref = _asyncToGenerator(C_Users_pjm97_OneDrive_Desktop_myreact_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_pjm97_OneDrive_Desktop_myreact_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        if (!(typeof router.query.boardId !== \"string\")) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        alert(\"시스템 오류발생\");\n                        return _ctx.abrupt(\"return\");\n                    case 4:\n                        _ctx.next = 6;\n                        return createBoardComment({\n                            variables: {\n                                boardId: router.query.boardId,\n                                createBoardCommentInput: {\n                                    writer: commentWriter,\n                                    password: commentPassword,\n                                    contents: commentContents,\n                                    rating: commentRating\n                                }\n                            },\n                            refetchQueries: [\n                                {\n                                    query: _commentList_BoardCommentList_queries__WEBPACK_IMPORTED_MODULE_6__.FETCH_BOARD_COMMENTS,\n                                    variables: {\n                                        boardId: router.query.boardId\n                                    }\n                                }, \n                            ]\n                        });\n                    case 6:\n                        _ctx.next = 11;\n                        break;\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        if (_instanceof(_ctx.t0, Error)) alert(_ctx.t0.message);\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    8\n                ]\n            ]);\n        }));\n        return function onClickCommentRegister() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_BoardCommentWrite_presenter__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        onChangeCommentWriter: onChangeCommentWriter,\n        onChangeCommentPassword: onChangeCommentPassword,\n        onChangeCommentContents: onChangeCommentContents,\n        onChangeCommentRating: onChangeCommentRating,\n        onClickCommentRegister: onClickCommentRegister,\n        commentContents: commentContents\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\pjm97\\\\OneDrive\\\\Desktop\\\\myreact\\\\my-app\\\\src\\\\components\\\\units\\\\board\\\\comments\\\\commentWrite\\\\BoardCommentWrite.container.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, this));\n};\n_s(BoardComment, \"vGbokmHGOz+aBVpvedUh7mlPuAU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation\n    ];\n});\n_c = BoardComment;\nvar _c;\n$RefreshReg$(_c, \"BoardComment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91bml0cy9ib2FyZC9jb21tZW50cy9jb21tZW50V3JpdGUvQm9hcmRDb21tZW50V3JpdGUuY29udGFpbmVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFFK0I7QUFDbkI7QUFDTDtBQUM0QjtBQUNXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNL0QsUUFBUSxDQUFDTSxZQUFZLEdBQWdCLENBQUM7O0lBQ25ELEdBQUssQ0FBcUNOLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQTlDTyxhQUFhLEdBQXNCUCxHQUFZLEtBQWhDUSxnQkFBZ0IsR0FBSVIsR0FBWTtJQUN0RCxHQUFLLENBQXlDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUFsRFMsZUFBZSxHQUF3QlQsSUFBWSxLQUFsQ1Usa0JBQWtCLEdBQUlWLElBQVk7SUFDMUQsR0FBSyxDQUF5Q0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBbERXLGVBQWUsR0FBd0JYLElBQVksS0FBbENZLGtCQUFrQixHQUFJWixJQUFZO0lBQzFELEdBQUssQ0FBcUNBLElBQWEsR0FBYkEsK0NBQVEsQ0FBQyxDQUFHLEdBQS9DYSxhQUFhLEdBQXNCYixJQUFhLEtBQWpDYyxnQkFBZ0IsR0FBSWQsSUFBYTtJQUV2RCxHQUFLLENBQUNlLE1BQU0sR0FBR1osc0RBQVM7SUFDeEIsR0FBSyxDQUF3QkQsSUFHTCxrQkFIS0EsMkRBQVcsQ0FHdENFLDZFQUFxQixPQUhoQlksa0JBQWtCLEdBQUlkLElBR0w7SUFFeEIsR0FBSyxDQUFDZSxxQkFBcUIsR0FBRyxRQUFRLENBQVBDLENBQWdDLEVBQVcsQ0FBQztRQUN6RVYsZ0JBQWdCLENBQUNVLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLO0lBQ2pDLENBQUM7SUFDRCxHQUFLLENBQUNDLHVCQUF1QixHQUFHLFFBQVEsQ0FBUEgsQ0FBZ0MsRUFBVyxDQUFDO1FBQzNFUixrQkFBa0IsQ0FBQ1EsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUs7SUFDbkMsQ0FBQztJQUNELEdBQUssQ0FBQ0UsdUJBQXVCLEdBQUcsUUFDN0IsQ0FBREosQ0FBbUMsRUFDMUIsQ0FBQztRQUNWTixrQkFBa0IsQ0FBQ00sQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUs7SUFDbkMsQ0FBQztJQUNELEdBQUssQ0FBQ0cscUJBQXFCLEdBQUcsUUFBUSxDQUFQQyxNQUFjLEVBQVcsQ0FBQztRQUN2REMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE1BQU07SUFDbEIsRUFBNEI7SUFDOUIsQ0FBQztJQUVELEdBQUssQ0FBQ0csc0JBQXNCOzhMQUFHLFFBQVEsV0FBbUIsQ0FBQzs7Ozs7OEJBRW5ELE1BQU0sQ0FBQ1osTUFBTSxDQUFDYSxLQUFLLENBQUNDLE9BQU8sS0FBSyxDQUFROzs7O3dCQUMxQ0MsS0FBSyxDQUFDLENBQVU7Ozs7K0JBSVpkLGtCQUFrQixDQUFDLENBQUM7NEJBQ3hCZSxTQUFTLEVBQUUsQ0FBQztnQ0FDVkYsT0FBTyxFQUFFZCxNQUFNLENBQUNhLEtBQUssQ0FBQ0MsT0FBTztnQ0FDN0JHLHVCQUF1QixFQUFFLENBQUM7b0NBQ3hCQyxNQUFNLEVBQUUxQixhQUFhO29DQUNyQjJCLFFBQVEsRUFBRXpCLGVBQWU7b0NBQ3pCMEIsUUFBUSxFQUFFeEIsZUFBZTtvQ0FDekJhLE1BQU0sRUFBRVgsYUFBYTtnQ0FDdkIsQ0FBQzs0QkFDSCxDQUFDOzRCQUNEdUIsY0FBYyxFQUFFLENBQUM7Z0NBQ2YsQ0FBQztvQ0FDQ1IsS0FBSyxFQUFFdkIsdUZBQW9CO29DQUMzQjBCLFNBQVMsRUFBRSxDQUFDO3dDQUFDRixPQUFPLEVBQUVkLE1BQU0sQ0FBQ2EsS0FBSyxDQUFDQyxPQUFPO29DQUFDLENBQUM7Z0NBQzlDLENBQUM7NEJBQ0gsQ0FBQzt3QkFDSCxDQUFDOzs7Ozs7O3dCQUVELEVBQUUsRUFBRVEsV0FBc0IsVUFBTEMsS0FBSyxHQUFFUixLQUFLLFNBQU9TLE9BQU87Ozs7Ozs7Ozs7O1FBRW5ELENBQUM7d0JBM0JLWixzQkFBc0I7Ozs7SUE2QjVCLE1BQU0sNkVBQ0gxQixvRUFBbUI7UUFDbEJnQixxQkFBcUIsRUFBRUEscUJBQXFCO1FBQzVDSSx1QkFBdUIsRUFBRUEsdUJBQXVCO1FBQ2hEQyx1QkFBdUIsRUFBRUEsdUJBQXVCO1FBQ2hEQyxxQkFBcUIsRUFBRUEscUJBQXFCO1FBQzVDSSxzQkFBc0IsRUFBRUEsc0JBQXNCO1FBQzlDaEIsZUFBZSxFQUFFQSxlQUFlOzs7Ozs7QUFHdEMsQ0FBQztHQW5FdUJMLFlBQVk7O1FBTW5CSCxrREFBUztRQUNLRCx1REFBVzs7O0tBUGxCSSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3VuaXRzL2JvYXJkL2NvbW1lbnRzL2NvbW1lbnRXcml0ZS9Cb2FyZENvbW1lbnRXcml0ZS5jb250YWluZXIudHN4P2Y5ZjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHR5cGUgeyBDaGFuZ2VFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQm9hcmRDb21tZW50V3JpdGVVSSBmcm9tIFwiLi9Cb2FyZENvbW1lbnRXcml0ZS5wcmVzZW50ZXJcIjtcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IENSRUFURV9CT0FSRF9DT01NRU5UUyB9IGZyb20gXCIuL0JvYXJkQ29tbWVudHdyaXRlLnF1ZXJpZXNcIjtcclxuaW1wb3J0IHsgRkVUQ0hfQk9BUkRfQ09NTUVOVFMgfSBmcm9tIFwiLi4vY29tbWVudExpc3QvQm9hcmRDb21tZW50TGlzdC5xdWVyaWVzXCI7XHJcbmltcG9ydCB0eXBlIHtcclxuICBJTXV0YXRpb24sXHJcbiAgSU11dGF0aW9uQ3JlYXRlQm9hcmRDb21tZW50QXJncyxcclxufSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vY29tbW9ucy90eXBlcy9nZW5lcmF0ZWQvdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvYXJkQ29tbWVudCgpOiBKU1guRWxlbWVudCB7XHJcbiAgY29uc3QgW2NvbW1lbnRXcml0ZXIsIHNldENvbW1lbnRXcml0ZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbW1lbnRQYXNzd29yZCwgc2V0Q29tbWVudFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb21tZW50Q29udGVudHMsIHNldENvbW1lbnRDb250ZW50c10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29tbWVudFJhdGluZywgc2V0Q29tbWVudFJhdGluZ10gPSB1c2VTdGF0ZSgwLjApO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbY3JlYXRlQm9hcmRDb21tZW50XSA9IHVzZU11dGF0aW9uPFxyXG4gICAgUGljazxJTXV0YXRpb24sIFwiY3JlYXRlQm9hcmRDb21tZW50XCI+LFxyXG4gICAgSU11dGF0aW9uQ3JlYXRlQm9hcmRDb21tZW50QXJnc1xyXG4gID4oQ1JFQVRFX0JPQVJEX0NPTU1FTlRTKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VDb21tZW50V3JpdGVyID0gKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KTogdm9pZCA9PiB7XHJcbiAgICBzZXRDb21tZW50V3JpdGVyKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uQ2hhbmdlQ29tbWVudFBhc3N3b3JkID0gKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KTogdm9pZCA9PiB7XHJcbiAgICBzZXRDb21tZW50UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25DaGFuZ2VDb21tZW50Q29udGVudHMgPSAoXHJcbiAgICBlOiBDaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PlxyXG4gICk6IHZvaWQgPT4ge1xyXG4gICAgc2V0Q29tbWVudENvbnRlbnRzKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uQ2hhbmdlQ29tbWVudFJhdGluZyA9IChyYXRpbmc6IG51bWJlcik6IHZvaWQgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocmF0aW5nKTtcclxuICAgIC8vIHNldENvbW1lbnRSYXRpbmcocmF0aW5nKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNsaWNrQ29tbWVudFJlZ2lzdGVyID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKHR5cGVvZiByb3V0ZXIucXVlcnkuYm9hcmRJZCAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIGFsZXJ0KFwi7Iuc7Iqk7YWcIOyYpOulmOuwnOyDnVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGF3YWl0IGNyZWF0ZUJvYXJkQ29tbWVudCh7XHJcbiAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICBib2FyZElkOiByb3V0ZXIucXVlcnkuYm9hcmRJZCxcclxuICAgICAgICAgIGNyZWF0ZUJvYXJkQ29tbWVudElucHV0OiB7XHJcbiAgICAgICAgICAgIHdyaXRlcjogY29tbWVudFdyaXRlcixcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IGNvbW1lbnRQYXNzd29yZCxcclxuICAgICAgICAgICAgY29udGVudHM6IGNvbW1lbnRDb250ZW50cyxcclxuICAgICAgICAgICAgcmF0aW5nOiBjb21tZW50UmF0aW5nLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHF1ZXJ5OiBGRVRDSF9CT0FSRF9DT01NRU5UUyxcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7IGJvYXJkSWQ6IHJvdXRlci5xdWVyeS5ib2FyZElkIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm9hcmRDb21tZW50V3JpdGVVSVxyXG4gICAgICBvbkNoYW5nZUNvbW1lbnRXcml0ZXI9e29uQ2hhbmdlQ29tbWVudFdyaXRlcn1cclxuICAgICAgb25DaGFuZ2VDb21tZW50UGFzc3dvcmQ9e29uQ2hhbmdlQ29tbWVudFBhc3N3b3JkfVxyXG4gICAgICBvbkNoYW5nZUNvbW1lbnRDb250ZW50cz17b25DaGFuZ2VDb21tZW50Q29udGVudHN9XHJcbiAgICAgIG9uQ2hhbmdlQ29tbWVudFJhdGluZz17b25DaGFuZ2VDb21tZW50UmF0aW5nfVxyXG4gICAgICBvbkNsaWNrQ29tbWVudFJlZ2lzdGVyPXtvbkNsaWNrQ29tbWVudFJlZ2lzdGVyfVxyXG4gICAgICBjb21tZW50Q29udGVudHM9e2NvbW1lbnRDb250ZW50c31cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJCb2FyZENvbW1lbnRXcml0ZVVJIiwidXNlTXV0YXRpb24iLCJ1c2VSb3V0ZXIiLCJDUkVBVEVfQk9BUkRfQ09NTUVOVFMiLCJGRVRDSF9CT0FSRF9DT01NRU5UUyIsIkJvYXJkQ29tbWVudCIsImNvbW1lbnRXcml0ZXIiLCJzZXRDb21tZW50V3JpdGVyIiwiY29tbWVudFBhc3N3b3JkIiwic2V0Q29tbWVudFBhc3N3b3JkIiwiY29tbWVudENvbnRlbnRzIiwic2V0Q29tbWVudENvbnRlbnRzIiwiY29tbWVudFJhdGluZyIsInNldENvbW1lbnRSYXRpbmciLCJyb3V0ZXIiLCJjcmVhdGVCb2FyZENvbW1lbnQiLCJvbkNoYW5nZUNvbW1lbnRXcml0ZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvbkNoYW5nZUNvbW1lbnRQYXNzd29yZCIsIm9uQ2hhbmdlQ29tbWVudENvbnRlbnRzIiwib25DaGFuZ2VDb21tZW50UmF0aW5nIiwicmF0aW5nIiwiY29uc29sZSIsImxvZyIsIm9uQ2xpY2tDb21tZW50UmVnaXN0ZXIiLCJxdWVyeSIsImJvYXJkSWQiLCJhbGVydCIsInZhcmlhYmxlcyIsImNyZWF0ZUJvYXJkQ29tbWVudElucHV0Iiwid3JpdGVyIiwicGFzc3dvcmQiLCJjb250ZW50cyIsInJlZmV0Y2hRdWVyaWVzIiwiZXJyb3IiLCJFcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/units/board/comments/commentWrite/BoardCommentWrite.container.tsx\n");

/***/ })

});