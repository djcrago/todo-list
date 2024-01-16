import { body, projectsContainer } from './makeDomTemplate';

export default function clearDomDisplay() {

    if (projectsContainer.innerHTML !== '') {
        
        projectsContainer.innerHTML = '';
        body.removeChild(projectsContainer); 

    };

}