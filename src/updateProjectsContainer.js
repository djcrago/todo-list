import populateProjectsContainer from "./populateProjectsContainer";
import { body, projectsContainer} from './makeDomTemplate';

export default function updateProjectsContainer() {

    if (projectsContainer.innerHTML !== '') {
        
        projectsContainer.innerHTML = '';
        body.removeChild(projectsContainer); 

    };

    populateProjectsContainer();

    body.appendChild(projectsContainer);

}