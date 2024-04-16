import { Project } from "./project"

const listOfProjects = [
    {
        name: 'Default',
        active: true,
        id: 1,
        todoList: [
            {
                title: 'Title',
                description: 'Description of the todo',
                dueDate: '2024-04-17',
                priority: 'High',
                checklist: false,
                notes: 'This is just default',
                id: 1,
                active: false
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

