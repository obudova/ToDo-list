'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _toDoListItem = require('./toDoListItem');

var _toDoListItem2 = _interopRequireDefault(_toDoListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultOptions = {
    listTitle: 'my List'
};

var Template = '\n\n<div class="list__header">\n    <div class="list__header__target"></div>\n    <textarea class="list__header__input"></textarea>\n    <a class="btn-remove-list"></a>\n</div>\n<div class="list__items">\n    <div class="composer__container">\n        <label for="newTodo">New task</label>\n        <textarea class="list__item__composer-textarea" id="newTodo"></textarea>\n        <button class="btn-add-task is-hidden">Add</button>\n        <!--<button class="btn-cansel-add-task"></button>-->\n    </div>\n</div>\n<div class="list__controls">\n    <a  class="btn-clear-all">Clear All</a>\n    <label for="">Left tasks: </label>\n    <div class="counter-done"></div>\n</div>\n';

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
        }
    }, {
        key: 'createEventOfListEditing',
        value: function createEventOfListEditing() {
            var listEditing = new CustomEvent('listEditing', {
                bubbles: true,
                detail: {}
            });
            this.list.dispatchEvent(listEditing);
        }
    }, {
        key: 'onTitleClick',
        value: function onTitleClick() {
            this.titleTarget.classList.add('is-hidden');
            this.titleTextarea.focus();
            this.titleTextarea.select();
            this.createEventOfListEditing();
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
                //alert('Task field is empty')
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
// export var __useDefault = true;


exports.default = ToDoList;