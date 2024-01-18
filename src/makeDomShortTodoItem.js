export default function makeDomShortTodoItem(todoItem, dialog) {

    const shortDomTodoItem = document.createElement('div');
    shortDomTodoItem.classList.toggle('todo-item');

    const title = document.createElement('h3');
    title.classList.toggle('title');
    title.textContent = todoItem.title;
    shortDomTodoItem.appendChild(title);

    const dueDate = document.createElement('p');
    dueDate.classList.toggle('due-date');
    dueDate.textContent = `Due: ${todoItem.dueDate}`;
    shortDomTodoItem.appendChild(dueDate);

    const details = document.createElement('button');
    details.textContent = 'Details';
    details.addEventListener('click', () => {
        dialog.showModal();
    });          
    shortDomTodoItem.appendChild(details);

    return shortDomTodoItem;

}