webpackJsonp([0],{

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var listItemTemplate = "\n<div class=\"checkbox\"></div>\n<div class=\"task-name__container\">\n    <div class=\"task-name__target\"></div>\n    <textarea class=\"task-name__input\"></textarea>\n</div>\n<a class=\"btn-remove\"></a>\n";
var ToDoListItem = (function () {
    function ToDoListItem(item, value, options) {
        if (options === void 0) { options = null; }
        this.name = value;
        this.listItem = item;
        this.listItem.innerHTML = listItemTemplate;
        this.checkbox = this.listItem.querySelector('.checkbox');
        this.nameTarget = this.listItem.querySelector('.task-name__target');
        this.nameTextarea = this.listItem.querySelector('.task-name__input');
        this.btnRemove = this.listItem.querySelector('.btn-remove');
        this._isDone = false;
        this._isDeleted = false;
        this.id = Date.now().toString();
        this.options = Object.assign({}, options);
        if (options) {
            this.id = options.id;
            this._isDone = options.isDone;
        }
        this.init();
    }
    Object.defineProperty(ToDoListItem.prototype, "isDone", {
        get: function () {
            return this._isDone;
        },
        set: function (value) {
            if (value) {
                this._isDone = true;
                this.completeTask();
            }
            else {
                this._isDone = false;
                this.undoCompleteTask();
            }
            var onToggleItem = new CustomEvent('taskToggled', {
                bubbles: true,
                detail: this
            });
            this.listItem.dispatchEvent(onToggleItem);
        },
        enumerable: true,
        configurable: true
    });
    ToDoListItem.prototype.init = function () {
        this.initDoMElements();
        this.initEvents();
    };
    ToDoListItem.prototype.initDoMElements = function () {
        this.listItem.setAttribute('id', this.id);
        this.nameTextarea.value = this.name;
        this.btnRemove.classList.add('btn-remove');
        if (this.isDone) {
            this.listItem.classList.add('is-done');
        }
    };
    ToDoListItem.prototype.initEvents = function () {
        var _this = this;
        this.btnRemove.addEventListener('click', this.deleteItem.bind(this));
        this.checkbox.addEventListener('click', function () {
            _this.isDone = !_this.isDone;
        });
        this.nameTarget.addEventListener('click', this.editItem.bind(this));
        this.nameTextarea.addEventListener('blur', this.renameTask.bind(this));
    };
    ToDoListItem.prototype.deleteItem = function () {
        var eventDelete = new CustomEvent('delete', {
            bubbles: true,
            detail: this
        });
        this.listItem.dispatchEvent(eventDelete);
        this.listItem.remove();
    };
    ToDoListItem.prototype.completeTask = function () {
        this.listItem.classList.add('is-done');
    };
    ToDoListItem.prototype.undoCompleteTask = function () {
        this.listItem.classList.remove('is-done');
    };
    ToDoListItem.prototype.editItem = function (e) {
        this.nameTextarea.focus();
        this.nameTarget.classList.add('is-hidden');
        this.listItem.classList.add('is-editing');
    };
    ToDoListItem.prototype.renameTask = function (e) {
        var previousName = this.name;
        this.name = this.nameTextarea.value;
        this.nameTarget.classList.remove('is-hidden');
        this.listItem.classList.remove('is-editing');
        var nameChanged = new CustomEvent('nameChanged', {
            bubbles: true,
            detail: {
                listItem: this,
                prev: previousName,
                updated: this.name
            }
        });
        this.listItem.dispatchEvent(nameChanged);
    };
    return ToDoListItem;
}());
/* harmony default export */ __webpack_exports__["default"] = (ToDoListItem);
// export var __useDefault = true; 


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvdG9Eb0xpc3RJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUEsSUFBTSxnQkFBZ0IsR0FBRyxtTkFPeEIsQ0FBQztBQUNGO0lBV0ksc0JBQVksSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFjO1FBQWQsd0NBQWM7UUFDbkMsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBbUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLFVBQVUsR0FBbUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsWUFBWSxHQUF3QixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzFGLElBQUksQ0FBQyxTQUFTLEdBQXNCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxFQUFFLEdBQVcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxPQUFPLEdBQVMsTUFBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDakQsRUFBRSxFQUFDLE9BQU8sQ0FBQyxFQUFDO1lBQ1IsSUFBSSxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxPQUFP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LEdBQVIsVUFBUyxDQUFDO1FBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxpQ0FBVSxHQUFWLFVBQVcsQ0FBQztRQUNSLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzdDLElBQU0sV0FBVyxHQUFHLElBQUksV0FBVyxDQUFDLGFBQWEsRUFBRTtZQUMvQyxPQUFPLEVBQUUsSUFBSTtZQUNiLE1BQU0sRUFBRTtnQkFDSixRQUFRLEVBQUUsSUFBSTtnQkFDZCxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJO2FBQ3JCO1NBQ0osQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVMLG1CQUFDO0FBQUQsQ0FBQzs7QUFDRCxrQ0FBa0MiLCJmaWxlIjoiMC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsaXN0SXRlbVRlbXBsYXRlID0gYFxuPGRpdiBjbGFzcz1cImNoZWNrYm94XCI+PC9kaXY+XG48ZGl2IGNsYXNzPVwidGFzay1uYW1lX19jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwidGFzay1uYW1lX190YXJnZXRcIj48L2Rpdj5cbiAgICA8dGV4dGFyZWEgY2xhc3M9XCJ0YXNrLW5hbWVfX2lucHV0XCI+PC90ZXh0YXJlYT5cbjwvZGl2PlxuPGEgY2xhc3M9XCJidG4tcmVtb3ZlXCI+PC9hPlxuYDtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvRG9MaXN0SXRlbSB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGxpc3RJdGVtOiBIVE1MRGl2RWxlbWVudDtcbiAgICBjaGVja2JveDogSFRNTERpdkVsZW1lbnQ7XG4gICAgbmFtZVRhcmdldDogSFRNTERpdkVsZW1lbnQ7XG4gICAgbmFtZVRleHRhcmVhOiBIVE1MVGV4dEFyZWFFbGVtZW50O1xuICAgIGJ0blJlbW92ZTogSFRNTEFuY2hvckVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBfaXNEb25lOiBib29sZWFuO1xuICAgIHByaXZhdGUgX2lzRGVsZXRlZDogYm9vbGVhbjtcbiAgICBpZDogc3RyaW5nO1xuICAgIG9wdGlvbnM6IE9iamVjdDtcbiAgICBjb25zdHJ1Y3RvcihpdGVtLCB2YWx1ZSwgb3B0aW9ucyA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gdmFsdWU7XG4gICAgICAgIHRoaXMubGlzdEl0ZW0gPSBpdGVtO1xuICAgICAgICB0aGlzLmxpc3RJdGVtLmlubmVySFRNTCA9IGxpc3RJdGVtVGVtcGxhdGU7XG4gICAgICAgIHRoaXMuY2hlY2tib3ggPSA8SFRNTERpdkVsZW1lbnQ+dGhpcy5saXN0SXRlbS5xdWVyeVNlbGVjdG9yKCcuY2hlY2tib3gnKTtcbiAgICAgICAgdGhpcy5uYW1lVGFyZ2V0ID0gPEhUTUxEaXZFbGVtZW50PnRoaXMubGlzdEl0ZW0ucXVlcnlTZWxlY3RvcignLnRhc2stbmFtZV9fdGFyZ2V0Jyk7XG4gICAgICAgIHRoaXMubmFtZVRleHRhcmVhID0gPEhUTUxUZXh0QXJlYUVsZW1lbnQ+dGhpcy5saXN0SXRlbS5xdWVyeVNlbGVjdG9yKCcudGFzay1uYW1lX19pbnB1dCcpO1xuICAgICAgICB0aGlzLmJ0blJlbW92ZSA9IDxIVE1MQW5jaG9yRWxlbWVudD50aGlzLmxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5idG4tcmVtb3ZlJyk7XG4gICAgICAgIHRoaXMuX2lzRG9uZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc0RlbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pZCA9IDxzdHJpbmc+RGF0ZS5ub3coKS50b1N0cmluZygpO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSAoPGFueT5PYmplY3QpLmFzc2lnbih7fSwgb3B0aW9ucyk7XG4gICAgICAgIGlmKG9wdGlvbnMpe1xuICAgICAgICAgICAgdGhpcy5pZCA9IG9wdGlvbnMuaWQ7XG4gICAgICAgICAgICB0aGlzLl9pc0RvbmUgPSBvcHRpb25zLmlzRG9uZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gICAgZ2V0IGlzRG9uZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5faXNEb25lO1xuICAgIH1cbiAgICBzZXQgaXNEb25lKHZhbHVlKXtcbiAgICAgICAgaWYodmFsdWUpe1xuICAgICAgICAgICAgdGhpcy5faXNEb25lID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGVUYXNrKClcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5faXNEb25lID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnVuZG9Db21wbGV0ZVRhc2soKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvblRvZ2dsZUl0ZW0gPSBuZXcgQ3VzdG9tRXZlbnQoJ3Rhc2tUb2dnbGVkJywge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGRldGFpbDogdGhpc1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5saXN0SXRlbS5kaXNwYXRjaEV2ZW50KG9uVG9nZ2xlSXRlbSk7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuaW5pdERvTUVsZW1lbnRzKCk7XG4gICAgICAgIHRoaXMuaW5pdEV2ZW50cygpO1xuICAgIH1cblxuICAgIGluaXREb01FbGVtZW50cygpe1xuICAgICAgICB0aGlzLmxpc3RJdGVtLnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLmlkKTtcbiAgICAgICAgdGhpcy5uYW1lVGV4dGFyZWEudmFsdWUgPSB0aGlzLm5hbWU7XG4gICAgICAgIHRoaXMuYnRuUmVtb3ZlLmNsYXNzTGlzdC5hZGQoJ2J0bi1yZW1vdmUnKTtcbiAgICAgICAgaWYodGhpcy5pc0RvbmUpe1xuICAgICAgICAgICAgdGhpcy5saXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdpcy1kb25lJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0RXZlbnRzKCl7XG4gICAgICAgIHRoaXMuYnRuUmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kZWxldGVJdGVtLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgICAgIHRoaXMuaXNEb25lPSF0aGlzLmlzRG9uZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5uYW1lVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5lZGl0SXRlbS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5uYW1lVGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMucmVuYW1lVGFzay5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBkZWxldGVJdGVtKCl7XG4gICAgICAgIGNvbnN0IGV2ZW50RGVsZXRlID0gbmV3IEN1c3RvbUV2ZW50KCdkZWxldGUnLCB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgZGV0YWlsOiB0aGlzXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxpc3RJdGVtLmRpc3BhdGNoRXZlbnQoZXZlbnREZWxldGUpO1xuICAgICAgICB0aGlzLmxpc3RJdGVtLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGNvbXBsZXRlVGFzaygpe1xuICAgICAgICB0aGlzLmxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2lzLWRvbmUnKTtcbiAgICB9XG5cbiAgICB1bmRvQ29tcGxldGVUYXNrKCl7XG4gICAgICAgIHRoaXMubGlzdEl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtZG9uZScpO1xuICAgIH1cblxuICAgIGVkaXRJdGVtKGUpe1xuICAgICAgICB0aGlzLm5hbWVUZXh0YXJlYS5mb2N1cygpO1xuICAgICAgICB0aGlzLm5hbWVUYXJnZXQuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XG4gICAgICAgIHRoaXMubGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnaXMtZWRpdGluZycpO1xuICAgIH1cblxuICAgIHJlbmFtZVRhc2soZSl7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzTmFtZSA9IHRoaXMubmFtZTtcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5uYW1lVGV4dGFyZWEudmFsdWU7XG4gICAgICAgIHRoaXMubmFtZVRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcbiAgICAgICAgdGhpcy5saXN0SXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1lZGl0aW5nJyk7XG4gICAgICAgIGNvbnN0IG5hbWVDaGFuZ2VkID0gbmV3IEN1c3RvbUV2ZW50KCduYW1lQ2hhbmdlZCcsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICBsaXN0SXRlbTogdGhpcyxcbiAgICAgICAgICAgICAgICBwcmV2OiBwcmV2aW91c05hbWUsXG4gICAgICAgICAgICAgICAgdXBkYXRlZDogdGhpcy5uYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxpc3RJdGVtLmRpc3BhdGNoRXZlbnQobmFtZUNoYW5nZWQpO1xuICAgIH1cblxufVxuLy8gZXhwb3J0IHZhciBfX3VzZURlZmF1bHQgPSB0cnVlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy90b0RvTGlzdEl0ZW0udHMiXSwic291cmNlUm9vdCI6IiJ9