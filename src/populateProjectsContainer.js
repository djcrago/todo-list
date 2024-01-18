import { listOfProjects } from "./index";
import makeDomProject from "./makeDomProject";
import { projectsContainer } from "./makeDomTemplate";
import populateDomProject from "./populateDomProject";

export default function populateProjectsContainer() {

    listOfProjects.forEach((project) => {

        const domProject = makeDomProject(project);

        populateDomProject(project, domProject);

        projectsContainer.appendChild(domProject);

    });

}