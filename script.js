
var label = document.querySelectorAll("label")
var input = document.querySelectorAll("input")

function forminput(i) {
    input[i].addEventListener("input", function (event) {
        // Chaque fois que l'utilisateur saisit quelque chose
        // on vérifie la validité du champ e-mail.
        if (input[i].validity.valid) {
          // S'il y a un message d'erreur affiché et que le champ
          // est valide, on retire l'erreur
          label[i].querySelector('.error').innerHTML = ""; // On réinitialise le contenu
          label[i].querySelector('.error').className = "error"; // On réinitialise l'état visuel du message
        }
      }, false);
}

  form.addEventListener("submit", function (event) {
    for (var i=0; i < label.length ; i++){
        if (input[i].getAttribute("name") === "mail" && !input[i].validity.valueMissing){
            var error = "Looks like this is not an email"
        }
        else{
            var error = input[i].getAttribute("name")+" cannot be empty"
        }
    // Chaque fois que l'utilisateur tente d'envoyer les données
    // on vérifie que le champ email est valide.
    forminput(i)
    if (!input[i].validity.valid) { 
      
      // S'il est invalide, on affiche un messagd'erreur personnalisé
      label[i].querySelector('.error').innerHTML = error;
      label[i].querySelector('.error').className = "error active";
      // Et on empêche l'envoi des données du formulaire
      event.preventDefault();
    }
  }}, false);