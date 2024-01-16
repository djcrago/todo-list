import { body, projectsContainer } from './makeDomTemplate';

export default function clearDomDisplay() {

    projectsContainer.innerHTML = '';

    body.removeChild(projectsContainer);

}