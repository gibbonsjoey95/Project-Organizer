import { Project } from "./project"
import { Todo } from "./todo"

const listOfProjects = [
    {
        name: 'Default',
        active: true,
        id: 1,
        todoList: [
            {
                title: 'Title',
                description: 'Description of the todo',
                dueDate: 'April 10, 2024',
                priority: 'High',
                checklist: 'incomplete',
                notes: 'This is just default'
            }, 
        ]
    }
]

const createProject = (title) => {
    const newProject = new Project(title)

    listOfProjects.push(newProject)

    return newProject
}

export { listOfProjects, createProject }

