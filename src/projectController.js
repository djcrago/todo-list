import addProjectToListOfProjects from "./addProjectToListOfProjects";
import makeProject from "./makeProject";

export default function projectController(projectTitle) {

    const project = makeProject(projectTitle);

    addProjectToListOfProjects(project);

    return project;

}