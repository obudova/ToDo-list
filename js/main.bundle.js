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

exports.__esModule = true;
var toDoBuilder_1 = __webpack_require__(1);
__webpack_require__(5);
new toDoBuilder_1["default"](document.querySelector('.board'));
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
function showNotification() {
    Notification.requestPermission(function (result) {
        if (result === 'granted') {
            navigator.serviceWorker.ready.then(function (registration) {
                registration.showNotification('Vibration Sample', {
                    body: 'Buzz! Buzz!',
                    icon: '/android-chrome-512x512.png',
                    vibrate: [200, 100, 200, 100, 200, 100, 200],
                    tag: 'vibration-sample'
                });
            });
        }
    });
}
// showNotification();


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var todolist_1 = __webpack_require__(2);
var storage_1 = __webpack_require__(4);
var template = "\n<button id=\"todoBuilder\"></button>\n<div class=\"todo-list-board\"></div>\n";
var ToDoBuilder = (function () {
    function ToDoBuilder(board) {
        this.board = board;
        this.storage = new storage_1["default"]('todo-lists');
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
        list.classList.add('todo-list', 'mat-elevation-2dp');
        this.board.querySelector('.todo-list-board').appendChild(list);
        return list;
    };
    ToDoBuilder.prototype.createList = function () {
        this.listsArr.push(new todolist_1["default"](this.createContainerForList()));
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
        this.listsArr.push(new todolist_1["default"](this.createContainerForList(), {
            name: item.name,
            id: item.id,
            tasksArr: item.tasksArr
        }));
    };
    return ToDoBuilder;
}());
exports["default"] = ToDoBuilder;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var toDoListItem_1 = __webpack_require__(3);
var defaultOptions = {
    listTitle: 'my List'
};
var Template = "\n\n<div class=\"list__header\">\n    <div class=\"list__header__target\"></div>\n    <textarea class=\"list__header__input\"></textarea>\n    <a class=\"btn-remove-list\"></a>\n</div>\n<div class=\"list__items\">\n    <div class=\"composer__container\">\n        <label for=\"newTodo\">New task</label>\n        <textarea class=\"list__item__composer-textarea\" id=\"newTodo\"></textarea>\n        <button class=\"btn-add-task is-hidden\">Add</button>\n        <!--<button class=\"btn-cansel-add-task\"></button>-->\n    </div>\n</div>\n<div class=\"list__controls\">\n    <a  class=\"btn-clear-all\">Clear All</a>\n    <label for=\"\">Left tasks: </label>\n    <div class=\"counter-done\"></div>\n</div>\n";
var ENTER_KEYCODE = 13;
var ToDoList = (function () {
    /**
     *
     * @param list
     * @param options
     */
    function ToDoList(list, options) {
        this.list = list;
        this.list.innerHTML = Template;
        this.option = Object.assign({}, defaultOptions, options);
        this.titleName = this.option.listTitle;
        this.titleTarget = this.list.querySelector('.list__header__target');
        this.titleTextarea = this.list.querySelector('.list__header__input');
        this.listItemsContainer = this.list.querySelector('.list__items');
        this.composerContainer = this.list.querySelector('.composer__container');
        this.composerTextarea = this.composerContainer.querySelector('.list__item__composer-textarea');
        this.btnAddTask = this.composerContainer.querySelector('.btn-add-task');
        this.btnClearAll = this.list.querySelector('.btn-clear-all');
        this.btnRemoveList = this.list.querySelector('.btn-remove-list');
        this.id = Date.now();
        this.tasksArr = [];
        if (options) {
            this.titleName = options.name;
            this.id = options.id;
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
        this.list.addEventListener('transitionend', this.onRemove.bind(this));
        this.titleTarget.addEventListener('click', this.onTitleClick.bind(this));
        this.titleTextarea.addEventListener('blur', this.onTextareaBlur.bind(this));
        // this.btnCanselComposer.addEventListener('click', this.closeComposer.bind(this));
        this.btnAddTask.addEventListener('click', function (e) {
            console.log(e);
            e.preventDefault();
            _this.addTask.bind(_this)();
        });
        this.btnClearAll.addEventListener('click', this.clearAllTasks.bind(this));
        this.btnRemoveList.addEventListener('click', this.removeList.bind(this));
        this.composerTextarea.addEventListener('keydown', function (e) {
            if (e.keyCode === ENTER_KEYCODE) {
                e.preventDefault();
                _this.addTask.bind(_this)();
            }
        });
        this.composerTextarea.addEventListener('focus', function (e) {
            //this.btnAddTask.classList.remove('is-hidden');
            _this.composerContainer.classList.add('is-active');
            _this.createEventOfListEditing();
        });
        this.composerTextarea.addEventListener('blur', function (e) {
            _this.composerContainer.classList.remove('is-active');
            _this.addTask.bind(_this)();
            console.log('cmposer blur');
        });
        this.listItemsContainer.addEventListener('taskToggled', function (e) {
            _this.onUpdate(e);
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
            this.tasksArr.push(new toDoListItem_1["default"](task, this.composerTextarea.value));
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
            return new toDoListItem_1["default"](task, item.name, {
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
        if (e.target == this.list)
            this.list.remove();
    };
    ToDoList.prototype.recount = function () {
        this.list
            .querySelector('.counter-done')
            .innerHTML = this.tasksArr.filter(function (todoListItem) { return !todoListItem.isDone; }).length;
    };
    return ToDoList;
}());
exports["default"] = ToDoList;
// export var __useDefault = true;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var listItemTemplate = "\n<div class=\"checkbox\"></div>\n<div class=\"task-name__container\">\n    <div class=\"task-name__target\"></div>\n    <textarea class=\"task-name__input\"></textarea>\n</div>\n<a class=\"btn-remove\"></a>\n";
var ToDoListItem = (function () {
    function ToDoListItem(item, value, options) {
        this.name = value;
        this.listItem = item;
        this.listItem.innerHTML = listItemTemplate;
        this.checkbox = this.listItem.querySelector('.checkbox');
        this.nameTarget = this.listItem.querySelector('.task-name__target');
        this.nameTextarea = this.listItem.querySelector('.task-name__input');
        this.btnRemove = this.listItem.querySelector('.btn-remove');
        this._isDone = false;
        this._isDeleted = false;
        this.id = Date.now();
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
    };
    ToDoListItem.prototype.renameTask = function (e) {
        var previousName = this.name;
        this.name = this.nameTextarea.value;
        this.nameTarget.classList.remove('is-hidden');
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
exports["default"] = ToDoListItem;
// export var __useDefault = true; 


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
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
exports["default"] = Storage;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTZiNzg4MWZmNzlkYTE2MDJhN2QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NjcmlwdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdG9Eb0J1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RvZG9saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9qcy90b0RvTGlzdEl0ZW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzdEQSwyQ0FBd0M7QUFDeEMsdUJBQTJCO0FBQzNCLElBQUksd0JBQVcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDbEQsRUFBRSxDQUFDLENBQUMsZUFBZSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDL0IsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtRQUM1QixTQUFTLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxZQUFZO1lBQ2hFLDhCQUE4QjtZQUM5QixPQUFP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R0FBVixVQUFXLE9BQU87UUFDZCxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7QUMvQkQseUMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhNmI3ODgxZmY3OWRhMTYwMmE3ZCIsImltcG9ydCBUb0RvQnVpbGRlciBmcm9tICcuL3RvRG9CdWlsZGVyJztcbmltcG9ydCAnLi4vY3NzL3N0eWxlLnNjc3MnO1xubmV3IFRvRG9CdWlsZGVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpKTtcbmlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJ3N3LmpzJykudGhlbihmdW5jdGlvbihyZWdpc3RyYXRpb24pIHtcbiAgICAgICAgICAgIC8vIFJlZ2lzdHJhdGlvbiB3YXMgc3VjY2Vzc2Z1bFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwgd2l0aCBzY29wZTogJywgcmVnaXN0cmF0aW9uLnNjb3BlKTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAvLyByZWdpc3RyYXRpb24gZmFpbGVkIDooXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiAnLCBlcnIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmNvbnNvbGUubG9nKCd0eXBlIHNjcmlwdCcpO1xuZnVuY3Rpb24gc2hvd05vdGlmaWNhdGlvbigpIHtcbiAgICBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgIGlmIChyZXN1bHQgPT09ICdncmFudGVkJykge1xuICAgICAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHkudGhlbihmdW5jdGlvbihyZWdpc3RyYXRpb24pIHtcbiAgICAgICAgICAgICAgICByZWdpc3RyYXRpb24uc2hvd05vdGlmaWNhdGlvbignVmlicmF0aW9uIFNhbXBsZScsIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keTogJ0J1enohIEJ1enohJyxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJy9hbmRyb2lkLWNocm9tZS01MTJ4NTEyLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHZpYnJhdGU6IFsyMDAsIDEwMCwgMjAwLCAxMDAsIDIwMCwgMTAwLCAyMDBdLFxuICAgICAgICAgICAgICAgICAgICB0YWc6ICd2aWJyYXRpb24tc2FtcGxlJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vIHNob3dOb3RpZmljYXRpb24oKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9zY3JpcHQudHMiLCJpbXBvcnQgVG9Eb0xpc3QgZnJvbSAnLi90b2RvbGlzdCc7XG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL3N0b3JhZ2UnO1xuY29uc3QgdGVtcGxhdGUgPSBgXG48YnV0dG9uIGlkPVwidG9kb0J1aWxkZXJcIj48L2J1dHRvbj5cbjxkaXYgY2xhc3M9XCJ0b2RvLWxpc3QtYm9hcmRcIj48L2Rpdj5cbmA7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvQnVpbGRlcntcbiAgICBjb25zdHJ1Y3Rvcihib2FyZCkge1xuICAgICAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IG5ldyBTdG9yYWdlKCd0b2RvLWxpc3RzJyk7XG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuc3RvcmFnZS5nZXRTdG9yYWdlKCk7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUluaXRpYWxMaXN0cyh0aGlzLmRhdGEpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUxpc3QoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZUluaXRpYWxMaXN0cyhpbml0aWFsRGF0YSl7XG4gICAgICAgIGluaXRpYWxEYXRhLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVN0b3JlZExpc3QoaXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXQoKXtcbiAgICAgICAgdGhpcy5ib2FyZC5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5idXR0b24gPSB0aGlzLmJvYXJkLnF1ZXJ5U2VsZWN0b3IoJyN0b2RvQnVpbGRlcicpO1xuICAgICAgICB0aGlzLmxpc3RzQXJyID0gW107XG4gICAgICAgIHRoaXMuaW5pdEV2ZW50cygpO1xuICAgIH1cblxuICAgIGluaXRFdmVudHMoKXtcbiAgICAgICAgdGhpcy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNyZWF0ZUxpc3QuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignbGlzdFVwZGF0ZWQnLCB0aGlzLnVwZGF0ZUxpc3QuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignbGlzdENyZWF0ZWQnLCB0aGlzLmFkZExpc3RUb1N0b3JhZ2UuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignbGlzdFJlbW92ZWQnLCB0aGlzLnJlbW92ZUxpc3RGcm9tU3RvcmFnZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5ib2FyZC5hZGRFdmVudExpc3RlbmVyKCdsaXN0RWRpdGluZycsIHRoaXMuaGlkZUJ0bkFkZC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICB1cGRhdGVMaXN0KGUpe1xuICAgICAgICB0aGlzLnN0b3JhZ2UudXBkYXRlSXRlbShlLmRldGFpbCk7XG4gICAgICAgIHRoaXMuc2hvd0J0bkFkZCgpO1xuICAgIH1cblxuICAgIGFkZExpc3RUb1N0b3JhZ2UoZSl7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5wZXJzaXN0SXRlbShlLmRldGFpbCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlTGlzdEZyb21TdG9yYWdlKGUpe1xuICAgICAgICB0aGlzLnN0b3JhZ2UuZm9yZ2V0SXRlbShlLmRldGFpbCk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ29udGFpbmVyRm9yTGlzdCgpe1xuICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxpc3QuY2xhc3NMaXN0LmFkZCgndG9kby1saXN0JywgJ21hdC1lbGV2YXRpb24tMmRwJyk7XG4gICAgICAgIHRoaXMuYm9hcmQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdC1ib2FyZCcpLmFwcGVuZENoaWxkKGxpc3QpO1xuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICB9XG5cbiAgICBjcmVhdGVMaXN0KCkge1xuICAgICAgICB0aGlzLmxpc3RzQXJyLnB1c2gobmV3IFRvRG9MaXN0KHRoaXMuY3JlYXRlQ29udGFpbmVyRm9yTGlzdCgpKSk7XG4gICAgfVxuXG4gICAgc2hvd0J0bkFkZCgpe1xuICAgICAgICAvLyBpZih0aGlzLmJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWhpZGRlbicpKXtcbiAgICAgICAgLy8gICAgIHRoaXMuYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpXG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBoaWRlQnRuQWRkKCl7XG4gICAgICAgIC8vdGhpcy5idXR0b24uY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJylcbiAgICB9XG5cbiAgICBjcmVhdGVTdG9yZWRMaXN0KGl0ZW0pe1xuICAgICAgICB0aGlzLmxpc3RzQXJyLnB1c2gobmV3IFRvRG9MaXN0KHRoaXMuY3JlYXRlQ29udGFpbmVyRm9yTGlzdCgpLCB7XG4gICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgICAgIHRhc2tzQXJyOiBpdGVtLnRhc2tzQXJyXG4gICAgICAgIH0pKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdG9Eb0J1aWxkZXIudHMiLCJpbXBvcnQgVG9Eb0xpc3RJdGVtIGZyb20gJy4vdG9Eb0xpc3RJdGVtJ1xuY29uc3QgZGVmYXVsdE9wdGlvbnMgPXtcbiAgICBsaXN0VGl0bGU6ICdteSBMaXN0J1xufTtcblxuY29uc3QgVGVtcGxhdGUgPSBgXG5cbjxkaXYgY2xhc3M9XCJsaXN0X19oZWFkZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwibGlzdF9faGVhZGVyX190YXJnZXRcIj48L2Rpdj5cbiAgICA8dGV4dGFyZWEgY2xhc3M9XCJsaXN0X19oZWFkZXJfX2lucHV0XCI+PC90ZXh0YXJlYT5cbiAgICA8YSBjbGFzcz1cImJ0bi1yZW1vdmUtbGlzdFwiPjwvYT5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImxpc3RfX2l0ZW1zXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbXBvc2VyX19jb250YWluZXJcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cIm5ld1RvZG9cIj5OZXcgdGFzazwvbGFiZWw+XG4gICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImxpc3RfX2l0ZW1fX2NvbXBvc2VyLXRleHRhcmVhXCIgaWQ9XCJuZXdUb2RvXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1hZGQtdGFzayBpcy1oaWRkZW5cIj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgPCEtLTxidXR0b24gY2xhc3M9XCJidG4tY2Fuc2VsLWFkZC10YXNrXCI+PC9idXR0b24+LS0+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJsaXN0X19jb250cm9sc1wiPlxuICAgIDxhICBjbGFzcz1cImJ0bi1jbGVhci1hbGxcIj5DbGVhciBBbGw8L2E+XG4gICAgPGxhYmVsIGZvcj1cIlwiPkxlZnQgdGFza3M6IDwvbGFiZWw+XG4gICAgPGRpdiBjbGFzcz1cImNvdW50ZXItZG9uZVwiPjwvZGl2PlxuPC9kaXY+XG5gO1xuXG5jb25zdCBFTlRFUl9LRVlDT0RFID0gMTM7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvTGlzdHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBsaXN0XG4gICAgICogQHBhcmFtIG9wdGlvbnNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihsaXN0LCBvcHRpb25zKXtcbiAgICAgICAgdGhpcy5saXN0PSBsaXN0O1xuICAgICAgICB0aGlzLmxpc3QuaW5uZXJIVE1MID0gVGVtcGxhdGU7XG4gICAgICAgIHRoaXMub3B0aW9uPU9iamVjdC5hc3NpZ24oe30sZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMudGl0bGVOYW1lID0gdGhpcy5vcHRpb24ubGlzdFRpdGxlO1xuICAgICAgICB0aGlzLnRpdGxlVGFyZ2V0ID0gdGhpcy5saXN0LnF1ZXJ5U2VsZWN0b3IoJy5saXN0X19oZWFkZXJfX3RhcmdldCcpO1xuICAgICAgICB0aGlzLnRpdGxlVGV4dGFyZWEgPSB0aGlzLmxpc3QucXVlcnlTZWxlY3RvcignLmxpc3RfX2hlYWRlcl9faW5wdXQnKTtcblxuICAgICAgICB0aGlzLmxpc3RJdGVtc0NvbnRhaW5lciA9IHRoaXMubGlzdC5xdWVyeVNlbGVjdG9yKCcubGlzdF9faXRlbXMnKTtcblxuICAgICAgICB0aGlzLmNvbXBvc2VyQ29udGFpbmVyID0gdGhpcy5saXN0LnF1ZXJ5U2VsZWN0b3IoJy5jb21wb3Nlcl9fY29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMuY29tcG9zZXJUZXh0YXJlYSA9dGhpcy5jb21wb3NlckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGlzdF9faXRlbV9fY29tcG9zZXItdGV4dGFyZWEnKTtcblxuICAgICAgICB0aGlzLmJ0bkFkZFRhc2sgPSB0aGlzLmNvbXBvc2VyQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5idG4tYWRkLXRhc2snKTtcbiAgICAgICAgdGhpcy5idG5DbGVhckFsbCA9IHRoaXMubGlzdC5xdWVyeVNlbGVjdG9yKCcuYnRuLWNsZWFyLWFsbCcpO1xuXG4gICAgICAgIHRoaXMuYnRuUmVtb3ZlTGlzdCA9IHRoaXMubGlzdC5xdWVyeVNlbGVjdG9yKCcuYnRuLXJlbW92ZS1saXN0Jyk7XG4gICAgICAgIHRoaXMuaWQgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLnRhc2tzQXJyID0gW107XG5cbiAgICAgICAgaWYob3B0aW9ucyl7XG4gICAgICAgICAgICB0aGlzLnRpdGxlTmFtZSA9IG9wdGlvbnMubmFtZTtcbiAgICAgICAgICAgIHRoaXMuaWQgPSBvcHRpb25zLmlkO1xuICAgICAgICAgICAgdGhpcy50YXNrc0FyciA9IG9wdGlvbnMudGFza3NBcnI7XG4gICAgICAgICAgICBpZih0aGlzLnRhc2tzQXJyKXtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFN0b3JlZFRhc2tzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRkVG9TdG9yYWdlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpe1xuICAgICAgICB0aGlzLmxpc3QuY2xhc3NMaXN0LmFkZCgnbGlzdCcpO1xuICAgICAgICB0aGlzLmxpc3Quc2V0QXR0cmlidXRlKCdpZCcsIHRoaXMuaWQpO1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudHMoKTtcbiAgICAgICAgdGhpcy5pbml0RXZlbnRzKCk7XG4gICAgfVxuXG4gICAgYWRkVG9TdG9yYWdlKCl7XG4gICAgICAgIGNvbnN0IGxpc3RDcmVhdGVkID0gbmV3IEN1c3RvbUV2ZW50KCdsaXN0Q3JlYXRlZCcsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnRpdGxlTmFtZSxcbiAgICAgICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgICAgICB0YXNrc0FycjogdGhpcy50YXNrc0FyclxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5saXN0LmRpc3BhdGNoRXZlbnQobGlzdENyZWF0ZWQpO1xuICAgIH1cblxuICAgIG9uVXBkYXRlKCl7XG4gICAgICAgIHRoaXMucmVjb3VudCgpO1xuICAgICAgICBjb25zdCBsaXN0VXBkYXRlZCA9IG5ldyBDdXN0b21FdmVudCgnbGlzdFVwZGF0ZWQnLCB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy50aXRsZU5hbWUsXG4gICAgICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgICAgICAgdGFza3NBcnI6IHRoaXMudGFza3NBcnJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGlzdC5kaXNwYXRjaEV2ZW50KGxpc3RVcGRhdGVkKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDb21wb25lbnRzKCl7XG4gICAgICAgIHRoaXMudGl0bGVUZXh0YXJlYS52YWx1ZSA9IHRoaXMub3B0aW9uLm5hbWUgPyB0aGlzLm9wdGlvbi5uYW1lIDogdGhpcy5vcHRpb24ubGlzdFRpdGxlIDtcbiAgICAgICAgdGhpcy5yZWNvdW50KCk7XG4gICAgfVxuXG4gICAgaW5pdEV2ZW50cygpe1xuICAgICAgICB0aGlzLmxpc3QuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMub25SZW1vdmUuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMudGl0bGVUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uVGl0bGVDbGljay5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy50aXRsZVRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLm9uVGV4dGFyZWFCbHVyLmJpbmQodGhpcykpO1xuICAgICAgICAvLyB0aGlzLmJ0bkNhbnNlbENvbXBvc2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZUNvbXBvc2VyLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmJ0bkFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5hZGRUYXNrLmJpbmQodGhpcykoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYnRuQ2xlYXJBbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsZWFyQWxsVGFza3MuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuYnRuUmVtb3ZlTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVtb3ZlTGlzdC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5jb21wb3NlclRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSk9PntcbiAgICAgICAgICAgaWYoZS5rZXlDb2RlID09PSBFTlRFUl9LRVlDT0RFKXtcbiAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgIHRoaXMuYWRkVGFzay5iaW5kKHRoaXMpKCk7XG4gICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29tcG9zZXJUZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsKGUpPT57XG4gICAgICAgICAgICAvL3RoaXMuYnRuQWRkVGFzay5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9zZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUV2ZW50T2ZMaXN0RWRpdGluZygpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb21wb3NlclRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLChlKT0+e1xuICAgICAgICAgICAgdGhpcy5jb21wb3NlckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgIHRoaXMuYWRkVGFzay5iaW5kKHRoaXMpKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY21wb3NlciBibHVyJylcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGlzdEl0ZW1zQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Rhc2tUb2dnbGVkJywgKGUpPT57XG4gICAgICAgICAgICB0aGlzLm9uVXBkYXRlKGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5saXN0SXRlbXNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZGVsZXRlJywgKGUpPT57XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZVRhc2soZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxpc3RJdGVtc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCduYW1lQ2hhbmdlZCcsIChlKT0+e1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VUYXNrTmFtZShlKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY3JlYXRlRXZlbnRPZkxpc3RFZGl0aW5nKCl7XG4gICAgICAgIGNvbnN0IGxpc3RFZGl0aW5nID0gbmV3IEN1c3RvbUV2ZW50KCdsaXN0RWRpdGluZycsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBkZXRhaWw6IHt9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxpc3QuZGlzcGF0Y2hFdmVudChsaXN0RWRpdGluZyk7XG5cbiAgICB9XG5cbiAgICBvblRpdGxlQ2xpY2soKXtcbiAgICAgICAgdGhpcy50aXRsZVRhcmdldC5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcbiAgICAgICAgdGhpcy50aXRsZVRleHRhcmVhLmZvY3VzKCk7XG4gICAgICAgIHRoaXMudGl0bGVUZXh0YXJlYS5zZWxlY3QoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVFdmVudE9mTGlzdEVkaXRpbmcoKTtcbiAgICB9XG5cbiAgICBvblRleHRhcmVhQmx1cigpe1xuICAgICAgICB0aGlzLnRpdGxlTmFtZSA9IHRoaXMudGl0bGVUZXh0YXJlYS52YWx1ZTtcbiAgICAgICAgdGhpcy50aXRsZVRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcbiAgICAgICAgY29uc3QgdXBkYXRlVGl0bGUgPSBuZXcgQ3VzdG9tRXZlbnQoJ3VwZGF0ZScse1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgIFRvRG9MaXN0OiB0aGlzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxpc3QuZGlzcGF0Y2hFdmVudCh1cGRhdGVUaXRsZSk7XG4gICAgICAgIHRoaXMub25VcGRhdGUoKTtcbiAgICB9XG5cbiAgICBvbkNvbXBvc2VyTGlua0NsaWNrKCl7XG4gICAgICAgIHRoaXMuY29tcG9zZXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJyk7XG4gICAgICAgIHRoaXMuY29tcG9zZXJUZXh0YXJlYS5mb2N1cygpO1xuICAgIH1cbiAgICBvbkNvbXBvc2VyTGFiZWxDbGljayhlKXtcbiAgICAgICAgY29uc29sZS5sb2codGhpcylcbiAgICB9XG5cbiAgICBhZGRUYXNrKCl7XG4gICAgICAgIGlmKHRoaXMuY29tcG9zZXJUZXh0YXJlYS52YWx1ZSl7XG4gICAgICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ2xpc3RfX2l0ZW0nKTtcbiAgICAgICAgICAgIHRoaXMubGlzdEl0ZW1zQ29udGFpbmVyLmluc2VydEJlZm9yZSh0YXNrLCB0aGlzLmxpc3RJdGVtc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY29tcG9zZXJfX2NvbnRhaW5lcicpKTtcbiAgICAgICAgICAgIHRoaXMudGFza3NBcnIucHVzaChuZXcgVG9Eb0xpc3RJdGVtKHRhc2ssIHRoaXMuY29tcG9zZXJUZXh0YXJlYS52YWx1ZSkpO1xuICAgICAgICAgICAgdGhpcy5vblVwZGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5jb21wb3NlclRleHRhcmVhLnZhbHVlID0gXCJcIjtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgLy9hbGVydCgnVGFzayBmaWVsZCBpcyBlbXB0eScpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRTdG9yZWRUYXNrcygpe1xuICAgICAgICB0aGlzLnRhc2tzQXJyID0gdGhpcy50YXNrc0Fyci5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgnbGlzdF9faXRlbScpO1xuICAgICAgICAgICAgdGhpcy5saXN0SXRlbXNDb250YWluZXIuaW5zZXJ0QmVmb3JlKHRhc2ssIHRoaXMubGlzdEl0ZW1zQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jb21wb3Nlcl9fY29udGFpbmVyJykpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBUb0RvTGlzdEl0ZW0odGFzaywgaXRlbS5uYW1lLCB7XG4gICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgaXNEb25lOiBpdGVtLl9pc0RvbmVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkZWxldGVUYXNrKGUpIHtcbiAgICAgICAgY29uc3QgdGFza0lkID0gZS5kZXRhaWwuaWQ7XG4gICAgICAgIHRoaXMudGFza3NBcnIgPSB0aGlzLnRhc2tzQXJyLmZpbHRlcigoZWxlbSk9PntcbiAgICAgICAgICAgIHJldHVybiBlbGVtLmlkICE9PSB0YXNrSWQ7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9uVXBkYXRlKCk7XG4gICAgfVxuXG4gICAgY2hhbmdlVGFza05hbWUoZSl7XG4gICAgICAgdGhpcy5vblVwZGF0ZSgpO1xuICAgIH1cblxuICAgIGNsZWFyQWxsVGFza3MoKXtcbiAgICAgICAgY29uc3QgVGFza05vZGVzID0gdGhpcy5saXN0SXRlbXNDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmxpc3RfX2l0ZW0nKTtcbiAgICAgICAgVGFza05vZGVzLmZvckVhY2goKGVsZW0pID0+e1xuICAgICAgICAgICAgZWxlbS5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudGFza3NBcnIgPSBbXTtcbiAgICAgICAgdGhpcy5vblVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHJlbW92ZUxpc3QoKXtcbiAgICAgICAgY29uc3QgZXZlbnRSZW1vdmVMaXN0ID0gbmV3IEN1c3RvbUV2ZW50KCdsaXN0UmVtb3ZlZCcsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBkZXRhaWw6IHRoaXMuaWRcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGlzdC5kaXNwYXRjaEV2ZW50KGV2ZW50UmVtb3ZlTGlzdCk7XG4gICAgICAgIHRoaXMubGlzdC5jbGFzc0xpc3QuYWRkKCdpcy1kZWxldGVkJyk7XG4gICAgfVxuICAgIG9uUmVtb3ZlKGUpe1xuICAgICAgICBpZihlLnRhcmdldCA9PSB0aGlzLmxpc3QpXG4gICAgICAgIHRoaXMubGlzdC5yZW1vdmUoKTtcbiAgICB9XG4gICAgcmVjb3VudCgpe1xuICAgICAgICB0aGlzLmxpc3RcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY291bnRlci1kb25lJylcbiAgICAgICAgICAgIC5pbm5lckhUTUwgPSB0aGlzLnRhc2tzQXJyLmZpbHRlcih0b2RvTGlzdEl0ZW0gPT4gIXRvZG9MaXN0SXRlbS5pc0RvbmUpLmxlbmd0aDtcbiAgICB9XG59XG4vLyBleHBvcnQgdmFyIF9fdXNlRGVmYXVsdCA9IHRydWU7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy90b2RvbGlzdC50cyIsImNvbnN0IGxpc3RJdGVtVGVtcGxhdGUgPSBgXG48ZGl2IGNsYXNzPVwiY2hlY2tib3hcIj48L2Rpdj5cbjxkaXYgY2xhc3M9XCJ0YXNrLW5hbWVfX2NvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrLW5hbWVfX3RhcmdldFwiPjwvZGl2PlxuICAgIDx0ZXh0YXJlYSBjbGFzcz1cInRhc2stbmFtZV9faW5wdXRcIj48L3RleHRhcmVhPlxuPC9kaXY+XG48YSBjbGFzcz1cImJ0bi1yZW1vdmVcIj48L2E+XG5gO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9Eb0xpc3RJdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihpdGVtLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLm5hbWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5saXN0SXRlbSA9IGl0ZW07XG4gICAgICAgIHRoaXMubGlzdEl0ZW0uaW5uZXJIVE1MID0gbGlzdEl0ZW1UZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5jaGVja2JveCA9IHRoaXMubGlzdEl0ZW0ucXVlcnlTZWxlY3RvcignLmNoZWNrYm94Jyk7XG4gICAgICAgIHRoaXMubmFtZVRhcmdldCA9IHRoaXMubGlzdEl0ZW0ucXVlcnlTZWxlY3RvcignLnRhc2stbmFtZV9fdGFyZ2V0Jyk7XG4gICAgICAgIHRoaXMubmFtZVRleHRhcmVhID0gdGhpcy5saXN0SXRlbS5xdWVyeVNlbGVjdG9yKCcudGFzay1uYW1lX19pbnB1dCcpO1xuICAgICAgICB0aGlzLmJ0blJlbW92ZSA9IHRoaXMubGlzdEl0ZW0ucXVlcnlTZWxlY3RvcignLmJ0bi1yZW1vdmUnKTtcbiAgICAgICAgdGhpcy5faXNEb25lID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2lzRGVsZXRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlkID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XG4gICAgICAgIGlmKG9wdGlvbnMpe1xuICAgICAgICAgICAgdGhpcy5pZCA9IG9wdGlvbnMuaWQ7XG4gICAgICAgICAgICB0aGlzLl9pc0RvbmUgPSBvcHRpb25zLmlzRG9uZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gICAgZ2V0IGlzRG9uZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5faXNEb25lO1xuICAgIH1cbiAgICBzZXQgaXNEb25lKHZhbHVlKXtcbiAgICAgICAgaWYodmFsdWUpe1xuICAgICAgICAgICAgdGhpcy5faXNEb25lID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGVUYXNrKClcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5faXNEb25lID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnVuZG9Db21wbGV0ZVRhc2soKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvblRvZ2dsZUl0ZW0gPSBuZXcgQ3VzdG9tRXZlbnQoJ3Rhc2tUb2dnbGVkJywge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGRldGFpbDogdGhpc1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5saXN0SXRlbS5kaXNwYXRjaEV2ZW50KG9uVG9nZ2xlSXRlbSk7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuaW5pdERvTUVsZW1lbnRzKCk7XG4gICAgICAgIHRoaXMuaW5pdEV2ZW50cygpO1xuICAgIH1cblxuICAgIGluaXREb01FbGVtZW50cygpe1xuICAgICAgICB0aGlzLmxpc3RJdGVtLnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLmlkKTtcbiAgICAgICAgdGhpcy5uYW1lVGV4dGFyZWEudmFsdWUgPSB0aGlzLm5hbWU7XG4gICAgICAgIHRoaXMuYnRuUmVtb3ZlLmNsYXNzTGlzdC5hZGQoJ2J0bi1yZW1vdmUnKTtcbiAgICAgICAgaWYodGhpcy5pc0RvbmUpe1xuICAgICAgICAgICAgdGhpcy5saXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdpcy1kb25lJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0RXZlbnRzKCl7XG4gICAgICAgIHRoaXMuYnRuUmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kZWxldGVJdGVtLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgICAgIHRoaXMuaXNEb25lPSF0aGlzLmlzRG9uZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5uYW1lVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5lZGl0SXRlbS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5uYW1lVGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMucmVuYW1lVGFzay5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBkZWxldGVJdGVtKCl7XG4gICAgICAgIGNvbnN0IGV2ZW50RGVsZXRlID0gbmV3IEN1c3RvbUV2ZW50KCdkZWxldGUnLCB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgZGV0YWlsOiB0aGlzXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxpc3RJdGVtLmRpc3BhdGNoRXZlbnQoZXZlbnREZWxldGUpO1xuICAgICAgICB0aGlzLmxpc3RJdGVtLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGNvbXBsZXRlVGFzaygpe1xuICAgICAgICB0aGlzLmxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2lzLWRvbmUnKTtcbiAgICB9XG5cbiAgICB1bmRvQ29tcGxldGVUYXNrKCl7XG4gICAgICAgIHRoaXMubGlzdEl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtZG9uZScpO1xuICAgIH1cblxuICAgIGVkaXRJdGVtKGUpe1xuICAgICAgICB0aGlzLm5hbWVUZXh0YXJlYS5mb2N1cygpO1xuICAgICAgICB0aGlzLm5hbWVUYXJnZXQuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgcmVuYW1lVGFzayhlKXtcbiAgICAgICAgY29uc3QgcHJldmlvdXNOYW1lID0gdGhpcy5uYW1lO1xuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLm5hbWVUZXh0YXJlYS52YWx1ZTtcbiAgICAgICAgdGhpcy5uYW1lVGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xuICAgICAgICBjb25zdCBuYW1lQ2hhbmdlZCA9IG5ldyBDdXN0b21FdmVudCgnbmFtZUNoYW5nZWQnLCB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgbGlzdEl0ZW06IHRoaXMsXG4gICAgICAgICAgICAgICAgcHJldjogcHJldmlvdXNOYW1lLFxuICAgICAgICAgICAgICAgIHVwZGF0ZWQ6IHRoaXMubmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5saXN0SXRlbS5kaXNwYXRjaEV2ZW50KG5hbWVDaGFuZ2VkKTtcbiAgICB9XG5cbn1cbi8vIGV4cG9ydCB2YXIgX191c2VEZWZhdWx0ID0gdHJ1ZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdG9Eb0xpc3RJdGVtLnRzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7XG4gICAgY29uc3RydWN0b3Ioc3RvcmFnZUtleSkge1xuICAgICAgICB0aGlzLnN0b3JhZ2VLZXkgPSBzdG9yYWdlS2V5O1xuICAgIH1cblxuICAgIHBlcnNpc3RJdGVtKGl0ZW0pIHtcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IHRoaXMuZ2V0U3RvcmFnZSgpO1xuICAgICAgICBzdG9yYWdlLnB1c2goaXRlbSk7XG4gICAgICAgIHRoaXMuc2V0U3RvcmFnZShzdG9yYWdlKTtcbiAgICB9XG5cbiAgICB1cGRhdGVJdGVtKGxpc3Qpe1xuICAgICAgICBjb25zdCB0b2RvcyA9IHRoaXMuZ2V0U3RvcmFnZSgpO1xuICAgICAgICBjb25zdCBpbmRleCA9IHRvZG9zLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaWQgPT09IGxpc3QuaWQpO1xuICAgICAgICB0b2Rvc1tpbmRleF0gPSBsaXN0O1xuICAgICAgICB0aGlzLnNldFN0b3JhZ2UodG9kb3MpO1xuICAgIH1cblxuICAgIGZvcmdldEl0ZW0oaXRlbUlkKSB7XG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSB0aGlzLmdldFN0b3JhZ2UoKS5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSBpdGVtSWQpO1xuICAgICAgICB0aGlzLnNldFN0b3JhZ2Uoc3RvcmFnZSk7XG4gICAgfVxuXG4gICAgZ2V0U3RvcmFnZSgpIHtcbiAgICAgICAgY29uc3QgdG9kb3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnN0b3JhZ2VLZXkpO1xuICAgICAgICByZXR1cm4gdG9kb3MgPyBKU09OLnBhcnNlKHRvZG9zKSA6IFtdO1xuICAgIH1cblxuICAgIHNldFN0b3JhZ2Uoc3RvcmFnZSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnN0b3JhZ2VLZXksIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2UpKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvc3RvcmFnZS50cyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY3NzL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==