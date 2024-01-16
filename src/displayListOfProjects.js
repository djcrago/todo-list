import displayProject from "./displayProject";
import listOfProjects from "./index";

export default function displayListOfProjects() {
    listOfProjects.forEach((project) => displayProject(project));
}