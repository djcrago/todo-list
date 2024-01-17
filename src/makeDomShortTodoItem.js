export default function makeDomShortTodoItem(todoItem) {

    const domTodoItem = document.createElement('div');
    domTodoItem.classList.toggle('todo-item');

    const title = document.createElement('h3');
    title.classList.toggle('title');
    title.textContent = todoItem.title;
    domTodoItem.appendChild(title);

    const dueDate = document.createElement('p');
    dueDate.classList.toggle('due-date');
    dueDate.textContent = `Due: ${todoItem.dueDate}`;
    domTodoItem.appendChild(dueDate);

    return domTodoItem;

}