import deleteTodoItem from './deleteTodoItem';
import editProperty from './editProperty';
import makeDomEditButton from './makeDomEditButton';

export default function makeDomTodoItem(todoItem) {

    const domTodoItem = document.createElement('div');
    domTodoItem.classList.toggle('todo-item');

    const title = document.createElement('h3');
    title.classList.toggle('title');
    title.textContent = todoItem.title;
    const editTitle = makeDomEditButton();
    editTitle.addEventListener('click', () => {
        editProperty(todoItem, 'title');
    });
    title.appendChild(editTitle);
    domTodoItem.appendChild(title);

    const description = document.createElement('p');
    description.classList.toggle('description');
    description.textContent = todoItem.description;
    const editDescription = makeDomEditButton();
    description.appendChild(editDescription);
    domTodoItem.appendChild(description);

    const dueDate = document.createElement('p');
    dueDate.classList.toggle('due-date');
    dueDate.textContent = `Due: ${todoItem.dueDate}`;
    const editDueDate = makeDomEditButton();
    dueDate.appendChild(editDueDate);
    domTodoItem.appendChild(dueDate);

    const priority = document.createElement('p');
    priority.classList.toggle('priority');
    priority.textContent = `Priority: ${todoItem.priority}`;
    const editPriority = makeDomEditButton();
    priority.appendChild(editPriority);
    domTodoItem.appendChild(priority);

    const timeEstimate = document.createElement('p');
    timeEstimate.classList.toggle('time-estimate');
    timeEstimate.textContent = `Time Estimate: ${todoItem.timeEstimate} hours`;
    const editTimeEstimate = makeDomEditButton();
    timeEstimate.appendChild(editTimeEstimate);
    domTodoItem.appendChild(timeEstimate);

    const markCompleted = document.createElement('button');
    markCompleted.classList.toggle('mark-completed');
    markCompleted.textContent = 'Not Completed';
    domTodoItem.appendChild(markCompleted);

    const deleteTodoItemButton = document.createElement('button');
    deleteTodoItemButton.classList.toggle('delete-todo');
    deleteTodoItemButton.textContent = 'Delete Todo Item';
    deleteTodoItemButton.addEventListener('click', () => {
        let item = todoItem;
        deleteTodoItem(item);
    });
    domTodoItem.appendChild(deleteTodoItemButton);

    return domTodoItem;

}