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
            Promise.resolve().then(function () { return __webpack_require__(3); }).then(function (module) {
                _this.tasksArr.push(new module.default(task_1, _this.composerTextarea.value));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2EyM2Y4NGYzODY0OTYyZTkwZDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NjcmlwdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdG9Eb0J1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RvZG9saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9qcy90b0RvTGlzdEl0ZW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzdEQSwyQ0FBd0M7QUFDeEMsdUJBQTJCO0FBQzNCLElBQUkscUJBQVcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDbEQsc0NBQXNDO0FBQ3RDLG1EQUFtRDtBQUNuRCxrRkFBa0Y7QUFDbEYsNkNBQTZDO0FBQzdDLHFHQUFxRztBQUNyRyw2QkFBNkI7QUFDN0Isd0NBQXdDO0FBQ3hDLHVFQUF1RTtBQUN2RSxjQUFjO0FBQ2QsVUFBVTtBQUNWLElBQUk7QUFDSiw4QkFBOEI7QUFDOUIsZ0NBQWdDO0FBQ2hDLHdEQUF3RDtBQUN4RCxzQ0FB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QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCw0QkFBVSxHQUFWLFVBQVcsTUFBTTtRQUNiLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsY0FBSSxJQUFJLFdBQUksQ0FBQyxFQUFFLEtBQUssTUFBTSxFQUFsQixDQUFrQixDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsNEJBQVUsR0FBVjtRQUNJLElBQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELDRCQUFVLEdBQVYsVUFBVyxPQUFPO1FBQ2QsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBQ0wsY0FBQztBQUFELENBQUM7Ozs7Ozs7O0FDaENELHlDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgY2EyM2Y4NGYzODY0OTYyZTkwZDIiLCJpbXBvcnQgVG9Eb0J1aWxkZXIgZnJvbSAnLi90b0RvQnVpbGRlcic7XG5pbXBvcnQgJy4uL2Nzcy9zdHlsZS5zY3NzJztcbm5ldyBUb0RvQnVpbGRlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKSk7XG4vLyBpZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuLy8gICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCdzdy5qcycpLnRoZW4oZnVuY3Rpb24ocmVnaXN0cmF0aW9uKSB7XG4vLyAgICAgICAgICAgICAvLyBSZWdpc3RyYXRpb24gd2FzIHN1Y2Nlc3NmdWxcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIHdpdGggc2NvcGU6ICcsIHJlZ2lzdHJhdGlvbi5zY29wZSk7XG4vLyAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuLy8gICAgICAgICAgICAgLy8gcmVnaXN0cmF0aW9uIGZhaWxlZCA6KFxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDogJywgZXJyKTtcbi8vICAgICAgICAgfSk7XG4vLyAgICAgfSk7XG4vLyB9XG4vLyBjb25zb2xlLmxvZygndHlwZSBzY3JpcHQnKTtcbi8vIGZ1bmN0aW9uIHNob3dOb3RpZmljYXRpb24oKSB7XG4vLyAgICAgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKGZ1bmN0aW9uKHJlc3VsdCkge1xuLy8gICAgICAgICBpZiAocmVzdWx0ID09PSAnZ3JhbnRlZCcpIHtcbi8vICAgICAgICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5LnRoZW4oZnVuY3Rpb24ocmVnaXN0cmF0aW9uKSB7XG4vLyAgICAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uLnNob3dOb3RpZmljYXRpb24oJ1ZpYnJhdGlvbiBTYW1wbGUnLCB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGJvZHk6ICdCdXp6ISBCdXp6IScsXG4vLyAgICAgICAgICAgICAgICAgICAgIGljb246ICcvYW5kcm9pZC1jaHJvbWUtNTEyeDUxMi5wbmcnLFxuLy8gICAgICAgICAgICAgICAgICAgICB2aWJyYXRlOiBbMjAwLCAxMDAsIDIwMCwgMTAwLCAyMDAsIDEwMCwgMjAwXSxcbi8vICAgICAgICAgICAgICAgICAgICAgdGFnOiAndmlicmF0aW9uLXNhbXBsZSdcbi8vICAgICAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9XG4vLyAgICAgfSk7XG4vLyB9XG4vLyBzaG93Tm90aWZpY2F0aW9uKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvc2NyaXB0LnRzIiwiaW1wb3J0IFRvRG9MaXN0IGZyb20gJy4vdG9kb2xpc3QnO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlJztcbmNvbnN0IHRlbXBsYXRlID0gYFxuPGJ1dHRvbiBpZD1cInRvZG9CdWlsZGVyXCI+PC9idXR0b24+XG48ZGl2IGNsYXNzPVwidG9kby1saXN0LWJvYXJkXCI+PC9kaXY+XG5gO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9Eb0J1aWxkZXJ7XG4gICAgYm9hcmQ6IEhUTUxEaXZFbGVtZW50O1xuICAgIHN0b3JhZ2U6IFN0b3JhZ2U7XG4gICAgZGF0YTogQXJyYXk8T2JqZWN0PjtcbiAgICBidXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xuICAgIGxpc3RzQXJyOiBBcnJheTxPYmplY3Q+O1xuICAgIGNvbnN0cnVjdG9yKGJvYXJkKSB7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gbmV3IFN0b3JhZ2UoJ3RvZG8tbGlzdHMnKTtcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5zdG9yYWdlLmdldFN0b3JhZ2UoKTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlSW5pdGlhbExpc3RzKHRoaXMuZGF0YSk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTGlzdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlSW5pdGlhbExpc3RzKGluaXRpYWxEYXRhKXtcbiAgICAgICAgaW5pdGlhbERhdGEuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU3RvcmVkTGlzdChpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdCgpe1xuICAgICAgICB0aGlzLmJvYXJkLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICAgICAgICB0aGlzLmJ1dHRvbiA9IDxIVE1MQnV0dG9uRWxlbWVudD50aGlzLmJvYXJkLnF1ZXJ5U2VsZWN0b3IoJyN0b2RvQnVpbGRlcicpO1xuICAgICAgICB0aGlzLmxpc3RzQXJyID0gW107XG4gICAgICAgIHRoaXMuaW5pdEV2ZW50cygpO1xuICAgIH1cblxuICAgIGluaXRFdmVudHMoKXtcbiAgICAgICAgdGhpcy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNyZWF0ZUxpc3QuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignbGlzdFVwZGF0ZWQnLCB0aGlzLnVwZGF0ZUxpc3QuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignbGlzdENyZWF0ZWQnLCB0aGlzLmFkZExpc3RUb1N0b3JhZ2UuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignbGlzdFJlbW92ZWQnLCB0aGlzLnJlbW92ZUxpc3RGcm9tU3RvcmFnZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5ib2FyZC5hZGRFdmVudExpc3RlbmVyKCdsaXN0RWRpdGluZycsIHRoaXMuaGlkZUJ0bkFkZC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICB1cGRhdGVMaXN0KGUpe1xuICAgICAgICB0aGlzLnN0b3JhZ2UudXBkYXRlSXRlbShlLmRldGFpbCk7XG4gICAgICAgIHRoaXMuc2hvd0J0bkFkZCgpO1xuICAgIH1cblxuICAgIGFkZExpc3RUb1N0b3JhZ2UoZSl7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5wZXJzaXN0SXRlbShlLmRldGFpbCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlTGlzdEZyb21TdG9yYWdlKGUpe1xuICAgICAgICB0aGlzLnN0b3JhZ2UuZm9yZ2V0SXRlbShlLmRldGFpbCk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ29udGFpbmVyRm9yTGlzdCgpe1xuICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxpc3QuY2xhc3NMaXN0LmFkZCgndG9kby1saXN0Jyk7XG4gICAgICAgIHRoaXMuYm9hcmQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdC1ib2FyZCcpLmFwcGVuZENoaWxkKGxpc3QpO1xuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICB9XG5cbiAgICBjcmVhdGVMaXN0KCkge1xuICAgICAgICB0aGlzLmxpc3RzQXJyLnB1c2gobmV3IFRvRG9MaXN0KHRoaXMuY3JlYXRlQ29udGFpbmVyRm9yTGlzdCgpKSk7XG4gICAgfVxuXG4gICAgc2hvd0J0bkFkZCgpe1xuICAgICAgICAvLyBpZih0aGlzLmJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWhpZGRlbicpKXtcbiAgICAgICAgLy8gICAgIHRoaXMuYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpXG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBoaWRlQnRuQWRkKCl7XG4gICAgICAgIC8vdGhpcy5idXR0b24uY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJylcbiAgICB9XG5cbiAgICBjcmVhdGVTdG9yZWRMaXN0KGl0ZW0pe1xuICAgICAgICB0aGlzLmxpc3RzQXJyLnB1c2gobmV3IFRvRG9MaXN0KHRoaXMuY3JlYXRlQ29udGFpbmVyRm9yTGlzdCgpLCB7XG4gICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgICAgIHRhc2tzQXJyOiBpdGVtLnRhc2tzQXJyXG4gICAgICAgIH0pKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdG9Eb0J1aWxkZXIudHMiLCIvLyBpbXBvcnQgVG9Eb0xpc3RJdGVtIGZyb20gJy4vdG9Eb0xpc3RJdGVtJztcbmludGVyZmFjZSBvcHRpb25QYXJhbSB7XG4gICAgbmFtZTogc3RyaW5nLFxuICAgIGlkOiBudW1iZXIsXG4gICAgdGFza3NBcnI6IEFycmF5PE9iamVjdD5cbn1cbmludGVyZmFjZSBvcHRpb25zTWVyZ2VkIHtcbiAgICBsaXN0VGl0bGU6IHN0cmluZyxcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgaWQ6IG51bWJlcixcbiAgICB0YXNrc0FycjogQXJyYXk8T2JqZWN0PlxufVxuaW50ZXJmYWNlIHRhc2tQcm9wZXJ0aWVzIHtcbiAgICBpc0RvbmU6IGJvb2xlYW4sXG4gICAgaWQ6IG51bWJlcixcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgX2lzRG9uZTogYm9vbGVhblxufVxuaW50ZXJmYWNlIG9wdGlvbk9iamVjdCB7XG4gICAgbGlzdFRpdGxlOiBzdHJpbmcsXG59XG5jb25zdCBkZWZhdWx0T3B0aW9uczogb3B0aW9uT2JqZWN0ID0ge1xuICAgIGxpc3RUaXRsZTogJ215IExpc3QnXG59O1xuaW50ZXJmYWNlIE5vZGVTZWxlY3RvciB7XG4gICAgcXVlcnlTZWxlY3RvcjxUSFRNTEVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudD4oc2VsZWN0b3JzOiBzdHJpbmcpOiBUSFRNTEVsZW1lbnQ7XG4gICAgcXVlcnlTZWxlY3RvckFsbDxUSFRNTEVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudD4oc2VsZWN0b3JzOiBzdHJpbmcpOiBOb2RlTGlzdE9mPFRIVE1MRWxlbWVudD47XG59XG5jb25zdCBUZW1wbGF0ZSA9IGBcblxuPGRpdiBjbGFzcz1cImxpc3RfX2hlYWRlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJsaXN0X19oZWFkZXJfX3RhcmdldFwiPjwvZGl2PlxuICAgIDx0ZXh0YXJlYSBjbGFzcz1cImxpc3RfX2hlYWRlcl9faW5wdXRcIj48L3RleHRhcmVhPlxuICAgIDxhIGNsYXNzPVwiYnRuLXJlbW92ZS1saXN0XCI+PC9hPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibGlzdF9faXRlbXNcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29tcG9zZXJfX2NvbnRhaW5lclwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwibmV3VG9kb1wiPk5ldyB0YXNrPC9sYWJlbD5cbiAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwibGlzdF9faXRlbV9fY29tcG9zZXItdGV4dGFyZWFcIiBpZD1cIm5ld1RvZG9cIj48L3RleHRhcmVhPlxuICAgICAgICA8IS0tPGJ1dHRvbiBjbGFzcz1cImJ0bi1jYW5zZWwtYWRkLXRhc2tcIj48L2J1dHRvbj4tLT5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImxpc3RfX2NvbnRyb2xzXCI+XG4gICAgPGxhYmVsIGZvcj1cIlwiPkxlZnQgdGFza3M6IDwvbGFiZWw+XG4gICAgPGRpdiBjbGFzcz1cImNvdW50ZXItZG9uZVwiPjwvZGl2PlxuICAgIDxhICBjbGFzcz1cImJ0bi1jbGVhci1hbGxcIj5DbGVhciBBbGw8L2E+XG48L2Rpdj5cbmA7XG5cbmNvbnN0IEVOVEVSX0tFWUNPREUgPSAxMztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvRG9MaXN0IHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBsaXN0Q29udGFpbmVyXG4gICAgICogQHBhcmFtIG9wdGlvbnNcbiAgICAgKi9cbiAgICBsaXN0OiBIVE1MRGl2RWxlbWVudDtcbiAgICBvcHRpb246IG9wdGlvbnNNZXJnZWQ7XG4gICAgdGl0bGVOYW1lOiBTdHJpbmc7XG4gICAgdGl0bGVUYXJnZXQ6IEhUTUxEaXZFbGVtZW50O1xuICAgIHRpdGxlVGV4dGFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG4gICAgbGlzdEl0ZW1zQ29udGFpbmVyOiBIVE1MVUxpc3RFbGVtZW50O1xuICAgIGNvbXBvc2VyQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBjb21wb3NlclRleHRhcmVhOiBIVE1MVGV4dEFyZWFFbGVtZW50O1xuICAgIGJ0bkNsZWFyQWxsOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBidG5SZW1vdmVMaXN0OiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBpZDogc3RyaW5nO1xuICAgIHRhc2tzQXJyOiBBcnJheTxPYmplY3Q+O1xuICAgIGNvbnN0cnVjdG9yKGxpc3RDb250YWluZXI6IEhUTUxEaXZFbGVtZW50LCBvcHRpb25zOiBvcHRpb25QYXJhbSA9IG51bGwpe1xuICAgICAgICB0aGlzLmxpc3QgPSBsaXN0Q29udGFpbmVyO1xuICAgICAgICB0aGlzLmxpc3QuaW5uZXJIVE1MID0gVGVtcGxhdGU7XG4gICAgICAgIHRoaXMub3B0aW9uPSg8YW55Pk9iamVjdCkuYXNzaWduKHt9LGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcblxuICAgICAgICB0aGlzLnRpdGxlTmFtZSA9IDxzdHJpbmc+dGhpcy5vcHRpb24ubGlzdFRpdGxlO1xuICAgICAgICB0aGlzLnRpdGxlVGFyZ2V0ID0gPEhUTUxEaXZFbGVtZW50PnRoaXMubGlzdC5xdWVyeVNlbGVjdG9yKCcubGlzdF9faGVhZGVyX190YXJnZXQnKTtcbiAgICAgICAgdGhpcy50aXRsZVRleHRhcmVhID0gPEhUTUxUZXh0QXJlYUVsZW1lbnQ+dGhpcy5saXN0LnF1ZXJ5U2VsZWN0b3IoJy5saXN0X19oZWFkZXJfX2lucHV0Jyk7XG5cbiAgICAgICAgdGhpcy5saXN0SXRlbXNDb250YWluZXIgPSA8SFRNTFVMaXN0RWxlbWVudD50aGlzLmxpc3QucXVlcnlTZWxlY3RvcignLmxpc3RfX2l0ZW1zJyk7XG5cbiAgICAgICAgdGhpcy5jb21wb3NlckNvbnRhaW5lciA9IDxIVE1MRGl2RWxlbWVudD50aGlzLmxpc3QucXVlcnlTZWxlY3RvcignLmNvbXBvc2VyX19jb250YWluZXInKTtcbiAgICAgICAgdGhpcy5jb21wb3NlclRleHRhcmVhID0gPEhUTUxUZXh0QXJlYUVsZW1lbnQ+dGhpcy5jb21wb3NlckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGlzdF9faXRlbV9fY29tcG9zZXItdGV4dGFyZWEnKTtcblxuICAgICAgICB0aGlzLmJ0bkNsZWFyQWxsID0gPEhUTUxCdXR0b25FbGVtZW50PnRoaXMubGlzdC5xdWVyeVNlbGVjdG9yKCcuYnRuLWNsZWFyLWFsbCcpO1xuXG4gICAgICAgIHRoaXMuYnRuUmVtb3ZlTGlzdCA9IDxIVE1MQnV0dG9uRWxlbWVudD50aGlzLmxpc3QucXVlcnlTZWxlY3RvcignLmJ0bi1yZW1vdmUtbGlzdCcpO1xuICAgICAgICB0aGlzLmlkID0gPHN0cmluZz5EYXRlLm5vdygpLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMudGFza3NBcnIgPSBbXTtcblxuICAgICAgICBpZihvcHRpb25zKXtcbiAgICAgICAgICAgIHRoaXMudGl0bGVOYW1lID0gPHN0cmluZz5vcHRpb25zLm5hbWU7XG4gICAgICAgICAgICB0aGlzLmlkID0gb3B0aW9ucy5pZC50b1N0cmluZygpO1xuICAgICAgICAgICAgdGhpcy50YXNrc0FyciA9IG9wdGlvbnMudGFza3NBcnI7XG4gICAgICAgICAgICBpZih0aGlzLnRhc2tzQXJyKXtcbiAgICAgICAgICAgICAgICAvL3RoaXMuYWRkU3RvcmVkVGFza3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGRUb1N0b3JhZ2UoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBpbml0KCl7XG4gICAgICAgIHRoaXMubGlzdC5jbGFzc0xpc3QuYWRkKCdsaXN0Jyk7XG4gICAgICAgIHRoaXMubGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy5pZCk7XG4gICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50cygpO1xuICAgICAgICB0aGlzLmluaXRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBhZGRUb1N0b3JhZ2UoKXtcbiAgICAgICAgY29uc3QgbGlzdENyZWF0ZWQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2xpc3RDcmVhdGVkJywge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMudGl0bGVOYW1lLFxuICAgICAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgICAgIHRhc2tzQXJyOiB0aGlzLnRhc2tzQXJyXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxpc3QuZGlzcGF0Y2hFdmVudChsaXN0Q3JlYXRlZCk7XG4gICAgfVxuXG4gICAgb25VcGRhdGUoKXtcbiAgICAgICAgdGhpcy5yZWNvdW50KCk7XG4gICAgICAgIGNvbnN0IGxpc3RVcGRhdGVkID0gbmV3IEN1c3RvbUV2ZW50KCdsaXN0VXBkYXRlZCcsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnRpdGxlTmFtZSxcbiAgICAgICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgICAgICB0YXNrc0FycjogdGhpcy50YXNrc0FyclxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5saXN0LmRpc3BhdGNoRXZlbnQobGlzdFVwZGF0ZWQpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNvbXBvbmVudHMoKXtcbiAgICAgICAgdGhpcy50aXRsZVRleHRhcmVhLnZhbHVlID0gdGhpcy5vcHRpb24ubmFtZSA/IHRoaXMub3B0aW9uLm5hbWUgOiB0aGlzLm9wdGlvbi5saXN0VGl0bGUgO1xuICAgICAgICB0aGlzLnJlY291bnQoKTtcbiAgICB9XG5cbiAgICBpbml0RXZlbnRzKCl7XG4gICAgICAgIHRoaXMubGlzdC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCB0aGlzLm9uUmVtb3ZlLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnRpdGxlVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblRpdGxlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMudGl0bGVUZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5vblRleHRhcmVhQmx1ci5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5idG5DbGVhckFsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xlYXJBbGxUYXNrcy5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5idG5SZW1vdmVMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZW1vdmVMaXN0LmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmNvbXBvc2VyVGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKT0+e1xuICAgICAgICAgICBpZihlLmtleUNvZGUgPT09IEVOVEVSX0tFWUNPREUpe1xuICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgdGhpcy5hZGRUYXNrLmJpbmQodGhpcykoKTtcbiAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb21wb3NlclRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywoZSk9PntcbiAgICAgICAgICAgIHRoaXMuY29tcG9zZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUV2ZW50T2ZMaXN0RWRpdGluZygpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb21wb3NlclRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLChlKT0+e1xuICAgICAgICAgICAgdGhpcy5jb21wb3NlckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgIHRoaXMuYWRkVGFzay5iaW5kKHRoaXMpKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY21wb3NlciBibHVyJylcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGlzdEl0ZW1zQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Rhc2tUb2dnbGVkJywgKGUpPT57XG4gICAgICAgICAgICB0aGlzLm9uVXBkYXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxpc3RJdGVtc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkZWxldGUnLCAoZSk9PntcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlVGFzayhlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGlzdEl0ZW1zQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ25hbWVDaGFuZ2VkJywgKGUpPT57XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVRhc2tOYW1lKGUpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBjcmVhdGVFdmVudE9mTGlzdEVkaXRpbmcoKXtcbiAgICAgICAgY29uc3QgbGlzdEVkaXRpbmcgPSBuZXcgQ3VzdG9tRXZlbnQoJ2xpc3RFZGl0aW5nJywge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGRldGFpbDoge31cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGlzdC5kaXNwYXRjaEV2ZW50KGxpc3RFZGl0aW5nKTtcblxuICAgIH1cblxuICAgIG9uVGl0bGVDbGljaygpe1xuICAgICAgICB0aGlzLnRpdGxlVGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xuICAgICAgICB0aGlzLnRpdGxlVGV4dGFyZWEuZm9jdXMoKTtcbiAgICAgICAgdGhpcy50aXRsZVRleHRhcmVhLnNlbGVjdCgpO1xuICAgICAgICB0aGlzLmNyZWF0ZUV2ZW50T2ZMaXN0RWRpdGluZygpO1xuICAgIH1cblxuICAgIG9uVGV4dGFyZWFCbHVyKCl7XG4gICAgICAgIHRoaXMudGl0bGVOYW1lID0gdGhpcy50aXRsZVRleHRhcmVhLnZhbHVlO1xuICAgICAgICB0aGlzLnRpdGxlVGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xuICAgICAgICBjb25zdCB1cGRhdGVUaXRsZSA9IG5ldyBDdXN0b21FdmVudCgndXBkYXRlJyx7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgVG9Eb0xpc3Q6IHRoaXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGlzdC5kaXNwYXRjaEV2ZW50KHVwZGF0ZVRpdGxlKTtcbiAgICAgICAgdGhpcy5vblVwZGF0ZSgpO1xuICAgIH1cblxuICAgIG9uQ29tcG9zZXJMaW5rQ2xpY2soKXtcbiAgICAgICAgdGhpcy5jb21wb3NlckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcbiAgICAgICAgdGhpcy5jb21wb3NlclRleHRhcmVhLmZvY3VzKCk7XG4gICAgfVxuICAgIG9uQ29tcG9zZXJMYWJlbENsaWNrKGUpe1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzKVxuICAgIH1cblxuICAgIGFkZFRhc2soKXtcbiAgICAgICAgaWYodGhpcy5jb21wb3NlclRleHRhcmVhLnZhbHVlKXtcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgnbGlzdF9faXRlbScpO1xuICAgICAgICAgICAgdGhpcy5saXN0SXRlbXNDb250YWluZXIuaW5zZXJ0QmVmb3JlKHRhc2ssIHRoaXMubGlzdEl0ZW1zQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jb21wb3Nlcl9fY29udGFpbmVyJykpO1xuICAgICAgICAgICAgLy90aGlzLnRhc2tzQXJyLnB1c2gobmV3IFRvRG9MaXN0SXRlbSh0YXNrLCB0aGlzLmNvbXBvc2VyVGV4dGFyZWEudmFsdWUpKTtcblxuICAgICAgICAgICAgaW1wb3J0KCcuL3RvRG9MaXN0SXRlbScpLnRoZW4obW9kdWxlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tzQXJyLnB1c2gobmV3IG1vZHVsZS5kZWZhdWx0KHRhc2ssIHRoaXMuY29tcG9zZXJUZXh0YXJlYS52YWx1ZSkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1vZHVsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMub25VcGRhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9zZXJUZXh0YXJlYS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIC8vYWxlcnQoJ1Rhc2sgZmllbGQgaXMgZW1wdHknKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkU3RvcmVkVGFza3MoKXtcbiAgICAgICAgdGhpcy50YXNrc0FyciA9IHRoaXMudGFza3NBcnIubWFwKChpdGVtOiB0YXNrUHJvcGVydGllcykgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKCdsaXN0X19pdGVtJyk7XG4gICAgICAgICAgICB0aGlzLmxpc3RJdGVtc0NvbnRhaW5lci5pbnNlcnRCZWZvcmUodGFzaywgdGhpcy5saXN0SXRlbXNDb250YWluZXIucXVlcnlTZWxlY3RvcignLmNvbXBvc2VyX19jb250YWluZXInKSk7XG4gICAgICAgICAgICAvLyByZXR1cm4gbmV3IFRvRG9MaXN0SXRlbSh0YXNrLCBpdGVtLm5hbWUsIHtcbiAgICAgICAgICAgIC8vICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgICAgIC8vICAgICBpc0RvbmU6IGl0ZW0uX2lzRG9uZVxuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRlbGV0ZVRhc2soZSkge1xuICAgICAgICBjb25zdCB0YXNrSWQgPSBlLmRldGFpbC5pZDtcbiAgICAgICAgdGhpcy50YXNrc0FyciA9IHRoaXMudGFza3NBcnIuZmlsdGVyKChlbGVtOiB0YXNrUHJvcGVydGllcyk9PntcbiAgICAgICAgICAgIHJldHVybiBlbGVtLmlkICE9PSB0YXNrSWQ7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9uVXBkYXRlKCk7XG4gICAgfVxuXG4gICAgY2hhbmdlVGFza05hbWUoZSl7XG4gICAgICAgdGhpcy5vblVwZGF0ZSgpO1xuICAgIH1cblxuICAgIGNsZWFyQWxsVGFza3MoKXtcbiAgICAgICAgY29uc3QgVGFza05vZGVzICA9IHRoaXMubGlzdEl0ZW1zQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0X19pdGVtJyk7XG4gICAgICAgIFRhc2tOb2Rlcy5mb3JFYWNoKChlbGVtKSA9PntcbiAgICAgICAgICAgIGVsZW0ucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRhc2tzQXJyID0gW107XG4gICAgICAgIHRoaXMub25VcGRhdGUoKTtcbiAgICB9XG5cbiAgICByZW1vdmVMaXN0KCl7XG4gICAgICAgIGNvbnN0IGV2ZW50UmVtb3ZlTGlzdCA9IG5ldyBDdXN0b21FdmVudCgnbGlzdFJlbW92ZWQnLCB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgZGV0YWlsOiB0aGlzLmlkXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxpc3QuZGlzcGF0Y2hFdmVudChldmVudFJlbW92ZUxpc3QpO1xuICAgICAgICB0aGlzLmxpc3QuY2xhc3NMaXN0LmFkZCgnaXMtZGVsZXRlZCcpO1xuICAgIH1cbiAgICBvblJlbW92ZShlKXtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIGlmKGUudGFyZ2V0ID09IHRoaXMubGlzdCAmJiBlLmFuaW1hdGlvbk5hbWUgPT09IFwic2NhbGVcIil7XG4gICAgICAgICAgICB0aGlzLmxpc3QucmVtb3ZlKCk7XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICByZWNvdW50KCl7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGFza3NBcnIpO1xuICAgICAgICB0aGlzLmxpc3RcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY291bnRlci1kb25lJylcbiAgICAgICAgICAgIC5pbm5lckhUTUwgPSB0aGlzLnRhc2tzQXJyLmZpbHRlcigoaXRlbTogdGFza1Byb3BlcnRpZXMpPT4gIWl0ZW0uaXNEb25lKS5sZW5ndGgudG9TdHJpbmcoKTtcbiAgICB9XG59XG4vLyBleHBvcnQgdmFyIF9fdXNlRGVmYXVsdCA9IHRydWU7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy90b2RvbGlzdC50cyIsImNvbnN0IGxpc3RJdGVtVGVtcGxhdGUgPSBgXG48ZGl2IGNsYXNzPVwiY2hlY2tib3hcIj48L2Rpdj5cbjxkaXYgY2xhc3M9XCJ0YXNrLW5hbWVfX2NvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrLW5hbWVfX3RhcmdldFwiPjwvZGl2PlxuICAgIDx0ZXh0YXJlYSBjbGFzcz1cInRhc2stbmFtZV9faW5wdXRcIj48L3RleHRhcmVhPlxuPC9kaXY+XG48YSBjbGFzcz1cImJ0bi1yZW1vdmVcIj48L2E+XG5gO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9Eb0xpc3RJdGVtIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgbGlzdEl0ZW06IEhUTUxEaXZFbGVtZW50O1xuICAgIGNoZWNrYm94OiBIVE1MRGl2RWxlbWVudDtcbiAgICBuYW1lVGFyZ2V0OiBIVE1MRGl2RWxlbWVudDtcbiAgICBuYW1lVGV4dGFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG4gICAgYnRuUmVtb3ZlOiBIVE1MQW5jaG9yRWxlbWVudDtcbiAgICBwcml2YXRlIF9pc0RvbmU6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfaXNEZWxldGVkOiBib29sZWFuO1xuICAgIGlkOiBzdHJpbmc7XG4gICAgb3B0aW9uczogT2JqZWN0O1xuICAgIGNvbnN0cnVjdG9yKGl0ZW0sIHZhbHVlLCBvcHRpb25zID0gbnVsbCkge1xuICAgICAgICB0aGlzLm5hbWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5saXN0SXRlbSA9IGl0ZW07XG4gICAgICAgIHRoaXMubGlzdEl0ZW0uaW5uZXJIVE1MID0gbGlzdEl0ZW1UZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5jaGVja2JveCA9IDxIVE1MRGl2RWxlbWVudD50aGlzLmxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveCcpO1xuICAgICAgICB0aGlzLm5hbWVUYXJnZXQgPSA8SFRNTERpdkVsZW1lbnQ+dGhpcy5saXN0SXRlbS5xdWVyeVNlbGVjdG9yKCcudGFzay1uYW1lX190YXJnZXQnKTtcbiAgICAgICAgdGhpcy5uYW1lVGV4dGFyZWEgPSA8SFRNTFRleHRBcmVhRWxlbWVudD50aGlzLmxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW5hbWVfX2lucHV0Jyk7XG4gICAgICAgIHRoaXMuYnRuUmVtb3ZlID0gPEhUTUxBbmNob3JFbGVtZW50PnRoaXMubGlzdEl0ZW0ucXVlcnlTZWxlY3RvcignLmJ0bi1yZW1vdmUnKTtcbiAgICAgICAgdGhpcy5faXNEb25lID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2lzRGVsZXRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlkID0gPHN0cmluZz5EYXRlLm5vdygpLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHt9LCBvcHRpb25zKTtcbiAgICAgICAgaWYob3B0aW9ucyl7XG4gICAgICAgICAgICB0aGlzLmlkID0gb3B0aW9ucy5pZDtcbiAgICAgICAgICAgIHRoaXMuX2lzRG9uZSA9IG9wdGlvbnMuaXNEb25lO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgICBnZXQgaXNEb25lKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0RvbmU7XG4gICAgfVxuICAgIHNldCBpc0RvbmUodmFsdWUpe1xuICAgICAgICBpZih2YWx1ZSl7XG4gICAgICAgICAgICB0aGlzLl9pc0RvbmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZVRhc2soKVxuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9pc0RvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudW5kb0NvbXBsZXRlVGFzaygpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9uVG9nZ2xlSXRlbSA9IG5ldyBDdXN0b21FdmVudCgndGFza1RvZ2dsZWQnLCB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgZGV0YWlsOiB0aGlzXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxpc3RJdGVtLmRpc3BhdGNoRXZlbnQob25Ub2dnbGVJdGVtKTtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5pbml0RG9NRWxlbWVudHMoKTtcbiAgICAgICAgdGhpcy5pbml0RXZlbnRzKCk7XG4gICAgfVxuXG4gICAgaW5pdERvTUVsZW1lbnRzKCl7XG4gICAgICAgIHRoaXMubGlzdEl0ZW0uc2V0QXR0cmlidXRlKCdpZCcsIHRoaXMuaWQpO1xuICAgICAgICB0aGlzLm5hbWVUZXh0YXJlYS52YWx1ZSA9IHRoaXMubmFtZTtcbiAgICAgICAgdGhpcy5idG5SZW1vdmUuY2xhc3NMaXN0LmFkZCgnYnRuLXJlbW92ZScpO1xuICAgICAgICBpZih0aGlzLmlzRG9uZSl7XG4gICAgICAgICAgICB0aGlzLmxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2lzLWRvbmUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRFdmVudHMoKXtcbiAgICAgICAgdGhpcy5idG5SZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRlbGV0ZUl0ZW0uYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICAgICAgdGhpcy5pc0RvbmU9IXRoaXMuaXNEb25lXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm5hbWVUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmVkaXRJdGVtLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLm5hbWVUZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5yZW5hbWVUYXNrLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGRlbGV0ZUl0ZW0oKXtcbiAgICAgICAgY29uc3QgZXZlbnREZWxldGUgPSBuZXcgQ3VzdG9tRXZlbnQoJ2RlbGV0ZScsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBkZXRhaWw6IHRoaXNcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGlzdEl0ZW0uZGlzcGF0Y2hFdmVudChldmVudERlbGV0ZSk7XG4gICAgICAgIHRoaXMubGlzdEl0ZW0ucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgY29tcGxldGVUYXNrKCl7XG4gICAgICAgIHRoaXMubGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnaXMtZG9uZScpO1xuICAgIH1cblxuICAgIHVuZG9Db21wbGV0ZVRhc2soKXtcbiAgICAgICAgdGhpcy5saXN0SXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1kb25lJyk7XG4gICAgfVxuXG4gICAgZWRpdEl0ZW0oZSl7XG4gICAgICAgIHRoaXMubmFtZVRleHRhcmVhLmZvY3VzKCk7XG4gICAgICAgIHRoaXMubmFtZVRhcmdldC5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcbiAgICAgICAgdGhpcy5saXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdpcy1lZGl0aW5nJyk7XG4gICAgfVxuXG4gICAgcmVuYW1lVGFzayhlKXtcbiAgICAgICAgY29uc3QgcHJldmlvdXNOYW1lID0gdGhpcy5uYW1lO1xuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLm5hbWVUZXh0YXJlYS52YWx1ZTtcbiAgICAgICAgdGhpcy5uYW1lVGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xuICAgICAgICB0aGlzLmxpc3RJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWVkaXRpbmcnKTtcbiAgICAgICAgY29uc3QgbmFtZUNoYW5nZWQgPSBuZXcgQ3VzdG9tRXZlbnQoJ25hbWVDaGFuZ2VkJywge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgIGxpc3RJdGVtOiB0aGlzLFxuICAgICAgICAgICAgICAgIHByZXY6IHByZXZpb3VzTmFtZSxcbiAgICAgICAgICAgICAgICB1cGRhdGVkOiB0aGlzLm5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGlzdEl0ZW0uZGlzcGF0Y2hFdmVudChuYW1lQ2hhbmdlZCk7XG4gICAgfVxuXG59XG4vLyBleHBvcnQgdmFyIF9fdXNlRGVmYXVsdCA9IHRydWU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3RvRG9MaXN0SXRlbS50cyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JhZ2Uge1xuICAgIHN0b3JhZ2VLZXk6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihzdG9yYWdlS2V5KSB7XG4gICAgICAgIHRoaXMuc3RvcmFnZUtleSA9IHN0b3JhZ2VLZXk7XG4gICAgfVxuXG4gICAgcGVyc2lzdEl0ZW0oaXRlbSkge1xuICAgICAgICBjb25zdCBzdG9yYWdlID0gdGhpcy5nZXRTdG9yYWdlKCk7XG4gICAgICAgIHN0b3JhZ2UucHVzaChpdGVtKTtcbiAgICAgICAgdGhpcy5zZXRTdG9yYWdlKHN0b3JhZ2UpO1xuICAgIH1cblxuICAgIHVwZGF0ZUl0ZW0obGlzdCl7XG4gICAgICAgIGNvbnN0IHRvZG9zID0gdGhpcy5nZXRTdG9yYWdlKCk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdG9kb3MuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5pZCA9PT0gbGlzdC5pZCk7XG4gICAgICAgIHRvZG9zW2luZGV4XSA9IGxpc3Q7XG4gICAgICAgIHRoaXMuc2V0U3RvcmFnZSh0b2Rvcyk7XG4gICAgfVxuXG4gICAgZm9yZ2V0SXRlbShpdGVtSWQpIHtcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IHRoaXMuZ2V0U3RvcmFnZSgpLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09IGl0ZW1JZCk7XG4gICAgICAgIHRoaXMuc2V0U3RvcmFnZShzdG9yYWdlKTtcbiAgICB9XG5cbiAgICBnZXRTdG9yYWdlKCkge1xuICAgICAgICBjb25zdCB0b2RvcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuc3RvcmFnZUtleSk7XG4gICAgICAgIHJldHVybiB0b2RvcyA/IEpTT04ucGFyc2UodG9kb3MpIDogW107XG4gICAgfVxuXG4gICAgc2V0U3RvcmFnZShzdG9yYWdlKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuc3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZSkpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9zdG9yYWdlLnRzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jc3Mvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9