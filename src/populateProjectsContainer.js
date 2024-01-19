import listOfProjects from "./index";
import makeDomProject from "./makeDomProject";
import populateDomProject from "./populateDomProject";
import { projectsContainer } from "./makeDomTemplate";

export default function populateProjectsContainer() {

    listOfProjects.forEach((project) => {

        const domProject = makeDomProject(project);
        
        populateDomProject(project, domProject);

        projectsContainer.appendChild(domProject);

    });

}