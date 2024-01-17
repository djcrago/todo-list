export default function makeDomEditButton() {

    const editButton = document.createElement('button');
    editButton.classList.toggle('edit-property');
    editButton.textContent = 'Edit';

    return editButton;

}

// const title = document.createElement('h3');
// title.classList.toggle('title');
// title.textContent = todoItem.title;


// Add in eventlistent to makeDomEditButton fn?

// const editTitle = makeDomEditButton();
// editTitle.addEventListener('click', () => {
//     editPropertyController(todoItem, 'title');
//     domController();
// });
// title.appendChild(editTitle);