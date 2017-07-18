class ToDoBuilder{
    constructor(btn){
        this.button = btn;
        this.board = document.querySelector('.board');
        this.listsArr = [];
        this.init();
    }
    init(){
        console.log('I am todo builder');
        this.initEvents();
    }
    initEvents(){
        this.button.addEventListener('click', this.createList.bind(this))
        this.board.addEventListener('removeList', this.removeList.bind(this));
    }
    createList(e) {
        const list = new ToDoList({
            onResolve: (list) => {
                //this.tasksArr.push(taskObj);
                this.board.appendChild(list);
            }
        });
    }
    removeList(e){
        const list = document.getElementById(e.detail.id);
        list.remove();
    }
}