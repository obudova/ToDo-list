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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDoBuilder__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_style_scss__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__css_style_scss__);


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
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__todolist__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage__ = __webpack_require__(3);


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
/* 2 */
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
            if (this.tasksArr) {
                //this.addStoredTasks();
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
            __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 5)).then(function (module) {
                var itemCtor = module.default;
                _this.tasksArr.push(new itemCtor(task_1, taskName_1));
                console.log(module);
            });
            this.onUpdate();
            this.composerTextarea.value = "";
        }
        else {
            //alert('Task field is empty')
        }
    };
    ToDoList.prototype.addStoredTasks = function () {
        var _this = this;
        this.tasksArr = this.tasksArr.map(function (item) {
            var task = document.createElement('div');
            task.classList.add('list__item');
            _this.listItemsContainer.insertBefore(task, _this.listItemsContainer.querySelector('.composer__container'));
            // return new ToDoListItem(task, item.name, {
            //     id: item.id,
            //     isDone: item._isDone
            // });
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
/* 3 */
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
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDNmYmM5NTZjMzYzMDQzZjA4MGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NjcmlwdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdG9Eb0J1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RvZG9saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9zdG9yYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9jc3Mvc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLFdBQVcsRUFBRTtBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7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QUFFLEVBQW5CLENBQW1CLENBQUMsQ0FBQztRQUMzRCxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELDRCQUFVLEdBQVYsVUFBVyxNQUFNO1FBQ2IsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxjQUFJLElBQUksV0FBSSxDQUFDLEVBQUUsS0FBSyxNQUFNLEVBQWxCLENBQWtCLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCw0QkFBVSxHQUFWO1FBQ0ksSUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEQsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQsNEJBQVUsR0FBVixVQUFXLE9BQU87UUFDZCxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7QUNoQ0QseUMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gd2luZG93W1wid2VicGFja0pzb25wXCJdO1xuIFx0d2luZG93W1wid2VicGFja0pzb25wXCJdID0gZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBleGVjdXRlTW9kdWxlcykge1xuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW10sIHJlc3VsdDtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGNodW5rSWRzLCBtb3JlTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpO1xuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0fTtcblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0cyB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQxOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSA9PT0gMCkge1xuIFx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7IHJlc29sdmUoKTsgfSk7XG4gXHRcdH1cblxuIFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkQ2h1bmtEYXRhWzJdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuIFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdO1xuIFx0XHR9KTtcbiBcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZTtcblxuIFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiBcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuIFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdHNjcmlwdC5hc3luYyA9IHRydWU7XG4gXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwMDAwO1xuXG4gXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG4gXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHR9XG4gXHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLmJ1bmRsZS5qc1wiO1xuIFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZSwgMTIwMDAwKTtcbiBcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcbiBcdFx0ZnVuY3Rpb24gb25TY3JpcHRDb21wbGV0ZSgpIHtcbiBcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4gXHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0dmFyIGNodW5rID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRjaHVua1sxXShuZXcgRXJyb3IoJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC4nKSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG4gXHRcdFx0fVxuIFx0XHR9O1xuIFx0XHRoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG5cbiBcdFx0cmV0dXJuIHByb21pc2U7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMDNmYmM5NTZjMzYzMDQzZjA4MGYiLCJpbXBvcnQgVG9Eb0J1aWxkZXIgZnJvbSAnLi90b0RvQnVpbGRlcic7XG5pbXBvcnQgJy4uL2Nzcy9zdHlsZS5zY3NzJztcbm5ldyBUb0RvQnVpbGRlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKSk7XG5pZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCdzdy5qcycpLnRoZW4oZnVuY3Rpb24ocmVnaXN0cmF0aW9uKSB7XG4gICAgICAgICAgICAvLyBSZWdpc3RyYXRpb24gd2FzIHN1Y2Nlc3NmdWxcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIHdpdGggc2NvcGU6ICcsIHJlZ2lzdHJhdGlvbi5zY29wZSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgLy8gcmVnaXN0cmF0aW9uIGZhaWxlZCA6KFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDogJywgZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5jb25zb2xlLmxvZygndHlwZSBzY3JpcHQnKTtcbi8vIGZ1bmN0aW9uIHNob3dOb3RpZmljYXRpb24oKSB7XG4vLyAgICAgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKGZ1bmN0aW9uKHJlc3VsdCkge1xuLy8gICAgICAgICBpZiAocmVzdWx0ID09PSAnZ3JhbnRlZCcpIHtcbi8vICAgICAgICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5LnRoZW4oZnVuY3Rpb24ocmVnaXN0cmF0aW9uKSB7XG4vLyAgICAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uLnNob3dOb3RpZmljYXRpb24oJ1ZpYnJhdGlvbiBTYW1wbGUnLCB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGJvZHk6ICdCdXp6ISBCdXp6IScsXG4vLyAgICAgICAgICAgICAgICAgICAgIGljb246ICcvYW5kcm9pZC1jaHJvbWUtNTEyeDUxMi5wbmcnLFxuLy8gICAgICAgICAgICAgICAgICAgICB2aWJyYXRlOiBbMjAwLCAxMDAsIDIwMCwgMTAwLCAyMDAsIDEwMCwgMjAwXSxcbi8vICAgICAgICAgICAgICAgICAgICAgdGFnOiAndmlicmF0aW9uLXNhbXBsZSdcbi8vICAgICAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9XG4vLyAgICAgfSk7XG4vLyB9XG4vLyBzaG93Tm90aWZpY2F0aW9uKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvc2NyaXB0LnRzIiwiaW1wb3J0IFRvRG9MaXN0IGZyb20gJy4vdG9kb2xpc3QnO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlJztcbmNvbnN0IHRlbXBsYXRlID0gYFxuPGJ1dHRvbiBpZD1cInRvZG9CdWlsZGVyXCI+PC9idXR0b24+XG48ZGl2IGNsYXNzPVwidG9kby1saXN0LWJvYXJkXCI+PC9kaXY+XG5gO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9Eb0J1aWxkZXJ7XG4gICAgYm9hcmQ6IEhUTUxEaXZFbGVtZW50O1xuICAgIHN0b3JhZ2U6IFN0b3JhZ2U7XG4gICAgZGF0YTogQXJyYXk8T2JqZWN0PjtcbiAgICBidXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xuICAgIGxpc3RzQXJyOiBBcnJheTxPYmplY3Q+O1xuICAgIGNvbnN0cnVjdG9yKGJvYXJkKSB7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gbmV3IFN0b3JhZ2UoJ3RvZG8tbGlzdHMnKTtcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5zdG9yYWdlLmdldFN0b3JhZ2UoKTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlSW5pdGlhbExpc3RzKHRoaXMuZGF0YSk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTGlzdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlSW5pdGlhbExpc3RzKGluaXRpYWxEYXRhKXtcbiAgICAgICAgaW5pdGlhbERhdGEuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU3RvcmVkTGlzdChpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdCgpe1xuICAgICAgICB0aGlzLmJvYXJkLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICAgICAgICB0aGlzLmJ1dHRvbiA9IDxIVE1MQnV0dG9uRWxlbWVudD50aGlzLmJvYXJkLnF1ZXJ5U2VsZWN0b3IoJyN0b2RvQnVpbGRlcicpO1xuICAgICAgICB0aGlzLmxpc3RzQXJyID0gW107XG4gICAgICAgIHRoaXMuaW5pdEV2ZW50cygpO1xuICAgIH1cblxuICAgIGluaXRFdmVudHMoKXtcbiAgICAgICAgdGhpcy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNyZWF0ZUxpc3QuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignbGlzdFVwZGF0ZWQnLCB0aGlzLnVwZGF0ZUxpc3QuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignbGlzdENyZWF0ZWQnLCB0aGlzLmFkZExpc3RUb1N0b3JhZ2UuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignbGlzdFJlbW92ZWQnLCB0aGlzLnJlbW92ZUxpc3RGcm9tU3RvcmFnZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5ib2FyZC5hZGRFdmVudExpc3RlbmVyKCdsaXN0RWRpdGluZycsIHRoaXMuaGlkZUJ0bkFkZC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICB1cGRhdGVMaXN0KGUpe1xuICAgICAgICB0aGlzLnN0b3JhZ2UudXBkYXRlSXRlbShlLmRldGFpbCk7XG4gICAgICAgIHRoaXMuc2hvd0J0bkFkZCgpO1xuICAgIH1cblxuICAgIGFkZExpc3RUb1N0b3JhZ2UoZSl7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5wZXJzaXN0SXRlbShlLmRldGFpbCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlTGlzdEZyb21TdG9yYWdlKGUpe1xuICAgICAgICB0aGlzLnN0b3JhZ2UuZm9yZ2V0SXRlbShlLmRldGFpbCk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ29udGFpbmVyRm9yTGlzdCgpe1xuICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxpc3QuY2xhc3NMaXN0LmFkZCgndG9kby1saXN0Jyk7XG4gICAgICAgIHRoaXMuYm9hcmQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdC1ib2FyZCcpLmFwcGVuZENoaWxkKGxpc3QpO1xuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICB9XG5cbiAgICBjcmVhdGVMaXN0KCkge1xuICAgICAgICB0aGlzLmxpc3RzQXJyLnB1c2gobmV3IFRvRG9MaXN0KHRoaXMuY3JlYXRlQ29udGFpbmVyRm9yTGlzdCgpKSk7XG4gICAgfVxuXG4gICAgc2hvd0J0bkFkZCgpe1xuICAgICAgICAvLyBpZih0aGlzLmJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWhpZGRlbicpKXtcbiAgICAgICAgLy8gICAgIHRoaXMuYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpXG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBoaWRlQnRuQWRkKCl7XG4gICAgICAgIC8vdGhpcy5idXR0b24uY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJylcbiAgICB9XG5cbiAgICBjcmVhdGVTdG9yZWRMaXN0KGl0ZW0pe1xuICAgICAgICB0aGlzLmxpc3RzQXJyLnB1c2gobmV3IFRvRG9MaXN0KHRoaXMuY3JlYXRlQ29udGFpbmVyRm9yTGlzdCgpLCB7XG4gICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgICAgIHRhc2tzQXJyOiBpdGVtLnRhc2tzQXJyXG4gICAgICAgIH0pKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdG9Eb0J1aWxkZXIudHMiLCIvLyBpbXBvcnQgVG9Eb0xpc3RJdGVtIGZyb20gJy4vdG9Eb0xpc3RJdGVtJztcbmludGVyZmFjZSBvcHRpb25QYXJhbSB7XG4gICAgbmFtZTogc3RyaW5nLFxuICAgIGlkOiBudW1iZXIsXG4gICAgdGFza3NBcnI6IEFycmF5PE9iamVjdD5cbn1cbmludGVyZmFjZSBvcHRpb25zTWVyZ2VkIHtcbiAgICBsaXN0VGl0bGU6IHN0cmluZyxcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgaWQ6IG51bWJlcixcbiAgICB0YXNrc0FycjogQXJyYXk8T2JqZWN0PlxufVxuaW50ZXJmYWNlIHRhc2tQcm9wZXJ0aWVzIHtcbiAgICBpc0RvbmU6IGJvb2xlYW4sXG4gICAgaWQ6IG51bWJlcixcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgX2lzRG9uZTogYm9vbGVhblxufVxuaW50ZXJmYWNlIG9wdGlvbk9iamVjdCB7XG4gICAgbGlzdFRpdGxlOiBzdHJpbmcsXG59XG5jb25zdCBkZWZhdWx0T3B0aW9uczogb3B0aW9uT2JqZWN0ID0ge1xuICAgIGxpc3RUaXRsZTogJ215IExpc3QnXG59O1xuaW50ZXJmYWNlIE5vZGVTZWxlY3RvciB7XG4gICAgcXVlcnlTZWxlY3RvcjxUSFRNTEVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudD4oc2VsZWN0b3JzOiBzdHJpbmcpOiBUSFRNTEVsZW1lbnQ7XG4gICAgcXVlcnlTZWxlY3RvckFsbDxUSFRNTEVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudD4oc2VsZWN0b3JzOiBzdHJpbmcpOiBOb2RlTGlzdE9mPFRIVE1MRWxlbWVudD47XG59XG5jb25zdCBUZW1wbGF0ZSA9IGBcblxuPGRpdiBjbGFzcz1cImxpc3RfX2hlYWRlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJsaXN0X19oZWFkZXJfX3RhcmdldFwiPjwvZGl2PlxuICAgIDx0ZXh0YXJlYSBjbGFzcz1cImxpc3RfX2hlYWRlcl9faW5wdXRcIj48L3RleHRhcmVhPlxuICAgIDxhIGNsYXNzPVwiYnRuLXJlbW92ZS1saXN0XCI+PC9hPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibGlzdF9faXRlbXNcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29tcG9zZXJfX2NvbnRhaW5lclwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwibmV3VG9kb1wiPk5ldyB0YXNrPC9sYWJlbD5cbiAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwibGlzdF9faXRlbV9fY29tcG9zZXItdGV4dGFyZWFcIiBpZD1cIm5ld1RvZG9cIj48L3RleHRhcmVhPlxuICAgICAgICA8IS0tPGJ1dHRvbiBjbGFzcz1cImJ0bi1jYW5zZWwtYWRkLXRhc2tcIj48L2J1dHRvbj4tLT5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImxpc3RfX2NvbnRyb2xzXCI+XG4gICAgPGxhYmVsIGZvcj1cIlwiPkxlZnQgdGFza3M6IDwvbGFiZWw+XG4gICAgPGRpdiBjbGFzcz1cImNvdW50ZXItZG9uZVwiPjwvZGl2PlxuICAgIDxhICBjbGFzcz1cImJ0bi1jbGVhci1hbGxcIj5DbGVhciBBbGw8L2E+XG48L2Rpdj5cbmA7XG5cbmNvbnN0IEVOVEVSX0tFWUNPREUgPSAxMztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvRG9MaXN0IHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBsaXN0Q29udGFpbmVyXG4gICAgICogQHBhcmFtIG9wdGlvbnNcbiAgICAgKi9cbiAgICBsaXN0OiBIVE1MRGl2RWxlbWVudDtcbiAgICBvcHRpb246IG9wdGlvbnNNZXJnZWQ7XG4gICAgdGl0bGVOYW1lOiBTdHJpbmc7XG4gICAgdGl0bGVUYXJnZXQ6IEhUTUxEaXZFbGVtZW50O1xuICAgIHRpdGxlVGV4dGFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG4gICAgbGlzdEl0ZW1zQ29udGFpbmVyOiBIVE1MVUxpc3RFbGVtZW50O1xuICAgIGNvbXBvc2VyQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBjb21wb3NlclRleHRhcmVhOiBIVE1MVGV4dEFyZWFFbGVtZW50O1xuICAgIGJ0bkNsZWFyQWxsOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBidG5SZW1vdmVMaXN0OiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBpZDogc3RyaW5nO1xuICAgIHRhc2tzQXJyOiBBcnJheTxPYmplY3Q+O1xuICAgIGNvbnN0cnVjdG9yKGxpc3RDb250YWluZXI6IEhUTUxEaXZFbGVtZW50LCBvcHRpb25zOiBvcHRpb25QYXJhbSA9IG51bGwpe1xuICAgICAgICB0aGlzLmxpc3QgPSBsaXN0Q29udGFpbmVyO1xuICAgICAgICB0aGlzLmxpc3QuaW5uZXJIVE1MID0gVGVtcGxhdGU7XG4gICAgICAgIHRoaXMub3B0aW9uPSg8YW55Pk9iamVjdCkuYXNzaWduKHt9LGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcblxuICAgICAgICB0aGlzLnRpdGxlTmFtZSA9IDxzdHJpbmc+dGhpcy5vcHRpb24ubGlzdFRpdGxlO1xuICAgICAgICB0aGlzLnRpdGxlVGFyZ2V0ID0gPEhUTUxEaXZFbGVtZW50PnRoaXMubGlzdC5xdWVyeVNlbGVjdG9yKCcubGlzdF9faGVhZGVyX190YXJnZXQnKTtcbiAgICAgICAgdGhpcy50aXRsZVRleHRhcmVhID0gPEhUTUxUZXh0QXJlYUVsZW1lbnQ+dGhpcy5saXN0LnF1ZXJ5U2VsZWN0b3IoJy5saXN0X19oZWFkZXJfX2lucHV0Jyk7XG5cbiAgICAgICAgdGhpcy5saXN0SXRlbXNDb250YWluZXIgPSA8SFRNTFVMaXN0RWxlbWVudD50aGlzLmxpc3QucXVlcnlTZWxlY3RvcignLmxpc3RfX2l0ZW1zJyk7XG5cbiAgICAgICAgdGhpcy5jb21wb3NlckNvbnRhaW5lciA9IDxIVE1MRGl2RWxlbWVudD50aGlzLmxpc3QucXVlcnlTZWxlY3RvcignLmNvbXBvc2VyX19jb250YWluZXInKTtcbiAgICAgICAgdGhpcy5jb21wb3NlclRleHRhcmVhID0gPEhUTUxUZXh0QXJlYUVsZW1lbnQ+dGhpcy5jb21wb3NlckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGlzdF9faXRlbV9fY29tcG9zZXItdGV4dGFyZWEnKTtcblxuICAgICAgICB0aGlzLmJ0bkNsZWFyQWxsID0gPEhUTUxCdXR0b25FbGVtZW50PnRoaXMubGlzdC5xdWVyeVNlbGVjdG9yKCcuYnRuLWNsZWFyLWFsbCcpO1xuXG4gICAgICAgIHRoaXMuYnRuUmVtb3ZlTGlzdCA9IDxIVE1MQnV0dG9uRWxlbWVudD50aGlzLmxpc3QucXVlcnlTZWxlY3RvcignLmJ0bi1yZW1vdmUtbGlzdCcpO1xuICAgICAgICB0aGlzLmlkID0gPHN0cmluZz5EYXRlLm5vdygpLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMudGFza3NBcnIgPSBbXTtcblxuICAgICAgICBpZihvcHRpb25zKXtcbiAgICAgICAgICAgIHRoaXMudGl0bGVOYW1lID0gPHN0cmluZz5vcHRpb25zLm5hbWU7XG4gICAgICAgICAgICB0aGlzLmlkID0gb3B0aW9ucy5pZC50b1N0cmluZygpO1xuICAgICAgICAgICAgdGhpcy50YXNrc0FyciA9IG9wdGlvbnMudGFza3NBcnI7XG4gICAgICAgICAgICBpZih0aGlzLnRhc2tzQXJyKXtcbiAgICAgICAgICAgICAgICAvL3RoaXMuYWRkU3RvcmVkVGFza3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGRUb1N0b3JhZ2UoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBpbml0KCl7XG4gICAgICAgIHRoaXMubGlzdC5jbGFzc0xpc3QuYWRkKCdsaXN0Jyk7XG4gICAgICAgIHRoaXMubGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy5pZCk7XG4gICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50cygpO1xuICAgICAgICB0aGlzLmluaXRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBhZGRUb1N0b3JhZ2UoKXtcbiAgICAgICAgY29uc3QgbGlzdENyZWF0ZWQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2xpc3RDcmVhdGVkJywge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMudGl0bGVOYW1lLFxuICAgICAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgICAgIHRhc2tzQXJyOiB0aGlzLnRhc2tzQXJyXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxpc3QuZGlzcGF0Y2hFdmVudChsaXN0Q3JlYXRlZCk7XG4gICAgfVxuXG4gICAgb25VcGRhdGUoKXtcbiAgICAgICAgdGhpcy5yZWNvdW50KCk7XG4gICAgICAgIGNvbnN0IGxpc3RVcGRhdGVkID0gbmV3IEN1c3RvbUV2ZW50KCdsaXN0VXBkYXRlZCcsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnRpdGxlTmFtZSxcbiAgICAgICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgICAgICB0YXNrc0FycjogdGhpcy50YXNrc0FyclxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5saXN0LmRpc3BhdGNoRXZlbnQobGlzdFVwZGF0ZWQpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNvbXBvbmVudHMoKXtcbiAgICAgICAgdGhpcy50aXRsZVRleHRhcmVhLnZhbHVlID0gdGhpcy5vcHRpb24ubmFtZSA/IHRoaXMub3B0aW9uLm5hbWUgOiB0aGlzLm9wdGlvbi5saXN0VGl0bGUgO1xuICAgICAgICB0aGlzLnJlY291bnQoKTtcbiAgICB9XG5cbiAgICBpbml0RXZlbnRzKCl7XG4gICAgICAgIHRoaXMubGlzdC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCB0aGlzLm9uUmVtb3ZlLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnRpdGxlVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblRpdGxlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMudGl0bGVUZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5vblRleHRhcmVhQmx1ci5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5idG5DbGVhckFsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xlYXJBbGxUYXNrcy5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5idG5SZW1vdmVMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZW1vdmVMaXN0LmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmNvbXBvc2VyVGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKT0+e1xuICAgICAgICAgICBpZihlLmtleUNvZGUgPT09IEVOVEVSX0tFWUNPREUpe1xuICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgdGhpcy5hZGRUYXNrLmJpbmQodGhpcykoKTtcbiAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb21wb3NlclRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywoZSk9PntcbiAgICAgICAgICAgIHRoaXMuY29tcG9zZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUV2ZW50T2ZMaXN0RWRpdGluZygpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb21wb3NlclRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLChlKT0+e1xuICAgICAgICAgICAgdGhpcy5jb21wb3NlckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgIHRoaXMuYWRkVGFzay5iaW5kKHRoaXMpKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY21wb3NlciBibHVyJylcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGlzdEl0ZW1zQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Rhc2tUb2dnbGVkJywgKGUpPT57XG4gICAgICAgICAgICB0aGlzLm9uVXBkYXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxpc3RJdGVtc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkZWxldGUnLCAoZSk9PntcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlVGFzayhlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGlzdEl0ZW1zQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ25hbWVDaGFuZ2VkJywgKGUpPT57XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVRhc2tOYW1lKGUpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBjcmVhdGVFdmVudE9mTGlzdEVkaXRpbmcoKXtcbiAgICAgICAgY29uc3QgbGlzdEVkaXRpbmcgPSBuZXcgQ3VzdG9tRXZlbnQoJ2xpc3RFZGl0aW5nJywge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGRldGFpbDoge31cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGlzdC5kaXNwYXRjaEV2ZW50KGxpc3RFZGl0aW5nKTtcblxuICAgIH1cblxuICAgIG9uVGl0bGVDbGljaygpe1xuICAgICAgICB0aGlzLnRpdGxlVGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xuICAgICAgICB0aGlzLnRpdGxlVGV4dGFyZWEuZm9jdXMoKTtcbiAgICAgICAgdGhpcy50aXRsZVRleHRhcmVhLnNlbGVjdCgpO1xuICAgICAgICB0aGlzLmNyZWF0ZUV2ZW50T2ZMaXN0RWRpdGluZygpO1xuICAgIH1cblxuICAgIG9uVGV4dGFyZWFCbHVyKCl7XG4gICAgICAgIHRoaXMudGl0bGVOYW1lID0gdGhpcy50aXRsZVRleHRhcmVhLnZhbHVlO1xuICAgICAgICB0aGlzLnRpdGxlVGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xuICAgICAgICBjb25zdCB1cGRhdGVUaXRsZSA9IG5ldyBDdXN0b21FdmVudCgndXBkYXRlJyx7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgVG9Eb0xpc3Q6IHRoaXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGlzdC5kaXNwYXRjaEV2ZW50KHVwZGF0ZVRpdGxlKTtcbiAgICAgICAgdGhpcy5vblVwZGF0ZSgpO1xuICAgIH1cblxuICAgIG9uQ29tcG9zZXJMaW5rQ2xpY2soKXtcbiAgICAgICAgdGhpcy5jb21wb3NlckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcbiAgICAgICAgdGhpcy5jb21wb3NlclRleHRhcmVhLmZvY3VzKCk7XG4gICAgfVxuICAgIG9uQ29tcG9zZXJMYWJlbENsaWNrKGUpe1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzKVxuICAgIH1cblxuICAgIGFkZFRhc2soKXtcbiAgICAgICAgaWYodGhpcy5jb21wb3NlclRleHRhcmVhLnZhbHVlKXtcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgnbGlzdF9faXRlbScpO1xuICAgICAgICAgICAgdGhpcy5saXN0SXRlbXNDb250YWluZXIuaW5zZXJ0QmVmb3JlKHRhc2ssIHRoaXMubGlzdEl0ZW1zQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jb21wb3Nlcl9fY29udGFpbmVyJykpO1xuICAgICAgICAgICAgLy90aGlzLnRhc2tzQXJyLnB1c2gobmV3IFRvRG9MaXN0SXRlbSh0YXNrLCB0aGlzLmNvbXBvc2VyVGV4dGFyZWEudmFsdWUpKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tOYW1lID0gdGhpcy5jb21wb3NlclRleHRhcmVhLnZhbHVlO1xuICAgICAgICAgICAgaW1wb3J0KCcuL3RvRG9MaXN0SXRlbScpLnRoZW4obW9kdWxlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbUN0b3IgPSBtb2R1bGUuZGVmYXVsdDtcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tzQXJyLnB1c2gobmV3IGl0ZW1DdG9yKHRhc2ssIHRhc2tOYW1lKSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobW9kdWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5vblVwZGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5jb21wb3NlclRleHRhcmVhLnZhbHVlID0gXCJcIjtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgLy9hbGVydCgnVGFzayBmaWVsZCBpcyBlbXB0eScpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRTdG9yZWRUYXNrcygpe1xuICAgICAgICB0aGlzLnRhc2tzQXJyID0gdGhpcy50YXNrc0Fyci5tYXAoKGl0ZW06IHRhc2tQcm9wZXJ0aWVzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ2xpc3RfX2l0ZW0nKTtcbiAgICAgICAgICAgIHRoaXMubGlzdEl0ZW1zQ29udGFpbmVyLmluc2VydEJlZm9yZSh0YXNrLCB0aGlzLmxpc3RJdGVtc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY29tcG9zZXJfX2NvbnRhaW5lcicpKTtcbiAgICAgICAgICAgIC8vIHJldHVybiBuZXcgVG9Eb0xpc3RJdGVtKHRhc2ssIGl0ZW0ubmFtZSwge1xuICAgICAgICAgICAgLy8gICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgICAgLy8gICAgIGlzRG9uZTogaXRlbS5faXNEb25lXG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVsZXRlVGFzayhlKSB7XG4gICAgICAgIGNvbnN0IHRhc2tJZCA9IGUuZGV0YWlsLmlkO1xuICAgICAgICB0aGlzLnRhc2tzQXJyID0gdGhpcy50YXNrc0Fyci5maWx0ZXIoKGVsZW06IHRhc2tQcm9wZXJ0aWVzKT0+e1xuICAgICAgICAgICAgcmV0dXJuIGVsZW0uaWQgIT09IHRhc2tJZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub25VcGRhdGUoKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VUYXNrTmFtZShlKXtcbiAgICAgICB0aGlzLm9uVXBkYXRlKCk7XG4gICAgfVxuXG4gICAgY2xlYXJBbGxUYXNrcygpe1xuICAgICAgICBjb25zdCBUYXNrTm9kZXMgID0gdGhpcy5saXN0SXRlbXNDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmxpc3RfX2l0ZW0nKTtcbiAgICAgICAgVGFza05vZGVzLmZvckVhY2goKGVsZW0pID0+e1xuICAgICAgICAgICAgZWxlbS5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudGFza3NBcnIgPSBbXTtcbiAgICAgICAgdGhpcy5vblVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHJlbW92ZUxpc3QoKXtcbiAgICAgICAgY29uc3QgZXZlbnRSZW1vdmVMaXN0ID0gbmV3IEN1c3RvbUV2ZW50KCdsaXN0UmVtb3ZlZCcsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBkZXRhaWw6IHRoaXMuaWRcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGlzdC5kaXNwYXRjaEV2ZW50KGV2ZW50UmVtb3ZlTGlzdCk7XG4gICAgICAgIHRoaXMubGlzdC5jbGFzc0xpc3QuYWRkKCdpcy1kZWxldGVkJyk7XG4gICAgfVxuICAgIG9uUmVtb3ZlKGUpe1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgaWYoZS50YXJnZXQgPT0gdGhpcy5saXN0ICYmIGUuYW5pbWF0aW9uTmFtZSA9PT0gXCJzY2FsZVwiKXtcbiAgICAgICAgICAgIHRoaXMubGlzdC5yZW1vdmUoKTtcblxuICAgICAgICB9XG4gICAgfVxuICAgIHJlY291bnQoKXtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50YXNrc0Fycik7XG4gICAgICAgIHRoaXMubGlzdFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5jb3VudGVyLWRvbmUnKVxuICAgICAgICAgICAgLmlubmVySFRNTCA9IHRoaXMudGFza3NBcnIuZmlsdGVyKChpdGVtOiB0YXNrUHJvcGVydGllcyk9PiAhaXRlbS5pc0RvbmUpLmxlbmd0aC50b1N0cmluZygpO1xuICAgIH1cbn1cbi8vIGV4cG9ydCB2YXIgX191c2VEZWZhdWx0ID0gdHJ1ZTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3RvZG9saXN0LnRzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7XG4gICAgc3RvcmFnZUtleTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKHN0b3JhZ2VLZXkpIHtcbiAgICAgICAgdGhpcy5zdG9yYWdlS2V5ID0gc3RvcmFnZUtleTtcbiAgICB9XG5cbiAgICBwZXJzaXN0SXRlbShpdGVtKSB7XG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSB0aGlzLmdldFN0b3JhZ2UoKTtcbiAgICAgICAgc3RvcmFnZS5wdXNoKGl0ZW0pO1xuICAgICAgICB0aGlzLnNldFN0b3JhZ2Uoc3RvcmFnZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlSXRlbShsaXN0KXtcbiAgICAgICAgY29uc3QgdG9kb3MgPSB0aGlzLmdldFN0b3JhZ2UoKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0b2Rvcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmlkID09PSBsaXN0LmlkKTtcbiAgICAgICAgdG9kb3NbaW5kZXhdID0gbGlzdDtcbiAgICAgICAgdGhpcy5zZXRTdG9yYWdlKHRvZG9zKTtcbiAgICB9XG5cbiAgICBmb3JnZXRJdGVtKGl0ZW1JZCkge1xuICAgICAgICBjb25zdCBzdG9yYWdlID0gdGhpcy5nZXRTdG9yYWdlKCkuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCAhPT0gaXRlbUlkKTtcbiAgICAgICAgdGhpcy5zZXRTdG9yYWdlKHN0b3JhZ2UpO1xuICAgIH1cblxuICAgIGdldFN0b3JhZ2UoKSB7XG4gICAgICAgIGNvbnN0IHRvZG9zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5zdG9yYWdlS2V5KTtcbiAgICAgICAgcmV0dXJuIHRvZG9zID8gSlNPTi5wYXJzZSh0b2RvcykgOiBbXTtcbiAgICB9XG5cbiAgICBzZXRTdG9yYWdlKHN0b3JhZ2UpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5zdG9yYWdlS2V5LCBKU09OLnN0cmluZ2lmeShzdG9yYWdlKSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3N0b3JhZ2UudHMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Nzcy9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=