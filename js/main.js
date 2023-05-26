import { changeLanguage, setGetName } from './getLang.js'

document.addEventListener('DOMContentLoaded', () => {
    changeLanguage()

    const button = document.getElementById('button')
    button.addEventListener('click', setGetName)
})