'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultOptions = {
    listTitle: 'my List'
};

var addTemplateHeader = '\n<div class="list__header">\n    <div class="list__header__target"></div>\n    <textarea class="list__header__input"></textarea>\n</div>\n';

var addTemplateListContainer = '\n<div class="list__items">\n    <div class="composer__container is-hidden">\n        <textarea class="list__item__composer-textarea"></textarea>\n        <button class="btn-add-task"></button>\n        <button class="btn-cansel-add-task"></button>\n    </div>\n    <a  class="open-list-composer"></a>\n</div>\n';

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
        this.list.innerHTML = addTemplateHeader + addTemplateListContainer;
        this.option = Object.assign({}, defaultOptions, options);
        this.title = this.list.querySelector('.list__header');
        this.titleName = this.option.listTitle;
        this.titleTarget = this.list.querySelector('.list__header__target');
        this.titleTextarea = this.list.querySelector('.list__header__input');

        this.listItemsContainer = this.list.querySelector('.list__items');

        this.composerContainer = this.list.querySelector('.composer__container');
        this.composerLink = this.list.querySelector('.open-list-composer');
        this.composerTextarea = this.composerContainer.querySelector('.list__item__composer-textarea');

        this.btnAddTask = this.composerContainer.querySelector('.btn-add-task');
        this.btnCanselComposer = this.composerContainer.querySelector('.btn-cansel-add-task');

        this.tasksArr = [];
        this.init();
    }

    _createClass(ToDoList, [{
        key: 'init',
        value: function init() {
            console.log(this.list);
            this.initHtmlComponents();
            this.initEvents();
        }
    }, {
        key: 'initHtmlComponents',
        value: function initHtmlComponents() {
            this.titleTextarea.value = this.option.listTitle;
            this.composerLink.textContent = 'Add new task...';
            this.btnAddTask.textContent = "Add";
            this.btnCanselComposer.textContent = "Cansel";
        }
    }, {
        key: 'initEvents',
        value: function initEvents() {
            var _this = this;

            this.titleTarget.addEventListener('click', this.onTitleClick.bind(this));
            this.titleTextarea.addEventListener('blur', this.onTextareaBlur.bind(this));
            this.composerLink.addEventListener('click', this.onComposerLinkClick.bind(this));
            this.btnCanselComposer.addEventListener('click', this.closeComposer.bind(this));
            this.btnAddTask.addEventListener('click', this.addTask.bind(this));
            this.listItemsContainer.addEventListener('keydown', function (e) {
                if (e.keyCode == ENTER_KEYCODE) {
                    _this.addTask.bind(_this)();
                }
            });
            this.listItemsContainer.addEventListener('delete', function (e) {
                _this.deleteTask(e);
            });
            this.listItemsContainer.addEventListener('complete', function (e) {
                ToDoList.setCompletedTask(e);
            });
            this.listItemsContainer.addEventListener('incomplete', function (e) {
                ToDoList.setIncompleteTask(e);
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
        }
    }, {
        key: 'onComposerLinkClick',
        value: function onComposerLinkClick() {
            this.composerLink.classList.add('is-hidden');
            this.composerContainer.classList.remove('is-hidden');
            this.composerTextarea.focus();
        }
    }, {
        key: 'closeComposer',
        value: function closeComposer() {
            this.composerContainer.classList.add('is-hidden');
            this.composerLink.classList.remove('is-hidden');
            this.composerTextarea.value = "";
        }
    }, {
        key: 'addTask',
        value: function addTask() {
            var _this2 = this;

            if (this.composerTextarea.value) {
                var task = new ToDoListItem(this.composerTextarea.value, {
                    onResolve: function onResolve(task, taskObj) {
                        _this2.tasksArr.push(taskObj);
                        _this2.listItemsContainer.appendChild(task);
                    }
                });
                console.log(this.tasksArr);
                this.closeComposer();
            } else {
                alert('Task field is empty');
            }
        }
    }, {
        key: 'deleteTask',
        value: function deleteTask(e) {
            var taskId = e.detail.id;
            this.tasksArr = this.tasksArr.filter(function (elem) {

                return elem.id != taskId;
            });
            document.getElementById(e.detail.id).remove();
        }
    }, {
        key: 'changeTaskName',
        value: function changeTaskName(e) {
            function isMatch(elem) {
                if (elem.id == e.detail.listItem.id) {
                    return true;
                } else {
                    return false;
                }
            }
            var index = this.tasksArr.findIndex(isMatch);
            this.tasksArr[index].name = e.detail.updated;
        }
    }], [{
        key: 'setCompletedTask',
        value: function setCompletedTask(e) {
            e.target.classList.add('is-done');
        }
    }, {
        key: 'setIncompleteTask',
        value: function setIncompleteTask(e) {
            e.target.classList.remove('is-done');
        }
    }]);

    return ToDoList;
}();