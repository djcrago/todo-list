import { listOfProjects } from ".";

export default function deleteTodoItem(todoItem, project) {

    for (let i = 0; i < listOfProjects.length; i++) {

        if (listOfProjects[i].title === todoItem.project.title) {
            
            const index = listOfProjects[i].todoItems.indexOf(todoItem);

            listOfProjects[i].todoItems.splice(index, 1);

        };

    };

}