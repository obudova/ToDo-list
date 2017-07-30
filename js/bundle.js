(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _toDoBuilder = require('./toDoBuilder');

var _toDoBuilder2 = _interopRequireDefault(_toDoBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var builder = new _toDoBuilder2.default(document.querySelector('.board'));
},{"./toDoBuilder":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Storage = function () {
    function Storage(storageKey) {
        _classCallCheck(this, Storage);

        this.storageKey = storageKey;
    }

    _createClass(Storage, [{
        key: "persistItem",
        value: function persistItem(item) {
            var storage = this.getStorage();
            storage.push(item);
            this.setStorage(storage);
        }
    }, {
        key: "updateItem",
        value: function updateItem(list) {
            var todos = this.getStorage();
            function isMatch(item) {
                return item.id == list.id;
            }
            var index = todos.findIndex(isMatch);
            todos[index] = list;
            this.setStorage(todos);
        }
    }, {
        key: "forgetItem",
        value: function forgetItem(itemId) {
            var storage = this.getStorage().filter(function (item) {
                return item.id !== itemId;
            });
            this.setStorage(storage);
        }
    }, {
        key: "getStorage",
        value: function getStorage() {
            var todos = localStorage.getItem(this.storageKey);
            return todos ? JSON.parse(todos) : [];
        }
    }, {
        key: "setStorage",
        value: function setStorage(storage) {
            localStorage.setItem(this.storageKey, JSON.stringify(storage));
        }
    }]);

    return Storage;
}();

exports.default = Storage;
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _todolist = require('./todolist');

var _todolist2 = _interopRequireDefault(_todolist);

var _storage = require('./storage');

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var template = '\n<button id="todoBuilder"></button>\n<div class="todo-list-board"></div>\n';

var ToDoBuilder = function () {
    function ToDoBuilder(board) {
        _classCallCheck(this, ToDoBuilder);

        this.board = board;
        this.storage = new _storage2.default('todo-lists');
        this.data = this.storage.getStorage();
        this.init();

        if (this.data.length) {
            this.createInitialLists(this.data);
        } else {
            this.createList();
        }
    }

    _createClass(ToDoBuilder, [{
        key: 'createInitialLists',
        value: function createInitialLists(initialData) {
            var _this = this;

            initialData.forEach(function (item) {
                _this.createStoredList(item);
            });
        }
    }, {
        key: 'init',
        value: function init() {
            this.board.innerHTML = template;
            this.button = this.board.querySelector('#todoBuilder');
            this.listsArr = [];
            this.initEvents();
        }
    }, {
        key: 'initEvents',
        value: function initEvents() {
            this.button.addEventListener('click', this.createList.bind(this));
            this.board.addEventListener('listUpdated', this.updateList.bind(this));
            this.board.addEventListener('listCreated', this.addListToStorage.bind(this));
            this.board.addEventListener('listRemoved', this.removeListFromStorage.bind(this));
        }
    }, {
        key: 'updateList',
        value: function updateList(e) {
            this.storage.updateItem(e.detail);
        }
    }, {
        key: 'addListToStorage',
        value: function addListToStorage(e) {
            this.storage.persistItem(e.detail);
        }
    }, {
        key: 'removeListFromStorage',
        value: function removeListFromStorage(e) {
            this.storage.forgetItem(e.detail);
        }
    }, {
        key: 'createContainerForList',
        value: function createContainerForList() {
            var list = document.createElement('div');
            list.classList.add('todo-list', 'mat-elevation-2dp');
            this.board.querySelector('.todo-list-board').appendChild(list);
            return list;
        }
    }, {
        key: 'createList',
        value: function createList() {
            this.listsArr.push(new _todolist2.default(this.createContainerForList()));
        }
    }, {
        key: 'createStoredList',
        value: function createStoredList(item) {
            this.listsArr.push(new _todolist2.default(this.createContainerForList(), {
                name: item.name,
                id: item.id,
                tasksArr: item.tasksArr
            }));
        }
    }]);

    return ToDoBuilder;
}();

exports.default = ToDoBuilder;
},{"./storage":2,"./todolist":5}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var listItemTemplate = '\n<div class="checkbox"></div>\n<div class="task-name__container">\n    <div class="task-name__target"></div>\n    <textarea class="task-name__input"></textarea>\n</div>\n<a class="btn-remove"></a>\n';

var ToDoListItem = function () {
    function ToDoListItem(item, value, options) {
        _classCallCheck(this, ToDoListItem);

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

    _createClass(ToDoListItem, [{
        key: 'init',
        value: function init() {
            this.initDoMElements();
            this.initEvents();
        }
    }, {
        key: 'initDoMElements',
        value: function initDoMElements() {
            this.listItem.setAttribute('id', this.id);
            this.nameTextarea.value = this.name;
            this.btnRemove.classList.add('btn-remove');
            if (this.isDone) {
                this.listItem.classList.add('is-done');
            }
        }
    }, {
        key: 'initEvents',
        value: function initEvents() {
            var _this = this;

            this.btnRemove.addEventListener('click', this.deleteItem.bind(this));
            this.checkbox.addEventListener('click', function () {
                _this.isDone = !_this.isDone;
            });
            this.nameTarget.addEventListener('click', this.editItem.bind(this));
            this.nameTextarea.addEventListener('blur', this.renameTask.bind(this));
        }
    }, {
        key: 'deleteItem',
        value: function deleteItem() {
            var eventDelete = new CustomEvent('delete', {
                bubbles: true,
                detail: this
            });
            this.listItem.dispatchEvent(eventDelete);
            this.listItem.remove();
        }
    }, {
        key: 'completeTask',
        value: function completeTask() {
            this.listItem.classList.add('is-done');
        }
    }, {
        key: 'undoCompleteTask',
        value: function undoCompleteTask() {
            this.listItem.classList.remove('is-done');
        }
    }, {
        key: 'editItem',
        value: function editItem(e) {
            this.nameTextarea.focus();
            this.nameTarget.classList.add('is-hidden');
        }
    }, {
        key: 'renameTask',
        value: function renameTask(e) {
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
        }
    }, {
        key: 'isDone',
        get: function get() {
            return this._isDone;
        },
        set: function set(value) {
            if (value) {
                this._isDone = true;
                this.completeTask();
            } else {
                this._isDone = false;
                this.undoCompleteTask();
            }
            var onToggleItem = new CustomEvent('taskToggled', {
                bubbles: true,
                detail: this
            });
            this.listItem.dispatchEvent(onToggleItem);
        }
    }]);

    return ToDoListItem;
}();

exports.default = ToDoListItem;
var __useDefault = exports.__useDefault = true;
},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.__useDefault = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _toDoListItem = require('./toDoListItem');

var _toDoListItem2 = _interopRequireDefault(_toDoListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultOptions = {
    listTitle: 'my List'
};

var Template = '\n\n<div class="list__header">\n    <div class="list__header__target"></div>\n    <textarea class="list__header__input"></textarea>\n    <a class="btn-remove-list"></a>\n</div>\n<div class="list__items">\n    <div class="composer__container list__item">\n        <textarea class="list__item__composer-textarea" placeholder="New task"></textarea>\n        <button class="btn-add-task is-hidden">Add</button>\n        <!--<button class="btn-cansel-add-task"></button>-->\n    </div>\n</div>\n<div class="list__controls">\n    <a  class="btn-clear-all">Clear All</a>\n    <label for="">Left tasks: </label>\n    <div class="counter-done"></div>\n</div>\n';

var ENTER_KEYCODE = 13;

var ToDoList = function () {
    /**
     *
     * @param list
     * @param options
     */
    function ToDoList(list, options) {
        _classCallCheck(this, ToDoList);

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
        this.btnCanselComposer = this.composerContainer.querySelector('.btn-cansel-add-task');
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
        } else {
            this.addToStorage();
        }
        this.init();
    }

    _createClass(ToDoList, [{
        key: 'init',
        value: function init() {
            this.list.classList.add('list');
            this.list.setAttribute('id', this.id);
            this.createComponents();
            this.initEvents();
        }
    }, {
        key: 'addToStorage',
        value: function addToStorage() {
            var listCreated = new CustomEvent('listCreated', {
                bubbles: true,
                detail: {
                    name: this.titleName,
                    id: this.id,
                    tasksArr: this.tasksArr
                }
            });
            this.list.dispatchEvent(listCreated);
        }
    }, {
        key: 'onUpdate',
        value: function onUpdate() {
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
        }
    }, {
        key: 'createComponents',
        value: function createComponents() {
            this.titleTextarea.value = this.option.name ? this.option.name : this.option.listTitle;
            this.recount();
        }
    }, {
        key: 'initEvents',
        value: function initEvents() {
            var _this = this;

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
            // this.composerTextarea.addEventListener();
            this.composerTextarea.addEventListener('keydown', function (e) {
                if (e.keyCode == ENTER_KEYCODE) {
                    e.preventDefault();
                    _this.addTask.bind(_this)();
                }
            });
            this.composerTextarea.addEventListener('focus', function (e) {
                _this.btnAddTask.classList.remove('is-hidden');
            });
            this.composerTextarea.addEventListener('blur', function (e) {
                _this.btnAddTask.classList.add('is-hidden');
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
        }
    }, {
        key: 'onTitleClick',
        value: function onTitleClick() {
            this.titleTarget.classList.add('is-hidden');
            this.titleTextarea.focus();
            this.titleTextarea.select();
        }
    }, {
        key: 'onTextareaBlur',
        value: function onTextareaBlur() {
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
        }
    }, {
        key: 'onComposerLinkClick',
        value: function onComposerLinkClick() {
            this.composerContainer.classList.remove('is-hidden');
            this.composerTextarea.focus();
        }
    }, {
        key: 'addTask',
        value: function addTask() {
            if (this.composerTextarea.value) {
                var task = document.createElement('div');
                task.classList.add('list__item');
                this.listItemsContainer.insertBefore(task, this.listItemsContainer.querySelector('.composer__container'));
                this.tasksArr.push(new _toDoListItem2.default(task, this.composerTextarea.value));
                this.onUpdate();
                this.composerTextarea.value = "";
            } else {
                alert('Task field is empty');
            }
        }
    }, {
        key: 'addStoredTasks',
        value: function addStoredTasks() {
            var _this2 = this;

            this.tasksArr = this.tasksArr.map(function (item) {
                var task = document.createElement('div');
                task.classList.add('list__item');
                _this2.listItemsContainer.insertBefore(task, _this2.listItemsContainer.querySelector('.composer__container'));
                return new _toDoListItem2.default(task, item.name, {
                    id: item.id,
                    isDone: item._isDone
                });
            });
        }
    }, {
        key: 'deleteTask',
        value: function deleteTask(e) {
            var taskId = e.detail.id;
            this.tasksArr = this.tasksArr.filter(function (elem) {
                return elem.id !== taskId;
            });
            this.onUpdate();
        }
    }, {
        key: 'changeTaskName',
        value: function changeTaskName(e) {
            this.onUpdate();
        }
    }, {
        key: 'clearAllTasks',
        value: function clearAllTasks() {
            var TaskNodes = this.listItemsContainer.querySelectorAll('.list__item');
            TaskNodes.forEach(function (elem) {
                elem.remove();
            });
            this.tasksArr = [];
            this.onUpdate();
        }
    }, {
        key: 'removeList',
        value: function removeList() {
            var eventRemoveList = new CustomEvent('listRemoved', {
                bubbles: true,
                detail: this.id
            });
            this.list.dispatchEvent(eventRemoveList);
            this.list.remove();
        }
    }, {
        key: 'recount',
        value: function recount() {
            this.list.querySelector('.counter-done').textContent = this.tasksArr.filter(function (todoListItem) {
                return !todoListItem.isDone;
            }).length;
        }
    }]);

    return ToDoList;
}();

exports.default = ToDoList;
var __useDefault = exports.__useDefault = true;
},{"./toDoListItem":4}]},{},[1]);
