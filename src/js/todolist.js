const defaultOptions ={
    listTitle: 'my List'
};

const Template = `

<div class="list__header">
    <div class="list__header__target"></div>
    <textarea class="list__header__input"></textarea>
    <a class="btn-remove-list"></a>
</div>
<div class="list__items">
    <div class="composer__container is-hidden">
        <textarea class="list__item__composer-textarea"></textarea>
        <button class="btn-add-task"></button>
        <button class="btn-cansel-add-task"></button>
    </div>
    <a  class="open-list-composer"></a>
</div>
<div class="list__controls">
    <a  class="btn-clear-all">Clear All</a>
</div>
`;

const ENTER_KEYCODE = 13;
class ToDoList{
    /**
     *
     * @param list
     * @param options
     */
    constructor(options){
        this.list=document.createElement('div');
        this.list.innerHTML = Template;
        this.option=Object.assign({},defaultOptions, options);

        this.titleName = this.option.listTitle;
        this.titleTarget = this.list.querySelector('.list__header__target');
        this.titleTextarea = this.list.querySelector('.list__header__input');

        this.listItemsContainer = this.list.querySelector('.list__items');

        this.composerContainer = this.list.querySelector('.composer__container');
        this.composerLink = this.list.querySelector('.open-list-composer');
        this.composerTextarea =this.composerContainer.querySelector('.list__item__composer-textarea');

        this.btnAddTask = this.composerContainer.querySelector('.btn-add-task');
        this.btnCanselComposer =  this.composerContainer.querySelector('.btn-cansel-add-task');
        this.btnClearAll = this.list.querySelector('.btn-clear-all');

        this.btnRemoveList = this.list.querySelector('.btn-remove-list');
        this.id = Date.now();
        this.tasksArr = [];
        this.init();
    }
    init(){
        console.log(this.list);
        this.list.classList.add('list');
        this.list.setAttribute('id', this.id);
        this.createComponents();
        this.initEvents();
        this.initLocalStorage();
    }
    createComponents(){
        this.titleTextarea.value = this.option.listTitle;
        this.composerLink.textContent = 'Add new task...';
        this.btnAddTask.textContent = "Add";
        this.btnCanselComposer.textContent = "Cansel";
        this.accomplish();
    }
    initEvents(){
        this.titleTarget.addEventListener('click', this.onTitleClick.bind(this));
        this.titleTextarea.addEventListener('blur', this.onTextareaBlur.bind(this));
        this.composerLink.addEventListener('click', this.onComposerLinkClick.bind(this));
        this.btnCanselComposer.addEventListener('click', this.closeComposer.bind(this));
        this.btnAddTask.addEventListener('click', this.addTask.bind(this));
        this.btnClearAll.addEventListener('click', this.clearAllTasks.bind(this));
        this.btnRemoveList.addEventListener('click', this.removeList.bind(this));
        this.listItemsContainer.addEventListener('keydown', (e)=>{
           if(e.keyCode==ENTER_KEYCODE){
               this.addTask.bind(this)();
           }
        });
        this.listItemsContainer.addEventListener('delete', (e)=>{
            this.deleteTask(e);
        });
        this.listItemsContainer.addEventListener('complete', (e)=>{
            ToDoList.setCompletedTask(e);
        });
        this.listItemsContainer.addEventListener('incomplete', (e)=>{
            ToDoList.setIncompleteTask(e);
        });
        this.listItemsContainer.addEventListener('nameChanged', (e)=>{
            this.changeTaskName(e);
        })
    }
    onTitleClick(){
        this.titleTarget.classList.add('is-hidden');
        this.titleTextarea.focus();
        this.titleTextarea.select();
    }
    onTextareaBlur(){
        this.titleName=this.titleTextarea.value;
        this.titleTarget.classList.remove('is-hidden');
    }
    onComposerLinkClick(){
        this.composerLink.classList.add('is-hidden');
        this.composerContainer.classList.remove('is-hidden');
        this.composerTextarea.focus();
    }
    closeComposer(){
        this.composerContainer.classList.add('is-hidden');
        this.composerLink.classList.remove('is-hidden');
        this.composerTextarea.value = "";
    }
    addTask(){
        if(this.composerTextarea.value){
            let task = new ToDoListItem(this.composerTextarea.value, {
                onResolve: (task, taskObj) => {
                    this.tasksArr.push(taskObj);
                    this.listItemsContainer.appendChild(task);
                },
                updateTask: ()=>{

                }
            });
            console.log(this.tasksArr);
            this.closeComposer();
        }else {
            alert('Task field is empty')
        }

    }
    deleteTask(e) {
        const taskId = e.detail.id;
        this.tasksArr = this.tasksArr.filter((elem)=>{
            return elem.id !== taskId;
        });
        document.getElementById(e.detail.id).remove();
    }
    static setCompletedTask(e){
        e.target.classList.add('is-done');
    }
    static setIncompleteTask(e){
        e.target.classList.remove('is-done');
    }
    changeTaskName(e){
        function isMatch(elem) {
            if(elem.id == e.detail.listItem.id){
                return true
            }else {
                return false;
            }
        }
        const index = this.tasksArr.findIndex(isMatch);
        this.tasksArr[index].name = e.detail.updated;
        this.updateLocalStorage();
    }
    initLocalStorage(){

    }
    updateLocalStorage(){
        localStorage.setItem('hello', 'kitty');
    }
    clearAllTasks(){
        const TaskNodes = this.listItemsContainer.querySelectorAll('.list__item');
        TaskNodes.forEach((elem) =>{
            elem.remove();
        });
        this.tasksArr = [];
    }
    accomplish(){
        this.option.onResolve && this.option.onResolve.call(this, this.list);
    }
    removeList(){
        const eventRemoveList = new CustomEvent('removeList', {
            bubbles: true,
            detail: this
        });
        this.list.dispatchEvent(eventRemoveList);
    }

}
