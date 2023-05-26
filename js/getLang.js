let translations = {}
let pattern

export async function changeLanguage(language) {
    try {
        const response = await fetch(`translations/${language}.json`)
        translations[language] = await response.json()
    } catch (error) {
        console.error(`So ein Pech ${error}`)
        return
    }

    const headerTitleElement = document.getElementById('sitetitle')
    const subtitleElement = document.getElementById('subtitle')
    const titleElement = document.getElementById('title')
    const messageElement = document.getElementById('message')
    const labelElement = document.getElementById('label')
    const usernameInput = document.getElementById('username')
    const buttonInput = document.getElementById('button')
    const outputForm = document.getElementById('output')
    const headerTitleLabel = translations[language].sitetitle
    const titleLabel = translations[language].title
    const subtitleLabel = translations[language].subtitle
    const messageLabel = translations[language].message
    const labelLabel = translations[language].label
    const usernameLabel = translations[language].username
    const buttonLabel = translations[language].button

    if (headerTitleElement) headerTitleElement.innerHTML = headerTitleLabel
    if (subtitleElement) subtitleElement.innerHTML = subtitleLabel
    if (titleElement) titleElement.innerHTML = titleLabel
    if (messageElement) messageElement.innerHTML = messageLabel
    if (labelElement) labelElement.innerHTML = labelLabel
    if (usernameInput) usernameInput.innerHTML = usernameLabel
    if (buttonInput) buttonInput.innerHTML = buttonLabel
    setPattern(new RegExp(translations[language].pattern))
}

export function getTranslation(key) {
    const language = key || 'de'
    const translation = translations[language]
    return translation ? translation[key] : ''
}

export function setGetName() {
    const username = document.getElementById('username').value
    const currentPattern = getPattern()

    const message = currentPattern && currentPattern.test(username)
        ? `${getTranslation('welcomeMessage')}, ${username}!`
        : `${getTranslation('errorText1')} ${username}. ${getTranslation('errorText2')} ${getTranslation('errorText3')} ${getTranslation('errorText4')}`

    document.getElementById('output').innerHTML = message
}

export function setPattern(regex) {
    pattern = regex
}

export function getPattern() {
    return pattern
}
