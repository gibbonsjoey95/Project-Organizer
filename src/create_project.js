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
                dueDate: 'April 10, 2024',
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

