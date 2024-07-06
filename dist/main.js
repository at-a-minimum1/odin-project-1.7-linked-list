/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./linked-list-node.js":
/*!*****************************!*\
  !*** ./linked-list-node.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   linkedListNode: () => (/* binding */ linkedListNode)\n/* harmony export */ });\nclass linkedListNode {\n\tconstructor(data) {\n\t\tthis.data = data;\n\t\tthis.upcomingNode = null;\n\t}\n\tsetNextNode(node) {\n\t\tthis.upcomingNode = node;\n\t}\n\tget nextNode() {\n\t\treturn this.upcomingNode;\n\t}\n}\n\n\n//# sourceURL=webpack:///./linked-list-node.js?");

/***/ }),

/***/ "./linked-list.js":
/*!************************!*\
  !*** ./linked-list.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   linkedList: () => (/* binding */ linkedList)\n/* harmony export */ });\nclass linkedList {\n\tconstructor(headOfList) {\n\t\tthis.headOfList = headOfList || null;\n\t\tthis.tailOfList = headOfList;\n\t\tthis.sizeOfList = 1;\n\t}\n\tprepend(node) {\n\t\tif (this.sizeOfList < 2) {\n\t\t\tnode.setNextNode(this.headOfList);\n\t\t\tnode.setNextNode(this.tailOfList);\n\t\t\tthis.headOfList = node;\n\t\t} else {\n\t\t\tnode.setNextNode(this.headOfList);\n\t\t\tthis.headOfList = node;\n\t\t}\n\t\tthis.sizeOfList++;\n\t}\n\tget size() {\n\t\treturn this.sizeOfList;\n\t}\n\n\tget head() {\n\t\treturn this.headOfList;\n\t}\n\n\tget tail() {\n\t\treturn this.tailOfList;\n\t}\n\n\tsetTail(node) {\n\t\tthis.tailOfList = node;\n\t}\n\n\tatIndex(index) {\n\t\tlet currentNode = this.headOfList;\n\t\tlet i = 0;\n\n\t\tif (index == 0) {\n\t\t\treturn currentNode;\n\t\t}\n\n\t\tif (index > this.size) {\n\t\t\tconsole.error(\"----Request is out of bounds----\");\n\t\t\treturn null;\n\t\t}\n\n\t\twhile (i < index) {\n\t\t\tcurrentNode = currentNode.nextNode;\n\t\t\ti++;\n\t\t}\n\t\treturn currentNode;\n\t}\n\tpopElement() {\n\t\tlet tempHead = this.headOfList;\n\t\tthis.headOfList = this.headOfList.nextNode;\n\t\tthis.sizeOfList--;\n\t\treturn tempHead;\n\t}\n\tcontains(value) {\n\t\tlet currentNode = this.head;\n\t\twhile (currentNode) {\n\t\t\tif (value == currentNode.data) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tcurrentNode = currentNode.nextNode;\n\t\t}\n\t\treturn false;\n\t}\n\tfind(value) {\n\t\tlet currentNode = this.head;\n\t\twhile (currentNode) {\n\t\t\tif (currentNode.data == value) {\n\t\t\t\treturn currentNode;\n\t\t\t}\n\t\t\tcurrentNode = currentNode.nextNode;\n\t\t}\n\t\tlet errMsg = \"Node not found\";\n\t\treturn errMsg;\n\t}\n\ttoString() {\n\t\tlet currentNode = this.head;\n\t\tlet linkedListString = \"\";\n\t\twhile (currentNode) {\n\t\t\tlinkedListString += currentNode.data;\n\t\t\tif (currentNode.nextNode !== null) {\n\t\t\t\tlinkedListString += \"->\";\n\t\t\t}\n\t\t\tcurrentNode = currentNode.nextNode;\n\t\t}\n\t\treturn linkedListString;\n\t}\n\n\t// // Extra Credit\n\tinsertAt(inputNode, index) {\n\t\tif (index == 0) {\n\t\t\tthis.prepend(inputNode);\n\t\t} else {\n\t\t\tlet nodeBeforeIndex = this.atIndex(index - 1);\n\t\t\tlet nodeAtIndex = this.atIndex(index);\n\t\t\tnodeBeforeIndex.setNextNode(inputNode);\n\t\t\tinputNode.setNextNode(nodeAtIndex);\n\t\t}\n\t}\n\tremoveAt(index) {\n\t\tlet nodeAtIndex = this.atIndex(index);\n\t\tlet beforeIndex = index - 1;\n\t\tlet afterIndex = index + 1;\n\n\t\tif (index == 0) {\n\t\t\tthis.popElement();\n\t\t} else if (afterIndex > this.size) {\n\t\t\tlet nodeBeforeIndex = this.atIndex(beforeIndex);\n\t\t\tthis.setTail(nodeBeforeIndex);\n\t\t\tnodeBeforeIndex.setNextNode(null);\n\t\t} else {\n\t\t\tlet nodeBeforeIndex = this.atIndex(beforeIndex);\n\t\t\tlet nodeAfterIndex = this.atIndex(afterIndex);\n\t\t\tnodeBeforeIndex.setNextNode(nodeAfterIndex);\n\t\t}\n\t}\n}\n\n\n//# sourceURL=webpack:///./linked-list.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _linked_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../linked-list */ \"./linked-list.js\");\n/* harmony import */ var _linked_list_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../linked-list-node */ \"./linked-list-node.js\");\n\n\n\nlet node = new _linked_list_node__WEBPACK_IMPORTED_MODULE_1__.linkedListNode(\"Nodey The Nodeman\", null);\nlet node2 = new _linked_list_node__WEBPACK_IMPORTED_MODULE_1__.linkedListNode(\"Noder\", null);\nlet node3 = new _linked_list_node__WEBPACK_IMPORTED_MODULE_1__.linkedListNode(\"Real Boomer Hours\", null);\nlet node4 = new _linked_list_node__WEBPACK_IMPORTED_MODULE_1__.linkedListNode(\"Nodester\", null);\nlet list = new _linked_list__WEBPACK_IMPORTED_MODULE_0__.linkedList(node);\nlet number = list.size;\n\nconsole.log(\"----PREPEND TESTING----\");\nconsole.log(\"Before Prepend: \" + list.toString());\nlist.prepend(node2);\nnumber = list.size;\nconsole.log(`List size: ${number} //should be 2`);\nconsole.log(\"After prepend: \" + list.toString());\nlist.prepend(node3);\nnumber = list.size;\nconsole.log(`List size: ${number} //should be 3`);\nconsole.log(\"After prepend: \" + list.toString());\n\nlist.prepend(node4);\nnumber = list.size;\nconsole.log(`List size: ${number} //should be 4`);\nconsole.log(\"After prepend: \" + list.toString());\n\nconsole.log(\"----FIND TESTING----\");\nconsole.log(list.find(\"Noder\"));\nconsole.log(list.find(\"Nodester\"));\nconsole.log(list.find(\"NODDDERS\") + \" SB: Node not found\");\n\nconsole.log(\"----POP TESTING----\");\nlet poppedNode = list.popElement();\nconsole.log(`Popped Node: ${poppedNode.data}`);\nnumber = list.size;\nconsole.log(`List size: ${number} //should be 3`);\nconsole.log(list.toString());\n\nconsole.log(\"----AT INDEX TESTING----\");\nconsole.log(list.atIndex(90));\nconsole.log(list.atIndex(0).data + \" SB: Real Boomer Hours\");\nconsole.log(list.atIndex(1).data + \" SB: Noder\");\nconsole.log(list.atIndex(2).data + \" SB: Nodey The Nodeman\");\n\nconsole.log(\"----TAIL TESTING----\");\nconsole.log(list.tail.data + \" SB: Nodey the Nodeman\");\n\nconsole.log(\"---INSERT AT TESTING---\");\nconsole.log(list.toString());\nlet node5 = new _linked_list_node__WEBPACK_IMPORTED_MODULE_1__.linkedListNode(\"icecream\", null);\nlist.insertAt(node5, 1);\nconsole.log(list.toString());\nlet node6 = new _linked_list_node__WEBPACK_IMPORTED_MODULE_1__.linkedListNode(\"Poppers\");\nlist.insertAt(node6, 0);\nconsole.log(list.toString());\n\nconsole.log(\"---REMOVE AT TESTING---\");\nconsole.log(list.toString());\nlist.removeAt(list.size);\nconsole.log(list.toString());\nlist.removeAt(0);\nconsole.log(list.toString());\nlist.removeAt(1);\nconsole.log(list.toString());\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;