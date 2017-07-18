const listItemTemplate = `
<div class="checkbox"></div>
<div class="task-name__container">
    <div class="task-name__target"></div>
    <textarea class="task-name__input"></textarea>
</div>
<a class="btn-remove"></a>
`;
class ToDoListItem {
    constructor(value, options) {
        this.name = value;
        this.listItem = document.createElement('div');
        this.listItem.innerHTML = listItemTemplate;
        this.checkbox = this.listItem.querySelector('.checkbox');
        this.nameTarget = this.listItem.querySelector('.task-name__target');
        this.nameTextarea = this.listItem.querySelector('.task-name__input');
        this.btnRemove = this.listItem.querySelector('.btn-remove');
        this._isDone = false;
        this._isDeleted = false;
        this.id = Date.now();
        this.options = Object.assign({}, defaultOptions, options);
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
    }
    init() {
        this.createDoMElements();
        this.initEvents();
        this.onResolve();
    }
    createDoMElements(){
        this.listItem.classList.add('list__item');
        this.listItem.setAttribute('id', this.id);
        this.nameTextarea.value = this.name;
        this.btnRemove.classList.add('btn-remove');
;
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
    }
    completeTask(){
        const eventComplete = new CustomEvent('complete', {
            bubbles: true,
            detail: this
        });
        this.listItem.dispatchEvent(eventComplete);
    }
    undoCompleteTask(){
        const eventIncomplete = new CustomEvent('incomplete', {
            bubbles: true,
            detail: this
        });
        this.listItem.dispatchEvent(eventIncomplete);
    }
    editItem(e){
        this.nameTextarea.focus();
        this.nameTarget.classList.add('is-hidden');

    }
    renameTask(e){
        const previousName = this.name;
        this.name = this.nameTextarea.value;
        this.nameTarget.classList.remove('is-hidden');
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
    onResolve() {
        let name = this.name;
        let id = this.id;
        const task = {
          name,
            id
        };
        this.options.onResolve && this.options.onResolve.call(this, this.listItem, task);
    }
    onUpdate(){
        this.options.updateTask && this.options.updateTask.call(this, )
    }

}