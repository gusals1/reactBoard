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

/***/ "./src/components/units/board/detail/BoardDetail.container.tsx":
/*!*********************************************************************!*\
  !*** ./src/components/units/board/detail/BoardDetail.container.tsx ***!
  \*********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BoardDetail; }\n/* harmony export */ });\n/* harmony import */ var C_Users_pjm97_OneDrive_Desktop_myreact_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_pjm97_OneDrive_Desktop_myreact_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_pjm97_OneDrive_Desktop_myreact_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _BoardDetail_presenter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoardDetail.presenter */ \"./src/components/units/board/detail/BoardDetail.presenter.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _BoardDetail_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BoardDetail.queries */ \"./src/components/units/board/detail/BoardDetail.queries.ts\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _instanceof(left, right) {\n    if (right != null && typeof Symbol !== \"undefined\" && right[Symbol.hasInstance]) {\n        return right[Symbol.hasInstance](left);\n    } else {\n        return left instanceof right;\n    }\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction BoardDetail() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var data = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(_BoardDetail_queries__WEBPACK_IMPORTED_MODULE_4__.FETCH_BOARD, typeof router.query.boardId === \"string\" ? {\n        variables: {\n            boardId: router.query.boardId\n        }\n    } : {}).data;\n    var ref = _slicedToArray((0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation)(_BoardDetail_queries__WEBPACK_IMPORTED_MODULE_4__.DELETE_BOARD), 1), deleteBoard = ref[0];\n    var ref1 = _slicedToArray((0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation)(_BoardDetail_queries__WEBPACK_IMPORTED_MODULE_4__.LIKE_BOARD), 1), likeBoard = ref1[0];\n    var ref2 = _slicedToArray((0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation)(_BoardDetail_queries__WEBPACK_IMPORTED_MODULE_4__.DISLIKE_BOARD), 1), dislikeBoard = ref2[0];\n    var MoveToList = function() {\n        void router.push(\"./\");\n    };\n    var MoveToEdit = function() {\n        void router.push(\"\".concat(router.asPath, \"/edit\"));\n    };\n    var onClickDelete = function() {\n        var _ref = _asyncToGenerator(C_Users_pjm97_OneDrive_Desktop_myreact_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_pjm97_OneDrive_Desktop_myreact_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        if (!(typeof router.query.boardId !== \"string\")) {\n                            _ctx.next = 3;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 3:\n                        _ctx.next = 5;\n                        return deleteBoard({\n                            variables: {\n                                boardId: router.query.boardId\n                            }\n                        });\n                    case 5:\n                        alert(\"삭제했습니다\");\n                        void router.push(\"/boards\");\n                        _ctx.next = 12;\n                        break;\n                    case 9:\n                        _ctx.prev = 9;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        if (_instanceof(_ctx.t0, Error)) alert(_ctx.t0.message);\n                    case 12:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    9\n                ]\n            ]);\n        }));\n        return function onClickDelete() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var onClickCountUp = function() {\n        var _ref = _asyncToGenerator(C_Users_pjm97_OneDrive_Desktop_myreact_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_pjm97_OneDrive_Desktop_myreact_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        if (!(typeof router.query.boardId !== \"string\")) {\n                            _ctx.next = 3;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 3:\n                        _ctx.next = 5;\n                        return likeBoard({\n                            variables: {\n                                boardId: router.query.boardId\n                            },\n                            refetchQueries: [\n                                {\n                                    query: _BoardDetail_queries__WEBPACK_IMPORTED_MODULE_4__.FETCH_BOARD,\n                                    variables: {\n                                        boardId: router.query.boardId\n                                    }\n                                }, \n                            ]\n                        });\n                    case 5:\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        if (_instanceof(_ctx.t0, Error)) alert(_ctx.t0.message);\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7\n                ]\n            ]);\n        }));\n        return function onClickCountUp() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var onClickCountDown = function() {\n        var _ref = _asyncToGenerator(C_Users_pjm97_OneDrive_Desktop_myreact_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_pjm97_OneDrive_Desktop_myreact_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        if (!(typeof router.query.boardId !== \"string\")) {\n                            _ctx.next = 3;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 3:\n                        _ctx.next = 5;\n                        return dislikeBoard({\n                            variables: {\n                                boardId: router.query.boardId\n                            },\n                            refetchQueries: [\n                                {\n                                    query: _BoardDetail_queries__WEBPACK_IMPORTED_MODULE_4__.FETCH_BOARD,\n                                    variables: {\n                                        boardId: router.query.boardId\n                                    }\n                                }, \n                            ]\n                        });\n                    case 5:\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        if (_instanceof(_ctx.t0, Error)) alert(_ctx.t0.message);\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7\n                ]\n            ]);\n        }));\n        return function onClickCountDown() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    console.log(data);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_BoardDetail_presenter__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        data: data,\n        MoveToEdit: MoveToEdit,\n        MoveToList: MoveToList,\n        onClickDelete: onClickDelete,\n        onClickCountUp: onClickCountUp,\n        onClickCountDown: onClickCountDown\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\pjm97\\\\OneDrive\\\\Desktop\\\\myreact\\\\my-app\\\\src\\\\components\\\\units\\\\board\\\\detail\\\\BoardDetail.container.tsx\",\n        lineNumber: 105,\n        columnNumber: 5\n    }, this));\n};\n_s(BoardDetail, \"dlbFsiLWdmspWA/toUXbjGKZmX0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation\n    ];\n});\n_c = BoardDetail;\nvar _c;\n$RefreshReg$(_c, \"BoardDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91bml0cy9ib2FyZC9kZXRhaWwvQm9hcmREZXRhaWwuY29udGFpbmVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDWjtBQU1UO0FBQ3dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVdkMsUUFBUSxDQUFDUSxXQUFXLEdBQWdCLENBQUM7O0lBQ2xELEdBQUssQ0FBQ0MsTUFBTSxHQUFHUixzREFBUztJQUV4QixHQUFLLENBQUdTLElBQUksR0FBS0gsd0RBQVEsQ0FDdkJKLDZEQUFXLEVBQ1gsTUFBTSxDQUFDTSxNQUFNLENBQUNFLEtBQUssQ0FBQ0MsT0FBTyxLQUFLLENBQVEsVUFDcEMsQ0FBQztRQUFDQyxTQUFTLEVBQUUsQ0FBQztZQUFDRCxPQUFPLEVBQUVILE1BQU0sQ0FBQ0UsS0FBSyxDQUFDQyxPQUFPO1FBQUMsQ0FBQztJQUFDLENBQUMsR0FDaEQsQ0FBQyxDQUFDLEVBSkFGLElBQUk7SUFPWixHQUFLLENBQWlCSixHQUdQLGtCQUhPQSwyREFBVyxDQUcvQkosOERBQVksT0FIUFksV0FBVyxHQUFJUixHQUdQO0lBRWYsR0FBSyxDQUFlQSxJQUdQLGtCQUhPQSwyREFBVyxDQUc3QkYsNERBQVUsT0FITFcsU0FBUyxHQUFJVCxJQUdQO0lBRWIsR0FBSyxDQUFrQkEsSUFHUCxrQkFIT0EsMkRBQVcsQ0FHaENELCtEQUFhLE9BSFJXLFlBQVksR0FBSVYsSUFHUDtJQUVoQixHQUFLLENBQUNXLFVBQVUsR0FBRyxRQUFRLEdBQUksQ0FBQztRQUM5QixJQUFJLENBQUNSLE1BQU0sQ0FBQ1MsSUFBSSxDQUFDLENBQUk7SUFDdkIsQ0FBQztJQUVELEdBQUssQ0FBQ0MsVUFBVSxHQUFHLFFBQVEsR0FBSSxDQUFDO1FBQzlCLElBQUksQ0FBQ1YsTUFBTSxDQUFDUyxJQUFJLENBQUUsR0FBZ0IsTUFBSyxDQUFuQlQsTUFBTSxDQUFDVyxNQUFNLEVBQUMsQ0FBSztJQUN6QyxDQUFDO0lBQ0QsR0FBSyxDQUFDQyxhQUFhOzhMQUFHLFFBQVEsV0FBbUIsQ0FBQzs7Ozs7OEJBRTFDLE1BQU0sQ0FBQ1osTUFBTSxDQUFDRSxLQUFLLENBQUNDLE9BQU8sS0FBSyxDQUFROzs7Ozs7OytCQUN0Q0UsV0FBVyxDQUFDLENBQUM7NEJBQ2pCRCxTQUFTLEVBQUUsQ0FBQztnQ0FDVkQsT0FBTyxFQUFFSCxNQUFNLENBQUNFLEtBQUssQ0FBQ0MsT0FBTzs0QkFDL0IsQ0FBQzt3QkFDSCxDQUFDOzt3QkFDRFUsS0FBSyxDQUFDLENBQVE7d0JBQ2QsSUFBSSxDQUFDYixNQUFNLENBQUNTLElBQUksQ0FBQyxDQUFTOzs7Ozs7d0JBRTFCLEVBQUUsRUFBRUssV0FBc0IsVUFBTEMsS0FBSyxHQUFFRixLQUFLLFNBQU9HLE9BQU87Ozs7Ozs7Ozs7O1FBRW5ELENBQUM7d0JBYktKLGFBQWE7Ozs7SUFlbkIsR0FBSyxDQUFDSyxjQUFjOzhMQUFHLFFBQVEsV0FBbUIsQ0FBQzs7Ozs7OEJBRTNDLE1BQU0sQ0FBQ2pCLE1BQU0sQ0FBQ0UsS0FBSyxDQUFDQyxPQUFPLEtBQUssQ0FBUTs7Ozs7OzsrQkFDdENHLFNBQVMsQ0FBQyxDQUFDOzRCQUNmRixTQUFTLEVBQUUsQ0FBQztnQ0FDVkQsT0FBTyxFQUFFSCxNQUFNLENBQUNFLEtBQUssQ0FBQ0MsT0FBTzs0QkFDL0IsQ0FBQzs0QkFDRGUsY0FBYyxFQUFFLENBQUM7Z0NBQ2YsQ0FBQztvQ0FDQ2hCLEtBQUssRUFBRVIsNkRBQVc7b0NBQ2xCVSxTQUFTLEVBQUUsQ0FBQzt3Q0FBQ0QsT0FBTyxFQUFFSCxNQUFNLENBQUNFLEtBQUssQ0FBQ0MsT0FBTztvQ0FBQyxDQUFDO2dDQUM5QyxDQUFDOzRCQUNILENBQUM7d0JBQ0gsQ0FBQzs7Ozs7Ozt3QkFFRCxFQUFFLEVBQUVXLFdBQXNCLFVBQUxDLEtBQUssR0FBRUYsS0FBSyxTQUFPRyxPQUFPOzs7Ozs7Ozs7OztRQUVuRCxDQUFDO3dCQWpCS0MsY0FBYzs7OztJQW1CcEIsR0FBSyxDQUFDRSxnQkFBZ0I7OExBQUcsUUFBUSxXQUFtQixDQUFDOzs7Ozs4QkFFN0MsTUFBTSxDQUFDbkIsTUFBTSxDQUFDRSxLQUFLLENBQUNDLE9BQU8sS0FBSyxDQUFROzs7Ozs7OytCQUN0Q0ksWUFBWSxDQUFDLENBQUM7NEJBQ2xCSCxTQUFTLEVBQUUsQ0FBQztnQ0FDVkQsT0FBTyxFQUFFSCxNQUFNLENBQUNFLEtBQUssQ0FBQ0MsT0FBTzs0QkFDL0IsQ0FBQzs0QkFDRGUsY0FBYyxFQUFFLENBQUM7Z0NBQ2YsQ0FBQztvQ0FDQ2hCLEtBQUssRUFBRVIsNkRBQVc7b0NBQ2xCVSxTQUFTLEVBQUUsQ0FBQzt3Q0FBQ0QsT0FBTyxFQUFFSCxNQUFNLENBQUNFLEtBQUssQ0FBQ0MsT0FBTztvQ0FBQyxDQUFDO2dDQUM5QyxDQUFDOzRCQUNILENBQUM7d0JBQ0gsQ0FBQzs7Ozs7Ozt3QkFFRCxFQUFFLEVBQUVXLFdBQXNCLFVBQUxDLEtBQUssR0FBRUYsS0FBSyxTQUFPRyxPQUFPOzs7Ozs7Ozs7OztRQUVuRCxDQUFDO3dCQWpCS0csZ0JBQWdCOzs7O0lBa0J0QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNwQixJQUFJO0lBQ2hCLE1BQU0sNkVBQ0hWLDhEQUFhO1FBQ1pVLElBQUksRUFBRUEsSUFBSTtRQUNWUyxVQUFVLEVBQUVBLFVBQVU7UUFDdEJGLFVBQVUsRUFBRUEsVUFBVTtRQUN0QkksYUFBYSxFQUFFQSxhQUFhO1FBQzVCSyxjQUFjLEVBQUVBLGNBQWM7UUFDOUJFLGdCQUFnQixFQUFFQSxnQkFBZ0I7Ozs7OztBQUd4QyxDQUFDO0dBL0Z1QnBCLFdBQVc7O1FBQ2xCUCxrREFBUztRQUVQTSxvREFBUTtRQU9IRCx1REFBVztRQUtiQSx1REFBVztRQUtSQSx1REFBVzs7O0tBcEJaRSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3VuaXRzL2JvYXJkL2RldGFpbC9Cb2FyZERldGFpbC5jb250YWluZXIudHN4PzhkNmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJvYXJkRGV0YWlsVUkgZnJvbSBcIi4vQm9hcmREZXRhaWwucHJlc2VudGVyXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQge1xyXG4gIERFTEVURV9CT0FSRCxcclxuICBGRVRDSF9CT0FSRCxcclxuICBMSUtFX0JPQVJELFxyXG4gIERJU0xJS0VfQk9BUkQsXHJcbn0gZnJvbSBcIi4vQm9hcmREZXRhaWwucXVlcmllc1wiO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHR5cGUge1xyXG4gIElNdXRhdGlvbixcclxuICBJTXV0YXRpb25EZWxldGVCb2FyZEFyZ3MsXHJcbiAgSU11dGF0aW9uRGlzbGlrZUJvYXJkQXJncyxcclxuICBJTXV0YXRpb25MaWtlQm9hcmRBcmdzLFxyXG4gIElRdWVyeSxcclxuICBJUXVlcnlGZXRjaEJvYXJkQXJncyxcclxufSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9ucy90eXBlcy9nZW5lcmF0ZWQvdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvYXJkRGV0YWlsKCk6IEpTWC5FbGVtZW50IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeTxQaWNrPElRdWVyeSwgXCJmZXRjaEJvYXJkXCI+LCBJUXVlcnlGZXRjaEJvYXJkQXJncz4oXHJcbiAgICBGRVRDSF9CT0FSRCxcclxuICAgIHR5cGVvZiByb3V0ZXIucXVlcnkuYm9hcmRJZCA9PT0gXCJzdHJpbmdcIlxyXG4gICAgICA/IHsgdmFyaWFibGVzOiB7IGJvYXJkSWQ6IHJvdXRlci5xdWVyeS5ib2FyZElkIH0gfVxyXG4gICAgICA6IHt9XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgW2RlbGV0ZUJvYXJkXSA9IHVzZU11dGF0aW9uPFxyXG4gICAgUGljazxJTXV0YXRpb24sIFwiZGVsZXRlQm9hcmRcIj4sXHJcbiAgICBJTXV0YXRpb25EZWxldGVCb2FyZEFyZ3NcclxuICA+KERFTEVURV9CT0FSRCk7XHJcblxyXG4gIGNvbnN0IFtsaWtlQm9hcmRdID0gdXNlTXV0YXRpb248XHJcbiAgICBQaWNrPElNdXRhdGlvbiwgXCJsaWtlQm9hcmRcIj4sXHJcbiAgICBJTXV0YXRpb25MaWtlQm9hcmRBcmdzXHJcbiAgPihMSUtFX0JPQVJEKTtcclxuXHJcbiAgY29uc3QgW2Rpc2xpa2VCb2FyZF0gPSB1c2VNdXRhdGlvbjxcclxuICAgIFBpY2s8SU11dGF0aW9uLCBcImRpc2xpa2VCb2FyZFwiPixcclxuICAgIElNdXRhdGlvbkRpc2xpa2VCb2FyZEFyZ3NcclxuICA+KERJU0xJS0VfQk9BUkQpO1xyXG5cclxuICBjb25zdCBNb3ZlVG9MaXN0ID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgdm9pZCByb3V0ZXIucHVzaChcIi4vXCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IE1vdmVUb0VkaXQgPSAoKTogdm9pZCA9PiB7XHJcbiAgICB2b2lkIHJvdXRlci5wdXNoKGAke3JvdXRlci5hc1BhdGh9L2VkaXRgKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uQ2xpY2tEZWxldGUgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAodHlwZW9mIHJvdXRlci5xdWVyeS5ib2FyZElkICE9PSBcInN0cmluZ1wiKSByZXR1cm47XHJcbiAgICAgIGF3YWl0IGRlbGV0ZUJvYXJkKHtcclxuICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgIGJvYXJkSWQ6IHJvdXRlci5xdWVyeS5ib2FyZElkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBhbGVydChcIuyCreygnO2WiOyKteuLiOuLpFwiKTtcclxuICAgICAgdm9pZCByb3V0ZXIucHVzaChcIi9ib2FyZHNcIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikgYWxlcnQoZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DbGlja0NvdW50VXAgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAodHlwZW9mIHJvdXRlci5xdWVyeS5ib2FyZElkICE9PSBcInN0cmluZ1wiKSByZXR1cm47XHJcbiAgICAgIGF3YWl0IGxpa2VCb2FyZCh7XHJcbiAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICBib2FyZElkOiByb3V0ZXIucXVlcnkuYm9hcmRJZCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHF1ZXJ5OiBGRVRDSF9CT0FSRCxcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7IGJvYXJkSWQ6IHJvdXRlci5xdWVyeS5ib2FyZElkIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tDb3VudERvd24gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAodHlwZW9mIHJvdXRlci5xdWVyeS5ib2FyZElkICE9PSBcInN0cmluZ1wiKSByZXR1cm47XHJcbiAgICAgIGF3YWl0IGRpc2xpa2VCb2FyZCh7XHJcbiAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICBib2FyZElkOiByb3V0ZXIucXVlcnkuYm9hcmRJZCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHF1ZXJ5OiBGRVRDSF9CT0FSRCxcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7IGJvYXJkSWQ6IHJvdXRlci5xdWVyeS5ib2FyZElkIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb2FyZERldGFpbFVJXHJcbiAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgIE1vdmVUb0VkaXQ9e01vdmVUb0VkaXR9XHJcbiAgICAgIE1vdmVUb0xpc3Q9e01vdmVUb0xpc3R9XHJcbiAgICAgIG9uQ2xpY2tEZWxldGU9e29uQ2xpY2tEZWxldGV9XHJcbiAgICAgIG9uQ2xpY2tDb3VudFVwPXtvbkNsaWNrQ291bnRVcH1cclxuICAgICAgb25DbGlja0NvdW50RG93bj17b25DbGlja0NvdW50RG93bn1cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQm9hcmREZXRhaWxVSSIsInVzZVJvdXRlciIsIkRFTEVURV9CT0FSRCIsIkZFVENIX0JPQVJEIiwiTElLRV9CT0FSRCIsIkRJU0xJS0VfQk9BUkQiLCJ1c2VNdXRhdGlvbiIsInVzZVF1ZXJ5IiwiQm9hcmREZXRhaWwiLCJyb3V0ZXIiLCJkYXRhIiwicXVlcnkiLCJib2FyZElkIiwidmFyaWFibGVzIiwiZGVsZXRlQm9hcmQiLCJsaWtlQm9hcmQiLCJkaXNsaWtlQm9hcmQiLCJNb3ZlVG9MaXN0IiwicHVzaCIsIk1vdmVUb0VkaXQiLCJhc1BhdGgiLCJvbkNsaWNrRGVsZXRlIiwiYWxlcnQiLCJlcnJvciIsIkVycm9yIiwibWVzc2FnZSIsIm9uQ2xpY2tDb3VudFVwIiwicmVmZXRjaFF1ZXJpZXMiLCJvbkNsaWNrQ291bnREb3duIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/units/board/detail/BoardDetail.container.tsx\n");

/***/ })

});