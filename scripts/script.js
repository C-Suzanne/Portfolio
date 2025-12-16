AOS.init();

//Vérifier le mode sauvegardé au chargement de la page
document.addEventListener("DOMContentLoaded", function() {
    const mode = localStorage.getItem("theme");
    const body = document.querySelector("body");
    const darkModeIcon = document.querySelector(".dark-mode i");
    
    if (mode === "light"){
        //Appliquer le mode clair
        body.classList.add("light-mode");
        darkModeIcon.classList.remove("bi-moon-stars-fill");
        darkModeIcon.classList.add("bi-sun-fill");
        
        //Appliquer les styles du mode clair
        const sections = document.querySelectorAll("section");
        sections.forEach(section => {
            section.style.backgroundColor = "rgb(255, 252, 248)";
            section.style.color = "black";
        });
        const navLinks = document.querySelectorAll(".tabs-navigation .nav-pills .nav-link");
        navLinks.forEach(link => {
            link.classList.add("light-mode-tab");
        });
    }
    
});

//Modification de style 
document.querySelector(".dark-mode").addEventListener("click", function() {
    const darkModeIcon = document.querySelector(".dark-mode i");
    const body = document.querySelector("body");
    
    //Changer l'icône
    darkModeIcon.classList.toggle("bi-sun-fill");
    darkModeIcon.classList.toggle("bi-moon-stars-fill");
    
    //Changer le thème
    body.classList.toggle("light-mode");

    //Sauvegarder le mode dans le localStorage
    if (body.classList.contains("light-mode")){
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }

    if (body.classList.contains("light-mode")){
        //Appliquer les styles pour le mode clair
        const sections = document.querySelectorAll("section");
        sections.forEach(section => {
            section.style.backgroundColor = "rgb(255, 252, 248)";
            section.style.color = "black";
        });
        const navLinks = document.querySelectorAll(".tabs-navigation .nav-pills .nav-link");
        navLinks.forEach(link => {
            link.classList.add("light-mode-tab");
        });

    } else {
        //Retirer les styles pour le mode sombre
        const sections = document.querySelectorAll("section");
        sections.forEach(section => {
            section.style.backgroundColor = "";
            section.style.color = "";
        });
        const navLinks = document.querySelectorAll(".tabs-navigation .nav-pills .nav-link");
        navLinks.forEach(link => {
            link.classList.remove("light-mode-tab");
        });
    }
});


emailjs.init("hK0AyBNwkkit7LMtj");
const form= document.getElementById("formulaire");

//Formulaire
form.addEventListener("submit", function(event) {
    event.preventDefault(); //Ne recharge pas la page
    const bouton = document.getElementById("bouton");
    const texteOriginal = bouton.textContent; // Sauvegarder le texte original
    bouton.textContent = "Envoi en cours..."; //Afficher "Envoi en cours..." AVANT l'envoi
    bouton.disabled = true;
    
    //Récupérer les données du formulaire
    const formData = {
        nom: document.getElementById("nom").value,
        prenom: document.getElementById("prenom").value,
        email: document.getElementById("email").value,
        sujet: document.getElementById("sujet").value,
        message: document.getElementById("message").value
    };
    
    //Envoyer l'email via EmailJS
    emailjs.send("service_z7zgz54", "template_35szham", formData)
        .then(function() {
            // Succès
            alert("✅ Message envoyé avec succès! Je vous répondrai rapidement.");
            
            //Réinitialiser le formulaire
            document.getElementById("nom").value = "";
            document.getElementById("prenom").value = "";
            document.getElementById("email").value = "";
            document.getElementById("sujet").value = "";
            document.getElementById("message").value = "";
            
            //Réinitialiser le bouton
            bouton.textContent = texteOriginal;
            bouton.disabled = false;
        })
});