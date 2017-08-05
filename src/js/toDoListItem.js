"use strict";
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
exports.__esModule = true;
exports["default"] = ToDoListItem;
// export var __useDefault = true; 
//# sourceMappingURL=toDoListItem.js.map