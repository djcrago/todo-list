import listOfProjects from "./index";

export default function deleteTodoItem(todoItem) {

    for (let i = 0; i < listOfProjects.length; i++) {

        const project = listOfProjects[i];

        for (let j = 0; j < project.todoItems.length; j++) {

            if (project.todoItems[j].title === todoItem.title) {
                        
                        const index = project.todoItems.indexOf(todoItem);

                        project.todoItems.splice(index, 1);

                    };

        }

    };

}