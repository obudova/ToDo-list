/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var toDoBuilder_1 = __webpack_require__(1);
__webpack_require__(5);
new toDoBuilder_1.default(document.querySelector('.board'));
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function() {
//         navigator.serviceWorker.register('sw.js').then(function(registration) {
//             // Registration was successful
//             console.log('ServiceWorker registration successful with scope: ', registration.scope);
//         }, function(err) {
//             // registration failed :(
//             console.log('ServiceWorker registration failed: ', err);
//         });
//     });
// }
// console.log('type script');
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var todolist_1 = __webpack_require__(2);
var storage_1 = __webpack_require__(4);
var template = "\n<button id=\"todoBuilder\"></button>\n<div class=\"todo-list-board\"></div>\n";
var ToDoBuilder = (function () {
    function ToDoBuilder(board) {
        this.board = board;
        this.storage = new storage_1.default('todo-lists');
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
        this.listsArr.push(new todolist_1.default(this.createContainerForList()));
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
        this.listsArr.push(new todolist_1.default(this.createContainerForList(), {
            name: item.name,
            id: item.id,
            tasksArr: item.tasksArr
        }));
    };
    return ToDoBuilder;
}());
exports.default = ToDoBuilder;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var toDoListItem_1 = __webpack_require__(3);
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
        if (this.composerTextarea.value) {
            var task = document.createElement('div');
            task.classList.add('list__item');
            this.listItemsContainer.insertBefore(task, this.listItemsContainer.querySelector('.composer__container'));
            this.tasksArr.push(new toDoListItem_1.default(task, this.composerTextarea.value));
            // import('./toDoListItem').then(module => {
            //     this.tasksArr.push(new module.default(task, this.composerTextarea.value));
            //     console.log(module);
            // }
            //     );
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
            return new toDoListItem_1.default(task, item.name, {
                id: item.id,
                isDone: item._isDone
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
            .innerHTML = this.tasksArr.filter(function (todoListItem) { return !todoListItem.isDone; }).length.toString();
    };
    return ToDoList;
}());
exports.default = ToDoList;
// export var __useDefault = true;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var listItemTemplate = "\n<div class=\"checkbox\"></div>\n<div class=\"task-name__container\">\n    <div class=\"task-name__target\"></div>\n    <textarea class=\"task-name__input\"></textarea>\n</div>\n<a class=\"btn-remove\"></a>\n";
var ToDoListItem = (function () {
    function ToDoListItem(item, value, options) {
        if (options === void 0) { options = null; }
        this.name = value;
        this.listItem = item;
        this.listItem.innerHTML = listItemTemplate;
        this.checkbox = this.listItem.querySelector('.checkbox');
        this.nameTarget = this.listItem.querySelector('.task-name__target');
        this.nameTextarea = this.listItem.querySelector('.task-name__input');
        this.btnRemove = this.listItem.querySelector('.btn-remove');
        this._isDone = false;
        this._isDeleted = false;
        this.id = Date.now().toString();
        this.options = Object.assign({}, options);
        if (options) {
            this.id = options.id;
            this._isDone = options.isDone;
        }
        this.init();
    }
    Object.defineProperty(ToDoListItem.prototype, "isDone", {
        get: function () {
            return this._isDone;
        },
        set: function (value) {
            if (value) {
                this._isDone = true;
                this.completeTask();
            }
            else {
                this._isDone = false;
                this.undoCompleteTask();
            }
            var onToggleItem = new CustomEvent('taskToggled', {
                bubbles: true,
                detail: this
            });
            this.listItem.dispatchEvent(onToggleItem);
        },
        enumerable: true,
        configurable: true
    });
    ToDoListItem.prototype.init = function () {
        this.initDoMElements();
        this.initEvents();
    };
    ToDoListItem.prototype.initDoMElements = function () {
        this.listItem.setAttribute('id', this.id);
        this.nameTextarea.value = this.name;
        this.btnRemove.classList.add('btn-remove');
        if (this.isDone) {
            this.listItem.classList.add('is-done');
        }
    };
    ToDoListItem.prototype.initEvents = function () {
        var _this = this;
        this.btnRemove.addEventListener('click', this.deleteItem.bind(this));
        this.checkbox.addEventListener('click', function () {
            _this.isDone = !_this.isDone;
        });
        this.nameTarget.addEventListener('click', this.editItem.bind(this));
        this.nameTextarea.addEventListener('blur', this.renameTask.bind(this));
    };
    ToDoListItem.prototype.deleteItem = function () {
        var eventDelete = new CustomEvent('delete', {
            bubbles: true,
            detail: this
        });
        this.listItem.dispatchEvent(eventDelete);
        this.listItem.remove();
    };
    ToDoListItem.prototype.completeTask = function () {
        this.listItem.classList.add('is-done');
    };
    ToDoListItem.prototype.undoCompleteTask = function () {
        this.listItem.classList.remove('is-done');
    };
    ToDoListItem.prototype.editItem = function (e) {
        this.nameTextarea.focus();
        this.nameTarget.classList.add('is-hidden');
        this.listItem.classList.add('is-editing');
    };
    ToDoListItem.prototype.renameTask = function (e) {
        var previousName = this.name;
        this.name = this.nameTextarea.value;
        this.nameTarget.classList.remove('is-hidden');
        this.listItem.classList.remove('is-editing');
        var nameChanged = new CustomEvent('nameChanged', {
            bubbles: true,
            detail: {
                listItem: this,
                prev: previousName,
                updated: this.name
            }
        });
        this.listItem.dispatchEvent(nameChanged);
    };
    return ToDoListItem;
}());
exports.default = ToDoListItem;
// export var __useDefault = true; 


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = Storage;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzZjNDJlOGIxOTgwZWI5NTI5NzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NjcmlwdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdG9Eb0J1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RvZG9saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9qcy90b0RvTGlzdEl0ZW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzdEQSwyQ0FBd0M7QUFDeEMsdUJBQTJCO0FBQzNCLElBQUkscUJBQVcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDbEQsc0NBQXNDO0FBQ3RDLG1EQUFtRDtBQUNuRCxrRkFBa0Y7QUFDbEYsNkNBQTZDO0FBQzdDLHFHQUFxRztBQUNyRyw2QkFBNkI7QUFDN0Isd0NBQXdDO0FBQ3hDLHVFQUF1RTtBQUN2RSxjQUFjO0FBQ2QsVUFBVTtBQUNWLElBQUk7QUFDSiw4QkFBOEI7QUFDOUIsZ0NBQWdDO0FBQ2hDLHdEQUF3RDtBQUN4RCxzQ0FB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QztRQUMzRCxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELDRCQUFVLEdBQVYsVUFBVyxNQUFNO1FBQ2IsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxjQUFJLElBQUksV0FBSSxDQUFDLEVBQUUsS0FBSyxNQUFNLEVBQWxCLENBQWtCLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCw0QkFBVSxHQUFWO1FBQ0ksSUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEQsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQsNEJBQVUsR0FBVixVQUFXLE9BQU87UUFDZCxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7QUNoQ0QseUMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjNmM0MmU4YjE5ODBlYjk1Mjk3NSIsImltcG9ydCBUb0RvQnVpbGRlciBmcm9tICcuL3RvRG9CdWlsZGVyJztcbmltcG9ydCAnLi4vY3NzL3N0eWxlLnNjc3MnO1xubmV3IFRvRG9CdWlsZGVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpKTtcbi8vIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4vLyAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcbi8vICAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJ3N3LmpzJykudGhlbihmdW5jdGlvbihyZWdpc3RyYXRpb24pIHtcbi8vICAgICAgICAgICAgIC8vIFJlZ2lzdHJhdGlvbiB3YXMgc3VjY2Vzc2Z1bFxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwgd2l0aCBzY29wZTogJywgcmVnaXN0cmF0aW9uLnNjb3BlKTtcbi8vICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4vLyAgICAgICAgICAgICAvLyByZWdpc3RyYXRpb24gZmFpbGVkIDooXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiAnLCBlcnIpO1xuLy8gICAgICAgICB9KTtcbi8vICAgICB9KTtcbi8vIH1cbi8vIGNvbnNvbGUubG9nKCd0eXBlIHNjcmlwdCcpO1xuLy8gZnVuY3Rpb24gc2hvd05vdGlmaWNhdGlvbigpIHtcbi8vICAgICBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oZnVuY3Rpb24ocmVzdWx0KSB7XG4vLyAgICAgICAgIGlmIChyZXN1bHQgPT09ICdncmFudGVkJykge1xuLy8gICAgICAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHkudGhlbihmdW5jdGlvbihyZWdpc3RyYXRpb24pIHtcbi8vICAgICAgICAgICAgICAgICByZWdpc3RyYXRpb24uc2hvd05vdGlmaWNhdGlvbignVmlicmF0aW9uIFNhbXBsZScsIHtcbi8vICAgICAgICAgICAgICAgICAgICAgYm9keTogJ0J1enohIEJ1enohJyxcbi8vICAgICAgICAgICAgICAgICAgICAgaWNvbjogJy9hbmRyb2lkLWNocm9tZS01MTJ4NTEyLnBuZycsXG4vLyAgICAgICAgICAgICAgICAgICAgIHZpYnJhdGU6IFsyMDAsIDEwMCwgMjAwLCAxMDAsIDIwMCwgMTAwLCAyMDBdLFxuLy8gICAgICAgICAgICAgICAgICAgICB0YWc6ICd2aWJyYXRpb24tc2FtcGxlJ1xuLy8gICAgICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9KTtcbi8vIH1cbi8vIHNob3dOb3RpZmljYXRpb24oKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9zY3JpcHQudHMiLCJpbXBvcnQgVG9Eb0xpc3QgZnJvbSAnLi90b2RvbGlzdCc7XG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL3N0b3JhZ2UnO1xuY29uc3QgdGVtcGxhdGUgPSBgXG48YnV0dG9uIGlkPVwidG9kb0J1aWxkZXJcIj48L2J1dHRvbj5cbjxkaXYgY2xhc3M9XCJ0b2RvLWxpc3QtYm9hcmRcIj48L2Rpdj5cbmA7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvQnVpbGRlcntcbiAgICBib2FyZDogSFRNTERpdkVsZW1lbnQ7XG4gICAgc3RvcmFnZTogU3RvcmFnZTtcbiAgICBkYXRhOiBBcnJheTxPYmplY3Q+O1xuICAgIGJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgbGlzdHNBcnI6IEFycmF5PE9iamVjdD47XG4gICAgY29uc3RydWN0b3IoYm9hcmQpIHtcbiAgICAgICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xuICAgICAgICB0aGlzLnN0b3JhZ2UgPSBuZXcgU3RvcmFnZSgndG9kby1saXN0cycpO1xuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLnN0b3JhZ2UuZ2V0U3RvcmFnZSgpO1xuICAgICAgICB0aGlzLmluaXQoKTtcblxuICAgICAgICBpZiAodGhpcy5kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVJbml0aWFsTGlzdHModGhpcy5kYXRhKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVMaXN0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVJbml0aWFsTGlzdHMoaW5pdGlhbERhdGEpe1xuICAgICAgICBpbml0aWFsRGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVTdG9yZWRMaXN0KGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0KCl7XG4gICAgICAgIHRoaXMuYm9hcmQuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gICAgICAgIHRoaXMuYnV0dG9uID0gPEhUTUxCdXR0b25FbGVtZW50PnRoaXMuYm9hcmQucXVlcnlTZWxlY3RvcignI3RvZG9CdWlsZGVyJyk7XG4gICAgICAgIHRoaXMubGlzdHNBcnIgPSBbXTtcbiAgICAgICAgdGhpcy5pbml0RXZlbnRzKCk7XG4gICAgfVxuXG4gICAgaW5pdEV2ZW50cygpe1xuICAgICAgICB0aGlzLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY3JlYXRlTGlzdC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5ib2FyZC5hZGRFdmVudExpc3RlbmVyKCdsaXN0VXBkYXRlZCcsIHRoaXMudXBkYXRlTGlzdC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5ib2FyZC5hZGRFdmVudExpc3RlbmVyKCdsaXN0Q3JlYXRlZCcsIHRoaXMuYWRkTGlzdFRvU3RvcmFnZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5ib2FyZC5hZGRFdmVudExpc3RlbmVyKCdsaXN0UmVtb3ZlZCcsIHRoaXMucmVtb3ZlTGlzdEZyb21TdG9yYWdlLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2xpc3RFZGl0aW5nJywgdGhpcy5oaWRlQnRuQWRkLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHVwZGF0ZUxpc3QoZSl7XG4gICAgICAgIHRoaXMuc3RvcmFnZS51cGRhdGVJdGVtKGUuZGV0YWlsKTtcbiAgICAgICAgdGhpcy5zaG93QnRuQWRkKCk7XG4gICAgfVxuXG4gICAgYWRkTGlzdFRvU3RvcmFnZShlKXtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnBlcnNpc3RJdGVtKGUuZGV0YWlsKTtcbiAgICB9XG5cbiAgICByZW1vdmVMaXN0RnJvbVN0b3JhZ2UoZSl7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5mb3JnZXRJdGVtKGUuZGV0YWlsKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDb250YWluZXJGb3JMaXN0KCl7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGlzdC5jbGFzc0xpc3QuYWRkKCd0b2RvLWxpc3QnKTtcbiAgICAgICAgdGhpcy5ib2FyZC5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0LWJvYXJkJykuYXBwZW5kQ2hpbGQobGlzdCk7XG4gICAgICAgIHJldHVybiBsaXN0O1xuICAgIH1cblxuICAgIGNyZWF0ZUxpc3QoKSB7XG4gICAgICAgIHRoaXMubGlzdHNBcnIucHVzaChuZXcgVG9Eb0xpc3QodGhpcy5jcmVhdGVDb250YWluZXJGb3JMaXN0KCkpKTtcbiAgICB9XG5cbiAgICBzaG93QnRuQWRkKCl7XG4gICAgICAgIC8vIGlmKHRoaXMuYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnaXMtaGlkZGVuJykpe1xuICAgICAgICAvLyAgICAgdGhpcy5idXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJylcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIGhpZGVCdG5BZGQoKXtcbiAgICAgICAgLy90aGlzLmJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKVxuICAgIH1cblxuICAgIGNyZWF0ZVN0b3JlZExpc3QoaXRlbSl7XG4gICAgICAgIHRoaXMubGlzdHNBcnIucHVzaChuZXcgVG9Eb0xpc3QodGhpcy5jcmVhdGVDb250YWluZXJGb3JMaXN0KCksIHtcbiAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgICAgdGFza3NBcnI6IGl0ZW0udGFza3NBcnJcbiAgICAgICAgfSkpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy90b0RvQnVpbGRlci50cyIsImltcG9ydCBUb0RvTGlzdEl0ZW0gZnJvbSAnLi90b0RvTGlzdEl0ZW0nO1xuaW50ZXJmYWNlIG9wdGlvblBhcmFtIHtcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgaWQ6IG51bWJlcixcbiAgICB0YXNrc0FycjogQXJyYXk8T2JqZWN0PlxufVxuaW50ZXJmYWNlIG9wdGlvbnNNZXJnZWQge1xuICAgIGxpc3RUaXRsZTogc3RyaW5nLFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBpZDogbnVtYmVyLFxuICAgIHRhc2tzQXJyOiBBcnJheTxPYmplY3Q+XG59XG5pbnRlcmZhY2UgdGFza1Byb3BlcnRpZXMge1xuICAgIGlzRG9uZTogYm9vbGVhbixcbiAgICBpZDogbnVtYmVyLFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBfaXNEb25lOiBib29sZWFuXG59XG5pbnRlcmZhY2Ugb3B0aW9uT2JqZWN0IHtcbiAgICBsaXN0VGl0bGU6IHN0cmluZyxcbn1cbmNvbnN0IGRlZmF1bHRPcHRpb25zOiBvcHRpb25PYmplY3QgPSB7XG4gICAgbGlzdFRpdGxlOiAnbXkgTGlzdCdcbn07XG5pbnRlcmZhY2UgTm9kZVNlbGVjdG9yIHtcbiAgICBxdWVyeVNlbGVjdG9yPFRIVE1MRWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50PihzZWxlY3RvcnM6IHN0cmluZyk6IFRIVE1MRWxlbWVudDtcbiAgICBxdWVyeVNlbGVjdG9yQWxsPFRIVE1MRWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50PihzZWxlY3RvcnM6IHN0cmluZyk6IE5vZGVMaXN0T2Y8VEhUTUxFbGVtZW50Pjtcbn1cbmNvbnN0IFRlbXBsYXRlID0gYFxuXG48ZGl2IGNsYXNzPVwibGlzdF9faGVhZGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImxpc3RfX2hlYWRlcl9fdGFyZ2V0XCI+PC9kaXY+XG4gICAgPHRleHRhcmVhIGNsYXNzPVwibGlzdF9faGVhZGVyX19pbnB1dFwiPjwvdGV4dGFyZWE+XG4gICAgPGEgY2xhc3M9XCJidG4tcmVtb3ZlLWxpc3RcIj48L2E+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJsaXN0X19pdGVtc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb21wb3Nlcl9fY29udGFpbmVyXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJuZXdUb2RvXCI+TmV3IHRhc2s8L2xhYmVsPlxuICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJsaXN0X19pdGVtX19jb21wb3Nlci10ZXh0YXJlYVwiIGlkPVwibmV3VG9kb1wiPjwvdGV4dGFyZWE+XG4gICAgICAgIDwhLS08YnV0dG9uIGNsYXNzPVwiYnRuLWNhbnNlbC1hZGQtdGFza1wiPjwvYnV0dG9uPi0tPlxuICAgIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibGlzdF9fY29udHJvbHNcIj5cbiAgICA8bGFiZWwgZm9yPVwiXCI+TGVmdCB0YXNrczogPC9sYWJlbD5cbiAgICA8ZGl2IGNsYXNzPVwiY291bnRlci1kb25lXCI+PC9kaXY+XG4gICAgPGEgIGNsYXNzPVwiYnRuLWNsZWFyLWFsbFwiPkNsZWFyIEFsbDwvYT5cbjwvZGl2PlxuYDtcblxuY29uc3QgRU5URVJfS0VZQ09ERSA9IDEzO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9Eb0xpc3Qge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGxpc3RDb250YWluZXJcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgICAqL1xuICAgIGxpc3Q6IEhUTUxEaXZFbGVtZW50O1xuICAgIG9wdGlvbjogb3B0aW9uc01lcmdlZDtcbiAgICB0aXRsZU5hbWU6IFN0cmluZztcbiAgICB0aXRsZVRhcmdldDogSFRNTERpdkVsZW1lbnQ7XG4gICAgdGl0bGVUZXh0YXJlYTogSFRNTFRleHRBcmVhRWxlbWVudDtcbiAgICBsaXN0SXRlbXNDb250YWluZXI6IEhUTUxVTGlzdEVsZW1lbnQ7XG4gICAgY29tcG9zZXJDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIGNvbXBvc2VyVGV4dGFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG4gICAgYnRuQ2xlYXJBbGw6IEhUTUxCdXR0b25FbGVtZW50O1xuICAgIGJ0blJlbW92ZUxpc3Q6IEhUTUxCdXR0b25FbGVtZW50O1xuICAgIGlkOiBzdHJpbmc7XG4gICAgdGFza3NBcnI6IEFycmF5PE9iamVjdD47XG4gICAgY29uc3RydWN0b3IobGlzdENvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQsIG9wdGlvbnM6IG9wdGlvblBhcmFtID0gbnVsbCl7XG4gICAgICAgIHRoaXMubGlzdCA9IGxpc3RDb250YWluZXI7XG4gICAgICAgIHRoaXMubGlzdC5pbm5lckhUTUwgPSBUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5vcHRpb249KDxhbnk+T2JqZWN0KS5hc3NpZ24oe30sZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMudGl0bGVOYW1lID0gPHN0cmluZz50aGlzLm9wdGlvbi5saXN0VGl0bGU7XG4gICAgICAgIHRoaXMudGl0bGVUYXJnZXQgPSA8SFRNTERpdkVsZW1lbnQ+dGhpcy5saXN0LnF1ZXJ5U2VsZWN0b3IoJy5saXN0X19oZWFkZXJfX3RhcmdldCcpO1xuICAgICAgICB0aGlzLnRpdGxlVGV4dGFyZWEgPSA8SFRNTFRleHRBcmVhRWxlbWVudD50aGlzLmxpc3QucXVlcnlTZWxlY3RvcignLmxpc3RfX2hlYWRlcl9faW5wdXQnKTtcblxuICAgICAgICB0aGlzLmxpc3RJdGVtc0NvbnRhaW5lciA9IDxIVE1MVUxpc3RFbGVtZW50PnRoaXMubGlzdC5xdWVyeVNlbGVjdG9yKCcubGlzdF9faXRlbXMnKTtcblxuICAgICAgICB0aGlzLmNvbXBvc2VyQ29udGFpbmVyID0gPEhUTUxEaXZFbGVtZW50PnRoaXMubGlzdC5xdWVyeVNlbGVjdG9yKCcuY29tcG9zZXJfX2NvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLmNvbXBvc2VyVGV4dGFyZWEgPSA8SFRNTFRleHRBcmVhRWxlbWVudD50aGlzLmNvbXBvc2VyQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5saXN0X19pdGVtX19jb21wb3Nlci10ZXh0YXJlYScpO1xuXG4gICAgICAgIHRoaXMuYnRuQ2xlYXJBbGwgPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+dGhpcy5saXN0LnF1ZXJ5U2VsZWN0b3IoJy5idG4tY2xlYXItYWxsJyk7XG5cbiAgICAgICAgdGhpcy5idG5SZW1vdmVMaXN0ID0gPEhUTUxCdXR0b25FbGVtZW50PnRoaXMubGlzdC5xdWVyeVNlbGVjdG9yKCcuYnRuLXJlbW92ZS1saXN0Jyk7XG4gICAgICAgIHRoaXMuaWQgPSA8c3RyaW5nPkRhdGUubm93KCkudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy50YXNrc0FyciA9IFtdO1xuXG4gICAgICAgIGlmKG9wdGlvbnMpe1xuICAgICAgICAgICAgdGhpcy50aXRsZU5hbWUgPSA8c3RyaW5nPm9wdGlvbnMubmFtZTtcbiAgICAgICAgICAgIHRoaXMuaWQgPSBvcHRpb25zLmlkLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLnRhc2tzQXJyID0gb3B0aW9ucy50YXNrc0FycjtcbiAgICAgICAgICAgIGlmKHRoaXMudGFza3NBcnIpe1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkU3RvcmVkVGFza3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGRUb1N0b3JhZ2UoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBpbml0KCl7XG4gICAgICAgIHRoaXMubGlzdC5jbGFzc0xpc3QuYWRkKCdsaXN0Jyk7XG4gICAgICAgIHRoaXMubGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy5pZCk7XG4gICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50cygpO1xuICAgICAgICB0aGlzLmluaXRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBhZGRUb1N0b3JhZ2UoKXtcbiAgICAgICAgY29uc3QgbGlzdENyZWF0ZWQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2xpc3RDcmVhdGVkJywge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMudGl0bGVOYW1lLFxuICAgICAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgICAgIHRhc2tzQXJyOiB0aGlzLnRhc2tzQXJyXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxpc3QuZGlzcGF0Y2hFdmVudChsaXN0Q3JlYXRlZCk7XG4gICAgfVxuXG4gICAgb25VcGRhdGUoKXtcbiAgICAgICAgdGhpcy5yZWNvdW50KCk7XG4gICAgICAgIGNvbnN0IGxpc3RVcGRhdGVkID0gbmV3IEN1c3RvbUV2ZW50KCdsaXN0VXBkYXRlZCcsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnRpdGxlTmFtZSxcbiAgICAgICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgICAgICB0YXNrc0FycjogdGhpcy50YXNrc0FyclxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5saXN0LmRpc3BhdGNoRXZlbnQobGlzdFVwZGF0ZWQpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNvbXBvbmVudHMoKXtcbiAgICAgICAgdGhpcy50aXRsZVRleHRhcmVhLnZhbHVlID0gdGhpcy5vcHRpb24ubmFtZSA/IHRoaXMub3B0aW9uLm5hbWUgOiB0aGlzLm9wdGlvbi5saXN0VGl0bGUgO1xuICAgICAgICB0aGlzLnJlY291bnQoKTtcbiAgICB9XG5cbiAgICBpbml0RXZlbnRzKCl7XG4gICAgICAgIHRoaXMubGlzdC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCB0aGlzLm9uUmVtb3ZlLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnRpdGxlVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblRpdGxlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMudGl0bGVUZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5vblRleHRhcmVhQmx1ci5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5idG5DbGVhckFsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xlYXJBbGxUYXNrcy5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5idG5SZW1vdmVMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZW1vdmVMaXN0LmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmNvbXBvc2VyVGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKT0+e1xuICAgICAgICAgICBpZihlLmtleUNvZGUgPT09IEVOVEVSX0tFWUNPREUpe1xuICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgdGhpcy5hZGRUYXNrLmJpbmQodGhpcykoKTtcbiAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb21wb3NlclRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywoZSk9PntcbiAgICAgICAgICAgIHRoaXMuY29tcG9zZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUV2ZW50T2ZMaXN0RWRpdGluZygpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb21wb3NlclRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLChlKT0+e1xuICAgICAgICAgICAgdGhpcy5jb21wb3NlckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgIHRoaXMuYWRkVGFzay5iaW5kKHRoaXMpKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY21wb3NlciBibHVyJylcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGlzdEl0ZW1zQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Rhc2tUb2dnbGVkJywgKGUpPT57XG4gICAgICAgICAgICB0aGlzLm9uVXBkYXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxpc3RJdGVtc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkZWxldGUnLCAoZSk9PntcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlVGFzayhlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGlzdEl0ZW1zQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ25hbWVDaGFuZ2VkJywgKGUpPT57XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVRhc2tOYW1lKGUpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBjcmVhdGVFdmVudE9mTGlzdEVkaXRpbmcoKXtcbiAgICAgICAgY29uc3QgbGlzdEVkaXRpbmcgPSBuZXcgQ3VzdG9tRXZlbnQoJ2xpc3RFZGl0aW5nJywge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGRldGFpbDoge31cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGlzdC5kaXNwYXRjaEV2ZW50KGxpc3RFZGl0aW5nKTtcblxuICAgIH1cblxuICAgIG9uVGl0bGVDbGljaygpe1xuICAgICAgICB0aGlzLnRpdGxlVGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xuICAgICAgICB0aGlzLnRpdGxlVGV4dGFyZWEuZm9jdXMoKTtcbiAgICAgICAgdGhpcy50aXRsZVRleHRhcmVhLnNlbGVjdCgpO1xuICAgICAgICB0aGlzLmNyZWF0ZUV2ZW50T2ZMaXN0RWRpdGluZygpO1xuICAgIH1cblxuICAgIG9uVGV4dGFyZWFCbHVyKCl7XG4gICAgICAgIHRoaXMudGl0bGVOYW1lID0gdGhpcy50aXRsZVRleHRhcmVhLnZhbHVlO1xuICAgICAgICB0aGlzLnRpdGxlVGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xuICAgICAgICBjb25zdCB1cGRhdGVUaXRsZSA9IG5ldyBDdXN0b21FdmVudCgndXBkYXRlJyx7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgVG9Eb0xpc3Q6IHRoaXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGlzdC5kaXNwYXRjaEV2ZW50KHVwZGF0ZVRpdGxlKTtcbiAgICAgICAgdGhpcy5vblVwZGF0ZSgpO1xuICAgIH1cblxuICAgIG9uQ29tcG9zZXJMaW5rQ2xpY2soKXtcbiAgICAgICAgdGhpcy5jb21wb3NlckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcbiAgICAgICAgdGhpcy5jb21wb3NlclRleHRhcmVhLmZvY3VzKCk7XG4gICAgfVxuICAgIG9uQ29tcG9zZXJMYWJlbENsaWNrKGUpe1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzKVxuICAgIH1cblxuICAgIGFkZFRhc2soKXtcbiAgICAgICAgaWYodGhpcy5jb21wb3NlclRleHRhcmVhLnZhbHVlKXtcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgnbGlzdF9faXRlbScpO1xuICAgICAgICAgICAgdGhpcy5saXN0SXRlbXNDb250YWluZXIuaW5zZXJ0QmVmb3JlKHRhc2ssIHRoaXMubGlzdEl0ZW1zQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jb21wb3Nlcl9fY29udGFpbmVyJykpO1xuICAgICAgICAgICAgdGhpcy50YXNrc0Fyci5wdXNoKG5ldyBUb0RvTGlzdEl0ZW0odGFzaywgdGhpcy5jb21wb3NlclRleHRhcmVhLnZhbHVlKSk7XG5cbiAgICAgICAgICAgIC8vIGltcG9ydCgnLi90b0RvTGlzdEl0ZW0nKS50aGVuKG1vZHVsZSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy50YXNrc0Fyci5wdXNoKG5ldyBtb2R1bGUuZGVmYXVsdCh0YXNrLCB0aGlzLmNvbXBvc2VyVGV4dGFyZWEudmFsdWUpKTtcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhtb2R1bGUpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gICAgICk7XG4gICAgICAgICAgICB0aGlzLm9uVXBkYXRlKCk7XG4gICAgICAgICAgICB0aGlzLmNvbXBvc2VyVGV4dGFyZWEudmFsdWUgPSBcIlwiO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAvL2FsZXJ0KCdUYXNrIGZpZWxkIGlzIGVtcHR5JylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZFN0b3JlZFRhc2tzKCl7XG4gICAgICAgIHRoaXMudGFza3NBcnIgPSB0aGlzLnRhc2tzQXJyLm1hcCgoaXRlbTogdGFza1Byb3BlcnRpZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgnbGlzdF9faXRlbScpO1xuICAgICAgICAgICAgdGhpcy5saXN0SXRlbXNDb250YWluZXIuaW5zZXJ0QmVmb3JlKHRhc2ssIHRoaXMubGlzdEl0ZW1zQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jb21wb3Nlcl9fY29udGFpbmVyJykpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBUb0RvTGlzdEl0ZW0odGFzaywgaXRlbS5uYW1lLCB7XG4gICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgaXNEb25lOiBpdGVtLl9pc0RvbmVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkZWxldGVUYXNrKGUpIHtcbiAgICAgICAgY29uc3QgdGFza0lkID0gZS5kZXRhaWwuaWQ7XG4gICAgICAgIHRoaXMudGFza3NBcnIgPSB0aGlzLnRhc2tzQXJyLmZpbHRlcigoZWxlbTogdGFza1Byb3BlcnRpZXMpPT57XG4gICAgICAgICAgICByZXR1cm4gZWxlbS5pZCAhPT0gdGFza0lkO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vblVwZGF0ZSgpO1xuICAgIH1cblxuICAgIGNoYW5nZVRhc2tOYW1lKGUpe1xuICAgICAgIHRoaXMub25VcGRhdGUoKTtcbiAgICB9XG5cbiAgICBjbGVhckFsbFRhc2tzKCl7XG4gICAgICAgIGNvbnN0IFRhc2tOb2RlcyAgPSB0aGlzLmxpc3RJdGVtc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdF9faXRlbScpO1xuICAgICAgICBUYXNrTm9kZXMuZm9yRWFjaCgoZWxlbSkgPT57XG4gICAgICAgICAgICBlbGVtLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50YXNrc0FyciA9IFtdO1xuICAgICAgICB0aGlzLm9uVXBkYXRlKCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlTGlzdCgpe1xuICAgICAgICBjb25zdCBldmVudFJlbW92ZUxpc3QgPSBuZXcgQ3VzdG9tRXZlbnQoJ2xpc3RSZW1vdmVkJywge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGRldGFpbDogdGhpcy5pZFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5saXN0LmRpc3BhdGNoRXZlbnQoZXZlbnRSZW1vdmVMaXN0KTtcbiAgICAgICAgdGhpcy5saXN0LmNsYXNzTGlzdC5hZGQoJ2lzLWRlbGV0ZWQnKTtcbiAgICB9XG4gICAgb25SZW1vdmUoZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICBpZihlLnRhcmdldCA9PSB0aGlzLmxpc3QgJiYgZS5hbmltYXRpb25OYW1lID09PSBcInNjYWxlXCIpe1xuICAgICAgICAgICAgdGhpcy5saXN0LnJlbW92ZSgpO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVjb3VudCgpe1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRhc2tzQXJyKTtcbiAgICAgICAgdGhpcy5saXN0XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmNvdW50ZXItZG9uZScpXG4gICAgICAgICAgICAuaW5uZXJIVE1MID0gdGhpcy50YXNrc0Fyci5maWx0ZXIoKHRvZG9MaXN0SXRlbTogdGFza1Byb3BlcnRpZXMpPT4gIXRvZG9MaXN0SXRlbS5pc0RvbmUpLmxlbmd0aC50b1N0cmluZygpO1xuICAgIH1cbn1cbi8vIGV4cG9ydCB2YXIgX191c2VEZWZhdWx0ID0gdHJ1ZTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3RvZG9saXN0LnRzIiwiY29uc3QgbGlzdEl0ZW1UZW1wbGF0ZSA9IGBcbjxkaXYgY2xhc3M9XCJjaGVja2JveFwiPjwvZGl2PlxuPGRpdiBjbGFzcz1cInRhc2stbmFtZV9fY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInRhc2stbmFtZV9fdGFyZ2V0XCI+PC9kaXY+XG4gICAgPHRleHRhcmVhIGNsYXNzPVwidGFzay1uYW1lX19pbnB1dFwiPjwvdGV4dGFyZWE+XG48L2Rpdj5cbjxhIGNsYXNzPVwiYnRuLXJlbW92ZVwiPjwvYT5cbmA7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvTGlzdEl0ZW0ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBsaXN0SXRlbTogSFRNTERpdkVsZW1lbnQ7XG4gICAgY2hlY2tib3g6IEhUTUxEaXZFbGVtZW50O1xuICAgIG5hbWVUYXJnZXQ6IEhUTUxEaXZFbGVtZW50O1xuICAgIG5hbWVUZXh0YXJlYTogSFRNTFRleHRBcmVhRWxlbWVudDtcbiAgICBidG5SZW1vdmU6IEhUTUxBbmNob3JFbGVtZW50O1xuICAgIHByaXZhdGUgX2lzRG9uZTogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9pc0RlbGV0ZWQ6IGJvb2xlYW47XG4gICAgaWQ6IHN0cmluZztcbiAgICBvcHRpb25zOiBPYmplY3Q7XG4gICAgY29uc3RydWN0b3IoaXRlbSwgdmFsdWUsIG9wdGlvbnMgPSBudWxsKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmxpc3RJdGVtID0gaXRlbTtcbiAgICAgICAgdGhpcy5saXN0SXRlbS5pbm5lckhUTUwgPSBsaXN0SXRlbVRlbXBsYXRlO1xuICAgICAgICB0aGlzLmNoZWNrYm94ID0gPEhUTUxEaXZFbGVtZW50PnRoaXMubGlzdEl0ZW0ucXVlcnlTZWxlY3RvcignLmNoZWNrYm94Jyk7XG4gICAgICAgIHRoaXMubmFtZVRhcmdldCA9IDxIVE1MRGl2RWxlbWVudD50aGlzLmxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW5hbWVfX3RhcmdldCcpO1xuICAgICAgICB0aGlzLm5hbWVUZXh0YXJlYSA9IDxIVE1MVGV4dEFyZWFFbGVtZW50PnRoaXMubGlzdEl0ZW0ucXVlcnlTZWxlY3RvcignLnRhc2stbmFtZV9faW5wdXQnKTtcbiAgICAgICAgdGhpcy5idG5SZW1vdmUgPSA8SFRNTEFuY2hvckVsZW1lbnQ+dGhpcy5saXN0SXRlbS5xdWVyeVNlbGVjdG9yKCcuYnRuLXJlbW92ZScpO1xuICAgICAgICB0aGlzLl9pc0RvbmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faXNEZWxldGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaWQgPSA8c3RyaW5nPkRhdGUubm93KCkudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24oe30sIG9wdGlvbnMpO1xuICAgICAgICBpZihvcHRpb25zKXtcbiAgICAgICAgICAgIHRoaXMuaWQgPSBvcHRpb25zLmlkO1xuICAgICAgICAgICAgdGhpcy5faXNEb25lID0gb3B0aW9ucy5pc0RvbmU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICAgIGdldCBpc0RvbmUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRG9uZTtcbiAgICB9XG4gICAgc2V0IGlzRG9uZSh2YWx1ZSl7XG4gICAgICAgIGlmKHZhbHVlKXtcbiAgICAgICAgICAgIHRoaXMuX2lzRG9uZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlVGFzaygpXG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2lzRG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy51bmRvQ29tcGxldGVUYXNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb25Ub2dnbGVJdGVtID0gbmV3IEN1c3RvbUV2ZW50KCd0YXNrVG9nZ2xlZCcsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBkZXRhaWw6IHRoaXNcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGlzdEl0ZW0uZGlzcGF0Y2hFdmVudChvblRvZ2dsZUl0ZW0pO1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmluaXREb01FbGVtZW50cygpO1xuICAgICAgICB0aGlzLmluaXRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBpbml0RG9NRWxlbWVudHMoKXtcbiAgICAgICAgdGhpcy5saXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy5pZCk7XG4gICAgICAgIHRoaXMubmFtZVRleHRhcmVhLnZhbHVlID0gdGhpcy5uYW1lO1xuICAgICAgICB0aGlzLmJ0blJlbW92ZS5jbGFzc0xpc3QuYWRkKCdidG4tcmVtb3ZlJyk7XG4gICAgICAgIGlmKHRoaXMuaXNEb25lKXtcbiAgICAgICAgICAgIHRoaXMubGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnaXMtZG9uZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdEV2ZW50cygpe1xuICAgICAgICB0aGlzLmJ0blJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZGVsZXRlSXRlbS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5jaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgICAgICB0aGlzLmlzRG9uZT0hdGhpcy5pc0RvbmVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubmFtZVRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZWRpdEl0ZW0uYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMubmFtZVRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLnJlbmFtZVRhc2suYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgZGVsZXRlSXRlbSgpe1xuICAgICAgICBjb25zdCBldmVudERlbGV0ZSA9IG5ldyBDdXN0b21FdmVudCgnZGVsZXRlJywge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGRldGFpbDogdGhpc1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5saXN0SXRlbS5kaXNwYXRjaEV2ZW50KGV2ZW50RGVsZXRlKTtcbiAgICAgICAgdGhpcy5saXN0SXRlbS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBjb21wbGV0ZVRhc2soKXtcbiAgICAgICAgdGhpcy5saXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdpcy1kb25lJyk7XG4gICAgfVxuXG4gICAgdW5kb0NvbXBsZXRlVGFzaygpe1xuICAgICAgICB0aGlzLmxpc3RJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWRvbmUnKTtcbiAgICB9XG5cbiAgICBlZGl0SXRlbShlKXtcbiAgICAgICAgdGhpcy5uYW1lVGV4dGFyZWEuZm9jdXMoKTtcbiAgICAgICAgdGhpcy5uYW1lVGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xuICAgICAgICB0aGlzLmxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2lzLWVkaXRpbmcnKTtcbiAgICB9XG5cbiAgICByZW5hbWVUYXNrKGUpe1xuICAgICAgICBjb25zdCBwcmV2aW91c05hbWUgPSB0aGlzLm5hbWU7XG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMubmFtZVRleHRhcmVhLnZhbHVlO1xuICAgICAgICB0aGlzLm5hbWVUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJyk7XG4gICAgICAgIHRoaXMubGlzdEl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtZWRpdGluZycpO1xuICAgICAgICBjb25zdCBuYW1lQ2hhbmdlZCA9IG5ldyBDdXN0b21FdmVudCgnbmFtZUNoYW5nZWQnLCB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgbGlzdEl0ZW06IHRoaXMsXG4gICAgICAgICAgICAgICAgcHJldjogcHJldmlvdXNOYW1lLFxuICAgICAgICAgICAgICAgIHVwZGF0ZWQ6IHRoaXMubmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5saXN0SXRlbS5kaXNwYXRjaEV2ZW50KG5hbWVDaGFuZ2VkKTtcbiAgICB9XG5cbn1cbi8vIGV4cG9ydCB2YXIgX191c2VEZWZhdWx0ID0gdHJ1ZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdG9Eb0xpc3RJdGVtLnRzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7XG4gICAgc3RvcmFnZUtleTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKHN0b3JhZ2VLZXkpIHtcbiAgICAgICAgdGhpcy5zdG9yYWdlS2V5ID0gc3RvcmFnZUtleTtcbiAgICB9XG5cbiAgICBwZXJzaXN0SXRlbShpdGVtKSB7XG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSB0aGlzLmdldFN0b3JhZ2UoKTtcbiAgICAgICAgc3RvcmFnZS5wdXNoKGl0ZW0pO1xuICAgICAgICB0aGlzLnNldFN0b3JhZ2Uoc3RvcmFnZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlSXRlbShsaXN0KXtcbiAgICAgICAgY29uc3QgdG9kb3MgPSB0aGlzLmdldFN0b3JhZ2UoKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0b2Rvcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmlkID09PSBsaXN0LmlkKTtcbiAgICAgICAgdG9kb3NbaW5kZXhdID0gbGlzdDtcbiAgICAgICAgdGhpcy5zZXRTdG9yYWdlKHRvZG9zKTtcbiAgICB9XG5cbiAgICBmb3JnZXRJdGVtKGl0ZW1JZCkge1xuICAgICAgICBjb25zdCBzdG9yYWdlID0gdGhpcy5nZXRTdG9yYWdlKCkuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCAhPT0gaXRlbUlkKTtcbiAgICAgICAgdGhpcy5zZXRTdG9yYWdlKHN0b3JhZ2UpO1xuICAgIH1cblxuICAgIGdldFN0b3JhZ2UoKSB7XG4gICAgICAgIGNvbnN0IHRvZG9zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5zdG9yYWdlS2V5KTtcbiAgICAgICAgcmV0dXJuIHRvZG9zID8gSlNPTi5wYXJzZSh0b2RvcykgOiBbXTtcbiAgICB9XG5cbiAgICBzZXRTdG9yYWdlKHN0b3JhZ2UpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5zdG9yYWdlS2V5LCBKU09OLnN0cmluZ2lmeShzdG9yYWdlKSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3N0b3JhZ2UudHMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Nzcy9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=