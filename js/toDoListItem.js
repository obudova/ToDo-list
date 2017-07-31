'use strict';

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
// export var __useDefault = true;