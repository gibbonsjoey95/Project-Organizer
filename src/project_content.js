import { listOfProjects } from "./create_project"
import { updateProjectList } from "./sidebar"

import { Todo } from "./todo"

const todoFormModal = document.querySelector('#todoFormModal')
const todoCloseModalButton = document.querySelector('#todoCloseModalButton')
const todoForm = document.querySelector('#todoForm')

const projectContainer = document.createElement('div')
projectContainer.classList.add('project-content')

const projectTitleContainer = document.createElement('div')
projectTitleContainer.classList.add('project-title-container--content')

const projectTitle = document.createElement('h2')
projectTitle.classList.add('project-title')

const todoButtonContainer = document.createElement('div')
todoButtonContainer.classList.add('todo-button-container')

const removeProjectButton = document.createElement('button')
removeProjectButton.textContent = 'Remove Project'

const addTodoButton = document.createElement('button')
addTodoButton.textContent = 'Add To-do'
addTodoButton.classList.add('btn')
addTodoButton.classList.add('add-todo-button')

todoButtonContainer.appendChild(removeProjectButton)
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

todoForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const title = document.querySelector('#title')
    const description = document.querySelector('#description')
    const dueDate = document.querySelector('#dueDate')
    const priority = document.querySelector('#priority')
    const checklist = document.querySelector('#checklist')
    const notes = document.querySelector('#notes')

    let active = findActiveProject()

    let newTodo = new Todo(title.value, description.value, dueDate.value, priority.value, checklist.checked, notes.value)
    
    active.todoList.push(newTodo)

    todoFormModal.classList.add('hidden')
    
    title.value = ''
    description.value = ''
    dueDate.value = ''
    priority.value = 'low'
    checklist.checked = false
    notes.value = ''

    updateTodoList()
})

removeProjectButton.addEventListener('click', () => {
    let active = findActiveProject()

    let index = listOfProjects.indexOf(active)

    if(index !== -1){
        listOfProjects.splice(index, 1)
        updateProjectList()
        projectTitle.textContent = ''
        projectTodoContainer.textContent = ''
    }
})

addTodoButton.addEventListener('click', () => {
    todoFormModal.classList.remove('hidden')
})

todoCloseModalButton.addEventListener('click', () => {
    todoFormModal.classList.add('hidden')
})

const findActiveProject = () => {
    let activeProject = listOfProjects.find((project) => project.active)
    
    return activeProject
}

const createTodoDom = (active) => {
    active.todoList.forEach((todo) => {
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

const updateProjectTitle = () => {
    let active = findActiveProject()

    projectTitle.textContent = active.name
}

const updateTodoList = () => {
    projectTodoContainer.textContent = ''

    let active = findActiveProject()

    createTodoDom(active)
}

const mainContent = () => {
    updateProjectTitle()
    updateTodoList()

    return projectContainer
}


export { mainContent }