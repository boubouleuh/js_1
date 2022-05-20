
var label = document.querySelectorAll("label")
var input = document.querySelectorAll("input")

function forminput(i) {
    input[i].addEventListener("input", function (event) {
        // Chaque fois que l'utilisateur saisit quelque chose
        // on vérifie la validité du champ e-mail.
        if (input[i].validity.valid) {
          // S'il y a un message d'erreur affiché et que le champ
          // est valide, on retire l'erreur
          label[i].querySelector('.error').innerHTML = "";// On réinitialise le contenu
          input[i].style.border = "1px solid #ebebeb" 
          input[i].style.color = "black" 
          input[i].style.background = ""   
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
      input[i].style.color = "#ff7a7a"  
      input[i].style.border = "2px solid #ff7a7a"
      input[i].placeholder = ''
      input[i].style.background = "url('images/icon-error.svg') no-repeat right 10px center"     
      // S'il est invalide, on affiche un messagd'erreur personnalisé
      label[i].querySelector('.error').innerHTML = error;
      label[i].querySelector('.error').className = "error active";
      // Et on empêche l'envoi des données du formulaire
      event.preventDefault();
    }
  }}, false);



<<<<<<< HEAD
=======
var form  = document.getElementsByTagName('form')[0];

var firstName = document.getElementById('first-name');
var lastName = document.getElementById('last-name');
var email = document.getElementById('mail');
var password = document.getElementById('password');
var label1 = document.getElementById('label1');
var label2 = document.getElementById('label2');
var label3 = document.getElementById('label3');
var label4 = document.getElementById('label4');
// var error = document.querySelector('.error');

firstName.addEventListener("input", function (event) {
  // Chaque fois que l'utilisateur saisit quelque chose
  // on vérifie la validité du champ e-mail.
  if (firstName.validity.valid) {
    // S'il y a un message d'erreur affiché et que le champ
    // est valide, on retire l'erreur
    label1.querySelector('.error').innerHTML = ""; // On réinitialise le contenu
    label1.querySelector('.error').className = "error"; // On réinitialise l'état visuel du message
  }
}, false);

form.addEventListener("submit", function (event) {
  // Chaque fois que l'utilisateur tente d'envoyer les données
  // on vérifie que le champ email est valide.
  if (!firstName.validity.valid) {

    // S'il est invalide, on affiche un message d'erreur personnalisé
    label1.querySelector('.error').innerHTML = "First name cannot be empty";
    label1.querySelector('.error').className = "error active";
    // Et on empêche l'envoi des données du formulaire
    event.preventDefault();
  }
}, false);

lastName.addEventListener("input", function (event) {
  // Chaque fois que l'utilisateur saisit quelque chose
  // on vérifie la validité du champ e-mail.
  if (lastName.validity.valid) {
    // S'il y a un message d'erreur affiché et que le champ
    // est valide, on retire l'erreur
    label2.querySelector('.error').innerHTML = ""; // On réinitialise le contenu
    label2.querySelector('.error').className = "error"; // On réinitialise l'état visuel du message
  }
}, false);

form.addEventListener("submit", function (event) {
  // Chaque fois que l'utilisateur tente d'envoyer les données
  // on vérifie que le champ email est valide.
  if (!lastName.validity.valid) {

    // S'il est invalide, on affiche un message d'erreur personnalisé
    label2.querySelector('.error').innerHTML = "Last name cannot be empty";
    label2.querySelector('.error').className = "error active";
    // Et on empêche l'envoi des données du formulaire
    event.preventDefault();
  }
}, false);

email.addEventListener("input", function (event) {
  // Chaque fois que l'utilisateur saisit quelque chose
  // on vérifie la validité du champ e-mail.
  if (email.validity.valid) {
    // S'il y a un message d'erreur affiché et que le champ
    // est valide, on retire l'erreur
    label3.querySelector('.error').innerHTML = ""; // On réinitialise le contenu
    label3.querySelector('.error').className = "error"; // On réinitialise l'état visuel du message
  }
}, false);

form.addEventListener("submit", function (event) {
  // Chaque fois que l'utilisateur tente d'envoyer les données
  // on vérifie que le champ email est valide.
  if (!email.validity.valid) {

    // S'il est invalide, on affiche un message d'erreur personnalisé
    label3.querySelector('.error').innerHTML = "Looks like this is not an email";
    label3.querySelector('.error').className = "error active";
    // Et on empêche l'envoi des données du formulaire
    event.preventDefault();
  }
}, false);

password.addEventListener("input", function (event) {
  // Chaque fois que l'utilisateur saisit quelque chose
  // on vérifie la validité du champ e-mail.
  if (password.validity.valid) {
    // S'il y a un message d'erreur affiché et que le champ
    // est valide, on retire l'erreur
    label4.querySelector('.error').innerHTML = ""; // On réinitialise le contenu
    label4.querySelector('.error').className = "error"; // On réinitialise l'état visuel du message
  }
}, false);

form.addEventListener("submit", function (event) {
  // Chaque fois que l'utilisateur tente d'envoyer les données
  // on vérifie que le champ email est valide.
  if (!password.validity.valid) {

    // S'il est invalide, on affiche un message d'erreur personnalisé
    label4.querySelector('.error').innerHTML = "Looks like this is not an email";
    label4.querySelector('.error').className = "error active";
    // Et on empêche l'envoi des données du formulaire
    event.preventDefault();
  }
}, false);
>>>>>>> 0b17b26c68a0c098b8ab1906e254fdf7179b9e6c
