export default class Storage {
    constructor(storageKey) {
        this.storageKey = storageKey;
    }

    persistItem(item) {
        const storage = this.getStorage();
        storage.push(item);
        this.setStorage(storage);
    }

    updateItem(list){
        const todos = this.getStorage();
        const index = todos.findIndex(item => item.id === list.id);
        todos[index] = list;
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
