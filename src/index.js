import './styles.css'
import { sidebar } from './sidebar'

const component = () => {
    const contentContainer = document.querySelector('#contentContainer')

    contentContainer.appendChild(sidebar())

    return contentContainer
}

document.body.appendChild(component())