import displayTodoItem from "./displayTodoItem";

export default function displayProject(project) {
    console.log(`Project: ${project.title}`);
    if (project.todoItems.length > 0) {
        project.todoItems.forEach((item) => displayTodoItem(item));        
    }

}