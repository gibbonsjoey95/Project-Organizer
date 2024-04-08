import { createProject } from "./create_project"

const sidebar = () => {
    const sidebarContainer = document.createElement('div')
    const buttonContainer = document.createElement('div')

    sidebarContainer.classList.add('sidebar')
    buttonContainer.classList.add('add-btn-container')

    const addProjectButton = document.createElement('button')
    addProjectButton.textContent = "Add Project"
    addProjectButton.classList.add('btn')
    
    buttonContainer.appendChild(addProjectButton)

    addProjectButton.addEventListener('click', () => {
        const title = createProject(prompt('Add a title'))

        const todoItem = document.createElement('h2')
        todoItem.classList.add('todo-item')
        todoItem.textContent = title.name

        sidebarContainer.appendChild(todoItem)
    })


    sidebarContainer.appendChild(buttonContainer)
    
    return sidebarContainer
}

export { sidebar }