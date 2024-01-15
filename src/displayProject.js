export default function displayProject(project, displayFunction) {
    console.log(`Project: ${project.title}`);
    project.todoItems.forEach(displayFunction);
}