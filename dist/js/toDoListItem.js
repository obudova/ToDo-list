"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ToDoListItem = function ToDoListItem(value) {
  _classCallCheck(this, ToDoListItem);

  this.name = value;
  this.listItem = null;
  this.checkbox = null;
  this.btnRemove = null;
  this.init();
};