import { listOfProjects } from "./create_project"

const projectContainer = document.createElement('div')
projectContainer.classList.add('project-content')

const projectTitle = document.createElement('h2')

projectContainer.appendChild(projectTitle)

const updateProjectTitle = () => {
    let activeProject = listOfProjects.find((project) => project.active)

    projectTitle.textContent = activeProject.name

    console.log(listOfProjects)
}

const mainContent = () => {
    updateProjectTitle()

    return projectContainer
}


export { mainContent }