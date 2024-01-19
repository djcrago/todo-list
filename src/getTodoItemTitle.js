export default function getTodoItemTitle() {

    let title;
    
    title = prompt('Title');

    while (title === '') {

            alert('Todo item must have title.');
            title = prompt('Title: ');

    };

    return title;

}