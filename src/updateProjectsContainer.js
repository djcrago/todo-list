import clearProjectsContainer from "./clearProjectsContainer";
import displayProjectsContainer from "./displayProjectsContainer";
import populateProjectsContainer from "./populateProjectsContainer";

export default function updateProjectsContainer() {

    clearProjectsContainer();

    populateProjectsContainer();

    displayProjectsContainer();

}