(()=>{"use strict";const e=document.createElement("div");e.id="header";const t=document.createElement("h1");t.textContent="To-Do-App";const n=document.createElement("hr");e.appendChild(t),e.appendChild(n);let d=[];const o=document.createElement("div");o.id="main";const c=document.createElement("div");c.id="projects-div",c.classList.add("main-grid-item");const i=document.createElement("h3");i.textContent="One's Projects";const a=document.createElement("hr");a.classList.add="grid-item-hr";const l=document.createElement("div");l.id="add-project-button",l.textContent="+",l.addEventListener("click",(function(){const e=document.createElement("div");e.id="popup-overlay";const t=document.createElement("div");t.id="popup-container";const n=document.createElement("h2");n.textContent="Create New Project";const o=document.createElement("form");o.reset(),o.id="project-form";const i=document.createElement("label");i.for="project-name",i.textContent="Project Name:";const a=document.createElement("input");a.type="text",a.id="project-name",a.name="project-name",a.required=!0;const l=document.createElement("button");l.type="submit",l.textContent="Create";const s=document.createElement("button");function r(t){t.preventDefault;let n=new class{constructor(e){this.name=e,this.todos=[],this.notes=[]}addTodo(e){this.todos.push(e)}editTodo(e,t){e>=0&&e<this.todos.length?this.todos[e]=t:console.error("Invalid todo index")}addNote(e){this.notes.push(e)}deleteProject(){const e=d.indexOf(this);-1!==e?(d.splice(e,1),console.log(`Project '${this.name}' deleted.`)):console.error("Project not found in array")}}(a.value);d.push(n),console.log(d),function(){document.querySelectorAll(".project-item-div").forEach((e=>e.remove()));let e=document.createElement("div");e.id="project-list",d.forEach((t=>{const n=document.createElement("div");n.classList.add("project-item-div");let d=document.createElement("span");d.classList.add("project-name"),d.textContent=t.name;let o=document.createElement("div");o.classList.add("project-items-btns-div");let c=document.createElement("button");c.classList.add("project-item-button"),c.id="project-add-to-do-button",c.textContent="+ To Do";let i=document.createElement("button");i.classList.add("project-item-button"),i.id="project-edit-button",i.textContent="Edit";let a=document.createElement("button");a.classList.add("project-item-button"),a.id="project-delete-button",a.textContent="Delete",o.appendChild(c),o.appendChild(i),o.appendChild(a),n.appendChild(d),n.appendChild(o),e.appendChild(n)})),c.appendChild(e)}(),document.body.removeChild(e),o.removeEventListener("submit",r)}s.textContent="x",s.id="close-popup",s.addEventListener("click",(()=>{document.body.removeChild(e)})),o.appendChild(i),o.appendChild(a),o.appendChild(l),t.appendChild(s),t.appendChild(n),t.appendChild(o),e.appendChild(t),document.body.appendChild(e),o.addEventListener("submit",r),o.addEventListener("submit",r)})),c.appendChild(i),c.appendChild(a),c.appendChild(l);const s=document.createElement("div");s.id="to-dos-div",s.classList.add("main-grid-item");const r=document.createElement("h3");r.textContent="One's To-Do's";const m=document.createElement("hr");m.classList.add="grid-item-hr",s.appendChild(r),s.appendChild(m);const p=document.createElement("div");p.id="notes-div",p.classList.add("main-grid-item");const u=document.createElement("h3");u.textContent="Notes To Self";const h=document.createElement("hr");h.classList.add="grid-item-hr",p.appendChild(u),p.appendChild(h),o.appendChild(c),o.appendChild(s),o.appendChild(p);const C=document.createElement("div");C.id="footer";let E=(new Date).getFullYear();const v=document.createElement("p");v.innerHTML=`&copy Created by Simphiwe ${E}.`,C.appendChild(v),(()=>{const t=document.querySelector("body");t.appendChild(e),t.appendChild(o),t.appendChild(C)})()})();