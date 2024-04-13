import { listOfProjects } from "./create_project"
import { updateProjectList } from "./sidebar"

import { Todo } from "./todo"

// Figure out a work around for this
const editProjectNameFormModal = document.querySelector('#editProjectNameFormModal')
const editProjectNameForm = document.querySelector('#editProjectNameForm')

const editTodoFormModal = document.querySelector('#editTodoFormModal')
const editTodoForm = document.querySelector('#editTodoForm')
const deleteTodoButton = document.querySelector('#deleteTodoButton')

const editProjectNameCloseModalButton = document.querySelector('#editProjectNameCloseModalButton')
const editTodoCloseModalButton = document.querySelector('#editTodoCloseModalButton')

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

const editProjectNameButton = document.createElement('button')
editProjectNameButton.textContent = 'Edit Project Name'

const deleteProjectButton = document.createElement('button')
deleteProjectButton.textContent = 'Delete Project'

const addTodoButton = document.createElement('button')
addTodoButton.textContent = 'Add To-do'
addTodoButton.classList.add('btn')
addTodoButton.classList.add('add-todo-button')

todoButtonContainer.appendChild(editProjectNameButton)
todoButtonContainer.appendChild(deleteProjectButton)
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

editProjectNameCloseModalButton.addEventListener('click', () => {
    editProjectNameFormModal.classList.add('hidden')
})

editProjectNameButton.addEventListener('click', () => {
    editProjectNameFormModal.classList.remove('hidden')

    let active = findActiveProject()

    const projectName = document.querySelector('#editProjectName')
    projectName.value = active.name
})

editProjectNameForm.addEventListener('submit', (event) => {
    event.preventDefault()

    let active = findActiveProject()

    editProjectNameFormModal.classList.add('hidden')

    const projectName = document.querySelector('#editProjectName')

    active.name = projectName.value

    projectName.value = ''

    updateProjectList()
})

editTodoForm.addEventListener('submit', (event) => {
    event.preventDefault()

    let activeTodo = findActiveTodo()

    editTodoFormModal.classList.add('hidden ')

    const editTitle = document.querySelector('#editTitle')
    const editDescription = document.querySelector('#editDescription')
    const editDueDate = document.querySelector('#editDueDate')
    const editPriority = document.querySelector('#editPriority')
    const editChecklist = document.querySelector('#editChecklist')
    const editNotes = document.querySelector('#editNotes')

    activeTodo.title = editTitle.value
    activeTodo.description = editDescription.value
    activeTodo.dueDate = editDueDate.value
    activeTodo.priority = editPriority.value
    activeTodo.checklist = editChecklist.value
    activeTodo.notes = editNotes.value

    editTitle.value = ''
    editDescription.value = ''
    editDueDate.value = ''
    editPriority.value = ''
    editChecklist.value = ''
    editNotes.value = ''

    updateTodoList()
})

deleteProjectButton.addEventListener('click', () => {
    let active = findActiveProject()

    let index = listOfProjects.indexOf(active)

    if(index !== -1){
        listOfProjects.splice(index, 1)
        updateProjectList()
        projectTitle.textContent = ''
        projectTodoContainer.textContent = ''
    }
})

deleteTodoButton.addEventListener('click', () => {
    let active = findActiveProject()
    let activeTodo = findActiveTodo()

    let index = active.todoList.indexOf(activeTodo)

    if(index !== -1){
        active.todoList.splice(index, 1)
        updateTodoList()
        editTodoFormModal.classList.add('hidden')
    }
})

addTodoButton.addEventListener('click', () => {
    todoFormModal.classList.remove('hidden')
})

todoCloseModalButton.addEventListener('click', () => {
    todoFormModal.classList.add('hidden')
})

editTodoCloseModalButton.addEventListener('click', () => {
    editTodoFormModal.classList.add('hidden')

    let activeTodo = findActiveTodo()
    activeTodo.active = false
})

const findActiveProject = () => {
    let activeProject = listOfProjects.find((project) => project.active)
    
    return activeProject
}

const findActiveTodo = () => {
    let activeProject = findActiveProject()
    
    let activeTodo = activeProject.todoList.find((todo) => todo.active)

    return activeTodo
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

        todoContainer.addEventListener('click', () => {
            editTodoFormModal.classList.remove('hidden')
            todo.active = true
            editTodo()
        })

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

const editTodo = () => {
    let activeTodo = findActiveTodo()

    const editTitle = document.querySelector('#editTitle')
    const editDescription = document.querySelector('#editDescription')
    const editDueDate = document.querySelector('#editDueDate')
    const editPriority = document.querySelector('#editPriority')
    const editChecklist = document.querySelector('#editChecklist')
    const editNotes = document.querySelector('#editNotes')

    editTitle.value = activeTodo.title
    editDescription.value = activeTodo.description
    editDueDate.value = activeTodo.dueDate
    editPriority.value = activeTodo.priority
    editChecklist.value = activeTodo.checklist
    editNotes.value = activeTodo.notes
}

const mainContent = () => {
    updateProjectTitle()
    updateTodoList()

    return projectContainer
}


export { mainContent }