import addProjectToListOfProjects from "./addProjectToListOfProjects";
import clearDisplay from "./clearDisplay";
import displayListOfProjects from "./displayListOfProjects";
import makeProject from "./makeProject";

export default function projectController(projectTitle) {

    const project = makeProject(projectTitle);

    addProjectToListOfProjects(project);

    clearDisplay();

    displayListOfProjects();

}