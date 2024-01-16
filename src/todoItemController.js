import addTodoItemToProject from "./addTodoItemToProject";
import makeTodoItem from "./makeTodoItem";

export default function todoItemController(project) {
    
    const todoItem = makeTodoItem(project);

    addTodoItemToProject(todoItem, project);

}