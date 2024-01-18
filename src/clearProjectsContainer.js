import { body, projectsContainer } from './makeDomTemplate';

export default function clearProjectsContainer() {

    if (projectsContainer.innerHTML !== '') {
        
        projectsContainer.innerHTML = '';
        body.removeChild(projectsContainer); 

    };

}