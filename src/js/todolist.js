import ToDoListItem from './toDoListItem'
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
    <div class="composer__container list__item">
        <textarea class="list__item__composer-textarea" placeholder="New task"></textarea>
        <button class="btn-add-task is-hidden">Add</button>
        <!--<button class="btn-cansel-add-task"></button>-->
    </div>
</div>
<div class="list__controls">
    <a  class="btn-clear-all">Clear All</a>
    <label for="">Left tasks: </label>
    <div class="counter-done"></div>
</div>
`;

const ENTER_KEYCODE = 13;
export default class ToDoList{
    /**
     *
     * @param list
     * @param options
     */
    constructor(list, options){
        this.list= list;
        this.list.innerHTML = Template;
        this.option=Object.assign({},defaultOptions, options);

        this.titleName = this.option.listTitle;
        this.titleTarget = this.list.querySelector('.list__header__target');
        this.titleTextarea = this.list.querySelector('.list__header__input');

        this.listItemsContainer = this.list.querySelector('.list__items');

        this.composerContainer = this.list.querySelector('.composer__container');
        this.composerTextarea =this.composerContainer.querySelector('.list__item__composer-textarea');

        this.btnAddTask = this.composerContainer.querySelector('.btn-add-task');
        this.btnCanselComposer =  this.composerContainer.querySelector('.btn-cansel-add-task');
        this.btnClearAll = this.list.querySelector('.btn-clear-all');

        this.btnRemoveList = this.list.querySelector('.btn-remove-list');
        this.id = Date.now();
        this.tasksArr = [];

        if(options){
            this.titleName = options.name;
            this.id = options.id;
            this.tasksArr = options.tasksArr;
            if(this.tasksArr){
                this.addStoredTasks();
            }
        }else {
            this.addToStorage();
        }
        this.init();
    }

    init(){
        this.list.classList.add('list');
        this.list.setAttribute('id', this.id);
        this.createComponents();
        this.initEvents();
    }

    addToStorage(){
        const listCreated = new CustomEvent('listCreated', {
            bubbles: true,
            detail: {
                name: this.titleName,
                id: this.id,
                tasksArr: this.tasksArr
            }
        });
        this.list.dispatchEvent(listCreated);
    }

    onUpdate(){
        this.recount();
        const listUpdated = new CustomEvent('listUpdated', {
            bubbles: true,
            detail: {
                name: this.titleName,
                id: this.id,
                tasksArr: this.tasksArr
            }
        });
        this.list.dispatchEvent(listUpdated);
    }

    createComponents(){
        this.titleTextarea.value = this.option.name ? this.option.name : this.option.listTitle ;
        this.recount();
    }

    initEvents(){
        this.titleTarget.addEventListener('click', this.onTitleClick.bind(this));
        this.titleTextarea.addEventListener('blur', this.onTextareaBlur.bind(this));
        // this.btnCanselComposer.addEventListener('click', this.closeComposer.bind(this));
        this.btnAddTask.addEventListener('click', (e)=>{
            console.log(e);
            e.preventDefault();
            this.addTask.bind(this)();
        });
        this.btnClearAll.addEventListener('click', this.clearAllTasks.bind(this));
        this.btnRemoveList.addEventListener('click', this.removeList.bind(this));
        // this.composerTextarea.addEventListener();
        this.composerTextarea.addEventListener('keydown', (e)=>{
           if(e.keyCode==ENTER_KEYCODE){
               e.preventDefault();
               this.addTask.bind(this)();
           }
        });
        this.composerTextarea.addEventListener('focus',(e)=>{
            this.btnAddTask.classList.remove('is-hidden');
            this.createEventOfListEditing();
        });
        this.composerTextarea.addEventListener('blur',(e)=>{
            this.btnAddTask.classList.add('is-hidden');
            this.addTask.bind(this)();
            console.log('cmposer blur')
        });
        this.listItemsContainer.addEventListener('taskToggled', (e)=>{
            this.onUpdate(e);
        });
        this.listItemsContainer.addEventListener('delete', (e)=>{
            this.deleteTask(e);
        });
        this.listItemsContainer.addEventListener('nameChanged', (e)=>{
            this.changeTaskName(e);
        })
    }
    createEventOfListEditing(){
        const listEditing = new CustomEvent('listEditing', {
            bubbles: true,
            detail: {}
        });
        this.list.dispatchEvent(listEditing);

    }

    onTitleClick(){
        this.titleTarget.classList.add('is-hidden');
        this.titleTextarea.focus();
        this.titleTextarea.select();
        this.createEventOfListEditing();
    }

    onTextareaBlur(){
        this.titleName=this.titleTextarea.value;
        this.titleTarget.classList.remove('is-hidden');
        const updateTitle = new CustomEvent('update',{
            bubbles: true,
            detail: {
                ToDoList: this
            }
        });
        this.list.dispatchEvent(updateTitle);
        this.onUpdate();
    }

    onComposerLinkClick(){
        this.composerContainer.classList.remove('is-hidden');
        this.composerTextarea.focus();
    }


    addTask(){
        if(this.composerTextarea.value){
            const task = document.createElement('div');
            task.classList.add('list__item');
            this.listItemsContainer.insertBefore(task, this.listItemsContainer.querySelector('.composer__container'));
            this.tasksArr.push(new ToDoListItem(task, this.composerTextarea.value));
            this.onUpdate();
            this.composerTextarea.value = "";
        }else {
            //alert('Task field is empty')
        }
    }

    addStoredTasks(){
        this.tasksArr = this.tasksArr.map((item) => {
            const task = document.createElement('div');
            task.classList.add('list__item');
            this.listItemsContainer.insertBefore(task, this.listItemsContainer.querySelector('.composer__container'));
            return new ToDoListItem(task, item.name, {
                id: item.id,
                isDone: item._isDone
            });
        });
    }

    deleteTask(e) {
        const taskId = e.detail.id;
        this.tasksArr = this.tasksArr.filter((elem)=>{
            return elem.id !== taskId;
        });
        this.onUpdate();
    }

    changeTaskName(e){
       this.onUpdate();
    }

    clearAllTasks(){
        const TaskNodes = this.listItemsContainer.querySelectorAll('.list__item');
        TaskNodes.forEach((elem) =>{
            elem.remove();
        });
        this.tasksArr = [];
        this.onUpdate();
    }

    removeList(){
        const eventRemoveList = new CustomEvent('listRemoved', {
            bubbles: true,
            detail: this.id
        });
        this.list.dispatchEvent(eventRemoveList);
        this.list.remove();
    }

    recount(){
        this.list
            .querySelector('.counter-done')
            .textContent = this.tasksArr
            .filter(todoListItem => !todoListItem.isDone)
            .length;
    }
}
export var __useDefault = true;

