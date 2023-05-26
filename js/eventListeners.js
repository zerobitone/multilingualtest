import { changeLanguage, setGetName } from './getLang.js';

function addLanguageListeners() {
    const languageLinks = document.querySelectorAll('.dropdown-content a');
    languageLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const language = link.getAttribute('href').substring(1);
            changeLanguage(language);
        });
    });

    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        setGetName();
    });
}

export { addLanguageListeners };

