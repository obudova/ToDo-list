class Collection {
    constructor(container, data = [], methods) {
        this.container = container;
        this.data = data;
        this.methods = methods;
    }
    onItemAdded(item) {

    }
    add(item) {
        this.data.push(item);
        this.onItemAdded(item);
    }
    onItemRemoved() {

    }
    remove(itemId) {
        this.data = this.data.filter(item => item.id !== itemId);
        this.onItemRemoved(itemId);
    }
    update(itemId, item) {

    }
}

class ToDoListCollection extends Collection {
    onItemAdded(item) {
        const component = new ToDoListItem(item, this.methods);
        this.container.append(component.getHtml());
    }

    onItemUpdated(itemId, data) {
        component.setData(data);
    }
}

class Component {
    constructor(data, methods) {
        this.data = data;
        this.methods = methods;

        this.container = document.createElement('div');
    }

    render() {
        this.container.innerHTML = Component.template;
        this.container.find('button').addEventListener('click', this.methods.onUpdate);
    }

    static template = ``;

    remove() {
        this.container.remove();
    }

    setData() {
        this.render();
    }

    getHtml() {
        return this.container;
    }
}