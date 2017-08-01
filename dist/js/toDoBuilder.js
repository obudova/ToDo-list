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
            this.board.addEventListener('listEditing', this.hideBtnAdd.bind(this));
        }
    }, {
        key: 'updateList',
        value: function updateList(e) {
            this.storage.updateItem(e.detail);
            this.showBtnAdd();
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
        key: 'showBtnAdd',
        value: function showBtnAdd() {
            // if(this.button.classList.contains('is-hidden')){
            //     this.button.classList.remove('is-hidden')
            // }
        }
    }, {
        key: 'hideBtnAdd',
        value: function hideBtnAdd() {
            //this.button.classList.add('is-hidden')
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