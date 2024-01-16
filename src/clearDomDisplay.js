import { body, projectsContainer } from './makeDomTemplate';

export default function clearDomDisplay() {

    body.removeChild(projectsContainer);

    // projectsContainer.innerHTML = '';

}