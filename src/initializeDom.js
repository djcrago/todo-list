import projectController from "./projectController";
import makeDomTemplate from "./makeDomTemplate";
import updateProjectsContainer from "./updateProjectsContainer";

export default function initializeDom() {

    const defaultProject = projectController('Default');

    makeDomTemplate();

    updateProjectsContainer();

}