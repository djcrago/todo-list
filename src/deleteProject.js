import { listOfProjects } from ".";

export default function deleteProject(project) {

    const index = listOfProjects.indexOf(project);
    listOfProjects.splice(index, 1);

}