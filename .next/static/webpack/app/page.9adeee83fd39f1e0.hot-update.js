"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/Home/SalonCrousal.jsx":
/*!***************************************!*\
  !*** ./src/app/Home/SalonCrousal.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"(app-pages-browser)/./node_modules/swiper/swiper-react.mjs\");\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/modules */ \"(app-pages-browser)/./node_modules/swiper/modules/index.mjs\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ \"(app-pages-browser)/./node_modules/swiper/swiper.css\");\n/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronLeft,ChevronRight!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-left.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronLeft,ChevronRight!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-right.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n// Import Swiper React components\n\n\n// Import Swiper styles\n\n\n\n\nconst SalonCrousal = ()=>{\n    const salonGroups = [\n        [\n            {\n                href: \"/salon/BBLUNT\",\n                imgSrc: \"/luzologo/1.png\"\n            },\n            {\n                href: \"/salon/Bodycraft\",\n                imgSrc: \"/Logos-Website/2.jpg\"\n            }\n        ],\n        [\n            {\n                href: \"/salon/Wellness Co\",\n                imgSrc: \"/luzologo/12.png\"\n            },\n            {\n                href: \"/salon/#\",\n                imgSrc: \"/Logos-Website/4.png\"\n            }\n        ],\n        [\n            {\n                href: \"/salon/Toni and Guy\",\n                imgSrc: \"/luzologo/4.png\"\n            }\n        ],\n        [\n            {\n                href: \"/salon/Aveda x Nykaa\",\n                imgSrc: \"/luzologo/11.png\"\n            },\n            {\n                href: \"/salon/JCB (Jean-Claude Biguine)\",\n                imgSrc: \"/Logos-Website/6.png\"\n            }\n        ],\n        [\n            {\n                href: \"/salon/Hair Masters\",\n                imgSrc: \"/Logos-Website/8.png\"\n            },\n            {\n                href: \"/salon/Femina Flaunt\",\n                imgSrc: \"/Logos-Website/9.png\"\n            }\n        ],\n        [\n            {\n                href: \"/salon/Elixir Wellness\",\n                imgSrc: \"/luzologo/10.png\"\n            },\n            {\n                href: \"/salon/Dessange Salon & Spa\",\n                imgSrc: \"/Logos-Website/11.png\"\n            }\n        ],\n        [\n            {\n                href: \"/salon/Nailashes\",\n                imgSrc: \"/Logos-Website/12.png\"\n            },\n            {\n                href: \"/salon/Affinity Elite\",\n                imgSrc: \"/luzologo/5.png\"\n            }\n        ],\n        [\n            {\n                href: \"/salon/Juice\",\n                imgSrc: \"/luzologo/3.png\"\n            },\n            {\n                href: \"/salon/LookWell\",\n                imgSrc: \"/Logos-Website/15.png\"\n            }\n        ],\n        [\n            {\n                href: \"/salon/Cut and Style\",\n                imgSrc: \"/luzologo/6.png\"\n            },\n            {\n                href: \"/salon/Tattva Spas\",\n                imgSrc: \"/Logos-Website/17.png\"\n            }\n        ],\n        [\n            {\n                href: \"/salon/Kapils\",\n                imgSrc: \"/luzologo/2.png\"\n            },\n            {\n                href: \"/salon/Monsoon Salon Pro\",\n                imgSrc: \"/luzologo/9.png\"\n            }\n        ],\n        [\n            {\n                href: \"/salon/#\",\n                imgSrc: \"/luzologo/7.png\"\n            },\n            {\n                href: \"/salon/Tip and Toe\",\n                imgSrc: \"/luzologo/8.png\"\n            }\n        ],\n        [\n            {\n                href: \"/salon/Naturals Salon\",\n                imgSrc: \"/luzologo/14.png\"\n            },\n            {\n                href: \"/salon/Apple The Original\",\n                imgSrc: \"/luzologo/13.png\"\n            }\n        ]\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"  my-[30px] sm:my-[60px] 2xl:max-w-[1300px] xl:max-w-[1200px] lg:max-w-[1000px] sm:mx-auto relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-bold px-3 text-[30px]  mb-4 text-[#051036] \",\n                children: \"700+ Salons | Spas | Dermatologists\"\n            }, void 0, false, {\n                fileName: \"/Users/vishnujangid/Desktop/luzo-next-latest-main/src/app/Home/SalonCrousal.jsx\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-[20px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"prev\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronLeft_ChevronRight_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/vishnujangid/Desktop/luzo-next-latest-main/src/app/Home/SalonCrousal.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 42\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/vishnujangid/Desktop/luzo-next-latest-main/src/app/Home/SalonCrousal.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n                        slidesPerView: 3,\n                        spaceBetween: 1,\n                        navigation: {\n                            nextEl: \".next\",\n                            prevEl: \".prev\"\n                        },\n                        loop: true,\n                        modules: [\n                            swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Autoplay,\n                            swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Navigation\n                        ],\n                        autoplay: {\n                            delay: 2000,\n                            disableOnInteraction: false\n                        },\n                        breakpoints: {\n                            // When window width is <= 640px (for deskotop devices)\n                            640: {\n                                slidesPerView: 4\n                            }\n                        },\n                        children: salonGroups.map((group, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col gap-[20px]\",\n                                    children: group.map((salon, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                            href: salon.href,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                src: salon.imgSrc,\n                                                width: 324,\n                                                height: 182,\n                                                alt: \"salon\",\n                                                className: \"sm:aspect-video sm:w-full sm:h-full rounded-md\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vishnujangid/Desktop/luzo-next-latest-main/src/app/Home/SalonCrousal.jsx\",\n                                                lineNumber: 100,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        }, idx, false, {\n                                            fileName: \"/Users/vishnujangid/Desktop/luzo-next-latest-main/src/app/Home/SalonCrousal.jsx\",\n                                            lineNumber: 99,\n                                            columnNumber: 37\n                                        }, undefined))\n                                }, void 0, false, {\n                                    fileName: \"/Users/vishnujangid/Desktop/luzo-next-latest-main/src/app/Home/SalonCrousal.jsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, index, false, {\n                                fileName: \"/Users/vishnujangid/Desktop/luzo-next-latest-main/src/app/Home/SalonCrousal.jsx\",\n                                lineNumber: 96,\n                                columnNumber: 25\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/vishnujangid/Desktop/luzo-next-latest-main/src/app/Home/SalonCrousal.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"next\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronLeft_ChevronRight_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/vishnujangid/Desktop/luzo-next-latest-main/src/app/Home/SalonCrousal.jsx\",\n                            lineNumber: 107,\n                            columnNumber: 38\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/vishnujangid/Desktop/luzo-next-latest-main/src/app/Home/SalonCrousal.jsx\",\n                        lineNumber: 107,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vishnujangid/Desktop/luzo-next-latest-main/src/app/Home/SalonCrousal.jsx\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vishnujangid/Desktop/luzo-next-latest-main/src/app/Home/SalonCrousal.jsx\",\n        lineNumber: 70,\n        columnNumber: 9\n    }, undefined);\n};\n_c = SalonCrousal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SalonCrousal);\nvar _c;\n$RefreshReg$(_c, \"SalonCrousal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvSG9tZS9TYWxvbkNyb3VzYWwuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUV5QjtBQUN6QixpQ0FBaUM7QUFDa0I7QUFDRztBQUV0RCx1QkFBdUI7QUFDSDtBQUNxQztBQUMxQjtBQUNIO0FBRTVCLE1BQU1TLGVBQWU7SUFFakIsTUFBTUMsY0FBYztRQUNoQjtZQUNJO2dCQUFFQyxNQUFNO2dCQUFpQkMsUUFBUTtZQUFrQjtZQUNuRDtnQkFBRUQsTUFBTTtnQkFBb0JDLFFBQVE7WUFBdUI7U0FDOUQ7UUFDRDtZQUNJO2dCQUFFRCxNQUFNO2dCQUFzQkMsUUFBUTtZQUFtQjtZQUN6RDtnQkFBRUQsTUFBTTtnQkFBWUMsUUFBUTtZQUF1QjtTQUN0RDtRQUNEO1lBQ0k7Z0JBQUVELE1BQU07Z0JBQXVCQyxRQUFRO1lBQWtCO1NBRTVEO1FBQ0Q7WUFDSTtnQkFBRUQsTUFBTTtnQkFBd0JDLFFBQVE7WUFBbUI7WUFDM0Q7Z0JBQUVELE1BQU07Z0JBQW9DQyxRQUFRO1lBQXVCO1NBQzlFO1FBQ0Q7WUFDSTtnQkFBRUQsTUFBTTtnQkFBdUJDLFFBQVE7WUFBdUI7WUFDOUQ7Z0JBQUVELE1BQU07Z0JBQXdCQyxRQUFRO1lBQXVCO1NBQ2xFO1FBQ0Q7WUFDSTtnQkFBRUQsTUFBTTtnQkFBMEJDLFFBQVE7WUFBbUI7WUFDN0Q7Z0JBQUVELE1BQU07Z0JBQStCQyxRQUFRO1lBQXdCO1NBQzFFO1FBQ0Q7WUFDSTtnQkFBRUQsTUFBTTtnQkFBb0JDLFFBQVE7WUFBd0I7WUFDNUQ7Z0JBQUVELE1BQU07Z0JBQXlCQyxRQUFRO1lBQWtCO1NBQzlEO1FBQ0Q7WUFDSTtnQkFBRUQsTUFBTTtnQkFBZ0JDLFFBQVE7WUFBa0I7WUFDbEQ7Z0JBQUVELE1BQU07Z0JBQW1CQyxRQUFRO1lBQXdCO1NBQzlEO1FBQ0Q7WUFDSTtnQkFBRUQsTUFBTTtnQkFBd0JDLFFBQVE7WUFBa0I7WUFDMUQ7Z0JBQUVELE1BQU07Z0JBQXNCQyxRQUFRO1lBQXdCO1NBQ2pFO1FBQ0Q7WUFDSTtnQkFBRUQsTUFBTTtnQkFBaUJDLFFBQVE7WUFBa0I7WUFDbkQ7Z0JBQUVELE1BQU07Z0JBQTRCQyxRQUFRO1lBQWtCO1NBQ2pFO1FBQ0Q7WUFDSTtnQkFBRUQsTUFBTTtnQkFBWUMsUUFBUTtZQUFrQjtZQUM5QztnQkFBRUQsTUFBTTtnQkFBc0JDLFFBQVE7WUFBa0I7U0FDM0Q7UUFDRDtZQUNJO2dCQUFFRCxNQUFNO2dCQUF5QkMsUUFBUTtZQUFtQjtZQUM1RDtnQkFBRUQsTUFBTTtnQkFBNkJDLFFBQVE7WUFBbUI7U0FDbkU7S0FFSjtJQUdELHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQW1EOzs7Ozs7MEJBR2pFLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNFO3dCQUFPRixXQUFVO2tDQUFPLDRFQUFDVCxvR0FBV0E7Ozs7Ozs7Ozs7a0NBQ3JDLDhEQUFDSixnREFBTUE7d0JBQ0hnQixlQUFlO3dCQUNmQyxjQUFjO3dCQUNkQyxZQUFZOzRCQUFFQyxRQUFROzRCQUFTQyxRQUFRO3dCQUFRO3dCQUMvQ0MsTUFBTTt3QkFFTkMsU0FBUzs0QkFBQ3BCLG9EQUFRQTs0QkFBRUMsc0RBQVVBO3lCQUFDO3dCQUMvQm9CLFVBQVU7NEJBQ05DLE9BQU87NEJBQ1BDLHNCQUFzQjt3QkFDMUI7d0JBQ0FDLGFBQWE7NEJBQ1QsdURBQXVEOzRCQUN2RCxLQUFLO2dDQUNEVixlQUFlOzRCQUNuQjt3QkFDSjtrQ0FHQ1AsWUFBWWtCLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQyxzQkFDckIsOERBQUM1QixxREFBV0E7MENBQ1IsNEVBQUNXO29DQUFJQyxXQUFVOzhDQUNWZSxNQUFNRCxHQUFHLENBQUMsQ0FBQ0csT0FBT0Msb0JBQ2YsOERBQUN4QixpREFBSUE7NENBQVdHLE1BQU1vQixNQUFNcEIsSUFBSTtzREFDNUIsNEVBQUNKLGtEQUFLQTtnREFBQzBCLEtBQUtGLE1BQU1uQixNQUFNO2dEQUFFc0IsT0FBTztnREFBS0MsUUFBUTtnREFBS0MsS0FBSTtnREFBUXRCLFdBQVU7Ozs7OzsyQ0FEbEVrQjs7Ozs7Ozs7OzsrQkFITEY7Ozs7Ozs7Ozs7a0NBVzlCLDhEQUFDZDt3QkFBT0YsV0FBVTtrQ0FBTyw0RUFBQ1Isb0dBQVlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JsRDtLQTdHTUc7QUErR04sK0RBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9Ib21lL1NhbG9uQ3JvdXNhbC5qc3g/MDhhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG4vLyBJbXBvcnQgU3dpcGVyIFJlYWN0IGNvbXBvbmVudHNcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tICdzd2lwZXIvcmVhY3QnO1xuaW1wb3J0IHsgQXV0b3BsYXksIE5hdmlnYXRpb24gfSBmcm9tICdzd2lwZXIvbW9kdWxlcyc7XG5cbi8vIEltcG9ydCBTd2lwZXIgc3R5bGVzXG5pbXBvcnQgJ3N3aXBlci9jc3MnO1xuaW1wb3J0IHsgQ2hldnJvbkxlZnQsIENoZXZyb25SaWdodCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcblxuY29uc3QgU2Fsb25Dcm91c2FsID0gKCkgPT4ge1xuXG4gICAgY29uc3Qgc2Fsb25Hcm91cHMgPSBbXG4gICAgICAgIFtcbiAgICAgICAgICAgIHsgaHJlZjogJy9zYWxvbi9CQkxVTlQnLCBpbWdTcmM6ICcvbHV6b2xvZ28vMS5wbmcnIH0sXG4gICAgICAgICAgICB7IGhyZWY6ICcvc2Fsb24vQm9keWNyYWZ0JywgaW1nU3JjOiAnL0xvZ29zLVdlYnNpdGUvMi5qcGcnIH1cbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgICAgeyBocmVmOiAnL3NhbG9uL1dlbGxuZXNzIENvJywgaW1nU3JjOiAnL2x1em9sb2dvLzEyLnBuZycgfSxcbiAgICAgICAgICAgIHsgaHJlZjogJy9zYWxvbi8jJywgaW1nU3JjOiAnL0xvZ29zLVdlYnNpdGUvNC5wbmcnIH0sXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAgIHsgaHJlZjogJy9zYWxvbi9Ub25pIGFuZCBHdXknLCBpbWdTcmM6ICcvbHV6b2xvZ28vNC5wbmcnIH0sXG4gICAgICAgICAgICAvLyB7IGhyZWY6ICcvc2Fsb24vanVpY2UnLCBpbWdTcmM6ICcvbHV6b2xvZ28vanVpY2UucG5nJyB9LFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgICB7IGhyZWY6ICcvc2Fsb24vQXZlZGEgeCBOeWthYScsIGltZ1NyYzogJy9sdXpvbG9nby8xMS5wbmcnIH0sXG4gICAgICAgICAgICB7IGhyZWY6ICcvc2Fsb24vSkNCIChKZWFuLUNsYXVkZSBCaWd1aW5lKScsIGltZ1NyYzogJy9Mb2dvcy1XZWJzaXRlLzYucG5nJyB9LFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgICB7IGhyZWY6ICcvc2Fsb24vSGFpciBNYXN0ZXJzJywgaW1nU3JjOiAnL0xvZ29zLVdlYnNpdGUvOC5wbmcnIH0sXG4gICAgICAgICAgICB7IGhyZWY6ICcvc2Fsb24vRmVtaW5hIEZsYXVudCcsIGltZ1NyYzogJy9Mb2dvcy1XZWJzaXRlLzkucG5nJyB9XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAgIHsgaHJlZjogJy9zYWxvbi9FbGl4aXIgV2VsbG5lc3MnLCBpbWdTcmM6ICcvbHV6b2xvZ28vMTAucG5nJyB9LFxuICAgICAgICAgICAgeyBocmVmOiAnL3NhbG9uL0Rlc3NhbmdlIFNhbG9uICYgU3BhJywgaW1nU3JjOiAnL0xvZ29zLVdlYnNpdGUvMTEucG5nJyB9XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAgIHsgaHJlZjogJy9zYWxvbi9OYWlsYXNoZXMnLCBpbWdTcmM6ICcvTG9nb3MtV2Vic2l0ZS8xMi5wbmcnIH0sXG4gICAgICAgICAgICB7IGhyZWY6ICcvc2Fsb24vQWZmaW5pdHkgRWxpdGUnLCBpbWdTcmM6ICcvbHV6b2xvZ28vNS5wbmcnIH1cbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgICAgeyBocmVmOiAnL3NhbG9uL0p1aWNlJywgaW1nU3JjOiAnL2x1em9sb2dvLzMucG5nJyB9LFxuICAgICAgICAgICAgeyBocmVmOiAnL3NhbG9uL0xvb2tXZWxsJywgaW1nU3JjOiAnL0xvZ29zLVdlYnNpdGUvMTUucG5nJyB9XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAgIHsgaHJlZjogJy9zYWxvbi9DdXQgYW5kIFN0eWxlJywgaW1nU3JjOiAnL2x1em9sb2dvLzYucG5nJyB9LFxuICAgICAgICAgICAgeyBocmVmOiAnL3NhbG9uL1RhdHR2YSBTcGFzJywgaW1nU3JjOiAnL0xvZ29zLVdlYnNpdGUvMTcucG5nJyB9XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAgIHsgaHJlZjogJy9zYWxvbi9LYXBpbHMnLCBpbWdTcmM6ICcvbHV6b2xvZ28vMi5wbmcnIH0sXG4gICAgICAgICAgICB7IGhyZWY6ICcvc2Fsb24vTW9uc29vbiBTYWxvbiBQcm8nLCBpbWdTcmM6ICcvbHV6b2xvZ28vOS5wbmcnIH1cbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgICAgeyBocmVmOiAnL3NhbG9uLyMnLCBpbWdTcmM6ICcvbHV6b2xvZ28vNy5wbmcnIH0sXG4gICAgICAgICAgICB7IGhyZWY6ICcvc2Fsb24vVGlwIGFuZCBUb2UnLCBpbWdTcmM6ICcvbHV6b2xvZ28vOC5wbmcnIH1cbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgICAgeyBocmVmOiAnL3NhbG9uL05hdHVyYWxzIFNhbG9uJywgaW1nU3JjOiAnL2x1em9sb2dvLzE0LnBuZycgfSxcbiAgICAgICAgICAgIHsgaHJlZjogJy9zYWxvbi9BcHBsZSBUaGUgT3JpZ2luYWwnLCBpbWdTcmM6ICcvbHV6b2xvZ28vMTMucG5nJyB9XG4gICAgICAgIF0sXG4gICAgICAgIC8vIEFkZCBtb3JlIHNhbG9uIGdyb3VwcyBoZXJlXG4gICAgXTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9JyAgbXktWzMwcHhdIHNtOm15LVs2MHB4XSAyeGw6bWF4LXctWzEzMDBweF0geGw6bWF4LXctWzEyMDBweF0gbGc6bWF4LXctWzEwMDBweF0gc206bXgtYXV0byByZWxhdGl2ZSc+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdmb250LWJvbGQgcHgtMyB0ZXh0LVszMHB4XSAgbWItNCB0ZXh0LVsjMDUxMDM2XSAnPjcwMCsgU2Fsb25zIHwgU3BhcyB8IERlcm1hdG9sb2dpc3RzPC9oMT5cbiAgICAgICAgICAgIHsvKiA8ZGl2PiAqL31cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZ2FwLVsyMHB4XSc+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3ByZXYnPjxDaGV2cm9uTGVmdCAvPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxTd2lwZXJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldz17M31cbiAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuPXsxfVxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uPXt7IG5leHRFbDogXCIubmV4dFwiLCBwcmV2RWw6IFwiLnByZXZcIiB9fVxuICAgICAgICAgICAgICAgICAgICBsb29wPXt0cnVlfVxuXG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZXM9e1tBdXRvcGxheSwgTmF2aWdhdGlvbl19XG4gICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMjAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50cz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gNjQwcHggKGZvciBkZXNrb3RvcCBkZXZpY2VzKVxuICAgICAgICAgICAgICAgICAgICAgICAgNjQwOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuXG4gICAgICAgICAgICAgICAgICAgIHtzYWxvbkdyb3Vwcy5tYXAoKGdyb3VwLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGdhcC1bMjBweF0nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z3JvdXAubWFwKChzYWxvbiwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBrZXk9e2lkeH0gaHJlZj17c2Fsb24uaHJlZn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17c2Fsb24uaW1nU3JjfSB3aWR0aD17MzI0fSBoZWlnaHQ9ezE4Mn0gYWx0PSdzYWxvbicgY2xhc3NOYW1lPSdzbTphc3BlY3QtdmlkZW8gc206dy1mdWxsIHNtOmgtZnVsbCByb3VuZGVkLW1kJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvU3dpcGVyPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J25leHQnPjxDaGV2cm9uUmlnaHQgLz48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogPC9kaXY+ICovfVxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktYmV0d2VlbiAgaXRlbXMtY2VudGVyIHNtOnB4LVsyMCVdIG10LTgnPiAqL31cblxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPScgZmxleCBmbGV4LXJvdyBnYXAtWzIwcHhdIHNtOmdhcC1bMTAwcHhdJz5cblxuPHAgY2xhc3NOYW1lPSdmbGV4IGdhcC1bNXB4XSc+PEltYWdlIHNyYz1cIi9pbWcvcGluLnN2Z1wiIHdpZHRoPXsyMH0gaGVpZ2h0PXsyMH0gYWx0PSdpbWcnICAvPk11bWJhaTwvcD5cbjxwIGNsYXNzTmFtZT0nZmxleCBnYXAtWzVweF0nPjxJbWFnZSBzcmM9XCIvaW1nL3Bpbi5zdmdcIiB3aWR0aD17MjB9IGhlaWdodD17MjB9IGFsdD0naW1nJyAgLz5QdW5lPC9wPlxuPHAgY2xhc3NOYW1lPSdmbGV4IGdhcC1bNXB4XSc+PEltYWdlIHNyYz1cIi9pbWcvcGluLnN2Z1wiIHdpZHRoPXsyMH0gaGVpZ2h0PXsyMH0gYWx0PSdpbWcnICAvPkJhbmdhbG9yZTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICB7LyogPC9kaXY+ICovfVxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2Fsb25Dcm91c2FsIl0sIm5hbWVzIjpbIlJlYWN0IiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJBdXRvcGxheSIsIk5hdmlnYXRpb24iLCJDaGV2cm9uTGVmdCIsIkNoZXZyb25SaWdodCIsIkltYWdlIiwiTGluayIsIlNhbG9uQ3JvdXNhbCIsInNhbG9uR3JvdXBzIiwiaHJlZiIsImltZ1NyYyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiYnV0dG9uIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJsb29wIiwibW9kdWxlcyIsImF1dG9wbGF5IiwiZGVsYXkiLCJkaXNhYmxlT25JbnRlcmFjdGlvbiIsImJyZWFrcG9pbnRzIiwibWFwIiwiZ3JvdXAiLCJpbmRleCIsInNhbG9uIiwiaWR4Iiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Home/SalonCrousal.jsx\n"));

/***/ })

});