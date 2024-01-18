import { listOfProjects } from "./index";

export default function deleteTodoItem(todoItem) {

    for (let i = 0; i < listOfProjects.length; i++) {

        if (listOfProjects[i].title === todoItem.project.title) {

            const project = listOfProjects[i];
            
            const index = project.todoItems.indexOf(todoItem);

            project.todoItems.splice(index, 1);

        };

    };

}