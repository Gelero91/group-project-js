// Créer les éléments de la navigation
const nav = document.createElement("nav");
nav.setAttribute("id", "nav-mobile");
const ul = document.createElement("ul");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const link1 = document.createElement("a");
const link2 = document.createElement("a");
const link3 = document.createElement("a");

// Ajouter du contenu et des classes aux éléments
li1.classList.add("nav-item");
li2.classList.add("nav-item");
li3.classList.add("nav-item");

link1.textContent = "Accueil";
link1.setAttribute("href", "#");
link2.textContent = "À propos";
link2.setAttribute("href", "#");
link3.textContent = "Contact";
link3.setAttribute("href", "#");

// Ajouter les éléments créés à la page
nav.appendChild(ul);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
li1.appendChild(link1);
li2.appendChild(link2);
li3.appendChild(link3);

// Ajouter les classes nécessaires pour le style du menu hamburger
nav.classList.add("menu-burger");
li1.classList.add("menu-item-burger");
li2.classList.add("menu-item-burger");
li3.classList.add("menu-item-burger");

const hamburgerBtn = document.createElement("div");
hamburgerBtn.classList.add("hamburger-btn");
const span1 = document.createElement("span");
const span2 = document.createElement("span");
const span3 = document.createElement("span");

hamburgerBtn.appendChild(span1);
hamburgerBtn.appendChild(span2);
hamburgerBtn.appendChild(span3);
nav.insertBefore(hamburgerBtn, ul);

// Ajouter l'événement au bouton hamburger
hamburgerBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  nav.classList.toggle("active");
});

console.log("nav", nav);

// Ajouter la navigation à la page
const menuJS=document.getElementById("menuJS");
menuJS.appendChild(nav);
