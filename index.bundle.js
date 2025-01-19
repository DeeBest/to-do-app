(()=>{"use strict";const e=document.createElement("div");e.id="header";const t=document.createElement("h1");t.textContent="To-Do-App";const n=document.createElement("hr");function d(e){localStorage.setItem("projects",JSON.stringify(e))}function a(){return JSON.parse(localStorage.getItem("projects"))||[]}function c(){p.innerHTML="";let e=a();e.forEach((t=>{const n=document.createElement("div");n.classList.add("projectItem"),p.appendChild(n);let a=document.createElement("div");a.classList.add("projectHeader"),n.appendChild(a);let c=document.createElement("div");c.classList.add("projectNameAndCheckBoxDiv"),a.appendChild(c);let o=document.createElement("div");o.classList.add("dueDateAndArrowDiv"),a.appendChild(o);let l=document.createElement("input");l.classList.add("projectCheckBox"),l.type="checkbox",l.checked=t.isChecked,c.appendChild(l);let i=document.createElement("span");i.className="projectName",i.classList.add(`${t.isChecked&&"completedProject"}`),i.textContent=t.name,c.appendChild(i);let r=document.createElement("span");r.className="dueDate",r.classList.add(`${t.isChecked&&"completedProject"}`),r.textContent=t.dueDate,o.appendChild(r);let s=document.createElement("span");s.className="arrowSpan",s.classList.add(`${t.isChecked&&"hideArrowSpan"}`),s.textContent="▼",o.appendChild(s);let m=document.createElement("div");m.classList.add("projectBody"),n.appendChild(m);let u=document.createElement("div");u.classList.add("notesDiv"),m.appendChild(u);let h=document.createElement("h3");h.classList.add("notesHeading"),h.textContent="Notes",u.appendChild(h);let C=document.createElement("textarea");C.classList.add("notesTextarea"),C.placeholder="Notes about the project...",C.value=t.notes,u.appendChild(C);let E=document.createElement("div");E.classList.add("dueDateDiv"),m.appendChild(E);let L=document.createElement("h3");L.classList.add("dueDateHeading"),L.textContent="Due Date",E.appendChild(L);let v=document.createElement("input");v.classList.add("dueDateInput"),v.type="date",E.appendChild(v);let y=document.createElement("div");y.classList.add("priorityDiv"),m.appendChild(y);let g=document.createElement("h3");g.classList.add("priorityHeading"),g.textContent="Priority",y.appendChild(g);let j=document.createElement("select");j.classList.add("prioritySelect"),y.appendChild(j),["Low","Medium","High"].forEach((e=>{const t=document.createElement("option");t.value=e.toLowerCase(),t.textContent=e,j.appendChild(t)})),j.value=t.priority;let x=document.createElement("div");x.classList.add("deleteProjectBtnDiv"),m.appendChild(x);let f=document.createElement("button");function D(){"high"===t.priority?n.style.borderLeft="15px solid red":"medium"===t.priority?n.style.borderLeft="15px solid yellow":n.style.borderLeft="15px solid green"}f.classList.add("removeProjectBtn"),f.textContent="Delete",x.appendChild(f),s.addEventListener("click",(function(){m.classList.toggle("show"),s.classList.toggle("arrowSpanUp")})),l.addEventListener("change",(()=>{const a=n.querySelector(".projectName").textContent,c=e.filter((e=>e.name===a));c&&(l.checked?(t.isChecked=!0,d(e)):(t.isChecked=!1,d(e))),document.querySelector(".projectName").classList.toggle("completedProject"),document.querySelector(".dueDate").classList.toggle("completedProject"),document.querySelector(".arrowSpan").classList.toggle("hideArrowSpan")})),C.addEventListener("change",(a=>{const c=n.querySelector(".projectName").textContent,o=e.filter((e=>e.name===c));o&&(t.notes=a.target.value),d(e)})),D(),j.addEventListener("change",(function(){const a=n.querySelector(".projectName").textContent,c=e.filter((e=>e.name===a));c&&(t.priority=this.value),d(e),D()})),v.addEventListener("change",(function(){const a=n.querySelector(".projectName").textContent,c=e.filter((e=>e.name===a));if(c){const n=this.value,[a,c,o]=n.split("-"),l=`${o}/${c}/${a}`;t.dueDate=l,r.textContent=t.dueDate,d(e)}})),f.addEventListener("click",(()=>{n.remove();const t=n.querySelector(".projectName").textContent,a=e.findIndex((e=>e.name===t));-1!==a&&(e.splice(a,1),d(e))}))}))}e.appendChild(t),e.appendChild(n);let o=[];const l=document.createElement("div");l.id="main";const i=document.createElement("form");i.id="projectForm",l.appendChild(i);let r=document.createElement("input");r.id="projectNameInput",r.type="text",r.placeholder="Project name...",i.appendChild(r);const s=document.createElement("button");s.id="submitProjectBtn",s.type="submit",s.textContent="+Project",s.addEventListener("click",(e=>{e.preventDefault(),""!==r.value&&r.value.length>=1?(function(){let e=new class{constructor(e){this.id=(new Date).getTime(),this.name=e,this.notes="",this.dueDate="",this.priority="Low",this.isChecked=!1}}(r.value),t=a();t.push(e),o=t,d(o),r.value="",c()}(),r.placeholder="Project name...",r.style.outline="none"):(r.placeholder="Please enter a project name with 1 or more characters",r.style.outline="3px solid maroon")})),i.appendChild(s);const p=document.createElement("div");p.id="projectsContainer",l.appendChild(p);const m=document.createElement("div");m.id="footer";let u=(new Date).getFullYear();const h=document.createElement("p");h.innerHTML=`&copy Created by Simphiwe ${u}.`,m.appendChild(h),(()=>{const t=document.querySelector("body");t.id="page",t.appendChild(e),t.appendChild(l),t.appendChild(m),c()})()})();