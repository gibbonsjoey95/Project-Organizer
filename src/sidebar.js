const sidebar = () => {
    const sidebarContainer = document.createElement('div')
    const buttonContainer = document.createElement('div')

    sidebarContainer.classList.add('sidebar')
    buttonContainer.classList.add('add-btn-container')

    const addProjectButton = document.createElement('button')
    addProjectButton.textContent = "Add Project"
    addProjectButton.classList.add('btn')

    buttonContainer.appendChild(addProjectButton)

    sidebarContainer.appendChild(buttonContainer)
    
    return sidebarContainer
}

export { sidebar }