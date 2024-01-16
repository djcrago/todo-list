import displayTodoItem from "./displayTodoItem";

export default function displayProject(project) {
    console.log(`Project: ${project.title}`);
    project.todoItems.forEach(displayTodoItem);
}