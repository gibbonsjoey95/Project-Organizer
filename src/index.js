import './styles.css'
import { sidebar } from './sidebar'
import { projectContent } from './project_content'

const component = () => {
    const contentContainer = document.querySelector('#contentContainer')

    contentContainer.appendChild(sidebar())
    contentContainer.appendChild(projectContent())

    return contentContainer
}

document.body.appendChild(component())