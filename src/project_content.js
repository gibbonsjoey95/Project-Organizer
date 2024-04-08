const logName = (item) => {
    return item
}

const projectContent = () => {
    const projectContent = document.createElement('div')

    projectContent.classList.add("project-content")

    projectContent.textContent = logName()

    return projectContent
}

export { projectContent, logName }