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

/***/ "./components/sign/index.jsx":
/*!***********************************!*\
  !*** ./components/sign/index.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Sign; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_toolkit_features_modal_window_modalSlice_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux_toolkit/features/modal-window/modalSlice.tsx */ \"./redux_toolkit/features/modal-window/modalSlice.tsx\");\n/* harmony import */ var _redux_toolkit_features_user_userSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux_toolkit/features/user/userSlice */ \"./redux_toolkit/features/user/userSlice.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Sign(param) {\n    let { type } = param;\n    _s();\n    const isRegister = type == \"register\";\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n    const path = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.path.photo);\n    const register = (btn)=>{\n        const [name, lastName, phone, pass, secPass] = btn.target.form;\n        if (pass.value == secPass.value) {\n            axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"/api/users?work=create\", {\n                name: name.value,\n                lastName: lastName.value,\n                password: pass.value,\n                contacts: {\n                    phone: phone.value\n                }\n            }).then((response)=>{\n                console.log(response);\n                dispatch((0,_redux_toolkit_features_user_userSlice__WEBPACK_IMPORTED_MODULE_4__.setUser)({\n                    id: _id,\n                    name,\n                    lastName,\n                    contacts\n                }));\n                btn.target.form.offsetParent.style.display = \"none\";\n            }).catch((error)=>{\n                console.log(error);\n            });\n        }\n    };\n    const log = (btn)=>{\n        const [phone, password] = btn.target.form;\n        if (phone.value && password.value) {\n            axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"/api/users?work=authorise\", {\n                phone: phone.value,\n                password: password.value\n            }).then((resp)=>{\n                const { _id: _id1, name, lastName, contacts: contacts1 } = resp.data.userInfo;\n                dispatch((0,_redux_toolkit_features_user_userSlice__WEBPACK_IMPORTED_MODULE_4__.setUser)({\n                    id: _id1,\n                    name,\n                    lastName,\n                    contacts: contacts1\n                }));\n                router.push(\"/user/\" + resp.data.userInfo._id);\n                btn.target.form.offsetParent.style.display = \"none\";\n            }).catch((err)=>{\n                dispatch((0,_redux_toolkit_features_modal_window_modalSlice_tsx__WEBPACK_IMPORTED_MODULE_3__.setModal)({\n                    type: \"Error\",\n                    text: \"Error \".concat(err.response.status, \": \").concat(err.response.data.error)\n                }));\n            });\n        } else {\n            dispatch((0,_redux_toolkit_features_modal_window_modalSlice_tsx__WEBPACK_IMPORTED_MODULE_3__.setModal)({\n                type: \"Error\",\n                text: \"Error 400: Заповніть усі поля!\"\n            }));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: type,\n        className: \"fixed top-0 left-0 w-screen h-screen z-20 bg-[#2b2a3096] flex-wrap content-center justify-center hidden target:flex\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"3sm:w-96 w-auto px-7 py-12 pb-8 bg-dark-brown rounded-2xl relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"absolute top-4 right-6 text-my-white text-2xl cursor-pointer\",\n                    onClick: (x)=>x.target.offsetParent.offsetParent.style.display = \"none\",\n                    children: \"x\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\sign\\\\index.jsx\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    className: \"mx-auto\",\n                    src: \"\".concat(path, \"icons/\").concat(type, \".svg\"),\n                    width: \"150\",\n                    height: \"150\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\sign\\\\index.jsx\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-56 4sm:w-72 3sm:w-auto mx-auto mt-2.5 mb-7 gap-0.5 grid\",\n                    children: [\n                        isRegister ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-2 3sm:gap-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                                    label: \"Ім'я\",\n                                    name: \"name\",\n                                    width: \"150\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\sign\\\\index.jsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                                    label: \"Прізвище\",\n                                    name: \"lastname\",\n                                    width: \"150\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\sign\\\\index.jsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\sign\\\\index.jsx\",\n                            lineNumber: 106,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                            label: \"Телефон\",\n                            name: \"phone\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\sign\\\\index.jsx\",\n                            lineNumber: 113,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                            label: \"Пароль\",\n                            name: \"pass\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\sign\\\\index.jsx\",\n                            lineNumber: 114,\n                            columnNumber: 11\n                        }, this),\n                        isRegister ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                            label: \"Пароль щераз\",\n                            name: \"secpass\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\sign\\\\index.jsx\",\n                            lineNumber: 115,\n                            columnNumber: 25\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\sign\\\\index.jsx\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        onClick: (btn)=>isRegister ? register(btn) : log(btn),\n                        className: \"mx-auto mb-8 py-1 px-3 rounded-lg border-2 border-bodily text-bodily hover:text-dark-brown hover:bg-bodily font-marck-script text-3xl tracking-wide block\",\n                        children: isRegister ? \"Зареєструватись\" : \"Увійти\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\sign\\\\index.jsx\",\n                        lineNumber: 118,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\sign\\\\index.jsx\",\n                    lineNumber: 117,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between\",\n                    children: isRegister ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        onClick: (a)=>{\n                            a.target.offsetParent.offsetParent.style.display = \"none\";\n                            a.target.parentElement.parentElement.parentElement.previousSibling.style.display = \"flex\";\n                        },\n                        className: \"mx-auto font-pt-sans-narrow tracking-wider text-my-white cursor-pointer\",\n                        children: \"Увійти\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\sign\\\\index.jsx\",\n                        lineNumber: 128,\n                        columnNumber: 13\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        onClick: (a)=>{\n                            a.target.offsetParent.offsetParent.style.display = \"none\";\n                            a.target.parentElement.parentElement.parentElement.nextSibling.style.display = \"flex\";\n                        },\n                        className: \"font-pt-sans-narrow tracking-wider text-my-white cursor-pointer\",\n                        children: \"Зареєструватись\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\sign\\\\index.jsx\",\n                        lineNumber: 139,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\sign\\\\index.jsx\",\n                    lineNumber: 126,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\sign\\\\index.jsx\",\n            lineNumber: 89,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\sign\\\\index.jsx\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, this);\n}\n_s(Sign, \"Hq1LZvOYFtsWJe65FCT1CbAwtqE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector\n    ];\n});\n_c = Sign;\nfunction Input(param) {\n    let { label, name, width } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid font-pt-sans-narrow text-lg tracking-wider text-my-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: name,\n                children: label\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\sign\\\\index.jsx\",\n                lineNumber: 159,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"px-2 py-0.5 rounded shadow-[inset_2px_3px_6px_#AC8930] target:border-none focus-visible:outline-none text-my-black\",\n                style: {\n                    width: width + \"px\"\n                },\n                type: \"text\",\n                name: name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\sign\\\\index.jsx\",\n                lineNumber: 160,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\sign\\\\index.jsx\",\n        lineNumber: 158,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Input;\nvar _c, _c1;\n$RefreshReg$(_c, \"Sign\");\n$RefreshReg$(_c1, \"Input\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NpZ24vaW5kZXguanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDSztBQUNTO0FBQ2U7QUFDeUI7QUFDZDtBQUVuRCxTQUFTTyxLQUFLLEtBQVE7UUFBUixFQUFFQyxJQUFJLEVBQUUsR0FBUjs7SUFDM0IsTUFBTUMsYUFBYUQsUUFBUTtJQUMzQixNQUFNRSxTQUFTUixzREFBU0E7SUFDeEIsTUFBTVMsV0FBV1Isd0RBQVdBO0lBQzVCLE1BQU1TLE9BQU9SLHdEQUFXQSxDQUFDLENBQUNTLFFBQVVBLE1BQU1ELElBQUksQ0FBQ0UsS0FBSztJQUVwRCxNQUFNQyxXQUFXLENBQUNDO1FBQ2hCLE1BQU0sQ0FBQ0MsTUFBTUMsVUFBVUMsT0FBT0MsTUFBTUMsUUFBUSxHQUFHTCxJQUFJTSxNQUFNLENBQUNDLElBQUk7UUFDOUQsSUFBSUgsS0FBS0ksS0FBSyxJQUFJSCxRQUFRRyxLQUFLLEVBQUU7WUFDL0J4QixrREFDTyxDQUFDLDBCQUEwQjtnQkFDOUJpQixNQUFNQSxLQUFLTyxLQUFLO2dCQUNoQk4sVUFBVUEsU0FBU00sS0FBSztnQkFDeEJFLFVBQVVOLEtBQUtJLEtBQUs7Z0JBQ3BCRyxVQUFVO29CQUNSUixPQUFPQSxNQUFNSyxLQUFLO2dCQUNwQjtZQUNGLEdBQ0NJLElBQUksQ0FBQyxDQUFDQztnQkFDTEMsUUFBUUMsR0FBRyxDQUFDRjtnQkFDWmxCLFNBQ0VMLCtFQUFPQSxDQUFDO29CQUNOMEIsSUFBSUM7b0JBQ0poQjtvQkFDQUM7b0JBQ0FTO2dCQUNGO2dCQUdGWCxJQUFJTSxNQUFNLENBQUNDLElBQUksQ0FBQ1csWUFBWSxDQUFDQyxLQUFLLENBQUNDLE9BQU8sR0FBRztZQUMvQyxHQUNDQyxLQUFLLENBQUMsQ0FBQ0M7Z0JBQ05SLFFBQVFDLEdBQUcsQ0FBQ087WUFDZDtRQUNKO0lBQ0Y7SUFFQSxNQUFNUCxNQUFNLENBQUNmO1FBQ1gsTUFBTSxDQUFDRyxPQUFPTyxTQUFTLEdBQUdWLElBQUlNLE1BQU0sQ0FBQ0MsSUFBSTtRQUN6QyxJQUFJSixNQUFNSyxLQUFLLElBQUlFLFNBQVNGLEtBQUssRUFBRTtZQUNqQ3hCLGtEQUNPLENBQUMsNkJBQTZCO2dCQUNqQ21CLE9BQU9BLE1BQU1LLEtBQUs7Z0JBQ2xCRSxVQUFVQSxTQUFTRixLQUFLO1lBQzFCLEdBQ0NJLElBQUksQ0FBQyxDQUFDVztnQkFDTCxNQUFNLEVBQUVOLEtBQUFBLElBQUcsRUFBRWhCLElBQUksRUFBRUMsUUFBUSxFQUFFUyxVQUFBQSxTQUFRLEVBQUUsR0FBR1ksS0FBS0MsSUFBSSxDQUFDQyxRQUFRO2dCQUM1RDlCLFNBQ0VMLCtFQUFPQSxDQUFDO29CQUNOMEIsSUFBSUM7b0JBQ0poQjtvQkFDQUM7b0JBQ0FTLFVBQUFBO2dCQUNGO2dCQUVGakIsT0FBT2dDLElBQUksQ0FBQyxXQUFXSCxLQUFLQyxJQUFJLENBQUNDLFFBQVEsQ0FBQ1IsR0FBRztnQkFDN0NqQixJQUFJTSxNQUFNLENBQUNDLElBQUksQ0FBQ1csWUFBWSxDQUFDQyxLQUFLLENBQUNDLE9BQU8sR0FBRztZQUMvQyxHQUNDQyxLQUFLLENBQUMsQ0FBQ007Z0JBQ05oQyxTQUNFTiw2RkFBUUEsQ0FBQztvQkFDUEcsTUFBTTtvQkFDTm9DLE1BQU0sU0FBaUNELE9BQXhCQSxJQUFJZCxRQUFRLENBQUNnQixNQUFNLEVBQUMsTUFBNEIsT0FBeEJGLElBQUlkLFFBQVEsQ0FBQ1csSUFBSSxDQUFDRixLQUFLO2dCQUNoRTtZQUVKO1FBQ0osT0FBTztZQUNMM0IsU0FDRU4sNkZBQVFBLENBQUM7Z0JBQ1BHLE1BQU07Z0JBQ05vQyxNQUFPO1lBQ1Q7UUFFSjtJQUNGO0lBRUEscUJBQ0UsOERBQUNFO1FBQ0NkLElBQUl4QjtRQUNKdUMsV0FBVTtrQkFFViw0RUFBQ3hCO1lBQUt3QixXQUFVOzs4QkFDZCw4REFBQ0M7b0JBQ0NELFdBQVU7b0JBQ1ZFLFNBQVMsQ0FBQ0MsSUFDUEEsRUFBRTVCLE1BQU0sQ0FBQ1ksWUFBWSxDQUFDQSxZQUFZLENBQUNDLEtBQUssQ0FBQ0MsT0FBTyxHQUFHOzhCQUV2RDs7Ozs7OzhCQUdELDhEQUFDbkMsbURBQUtBO29CQUNKOEMsV0FBVTtvQkFDVkksS0FBSyxHQUFnQjNDLE9BQWJJLE1BQUssVUFBYSxPQUFMSixNQUFLO29CQUMxQjRDLE9BQU07b0JBQ05DLFFBQU87Ozs7Ozs4QkFFVCw4REFBQ1A7b0JBQUlDLFdBQVU7O3dCQUNadEMsMkJBQ0MsOERBQUNxQzs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNPO29DQUFNQyxPQUFNO29DQUFPdEMsTUFBSztvQ0FBT21DLE9BQU07Ozs7Ozs4Q0FDdEMsOERBQUNFO29DQUFNQyxPQUFNO29DQUFXdEMsTUFBSztvQ0FBV21DLE9BQU07Ozs7Ozs7Ozs7O2lEQUdoRDtzQ0FFRiw4REFBQ0U7NEJBQU1DLE9BQU07NEJBQVV0QyxNQUFLOzs7Ozs7c0NBQzVCLDhEQUFDcUM7NEJBQU1DLE9BQU07NEJBQVN0QyxNQUFLOzs7Ozs7d0JBQzFCUiwyQkFBYSw4REFBQzZDOzRCQUFNQyxPQUFNOzRCQUFldEMsTUFBSzs7Ozs7aURBQWU7Ozs7Ozs7OEJBRWhFLDhEQUFDdUM7OEJBQ0MsNEVBQUNDO3dCQUNDakQsTUFBSzt3QkFDTHlDLFNBQVMsQ0FBQ2pDLE1BQVNQLGFBQWFNLFNBQVNDLE9BQU9lLElBQUlmO3dCQUNwRCtCLFdBQVU7a0NBRVR0QyxhQUFhLG9CQUFvQjs7Ozs7Ozs7Ozs7OEJBR3RDLDhEQUFDcUM7b0JBQUlDLFdBQVU7OEJBQ1p0QywyQkFDQyw4REFBQytDO3dCQUNDUCxTQUFTLENBQUNPOzRCQUNSQSxFQUFFbEMsTUFBTSxDQUFDWSxZQUFZLENBQUNBLFlBQVksQ0FBQ0MsS0FBSyxDQUFDQyxPQUFPLEdBQUc7NEJBQ25Eb0IsRUFBRWxDLE1BQU0sQ0FBQ29DLGFBQWEsQ0FBQ0EsYUFBYSxDQUFDQSxhQUFhLENBQUNDLGVBQWUsQ0FBQ3hCLEtBQUssQ0FBQ0MsT0FBTyxHQUM5RTt3QkFDSjt3QkFDQVcsV0FBVTtrQ0FDWDs7Ozs7NkNBSUQsOERBQUNTO3dCQUNDUCxTQUFTLENBQUNPOzRCQUNSQSxFQUFFbEMsTUFBTSxDQUFDWSxZQUFZLENBQUNBLFlBQVksQ0FBQ0MsS0FBSyxDQUFDQyxPQUFPLEdBQUc7NEJBQ25Eb0IsRUFBRWxDLE1BQU0sQ0FBQ29DLGFBQWEsQ0FBQ0EsYUFBYSxDQUFDQSxhQUFhLENBQUNFLFdBQVcsQ0FBQ3pCLEtBQUssQ0FBQ0MsT0FBTyxHQUMxRTt3QkFDSjt3QkFDQVcsV0FBVTtrQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFiO0dBbEp3QnhDOztRQUVQTCxrREFBU0E7UUFDUEMsb0RBQVdBO1FBQ2ZDLG9EQUFXQTs7O0tBSkZHO0FBb0p4QixTQUFTK0MsTUFBTSxLQUFzQjtRQUF0QixFQUFFQyxLQUFLLEVBQUV0QyxJQUFJLEVBQUVtQyxLQUFLLEVBQUUsR0FBdEI7SUFDYixxQkFDRSw4REFBQ047UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNRO2dCQUFNTSxTQUFTNUM7MEJBQU9zQzs7Ozs7OzBCQUN2Qiw4REFBQ087Z0JBQ0NmLFdBQVU7Z0JBQ1ZaLE9BQU87b0JBQUVpQixPQUFPQSxRQUFRO2dCQUFLO2dCQUM3QjVDLE1BQUs7Z0JBQ0xTLE1BQU1BOzs7Ozs7Ozs7Ozs7QUFJZDtNQVpTcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWduL2luZGV4LmpzeD8wZGRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgc2V0TW9kYWwgfSBmcm9tIFwiQC9yZWR1eF90b29sa2l0L2ZlYXR1cmVzL21vZGFsLXdpbmRvdy9tb2RhbFNsaWNlLnRzeFwiO1xyXG5pbXBvcnQgeyBzZXRVc2VyIH0gZnJvbSBcIkAvcmVkdXhfdG9vbGtpdC9mZWF0dXJlcy91c2VyL3VzZXJTbGljZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbih7IHR5cGUgfSkge1xyXG4gIGNvbnN0IGlzUmVnaXN0ZXIgPSB0eXBlID09IFwicmVnaXN0ZXJcIjtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgcGF0aCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucGF0aC5waG90byk7XHJcblxyXG4gIGNvbnN0IHJlZ2lzdGVyID0gKGJ0bikgPT4ge1xyXG4gICAgY29uc3QgW25hbWUsIGxhc3ROYW1lLCBwaG9uZSwgcGFzcywgc2VjUGFzc10gPSBidG4udGFyZ2V0LmZvcm07XHJcbiAgICBpZiAocGFzcy52YWx1ZSA9PSBzZWNQYXNzLnZhbHVlKSB7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLnBvc3QoXCIvYXBpL3VzZXJzP3dvcms9Y3JlYXRlXCIsIHtcclxuICAgICAgICAgIG5hbWU6IG5hbWUudmFsdWUsXHJcbiAgICAgICAgICBsYXN0TmFtZTogbGFzdE5hbWUudmFsdWUsXHJcbiAgICAgICAgICBwYXNzd29yZDogcGFzcy52YWx1ZSxcclxuICAgICAgICAgIGNvbnRhY3RzOiB7XHJcbiAgICAgICAgICAgIHBob25lOiBwaG9uZS52YWx1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICBzZXRVc2VyKHtcclxuICAgICAgICAgICAgICBpZDogX2lkLFxyXG4gICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgbGFzdE5hbWUsXHJcbiAgICAgICAgICAgICAgY29udGFjdHMsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgIGJ0bi50YXJnZXQuZm9ybS5vZmZzZXRQYXJlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZyA9IChidG4pID0+IHtcclxuICAgIGNvbnN0IFtwaG9uZSwgcGFzc3dvcmRdID0gYnRuLnRhcmdldC5mb3JtO1xyXG4gICAgaWYgKHBob25lLnZhbHVlICYmIHBhc3N3b3JkLnZhbHVlKSB7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLnBvc3QoXCIvYXBpL3VzZXJzP3dvcms9YXV0aG9yaXNlXCIsIHtcclxuICAgICAgICAgIHBob25lOiBwaG9uZS52YWx1ZSxcclxuICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZC52YWx1ZSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXNwKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB7IF9pZCwgbmFtZSwgbGFzdE5hbWUsIGNvbnRhY3RzIH0gPSByZXNwLmRhdGEudXNlckluZm87XHJcbiAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgc2V0VXNlcih7XHJcbiAgICAgICAgICAgICAgaWQ6IF9pZCxcclxuICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgIGxhc3ROYW1lLFxyXG4gICAgICAgICAgICAgIGNvbnRhY3RzLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHJvdXRlci5wdXNoKFwiL3VzZXIvXCIgKyByZXNwLmRhdGEudXNlckluZm8uX2lkKTtcclxuICAgICAgICAgIGJ0bi50YXJnZXQuZm9ybS5vZmZzZXRQYXJlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICBzZXRNb2RhbCh7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJFcnJvclwiLFxyXG4gICAgICAgICAgICAgIHRleHQ6IGBFcnJvciAke2Vyci5yZXNwb25zZS5zdGF0dXN9OiAke2Vyci5yZXNwb25zZS5kYXRhLmVycm9yfWAsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgc2V0TW9kYWwoe1xyXG4gICAgICAgICAgdHlwZTogXCJFcnJvclwiLFxyXG4gICAgICAgICAgdGV4dDogYEVycm9yIDQwMDog0JfQsNC/0L7QstC90ZbRgtGMINGD0YHRliDQv9C+0LvRjyFgLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgaWQ9e3R5cGV9XHJcbiAgICAgIGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGxlZnQtMCB3LXNjcmVlbiBoLXNjcmVlbiB6LTIwIGJnLVsjMmIyYTMwOTZdIGZsZXgtd3JhcCBjb250ZW50LWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoaWRkZW4gdGFyZ2V0OmZsZXhcIlxyXG4gICAgPlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCIzc206dy05NiB3LWF1dG8gcHgtNyBweS0xMiBwYi04IGJnLWRhcmstYnJvd24gcm91bmRlZC0yeGwgcmVsYXRpdmVcIj5cclxuICAgICAgICA8cFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTQgcmlnaHQtNiB0ZXh0LW15LXdoaXRlIHRleHQtMnhsIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eyh4KSA9PlxyXG4gICAgICAgICAgICAoeC50YXJnZXQub2Zmc2V0UGFyZW50Lm9mZnNldFBhcmVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgeFxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm14LWF1dG9cIlxyXG4gICAgICAgICAgc3JjPXtgJHtwYXRofWljb25zLyR7dHlwZX0uc3ZnYH1cclxuICAgICAgICAgIHdpZHRoPVwiMTUwXCJcclxuICAgICAgICAgIGhlaWdodD1cIjE1MFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNTYgNHNtOnctNzIgM3NtOnctYXV0byBteC1hdXRvIG10LTIuNSBtYi03IGdhcC0wLjUgZ3JpZFwiPlxyXG4gICAgICAgICAge2lzUmVnaXN0ZXIgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiAzc206Z2FwLTVcIj5cclxuICAgICAgICAgICAgICA8SW5wdXQgbGFiZWw9XCLQhtC8J9GPXCIgbmFtZT1cIm5hbWVcIiB3aWR0aD1cIjE1MFwiIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0IGxhYmVsPVwi0J/RgNGW0LfQstC40YnQtVwiIG5hbWU9XCJsYXN0bmFtZVwiIHdpZHRoPVwiMTUwXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxJbnB1dCBsYWJlbD1cItCi0LXQu9C10YTQvtC9XCIgbmFtZT1cInBob25lXCIgLz5cclxuICAgICAgICAgIDxJbnB1dCBsYWJlbD1cItCf0LDRgNC+0LvRjFwiIG5hbWU9XCJwYXNzXCIgLz5cclxuICAgICAgICAgIHtpc1JlZ2lzdGVyID8gPElucHV0IGxhYmVsPVwi0J/QsNGA0L7Qu9GMINGJ0LXRgNCw0LdcIiBuYW1lPVwic2VjcGFzc1wiIC8+IDogPD48Lz59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGE+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoYnRuKSA9PiAoaXNSZWdpc3RlciA/IHJlZ2lzdGVyKGJ0bikgOiBsb2coYnRuKSl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LWF1dG8gbWItOCBweS0xIHB4LTMgcm91bmRlZC1sZyBib3JkZXItMiBib3JkZXItYm9kaWx5IHRleHQtYm9kaWx5IGhvdmVyOnRleHQtZGFyay1icm93biBob3ZlcjpiZy1ib2RpbHkgZm9udC1tYXJjay1zY3JpcHQgdGV4dC0zeGwgdHJhY2tpbmctd2lkZSBibG9ja1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpc1JlZ2lzdGVyID8gXCLQl9Cw0YDQtdGU0YHRgtGA0YPQstCw0YLQuNGB0YxcIiA6IFwi0KPQstGW0LnRgtC4XCJ9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAge2lzUmVnaXN0ZXIgPyAoXHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGEudGFyZ2V0Lm9mZnNldFBhcmVudC5vZmZzZXRQYXJlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgYS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucHJldmlvdXNTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPVxyXG4gICAgICAgICAgICAgICAgICBcImZsZXhcIjtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LWF1dG8gZm9udC1wdC1zYW5zLW5hcnJvdyB0cmFja2luZy13aWRlciB0ZXh0LW15LXdoaXRlIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgINCj0LLRltC50YLQuFxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhLnRhcmdldC5vZmZzZXRQYXJlbnQub2Zmc2V0UGFyZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIGEudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50Lm5leHRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPVxyXG4gICAgICAgICAgICAgICAgICBcImZsZXhcIjtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtcHQtc2Fucy1uYXJyb3cgdHJhY2tpbmctd2lkZXIgdGV4dC1teS13aGl0ZSBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDQl9Cw0YDQtdGU0YHRgtGA0YPQstCw0YLQuNGB0YxcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gSW5wdXQoeyBsYWJlbCwgbmFtZSwgd2lkdGggfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZm9udC1wdC1zYW5zLW5hcnJvdyB0ZXh0LWxnIHRyYWNraW5nLXdpZGVyIHRleHQtbXktd2hpdGVcIj5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9e25hbWV9PntsYWJlbH08L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBjbGFzc05hbWU9XCJweC0yIHB5LTAuNSByb3VuZGVkIHNoYWRvdy1baW5zZXRfMnB4XzNweF82cHhfI0FDODkzMF0gdGFyZ2V0OmJvcmRlci1ub25lIGZvY3VzLXZpc2libGU6b3V0bGluZS1ub25lIHRleHQtbXktYmxhY2tcIlxyXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiB3aWR0aCArIFwicHhcIiB9fVxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJJbWFnZSIsInVzZVJvdXRlciIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzZXRNb2RhbCIsInNldFVzZXIiLCJTaWduIiwidHlwZSIsImlzUmVnaXN0ZXIiLCJyb3V0ZXIiLCJkaXNwYXRjaCIsInBhdGgiLCJzdGF0ZSIsInBob3RvIiwicmVnaXN0ZXIiLCJidG4iLCJuYW1lIiwibGFzdE5hbWUiLCJwaG9uZSIsInBhc3MiLCJzZWNQYXNzIiwidGFyZ2V0IiwiZm9ybSIsInZhbHVlIiwicG9zdCIsInBhc3N3b3JkIiwiY29udGFjdHMiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJfaWQiLCJvZmZzZXRQYXJlbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJjYXRjaCIsImVycm9yIiwicmVzcCIsImRhdGEiLCJ1c2VySW5mbyIsInB1c2giLCJlcnIiLCJ0ZXh0Iiwic3RhdHVzIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsIm9uQ2xpY2siLCJ4Iiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJJbnB1dCIsImxhYmVsIiwiYSIsImJ1dHRvbiIsInBhcmVudEVsZW1lbnQiLCJwcmV2aW91c1NpYmxpbmciLCJuZXh0U2libGluZyIsImh0bWxGb3IiLCJpbnB1dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/sign/index.jsx\n"));

/***/ })

});