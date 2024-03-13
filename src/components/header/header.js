import './header.css';

export const header = document.createElement('div');
header.id = 'header';

const headingDiv = document.createElement('h1');
headingDiv.textContent = 'To-Do-App';

const hr = document.createElement('hr');

header.appendChild(headingDiv);
header.appendChild(hr);