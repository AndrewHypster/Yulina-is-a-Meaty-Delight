"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/shop/[id]",{

/***/ "./components/header.jsx":
/*!*******************************!*\
  !*** ./components/header.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_sign_in__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/sign/in */ \"./components/sign/in.jsx\");\n/* harmony import */ var _social_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./social-icons */ \"./components/social-icons.jsx\");\n/* harmony import */ var _sign_register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign/register */ \"./components/sign/register.jsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Header(param) {\n    let { path = \"\" } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{});\n    const autorise = ()=>{\n        const userID = localStorage.getItem(\"userID\");\n        if (userID) {\n            router.push(\"/user/\".concat(userID));\n        } else {\n            document.querySelector(\"#sign-in\").style.display = \"flex\";\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                id: \"header\",\n                className: \"px-10 2sm:px-20 justify-between items-center flex text-dark-red\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/\",\n                                className: \"no-filter\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: path + \"logo.svg\",\n                                    alt: \"logo\",\n                                    className: \"h-16 mr-9 lg:mr-32\",\n                                    width: \"64\",\n                                    height: \"64\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\header.jsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\header.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                                className: \"h-fit font-long-cang text-2xl gap-x-3 hidden ml:flex\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/\",\n                                        children: \"Головна\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\header.jsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 13\n                                    }, this),\n                                    \"|\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/shop\",\n                                        children: \"Продукція\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\header.jsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 43\n                                    }, this),\n                                    \"|\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"\",\n                                        children: \"Смаки\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\header.jsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 13\n                                    }, this),\n                                    \"|\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"\",\n                                        children: \"Про нас\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\header.jsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 40\n                                    }, this),\n                                    \"|\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"\",\n                                        children: \"Блог\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\header.jsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 13\n                                    }, this),\n                                    \"|\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"\",\n                                        children: \"Контакти\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\header.jsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 39\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\header.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\header.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hidden xl:flex items-end gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>autorise(),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: path + \"icons/user.svg\",\n                                    width: \"40\",\n                                    height: \"40\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\header.jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\header.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"address\", {\n                                className: \"h-fit font-inter text-base grid\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"tel:+000000000000\",\n                                        children: \"+000 (00) 000-00-00\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\header.jsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"mailto:info@gmail.com\",\n                                        children: \"info@gmail.com\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\header.jsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\header.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\header.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"#menu\",\n                        style: {\n                            backgroundImage: \"url(\".concat(path, \"icons/menu.svg)\")\n                        },\n                        className: \"w-8 h-8 bg-cover cursor-pointer hover:brightness-[3] ml:hidden\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\header.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"menu\",\n                        className: \"w-screen h-screen fixed z-50 top-0 left-full target:left-0 p-8 bg-my-white\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                style: {\n                                    backgroundImage: \"url(\".concat(path, \"icons/x.svg)\")\n                                },\n                                alt: \"\",\n                                className: \"w-8 h-8 absolute right-[2rem] block\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\header.jsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-10 font-long-cang text-2xl gap-y-3 grid\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/\",\n                                        children: \"Головна\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\header.jsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\header.jsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#sign-in\",\n                                        children: \"Кабінет\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\header.jsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\header.jsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/shop\",\n                                        children: \"Продукція\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\header.jsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\header.jsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"#\",\n                                        children: \"Смаки\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\header.jsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\header.jsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"#\",\n                                        children: \"Про нас\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\header.jsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\header.jsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"#\",\n                                        children: \"Блог\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\header.jsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\header.jsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"#\",\n                                        children: \"Контакти\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\header.jsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\header.jsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-8 grid grid-cols-2 w-fit gap-6\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_social_icons__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            path: path,\n                                            initsize: \"64\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\header.jsx\",\n                                            lineNumber: 98,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\header.jsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\header.jsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\header.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\header.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sign_in__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\header.jsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sign_register__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Богдан\\\\Desktop\\\\Yulina-is-a-Meaty-Delight\\\\components\\\\header.jsx\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Header, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxrREFBSUE7d0NBQUNzQixNQUFLO2tEQUFJOzs7Ozs7a0RBQ2YsOERBQUNXOzs7OztrREFDRCw4REFBQ2pDLGtEQUFJQTt3Q0FBQ3NCLE1BQUs7a0RBQUk7Ozs7OztrREFDZiw4REFBQ1c7Ozs7O2tEQUVELDhEQUFDWjt3Q0FBSUQsV0FBVTtrREFDYiw0RUFBQ2xCLHFEQUFXQTs0Q0FBQ0ssTUFBTUE7NENBQU0yQixVQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNMUMsOERBQUNqQywyREFBTUE7Ozs7OzBCQUNQLDhEQUFDRSxzREFBUUE7Ozs7Ozs7QUFHZjtHQW5Hd0JHOztRQUNQRixrREFBU0E7OztLQURGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlYWRlci5qc3g/OTQ2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgU2lnbkluIGZyb20gXCJAL2NvbXBvbmVudHMvc2lnbi9pblwiO1xyXG5pbXBvcnQgU29jaWFsSWNvbnMgZnJvbSBcIi4vc29jaWFsLWljb25zXCI7XHJcbmltcG9ydCBSZWdpc3RlciBmcm9tIFwiLi9zaWduL3JlZ2lzdGVyXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcih7IHBhdGggPSBcIlwiIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgYXV0b3Jpc2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VySUQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJRFwiKTtcclxuXHJcbiAgICBpZiAodXNlcklEKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKGAvdXNlci8ke3VzZXJJRH1gKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2lnbi1pblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoZWFkZXJcclxuICAgICAgICBpZD1cImhlYWRlclwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwicHgtMTAgMnNtOnB4LTIwIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgZmxleCB0ZXh0LWRhcmstcmVkXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwibm8tZmlsdGVyXCI+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17cGF0aCArIFwibG9nby5zdmdcIn1cclxuICAgICAgICAgICAgICBhbHQ9XCJsb2dvXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTE2IG1yLTkgbGc6bXItMzJcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiNjRcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjY0XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiaC1maXQgZm9udC1sb25nLWNhbmcgdGV4dC0yeGwgZ2FwLXgtMyBoaWRkZW4gbWw6ZmxleFwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPtCT0L7Qu9C+0LLQvdCwPC9MaW5rPnw8TGluayBocmVmPVwiL3Nob3BcIj7Qn9GA0L7QtNGD0LrRhtGW0Y88L0xpbms+fFxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiXCI+0KHQvNCw0LrQuDwvTGluaz58PExpbmsgaHJlZj1cIlwiPtCf0YDQviDQvdCw0YE8L0xpbms+fFxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiXCI+0JHQu9C+0LM8L0xpbms+fDxMaW5rIGhyZWY9XCJcIj7QmtC+0L3RgtCw0LrRgtC4PC9MaW5rPlxyXG4gICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIHhsOmZsZXggaXRlbXMtZW5kIGdhcC0yXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGF1dG9yaXNlKCl9PlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtwYXRoICsgXCJpY29ucy91c2VyLnN2Z1wifSB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiNDBcIiAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgPGFkZHJlc3MgY2xhc3NOYW1lPVwiaC1maXQgZm9udC1pbnRlciB0ZXh0LWJhc2UgZ3JpZFwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwidGVsOiswMDAwMDAwMDAwMDBcIj4rMDAwICgwMCkgMDAwLTAwLTAwPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwibWFpbHRvOmluZm9AZ21haWwuY29tXCI+aW5mb0BnbWFpbC5jb208L0xpbms+XHJcbiAgICAgICAgICA8L2FkZHJlc3M+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiDQkSDQniDQmiDQniDQkiDQlSAgINCcINCVINCdINCuICovfVxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBocmVmPVwiI21lbnVcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7cGF0aH1pY29ucy9tZW51LnN2ZylgIH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTggaC04IGJnLWNvdmVyIGN1cnNvci1wb2ludGVyIGhvdmVyOmJyaWdodG5lc3MtWzNdIG1sOmhpZGRlblwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgaWQ9XCJtZW51XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctc2NyZWVuIGgtc2NyZWVuIGZpeGVkIHotNTAgdG9wLTAgbGVmdC1mdWxsIHRhcmdldDpsZWZ0LTAgcC04IGJnLW15LXdoaXRlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke3BhdGh9aWNvbnMveC5zdmcpYCB9fVxyXG4gICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTggaC04IGFic29sdXRlIHJpZ2h0LVsycmVtXSBibG9ja1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMCBmb250LWxvbmctY2FuZyB0ZXh0LTJ4bCBnYXAteS0zIGdyaWRcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj7Qk9C+0LvQvtCy0L3QsDwvTGluaz5cclxuICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIHsvKiB7aXNBdXRvcmlzZSA/ICggKi99XHJcbiAgICAgICAgICAgIHsvKiA8TGluayBocmVmPVwiL3VzZXIvc29tZS1pZFwiPtCa0LDQsdGW0L3QtdGCPC9MaW5rPiAqL31cclxuICAgICAgICAgICAgey8qICkgOiAoICovfVxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI3NpZ24taW5cIj7QmtCw0LHRltC90LXRgjwvYT5cclxuICAgICAgICAgICAgey8qICl9ICovfVxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaG9wXCI+0J/RgNC+0LTRg9C60YbRltGPPC9MaW5rPlxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj7QodC80LDQutC4PC9MaW5rPlxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj7Qn9GA0L4g0L3QsNGBPC9MaW5rPlxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj7QkdC70L7QszwvTGluaz5cclxuICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+0JrQvtC90YLQsNC60YLQuDwvTGluaz5cclxuICAgICAgICAgICAgPGhyIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTggZ3JpZCBncmlkLWNvbHMtMiB3LWZpdCBnYXAtNlwiPlxyXG4gICAgICAgICAgICAgIDxTb2NpYWxJY29ucyBwYXRoPXtwYXRofSBpbml0c2l6ZT1cIjY0XCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICA8U2lnbkluIC8+XHJcbiAgICAgIDxSZWdpc3RlciAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwiU2lnbkluIiwiU29jaWFsSWNvbnMiLCJSZWdpc3RlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsIkhlYWRlciIsInBhdGgiLCJyb3V0ZXIiLCJhdXRvcmlzZSIsInVzZXJJRCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwdXNoIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJkaXNwbGF5IiwiaGVhZGVyIiwiaWQiLCJjbGFzc05hbWUiLCJkaXYiLCJocmVmIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJuYXYiLCJidXR0b24iLCJvbkNsaWNrIiwiYWRkcmVzcyIsImEiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJociIsImluaXRzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/header.jsx\n"));

/***/ })

});