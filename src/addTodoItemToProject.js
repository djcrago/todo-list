import { defaultProject } from "./index";

export default function addTodoItemToProject(todoItem, project) {
    
    const projectToUpdate = project ? project : defaultProject;
    
    projectToUpdate.todoItems.push(todoItem);
    
}