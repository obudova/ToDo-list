import ToDoList from './todolist';
import Storage from './storage'
const template = `
<button id="todoBuilder"></button>
<div class="todo-list-board"></div>
`;

export default class ToDoBuilder{
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
        this.board.addEventListener('listEditing', this.hideBtnAdd.bind(this));
    }

    updateList(e){
        this.storage.updateItem(e.detail);
        this.showBtnAdd();
    }

    addListToStorage(e){
        this.storage.persistItem(e.detail);
    }

    removeListFromStorage(e){
        this.storage.forgetItem(e.detail);
    }

    createContainerForList(){
        const list = document.createElement('div');
        list.classList.add('todo-list', 'mat-elevation-2dp');
        this.board.querySelector('.todo-list-board').appendChild(list);
        return list;
    }

    createList() {
        this.listsArr.push(new ToDoList(this.createContainerForList()));
    }

    showBtnAdd(){
        if(this.button.classList.contains('is-hidden')){
            this.button.classList.remove('is-hidden')
        }
    }

    hideBtnAdd(){
        this.button.classList.add('is-hidden')
    }

    createStoredList(item){
        this.listsArr.push(new ToDoList(this.createContainerForList(), {
            name: item.name,
            id: item.id,
            tasksArr: item.tasksArr
        }));
    }
}
