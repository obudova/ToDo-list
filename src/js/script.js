import ToDoBuilder from './toDoBuilder';
import serviceWorker from './sw';
let builder = new ToDoBuilder(document.querySelector('.board'));
serviceWorker();
