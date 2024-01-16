import addTodoItemToProject from "./addTodoItemToProject";
import makeTodoItem from "./makeTodoItem";
import updateDisplay from "./updateDisplay";

export default function todoItemController(project) {
    
    const todoItem = makeTodoItem();

    addTodoItemToProject(todoItem, project);

    updateDisplay();

}