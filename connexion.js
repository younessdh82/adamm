
// Récupérer le formulaire
const loginForm = document.getElementById("loginForm");

// Récupérer le message
const message = document.getElementById("message");

// Écouter la soumission du formulaire
loginForm.addEventListener("submit", function(event) {

    // Empêcher le rechargement de la page
    event.preventDefault();

    // Récupérer les valeurs saisies
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Vérifier les informations
    if (email === "admin@gmail.com" && password === "123456") {

        message.textContent = "Login successful! Welcome.";
        message.style.color = "green";

    } else {

        message.textContent = "Incorrect email or password!";
        message.style.color = "red";

    }

});
