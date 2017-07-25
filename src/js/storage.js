class Storage {
    constructor(storageKey) {
        this.storageKey = storageKey;
    }

    persistItem(item) {
        const storage = this.getStorage();
        storage.push(item);
        this.setStorage(storage);
    }

    updateItem(itemId, item){
        const todos = this.getStorage();
        function isMatch(item) {
            return item.id == itemId
        }
        const index = todos.findIndex(isMatch);
        todos[index] = item;
        this.setStorage(todos);
    }

    forgetItem(itemId) {
        const storage = this.getStorage().filter(item => item.id !== itemId);
        this.setStorage(storage);
    }

    getStorage() {
        const todos = localStorage.getItem(this.storageKey);
        return todos ? JSON.parse(todos) : [];
    }

    setStorage(storage) {
        localStorage.setItem(this.storageKey, JSON.stringify(storage));
    }

}