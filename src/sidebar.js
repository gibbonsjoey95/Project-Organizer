import { listOfProjects, createProject } from "./create_project"
import { mainContent } from "./project_content"

const projectNameFormModal = document.querySelector('#projectNameFormModal')
const projectNameForm = document.querySelector('#projectNameForm')
const projectNameCloseModalButton = document.querySelector('#projectNameCloseModalButton')
const sidebarContainer = document.createElement('div')
const projectTitleContainer = document.createElement('div')
const buttonContainer = document.createElement('div')
const addProjectButton = document.createElement('button')

sidebarContainer.classList.add('sidebar')
buttonContainer.classList.add('add-btn-container')
projectTitleContainer.classList.add('project-title-container--sidebar')
addProjectButton.classList.add('btn')
addProjectButton.classList.add('add-project-btn')

addProjectButton.textContent = "Add Project"

buttonContainer.appendChild(addProjectButton)

projectNameCloseModalButton.addEventListener('click', () => {
    hideProjectNameFormModal()
})

projectNameForm.addEventListener('submit', (event) => {
    event.preventDefault()
    addNewProjectToDom()
    updateProjectList()   
})

addProjectButton.addEventListener('click', () => {
    showProjectNameFormModal()
    addFocusToNameInput()
})

const updateProjectList = () => {
    projectTitleContainer.textContent = ''

    listOfProjects.forEach((project) => {
        const item = document.createElement('h2')
        item.classList.add('todo-item')
        item.textContent = project.name

        item.addEventListener('click', () => {
            listOfProjects.forEach((p) => {
                p.active = false
            })

            project.active = true
                
            mainContent()
                
        })

        projectTitleContainer.appendChild(item)
    }) 
}

const addNewProjectToDom = () => {
    const projectName = document.querySelector('#projectName')
    createProject(projectName.value)
    hideProjectNameFormModal()
    projectName.value = ''
}

const hideProjectNameFormModal = () => {
    projectNameFormModal.classList.add('hidden')
}

const showProjectNameFormModal = () => {
    projectNameFormModal.classList.remove('hidden')
}

const addFocusToNameInput = () => {
    const projectName = document.querySelector('#projectName')
    projectName.focus()
}

const sidebar = () => {
    updateProjectList()

    sidebarContainer.appendChild(buttonContainer)
    sidebarContainer.appendChild(projectTitleContainer)
    
    return sidebarContainer
}

export { sidebar, updateProjectList }