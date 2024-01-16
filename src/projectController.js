import addProjectToListOfProjects from "./addProjectToListOfProjects";
import makeProject from "./makeProject";
import updateDisplay from "./updateDisplay";

export default function projectController(projectTitle) {

    const project = makeProject(projectTitle);

    addProjectToListOfProjects(project);

    updateDisplay();

    return project;

}