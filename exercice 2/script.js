// ---EX2---
// Make a page with a text input and a button. When the button is clicked, a fetch query is sent to the agify API with the name entered in the input. When the request is finished display the result in a new div on the page. Keep the the past requests on the page by creating a new div each time you make an API call.

// ---MON APPROCHE---
// Créer un text input et un bouton et une div en JS
// Faire une fonction qui appelle l'API, récupère le résultat et l'affiche dans une div

// Créer un text input et un bouton et une div en JS
let inputTxt = document.createElement("input");
let submitBtn = document.createElement("button");
let resultContainer = document.createElement("div");

inputTxt.placeholder = "Enter a name";
submitBtn.textContent = "Submit";
// on les lie au body
document.body.appendChild(inputTxt);
document.body.appendChild(submitBtn);
document.body.appendChild(resultContainer);

// event listener sur le bouton submit, quand on clique déclenche la fonction...
submitBtn.addEventListener("click", () => {
  // on recup le nom entré dans l'input et on le stock dans une constante
  const name = inputTxt.value;

  // on demande à l'API
  fetch(`https://api.agify.io/?name=${name}`) // url de l'API + le nom saisi par l'utilisateur (const name)
    .then((response) => response.json()) //on traite la réponse en format JSON
    .then((data) => {
      // la fonction qui créé une nouvelle div pour afficher le résultat
      const resultDiv = document.createElement("div");
      resultDiv.textContent = `Name: ${data.name}, Age: ${data.age}`;

      // on lie la div résultat au conteneur de résultat
      resultContainer.appendChild(resultDiv);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
