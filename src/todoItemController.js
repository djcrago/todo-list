import makeTodoItem from "./makeTodoItem";

export default function todoItemController(project) {
    
    const todoItem = makeTodoItem();

    project.todoItems.push(todoItem);

}