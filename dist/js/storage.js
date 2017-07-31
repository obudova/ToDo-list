"use strict";

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