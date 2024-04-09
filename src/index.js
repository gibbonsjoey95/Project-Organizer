import './styles.css'
import { sidebar } from './sidebar'
import { mainContent } from './project_content'

const component = () => {
    const contentContainer = document.querySelector('#contentContainer')

    contentContainer.appendChild(sidebar())
    contentContainer.appendChild(mainContent())

    return contentContainer
}

document.body.appendChild(component())