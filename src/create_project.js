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
                checklist: 'incomplete',
                notes: 'This is just default'
            },
            {
                title: "Soak Car",
                description: "Spray Car with a good amout of water",
                dueDate: 'Sunday April 7',
                priority: 'low',
                checklist: 'incomplete',
                notes: 'Example'
            },
            {
                title: "Front ofCar",
                description: "Grab towel and scrub front of car",
                dueDate: 'Sunday April 7',
                priority: 'low',
                checklist: 'incomplete',
                notes: 'Example 2'                
            },
            {
                title: "Front ofCar",
                description: "Grab towel and scrub front of car",
                dueDate: 'Sunday April 7',
                priority: 'low',
                checklist: 'incomplete',
                notes: 'Example 2'                
            },
            {
                title: "Front ofCar",
                description: "Grab towel and scrub front of car",
                dueDate: 'Sunday April 7',
                priority: 'low',
                checklist: 'incomplete',
                notes: 'Example 2'                
            },
            {
                title: "Front ofCar",
                description: "Grab towel and scrub front of car",
                dueDate: 'Sunday April 7',
                priority: 'low',
                checklist: 'incomplete',
                notes: 'Example 2'                
            },
            {
                title: "Front ofCar",
                description: "Grab towel and scrub front of car",
                dueDate: 'Sunday April 7',
                priority: 'low',
                checklist: 'incomplete',
                notes: 'Example 2'                
            },
            {
                title: "Front ofCar",
                description: "Grab towel and scrub front of car",
                dueDate: 'Sunday April 7',
                priority: 'low',
                checklist: 'incomplete',
                notes: 'Example 2'                
            }
        ]
    }
]

const createProject = (title) => {
    const newProject = new Project(title)

    listOfProjects.push(newProject)

    return newProject
}

export { listOfProjects, createProject }

// const createProject = () => {
//     // const inputProjectContainer = document.createElement('div')
    
//     // return project
    
//     const projects = [
//         {
//             title: 'Wash Car',
//             todo: [
//                 {
//                     title: "Soak Car",
//                     description: "Spray Car with a good amout of water",
//                     due: 'Sunday April 7',
//                     priority: 'low',
//                 },
//                 {
//                     title: "Front of car",
//                     description: "Grab a towel and scrub the front of the car",
//                     due: 'Sunday spril 7',
//                     priority: "high"
//                 }
//             ]
//         },
//         {
//             title: 'Todo List',
//             todo: [
//                 {
//                     title: "Plan out",
//                     description: "plan out what youre going to do",
//                     due: "Monday April 8",
//                     priority: "medium"
//                 },
//                 {
//                     title:"Set up enviornment",
//                     description: "Set up the beginning pages of the project and get github connected",
//                     due: "Monday April 8",
//                     priority: "high"
//                 }
//             ]
//         }
//     ]
    
//     return projects
// }

// export { createProject }