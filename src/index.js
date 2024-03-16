import "./index.css";
import { header } from "./components/header/header.js";
import { main } from "./components/main/main.js";
import { footer } from "./components/footer/footer.js";

(() => {
  const page = document.querySelector("body");


  page.appendChild(header);
  page.appendChild(main);
  page.appendChild(footer);
})();
