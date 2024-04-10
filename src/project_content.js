import { listOfProjects } from "./create_project"

const projectContainer = document.createElement('div')
projectContainer.classList.add('project-content')

const projectTitleContainer = document.createElement('div')
projectTitleContainer.classList.add('project-title-container--content')

const projectTitle = document.createElement('h2')
projectTitle.classList.add('project-title')

const todoButtonContainer = document.createElement('div')
todoButtonContainer.classList.add('todo-button-container')

const addTodoButton = document.createElement('button')
addTodoButton.textContent = 'Add To-do'
addTodoButton.classList.add('btn')
addTodoButton.classList.add('add-todo-button')

todoButtonContainer.appendChild(addTodoButton)

const titleBar = document.createElement('div')
titleBar.classList.add('title-bar')

projectTitleContainer.appendChild(projectTitle)
projectTitleContainer.appendChild(todoButtonContainer)

projectContainer.appendChild(projectTitleContainer)
projectContainer.appendChild(titleBar)

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