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
    ToDoList.prototype.onUpdate = function (e) {
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
        this.list
            .querySelector('.counter-done')
            .innerHTML = this.tasksArr.filter(function (todoListItem) { return !todoListItem.isDone; }).length;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjUxMGU5ZWY4YjMwOTQ1MzFiNDEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NjcmlwdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdG9Eb0J1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RvZG9saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9qcy90b0RvTGlzdEl0ZW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzdEQSwyQ0FBd0M7QUFDeEMsdUJBQTJCO0FBQzNCLElBQUkscUJBQVcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDbEQsc0NBQXNDO0FBQ3RDLG1EQUFtRDtBQUNuRCxrRkFBa0Y7QUFDbEYsNkNBQTZDO0FBQzdDLHFHQUFxRztBQUNyRyw2QkFBNkI7QUFDN0Isd0NBQXdDO0FBQ3hDLHVFQUF1RTtBQUN2RSxjQUFjO0FBQ2QsVUFBVTtBQUNWLElBQUk7QUFDSiw4QkFBOEI7QUFDOUIsZ0NBQWdDO0FBQ2hDLHdEQUF3RDtBQUN4RCxzQ0FB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QUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsNEJBQVUsR0FBVjtRQUNJLElBQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELDRCQUFVLEdBQVYsVUFBVyxPQUFPO1FBQ2QsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBQ0wsY0FBQztBQUFELENBQUM7Ozs7Ozs7O0FDL0JELHlDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYjUxMGU5ZWY4YjMwOTQ1MzFiNDEiLCJpbXBvcnQgVG9Eb0J1aWxkZXIgZnJvbSAnLi90b0RvQnVpbGRlcic7XG5pbXBvcnQgJy4uL2Nzcy9zdHlsZS5zY3NzJztcbm5ldyBUb0RvQnVpbGRlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKSk7XG4vLyBpZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuLy8gICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCdzdy5qcycpLnRoZW4oZnVuY3Rpb24ocmVnaXN0cmF0aW9uKSB7XG4vLyAgICAgICAgICAgICAvLyBSZWdpc3RyYXRpb24gd2FzIHN1Y2Nlc3NmdWxcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIHdpdGggc2NvcGU6ICcsIHJlZ2lzdHJhdGlvbi5zY29wZSk7XG4vLyAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuLy8gICAgICAgICAgICAgLy8gcmVnaXN0cmF0aW9uIGZhaWxlZCA6KFxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDogJywgZXJyKTtcbi8vICAgICAgICAgfSk7XG4vLyAgICAgfSk7XG4vLyB9XG4vLyBjb25zb2xlLmxvZygndHlwZSBzY3JpcHQnKTtcbi8vIGZ1bmN0aW9uIHNob3dOb3RpZmljYXRpb24oKSB7XG4vLyAgICAgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKGZ1bmN0aW9uKHJlc3VsdCkge1xuLy8gICAgICAgICBpZiAocmVzdWx0ID09PSAnZ3JhbnRlZCcpIHtcbi8vICAgICAgICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5LnRoZW4oZnVuY3Rpb24ocmVnaXN0cmF0aW9uKSB7XG4vLyAgICAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uLnNob3dOb3RpZmljYXRpb24oJ1ZpYnJhdGlvbiBTYW1wbGUnLCB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGJvZHk6ICdCdXp6ISBCdXp6IScsXG4vLyAgICAgICAgICAgICAgICAgICAgIGljb246ICcvYW5kcm9pZC1jaHJvbWUtNTEyeDUxMi5wbmcnLFxuLy8gICAgICAgICAgICAgICAgICAgICB2aWJyYXRlOiBbMjAwLCAxMDAsIDIwMCwgMTAwLCAyMDAsIDEwMCwgMjAwXSxcbi8vICAgICAgICAgICAgICAgICAgICAgdGFnOiAndmlicmF0aW9uLXNhbXBsZSdcbi8vICAgICAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9XG4vLyAgICAgfSk7XG4vLyB9XG4vLyBzaG93Tm90aWZpY2F0aW9uKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvc2NyaXB0LnRzIiwiaW1wb3J0IFRvRG9MaXN0IGZyb20gJy4vdG9kb2xpc3QnO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlJztcbmNvbnN0IHRlbXBsYXRlID0gYFxuPGJ1dHRvbiBpZD1cInRvZG9CdWlsZGVyXCI+PC9idXR0b24+XG48ZGl2IGNsYXNzPVwidG9kby1saXN0LWJvYXJkXCI+PC9kaXY+XG5gO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9Eb0J1aWxkZXJ7XG4gICAgY29uc3RydWN0b3IoYm9hcmQpIHtcbiAgICAgICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xuICAgICAgICB0aGlzLnN0b3JhZ2UgPSBuZXcgU3RvcmFnZSgndG9kby1saXN0cycpO1xuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLnN0b3JhZ2UuZ2V0U3RvcmFnZSgpO1xuICAgICAgICB0aGlzLmluaXQoKTtcblxuICAgICAgICBpZiAodGhpcy5kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVJbml0aWFsTGlzdHModGhpcy5kYXRhKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVMaXN0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVJbml0aWFsTGlzdHMoaW5pdGlhbERhdGEpe1xuICAgICAgICBpbml0aWFsRGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVTdG9yZWRMaXN0KGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0KCl7XG4gICAgICAgIHRoaXMuYm9hcmQuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gICAgICAgIHRoaXMuYnV0dG9uID0gdGhpcy5ib2FyZC5xdWVyeVNlbGVjdG9yKCcjdG9kb0J1aWxkZXInKTtcbiAgICAgICAgdGhpcy5saXN0c0FyciA9IFtdO1xuICAgICAgICB0aGlzLmluaXRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBpbml0RXZlbnRzKCl7XG4gICAgICAgIHRoaXMuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jcmVhdGVMaXN0LmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2xpc3RVcGRhdGVkJywgdGhpcy51cGRhdGVMaXN0LmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2xpc3RDcmVhdGVkJywgdGhpcy5hZGRMaXN0VG9TdG9yYWdlLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2xpc3RSZW1vdmVkJywgdGhpcy5yZW1vdmVMaXN0RnJvbVN0b3JhZ2UuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignbGlzdEVkaXRpbmcnLCB0aGlzLmhpZGVCdG5BZGQuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgdXBkYXRlTGlzdChlKXtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnVwZGF0ZUl0ZW0oZS5kZXRhaWwpO1xuICAgICAgICB0aGlzLnNob3dCdG5BZGQoKTtcbiAgICB9XG5cbiAgICBhZGRMaXN0VG9TdG9yYWdlKGUpe1xuICAgICAgICB0aGlzLnN0b3JhZ2UucGVyc2lzdEl0ZW0oZS5kZXRhaWwpO1xuICAgIH1cblxuICAgIHJlbW92ZUxpc3RGcm9tU3RvcmFnZShlKXtcbiAgICAgICAgdGhpcy5zdG9yYWdlLmZvcmdldEl0ZW0oZS5kZXRhaWwpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNvbnRhaW5lckZvckxpc3QoKXtcbiAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsaXN0LmNsYXNzTGlzdC5hZGQoJ3RvZG8tbGlzdCcpO1xuICAgICAgICB0aGlzLmJvYXJkLnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QtYm9hcmQnKS5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfVxuXG4gICAgY3JlYXRlTGlzdCgpIHtcbiAgICAgICAgdGhpcy5saXN0c0Fyci5wdXNoKG5ldyBUb0RvTGlzdCh0aGlzLmNyZWF0ZUNvbnRhaW5lckZvckxpc3QoKSkpO1xuICAgIH1cblxuICAgIHNob3dCdG5BZGQoKXtcbiAgICAgICAgLy8gaWYodGhpcy5idXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1oaWRkZW4nKSl7XG4gICAgICAgIC8vICAgICB0aGlzLmJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKVxuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgaGlkZUJ0bkFkZCgpe1xuICAgICAgICAvL3RoaXMuYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpXG4gICAgfVxuXG4gICAgY3JlYXRlU3RvcmVkTGlzdChpdGVtKXtcbiAgICAgICAgdGhpcy5saXN0c0Fyci5wdXNoKG5ldyBUb0RvTGlzdCh0aGlzLmNyZWF0ZUNvbnRhaW5lckZvckxpc3QoKSwge1xuICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICB0YXNrc0FycjogaXRlbS50YXNrc0FyclxuICAgICAgICB9KSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3RvRG9CdWlsZGVyLnRzIiwiaW1wb3J0IFRvRG9MaXN0SXRlbSBmcm9tICcuL3RvRG9MaXN0SXRlbSc7XG5pbnRlcmZhY2Ugb3B0aW9uT2JqZWN0IHtcbiAgICBbbGlzdFRpdGxlOiBzdHJpbmddOiBzdHJpbmdcbn1cbmNvbnN0IGRlZmF1bHRPcHRpb25zOiBvcHRpb25PYmplY3QgPXtcbiAgICBsaXN0VGl0bGU6ICdteSBMaXN0J1xufTtcblxuY29uc3QgVGVtcGxhdGUgPSBgXG5cbjxkaXYgY2xhc3M9XCJsaXN0X19oZWFkZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwibGlzdF9faGVhZGVyX190YXJnZXRcIj48L2Rpdj5cbiAgICA8dGV4dGFyZWEgY2xhc3M9XCJsaXN0X19oZWFkZXJfX2lucHV0XCI+PC90ZXh0YXJlYT5cbiAgICA8YSBjbGFzcz1cImJ0bi1yZW1vdmUtbGlzdFwiPjwvYT5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImxpc3RfX2l0ZW1zXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbXBvc2VyX19jb250YWluZXJcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cIm5ld1RvZG9cIj5OZXcgdGFzazwvbGFiZWw+XG4gICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImxpc3RfX2l0ZW1fX2NvbXBvc2VyLXRleHRhcmVhXCIgaWQ9XCJuZXdUb2RvXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgPCEtLTxidXR0b24gY2xhc3M9XCJidG4tY2Fuc2VsLWFkZC10YXNrXCI+PC9idXR0b24+LS0+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJsaXN0X19jb250cm9sc1wiPlxuICAgIDxsYWJlbCBmb3I9XCJcIj5MZWZ0IHRhc2tzOiA8L2xhYmVsPlxuICAgIDxkaXYgY2xhc3M9XCJjb3VudGVyLWRvbmVcIj48L2Rpdj5cbiAgICA8YSAgY2xhc3M9XCJidG4tY2xlYXItYWxsXCI+Q2xlYXIgQWxsPC9hPlxuPC9kaXY+XG5gO1xuXG5jb25zdCBFTlRFUl9LRVlDT0RFID0gMTM7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvTGlzdHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBsaXN0Q29udGFpbmVyXG4gICAgICogQHBhcmFtIG9wdGlvbnNcbiAgICAgKi9cbiAgICBsaXN0OiBIVE1MRGl2RWxlbWVudDtcbiAgICBvcHRpb246IE9iamVjdDtcbiAgICB0aXRsZU5hbWU6IFN0cmluZztcbiAgICB0aXRsZVRhcmdldDogSFRNTERpdkVsZW1lbnQ7XG4gICAgdGl0bGVUZXh0YXJlYTogSFRNTEVsZW1lbnQ7XG4gICAgbGlzdEl0ZW1zQ29udGFpbmVyOiBIVE1MVUxpc3RFbGVtZW50O1xuICAgIGNvbXBvc2VyQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBjb21wb3NlclRleHRhcmVhOiBIVE1MVGV4dEFyZWFFbGVtZW50O1xuICAgIGJ0bkNsZWFyQWxsOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBidG5SZW1vdmVMaXN0OiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBpZDogc3RyaW5nO1xuICAgIHRhc2tzQXJyOiBBcnJheTxPYmplY3Q+O1xuICAgIGNvbnN0cnVjdG9yKGxpc3RDb250YWluZXI6IEhUTUxEaXZFbGVtZW50LCBvcHRpb25zOiBPYmplY3Qpe1xuICAgICAgICB0aGlzLmxpc3QgPSBsaXN0Q29udGFpbmVyO1xuICAgICAgICB0aGlzLmxpc3QuaW5uZXJIVE1MID0gVGVtcGxhdGU7XG4gICAgICAgIHRoaXMub3B0aW9uPSg8YW55Pk9iamVjdCkuYXNzaWduKHt9LGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcblxuICAgICAgICB0aGlzLnRpdGxlTmFtZSA9IDxzdHJpbmc+dGhpcy5vcHRpb24ubGlzdFRpdGxlO1xuICAgICAgICB0aGlzLnRpdGxlVGFyZ2V0ID0gPEhUTUxEaXZFbGVtZW50PnRoaXMubGlzdC5xdWVyeVNlbGVjdG9yKCcubGlzdF9faGVhZGVyX190YXJnZXQnKTtcbiAgICAgICAgdGhpcy50aXRsZVRleHRhcmVhID0gPEhUTUxUZXh0QXJlYUVsZW1lbnQ+dGhpcy5saXN0LnF1ZXJ5U2VsZWN0b3IoJy5saXN0X19oZWFkZXJfX2lucHV0Jyk7XG5cbiAgICAgICAgdGhpcy5saXN0SXRlbXNDb250YWluZXIgPSA8SFRNTFVMaXN0RWxlbWVudD50aGlzLmxpc3QucXVlcnlTZWxlY3RvcignLmxpc3RfX2l0ZW1zJyk7XG5cbiAgICAgICAgdGhpcy5jb21wb3NlckNvbnRhaW5lciA9IDxIVE1MRGl2RWxlbWVudD50aGlzLmxpc3QucXVlcnlTZWxlY3RvcignLmNvbXBvc2VyX19jb250YWluZXInKTtcbiAgICAgICAgdGhpcy5jb21wb3NlclRleHRhcmVhID0gPEhUTUxUZXh0QXJlYUVsZW1lbnQ+dGhpcy5jb21wb3NlckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGlzdF9faXRlbV9fY29tcG9zZXItdGV4dGFyZWEnKTtcblxuICAgICAgICB0aGlzLmJ0bkNsZWFyQWxsID0gPEhUTUxCdXR0b25FbGVtZW50PnRoaXMubGlzdC5xdWVyeVNlbGVjdG9yKCcuYnRuLWNsZWFyLWFsbCcpO1xuXG4gICAgICAgIHRoaXMuYnRuUmVtb3ZlTGlzdCA9IDxIVE1MQnV0dG9uRWxlbWVudD50aGlzLmxpc3QucXVlcnlTZWxlY3RvcignLmJ0bi1yZW1vdmUtbGlzdCcpO1xuICAgICAgICB0aGlzLmlkID0gPHN0cmluZz5EYXRlLm5vdygpO1xuICAgICAgICB0aGlzLnRhc2tzQXJyID0gW107XG5cbiAgICAgICAgaWYob3B0aW9ucyl7XG4gICAgICAgICAgICB0aGlzLnRpdGxlTmFtZSA9IDxzdHJpbmc+b3B0aW9ucy5uYW1lO1xuICAgICAgICAgICAgdGhpcy5pZCA9IG9wdGlvbnMuaWQ7XG4gICAgICAgICAgICB0aGlzLnRhc2tzQXJyID0gPEFycmF5Pm9wdGlvbnMudGFza3NBcnI7XG4gICAgICAgICAgICBpZih0aGlzLnRhc2tzQXJyKXtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFN0b3JlZFRhc2tzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRkVG9TdG9yYWdlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpe1xuICAgICAgICB0aGlzLmxpc3QuY2xhc3NMaXN0LmFkZCgnbGlzdCcpO1xuICAgICAgICB0aGlzLmxpc3Quc2V0QXR0cmlidXRlKCdpZCcsIHRoaXMuaWQpO1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudHMoKTtcbiAgICAgICAgdGhpcy5pbml0RXZlbnRzKCk7XG4gICAgfVxuXG4gICAgYWRkVG9TdG9yYWdlKCl7XG4gICAgICAgIGNvbnN0IGxpc3RDcmVhdGVkID0gbmV3IEN1c3RvbUV2ZW50KCdsaXN0Q3JlYXRlZCcsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnRpdGxlTmFtZSxcbiAgICAgICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgICAgICB0YXNrc0FycjogdGhpcy50YXNrc0FyclxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5saXN0LmRpc3BhdGNoRXZlbnQobGlzdENyZWF0ZWQpO1xuICAgIH1cblxuICAgIG9uVXBkYXRlKGUpe1xuICAgICAgICB0aGlzLnJlY291bnQoKTtcbiAgICAgICAgY29uc3QgbGlzdFVwZGF0ZWQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2xpc3RVcGRhdGVkJywge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMudGl0bGVOYW1lLFxuICAgICAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgICAgIHRhc2tzQXJyOiB0aGlzLnRhc2tzQXJyXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxpc3QuZGlzcGF0Y2hFdmVudChsaXN0VXBkYXRlZCk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ29tcG9uZW50cygpe1xuICAgICAgICB0aGlzLnRpdGxlVGV4dGFyZWEudmFsdWUgPSB0aGlzLm9wdGlvbi5uYW1lID8gdGhpcy5vcHRpb24ubmFtZSA6IHRoaXMub3B0aW9uLmxpc3RUaXRsZSA7XG4gICAgICAgIHRoaXMucmVjb3VudCgpO1xuICAgIH1cblxuICAgIGluaXRFdmVudHMoKXtcbiAgICAgICAgdGhpcy5saXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIHRoaXMub25SZW1vdmUuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMudGl0bGVUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uVGl0bGVDbGljay5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy50aXRsZVRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLm9uVGV4dGFyZWFCbHVyLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmJ0bkNsZWFyQWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGVhckFsbFRhc2tzLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmJ0blJlbW92ZUxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlbW92ZUxpc3QuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuY29tcG9zZXJUZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpPT57XG4gICAgICAgICAgIGlmKGUua2V5Q29kZSA9PT0gRU5URVJfS0VZQ09ERSl7XG4gICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICB0aGlzLmFkZFRhc2suYmluZCh0aGlzKSgpO1xuICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbXBvc2VyVGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLChlKT0+e1xuICAgICAgICAgICAgdGhpcy5jb21wb3NlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRXZlbnRPZkxpc3RFZGl0aW5nKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbXBvc2VyVGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsKGUpPT57XG4gICAgICAgICAgICB0aGlzLmNvbXBvc2VyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgdGhpcy5hZGRUYXNrLmJpbmQodGhpcykoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbXBvc2VyIGJsdXInKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5saXN0SXRlbXNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndGFza1RvZ2dsZWQnLCAoZSk9PntcbiAgICAgICAgICAgIHRoaXMub25VcGRhdGUoZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxpc3RJdGVtc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkZWxldGUnLCAoZSk9PntcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlVGFzayhlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGlzdEl0ZW1zQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ25hbWVDaGFuZ2VkJywgKGUpPT57XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVRhc2tOYW1lKGUpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBjcmVhdGVFdmVudE9mTGlzdEVkaXRpbmcoKXtcbiAgICAgICAgY29uc3QgbGlzdEVkaXRpbmcgPSBuZXcgQ3VzdG9tRXZlbnQoJ2xpc3RFZGl0aW5nJywge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGRldGFpbDoge31cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGlzdC5kaXNwYXRjaEV2ZW50KGxpc3RFZGl0aW5nKTtcblxuICAgIH1cblxuICAgIG9uVGl0bGVDbGljaygpe1xuICAgICAgICB0aGlzLnRpdGxlVGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xuICAgICAgICB0aGlzLnRpdGxlVGV4dGFyZWEuZm9jdXMoKTtcbiAgICAgICAgdGhpcy50aXRsZVRleHRhcmVhLnNlbGVjdCgpO1xuICAgICAgICB0aGlzLmNyZWF0ZUV2ZW50T2ZMaXN0RWRpdGluZygpO1xuICAgIH1cblxuICAgIG9uVGV4dGFyZWFCbHVyKCl7XG4gICAgICAgIHRoaXMudGl0bGVOYW1lID0gdGhpcy50aXRsZVRleHRhcmVhLnZhbHVlO1xuICAgICAgICB0aGlzLnRpdGxlVGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xuICAgICAgICBjb25zdCB1cGRhdGVUaXRsZSA9IG5ldyBDdXN0b21FdmVudCgndXBkYXRlJyx7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgVG9Eb0xpc3Q6IHRoaXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGlzdC5kaXNwYXRjaEV2ZW50KHVwZGF0ZVRpdGxlKTtcbiAgICAgICAgdGhpcy5vblVwZGF0ZSgpO1xuICAgIH1cblxuICAgIG9uQ29tcG9zZXJMaW5rQ2xpY2soKXtcbiAgICAgICAgdGhpcy5jb21wb3NlckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcbiAgICAgICAgdGhpcy5jb21wb3NlclRleHRhcmVhLmZvY3VzKCk7XG4gICAgfVxuICAgIG9uQ29tcG9zZXJMYWJlbENsaWNrKGUpe1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzKVxuICAgIH1cblxuICAgIGFkZFRhc2soKXtcbiAgICAgICAgaWYodGhpcy5jb21wb3NlclRleHRhcmVhLnZhbHVlKXtcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgnbGlzdF9faXRlbScpO1xuICAgICAgICAgICAgdGhpcy5saXN0SXRlbXNDb250YWluZXIuaW5zZXJ0QmVmb3JlKHRhc2ssIHRoaXMubGlzdEl0ZW1zQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jb21wb3Nlcl9fY29udGFpbmVyJykpO1xuICAgICAgICAgICAgdGhpcy50YXNrc0Fyci5wdXNoKG5ldyBUb0RvTGlzdEl0ZW0odGFzaywgdGhpcy5jb21wb3NlclRleHRhcmVhLnZhbHVlKSk7XG5cbiAgICAgICAgICAgIC8vIGltcG9ydCgnLi90b0RvTGlzdEl0ZW0nKS50aGVuKG1vZHVsZSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy50YXNrc0Fyci5wdXNoKG5ldyBtb2R1bGUuZGVmYXVsdCh0YXNrLCB0aGlzLmNvbXBvc2VyVGV4dGFyZWEudmFsdWUpKTtcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhtb2R1bGUpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gICAgICk7XG4gICAgICAgICAgICB0aGlzLm9uVXBkYXRlKCk7XG4gICAgICAgICAgICB0aGlzLmNvbXBvc2VyVGV4dGFyZWEudmFsdWUgPSBcIlwiO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAvL2FsZXJ0KCdUYXNrIGZpZWxkIGlzIGVtcHR5JylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZFN0b3JlZFRhc2tzKCl7XG4gICAgICAgIHRoaXMudGFza3NBcnIgPSB0aGlzLnRhc2tzQXJyLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKCdsaXN0X19pdGVtJyk7XG4gICAgICAgICAgICB0aGlzLmxpc3RJdGVtc0NvbnRhaW5lci5pbnNlcnRCZWZvcmUodGFzaywgdGhpcy5saXN0SXRlbXNDb250YWluZXIucXVlcnlTZWxlY3RvcignLmNvbXBvc2VyX19jb250YWluZXInKSk7XG4gICAgICAgICAgICAvLyByZXR1cm4gbmV3IFRvRG9MaXN0SXRlbSh0YXNrLCBpdGVtLm5hbWUsIHtcbiAgICAgICAgICAgIC8vICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgICAgIC8vICAgICBpc0RvbmU6IGl0ZW0uX2lzRG9uZVxuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRlbGV0ZVRhc2soZSkge1xuICAgICAgICBjb25zdCB0YXNrSWQgPSBlLmRldGFpbC5pZDtcbiAgICAgICAgdGhpcy50YXNrc0FyciA9IHRoaXMudGFza3NBcnIuZmlsdGVyKChlbGVtKT0+e1xuICAgICAgICAgICAgcmV0dXJuIGVsZW0uaWQgIT09IHRhc2tJZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub25VcGRhdGUoKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VUYXNrTmFtZShlKXtcbiAgICAgICB0aGlzLm9uVXBkYXRlKCk7XG4gICAgfVxuXG4gICAgY2xlYXJBbGxUYXNrcygpe1xuICAgICAgICBjb25zdCBUYXNrTm9kZXM6IE5vZGVMaXN0T2Y8RWxlbWVudD4gID0gdGhpcy5saXN0SXRlbXNDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmxpc3RfX2l0ZW0nKTtcbiAgICAgICAgVGFza05vZGVzLmZvckVhY2goKGVsZW0pID0+e1xuICAgICAgICAgICAgZWxlbS5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudGFza3NBcnIgPSBbXTtcbiAgICAgICAgdGhpcy5vblVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHJlbW92ZUxpc3QoKXtcbiAgICAgICAgY29uc3QgZXZlbnRSZW1vdmVMaXN0ID0gbmV3IEN1c3RvbUV2ZW50KCdsaXN0UmVtb3ZlZCcsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBkZXRhaWw6IHRoaXMuaWRcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGlzdC5kaXNwYXRjaEV2ZW50KGV2ZW50UmVtb3ZlTGlzdCk7XG4gICAgICAgIHRoaXMubGlzdC5jbGFzc0xpc3QuYWRkKCdpcy1kZWxldGVkJyk7XG4gICAgfVxuICAgIG9uUmVtb3ZlKGUpe1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgaWYoZS50YXJnZXQgPT0gdGhpcy5saXN0ICYmIGUuYW5pbWF0aW9uTmFtZSA9PT0gXCJzY2FsZVwiKXtcbiAgICAgICAgICAgIHRoaXMubGlzdC5yZW1vdmUoKTtcblxuICAgICAgICB9XG4gICAgfVxuICAgIHJlY291bnQoKXtcbiAgICAgICAgdGhpcy5saXN0XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmNvdW50ZXItZG9uZScpXG4gICAgICAgICAgICAuaW5uZXJIVE1MID0gdGhpcy50YXNrc0Fyci5maWx0ZXIodG9kb0xpc3RJdGVtID0+ICF0b2RvTGlzdEl0ZW0uaXNEb25lKS5sZW5ndGg7XG4gICAgfVxufVxuLy8gZXhwb3J0IHZhciBfX3VzZURlZmF1bHQgPSB0cnVlO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdG9kb2xpc3QudHMiLCJjb25zdCBsaXN0SXRlbVRlbXBsYXRlID0gYFxuPGRpdiBjbGFzcz1cImNoZWNrYm94XCI+PC9kaXY+XG48ZGl2IGNsYXNzPVwidGFzay1uYW1lX19jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwidGFzay1uYW1lX190YXJnZXRcIj48L2Rpdj5cbiAgICA8dGV4dGFyZWEgY2xhc3M9XCJ0YXNrLW5hbWVfX2lucHV0XCI+PC90ZXh0YXJlYT5cbjwvZGl2PlxuPGEgY2xhc3M9XCJidG4tcmVtb3ZlXCI+PC9hPlxuYDtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvRG9MaXN0SXRlbSB7XG4gICAgY29uc3RydWN0b3IoaXRlbSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gdmFsdWU7XG4gICAgICAgIHRoaXMubGlzdEl0ZW0gPSBpdGVtO1xuICAgICAgICB0aGlzLmxpc3RJdGVtLmlubmVySFRNTCA9IGxpc3RJdGVtVGVtcGxhdGU7XG4gICAgICAgIHRoaXMuY2hlY2tib3ggPSB0aGlzLmxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveCcpO1xuICAgICAgICB0aGlzLm5hbWVUYXJnZXQgPSB0aGlzLmxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW5hbWVfX3RhcmdldCcpO1xuICAgICAgICB0aGlzLm5hbWVUZXh0YXJlYSA9IHRoaXMubGlzdEl0ZW0ucXVlcnlTZWxlY3RvcignLnRhc2stbmFtZV9faW5wdXQnKTtcbiAgICAgICAgdGhpcy5idG5SZW1vdmUgPSB0aGlzLmxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5idG4tcmVtb3ZlJyk7XG4gICAgICAgIHRoaXMuX2lzRG9uZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc0RlbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pZCA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpO1xuICAgICAgICBpZihvcHRpb25zKXtcbiAgICAgICAgICAgIHRoaXMuaWQgPSBvcHRpb25zLmlkO1xuICAgICAgICAgICAgdGhpcy5faXNEb25lID0gb3B0aW9ucy5pc0RvbmU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICAgIGdldCBpc0RvbmUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRG9uZTtcbiAgICB9XG4gICAgc2V0IGlzRG9uZSh2YWx1ZSl7XG4gICAgICAgIGlmKHZhbHVlKXtcbiAgICAgICAgICAgIHRoaXMuX2lzRG9uZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlVGFzaygpXG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2lzRG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy51bmRvQ29tcGxldGVUYXNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb25Ub2dnbGVJdGVtID0gbmV3IEN1c3RvbUV2ZW50KCd0YXNrVG9nZ2xlZCcsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBkZXRhaWw6IHRoaXNcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGlzdEl0ZW0uZGlzcGF0Y2hFdmVudChvblRvZ2dsZUl0ZW0pO1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmluaXREb01FbGVtZW50cygpO1xuICAgICAgICB0aGlzLmluaXRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBpbml0RG9NRWxlbWVudHMoKXtcbiAgICAgICAgdGhpcy5saXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy5pZCk7XG4gICAgICAgIHRoaXMubmFtZVRleHRhcmVhLnZhbHVlID0gdGhpcy5uYW1lO1xuICAgICAgICB0aGlzLmJ0blJlbW92ZS5jbGFzc0xpc3QuYWRkKCdidG4tcmVtb3ZlJyk7XG4gICAgICAgIGlmKHRoaXMuaXNEb25lKXtcbiAgICAgICAgICAgIHRoaXMubGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnaXMtZG9uZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdEV2ZW50cygpe1xuICAgICAgICB0aGlzLmJ0blJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZGVsZXRlSXRlbS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5jaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgICAgICB0aGlzLmlzRG9uZT0hdGhpcy5pc0RvbmVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubmFtZVRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZWRpdEl0ZW0uYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMubmFtZVRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLnJlbmFtZVRhc2suYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgZGVsZXRlSXRlbSgpe1xuICAgICAgICBjb25zdCBldmVudERlbGV0ZSA9IG5ldyBDdXN0b21FdmVudCgnZGVsZXRlJywge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGRldGFpbDogdGhpc1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5saXN0SXRlbS5kaXNwYXRjaEV2ZW50KGV2ZW50RGVsZXRlKTtcbiAgICAgICAgdGhpcy5saXN0SXRlbS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBjb21wbGV0ZVRhc2soKXtcbiAgICAgICAgdGhpcy5saXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdpcy1kb25lJyk7XG4gICAgfVxuXG4gICAgdW5kb0NvbXBsZXRlVGFzaygpe1xuICAgICAgICB0aGlzLmxpc3RJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWRvbmUnKTtcbiAgICB9XG5cbiAgICBlZGl0SXRlbShlKXtcbiAgICAgICAgdGhpcy5uYW1lVGV4dGFyZWEuZm9jdXMoKTtcbiAgICAgICAgdGhpcy5uYW1lVGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xuICAgICAgICB0aGlzLmxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2lzLWVkaXRpbmcnKTtcbiAgICB9XG5cbiAgICByZW5hbWVUYXNrKGUpe1xuICAgICAgICBjb25zdCBwcmV2aW91c05hbWUgPSB0aGlzLm5hbWU7XG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMubmFtZVRleHRhcmVhLnZhbHVlO1xuICAgICAgICB0aGlzLm5hbWVUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJyk7XG4gICAgICAgIHRoaXMubGlzdEl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtZWRpdGluZycpXG4gICAgICAgIGNvbnN0IG5hbWVDaGFuZ2VkID0gbmV3IEN1c3RvbUV2ZW50KCduYW1lQ2hhbmdlZCcsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICBsaXN0SXRlbTogdGhpcyxcbiAgICAgICAgICAgICAgICBwcmV2OiBwcmV2aW91c05hbWUsXG4gICAgICAgICAgICAgICAgdXBkYXRlZDogdGhpcy5uYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxpc3RJdGVtLmRpc3BhdGNoRXZlbnQobmFtZUNoYW5nZWQpO1xuICAgIH1cblxufVxuLy8gZXhwb3J0IHZhciBfX3VzZURlZmF1bHQgPSB0cnVlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy90b0RvTGlzdEl0ZW0udHMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcbiAgICBjb25zdHJ1Y3RvcihzdG9yYWdlS2V5KSB7XG4gICAgICAgIHRoaXMuc3RvcmFnZUtleSA9IHN0b3JhZ2VLZXk7XG4gICAgfVxuXG4gICAgcGVyc2lzdEl0ZW0oaXRlbSkge1xuICAgICAgICBjb25zdCBzdG9yYWdlID0gdGhpcy5nZXRTdG9yYWdlKCk7XG4gICAgICAgIHN0b3JhZ2UucHVzaChpdGVtKTtcbiAgICAgICAgdGhpcy5zZXRTdG9yYWdlKHN0b3JhZ2UpO1xuICAgIH1cblxuICAgIHVwZGF0ZUl0ZW0obGlzdCl7XG4gICAgICAgIGNvbnN0IHRvZG9zID0gdGhpcy5nZXRTdG9yYWdlKCk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdG9kb3MuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5pZCA9PT0gbGlzdC5pZCk7XG4gICAgICAgIHRvZG9zW2luZGV4XSA9IGxpc3Q7XG4gICAgICAgIHRoaXMuc2V0U3RvcmFnZSh0b2Rvcyk7XG4gICAgfVxuXG4gICAgZm9yZ2V0SXRlbShpdGVtSWQpIHtcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IHRoaXMuZ2V0U3RvcmFnZSgpLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09IGl0ZW1JZCk7XG4gICAgICAgIHRoaXMuc2V0U3RvcmFnZShzdG9yYWdlKTtcbiAgICB9XG5cbiAgICBnZXRTdG9yYWdlKCkge1xuICAgICAgICBjb25zdCB0b2RvcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuc3RvcmFnZUtleSk7XG4gICAgICAgIHJldHVybiB0b2RvcyA/IEpTT04ucGFyc2UodG9kb3MpIDogW107XG4gICAgfVxuXG4gICAgc2V0U3RvcmFnZShzdG9yYWdlKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuc3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZSkpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9zdG9yYWdlLnRzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jc3Mvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9