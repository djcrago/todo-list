import makeDomTodoItem from "./makeDomTodoItem";

export default function makeDomTodoDialog(todoItem) {

    const dialog = document.createElement('dialog');
    dialog.classList.toggle('dialog');

    const domTodoItem = makeDomTodoItem(todoItem);

    dialog.appendChild(domTodoItem);

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', () => {
        dialog.close()
    });

    dialog.appendChild(closeButton);

    return dialog;

}