const listItemTemplate = `
<div class="checkbox"></div>
<div class="task-name__container">
    <div class="task-name__target"></div>
    <textarea class="task-name__input"></textarea>
</div>
<a class="btn-remove"></a>
`;
export default class ToDoListItem {
    constructor(item, value, options) {
        this.name = value;
        this.listItem = item;
        this.listItem.innerHTML = listItemTemplate;
        this.checkbox = this.listItem.querySelector('.checkbox');
        this.nameTarget = this.listItem.querySelector('.task-name__target');
        this.nameTextarea = this.listItem.querySelector('.task-name__input');
        this.btnRemove = this.listItem.querySelector('.btn-remove');
        this._isDone = false;
        this._isDeleted = false;
        this.id = Date.now();
        this.options = Object.assign({}, options);
        if(options){
            this.id = options.id;
            this._isDone = options.isDone;
        }
        this.init();
    }
    get isDone(){
        return this._isDone;
    }
    set isDone(value){
        if(value){
            this._isDone = true;
            this.completeTask()
        }else {
            this._isDone = false;
            this.undoCompleteTask();
        }
        const onToggleItem = new CustomEvent('taskToggled', {
            bubbles: true,
            detail: this
        });
        this.listItem.dispatchEvent(onToggleItem);
    }
    init() {
        this.initDoMElements();
        this.initEvents();
    }

    initDoMElements(){
        this.listItem.setAttribute('id', this.id);
        this.nameTextarea.value = this.name;
        this.btnRemove.classList.add('btn-remove');
        if(this.isDone){
            this.listItem.classList.add('is-done');
        }
    }

    initEvents(){
        this.btnRemove.addEventListener('click', this.deleteItem.bind(this));
        this.checkbox.addEventListener('click', ()=>{
            this.isDone=!this.isDone
        });
        this.nameTarget.addEventListener('click', this.editItem.bind(this));
        this.nameTextarea.addEventListener('blur', this.renameTask.bind(this));
    }

    deleteItem(){
        const eventDelete = new CustomEvent('delete', {
            bubbles: true,
            detail: this
        });
        this.listItem.dispatchEvent(eventDelete);
        this.listItem.remove();
    }

    completeTask(){
        this.listItem.classList.add('is-done');
    }

    undoCompleteTask(){
        this.listItem.classList.remove('is-done');
    }

    editItem(e){
        this.nameTextarea.focus();
        this.nameTarget.classList.add('is-hidden');
        this.listItem.classList.add('is-editing');
    }

    renameTask(e){
        const previousName = this.name;
        this.name = this.nameTextarea.value;
        this.nameTarget.classList.remove('is-hidden');
        this.listItem.classList.remove('is-editing')
        const nameChanged = new CustomEvent('nameChanged', {
            bubbles: true,
            detail: {
                listItem: this,
                prev: previousName,
                updated: this.name
            }
        });
        this.listItem.dispatchEvent(nameChanged);
    }

}
// export var __useDefault = true;