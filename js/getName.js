import { getTranslation } from './getLang.js'

let pattern

export const setGetName = () => {
    let username = document.getElementById("username").value
    let message = pattern.test(username) ?
        `<h2>${getTranslation('welcomeMessage')} ${username}!</h2>` :
        `<p class="error">${getTranslation('errorText1')}<p><h2 class="error">"${username}"?</h2><p class="error"><br />${getTranslation('errorText2')}<br /><b>${getTranslation('errorText3')}</b>${getTranslation('errorText4')}</p>`

    const output = document.getElementById("output")
    output.innerHTML = message

    // Übersetzung des Formulars nach dem Absenden
    const buttonLabel = getTranslation('button')
    document.getElementById('button').innerHTML = buttonLabel
    document.getElementById('label').innerHTML = getTranslation('label')
}

export const setPattern = (regex) => {
    pattern = regex
}
