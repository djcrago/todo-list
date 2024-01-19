import { body, projectsContainer} from './makeDomTemplate';
import populateProjectsContainer from "./populateProjectsContainer";
import populateStorage from './populateStorage';

export default function updateProjectsContainer() {

    if (projectsContainer.innerHTML !== '') {
        
        projectsContainer.innerHTML = '';
        body.removeChild(projectsContainer); 

    };

    populateProjectsContainer();

    populateStorage();

    body.appendChild(projectsContainer);

}