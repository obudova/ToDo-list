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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manifest_json__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manifest_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__manifest_json__);



new __WEBPACK_IMPORTED_MODULE_0__toDoBuilder__["a" /* default */](document.querySelector('.board'));
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(function (registration) {
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
            __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 6)).then(function (module) {
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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "manifest.json";

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjIwZDRmMTAyYTdmYzgwNzUzM2UiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NjcmlwdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdG9Eb0J1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RvZG9saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9zdG9yYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9jc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9tYW5pZmVzdC5qc29uIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsV0FBVyxFQUFFO0FBQ3ZEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7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SUFBSSxXQUFJLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxFQUFFLEVBQW5CLENBQW1CLENBQUMsQ0FBQztRQUMzRCxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELDRCQUFVLEdBQVYsVUFBVyxNQUFNO1FBQ2IsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxjQUFJLElBQUksV0FBSSxDQUFDLEVBQUUsS0FBSyxNQUFNLEVBQWxCLENBQWtCLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCw0QkFBVSxHQUFWO1FBQ0ksSUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEQsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQsNEJBQVUsR0FBVixVQUFXLE9BQU87UUFDZCxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7QUNoQ0QseUM7Ozs7OztBQ0FBLHlEIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGNodW5rSWRzLCBtb3JlTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpIHtcbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdLCByZXN1bHQ7XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihjaHVua0lkcywgbW9yZU1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzKTtcbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdH07XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdHMgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0MTogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgPT09IDApIHtcbiBcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkgeyByZXNvbHZlKCk7IH0pO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZENodW5rRGF0YVsyXTtcbiBcdFx0fVxuXG4gXHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcbiBcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0fSk7XG4gXHRcdGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2U7XG5cbiBcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0c2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiBcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRzY3JpcHQuYXN5bmMgPSB0cnVlO1xuIFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDAwMDtcblxuIFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuIFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcbiBcdFx0fVxuIFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5idW5kbGUuanNcIjtcbiBcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUsIDEyMDAwMCk7XG4gXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdGZ1bmN0aW9uIG9uU2NyaXB0Q29tcGxldGUoKSB7XG4gXHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0Y2h1bmtbMV0obmV3IEVycm9yKCdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuJykpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdH1cbiBcdFx0fTtcbiBcdFx0aGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXG4gXHRcdHJldHVybiBwcm9taXNlO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvVG9Eby1saXN0L1wiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2MjBkNGYxMDJhN2ZjODA3NTMzZSIsImltcG9ydCBUb0RvQnVpbGRlciBmcm9tICcuL3RvRG9CdWlsZGVyJztcbmltcG9ydCAnLi4vY3NzL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuLi8uLi9tYW5pZmVzdC5qc29uJztcbm5ldyBUb0RvQnVpbGRlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKSk7XG5pZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCcvc3cuanMnKS50aGVuKGZ1bmN0aW9uKHJlZ2lzdHJhdGlvbikge1xuICAgICAgICAgICAgLy8gUmVnaXN0cmF0aW9uIHdhcyBzdWNjZXNzZnVsXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCB3aXRoIHNjb3BlOiAnLCByZWdpc3RyYXRpb24uc2NvcGUpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIC8vIHJlZ2lzdHJhdGlvbiBmYWlsZWQgOihcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6ICcsIGVycik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuY29uc29sZS5sb2coJ3R5cGUgc2NyaXB0Jyk7XG4vLyBmdW5jdGlvbiBzaG93Tm90aWZpY2F0aW9uKCkge1xuLy8gICAgIE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbihmdW5jdGlvbihyZXN1bHQpIHtcbi8vICAgICAgICAgaWYgKHJlc3VsdCA9PT0gJ2dyYW50ZWQnKSB7XG4vLyAgICAgICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWFkeS50aGVuKGZ1bmN0aW9uKHJlZ2lzdHJhdGlvbikge1xuLy8gICAgICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbi5zaG93Tm90aWZpY2F0aW9uKCdWaWJyYXRpb24gU2FtcGxlJywge1xuLy8gICAgICAgICAgICAgICAgICAgICBib2R5OiAnQnV6eiEgQnV6eiEnLFxuLy8gICAgICAgICAgICAgICAgICAgICBpY29uOiAnL2FuZHJvaWQtY2hyb21lLTUxMng1MTIucG5nJyxcbi8vICAgICAgICAgICAgICAgICAgICAgdmlicmF0ZTogWzIwMCwgMTAwLCAyMDAsIDEwMCwgMjAwLCAxMDAsIDIwMF0sXG4vLyAgICAgICAgICAgICAgICAgICAgIHRhZzogJ3ZpYnJhdGlvbi1zYW1wbGUnXG4vLyAgICAgICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfVxuLy8gICAgIH0pO1xuLy8gfVxuLy8gc2hvd05vdGlmaWNhdGlvbigpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3NjcmlwdC50cyIsImltcG9ydCBUb0RvTGlzdCBmcm9tICcuL3RvZG9saXN0JztcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vc3RvcmFnZSc7XG5jb25zdCB0ZW1wbGF0ZSA9IGBcbjxidXR0b24gaWQ9XCJ0b2RvQnVpbGRlclwiPjwvYnV0dG9uPlxuPGRpdiBjbGFzcz1cInRvZG8tbGlzdC1ib2FyZFwiPjwvZGl2PlxuYDtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvRG9CdWlsZGVye1xuICAgIGJvYXJkOiBIVE1MRGl2RWxlbWVudDtcbiAgICBzdG9yYWdlOiBTdG9yYWdlO1xuICAgIGRhdGE6IEFycmF5PE9iamVjdD47XG4gICAgYnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBsaXN0c0FycjogQXJyYXk8T2JqZWN0PjtcbiAgICBjb25zdHJ1Y3Rvcihib2FyZCkge1xuICAgICAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IG5ldyBTdG9yYWdlKCd0b2RvLWxpc3RzJyk7XG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuc3RvcmFnZS5nZXRTdG9yYWdlKCk7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUluaXRpYWxMaXN0cyh0aGlzLmRhdGEpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUxpc3QoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZUluaXRpYWxMaXN0cyhpbml0aWFsRGF0YSl7XG4gICAgICAgIGluaXRpYWxEYXRhLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVN0b3JlZExpc3QoaXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXQoKXtcbiAgICAgICAgdGhpcy5ib2FyZC5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5idXR0b24gPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+dGhpcy5ib2FyZC5xdWVyeVNlbGVjdG9yKCcjdG9kb0J1aWxkZXInKTtcbiAgICAgICAgdGhpcy5saXN0c0FyciA9IFtdO1xuICAgICAgICB0aGlzLmluaXRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBpbml0RXZlbnRzKCl7XG4gICAgICAgIHRoaXMuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jcmVhdGVMaXN0LmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2xpc3RVcGRhdGVkJywgdGhpcy51cGRhdGVMaXN0LmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2xpc3RDcmVhdGVkJywgdGhpcy5hZGRMaXN0VG9TdG9yYWdlLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2xpc3RSZW1vdmVkJywgdGhpcy5yZW1vdmVMaXN0RnJvbVN0b3JhZ2UuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignbGlzdEVkaXRpbmcnLCB0aGlzLmhpZGVCdG5BZGQuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgdXBkYXRlTGlzdChlKXtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnVwZGF0ZUl0ZW0oZS5kZXRhaWwpO1xuICAgICAgICB0aGlzLnNob3dCdG5BZGQoKTtcbiAgICB9XG5cbiAgICBhZGRMaXN0VG9TdG9yYWdlKGUpe1xuICAgICAgICB0aGlzLnN0b3JhZ2UucGVyc2lzdEl0ZW0oZS5kZXRhaWwpO1xuICAgIH1cblxuICAgIHJlbW92ZUxpc3RGcm9tU3RvcmFnZShlKXtcbiAgICAgICAgdGhpcy5zdG9yYWdlLmZvcmdldEl0ZW0oZS5kZXRhaWwpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNvbnRhaW5lckZvckxpc3QoKXtcbiAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsaXN0LmNsYXNzTGlzdC5hZGQoJ3RvZG8tbGlzdCcpO1xuICAgICAgICB0aGlzLmJvYXJkLnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QtYm9hcmQnKS5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfVxuXG4gICAgY3JlYXRlTGlzdCgpIHtcbiAgICAgICAgdGhpcy5saXN0c0Fyci5wdXNoKG5ldyBUb0RvTGlzdCh0aGlzLmNyZWF0ZUNvbnRhaW5lckZvckxpc3QoKSkpO1xuICAgIH1cblxuICAgIHNob3dCdG5BZGQoKXtcbiAgICAgICAgLy8gaWYodGhpcy5idXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1oaWRkZW4nKSl7XG4gICAgICAgIC8vICAgICB0aGlzLmJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKVxuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgaGlkZUJ0bkFkZCgpe1xuICAgICAgICAvL3RoaXMuYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpXG4gICAgfVxuXG4gICAgY3JlYXRlU3RvcmVkTGlzdChpdGVtKXtcbiAgICAgICAgdGhpcy5saXN0c0Fyci5wdXNoKG5ldyBUb0RvTGlzdCh0aGlzLmNyZWF0ZUNvbnRhaW5lckZvckxpc3QoKSwge1xuICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICB0YXNrc0FycjogaXRlbS50YXNrc0FyclxuICAgICAgICB9KSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3RvRG9CdWlsZGVyLnRzIiwiLy8gaW1wb3J0IFRvRG9MaXN0SXRlbSBmcm9tICcuL3RvRG9MaXN0SXRlbSc7XG5pbnRlcmZhY2Ugb3B0aW9uUGFyYW0ge1xuICAgIG5hbWU6IHN0cmluZyxcbiAgICBpZDogbnVtYmVyLFxuICAgIHRhc2tzQXJyOiBBcnJheTxPYmplY3Q+XG59XG5pbnRlcmZhY2Ugb3B0aW9uc01lcmdlZCB7XG4gICAgbGlzdFRpdGxlOiBzdHJpbmcsXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIGlkOiBudW1iZXIsXG4gICAgdGFza3NBcnI6IEFycmF5PE9iamVjdD5cbn1cbmludGVyZmFjZSB0YXNrUHJvcGVydGllcyB7XG4gICAgaXNEb25lOiBib29sZWFuLFxuICAgIGlkOiBudW1iZXIsXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIF9pc0RvbmU6IGJvb2xlYW5cbn1cbmludGVyZmFjZSBvcHRpb25PYmplY3Qge1xuICAgIGxpc3RUaXRsZTogc3RyaW5nLFxufVxuY29uc3QgZGVmYXVsdE9wdGlvbnM6IG9wdGlvbk9iamVjdCA9IHtcbiAgICBsaXN0VGl0bGU6ICdteSBMaXN0J1xufTtcbmludGVyZmFjZSBOb2RlU2VsZWN0b3Ige1xuICAgIHF1ZXJ5U2VsZWN0b3I8VEhUTUxFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQ+KHNlbGVjdG9yczogc3RyaW5nKTogVEhUTUxFbGVtZW50O1xuICAgIHF1ZXJ5U2VsZWN0b3JBbGw8VEhUTUxFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQ+KHNlbGVjdG9yczogc3RyaW5nKTogTm9kZUxpc3RPZjxUSFRNTEVsZW1lbnQ+O1xufVxuY29uc3QgVGVtcGxhdGUgPSBgXG5cbjxkaXYgY2xhc3M9XCJsaXN0X19oZWFkZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwibGlzdF9faGVhZGVyX190YXJnZXRcIj48L2Rpdj5cbiAgICA8dGV4dGFyZWEgY2xhc3M9XCJsaXN0X19oZWFkZXJfX2lucHV0XCI+PC90ZXh0YXJlYT5cbiAgICA8YSBjbGFzcz1cImJ0bi1yZW1vdmUtbGlzdFwiPjwvYT5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImxpc3RfX2l0ZW1zXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbXBvc2VyX19jb250YWluZXJcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cIm5ld1RvZG9cIj5OZXcgdGFzazwvbGFiZWw+XG4gICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImxpc3RfX2l0ZW1fX2NvbXBvc2VyLXRleHRhcmVhXCIgaWQ9XCJuZXdUb2RvXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgPCEtLTxidXR0b24gY2xhc3M9XCJidG4tY2Fuc2VsLWFkZC10YXNrXCI+PC9idXR0b24+LS0+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJsaXN0X19jb250cm9sc1wiPlxuICAgIDxsYWJlbCBmb3I9XCJcIj5MZWZ0IHRhc2tzOiA8L2xhYmVsPlxuICAgIDxkaXYgY2xhc3M9XCJjb3VudGVyLWRvbmVcIj48L2Rpdj5cbiAgICA8YSAgY2xhc3M9XCJidG4tY2xlYXItYWxsXCI+Q2xlYXIgQWxsPC9hPlxuPC9kaXY+XG5gO1xuXG5jb25zdCBFTlRFUl9LRVlDT0RFID0gMTM7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvTGlzdCB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbGlzdENvbnRhaW5lclxuICAgICAqIEBwYXJhbSBvcHRpb25zXG4gICAgICovXG4gICAgbGlzdDogSFRNTERpdkVsZW1lbnQ7XG4gICAgb3B0aW9uOiBvcHRpb25zTWVyZ2VkO1xuICAgIHRpdGxlTmFtZTogU3RyaW5nO1xuICAgIHRpdGxlVGFyZ2V0OiBIVE1MRGl2RWxlbWVudDtcbiAgICB0aXRsZVRleHRhcmVhOiBIVE1MVGV4dEFyZWFFbGVtZW50O1xuICAgIGxpc3RJdGVtc0NvbnRhaW5lcjogSFRNTFVMaXN0RWxlbWVudDtcbiAgICBjb21wb3NlckNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgY29tcG9zZXJUZXh0YXJlYTogSFRNTFRleHRBcmVhRWxlbWVudDtcbiAgICBidG5DbGVhckFsbDogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgYnRuUmVtb3ZlTGlzdDogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgaWQ6IHN0cmluZztcbiAgICB0YXNrc0FycjogQXJyYXk8T2JqZWN0PjtcbiAgICBjb25zdHJ1Y3RvcihsaXN0Q29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCwgb3B0aW9uczogb3B0aW9uUGFyYW0gPSBudWxsKXtcbiAgICAgICAgdGhpcy5saXN0ID0gbGlzdENvbnRhaW5lcjtcbiAgICAgICAgdGhpcy5saXN0LmlubmVySFRNTCA9IFRlbXBsYXRlO1xuICAgICAgICB0aGlzLm9wdGlvbj0oPGFueT5PYmplY3QpLmFzc2lnbih7fSxkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy50aXRsZU5hbWUgPSA8c3RyaW5nPnRoaXMub3B0aW9uLmxpc3RUaXRsZTtcbiAgICAgICAgdGhpcy50aXRsZVRhcmdldCA9IDxIVE1MRGl2RWxlbWVudD50aGlzLmxpc3QucXVlcnlTZWxlY3RvcignLmxpc3RfX2hlYWRlcl9fdGFyZ2V0Jyk7XG4gICAgICAgIHRoaXMudGl0bGVUZXh0YXJlYSA9IDxIVE1MVGV4dEFyZWFFbGVtZW50PnRoaXMubGlzdC5xdWVyeVNlbGVjdG9yKCcubGlzdF9faGVhZGVyX19pbnB1dCcpO1xuXG4gICAgICAgIHRoaXMubGlzdEl0ZW1zQ29udGFpbmVyID0gPEhUTUxVTGlzdEVsZW1lbnQ+dGhpcy5saXN0LnF1ZXJ5U2VsZWN0b3IoJy5saXN0X19pdGVtcycpO1xuXG4gICAgICAgIHRoaXMuY29tcG9zZXJDb250YWluZXIgPSA8SFRNTERpdkVsZW1lbnQ+dGhpcy5saXN0LnF1ZXJ5U2VsZWN0b3IoJy5jb21wb3Nlcl9fY29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMuY29tcG9zZXJUZXh0YXJlYSA9IDxIVE1MVGV4dEFyZWFFbGVtZW50PnRoaXMuY29tcG9zZXJDb250YWluZXIucXVlcnlTZWxlY3RvcignLmxpc3RfX2l0ZW1fX2NvbXBvc2VyLXRleHRhcmVhJyk7XG5cbiAgICAgICAgdGhpcy5idG5DbGVhckFsbCA9IDxIVE1MQnV0dG9uRWxlbWVudD50aGlzLmxpc3QucXVlcnlTZWxlY3RvcignLmJ0bi1jbGVhci1hbGwnKTtcblxuICAgICAgICB0aGlzLmJ0blJlbW92ZUxpc3QgPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+dGhpcy5saXN0LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcmVtb3ZlLWxpc3QnKTtcbiAgICAgICAgdGhpcy5pZCA9IDxzdHJpbmc+RGF0ZS5ub3coKS50b1N0cmluZygpO1xuICAgICAgICB0aGlzLnRhc2tzQXJyID0gW107XG5cbiAgICAgICAgaWYob3B0aW9ucyl7XG4gICAgICAgICAgICB0aGlzLnRpdGxlTmFtZSA9IDxzdHJpbmc+b3B0aW9ucy5uYW1lO1xuICAgICAgICAgICAgdGhpcy5pZCA9IG9wdGlvbnMuaWQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMudGFza3NBcnIgPSBvcHRpb25zLnRhc2tzQXJyO1xuICAgICAgICAgICAgaWYodGhpcy50YXNrc0Fycil7XG4gICAgICAgICAgICAgICAgLy90aGlzLmFkZFN0b3JlZFRhc2tzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRkVG9TdG9yYWdlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpe1xuICAgICAgICB0aGlzLmxpc3QuY2xhc3NMaXN0LmFkZCgnbGlzdCcpO1xuICAgICAgICB0aGlzLmxpc3Quc2V0QXR0cmlidXRlKCdpZCcsIHRoaXMuaWQpO1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudHMoKTtcbiAgICAgICAgdGhpcy5pbml0RXZlbnRzKCk7XG4gICAgfVxuXG4gICAgYWRkVG9TdG9yYWdlKCl7XG4gICAgICAgIGNvbnN0IGxpc3RDcmVhdGVkID0gbmV3IEN1c3RvbUV2ZW50KCdsaXN0Q3JlYXRlZCcsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnRpdGxlTmFtZSxcbiAgICAgICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgICAgICB0YXNrc0FycjogdGhpcy50YXNrc0FyclxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5saXN0LmRpc3BhdGNoRXZlbnQobGlzdENyZWF0ZWQpO1xuICAgIH1cblxuICAgIG9uVXBkYXRlKCl7XG4gICAgICAgIHRoaXMucmVjb3VudCgpO1xuICAgICAgICBjb25zdCBsaXN0VXBkYXRlZCA9IG5ldyBDdXN0b21FdmVudCgnbGlzdFVwZGF0ZWQnLCB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy50aXRsZU5hbWUsXG4gICAgICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgICAgICAgdGFza3NBcnI6IHRoaXMudGFza3NBcnJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGlzdC5kaXNwYXRjaEV2ZW50KGxpc3RVcGRhdGVkKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDb21wb25lbnRzKCl7XG4gICAgICAgIHRoaXMudGl0bGVUZXh0YXJlYS52YWx1ZSA9IHRoaXMub3B0aW9uLm5hbWUgPyB0aGlzLm9wdGlvbi5uYW1lIDogdGhpcy5vcHRpb24ubGlzdFRpdGxlIDtcbiAgICAgICAgdGhpcy5yZWNvdW50KCk7XG4gICAgfVxuXG4gICAgaW5pdEV2ZW50cygpe1xuICAgICAgICB0aGlzLmxpc3QuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgdGhpcy5vblJlbW92ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy50aXRsZVRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25UaXRsZUNsaWNrLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnRpdGxlVGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMub25UZXh0YXJlYUJsdXIuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuYnRuQ2xlYXJBbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsZWFyQWxsVGFza3MuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuYnRuUmVtb3ZlTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVtb3ZlTGlzdC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5jb21wb3NlclRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSk9PntcbiAgICAgICAgICAgaWYoZS5rZXlDb2RlID09PSBFTlRFUl9LRVlDT0RFKXtcbiAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgIHRoaXMuYWRkVGFzay5iaW5kKHRoaXMpKCk7XG4gICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29tcG9zZXJUZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsKGUpPT57XG4gICAgICAgICAgICB0aGlzLmNvbXBvc2VyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVFdmVudE9mTGlzdEVkaXRpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29tcG9zZXJUZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywoZSk9PntcbiAgICAgICAgICAgIHRoaXMuY29tcG9zZXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICB0aGlzLmFkZFRhc2suYmluZCh0aGlzKSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NtcG9zZXIgYmx1cicpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxpc3RJdGVtc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd0YXNrVG9nZ2xlZCcsIChlKT0+e1xuICAgICAgICAgICAgdGhpcy5vblVwZGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5saXN0SXRlbXNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZGVsZXRlJywgKGUpPT57XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZVRhc2soZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxpc3RJdGVtc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCduYW1lQ2hhbmdlZCcsIChlKT0+e1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VUYXNrTmFtZShlKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY3JlYXRlRXZlbnRPZkxpc3RFZGl0aW5nKCl7XG4gICAgICAgIGNvbnN0IGxpc3RFZGl0aW5nID0gbmV3IEN1c3RvbUV2ZW50KCdsaXN0RWRpdGluZycsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBkZXRhaWw6IHt9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxpc3QuZGlzcGF0Y2hFdmVudChsaXN0RWRpdGluZyk7XG5cbiAgICB9XG5cbiAgICBvblRpdGxlQ2xpY2soKXtcbiAgICAgICAgdGhpcy50aXRsZVRhcmdldC5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcbiAgICAgICAgdGhpcy50aXRsZVRleHRhcmVhLmZvY3VzKCk7XG4gICAgICAgIHRoaXMudGl0bGVUZXh0YXJlYS5zZWxlY3QoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVFdmVudE9mTGlzdEVkaXRpbmcoKTtcbiAgICB9XG5cbiAgICBvblRleHRhcmVhQmx1cigpe1xuICAgICAgICB0aGlzLnRpdGxlTmFtZSA9IHRoaXMudGl0bGVUZXh0YXJlYS52YWx1ZTtcbiAgICAgICAgdGhpcy50aXRsZVRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcbiAgICAgICAgY29uc3QgdXBkYXRlVGl0bGUgPSBuZXcgQ3VzdG9tRXZlbnQoJ3VwZGF0ZScse1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgIFRvRG9MaXN0OiB0aGlzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxpc3QuZGlzcGF0Y2hFdmVudCh1cGRhdGVUaXRsZSk7XG4gICAgICAgIHRoaXMub25VcGRhdGUoKTtcbiAgICB9XG5cbiAgICBvbkNvbXBvc2VyTGlua0NsaWNrKCl7XG4gICAgICAgIHRoaXMuY29tcG9zZXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJyk7XG4gICAgICAgIHRoaXMuY29tcG9zZXJUZXh0YXJlYS5mb2N1cygpO1xuICAgIH1cbiAgICBvbkNvbXBvc2VyTGFiZWxDbGljayhlKXtcbiAgICAgICAgY29uc29sZS5sb2codGhpcylcbiAgICB9XG5cbiAgICBhZGRUYXNrKCl7XG4gICAgICAgIGlmKHRoaXMuY29tcG9zZXJUZXh0YXJlYS52YWx1ZSl7XG4gICAgICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ2xpc3RfX2l0ZW0nKTtcbiAgICAgICAgICAgIHRoaXMubGlzdEl0ZW1zQ29udGFpbmVyLmluc2VydEJlZm9yZSh0YXNrLCB0aGlzLmxpc3RJdGVtc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY29tcG9zZXJfX2NvbnRhaW5lcicpKTtcbiAgICAgICAgICAgIC8vdGhpcy50YXNrc0Fyci5wdXNoKG5ldyBUb0RvTGlzdEl0ZW0odGFzaywgdGhpcy5jb21wb3NlclRleHRhcmVhLnZhbHVlKSk7XG4gICAgICAgICAgICBjb25zdCB0YXNrTmFtZSA9IHRoaXMuY29tcG9zZXJUZXh0YXJlYS52YWx1ZTtcbiAgICAgICAgICAgIGltcG9ydCgnLi90b0RvTGlzdEl0ZW0nKS50aGVuKG1vZHVsZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1DdG9yID0gbW9kdWxlLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgdGhpcy50YXNrc0Fyci5wdXNoKG5ldyBpdGVtQ3Rvcih0YXNrLCB0YXNrTmFtZSkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1vZHVsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMub25VcGRhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9zZXJUZXh0YXJlYS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIC8vYWxlcnQoJ1Rhc2sgZmllbGQgaXMgZW1wdHknKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkU3RvcmVkVGFza3MoKXtcbiAgICAgICAgdGhpcy50YXNrc0FyciA9IHRoaXMudGFza3NBcnIubWFwKChpdGVtOiB0YXNrUHJvcGVydGllcykgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKCdsaXN0X19pdGVtJyk7XG4gICAgICAgICAgICB0aGlzLmxpc3RJdGVtc0NvbnRhaW5lci5pbnNlcnRCZWZvcmUodGFzaywgdGhpcy5saXN0SXRlbXNDb250YWluZXIucXVlcnlTZWxlY3RvcignLmNvbXBvc2VyX19jb250YWluZXInKSk7XG4gICAgICAgICAgICAvLyByZXR1cm4gbmV3IFRvRG9MaXN0SXRlbSh0YXNrLCBpdGVtLm5hbWUsIHtcbiAgICAgICAgICAgIC8vICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgICAgIC8vICAgICBpc0RvbmU6IGl0ZW0uX2lzRG9uZVxuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRlbGV0ZVRhc2soZSkge1xuICAgICAgICBjb25zdCB0YXNrSWQgPSBlLmRldGFpbC5pZDtcbiAgICAgICAgdGhpcy50YXNrc0FyciA9IHRoaXMudGFza3NBcnIuZmlsdGVyKChlbGVtOiB0YXNrUHJvcGVydGllcyk9PntcbiAgICAgICAgICAgIHJldHVybiBlbGVtLmlkICE9PSB0YXNrSWQ7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9uVXBkYXRlKCk7XG4gICAgfVxuXG4gICAgY2hhbmdlVGFza05hbWUoZSl7XG4gICAgICAgdGhpcy5vblVwZGF0ZSgpO1xuICAgIH1cblxuICAgIGNsZWFyQWxsVGFza3MoKXtcbiAgICAgICAgY29uc3QgVGFza05vZGVzICA9IHRoaXMubGlzdEl0ZW1zQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0X19pdGVtJyk7XG4gICAgICAgIFRhc2tOb2Rlcy5mb3JFYWNoKChlbGVtKSA9PntcbiAgICAgICAgICAgIGVsZW0ucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRhc2tzQXJyID0gW107XG4gICAgICAgIHRoaXMub25VcGRhdGUoKTtcbiAgICB9XG5cbiAgICByZW1vdmVMaXN0KCl7XG4gICAgICAgIGNvbnN0IGV2ZW50UmVtb3ZlTGlzdCA9IG5ldyBDdXN0b21FdmVudCgnbGlzdFJlbW92ZWQnLCB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgZGV0YWlsOiB0aGlzLmlkXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxpc3QuZGlzcGF0Y2hFdmVudChldmVudFJlbW92ZUxpc3QpO1xuICAgICAgICB0aGlzLmxpc3QuY2xhc3NMaXN0LmFkZCgnaXMtZGVsZXRlZCcpO1xuICAgIH1cbiAgICBvblJlbW92ZShlKXtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIGlmKGUudGFyZ2V0ID09IHRoaXMubGlzdCAmJiBlLmFuaW1hdGlvbk5hbWUgPT09IFwic2NhbGVcIil7XG4gICAgICAgICAgICB0aGlzLmxpc3QucmVtb3ZlKCk7XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICByZWNvdW50KCl7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGFza3NBcnIpO1xuICAgICAgICB0aGlzLmxpc3RcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY291bnRlci1kb25lJylcbiAgICAgICAgICAgIC5pbm5lckhUTUwgPSB0aGlzLnRhc2tzQXJyLmZpbHRlcigoaXRlbTogdGFza1Byb3BlcnRpZXMpPT4gIWl0ZW0uaXNEb25lKS5sZW5ndGgudG9TdHJpbmcoKTtcbiAgICB9XG59XG4vLyBleHBvcnQgdmFyIF9fdXNlRGVmYXVsdCA9IHRydWU7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy90b2RvbGlzdC50cyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JhZ2Uge1xuICAgIHN0b3JhZ2VLZXk6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihzdG9yYWdlS2V5KSB7XG4gICAgICAgIHRoaXMuc3RvcmFnZUtleSA9IHN0b3JhZ2VLZXk7XG4gICAgfVxuXG4gICAgcGVyc2lzdEl0ZW0oaXRlbSkge1xuICAgICAgICBjb25zdCBzdG9yYWdlID0gdGhpcy5nZXRTdG9yYWdlKCk7XG4gICAgICAgIHN0b3JhZ2UucHVzaChpdGVtKTtcbiAgICAgICAgdGhpcy5zZXRTdG9yYWdlKHN0b3JhZ2UpO1xuICAgIH1cblxuICAgIHVwZGF0ZUl0ZW0obGlzdCl7XG4gICAgICAgIGNvbnN0IHRvZG9zID0gdGhpcy5nZXRTdG9yYWdlKCk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdG9kb3MuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5pZCA9PT0gbGlzdC5pZCk7XG4gICAgICAgIHRvZG9zW2luZGV4XSA9IGxpc3Q7XG4gICAgICAgIHRoaXMuc2V0U3RvcmFnZSh0b2Rvcyk7XG4gICAgfVxuXG4gICAgZm9yZ2V0SXRlbShpdGVtSWQpIHtcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IHRoaXMuZ2V0U3RvcmFnZSgpLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09IGl0ZW1JZCk7XG4gICAgICAgIHRoaXMuc2V0U3RvcmFnZShzdG9yYWdlKTtcbiAgICB9XG5cbiAgICBnZXRTdG9yYWdlKCkge1xuICAgICAgICBjb25zdCB0b2RvcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuc3RvcmFnZUtleSk7XG4gICAgICAgIHJldHVybiB0b2RvcyA/IEpTT04ucGFyc2UodG9kb3MpIDogW107XG4gICAgfVxuXG4gICAgc2V0U3RvcmFnZShzdG9yYWdlKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuc3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZSkpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9zdG9yYWdlLnRzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jc3Mvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJtYW5pZmVzdC5qc29uXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9tYW5pZmVzdC5qc29uXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=