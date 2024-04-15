import { listOfProjects } from "./create_project"
import { updateProjectList } from "./sidebar"

import { Todo } from "./todo"

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
const projectTitleContainer = document.createElement('div')
const projectTitle = document.createElement('h2')
const todoButtonContainer = document.createElement('div')
const editProjectNameButton = document.createElement('button')
const deleteProjectButton = document.createElement('button')
const addTodoButton = document.createElement('button')
const titleBar = document.createElement('div')
const projectTodoContainer = document.createElement('div')

editProjectNameButton.textContent = 'Edit Project Name'
deleteProjectButton.textContent = 'Delete Project'
addTodoButton.textContent = 'Add To-do'

projectContainer.classList.add('project-content')
projectTitleContainer.classList.add('project-title-container--content')
projectTitle.classList.add('project-title')
todoButtonContainer.classList.add('todo-button-container')
editProjectNameButton.classList.add('edit-project-name-button')
editProjectNameButton.classList.add('btn')
deleteProjectButton.classList.add('delete-project-button')
deleteProjectButton.classList.add('btn')
addTodoButton.classList.add('btn')
addTodoButton.classList.add('add-todo-button')
titleBar.classList.add('title-bar')
projectTodoContainer.classList.add('project-todo-container')

todoButtonContainer.appendChild(editProjectNameButton)
todoButtonContainer.appendChild(deleteProjectButton)
todoButtonContainer.appendChild(addTodoButton)
projectTitleContainer.appendChild(projectTitle)
projectTitleContainer.appendChild(todoButtonContainer)
projectContainer.appendChild(projectTitleContainer)
projectContainer.appendChild(titleBar)
projectContainer.appendChild(projectTodoContainer)

// add todo to dom
todoForm.addEventListener('submit', (event) => {
    event.preventDefault()
    addTodoToDom()
    updateTodoList()
})

editProjectNameCloseModalButton.addEventListener('click', () => {
    hideProjectNameModal()
})

editProjectNameButton.addEventListener('click', () => {
    openModalToEditProjectName()
})

editProjectNameForm.addEventListener('submit', (event) => {
    event.preventDefault()
    editProjectName()
    updateProjectList()
})

editTodoForm.addEventListener('submit', (event) => {
    event.preventDefault()
    addEditedTodoToDom()
    updateTodoList()
})

deleteProjectButton.addEventListener('click', () => {
    deleteProject()
})

deleteTodoButton.addEventListener('click', () => {
    deleteTodo()
})

addTodoButton.addEventListener('click', () => {
    showTodoModal()
})

todoCloseModalButton.addEventListener('click', () => {
    hideTodoModal()
})

editTodoCloseModalButton.addEventListener('click', () => {
    hideTodoModal()

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
        const todoTitleContainer = document.createElement('div')
        const todoTitle = document.createElement('h3')
        const todoTitleBar = document.createElement('div')
        const todoContentContainer = document.createElement('div')
        const todoDueDate = document.createElement('p')
        const todoPriority = document.createElement('p')
        
        todoContainer.classList.add('todo-container')
        todoTitleContainer.classList.add('todo-title-container')
        todoTitle.classList.add('todo-title')
        todoTitleBar.classList.add('todo-title-bar')
        todoContentContainer.classList.add('todo-content-container')
        todoDueDate.classList.add('todo-due-date')
        todoPriority.classList.add('todo-priority')
        
        todoTitle.textContent = todo.title
        todoDueDate.textContent = `Due: ${todo.dueDate}`
        todoPriority.textContent = `Priority: ${todo.priority}`
        
        todoTitleContainer.appendChild(todoTitle)
        todoContentContainer.appendChild(todoDueDate)
        todoContentContainer.appendChild(todoPriority)
        todoContainer.appendChild(todoTitleContainer)
        todoContainer.appendChild(todoTitleBar)
        todoContainer.appendChild(todoContentContainer)

        todoContainer.addEventListener('click', () => {
            openFormToEditTodo(todo)
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

const addTodoToDom = () => {
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
}

const addEditedTodoToDom = () => {
    let activeTodo = findActiveTodo()

    editTodoFormModal.classList.add('hidden')

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
}

const openFormToEditTodo = (todo) => {
    editTodoFormModal.classList.remove('hidden')
    todo.active = true

    const editTitle = document.querySelector('#editTitle')
    editTitle.focus()
}

const openModalToEditProjectName = () => {
    showProjectNameFormModal()
    
    let active = findActiveProject()
    const projectName = document.querySelector('#editProjectName')
    projectName.value = active.name
    projectName.focus()
}

const editProjectName = () => {
    let active = findActiveProject() 
    const projectName = document.querySelector('#editProjectName')
    
    active.name = projectName.value
    projectTitle.textContent = projectName.value  
    projectName.value = ''
    
    editProjectNameFormModal.classList.add('hidden')
}

const deleteProject = () => {
    let active = findActiveProject()
    let index = listOfProjects.indexOf(active)

    if(index !== -1){
        listOfProjects.splice(index, 1)
        updateProjectList()
        projectTitle.textContent = ''
        projectTodoContainer.textContent = ''
    }
}

const deleteTodo = () => {
    let active = findActiveProject()
    let activeTodo = findActiveTodo()
    let index = active.todoList.indexOf(activeTodo)

    if(index !== -1){
        active.todoList.splice(index, 1)
        updateTodoList()
        editTodoFormModal.classList.add('hidden')
    }
}

const hideProjectNameModal = () => {
    editProjectNameFormModal.classList.add('hidden')
}

const showProjectNameFormModal = () => {
    editProjectNameFormModal.classList.remove('hidden')
}

const showTodoModal = () => {
    todoFormModal.classList.remove('hidden')

    const title = document.querySelector('#title')
    title.focus()
}

const hideTodoModal = () => {
    todoFormModal.classList.add('hidden')
    editTodoFormModal.classList.add('hidden')
}

const mainContent = () => {
    updateProjectTitle()
    updateTodoList()

    return projectContainer
}


export { mainContent }