// document.querySelectorAll('.text').forEach(item => {
//     item.addEventListener('input', () => {
//         item.setCustomValidity('');
//         item.checkValidity();
//     });
    
//     item.addEventListener('invalid', () => {
//         if(item.value === '') {
//             if (document.getElementById("error"))
//                 return
//             else{
//                 const text = document.createTextNode(`[${item.getAttribute("name")}] cannot be empty`);
//                 const createSpan = document.createElement("span")
//                 createSpan.setAttribute("id","error")
//                 createSpan.append(text)
//                 item.after(createSpan)
//             }
//         } else {
//             if (document.getElementById("error"))
//                 return
//             else{
//                 const text = document.createTextNode("Looks like this is not an email")
//                 const createSpan = document.createElement("span")
//                 createSpan.setAttribute("id","error")
//                 createSpan.append(text)
//                 item.after(createSpan)
//         }}
//     });
//     })


// Il y a plusieurs façon de sélectionner un nœud DOM ; ici on récupère
// le formulaire et le champ d'e-mail ainsi que l'élément span
// dans lequel on placera le message d'erreur

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
    label4.querySelector('.error').innerHTML = "Password cannot be empty";
    label4.querySelector('.error').className = "error active";
    // Et on empêche l'envoi des données du formulaire
    event.preventDefault();
  }
}, false);
