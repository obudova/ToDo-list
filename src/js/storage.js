"use strict";
var Storage = (function () {
    function Storage(storageKey) {
        this.storageKey = storageKey;
    }
    Storage.prototype.persistItem = function (item) {
        var storage = this.getStorage();
        storage.push(item);
        this.setStorage(storage);
    };
    Storage.prototype.updateItem = function (list) {
        var todos = this.getStorage();
        var index = todos.findIndex(function (item) { return item.id === list.id; });
        todos[index] = list;
        this.setStorage(todos);
    };
    Storage.prototype.forgetItem = function (itemId) {
        var storage = this.getStorage().filter(function (item) { return item.id !== itemId; });
        this.setStorage(storage);
    };
    Storage.prototype.getStorage = function () {
        var todos = localStorage.getItem(this.storageKey);
        return todos ? JSON.parse(todos) : [];
    };
    Storage.prototype.setStorage = function (storage) {
        localStorage.setItem(this.storageKey, JSON.stringify(storage));
    };
    return Storage;
}());
exports.__esModule = true;
exports["default"] = Storage;
//# sourceMappingURL=storage.js.map