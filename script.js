// Code JS simple, avec des fonctions basiques écrites façon projet lycéen

window.addEventListener("DOMContentLoaded", () => {

    // Gestion du carrousel des projets
    const listeFinis = document.querySelectorAll('.projet-item');
    const btnPrevFin = document.getElementById('btnPrevFin');
    const btnNextFin = document.getElementById('btnNextFin');
    let indexFinis = 0;

    function afficherFini(i) {
        listeFinis.forEach(item => item.classList.remove('actif'));
        listeFinis[i].classList.add('actif');
    }

    btnNextFin.addEventListener('click', () => {
        indexFinis++;
        if (indexFinis >= listeFinis.length) {
            indexFinis = 0;
        }
        afficherFini(indexFinis);
    });

    btnPrevFin.addEventListener('click', () => {
        indexFinis--;
        if (indexFinis < 0) {
            indexFinis = listeFinis.length - 1;
        }
        afficherFini(indexFinis);
    });


    // Gestion du carrousel des projets
    const listeCours = document.querySelectorAll('.projet-cours');
    const btnPrevCours = document.getElementById('btnPrevCours');
    const btnNextCours = document.getElementById('btnNextCours');
    let indexCours = 0;

    function afficherCours(i) {
        listeCours.forEach(item => item.classList.remove('actif'));
        listeCours[i].classList.add('actif');
    }

    btnNextCours.addEventListener('click', () => {
        indexCours++;
        if (indexCours >= listeCours.length) {
            indexCours = 0;
        }
        afficherCours(indexCours);
    });

    btnPrevCours.addEventListener('click', () => {
        indexCours--;
        if (indexCours < 0) {
            indexCours = listeCours.length - 1;
        }
        afficherCours(indexCours);
    });


    // Validation du formulaire de contact
    const formulaire = document.getElementById('monFormulaire');
    const inputNom = document.getElementById('pseudo');
    const inputMail = document.getElementById('mail');
    const inputMsg = document.getElementById('texteMsg');
    const succesMsg = document.getElementById('succesMsg');

    formulaire.addEventListener('submit', (e) => {
        e.preventDefault(); //
        let formOK = true;

        // Vérif nom
        if (inputNom.value.trim() === "") {
            inputNom.nextElementSibling.style.display = "block"; 
            formOK = false;
        } else {
            inputNom.nextElementSibling.style.display = "none";
        }

        // Vérif mail
        if (inputMail.value.trim() === "" || !inputMail.value.includes('@')) {
            inputMail.nextElementSibling.style.display = "block";
            formOK = false;
        } else {
            inputMail.nextElementSibling.style.display = "none";
        }

        // Vérif message
        if (inputMsg.value.trim() === "") {
            inputMsg.nextElementSibling.style.display = "block";
            formOK = false;
        } else {
            inputMsg.nextElementSibling.style.display = "none";
        }

        // Si tout est bon, on affiche le message de succès
        if (formOK) {
            succesMsg.style.display = "block";
            formulaire.reset();
            setTimeout(() => {
                succesMsg.style.display = "none";
            }, 4000);
        } else {
            succesMsg.style.display = "none";
        }
    });

});