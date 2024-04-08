import { listOfProjects, createProject } from "./create_project"
import { logName } from "./project_content"

const sidebar = () => {
    const sidebarContainer = document.createElement('div')
    const buttonContainer = document.createElement('div')
    const projectTitleContainer = document.createElement('div')

    sidebarContainer.classList.add('sidebar')
    buttonContainer.classList.add('add-btn-container')
    projectTitleContainer.classList.add('project-title-container')

    const addProjectButton = document.createElement('button')
    addProjectButton.textContent = "Add Project"
    addProjectButton.classList.add('btn')

    buttonContainer.appendChild(addProjectButton)

    const updateList = () => {
        projectTitleContainer.textContent = ''

        listOfProjects.forEach((project) => {
            const item = document.createElement('h2')
            item.classList.add('todo-item')
            item.textContent = project.name

            item.addEventListener('click', () => {
                logName(item.textContent)
            })

            projectTitleContainer.appendChild(item)
        })
        
    }

    addProjectButton.addEventListener('click', () => {
        createProject(prompt('Add a title'))

        updateList()
    })



    sidebarContainer.appendChild(buttonContainer)
    sidebarContainer.appendChild(projectTitleContainer)
    
    return sidebarContainer
}

export { sidebar }