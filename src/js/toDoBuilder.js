const template = `
<button id="todoBuilder">Add list</button>
<div class="todo-list-board"></div>
`;

class ToDoBuilder{
    constructor(board) {
        this.board = board;
        this.data = storage.getStorage();
        this.init();
        if (this.data.length) {
            this.createInitialLists(this.data);

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

        // let storage = localStorage.getItem('todolist');
        // storage = storage && JSON.parse(storage);

        //this.build(storage);

        this.initEvents();
    }

    initEvents(){
        this.button.addEventListener('click', this.createList.bind(this));
        this.board.addEventListener('removeList', this.removeList.bind(this));
        this.board.addEventListener('update', this.updateList.bind(this));
    }

    createList() {
        const list = document.createElement('div');
        list.classList.add('todo-list');
        this.board.querySelector('.todo-list-board').appendChild(list);
        this.listsArr.push(new ToDoList(list));
        console.log(this.listsArr);
    }

    createStoredList(item){
        const list = document.createElement('div');
        list.classList.add('todo-list');
        this.board.querySelector('.todo-list-board').appendChild(list);
        this.listsArr.push(new ToDoList(list, {
            name: item.name,
            id: item.id,
            tasksArr: item.tasksArr
        }));
        console.log(item);
    }

    removeList(e){
        // const list = document.getElementById(e.detail.id);
        // list.remove();
    }

    updateList() {
        let newListData = this.listsArr.map(totoList => {
            return totoList.tasksArr;
        });
        const newData = JSON.stringify(newListData);
        localStorage.setItem('todolist', newData);
        console.log(this.listsArr);
    }
}
