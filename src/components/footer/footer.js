import './footer.css';

export const footer = document.createElement('div');
footer.id = 'footer';

let currentDate = new Date().getFullYear();

const footerPara = document.createElement('p');
footerPara.innerHTML = `&copy Created by Simphiwe ${currentDate}.`;

footer.appendChild(footerPara);