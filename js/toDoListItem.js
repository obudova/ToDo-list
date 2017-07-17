'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ToDoListItem = function () {
    function ToDoListItem(value, options) {
        _classCallCheck(this, ToDoListItem);

        this.name = value;
        this.listItem = null;
        this.checkbox = null;
        this.nameTarget = null;
        this.nameTextarea = null;
        this.btnRemove = null;
        this._isDone = false;
        this._isDeleted = false;
        this.id = Date.now();
        this.options = Object.assign({}, defaultOptions, options);
        this.init();
    }

    _createClass(ToDoListItem, [{
        key: 'init',
        value: function init() {
            this.createDoMElements();
            this.initEvents();
            this.onResolve();
        }
    }, {
        key: 'createDoMElements',
        value: function createDoMElements() {
            this.listItem = document.createElement('div');
            this.listItem.classList.add('list__item');
            this.listItem.setAttribute('id', this.id);

            this.checkbox = document.createElement('div');
            this.checkbox.setAttribute('class', 'checkbox');

            var nameContainer = document.createElement('div');
            nameContainer.classList.add('task-name__container');

            this.nameTarget = document.createElement('div');
            this.nameTarget.classList.add('task-name__target');
            nameContainer.appendChild(this.nameTarget);

            this.nameTextarea = document.createElement('textarea');
            this.nameTextarea.classList.add('task-name__input');
            this.nameTextarea.value = this.name;
            nameContainer.appendChild(this.nameTextarea);

            this.btnRemove = document.createElement('a');
            this.btnRemove.classList.add('btn-remove');

            this.listItem.appendChild(this.checkbox);
            // this.listItem.appendChild(span);
            this.listItem.appendChild(nameContainer);
            this.listItem.appendChild(this.btnRemove);
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
        }
    }, {
        key: 'completeTask',
        value: function completeTask() {
            var eventComplete = new CustomEvent('complete', {
                bubbles: true,
                detail: this
            });
            this.listItem.dispatchEvent(eventComplete);
        }
    }, {
        key: 'undoCompleteTask',
        value: function undoCompleteTask() {
            var eventIncomplete = new CustomEvent('incomplete', {
                bubbles: true,
                detail: this
            });
            this.listItem.dispatchEvent(eventIncomplete);
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
        key: 'onResolve',
        value: function onResolve() {
            var name = this.name;
            var id = this.id;
            var task = {
                name: name,
                id: id
            };
            this.options.onResolve && this.options.onResolve.call(this, this.listItem, task);
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
        }
    }]);

    return ToDoListItem;
}();