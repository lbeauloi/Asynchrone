// ---EX1---
// Create a <button>, when clicked the json's content is loaded with a fetch('your-json-file.json'), then dynamically generate a <ul> list containing each rule in a <li>.
//---APPROCHE---
// créer le bouton en js
// je sais pas encore comment mais "intégrer" le fichier json au js pour pouvoir prendre les éléments que l'ont veut mettre dans la liste
// eventlistener sur le bouton pour créer une ul

let title = document.createElement("h1");
let bouton = document.createElement("button");
bouton.textContent = "click";
title.textContent = "Asynchrone exercice 1";
document.body.appendChild(title);
document.body.appendChild(bouton);

let fetchSuperHeros = fetch("superheros.json");

function createList() {
  fetch("superheros.json")
    .then((response) => response.json())
    .then((data) => {
      // via "members" on accède aux heros de la squad de heros
      let members = data.members;

      // creation liste ul
      let newList = document.createElement("ul");

      // Pour chaque membres de la hero squad ...
      members.forEach((member) => {
        //...on créé une ul
        let listeHeros = document.createElement("ul");
        listeHeros.textContent = `hero: ${member.name}`;
        document.body.appendChild(listeHeros);
        // ... on parcoure les pouvoirs de chaque hero et créez un élément li pour chaque pouvoir
        member.powers.forEach((power) => {
          let listItem = document.createElement("li");
          listItem.textContent = `Power: ${power}`;
          listeHeros.appendChild(listItem);
        });
      });

      // on rattache la liste créée au body
      document.body.appendChild(newList);
    })
    .catch((error) => {
      console.error("Erreur : " + error);
    });
}
bouton.addEventListener("click", createList);
