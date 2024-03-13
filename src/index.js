import './index.css';

(() => {
  const page = document.querySelector('body');

  const header = document.createElement('div');
  header.id = 'header';

  const main = document.createElement('div');
  main.id = 'main';

  const footer = document.createElement('div');
  footer.id = 'footer';

  page.appendChild(header);
  page.appendChild(main);
  page.appendChild(footer);
})();
