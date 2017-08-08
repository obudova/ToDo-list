/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + ".bundle.js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/ToDo-list/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDoBuilder__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_style_scss__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__css_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manifest_json__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manifest_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__manifest_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sw_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sw_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__sw_js__);




new __WEBPACK_IMPORTED_MODULE_0__toDoBuilder__["a" /* default */](document.querySelector('.board'));
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('sw.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
console.log('type script');
// function showNotification() {
//     Notification.requestPermission(function(result) {
//         if (result === 'granted') {
//             navigator.serviceWorker.ready.then(function(registration) {
//                 registration.showNotification('Vibration Sample', {
//                     body: 'Buzz! Buzz!',
//                     icon: '/android-chrome-512x512.png',
//                     vibrate: [200, 100, 200, 100, 200, 100, 200],
//                     tag: 'vibration-sample'
//                 });
//             });
//         }
//     });
// }
// showNotification();


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__todolist__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage__ = __webpack_require__(4);


var template = "\n<button id=\"todoBuilder\"></button>\n<div class=\"todo-list-board\"></div>\n";
var ToDoBuilder = (function () {
    function ToDoBuilder(board) {
        this.board = board;
        this.storage = new __WEBPACK_IMPORTED_MODULE_1__storage__["a" /* default */]('todo-lists');
        this.data = this.storage.getStorage();
        this.init();
        if (this.data.length) {
            this.createInitialLists(this.data);
        }
        else {
            this.createList();
        }
    }
    ToDoBuilder.prototype.createInitialLists = function (initialData) {
        var _this = this;
        initialData.forEach(function (item) {
            _this.createStoredList(item);
        });
    };
    ToDoBuilder.prototype.init = function () {
        this.board.innerHTML = template;
        this.button = this.board.querySelector('#todoBuilder');
        this.listsArr = [];
        this.initEvents();
    };
    ToDoBuilder.prototype.initEvents = function () {
        this.button.addEventListener('click', this.createList.bind(this));
        this.board.addEventListener('listUpdated', this.updateList.bind(this));
        this.board.addEventListener('listCreated', this.addListToStorage.bind(this));
        this.board.addEventListener('listRemoved', this.removeListFromStorage.bind(this));
        this.board.addEventListener('listEditing', this.hideBtnAdd.bind(this));
    };
    ToDoBuilder.prototype.updateList = function (e) {
        this.storage.updateItem(e.detail);
        this.showBtnAdd();
    };
    ToDoBuilder.prototype.addListToStorage = function (e) {
        this.storage.persistItem(e.detail);
    };
    ToDoBuilder.prototype.removeListFromStorage = function (e) {
        this.storage.forgetItem(e.detail);
    };
    ToDoBuilder.prototype.createContainerForList = function () {
        var list = document.createElement('div');
        list.classList.add('todo-list');
        this.board.querySelector('.todo-list-board').appendChild(list);
        return list;
    };
    ToDoBuilder.prototype.createList = function () {
        this.listsArr.push(new __WEBPACK_IMPORTED_MODULE_0__todolist__["a" /* default */](this.createContainerForList()));
    };
    ToDoBuilder.prototype.showBtnAdd = function () {
        // if(this.button.classList.contains('is-hidden')){
        //     this.button.classList.remove('is-hidden')
        // }
    };
    ToDoBuilder.prototype.hideBtnAdd = function () {
        //this.button.classList.add('is-hidden')
    };
    ToDoBuilder.prototype.createStoredList = function (item) {
        this.listsArr.push(new __WEBPACK_IMPORTED_MODULE_0__todolist__["a" /* default */](this.createContainerForList(), {
            name: item.name,
            id: item.id,
            tasksArr: item.tasksArr
        }));
    };
    return ToDoBuilder;
}());
/* harmony default export */ __webpack_exports__["a"] = (ToDoBuilder);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var defaultOptions = {
    listTitle: 'my List'
};
var Template = "\n\n<div class=\"list__header\">\n    <div class=\"list__header__target\"></div>\n    <textarea class=\"list__header__input\"></textarea>\n    <a class=\"btn-remove-list\"></a>\n</div>\n<div class=\"list__items\">\n    <div class=\"composer__container\">\n        <label for=\"newTodo\">New task</label>\n        <textarea class=\"list__item__composer-textarea\" id=\"newTodo\"></textarea>\n        <!--<button class=\"btn-cansel-add-task\"></button>-->\n    </div>\n</div>\n<div class=\"list__controls\">\n    <label for=\"\">Left tasks: </label>\n    <div class=\"counter-done\"></div>\n    <a  class=\"btn-clear-all\">Clear All</a>\n</div>\n";
var ENTER_KEYCODE = 13;
var ToDoList = (function () {
    function ToDoList(listContainer, options) {
        if (options === void 0) { options = null; }
        this.list = listContainer;
        this.list.innerHTML = Template;
        this.option = Object.assign({}, defaultOptions, options);
        this.titleName = this.option.listTitle;
        this.titleTarget = this.list.querySelector('.list__header__target');
        this.titleTextarea = this.list.querySelector('.list__header__input');
        this.listItemsContainer = this.list.querySelector('.list__items');
        this.composerContainer = this.list.querySelector('.composer__container');
        this.composerTextarea = this.composerContainer.querySelector('.list__item__composer-textarea');
        this.btnClearAll = this.list.querySelector('.btn-clear-all');
        this.btnRemoveList = this.list.querySelector('.btn-remove-list');
        this.id = Date.now().toString();
        this.tasksArr = [];
        if (options) {
            this.titleName = options.name;
            this.id = options.id.toString();
            this.tasksArr = options.tasksArr;
            if (this.tasksArr.length) {
                this.addStoredTasks();
            }
        }
        else {
            this.addToStorage();
        }
        this.init();
    }
    ToDoList.prototype.init = function () {
        this.list.classList.add('list');
        this.list.setAttribute('id', this.id);
        this.createComponents();
        this.initEvents();
    };
    ToDoList.prototype.addToStorage = function () {
        var listCreated = new CustomEvent('listCreated', {
            bubbles: true,
            detail: {
                name: this.titleName,
                id: this.id,
                tasksArr: this.tasksArr
            }
        });
        this.list.dispatchEvent(listCreated);
    };
    ToDoList.prototype.onUpdate = function () {
        this.recount();
        var listUpdated = new CustomEvent('listUpdated', {
            bubbles: true,
            detail: {
                name: this.titleName,
                id: this.id,
                tasksArr: this.tasksArr
            }
        });
        this.list.dispatchEvent(listUpdated);
    };
    ToDoList.prototype.createComponents = function () {
        this.titleTextarea.value = this.option.name ? this.option.name : this.option.listTitle;
        this.recount();
    };
    ToDoList.prototype.initEvents = function () {
        var _this = this;
        this.list.addEventListener('animationend', this.onRemove.bind(this));
        this.titleTarget.addEventListener('click', this.onTitleClick.bind(this));
        this.titleTextarea.addEventListener('blur', this.onTextareaBlur.bind(this));
        this.btnClearAll.addEventListener('click', this.clearAllTasks.bind(this));
        this.btnRemoveList.addEventListener('click', this.removeList.bind(this));
        this.composerTextarea.addEventListener('keydown', function (e) {
            if (e.keyCode === ENTER_KEYCODE) {
                e.preventDefault();
                _this.addTask.bind(_this)();
            }
        });
        this.composerTextarea.addEventListener('focus', function (e) {
            _this.composerContainer.classList.add('is-active');
            _this.createEventOfListEditing();
        });
        this.composerTextarea.addEventListener('blur', function (e) {
            _this.composerContainer.classList.remove('is-active');
            _this.addTask.bind(_this)();
            console.log('cmposer blur');
        });
        this.listItemsContainer.addEventListener('taskToggled', function (e) {
            _this.onUpdate();
        });
        this.listItemsContainer.addEventListener('delete', function (e) {
            _this.deleteTask(e);
        });
        this.listItemsContainer.addEventListener('nameChanged', function (e) {
            _this.changeTaskName(e);
        });
    };
    ToDoList.prototype.createEventOfListEditing = function () {
        var listEditing = new CustomEvent('listEditing', {
            bubbles: true,
            detail: {}
        });
        this.list.dispatchEvent(listEditing);
    };
    ToDoList.prototype.onTitleClick = function () {
        this.titleTarget.classList.add('is-hidden');
        this.titleTextarea.focus();
        this.titleTextarea.select();
        this.createEventOfListEditing();
    };
    ToDoList.prototype.onTextareaBlur = function () {
        this.titleName = this.titleTextarea.value;
        this.titleTarget.classList.remove('is-hidden');
        var updateTitle = new CustomEvent('update', {
            bubbles: true,
            detail: {
                ToDoList: this
            }
        });
        this.list.dispatchEvent(updateTitle);
        this.onUpdate();
    };
    ToDoList.prototype.onComposerLinkClick = function () {
        this.composerContainer.classList.remove('is-hidden');
        this.composerTextarea.focus();
    };
    ToDoList.prototype.onComposerLabelClick = function (e) {
        console.log(this);
    };
    ToDoList.prototype.addTask = function () {
        var _this = this;
        if (this.composerTextarea.value) {
            var task_1 = document.createElement('div');
            task_1.classList.add('list__item');
            this.listItemsContainer.insertBefore(task_1, this.listItemsContainer.querySelector('.composer__container'));
            //this.tasksArr.push(new ToDoListItem(task, this.composerTextarea.value));
            var taskName_1 = this.composerTextarea.value;
            __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 0)).then(function (module) {
                _this.tasksArr.push(new module.default(task_1, taskName_1));
                _this.onUpdate();
                _this.composerTextarea.value = "";
                console.log(_this.tasksArr);
            });
            //this.tasksArr.push(itemCtor);
        }
        else {
            //alert('Task field is empty')
        }
    };
    ToDoList.prototype.addStoredTasks = function () {
        var _this = this;
        __webpack_require__.e/* import() */(0/* duplicate */).then(__webpack_require__.bind(null, 0)).then(function (module) {
            var itemCtor = module.default;
            _this.tasksArr = _this.tasksArr.map(function (item) {
                var task = document.createElement('div');
                task.classList.add('list__item');
                _this.listItemsContainer.insertBefore(task, _this.listItemsContainer.querySelector('.composer__container'));
                return new itemCtor(task, item.name, {
                    id: item.id,
                    isDone: item._isDone
                });
            });
        });
    };
    ToDoList.prototype.deleteTask = function (e) {
        var taskId = e.detail.id;
        this.tasksArr = this.tasksArr.filter(function (elem) {
            return elem.id !== taskId;
        });
        this.onUpdate();
    };
    ToDoList.prototype.changeTaskName = function (e) {
        this.onUpdate();
    };
    ToDoList.prototype.clearAllTasks = function () {
        var TaskNodes = this.listItemsContainer.querySelectorAll('.list__item');
        TaskNodes.forEach(function (elem) {
            elem.remove();
        });
        this.tasksArr = [];
        this.onUpdate();
    };
    ToDoList.prototype.removeList = function () {
        var eventRemoveList = new CustomEvent('listRemoved', {
            bubbles: true,
            detail: this.id
        });
        this.list.dispatchEvent(eventRemoveList);
        this.list.classList.add('is-deleted');
    };
    ToDoList.prototype.onRemove = function (e) {
        console.log(e);
        if (e.target == this.list && e.animationName === "scale") {
            this.list.remove();
        }
    };
    ToDoList.prototype.recount = function () {
        console.log(this.tasksArr);
        this.list
            .querySelector('.counter-done')
            .innerHTML = this.tasksArr.filter(function (item) { return !item.isDone; }).length.toString();
    };
    return ToDoList;
}());
/* harmony default export */ __webpack_exports__["a"] = (ToDoList);
// export var __useDefault = true;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Storage = (function () {
    function Storage(storageKey) {
        this.storageKey = storageKey;
    }
    Storage.prototype.persistItem = function (item) {
        var storage = this.getStorage();
        storage.push(item);
        this.setStorage(storage);
    };
    Storage.prototype.updateItem = function (list) {
        var todos = this.getStorage();
        var index = todos.findIndex(function (item) { return item.id === list.id; });
        todos[index] = list;
        this.setStorage(todos);
    };
    Storage.prototype.forgetItem = function (itemId) {
        var storage = this.getStorage().filter(function (item) { return item.id !== itemId; });
        this.setStorage(storage);
    };
    Storage.prototype.getStorage = function () {
        var todos = localStorage.getItem(this.storageKey);
        return todos ? JSON.parse(todos) : [];
    };
    Storage.prototype.setStorage = function (storage) {
        localStorage.setItem(this.storageKey, JSON.stringify(storage));
    };
    return Storage;
}());
/* harmony default export */ __webpack_exports__["a"] = (Storage);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "manifest.json";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sw.js";

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmU0ZTViMTZkNDQzZTU5ODgxMzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NjcmlwdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdG9Eb0J1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RvZG9saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9zdG9yYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9jc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9tYW5pZmVzdC5qc29uIiwid2VicGFjazovLy8uL3N3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsV0FBVyxFQUFFO0FBQ3ZEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7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Qzs7Ozs7O0FDQUEseUQ7Ozs7OztBQ0FBLGlEIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGNodW5rSWRzLCBtb3JlTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpIHtcbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdLCByZXN1bHQ7XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihjaHVua0lkcywgbW9yZU1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzKTtcbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdH07XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdHMgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0MTogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgPT09IDApIHtcbiBcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkgeyByZXNvbHZlKCk7IH0pO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZENodW5rRGF0YVsyXTtcbiBcdFx0fVxuXG4gXHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcbiBcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0fSk7XG4gXHRcdGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2U7XG5cbiBcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0c2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiBcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRzY3JpcHQuYXN5bmMgPSB0cnVlO1xuIFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDAwMDtcblxuIFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuIFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcbiBcdFx0fVxuIFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5idW5kbGUuanNcIjtcbiBcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUsIDEyMDAwMCk7XG4gXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdGZ1bmN0aW9uIG9uU2NyaXB0Q29tcGxldGUoKSB7XG4gXHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0Y2h1bmtbMV0obmV3IEVycm9yKCdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuJykpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdH1cbiBcdFx0fTtcbiBcdFx0aGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXG4gXHRcdHJldHVybiBwcm9taXNlO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvVG9Eby1saXN0L1wiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2ZTRlNWIxNmQ0NDNlNTk4ODEzOCIsImltcG9ydCBUb0RvQnVpbGRlciBmcm9tICcuL3RvRG9CdWlsZGVyJztcbmltcG9ydCAnLi4vY3NzL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuLi8uLi9tYW5pZmVzdC5qc29uJztcbmltcG9ydCAnLi4vLi4vc3cuanMnO1xubmV3IFRvRG9CdWlsZGVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpKTtcbmlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJ3N3LmpzJykudGhlbihmdW5jdGlvbihyZWdpc3RyYXRpb24pIHtcbiAgICAgICAgICAgIC8vIFJlZ2lzdHJhdGlvbiB3YXMgc3VjY2Vzc2Z1bFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwgd2l0aCBzY29wZTogJywgcmVnaXN0cmF0aW9uLnNjb3BlKTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAvLyByZWdpc3RyYXRpb24gZmFpbGVkIDooXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiAnLCBlcnIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmNvbnNvbGUubG9nKCd0eXBlIHNjcmlwdCcpO1xuLy8gZnVuY3Rpb24gc2hvd05vdGlmaWNhdGlvbigpIHtcbi8vICAgICBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oZnVuY3Rpb24ocmVzdWx0KSB7XG4vLyAgICAgICAgIGlmIChyZXN1bHQgPT09ICdncmFudGVkJykge1xuLy8gICAgICAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHkudGhlbihmdW5jdGlvbihyZWdpc3RyYXRpb24pIHtcbi8vICAgICAgICAgICAgICAgICByZWdpc3RyYXRpb24uc2hvd05vdGlmaWNhdGlvbignVmlicmF0aW9uIFNhbXBsZScsIHtcbi8vICAgICAgICAgICAgICAgICAgICAgYm9keTogJ0J1enohIEJ1enohJyxcbi8vICAgICAgICAgICAgICAgICAgICAgaWNvbjogJy9hbmRyb2lkLWNocm9tZS01MTJ4NTEyLnBuZycsXG4vLyAgICAgICAgICAgICAgICAgICAgIHZpYnJhdGU6IFsyMDAsIDEwMCwgMjAwLCAxMDAsIDIwMCwgMTAwLCAyMDBdLFxuLy8gICAgICAgICAgICAgICAgICAgICB0YWc6ICd2aWJyYXRpb24tc2FtcGxlJ1xuLy8gICAgICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9KTtcbi8vIH1cbi8vIHNob3dOb3RpZmljYXRpb24oKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9zY3JpcHQudHMiLCJpbXBvcnQgVG9Eb0xpc3QgZnJvbSAnLi90b2RvbGlzdCc7XG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL3N0b3JhZ2UnO1xuY29uc3QgdGVtcGxhdGUgPSBgXG48YnV0dG9uIGlkPVwidG9kb0J1aWxkZXJcIj48L2J1dHRvbj5cbjxkaXYgY2xhc3M9XCJ0b2RvLWxpc3QtYm9hcmRcIj48L2Rpdj5cbmA7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvQnVpbGRlcntcbiAgICBib2FyZDogSFRNTERpdkVsZW1lbnQ7XG4gICAgc3RvcmFnZTogU3RvcmFnZTtcbiAgICBkYXRhOiBBcnJheTxPYmplY3Q+O1xuICAgIGJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgbGlzdHNBcnI6IEFycmF5PE9iamVjdD47XG4gICAgY29uc3RydWN0b3IoYm9hcmQpIHtcbiAgICAgICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xuICAgICAgICB0aGlzLnN0b3JhZ2UgPSBuZXcgU3RvcmFnZSgndG9kby1saXN0cycpO1xuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLnN0b3JhZ2UuZ2V0U3RvcmFnZSgpO1xuICAgICAgICB0aGlzLmluaXQoKTtcblxuICAgICAgICBpZiAodGhpcy5kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVJbml0aWFsTGlzdHModGhpcy5kYXRhKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVMaXN0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVJbml0aWFsTGlzdHMoaW5pdGlhbERhdGEpe1xuICAgICAgICBpbml0aWFsRGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVTdG9yZWRMaXN0KGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0KCl7XG4gICAgICAgIHRoaXMuYm9hcmQuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gICAgICAgIHRoaXMuYnV0dG9uID0gPEhUTUxCdXR0b25FbGVtZW50PnRoaXMuYm9hcmQucXVlcnlTZWxlY3RvcignI3RvZG9CdWlsZGVyJyk7XG4gICAgICAgIHRoaXMubGlzdHNBcnIgPSBbXTtcbiAgICAgICAgdGhpcy5pbml0RXZlbnRzKCk7XG4gICAgfVxuXG4gICAgaW5pdEV2ZW50cygpe1xuICAgICAgICB0aGlzLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY3JlYXRlTGlzdC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5ib2FyZC5hZGRFdmVudExpc3RlbmVyKCdsaXN0VXBkYXRlZCcsIHRoaXMudXBkYXRlTGlzdC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5ib2FyZC5hZGRFdmVudExpc3RlbmVyKCdsaXN0Q3JlYXRlZCcsIHRoaXMuYWRkTGlzdFRvU3RvcmFnZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5ib2FyZC5hZGRFdmVudExpc3RlbmVyKCdsaXN0UmVtb3ZlZCcsIHRoaXMucmVtb3ZlTGlzdEZyb21TdG9yYWdlLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2xpc3RFZGl0aW5nJywgdGhpcy5oaWRlQnRuQWRkLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHVwZGF0ZUxpc3QoZSl7XG4gICAgICAgIHRoaXMuc3RvcmFnZS51cGRhdGVJdGVtKGUuZGV0YWlsKTtcbiAgICAgICAgdGhpcy5zaG93QnRuQWRkKCk7XG4gICAgfVxuXG4gICAgYWRkTGlzdFRvU3RvcmFnZShlKXtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnBlcnNpc3RJdGVtKGUuZGV0YWlsKTtcbiAgICB9XG5cbiAgICByZW1vdmVMaXN0RnJvbVN0b3JhZ2UoZSl7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5mb3JnZXRJdGVtKGUuZGV0YWlsKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDb250YWluZXJGb3JMaXN0KCl7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGlzdC5jbGFzc0xpc3QuYWRkKCd0b2RvLWxpc3QnKTtcbiAgICAgICAgdGhpcy5ib2FyZC5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0LWJvYXJkJykuYXBwZW5kQ2hpbGQobGlzdCk7XG4gICAgICAgIHJldHVybiBsaXN0O1xuICAgIH1cblxuICAgIGNyZWF0ZUxpc3QoKSB7XG4gICAgICAgIHRoaXMubGlzdHNBcnIucHVzaChuZXcgVG9Eb0xpc3QodGhpcy5jcmVhdGVDb250YWluZXJGb3JMaXN0KCkpKTtcbiAgICB9XG5cbiAgICBzaG93QnRuQWRkKCl7XG4gICAgICAgIC8vIGlmKHRoaXMuYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnaXMtaGlkZGVuJykpe1xuICAgICAgICAvLyAgICAgdGhpcy5idXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJylcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIGhpZGVCdG5BZGQoKXtcbiAgICAgICAgLy90aGlzLmJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKVxuICAgIH1cblxuICAgIGNyZWF0ZVN0b3JlZExpc3QoaXRlbSl7XG4gICAgICAgIHRoaXMubGlzdHNBcnIucHVzaChuZXcgVG9Eb0xpc3QodGhpcy5jcmVhdGVDb250YWluZXJGb3JMaXN0KCksIHtcbiAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgICAgdGFza3NBcnI6IGl0ZW0udGFza3NBcnJcbiAgICAgICAgfSkpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy90b0RvQnVpbGRlci50cyIsIi8vIGltcG9ydCBUb0RvTGlzdEl0ZW0gZnJvbSAnLi90b0RvTGlzdEl0ZW0nO1xuaW50ZXJmYWNlIG9wdGlvblBhcmFtIHtcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgaWQ6IG51bWJlcixcbiAgICB0YXNrc0FycjogQXJyYXk8T2JqZWN0PlxufVxuaW50ZXJmYWNlIG9wdGlvbnNNZXJnZWQge1xuICAgIGxpc3RUaXRsZTogc3RyaW5nLFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBpZDogbnVtYmVyLFxuICAgIHRhc2tzQXJyOiBBcnJheTxPYmplY3Q+XG59XG5pbnRlcmZhY2UgdGFza1Byb3BlcnRpZXMge1xuICAgIGlzRG9uZTogYm9vbGVhbixcbiAgICBpZDogbnVtYmVyLFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBfaXNEb25lOiBib29sZWFuXG59XG5pbnRlcmZhY2Ugb3B0aW9uT2JqZWN0IHtcbiAgICBsaXN0VGl0bGU6IHN0cmluZyxcbn1cbmNvbnN0IGRlZmF1bHRPcHRpb25zOiBvcHRpb25PYmplY3QgPSB7XG4gICAgbGlzdFRpdGxlOiAnbXkgTGlzdCdcbn07XG5pbnRlcmZhY2UgTm9kZVNlbGVjdG9yIHtcbiAgICBxdWVyeVNlbGVjdG9yPFRIVE1MRWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50PihzZWxlY3RvcnM6IHN0cmluZyk6IFRIVE1MRWxlbWVudDtcbiAgICBxdWVyeVNlbGVjdG9yQWxsPFRIVE1MRWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50PihzZWxlY3RvcnM6IHN0cmluZyk6IE5vZGVMaXN0T2Y8VEhUTUxFbGVtZW50Pjtcbn1cbmNvbnN0IFRlbXBsYXRlID0gYFxuXG48ZGl2IGNsYXNzPVwibGlzdF9faGVhZGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImxpc3RfX2hlYWRlcl9fdGFyZ2V0XCI+PC9kaXY+XG4gICAgPHRleHRhcmVhIGNsYXNzPVwibGlzdF9faGVhZGVyX19pbnB1dFwiPjwvdGV4dGFyZWE+XG4gICAgPGEgY2xhc3M9XCJidG4tcmVtb3ZlLWxpc3RcIj48L2E+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJsaXN0X19pdGVtc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb21wb3Nlcl9fY29udGFpbmVyXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJuZXdUb2RvXCI+TmV3IHRhc2s8L2xhYmVsPlxuICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJsaXN0X19pdGVtX19jb21wb3Nlci10ZXh0YXJlYVwiIGlkPVwibmV3VG9kb1wiPjwvdGV4dGFyZWE+XG4gICAgICAgIDwhLS08YnV0dG9uIGNsYXNzPVwiYnRuLWNhbnNlbC1hZGQtdGFza1wiPjwvYnV0dG9uPi0tPlxuICAgIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibGlzdF9fY29udHJvbHNcIj5cbiAgICA8bGFiZWwgZm9yPVwiXCI+TGVmdCB0YXNrczogPC9sYWJlbD5cbiAgICA8ZGl2IGNsYXNzPVwiY291bnRlci1kb25lXCI+PC9kaXY+XG4gICAgPGEgIGNsYXNzPVwiYnRuLWNsZWFyLWFsbFwiPkNsZWFyIEFsbDwvYT5cbjwvZGl2PlxuYDtcblxuY29uc3QgRU5URVJfS0VZQ09ERSA9IDEzO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9Eb0xpc3Qge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGxpc3RDb250YWluZXJcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgICAqL1xuICAgIGxpc3Q6IEhUTUxEaXZFbGVtZW50O1xuICAgIG9wdGlvbjogb3B0aW9uc01lcmdlZDtcbiAgICB0aXRsZU5hbWU6IFN0cmluZztcbiAgICB0aXRsZVRhcmdldDogSFRNTERpdkVsZW1lbnQ7XG4gICAgdGl0bGVUZXh0YXJlYTogSFRNTFRleHRBcmVhRWxlbWVudDtcbiAgICBsaXN0SXRlbXNDb250YWluZXI6IEhUTUxVTGlzdEVsZW1lbnQ7XG4gICAgY29tcG9zZXJDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIGNvbXBvc2VyVGV4dGFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG4gICAgYnRuQ2xlYXJBbGw6IEhUTUxCdXR0b25FbGVtZW50O1xuICAgIGJ0blJlbW92ZUxpc3Q6IEhUTUxCdXR0b25FbGVtZW50O1xuICAgIGlkOiBzdHJpbmc7XG4gICAgdGFza3NBcnI6IEFycmF5PE9iamVjdD47XG4gICAgY29uc3RydWN0b3IobGlzdENvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQsIG9wdGlvbnM6IG9wdGlvblBhcmFtID0gbnVsbCl7XG4gICAgICAgIHRoaXMubGlzdCA9IGxpc3RDb250YWluZXI7XG4gICAgICAgIHRoaXMubGlzdC5pbm5lckhUTUwgPSBUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5vcHRpb249KDxhbnk+T2JqZWN0KS5hc3NpZ24oe30sZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMudGl0bGVOYW1lID0gPHN0cmluZz50aGlzLm9wdGlvbi5saXN0VGl0bGU7XG4gICAgICAgIHRoaXMudGl0bGVUYXJnZXQgPSA8SFRNTERpdkVsZW1lbnQ+dGhpcy5saXN0LnF1ZXJ5U2VsZWN0b3IoJy5saXN0X19oZWFkZXJfX3RhcmdldCcpO1xuICAgICAgICB0aGlzLnRpdGxlVGV4dGFyZWEgPSA8SFRNTFRleHRBcmVhRWxlbWVudD50aGlzLmxpc3QucXVlcnlTZWxlY3RvcignLmxpc3RfX2hlYWRlcl9faW5wdXQnKTtcblxuICAgICAgICB0aGlzLmxpc3RJdGVtc0NvbnRhaW5lciA9IDxIVE1MVUxpc3RFbGVtZW50PnRoaXMubGlzdC5xdWVyeVNlbGVjdG9yKCcubGlzdF9faXRlbXMnKTtcblxuICAgICAgICB0aGlzLmNvbXBvc2VyQ29udGFpbmVyID0gPEhUTUxEaXZFbGVtZW50PnRoaXMubGlzdC5xdWVyeVNlbGVjdG9yKCcuY29tcG9zZXJfX2NvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLmNvbXBvc2VyVGV4dGFyZWEgPSA8SFRNTFRleHRBcmVhRWxlbWVudD50aGlzLmNvbXBvc2VyQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5saXN0X19pdGVtX19jb21wb3Nlci10ZXh0YXJlYScpO1xuXG4gICAgICAgIHRoaXMuYnRuQ2xlYXJBbGwgPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+dGhpcy5saXN0LnF1ZXJ5U2VsZWN0b3IoJy5idG4tY2xlYXItYWxsJyk7XG5cbiAgICAgICAgdGhpcy5idG5SZW1vdmVMaXN0ID0gPEhUTUxCdXR0b25FbGVtZW50PnRoaXMubGlzdC5xdWVyeVNlbGVjdG9yKCcuYnRuLXJlbW92ZS1saXN0Jyk7XG4gICAgICAgIHRoaXMuaWQgPSA8c3RyaW5nPkRhdGUubm93KCkudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy50YXNrc0FyciA9IFtdO1xuXG4gICAgICAgIGlmKG9wdGlvbnMpe1xuICAgICAgICAgICAgdGhpcy50aXRsZU5hbWUgPSA8c3RyaW5nPm9wdGlvbnMubmFtZTtcbiAgICAgICAgICAgIHRoaXMuaWQgPSBvcHRpb25zLmlkLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLnRhc2tzQXJyID0gb3B0aW9ucy50YXNrc0FycjtcbiAgICAgICAgICAgIGlmKHRoaXMudGFza3NBcnIubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFN0b3JlZFRhc2tzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRkVG9TdG9yYWdlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpe1xuICAgICAgICB0aGlzLmxpc3QuY2xhc3NMaXN0LmFkZCgnbGlzdCcpO1xuICAgICAgICB0aGlzLmxpc3Quc2V0QXR0cmlidXRlKCdpZCcsIHRoaXMuaWQpO1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudHMoKTtcbiAgICAgICAgdGhpcy5pbml0RXZlbnRzKCk7XG4gICAgfVxuXG4gICAgYWRkVG9TdG9yYWdlKCl7XG4gICAgICAgIGNvbnN0IGxpc3RDcmVhdGVkID0gbmV3IEN1c3RvbUV2ZW50KCdsaXN0Q3JlYXRlZCcsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnRpdGxlTmFtZSxcbiAgICAgICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgICAgICB0YXNrc0FycjogdGhpcy50YXNrc0FyclxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5saXN0LmRpc3BhdGNoRXZlbnQobGlzdENyZWF0ZWQpO1xuICAgIH1cblxuICAgIG9uVXBkYXRlKCl7XG4gICAgICAgIHRoaXMucmVjb3VudCgpO1xuICAgICAgICBjb25zdCBsaXN0VXBkYXRlZCA9IG5ldyBDdXN0b21FdmVudCgnbGlzdFVwZGF0ZWQnLCB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy50aXRsZU5hbWUsXG4gICAgICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgICAgICAgdGFza3NBcnI6IHRoaXMudGFza3NBcnJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGlzdC5kaXNwYXRjaEV2ZW50KGxpc3RVcGRhdGVkKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDb21wb25lbnRzKCl7XG4gICAgICAgIHRoaXMudGl0bGVUZXh0YXJlYS52YWx1ZSA9IHRoaXMub3B0aW9uLm5hbWUgPyB0aGlzLm9wdGlvbi5uYW1lIDogdGhpcy5vcHRpb24ubGlzdFRpdGxlIDtcbiAgICAgICAgdGhpcy5yZWNvdW50KCk7XG4gICAgfVxuXG4gICAgaW5pdEV2ZW50cygpe1xuICAgICAgICB0aGlzLmxpc3QuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgdGhpcy5vblJlbW92ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy50aXRsZVRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25UaXRsZUNsaWNrLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnRpdGxlVGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMub25UZXh0YXJlYUJsdXIuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuYnRuQ2xlYXJBbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsZWFyQWxsVGFza3MuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuYnRuUmVtb3ZlTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVtb3ZlTGlzdC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5jb21wb3NlclRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSk9PntcbiAgICAgICAgICAgaWYoZS5rZXlDb2RlID09PSBFTlRFUl9LRVlDT0RFKXtcbiAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgIHRoaXMuYWRkVGFzay5iaW5kKHRoaXMpKCk7XG4gICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29tcG9zZXJUZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsKGUpPT57XG4gICAgICAgICAgICB0aGlzLmNvbXBvc2VyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVFdmVudE9mTGlzdEVkaXRpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29tcG9zZXJUZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywoZSk9PntcbiAgICAgICAgICAgIHRoaXMuY29tcG9zZXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICB0aGlzLmFkZFRhc2suYmluZCh0aGlzKSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NtcG9zZXIgYmx1cicpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxpc3RJdGVtc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd0YXNrVG9nZ2xlZCcsIChlKT0+e1xuICAgICAgICAgICAgdGhpcy5vblVwZGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5saXN0SXRlbXNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZGVsZXRlJywgKGUpPT57XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZVRhc2soZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxpc3RJdGVtc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCduYW1lQ2hhbmdlZCcsIChlKT0+e1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VUYXNrTmFtZShlKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY3JlYXRlRXZlbnRPZkxpc3RFZGl0aW5nKCl7XG4gICAgICAgIGNvbnN0IGxpc3RFZGl0aW5nID0gbmV3IEN1c3RvbUV2ZW50KCdsaXN0RWRpdGluZycsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBkZXRhaWw6IHt9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxpc3QuZGlzcGF0Y2hFdmVudChsaXN0RWRpdGluZyk7XG5cbiAgICB9XG5cbiAgICBvblRpdGxlQ2xpY2soKXtcbiAgICAgICAgdGhpcy50aXRsZVRhcmdldC5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcbiAgICAgICAgdGhpcy50aXRsZVRleHRhcmVhLmZvY3VzKCk7XG4gICAgICAgIHRoaXMudGl0bGVUZXh0YXJlYS5zZWxlY3QoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVFdmVudE9mTGlzdEVkaXRpbmcoKTtcbiAgICB9XG5cbiAgICBvblRleHRhcmVhQmx1cigpe1xuICAgICAgICB0aGlzLnRpdGxlTmFtZSA9IHRoaXMudGl0bGVUZXh0YXJlYS52YWx1ZTtcbiAgICAgICAgdGhpcy50aXRsZVRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcbiAgICAgICAgY29uc3QgdXBkYXRlVGl0bGUgPSBuZXcgQ3VzdG9tRXZlbnQoJ3VwZGF0ZScse1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgIFRvRG9MaXN0OiB0aGlzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxpc3QuZGlzcGF0Y2hFdmVudCh1cGRhdGVUaXRsZSk7XG4gICAgICAgIHRoaXMub25VcGRhdGUoKTtcbiAgICB9XG5cbiAgICBvbkNvbXBvc2VyTGlua0NsaWNrKCl7XG4gICAgICAgIHRoaXMuY29tcG9zZXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJyk7XG4gICAgICAgIHRoaXMuY29tcG9zZXJUZXh0YXJlYS5mb2N1cygpO1xuICAgIH1cbiAgICBvbkNvbXBvc2VyTGFiZWxDbGljayhlKXtcbiAgICAgICAgY29uc29sZS5sb2codGhpcylcbiAgICB9XG5cbiAgICBhZGRUYXNrKCl7XG4gICAgICAgIGlmKHRoaXMuY29tcG9zZXJUZXh0YXJlYS52YWx1ZSl7XG4gICAgICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ2xpc3RfX2l0ZW0nKTtcbiAgICAgICAgICAgIHRoaXMubGlzdEl0ZW1zQ29udGFpbmVyLmluc2VydEJlZm9yZSh0YXNrLCB0aGlzLmxpc3RJdGVtc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY29tcG9zZXJfX2NvbnRhaW5lcicpKTtcbiAgICAgICAgICAgIC8vdGhpcy50YXNrc0Fyci5wdXNoKG5ldyBUb0RvTGlzdEl0ZW0odGFzaywgdGhpcy5jb21wb3NlclRleHRhcmVhLnZhbHVlKSk7XG4gICAgICAgICAgICBjb25zdCB0YXNrTmFtZSA9IHRoaXMuY29tcG9zZXJUZXh0YXJlYS52YWx1ZTtcbiAgICAgICAgICAgIGltcG9ydCgnLi90b0RvTGlzdEl0ZW0nKS50aGVuKG1vZHVsZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXNrc0Fyci5wdXNoKG5ldyBtb2R1bGUuZGVmYXVsdCh0YXNrLCB0YXNrTmFtZSkpO1xuICAgICAgICAgICAgICAgIHRoaXMub25VcGRhdGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvc2VyVGV4dGFyZWEudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGFza3NBcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvL3RoaXMudGFza3NBcnIucHVzaChpdGVtQ3Rvcik7XG5cbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgLy9hbGVydCgnVGFzayBmaWVsZCBpcyBlbXB0eScpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRTdG9yZWRUYXNrcygpe1xuICAgICAgICBpbXBvcnQoJy4vdG9Eb0xpc3RJdGVtJykudGhlbihtb2R1bGUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1DdG9yID0gbW9kdWxlLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgdGhpcy50YXNrc0FyciA9IHRoaXMudGFza3NBcnIubWFwKChpdGVtOiB0YXNrUHJvcGVydGllcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgnbGlzdF9faXRlbScpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RJdGVtc0NvbnRhaW5lci5pbnNlcnRCZWZvcmUodGFzaywgdGhpcy5saXN0SXRlbXNDb250YWluZXIucXVlcnlTZWxlY3RvcignLmNvbXBvc2VyX19jb250YWluZXInKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgaXRlbUN0b3IodGFzaywgaXRlbS5uYW1lLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRG9uZTogaXRlbS5faXNEb25lXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkZWxldGVUYXNrKGUpIHtcbiAgICAgICAgY29uc3QgdGFza0lkID0gZS5kZXRhaWwuaWQ7XG4gICAgICAgIHRoaXMudGFza3NBcnIgPSB0aGlzLnRhc2tzQXJyLmZpbHRlcigoZWxlbTogdGFza1Byb3BlcnRpZXMpPT57XG4gICAgICAgICAgICByZXR1cm4gZWxlbS5pZCAhPT0gdGFza0lkO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vblVwZGF0ZSgpO1xuICAgIH1cblxuICAgIGNoYW5nZVRhc2tOYW1lKGUpe1xuICAgICAgIHRoaXMub25VcGRhdGUoKTtcbiAgICB9XG5cbiAgICBjbGVhckFsbFRhc2tzKCl7XG4gICAgICAgIGNvbnN0IFRhc2tOb2RlcyAgPSB0aGlzLmxpc3RJdGVtc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdF9faXRlbScpO1xuICAgICAgICBUYXNrTm9kZXMuZm9yRWFjaCgoZWxlbSkgPT57XG4gICAgICAgICAgICBlbGVtLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50YXNrc0FyciA9IFtdO1xuICAgICAgICB0aGlzLm9uVXBkYXRlKCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlTGlzdCgpe1xuICAgICAgICBjb25zdCBldmVudFJlbW92ZUxpc3QgPSBuZXcgQ3VzdG9tRXZlbnQoJ2xpc3RSZW1vdmVkJywge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGRldGFpbDogdGhpcy5pZFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5saXN0LmRpc3BhdGNoRXZlbnQoZXZlbnRSZW1vdmVMaXN0KTtcbiAgICAgICAgdGhpcy5saXN0LmNsYXNzTGlzdC5hZGQoJ2lzLWRlbGV0ZWQnKTtcbiAgICB9XG4gICAgb25SZW1vdmUoZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICBpZihlLnRhcmdldCA9PSB0aGlzLmxpc3QgJiYgZS5hbmltYXRpb25OYW1lID09PSBcInNjYWxlXCIpe1xuICAgICAgICAgICAgdGhpcy5saXN0LnJlbW92ZSgpO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVjb3VudCgpe1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRhc2tzQXJyKTtcbiAgICAgICAgdGhpcy5saXN0XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmNvdW50ZXItZG9uZScpXG4gICAgICAgICAgICAuaW5uZXJIVE1MID0gdGhpcy50YXNrc0Fyci5maWx0ZXIoKGl0ZW06IHRhc2tQcm9wZXJ0aWVzKT0+ICFpdGVtLmlzRG9uZSkubGVuZ3RoLnRvU3RyaW5nKCk7XG4gICAgfVxufVxuLy8gZXhwb3J0IHZhciBfX3VzZURlZmF1bHQgPSB0cnVlO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdG9kb2xpc3QudHMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcbiAgICBzdG9yYWdlS2V5OiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3Ioc3RvcmFnZUtleSkge1xuICAgICAgICB0aGlzLnN0b3JhZ2VLZXkgPSBzdG9yYWdlS2V5O1xuICAgIH1cblxuICAgIHBlcnNpc3RJdGVtKGl0ZW0pIHtcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IHRoaXMuZ2V0U3RvcmFnZSgpO1xuICAgICAgICBzdG9yYWdlLnB1c2goaXRlbSk7XG4gICAgICAgIHRoaXMuc2V0U3RvcmFnZShzdG9yYWdlKTtcbiAgICB9XG5cbiAgICB1cGRhdGVJdGVtKGxpc3Qpe1xuICAgICAgICBjb25zdCB0b2RvcyA9IHRoaXMuZ2V0U3RvcmFnZSgpO1xuICAgICAgICBjb25zdCBpbmRleCA9IHRvZG9zLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaWQgPT09IGxpc3QuaWQpO1xuICAgICAgICB0b2Rvc1tpbmRleF0gPSBsaXN0O1xuICAgICAgICB0aGlzLnNldFN0b3JhZ2UodG9kb3MpO1xuICAgIH1cblxuICAgIGZvcmdldEl0ZW0oaXRlbUlkKSB7XG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSB0aGlzLmdldFN0b3JhZ2UoKS5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSBpdGVtSWQpO1xuICAgICAgICB0aGlzLnNldFN0b3JhZ2Uoc3RvcmFnZSk7XG4gICAgfVxuXG4gICAgZ2V0U3RvcmFnZSgpIHtcbiAgICAgICAgY29uc3QgdG9kb3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnN0b3JhZ2VLZXkpO1xuICAgICAgICByZXR1cm4gdG9kb3MgPyBKU09OLnBhcnNlKHRvZG9zKSA6IFtdO1xuICAgIH1cblxuICAgIHNldFN0b3JhZ2Uoc3RvcmFnZSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnN0b3JhZ2VLZXksIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2UpKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvc3RvcmFnZS50cyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY3NzL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibWFuaWZlc3QuanNvblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbWFuaWZlc3QuanNvblxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdy5qc1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3cuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==