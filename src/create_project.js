import { Project } from "./project"

const createProject = (title) => {
    const newProject = new Project(title)

    return newProject
}

export { createProject }

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