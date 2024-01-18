import makeProject from "./makeProject";
import { listOfProjects } from "./index";

export default function projectController(projectTitle) {

    const project = makeProject(projectTitle);

    listOfProjects.push(project);

    return project;

}