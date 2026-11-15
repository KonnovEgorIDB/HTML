const TAG = 'p';

function renderDOM(selector, content) {
    const root = document.querySelector(selector);

    if (!root) {
        return;
    }

    const element = createElement(TAG, content); // createElement טח פאיכא dom.js
    root.appendChild(element);
}