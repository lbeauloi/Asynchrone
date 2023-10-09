// ---EX2---
// Make a page with a text input and a button. When the button is clicked, a fetch query is sent to the agify API with the name entered in the input. When the request is finished display the result in a new div on the page. Keep the the past requests on the page by creating a new div each time you make an API call.

// ---MON APPROCHE---
// Créer un text input et un bouton
// Lier le bouton a l'API (https://agify.io/)
// Faire une fonction qui récupère le résultat et l'affiche dans une div

let inputTxt = document.createElement("input");
let submitBtn = document.createElement("button");

document.body.appendChild(inputTxt);
document.body.appendChild(submitBtn);

fetch("Access-Control-Allow-Origin: https://agify.io/")
  .then((response) => response.json)
  .then((data) => console.log(data));

