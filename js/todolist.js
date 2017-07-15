'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultOptions = {
    listTitle: 'my List'
};

var ToDoList = function () {
    function ToDoList(list, options) {
        _classCallCheck(this, ToDoList);

        this.list = list;
        this.title = null;
        this.titleName = null;
        this.titleTarget = null;
        this.titleTextarea = null;
        this.composerContainer = null;
        this.composerLink = null;
        this.composerTextarea = null;
        this.listItemsContainer = null;
        this.btnAddTask = null;
        this.btnCanselComposer = null;
        this.input = null;
        this.option = Object.assign({}, defaultOptions, options);
        this.init();
    }

    _createClass(ToDoList, [{
        key: 'init',
        value: function init() {
            console.log(this.list);
            this.createChildComponents();
            this.initEvents();
        }
    }, {
        key: 'createChildComponents',
        value: function createChildComponents() {
            this.title = document.createElement('div');
            this.title.classList.add('list__header');
            this.list.appendChild(this.title);

            this.titleTarget = document.createElement('div');
            this.titleTarget.classList.add('list__header__target');
            this.title.appendChild(this.titleTarget);

            this.titleTextarea = document.createElement('textarea');
            this.titleTextarea.classList.add('list__header__input');
            if (!this.titleName) {
                this.titleTextarea.value = this.option.listTitle;
            }
            this.title.appendChild(this.titleTextarea);

            this.listItemsContainer = document.createElement('div');
            this.listItemsContainer.classList.add('list__items');
            this.list.appendChild(this.listItemsContainer);

            this.composerContainer = document.createElement('div');

            this.composerLink = document.createElement('a');
            this.composerLink.textContent = 'Add new task...';
            this.composerLink.classList.add('open-list-composer');
            this.listItemsContainer.appendChild(this.composerLink);

            this.composerTextarea = document.createElement('textarea');
            this.composerTextarea.classList.add('list__item', 'list__item__composer-textarea');
            this.composerTextarea.autofocus = true;

            this.btnAddTask = document.createElement('button');
            this.btnAddTask.classList.add('btn-add-task');
            this.btnAddTask.textContent = "Add";

            this.btnCanselComposer = document.createElement('button');
            this.btnCanselComposer.classList.add('btn-cansel-add-task');
            this.btnCanselComposer.textContent = "Cansel";
        }
    }, {
        key: 'initEvents',
        value: function initEvents() {
            this.titleTarget.addEventListener('click', this.onTitleClick.bind(this));
            this.titleTextarea.addEventListener('blur', this.onTextareaBlur.bind(this));
            this.composerLink.addEventListener('click', this.onComposerLinkClick.bind(this));
            this.btnCanselComposer.addEventListener('click', this.onCanselComposer.bind(this));
            this.btnAddTask.addEventListener('click', this.addTask.bind(this));
        }
    }, {
        key: 'onTitleClick',
        value: function onTitleClick() {
            console.log(this);
            this.titleTarget.classList.add('is-hidden');
            this.titleTextarea.focus();
        }
    }, {
        key: 'onTextareaBlur',
        value: function onTextareaBlur() {
            this.titleName = this.titleTextarea.value;
            this.titleTarget.classList.remove('is-hidden');
        }
    }, {
        key: 'onComposerLinkClick',
        value: function onComposerLinkClick() {
            this.composerLink.classList.add('is-hidden');
            this.listItemsContainer.insertBefore(this.composerContainer, this.composerLink);
            this.composerContainer.appendChild(this.composerTextarea);
            this.composerContainer.appendChild(this.btnAddTask);
            this.composerContainer.appendChild(this.btnCanselComposer);
        }
    }, {
        key: 'onCanselComposer',
        value: function onCanselComposer() {
            this.composerContainer.remove();
            this.composerLink.classList.remove('is-hidden');
            this.composerTextarea.value = "";
        }
    }, {
        key: 'addTask',
        value: function addTask() {
            if (this.composerTextarea.value) {
                var task = new ToDoListItem(this.composerTextarea.value);
                this.onCanselComposer();
            }
        }
    }]);

    return ToDoList;
}();