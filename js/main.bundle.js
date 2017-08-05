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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmJkMzJkYmE5NGIyMGEyMWJkZDciLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NjcmlwdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdG9Eb0J1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RvZG9saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9qcy90b0RvTGlzdEl0ZW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzdEQSwyQ0FBd0M7QUFDeEMsdUJBQTJCO0FBQzNCLElBQUksd0JBQVcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDbEQsc0NBQXNDO0FBQ3RDLG1EQUFtRDtBQUNuRCxrRkFBa0Y7QUFDbEYsNkNBQTZDO0FBQzdDLHFHQUFxRztBQUNyRyw2QkFBNkI7QUFDN0Isd0NBQXdDO0FBQ3hDLHVFQUF1RTtBQUN2RSxjQUFjO0FBQ2QsVUFBVTtBQUNWLElBQUk7QUFDSiw4QkFBOEI7QUFDOUI7SUFDSSxZQUFZLENBQUMsaUJBQWlCLENBQUMsVUFBUyxNQUFNO1FBQzFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFTLFlBQVk7Z0JBQ3BELFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRTtvQkFDOUMsSUFBSSxFQUFFLGFBQWE7b0JBQ25CLElBQUksRUFBRSw2QkFBNkI7b0JBQ25DLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztvQkFDNUMsR0FBRyxFQUFFLGtCQUFrQjtpQkFDMUIsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBQ0Qsc0JBQXNCOzs7Ozs7Ozs7O0FDN0J0Qix3Q0FBa0M7QUFDbEMsdUNBQWdDO0FBQ2hDLElBQU0sUUFBUSxHQUFHLGlGQUdoQixDQUFDO0FBQ0Y7SUFDSSxxQkFBWSxLQUFLO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLG9CQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVaLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFBQSxJQUFJLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN0QixDQUFDO0lBQ0wsQ0FBQztJQUVELHdDQUFrQixHQUFsQixVQUFtQixXQUFXO1FBQTlCLGlCQUlDO1FBSEcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxjQUFJO1lBQ3BCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwwQkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxnQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQsZ0NBQVUsR0FBVixVQUFXLENBQUM7UUFDUixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxzQ0FBZ0IsR0FBaEIsVUFBaUIsQ0FBQztRQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsMkNBQXFCLEdBQXJCLFVBQXNCLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCw0Q0FBc0IsR0FBdEI7UUFDSSxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9ELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELGdDQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLHFCQUFRLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCxnQ0FBVSxHQUFWO1FBQ0ksbURBQW1EO1FBQ25ELGdEQUFnRDtRQUNoRCxJQUFJO0lBQ1IsQ0FBQztJQUVELGdDQUFVLEdBQVY7UUFDSSx3Q0FBd0M7SUFDNUMsQ0FBQztJQUVELHNDQUFnQixHQUFoQixVQUFpQixJQUFJO1FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUkscUJBQVEsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsRUFBRTtZQUMzRCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDMUIsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7OztBQ2xGRCw0Q0FBeUM7QUFDekMsSUFBTSxjQUFjLEdBQUU7SUFDbEIsU0FBUyxFQUFFLFNBQVM7Q0FDdkIsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFHLHFzQkFvQmhCLENBQUM7QUFFRixJQUFNLGFBQWEsR0FBRyxFQUFFLENBQUM7QUFDekI7SUFDSTs7OztPQUlHO0lBQ0gsa0JBQVksSUFBSSxFQUFFLE9BQU87UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRSxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUVyRSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFbEUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLGdCQUFnQixHQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUU5RixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRTdELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUVuQixFQUFFLEVBQUMsT0FBTyxDQUFDLEVBQUM7WUFDUixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDOUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUNqQyxFQUFFLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDO2dCQUNkLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUMxQixDQUFDO1FBQ0wsQ0FBQztRQUFBLElBQUksQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hCLENBQUM7UUFDRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELHVCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFDSSxJQUFNLFdBQVcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxhQUFhLEVBQUU7WUFDL0MsT0FBTyxFQUFFLElBQUk7WUFDYixNQUFNLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTO2dCQUNwQixFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7Z0JBQ1gsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQzFCO1NBQ0osQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELDJCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixJQUFNLFdBQVcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxhQUFhLEVBQUU7WUFDL0MsT0FBTyxFQUFFLElBQUk7WUFDYixNQUFNLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTO2dCQUNwQixFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7Z0JBQ1gsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQzFCO1NBQ0osQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELG1DQUFnQixHQUFoQjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFFO1FBQ3hGLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsNkJBQVUsR0FBVjtRQUFBLGlCQXFDQztRQXBDRyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM1RSxtRkFBbUY7UUFDbkYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQyxDQUFDO1lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbkIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLEVBQUUsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQUMsQ0FBQztZQUNqRCxFQUFFLEVBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxhQUFhLENBQUMsRUFBQztnQkFDNUIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUNuQixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsRUFBRSxDQUFDO1lBQzlCLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUMsVUFBQyxDQUFDO1lBQzdDLGdEQUFnRDtZQUNoRCxLQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNsRCxLQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUMsVUFBQyxDQUFDO1lBQzVDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3JELEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxFQUFFLENBQUM7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLFVBQUMsQ0FBQztZQUN0RCxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFDLENBQUM7WUFDakQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsVUFBQyxDQUFDO1lBQ3RELEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNELDJDQUF3QixHQUF4QjtRQUNJLElBQU0sV0FBVyxHQUFHLElBQUksV0FBVyxDQUFDLGFBQWEsRUFBRTtZQUMvQyxPQUFPLEVBQUUsSUFBSTtZQUNiLE1BQU0sRUFBRSxFQUFFO1NBQ2IsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFekMsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxpQ0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUMxQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDL0MsSUFBTSxXQUFXLEdBQUcsSUFBSSxXQUFXLENBQUMsUUFBUSxFQUFDO1lBQ3pDLE9BQU8sRUFBRSxJQUFJO1lBQ2IsTUFBTSxFQUFFO2dCQUNKLFFBQVEsRUFBRSxJQUFJO2FBQ2pCO1NBQ0osQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxzQ0FBbUIsR0FBbkI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUNELHVDQUFvQixHQUFwQixVQUFxQixDQUFDO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRCwwQkFBTyxHQUFQO1FBQ0ksRUFBRSxFQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBQztZQUM1QixJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO1lBQzFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUkseUJBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDeEUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3JDLENBQUM7UUFBQSxJQUFJLENBQUMsQ0FBQztZQUNILDhCQUE4QjtRQUNsQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGlDQUFjLEdBQWQ7UUFBQSxpQkFVQztRQVRHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJO1lBQ25DLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDakMsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7WUFDMUcsTUFBTSxDQUFDLElBQUkseUJBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDckMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO2dCQUNYLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTzthQUN2QixDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw2QkFBVSxHQUFWLFVBQVcsQ0FBQztRQUNSLElBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJO1lBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLE1BQU0sQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsaUNBQWMsR0FBZCxVQUFlLENBQUM7UUFDYixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELGdDQUFhLEdBQWI7UUFDSSxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDMUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7WUFDbkIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCw2QkFBVSxHQUFWO1FBQ0ksSUFBTSxlQUFlLEdBQUcsSUFBSSxXQUFXLENBQUMsYUFBYSxFQUFFO1lBQ25ELE9BQU8sRUFBRSxJQUFJO1lBQ2IsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFO1NBQ2xCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBQ0QsMkJBQVEsR0FBUixVQUFTLENBQUM7UUFDTixFQUFFLEVBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUNELDBCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsSUFBSTthQUNKLGFBQWEsQ0FBQyxlQUFlLENBQUM7YUFDOUIsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLHNCQUFZLElBQUksUUFBQyxZQUFZLENBQUMsTUFBTSxFQUFwQixDQUFvQixDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ3ZGLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQzs7QUFDRCxrQ0FBa0M7Ozs7Ozs7Ozs7QUNwUGxDLElBQU0sZ0JBQWdCLEdBQUcsbU5BT3hCLENBQUM7QUFDRjtJQUNJLHNCQUFZLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTztRQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLEVBQUUsRUFBQyxPQUFPLENBQUMsRUFBQztZQUNSLElBQUksQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDbEMsQ0FBQztRQUNELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBQ0Qsc0JBQUksZ0NBQU07YUFBVjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7YUFDRCxVQUFXLEtBQUs7WUFDWixFQUFFLEVBQUMsS0FBSyxDQUFDLEVBQUM7Z0JBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDdkIsQ0FBQztZQUFBLElBQUksQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUNyQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUM1QixDQUFDO1lBQ0QsSUFBTSxZQUFZLEdBQUcsSUFBSSxXQUFXLENBQUMsYUFBYSxFQUFFO2dCQUNoRCxPQUFPLEVBQUUsSUFBSTtnQkFDYixNQUFNLEVBQUUsSUFBSTthQUNmLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzlDLENBQUM7OztPQWRBO0lBZUQsMkJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELHNDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzNDLEVBQUUsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUM7WUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0MsQ0FBQztJQUNMLENBQUM7SUFFRCxpQ0FBVSxHQUFWO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1lBQ3BDLEtBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxLQUFJLENBQUMsTUFBTTtRQUM1QixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQsaUNBQVUsR0FBVjtRQUNJLElBQU0sV0FBVyxHQUFHLElBQUksV0FBVyxDQUFDLFFBQVEsRUFBRTtZQUMxQyxPQUFPLEVBQUUsSUFBSTtZQUNiLE1BQU0sRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsbUNBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsdUNBQWdCLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCwrQkFBUSxHQUFSLFVBQVMsQ0FBQztRQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxpQ0FBVSxHQUFWLFVBQVcsQ0FBQztRQUNSLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDOUMsSUFBTSxXQUFXLEdBQUcsSUFBSSxXQUFXLENBQUMsYUFBYSxFQUFFO1lBQy9DLE9BQU8sRUFBRSxJQUFJO1lBQ2IsTUFBTSxFQUFFO2dCQUNKLFFBQVEsRUFBRSxJQUFJO2dCQUNkLElBQUksRUFBRSxZQUFZO2dCQUNsQixPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUk7YUFDckI7U0FDSixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUwsbUJBQUM7QUFBRCxDQUFDOztBQUNELGtDQUFrQzs7Ozs7Ozs7OztBQ3pHbEM7SUFDSSxpQkFBWSxVQUFVO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQ2pDLENBQUM7SUFFRCw2QkFBVyxHQUFYLFVBQVksSUFBSTtRQUNaLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELDRCQUFVLEdBQVYsVUFBVyxJQUFJO1FBQ1gsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2hDLElBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsY0FBSSxJQUFJLFdBQUksQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUUsRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO1FBQzNELEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsNEJBQVUsR0FBVixVQUFXLE1BQU07UUFDYixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLGNBQUksSUFBSSxXQUFJLENBQUMsRUFBRSxLQUFLLE1BQU0sRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELDRCQUFVLEdBQVY7UUFDSSxJQUFNLEtBQUssR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwRCxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFRCw0QkFBVSxHQUFWLFVBQVcsT0FBTztRQUNkLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDOzs7Ozs7OztBQy9CRCx5QyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDJiZDMyZGJhOTRiMjBhMjFiZGQ3IiwiaW1wb3J0IFRvRG9CdWlsZGVyIGZyb20gJy4vdG9Eb0J1aWxkZXInO1xuaW1wb3J0ICcuLi9jc3Mvc3R5bGUuc2Nzcyc7XG5uZXcgVG9Eb0J1aWxkZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkJykpO1xuLy8gaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbi8vICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3Rlcignc3cuanMnKS50aGVuKGZ1bmN0aW9uKHJlZ2lzdHJhdGlvbikge1xuLy8gICAgICAgICAgICAgLy8gUmVnaXN0cmF0aW9uIHdhcyBzdWNjZXNzZnVsXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCB3aXRoIHNjb3BlOiAnLCByZWdpc3RyYXRpb24uc2NvcGUpO1xuLy8gICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbi8vICAgICAgICAgICAgIC8vIHJlZ2lzdHJhdGlvbiBmYWlsZWQgOihcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6ICcsIGVycik7XG4vLyAgICAgICAgIH0pO1xuLy8gICAgIH0pO1xuLy8gfVxuLy8gY29uc29sZS5sb2coJ3R5cGUgc2NyaXB0Jyk7XG5mdW5jdGlvbiBzaG93Tm90aWZpY2F0aW9uKCkge1xuICAgIE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gJ2dyYW50ZWQnKSB7XG4gICAgICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWFkeS50aGVuKGZ1bmN0aW9uKHJlZ2lzdHJhdGlvbikge1xuICAgICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbi5zaG93Tm90aWZpY2F0aW9uKCdWaWJyYXRpb24gU2FtcGxlJywge1xuICAgICAgICAgICAgICAgICAgICBib2R5OiAnQnV6eiEgQnV6eiEnLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnL2FuZHJvaWQtY2hyb21lLTUxMng1MTIucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgdmlicmF0ZTogWzIwMCwgMTAwLCAyMDAsIDEwMCwgMjAwLCAxMDAsIDIwMF0sXG4gICAgICAgICAgICAgICAgICAgIHRhZzogJ3ZpYnJhdGlvbi1zYW1wbGUnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuLy8gc2hvd05vdGlmaWNhdGlvbigpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3NjcmlwdC50cyIsImltcG9ydCBUb0RvTGlzdCBmcm9tICcuL3RvZG9saXN0JztcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vc3RvcmFnZSc7XG5jb25zdCB0ZW1wbGF0ZSA9IGBcbjxidXR0b24gaWQ9XCJ0b2RvQnVpbGRlclwiPjwvYnV0dG9uPlxuPGRpdiBjbGFzcz1cInRvZG8tbGlzdC1ib2FyZFwiPjwvZGl2PlxuYDtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvRG9CdWlsZGVye1xuICAgIGNvbnN0cnVjdG9yKGJvYXJkKSB7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gbmV3IFN0b3JhZ2UoJ3RvZG8tbGlzdHMnKTtcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5zdG9yYWdlLmdldFN0b3JhZ2UoKTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlSW5pdGlhbExpc3RzKHRoaXMuZGF0YSk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTGlzdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlSW5pdGlhbExpc3RzKGluaXRpYWxEYXRhKXtcbiAgICAgICAgaW5pdGlhbERhdGEuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU3RvcmVkTGlzdChpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdCgpe1xuICAgICAgICB0aGlzLmJvYXJkLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICAgICAgICB0aGlzLmJ1dHRvbiA9IHRoaXMuYm9hcmQucXVlcnlTZWxlY3RvcignI3RvZG9CdWlsZGVyJyk7XG4gICAgICAgIHRoaXMubGlzdHNBcnIgPSBbXTtcbiAgICAgICAgdGhpcy5pbml0RXZlbnRzKCk7XG4gICAgfVxuXG4gICAgaW5pdEV2ZW50cygpe1xuICAgICAgICB0aGlzLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY3JlYXRlTGlzdC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5ib2FyZC5hZGRFdmVudExpc3RlbmVyKCdsaXN0VXBkYXRlZCcsIHRoaXMudXBkYXRlTGlzdC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5ib2FyZC5hZGRFdmVudExpc3RlbmVyKCdsaXN0Q3JlYXRlZCcsIHRoaXMuYWRkTGlzdFRvU3RvcmFnZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5ib2FyZC5hZGRFdmVudExpc3RlbmVyKCdsaXN0UmVtb3ZlZCcsIHRoaXMucmVtb3ZlTGlzdEZyb21TdG9yYWdlLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2xpc3RFZGl0aW5nJywgdGhpcy5oaWRlQnRuQWRkLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHVwZGF0ZUxpc3QoZSl7XG4gICAgICAgIHRoaXMuc3RvcmFnZS51cGRhdGVJdGVtKGUuZGV0YWlsKTtcbiAgICAgICAgdGhpcy5zaG93QnRuQWRkKCk7XG4gICAgfVxuXG4gICAgYWRkTGlzdFRvU3RvcmFnZShlKXtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnBlcnNpc3RJdGVtKGUuZGV0YWlsKTtcbiAgICB9XG5cbiAgICByZW1vdmVMaXN0RnJvbVN0b3JhZ2UoZSl7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5mb3JnZXRJdGVtKGUuZGV0YWlsKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDb250YWluZXJGb3JMaXN0KCl7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGlzdC5jbGFzc0xpc3QuYWRkKCd0b2RvLWxpc3QnLCAnbWF0LWVsZXZhdGlvbi0yZHAnKTtcbiAgICAgICAgdGhpcy5ib2FyZC5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0LWJvYXJkJykuYXBwZW5kQ2hpbGQobGlzdCk7XG4gICAgICAgIHJldHVybiBsaXN0O1xuICAgIH1cblxuICAgIGNyZWF0ZUxpc3QoKSB7XG4gICAgICAgIHRoaXMubGlzdHNBcnIucHVzaChuZXcgVG9Eb0xpc3QodGhpcy5jcmVhdGVDb250YWluZXJGb3JMaXN0KCkpKTtcbiAgICB9XG5cbiAgICBzaG93QnRuQWRkKCl7XG4gICAgICAgIC8vIGlmKHRoaXMuYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnaXMtaGlkZGVuJykpe1xuICAgICAgICAvLyAgICAgdGhpcy5idXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJylcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIGhpZGVCdG5BZGQoKXtcbiAgICAgICAgLy90aGlzLmJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKVxuICAgIH1cblxuICAgIGNyZWF0ZVN0b3JlZExpc3QoaXRlbSl7XG4gICAgICAgIHRoaXMubGlzdHNBcnIucHVzaChuZXcgVG9Eb0xpc3QodGhpcy5jcmVhdGVDb250YWluZXJGb3JMaXN0KCksIHtcbiAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgICAgdGFza3NBcnI6IGl0ZW0udGFza3NBcnJcbiAgICAgICAgfSkpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy90b0RvQnVpbGRlci50cyIsImltcG9ydCBUb0RvTGlzdEl0ZW0gZnJvbSAnLi90b0RvTGlzdEl0ZW0nXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9e1xuICAgIGxpc3RUaXRsZTogJ215IExpc3QnXG59O1xuXG5jb25zdCBUZW1wbGF0ZSA9IGBcblxuPGRpdiBjbGFzcz1cImxpc3RfX2hlYWRlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJsaXN0X19oZWFkZXJfX3RhcmdldFwiPjwvZGl2PlxuICAgIDx0ZXh0YXJlYSBjbGFzcz1cImxpc3RfX2hlYWRlcl9faW5wdXRcIj48L3RleHRhcmVhPlxuICAgIDxhIGNsYXNzPVwiYnRuLXJlbW92ZS1saXN0XCI+PC9hPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibGlzdF9faXRlbXNcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29tcG9zZXJfX2NvbnRhaW5lclwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwibmV3VG9kb1wiPk5ldyB0YXNrPC9sYWJlbD5cbiAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwibGlzdF9faXRlbV9fY29tcG9zZXItdGV4dGFyZWFcIiBpZD1cIm5ld1RvZG9cIj48L3RleHRhcmVhPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLWFkZC10YXNrIGlzLWhpZGRlblwiPkFkZDwvYnV0dG9uPlxuICAgICAgICA8IS0tPGJ1dHRvbiBjbGFzcz1cImJ0bi1jYW5zZWwtYWRkLXRhc2tcIj48L2J1dHRvbj4tLT5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImxpc3RfX2NvbnRyb2xzXCI+XG4gICAgPGEgIGNsYXNzPVwiYnRuLWNsZWFyLWFsbFwiPkNsZWFyIEFsbDwvYT5cbiAgICA8bGFiZWwgZm9yPVwiXCI+TGVmdCB0YXNrczogPC9sYWJlbD5cbiAgICA8ZGl2IGNsYXNzPVwiY291bnRlci1kb25lXCI+PC9kaXY+XG48L2Rpdj5cbmA7XG5cbmNvbnN0IEVOVEVSX0tFWUNPREUgPSAxMztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvRG9MaXN0e1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGxpc3RcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGxpc3QsIG9wdGlvbnMpe1xuICAgICAgICB0aGlzLmxpc3Q9IGxpc3Q7XG4gICAgICAgIHRoaXMubGlzdC5pbm5lckhUTUwgPSBUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5vcHRpb249T2JqZWN0LmFzc2lnbih7fSxkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy50aXRsZU5hbWUgPSB0aGlzLm9wdGlvbi5saXN0VGl0bGU7XG4gICAgICAgIHRoaXMudGl0bGVUYXJnZXQgPSB0aGlzLmxpc3QucXVlcnlTZWxlY3RvcignLmxpc3RfX2hlYWRlcl9fdGFyZ2V0Jyk7XG4gICAgICAgIHRoaXMudGl0bGVUZXh0YXJlYSA9IHRoaXMubGlzdC5xdWVyeVNlbGVjdG9yKCcubGlzdF9faGVhZGVyX19pbnB1dCcpO1xuXG4gICAgICAgIHRoaXMubGlzdEl0ZW1zQ29udGFpbmVyID0gdGhpcy5saXN0LnF1ZXJ5U2VsZWN0b3IoJy5saXN0X19pdGVtcycpO1xuXG4gICAgICAgIHRoaXMuY29tcG9zZXJDb250YWluZXIgPSB0aGlzLmxpc3QucXVlcnlTZWxlY3RvcignLmNvbXBvc2VyX19jb250YWluZXInKTtcbiAgICAgICAgdGhpcy5jb21wb3NlclRleHRhcmVhID10aGlzLmNvbXBvc2VyQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5saXN0X19pdGVtX19jb21wb3Nlci10ZXh0YXJlYScpO1xuXG4gICAgICAgIHRoaXMuYnRuQWRkVGFzayA9IHRoaXMuY29tcG9zZXJDb250YWluZXIucXVlcnlTZWxlY3RvcignLmJ0bi1hZGQtdGFzaycpO1xuICAgICAgICB0aGlzLmJ0bkNsZWFyQWxsID0gdGhpcy5saXN0LnF1ZXJ5U2VsZWN0b3IoJy5idG4tY2xlYXItYWxsJyk7XG5cbiAgICAgICAgdGhpcy5idG5SZW1vdmVMaXN0ID0gdGhpcy5saXN0LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcmVtb3ZlLWxpc3QnKTtcbiAgICAgICAgdGhpcy5pZCA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMudGFza3NBcnIgPSBbXTtcblxuICAgICAgICBpZihvcHRpb25zKXtcbiAgICAgICAgICAgIHRoaXMudGl0bGVOYW1lID0gb3B0aW9ucy5uYW1lO1xuICAgICAgICAgICAgdGhpcy5pZCA9IG9wdGlvbnMuaWQ7XG4gICAgICAgICAgICB0aGlzLnRhc2tzQXJyID0gb3B0aW9ucy50YXNrc0FycjtcbiAgICAgICAgICAgIGlmKHRoaXMudGFza3NBcnIpe1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkU3RvcmVkVGFza3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGRUb1N0b3JhZ2UoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBpbml0KCl7XG4gICAgICAgIHRoaXMubGlzdC5jbGFzc0xpc3QuYWRkKCdsaXN0Jyk7XG4gICAgICAgIHRoaXMubGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy5pZCk7XG4gICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50cygpO1xuICAgICAgICB0aGlzLmluaXRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBhZGRUb1N0b3JhZ2UoKXtcbiAgICAgICAgY29uc3QgbGlzdENyZWF0ZWQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2xpc3RDcmVhdGVkJywge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMudGl0bGVOYW1lLFxuICAgICAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgICAgIHRhc2tzQXJyOiB0aGlzLnRhc2tzQXJyXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxpc3QuZGlzcGF0Y2hFdmVudChsaXN0Q3JlYXRlZCk7XG4gICAgfVxuXG4gICAgb25VcGRhdGUoKXtcbiAgICAgICAgdGhpcy5yZWNvdW50KCk7XG4gICAgICAgIGNvbnN0IGxpc3RVcGRhdGVkID0gbmV3IEN1c3RvbUV2ZW50KCdsaXN0VXBkYXRlZCcsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnRpdGxlTmFtZSxcbiAgICAgICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgICAgICB0YXNrc0FycjogdGhpcy50YXNrc0FyclxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5saXN0LmRpc3BhdGNoRXZlbnQobGlzdFVwZGF0ZWQpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNvbXBvbmVudHMoKXtcbiAgICAgICAgdGhpcy50aXRsZVRleHRhcmVhLnZhbHVlID0gdGhpcy5vcHRpb24ubmFtZSA/IHRoaXMub3B0aW9uLm5hbWUgOiB0aGlzLm9wdGlvbi5saXN0VGl0bGUgO1xuICAgICAgICB0aGlzLnJlY291bnQoKTtcbiAgICB9XG5cbiAgICBpbml0RXZlbnRzKCl7XG4gICAgICAgIHRoaXMubGlzdC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5vblJlbW92ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy50aXRsZVRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25UaXRsZUNsaWNrLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnRpdGxlVGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMub25UZXh0YXJlYUJsdXIuYmluZCh0aGlzKSk7XG4gICAgICAgIC8vIHRoaXMuYnRuQ2Fuc2VsQ29tcG9zZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlQ29tcG9zZXIuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuYnRuQWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmFkZFRhc2suYmluZCh0aGlzKSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5idG5DbGVhckFsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xlYXJBbGxUYXNrcy5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5idG5SZW1vdmVMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZW1vdmVMaXN0LmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmNvbXBvc2VyVGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKT0+e1xuICAgICAgICAgICBpZihlLmtleUNvZGUgPT09IEVOVEVSX0tFWUNPREUpe1xuICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgdGhpcy5hZGRUYXNrLmJpbmQodGhpcykoKTtcbiAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb21wb3NlclRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywoZSk9PntcbiAgICAgICAgICAgIC8vdGhpcy5idG5BZGRUYXNrLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xuICAgICAgICAgICAgdGhpcy5jb21wb3NlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRXZlbnRPZkxpc3RFZGl0aW5nKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbXBvc2VyVGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsKGUpPT57XG4gICAgICAgICAgICB0aGlzLmNvbXBvc2VyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgdGhpcy5hZGRUYXNrLmJpbmQodGhpcykoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbXBvc2VyIGJsdXInKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5saXN0SXRlbXNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndGFza1RvZ2dsZWQnLCAoZSk9PntcbiAgICAgICAgICAgIHRoaXMub25VcGRhdGUoZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxpc3RJdGVtc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkZWxldGUnLCAoZSk9PntcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlVGFzayhlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGlzdEl0ZW1zQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ25hbWVDaGFuZ2VkJywgKGUpPT57XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVRhc2tOYW1lKGUpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBjcmVhdGVFdmVudE9mTGlzdEVkaXRpbmcoKXtcbiAgICAgICAgY29uc3QgbGlzdEVkaXRpbmcgPSBuZXcgQ3VzdG9tRXZlbnQoJ2xpc3RFZGl0aW5nJywge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGRldGFpbDoge31cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGlzdC5kaXNwYXRjaEV2ZW50KGxpc3RFZGl0aW5nKTtcblxuICAgIH1cblxuICAgIG9uVGl0bGVDbGljaygpe1xuICAgICAgICB0aGlzLnRpdGxlVGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xuICAgICAgICB0aGlzLnRpdGxlVGV4dGFyZWEuZm9jdXMoKTtcbiAgICAgICAgdGhpcy50aXRsZVRleHRhcmVhLnNlbGVjdCgpO1xuICAgICAgICB0aGlzLmNyZWF0ZUV2ZW50T2ZMaXN0RWRpdGluZygpO1xuICAgIH1cblxuICAgIG9uVGV4dGFyZWFCbHVyKCl7XG4gICAgICAgIHRoaXMudGl0bGVOYW1lID0gdGhpcy50aXRsZVRleHRhcmVhLnZhbHVlO1xuICAgICAgICB0aGlzLnRpdGxlVGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xuICAgICAgICBjb25zdCB1cGRhdGVUaXRsZSA9IG5ldyBDdXN0b21FdmVudCgndXBkYXRlJyx7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgVG9Eb0xpc3Q6IHRoaXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGlzdC5kaXNwYXRjaEV2ZW50KHVwZGF0ZVRpdGxlKTtcbiAgICAgICAgdGhpcy5vblVwZGF0ZSgpO1xuICAgIH1cblxuICAgIG9uQ29tcG9zZXJMaW5rQ2xpY2soKXtcbiAgICAgICAgdGhpcy5jb21wb3NlckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcbiAgICAgICAgdGhpcy5jb21wb3NlclRleHRhcmVhLmZvY3VzKCk7XG4gICAgfVxuICAgIG9uQ29tcG9zZXJMYWJlbENsaWNrKGUpe1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzKVxuICAgIH1cblxuICAgIGFkZFRhc2soKXtcbiAgICAgICAgaWYodGhpcy5jb21wb3NlclRleHRhcmVhLnZhbHVlKXtcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgnbGlzdF9faXRlbScpO1xuICAgICAgICAgICAgdGhpcy5saXN0SXRlbXNDb250YWluZXIuaW5zZXJ0QmVmb3JlKHRhc2ssIHRoaXMubGlzdEl0ZW1zQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jb21wb3Nlcl9fY29udGFpbmVyJykpO1xuICAgICAgICAgICAgdGhpcy50YXNrc0Fyci5wdXNoKG5ldyBUb0RvTGlzdEl0ZW0odGFzaywgdGhpcy5jb21wb3NlclRleHRhcmVhLnZhbHVlKSk7XG4gICAgICAgICAgICB0aGlzLm9uVXBkYXRlKCk7XG4gICAgICAgICAgICB0aGlzLmNvbXBvc2VyVGV4dGFyZWEudmFsdWUgPSBcIlwiO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAvL2FsZXJ0KCdUYXNrIGZpZWxkIGlzIGVtcHR5JylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZFN0b3JlZFRhc2tzKCl7XG4gICAgICAgIHRoaXMudGFza3NBcnIgPSB0aGlzLnRhc2tzQXJyLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKCdsaXN0X19pdGVtJyk7XG4gICAgICAgICAgICB0aGlzLmxpc3RJdGVtc0NvbnRhaW5lci5pbnNlcnRCZWZvcmUodGFzaywgdGhpcy5saXN0SXRlbXNDb250YWluZXIucXVlcnlTZWxlY3RvcignLmNvbXBvc2VyX19jb250YWluZXInKSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFRvRG9MaXN0SXRlbSh0YXNrLCBpdGVtLm5hbWUsIHtcbiAgICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICBpc0RvbmU6IGl0ZW0uX2lzRG9uZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRlbGV0ZVRhc2soZSkge1xuICAgICAgICBjb25zdCB0YXNrSWQgPSBlLmRldGFpbC5pZDtcbiAgICAgICAgdGhpcy50YXNrc0FyciA9IHRoaXMudGFza3NBcnIuZmlsdGVyKChlbGVtKT0+e1xuICAgICAgICAgICAgcmV0dXJuIGVsZW0uaWQgIT09IHRhc2tJZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub25VcGRhdGUoKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VUYXNrTmFtZShlKXtcbiAgICAgICB0aGlzLm9uVXBkYXRlKCk7XG4gICAgfVxuXG4gICAgY2xlYXJBbGxUYXNrcygpe1xuICAgICAgICBjb25zdCBUYXNrTm9kZXMgPSB0aGlzLmxpc3RJdGVtc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdF9faXRlbScpO1xuICAgICAgICBUYXNrTm9kZXMuZm9yRWFjaCgoZWxlbSkgPT57XG4gICAgICAgICAgICBlbGVtLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50YXNrc0FyciA9IFtdO1xuICAgICAgICB0aGlzLm9uVXBkYXRlKCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlTGlzdCgpe1xuICAgICAgICBjb25zdCBldmVudFJlbW92ZUxpc3QgPSBuZXcgQ3VzdG9tRXZlbnQoJ2xpc3RSZW1vdmVkJywge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGRldGFpbDogdGhpcy5pZFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5saXN0LmRpc3BhdGNoRXZlbnQoZXZlbnRSZW1vdmVMaXN0KTtcbiAgICAgICAgdGhpcy5saXN0LmNsYXNzTGlzdC5hZGQoJ2lzLWRlbGV0ZWQnKTtcbiAgICB9XG4gICAgb25SZW1vdmUoZSl7XG4gICAgICAgIGlmKGUudGFyZ2V0ID09IHRoaXMubGlzdClcbiAgICAgICAgdGhpcy5saXN0LnJlbW92ZSgpO1xuICAgIH1cbiAgICByZWNvdW50KCl7XG4gICAgICAgIHRoaXMubGlzdFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5jb3VudGVyLWRvbmUnKVxuICAgICAgICAgICAgLmlubmVySFRNTCA9IHRoaXMudGFza3NBcnIuZmlsdGVyKHRvZG9MaXN0SXRlbSA9PiAhdG9kb0xpc3RJdGVtLmlzRG9uZSkubGVuZ3RoO1xuICAgIH1cbn1cbi8vIGV4cG9ydCB2YXIgX191c2VEZWZhdWx0ID0gdHJ1ZTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3RvZG9saXN0LnRzIiwiY29uc3QgbGlzdEl0ZW1UZW1wbGF0ZSA9IGBcbjxkaXYgY2xhc3M9XCJjaGVja2JveFwiPjwvZGl2PlxuPGRpdiBjbGFzcz1cInRhc2stbmFtZV9fY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInRhc2stbmFtZV9fdGFyZ2V0XCI+PC9kaXY+XG4gICAgPHRleHRhcmVhIGNsYXNzPVwidGFzay1uYW1lX19pbnB1dFwiPjwvdGV4dGFyZWE+XG48L2Rpdj5cbjxhIGNsYXNzPVwiYnRuLXJlbW92ZVwiPjwvYT5cbmA7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvTGlzdEl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKGl0ZW0sIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmxpc3RJdGVtID0gaXRlbTtcbiAgICAgICAgdGhpcy5saXN0SXRlbS5pbm5lckhUTUwgPSBsaXN0SXRlbVRlbXBsYXRlO1xuICAgICAgICB0aGlzLmNoZWNrYm94ID0gdGhpcy5saXN0SXRlbS5xdWVyeVNlbGVjdG9yKCcuY2hlY2tib3gnKTtcbiAgICAgICAgdGhpcy5uYW1lVGFyZ2V0ID0gdGhpcy5saXN0SXRlbS5xdWVyeVNlbGVjdG9yKCcudGFzay1uYW1lX190YXJnZXQnKTtcbiAgICAgICAgdGhpcy5uYW1lVGV4dGFyZWEgPSB0aGlzLmxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW5hbWVfX2lucHV0Jyk7XG4gICAgICAgIHRoaXMuYnRuUmVtb3ZlID0gdGhpcy5saXN0SXRlbS5xdWVyeVNlbGVjdG9yKCcuYnRuLXJlbW92ZScpO1xuICAgICAgICB0aGlzLl9pc0RvbmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faXNEZWxldGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaWQgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKTtcbiAgICAgICAgaWYob3B0aW9ucyl7XG4gICAgICAgICAgICB0aGlzLmlkID0gb3B0aW9ucy5pZDtcbiAgICAgICAgICAgIHRoaXMuX2lzRG9uZSA9IG9wdGlvbnMuaXNEb25lO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgICBnZXQgaXNEb25lKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0RvbmU7XG4gICAgfVxuICAgIHNldCBpc0RvbmUodmFsdWUpe1xuICAgICAgICBpZih2YWx1ZSl7XG4gICAgICAgICAgICB0aGlzLl9pc0RvbmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZVRhc2soKVxuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9pc0RvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudW5kb0NvbXBsZXRlVGFzaygpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9uVG9nZ2xlSXRlbSA9IG5ldyBDdXN0b21FdmVudCgndGFza1RvZ2dsZWQnLCB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgZGV0YWlsOiB0aGlzXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxpc3RJdGVtLmRpc3BhdGNoRXZlbnQob25Ub2dnbGVJdGVtKTtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5pbml0RG9NRWxlbWVudHMoKTtcbiAgICAgICAgdGhpcy5pbml0RXZlbnRzKCk7XG4gICAgfVxuXG4gICAgaW5pdERvTUVsZW1lbnRzKCl7XG4gICAgICAgIHRoaXMubGlzdEl0ZW0uc2V0QXR0cmlidXRlKCdpZCcsIHRoaXMuaWQpO1xuICAgICAgICB0aGlzLm5hbWVUZXh0YXJlYS52YWx1ZSA9IHRoaXMubmFtZTtcbiAgICAgICAgdGhpcy5idG5SZW1vdmUuY2xhc3NMaXN0LmFkZCgnYnRuLXJlbW92ZScpO1xuICAgICAgICBpZih0aGlzLmlzRG9uZSl7XG4gICAgICAgICAgICB0aGlzLmxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2lzLWRvbmUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRFdmVudHMoKXtcbiAgICAgICAgdGhpcy5idG5SZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRlbGV0ZUl0ZW0uYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICAgICAgdGhpcy5pc0RvbmU9IXRoaXMuaXNEb25lXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm5hbWVUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmVkaXRJdGVtLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLm5hbWVUZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5yZW5hbWVUYXNrLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGRlbGV0ZUl0ZW0oKXtcbiAgICAgICAgY29uc3QgZXZlbnREZWxldGUgPSBuZXcgQ3VzdG9tRXZlbnQoJ2RlbGV0ZScsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBkZXRhaWw6IHRoaXNcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGlzdEl0ZW0uZGlzcGF0Y2hFdmVudChldmVudERlbGV0ZSk7XG4gICAgICAgIHRoaXMubGlzdEl0ZW0ucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgY29tcGxldGVUYXNrKCl7XG4gICAgICAgIHRoaXMubGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnaXMtZG9uZScpO1xuICAgIH1cblxuICAgIHVuZG9Db21wbGV0ZVRhc2soKXtcbiAgICAgICAgdGhpcy5saXN0SXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1kb25lJyk7XG4gICAgfVxuXG4gICAgZWRpdEl0ZW0oZSl7XG4gICAgICAgIHRoaXMubmFtZVRleHRhcmVhLmZvY3VzKCk7XG4gICAgICAgIHRoaXMubmFtZVRhcmdldC5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcbiAgICB9XG5cbiAgICByZW5hbWVUYXNrKGUpe1xuICAgICAgICBjb25zdCBwcmV2aW91c05hbWUgPSB0aGlzLm5hbWU7XG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMubmFtZVRleHRhcmVhLnZhbHVlO1xuICAgICAgICB0aGlzLm5hbWVUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJyk7XG4gICAgICAgIGNvbnN0IG5hbWVDaGFuZ2VkID0gbmV3IEN1c3RvbUV2ZW50KCduYW1lQ2hhbmdlZCcsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICBsaXN0SXRlbTogdGhpcyxcbiAgICAgICAgICAgICAgICBwcmV2OiBwcmV2aW91c05hbWUsXG4gICAgICAgICAgICAgICAgdXBkYXRlZDogdGhpcy5uYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxpc3RJdGVtLmRpc3BhdGNoRXZlbnQobmFtZUNoYW5nZWQpO1xuICAgIH1cblxufVxuLy8gZXhwb3J0IHZhciBfX3VzZURlZmF1bHQgPSB0cnVlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy90b0RvTGlzdEl0ZW0udHMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcbiAgICBjb25zdHJ1Y3RvcihzdG9yYWdlS2V5KSB7XG4gICAgICAgIHRoaXMuc3RvcmFnZUtleSA9IHN0b3JhZ2VLZXk7XG4gICAgfVxuXG4gICAgcGVyc2lzdEl0ZW0oaXRlbSkge1xuICAgICAgICBjb25zdCBzdG9yYWdlID0gdGhpcy5nZXRTdG9yYWdlKCk7XG4gICAgICAgIHN0b3JhZ2UucHVzaChpdGVtKTtcbiAgICAgICAgdGhpcy5zZXRTdG9yYWdlKHN0b3JhZ2UpO1xuICAgIH1cblxuICAgIHVwZGF0ZUl0ZW0obGlzdCl7XG4gICAgICAgIGNvbnN0IHRvZG9zID0gdGhpcy5nZXRTdG9yYWdlKCk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdG9kb3MuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5pZCA9PT0gbGlzdC5pZCk7XG4gICAgICAgIHRvZG9zW2luZGV4XSA9IGxpc3Q7XG4gICAgICAgIHRoaXMuc2V0U3RvcmFnZSh0b2Rvcyk7XG4gICAgfVxuXG4gICAgZm9yZ2V0SXRlbShpdGVtSWQpIHtcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IHRoaXMuZ2V0U3RvcmFnZSgpLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09IGl0ZW1JZCk7XG4gICAgICAgIHRoaXMuc2V0U3RvcmFnZShzdG9yYWdlKTtcbiAgICB9XG5cbiAgICBnZXRTdG9yYWdlKCkge1xuICAgICAgICBjb25zdCB0b2RvcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuc3RvcmFnZUtleSk7XG4gICAgICAgIHJldHVybiB0b2RvcyA/IEpTT04ucGFyc2UodG9kb3MpIDogW107XG4gICAgfVxuXG4gICAgc2V0U3RvcmFnZShzdG9yYWdlKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuc3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZSkpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9zdG9yYWdlLnRzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jc3Mvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9