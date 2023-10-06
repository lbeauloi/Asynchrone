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


bouton.addEventListener("click", function createList() {
  fetch("superheros.json")
    .then((response) => response.json())
    .then((data) => {
      // Accédez à la propriété "members" qui contient les membres de l'équipe
      let members = data.members;

      // Créez la liste <ul>
      let newList = document.createElement("ul");

      // Parcourez les membres de l'équipe
      members.forEach((member) => {
        // Parcourez les pouvoirs de chaque membre et créez un élément <li> pour chaque pouvoir
        member.powers.forEach((power) => {
          let listItem = document.createElement("li");
          listItem.textContent = `Member: ${member.name}, Power: ${power}`;
          newList.appendChild(listItem);
        });
      });

      // Ajoutez la liste <ul> à la page
      document.body.appendChild(newList);
    })
    .catch((error) => {
      console.error("Erreur : " + error);
    });
});
