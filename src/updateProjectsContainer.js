import { body, projectsContainer} from './makeDomTemplate';
import populateProjectsContainer from "./populateProjectsContainer";

export default function updateProjectsContainer() {

    if (projectsContainer.innerHTML !== '') {
        
        projectsContainer.innerHTML = '';
        body.removeChild(projectsContainer); 

    };

    populateProjectsContainer();

    body.appendChild(projectsContainer);

}