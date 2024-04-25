//index.js
import './index.css';
import { header } from './components/header/header.js';
import { main } from './components/main/main.js';
import { footer } from './components/footer/footer.js';
import { loadProjectsFromLocalStorage } from './functionality/loadData.js';

(() => {
  const page = document.querySelector('body');
  page.id = 'page';

  page.appendChild(header);
  page.appendChild(main);
  page.appendChild(footer);

  loadProjectsFromLocalStorage();
})();
