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

const projectTodoContainer = document.createElement('div')
projectTodoContainer.classList.add('project-todo-container')

projectContainer.appendChild(projectTitleContainer)
projectContainer.appendChild(titleBar)
projectContainer.appendChild(projectTodoContainer)

const updateProjectTitle = () => {
    let activeProject = listOfProjects.find((project) => project.active)

    projectTitle.textContent = activeProject.name

    console.log(listOfProjects)
}

const updateTodoList = () => {
    projectTodoContainer.textContent = ''

    let activeProject = listOfProjects.find((project) => project.active)
    
    activeProject.todoList.forEach((todo) => {
        const todoContainer = document.createElement('div')
        todoContainer.classList.add('todo-container')

        const todoTitleContainer = document.createElement('div')
        todoTitleContainer.classList.add('todo-title-container')

        const todoTitle = document.createElement('h3')
        todoTitle.classList.add('todo-title')
        todoTitle.textContent = todo.title

        todoTitleContainer.appendChild(todoTitle)

        const todoTitleBar = document.createElement('div')
        todoTitleBar.classList.add('todo-title-bar')

        const todoContentContainer = document.createElement('div')
        todoContentContainer.classList.add('todo-content-container')

        const todoDueDate = document.createElement('p')
        todoDueDate.classList.add('todo-due-date')
        todoDueDate.textContent = `Due: ${todo.dueDate}`

        const todoPriority = document.createElement('p')
        todoPriority.classList.add('todo-priority')
        todoPriority.textContent = `Priority: ${todo.priority}`

        todoContentContainer.appendChild(todoDueDate)
        todoContentContainer.appendChild(todoPriority)

        todoContainer.appendChild(todoTitleContainer)
        todoContainer.appendChild(todoTitleBar)
        todoContainer.appendChild(todoContentContainer)

        projectTodoContainer.appendChild(todoContainer)
    })
}

const mainContent = () => {
    updateProjectTitle()
    updateTodoList()

    return projectContainer
}


export { mainContent }