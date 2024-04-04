import './styles.css'

const component = () => {
    const content = document.querySelector('#content')

    const headDiv = document.createElement('div')
    
    const title = document.createElement('h1')
    title.textContent = "My To-do's"

    const bodyDiv = document.createElement('div')

    const addTodoButton = document.createElement('button')
    addTodoButton.textContent = "Create To-do"

    let value = 0

    addTodoButton.addEventListener('click', () => {
        const todo = document.createElement('p')

        todo.textContent = value

        bodyDiv.appendChild(todo)
        value++
    })

    headDiv.appendChild(title)
    content.appendChild(headDiv)

    bodyDiv.appendChild(addTodoButton)
    content.appendChild(bodyDiv)

    return content
}

document.body.appendChild(component())