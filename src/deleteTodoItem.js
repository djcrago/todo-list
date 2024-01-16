import { listOfProjects } from ".";
import domController from "./domController";

export default function deleteTodoItem(todoItem, project) {

    for (let i = 0; i < listOfProjects.length; i++) {

        if (listOfProjects[i].title === todoItem.project.title) {
            
            console.log('Found it !')
            const index = listOfProjects[i].todoItems.indexOf(todoItem);

            console.log(index);
            listOfProjects[i].todoItems.splice(index, 1);

            domController();

        };

    };

}