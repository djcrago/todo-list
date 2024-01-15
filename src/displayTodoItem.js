export default function displayTodoItem(todoItem) {
    console.log(todoItem);

    console.log(todoItem.title);
    console.log(todoItem.description);
    console.log(`Due: ${todoItem.dueDate}`);
    console.log(`Priority: ${todoItem.priority}`);
    console.log(`Time Estimate: ${todoItem.timeEstimate} hours`);
    console.log(`Completed: ${todoItem.markCompleted}`);
}