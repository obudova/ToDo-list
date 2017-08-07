// import ToDoListItem from './toDoListItem';
interface optionParam {
    name: string,
    id: number,
    tasksArr: Array<Object>
}
interface optionsMerged {
    listTitle: string,
    name: string,
    id: number,
    tasksArr: Array<Object>
}
interface taskProperties {
    isDone: boolean,
    id: number,
    name: string,
    _isDone: boolean
}
interface optionObject {
    listTitle: string,
}
const defaultOptions: optionObject = {
    listTitle: 'my List'
};
interface NodeSelector {
    querySelector<THTMLElement extends HTMLElement>(selectors: string): THTMLElement;
    querySelectorAll<THTMLElement extends HTMLElement>(selectors: string): NodeListOf<THTMLElement>;
}
const Template = `

<div class="list__header">
    <div class="list__header__target"></div>
    <textarea class="list__header__input"></textarea>
    <a class="btn-remove-list"></a>
</div>
<div class="list__items">
    <div class="composer__container">
        <label for="newTodo">New task</label>
        <textarea class="list__item__composer-textarea" id="newTodo"></textarea>
        <!--<button class="btn-cansel-add-task"></button>-->
    </div>
</div>
<div class="list__controls">
    <label for="">Left tasks: </label>
    <div class="counter-done"></div>
    <a  class="btn-clear-all">Clear All</a>
</div>
`;

const ENTER_KEYCODE = 13;
export default class ToDoList {
    /**
     *
     * @param listContainer
     * @param options
     */
    list: HTMLDivElement;
    option: optionsMerged;
    titleName: String;
    titleTarget: HTMLDivElement;
    titleTextarea: HTMLTextAreaElement;
    listItemsContainer: HTMLUListElement;
    composerContainer: HTMLDivElement;
    composerTextarea: HTMLTextAreaElement;
    btnClearAll: HTMLButtonElement;
    btnRemoveList: HTMLButtonElement;
    id: string;
    tasksArr: Array<Object>;
    constructor(listContainer: HTMLDivElement, options: optionParam = null){
        this.list = listContainer;
        this.list.innerHTML = Template;
        this.option=(<any>Object).assign({},defaultOptions, options);

        this.titleName = <string>this.option.listTitle;
        this.titleTarget = <HTMLDivElement>this.list.querySelector('.list__header__target');
        this.titleTextarea = <HTMLTextAreaElement>this.list.querySelector('.list__header__input');

        this.listItemsContainer = <HTMLUListElement>this.list.querySelector('.list__items');

        this.composerContainer = <HTMLDivElement>this.list.querySelector('.composer__container');
        this.composerTextarea = <HTMLTextAreaElement>this.composerContainer.querySelector('.list__item__composer-textarea');

        this.btnClearAll = <HTMLButtonElement>this.list.querySelector('.btn-clear-all');

        this.btnRemoveList = <HTMLButtonElement>this.list.querySelector('.btn-remove-list');
        this.id = <string>Date.now().toString();
        this.tasksArr = [];

        if(options){
            this.titleName = <string>options.name;
            this.id = options.id.toString();
            this.tasksArr = options.tasksArr;
            if(this.tasksArr){
                //this.addStoredTasks();
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
        this.list.addEventListener('animationend', this.onRemove.bind(this));
        this.titleTarget.addEventListener('click', this.onTitleClick.bind(this));
        this.titleTextarea.addEventListener('blur', this.onTextareaBlur.bind(this));
        this.btnClearAll.addEventListener('click', this.clearAllTasks.bind(this));
        this.btnRemoveList.addEventListener('click', this.removeList.bind(this));
        this.composerTextarea.addEventListener('keydown', (e)=>{
           if(e.keyCode === ENTER_KEYCODE){
               e.preventDefault();
               this.addTask.bind(this)();
           }
        });
        this.composerTextarea.addEventListener('focus',(e)=>{
            this.composerContainer.classList.add('is-active');
            this.createEventOfListEditing();
        });
        this.composerTextarea.addEventListener('blur',(e)=>{
            this.composerContainer.classList.remove('is-active');
            this.addTask.bind(this)();
            console.log('cmposer blur')
        });
        this.listItemsContainer.addEventListener('taskToggled', (e)=>{
            this.onUpdate();
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
        this.titleName = this.titleTextarea.value;
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
    onComposerLabelClick(e){
        console.log(this)
    }

    addTask(){
        if(this.composerTextarea.value){
            const task = document.createElement('div');
            task.classList.add('list__item');
            this.listItemsContainer.insertBefore(task, this.listItemsContainer.querySelector('.composer__container'));
            //this.tasksArr.push(new ToDoListItem(task, this.composerTextarea.value));

            import('./toDoListItem').then(module => {
                this.tasksArr.push(new module.default(task, this.composerTextarea.value));
                console.log(module);
            }
                );
            this.onUpdate();
            this.composerTextarea.value = "";
        }else {
            //alert('Task field is empty')
        }
    }

    addStoredTasks(){
        this.tasksArr = this.tasksArr.map((item: taskProperties) => {
            const task = document.createElement('div');
            task.classList.add('list__item');
            this.listItemsContainer.insertBefore(task, this.listItemsContainer.querySelector('.composer__container'));
            // return new ToDoListItem(task, item.name, {
            //     id: item.id,
            //     isDone: item._isDone
            // });
        });
    }

    deleteTask(e) {
        const taskId = e.detail.id;
        this.tasksArr = this.tasksArr.filter((elem: taskProperties)=>{
            return elem.id !== taskId;
        });
        this.onUpdate();
    }

    changeTaskName(e){
       this.onUpdate();
    }

    clearAllTasks(){
        const TaskNodes  = this.listItemsContainer.querySelectorAll('.list__item');
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
        this.list.classList.add('is-deleted');
    }
    onRemove(e){
        console.log(e);
        if(e.target == this.list && e.animationName === "scale"){
            this.list.remove();

        }
    }
    recount(){
        console.log(this.tasksArr);
        this.list
            .querySelector('.counter-done')
            .innerHTML = this.tasksArr.filter((item: taskProperties)=> !item.isDone).length.toString();
    }
}
// export var __useDefault = true;

