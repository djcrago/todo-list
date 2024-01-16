import { listOfProjects } from './index';
import displayProject from "./displayProject";

export default function displayListOfProjects() {
    listOfProjects.forEach((project) => displayProject(project));
};