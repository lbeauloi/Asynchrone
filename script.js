// ---EX1---
// Create a <button>, when clicked the json's content is loaded with a fetch('your-json-file.json'), then dynamically generate a <ul> list containing each rule in a <li>.
//---APPROCHE---
// créer le bouton en js
// je sais pas encore comment mais "intégrer" le fichier json au js pour pouvoir prendre les éléments que l'ont veut mettre dans la liste
// eventlistener sur le bouton pour créer une ul

let bouton = document.createElement("button");
bouton.textContent = "click";
document.body.appendChild(bouton);

bouton.addEventListener("click", function createList() {
  let newList = document.createElement("ul");
  newList.textContent = "han ouais";
  document.body.appendChild(newList);

  fetch("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json")
  .then(response => {
    // Gérer la réponse ici
  })
  .catch(error => {
    // Gérer les erreurs ici
  });

});
