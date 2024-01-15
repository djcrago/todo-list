export default function makeTodoItem(title, description, dueDate, priority, 
    timeEstimate, markCompleted) {
    let todoItem = {
        title,
        description,
        dueDate,
        priority,
        timeEstimate,
        markCompleted
    };

    return todoItem;
}