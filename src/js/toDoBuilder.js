const template = `
<button id="todoBuilder">Add list</button>
<div class="todo-list-board"></div>
`;

class ToDoBuilder{
    constructor(board) {
        this.board = board;
        this.storage = new Storage('todo-lists');
        this.data = this.storage.getStorage();
        this.init();

        if (this.data.length) {
            this.createInitialLists(this.data);
        }else {
            this.createList();
        }
    }

    createInitialLists(initialData){
        initialData.forEach(item => {
            this.createStoredList(item);
        });
    }

    init(){
        this.board.innerHTML = template;
        this.button = this.board.querySelector('#todoBuilder');
        this.listsArr = [];
        this.initEvents();
    }

    initEvents(){
        this.button.addEventListener('click', this.createList.bind(this));
        this.board.addEventListener('listUpdated', this.updateList.bind(this));
        this.board.addEventListener('listCreated', this.addListToStorage.bind(this));
        this.board.addEventListener('listRemoved', this.removeListFromStorage.bind(this));
    }

    updateList(e){
        this.storage.updateItem(e.detail);
    }

    addListToStorage(e){
        this.storage.persistItem(e.detail);
    }

    removeListFromStorage(e){
        this.storage.forgetItem(e.detail);
    }

    createContainerForList(){
        const list = document.createElement('div');
        list.classList.add('todo-list');
        this.board.querySelector('.todo-list-board').appendChild(list);
        return list;
    }

    createList() {
        this.listsArr.push(new ToDoList(this.createContainerForList()));
    }

    createStoredList(item){
        this.listsArr.push(new ToDoList(this.createContainerForList(), {
            name: item.name,
            id: item.id,
            tasksArr: item.tasksArr
        }));
    }
}
