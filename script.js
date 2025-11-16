// Fonction pour valider le formulaire de contact
                                                                          function validateForm() {
                                                                            const nom = document.getElementById('nom').value.trim();
                                                                              const prenom = document.getElementById('prenom').value.trim();
                                                                                const email = document.getElementById('email').value.trim();
                                                                                  const message = document.getElementById('message').value.trim();

                                                                                    if (!nom || !prenom || !email || !message) {
                                                                                        alert("Veuillez remplir tous les champs.");
                                                                                            return false;
                                                                                              }

                                                                                                // Simple validation email
                                                                                                  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                                                                                    if (!emailPattern.test(email)) {
                                                                                                        alert("Veuillez entrer une adresse email valide.");
                                                                                                            return false;
}
alert("Message envoyé ! Merci de m'avoir contacté.");
  // Ici, tu peux ajouter du code pour envoyer le message avec une API, ou autre.
    return false; // Empêche la soumission réelle pour la démo
    }

    // Fonction pour scroller vers une section
    function scrollToSection(id) {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
      }