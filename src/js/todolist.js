const defaultOptions ={
    listTitle: 'my List'
};

class ToDoList{
    constructor(list, options){
        this.list=list;
        this.title = null;
        this.titleName = null;
        this.titleTarget = null;
        this.titleTextarea = null;
        this.composerContainer = null;
        this.composerLink = null;
        this.composerTextarea =null;
        this.listItemsContainer = null;
        this.btnAddTask = null;
        this.btnCanselComposer = null;
        this.input = null;
        this.option=Object.assign({},defaultOptions, options);
        this.init();
    }
    init(){
        console.log(this.list);
        this.createChildComponents();
        this.initEvents();
    }
    createChildComponents(){
        this.title = document.createElement('div');
        this.title.classList.add('list__header');
        this.list.appendChild(this.title);

        this.titleTarget = document.createElement('div');
        this.titleTarget.classList.add('list__header__target');
        this.title.appendChild(this.titleTarget);

        this.titleTextarea = document.createElement('textarea');
        this.titleTextarea.classList.add('list__header__input');
        if(!this.titleName){
            this.titleTextarea.value = this.option.listTitle;
        }
        this.title.appendChild(this.titleTextarea);

        this.listItemsContainer = document.createElement('div');
        this.listItemsContainer.classList.add('list__items');
        this.list.appendChild(this.listItemsContainer);

        this.composerContainer = document.createElement('div');

        this.composerLink = document.createElement('a');
        this.composerLink.textContent = 'Add new task...';
        this.composerLink.classList.add('open-list-composer');
        this.listItemsContainer.appendChild(this.composerLink);

        this.composerTextarea = document.createElement('textarea');
        this.composerTextarea.classList.add('list__item','list__item__composer-textarea');
        this.composerTextarea.autofocus = true;

        this.btnAddTask = document.createElement('button');
        this.btnAddTask.classList.add('btn-add-task');
        this.btnAddTask.textContent = "Add";

        this.btnCanselComposer = document.createElement('button');
        this.btnCanselComposer.classList.add('btn-cansel-add-task');
        this.btnCanselComposer.textContent = "Cansel";

    }
    initEvents(){
        this.titleTarget.addEventListener('click', this.onTitleClick.bind(this));
        this.titleTextarea.addEventListener('blur', this.onTextareaBlur.bind(this));
        this.composerLink.addEventListener('click', this.onComposerLinkClick.bind(this));
        this.btnCanselComposer.addEventListener('click', this.onCanselComposer.bind(this));
        this.btnAddTask.addEventListener('click', this.addTask.bind(this));
    }
    onTitleClick(){
        console.log(this);
        this.titleTarget.classList.add('is-hidden');
        this.titleTextarea.focus();
    }
    onTextareaBlur(){
        this.titleName=this.titleTextarea.value;
        this.titleTarget.classList.remove('is-hidden');
    }
    onComposerLinkClick(){
        this.composerLink.classList.add('is-hidden');
        this.listItemsContainer.insertBefore(this.composerContainer, this.composerLink);
        this.composerContainer.appendChild(this.composerTextarea);
        this.composerContainer.appendChild(this.btnAddTask);
        this.composerContainer.appendChild(this.btnCanselComposer);

    }
    onCanselComposer(){
        this.composerContainer.remove();
        this.composerLink.classList.remove('is-hidden');
        this.composerTextarea.value = "";
    }
    addTask(){
        if(this.composerTextarea.value){
            let task = new ToDoListItem(this.composerTextarea.value);
            this.onCanselComposer();
        }

    }

}