// ===== CLIM' MASTER ===== // logique du jeu

const powerButton = document.getElementById("powerbutton");
const instruction = document.getElementById("instruction");
const facade = document.getElementById("facade");
const filtre1 = document.getElementById("filtre1");
const filtre2 = document.getElementById("filtre2");
const nettoyerButton = document.getElementById("nettoyerButton");
const remettreButton = document.getElementById("remettreButton");
const score = document.getElementById("score");
const message = document.getElementById("message");

let facadeOuverte = false;
let filtreGaucheRetire = false;
let filtreDroiteRetire = false;
let horsTension = false;
let filtreNettoyers = false;
let etapesTerminees = 0;

powerButton.addEventListener("click", function(){
    instruction.textContent = "Climatiseur hors tension. Tu peux maintenant ouvrir la façade.";

    powerButton.textContent = "Climatiseur hors tension";

    powerButton.disabled = true;
    horsTension = true;
    etapesTerminees++;
    mettreAJourScore();

});

// OUVRIR LA FAçade //

facade.addEventListener("click", function(){
    if (facadeOuverte === true) {
        instruction.textContent = "La façade est déjà ouverte.";
        return
    }

    if (horsTension === false) {instruction.textContent = "Attention ! Mets d'abord le climatiseur hors tension.";
        return;
    }

    instruction.textContent = "Façade ouverte ! Tu peux maintenant retirer les filtres.";
    facade.textContent = "Façade ouverte";
    facadeOuverte = true;
    etapesTerminees++;
    mettreAJourScore();

    });

    // RETIRER LE FILTRE GAUCHE //

    filtre1.addEventListener("click",function(){

        if (facadeOuverte === false) {
            instruction.textContent = "Ouvre d'abord la façade du climatiseur.";
            return;
        }

        filtreGaucheRetire = true;

        filtre1.textContent = "Filtre gauche retiré";
        filtre1.disabled = true;

        instruction.textContent = "Filtre gauche retiré ! Tu peux maintenant retiter le filtre droit.";
    });

     // RETIRER LE FILTRE DROIT //

      filtre2.addEventListener("click",function(){

        if (facadeOuverte === false) {
            instruction.textContent = "Ouvre d'abord la façade du climatiseur.";
            return;
        }

         if (filtreGaucheRetire === false) {
            instruction.textContent = "Retire d'abord le filtre gauche.";
            return
        }

        filtreDroiteRetire = true;

       

        filtre2.textContent = "Filtre droit retiré";
        filtre2.disabled = true;
        etapesTerminees++;
        mettreAJourScore();

        instruction.textContent = "Les deux filtres ont été retirés ! Tu peux maintenant les nettoyer.";
    });

    // NETTOYER LES FILTRES //

    nettoyerButton.addEventListener("click",function(){

        if (filtreGaucheRetire === false || filtreDroiteRetire === false) {
            instruction.textContent = "Retire d'abord les deux filtres.";
            return;
        }
           
        if (filtreNettoyers === true) { 
            instruction.textContent = "Les filtres sont déjà nettoyés. Remets-les en place.";
            return;
           
         }
        filtreNettoyers = true;
        nettoyerButton.disabled = true;
        etapesTerminees++;
        mettreAJourScore();
        instruction.textContent = "Les filtres ont été nettoyés ! Tu peux maintenant les remettre en place.";
    });

    // REMETTRE LES FILTRES EN PLACE //

    remettreButton.addEventListener("click", function(){

        if (filtreNettoyers === false ) {
            instruction.textContent = "Nettoie d'abord les deux filtres.";
            return;
        }

        filtre1.textContent = "Filtre gauche"; 
        filtre2.textContent = "Filtre droit";

        filtreGaucheRetire = false;
        filtreDroiteRetire = false;
        filtreNettoyers = false;

        instruction.textContent = "Les filtres sont remis en place ! Mission terminée.";

        remettreButton.disabled = true;

        powerButton.disabled = true
        facade.disabled = true;
        filtre1.disabled = true;
        filtre2.disabled = true;
        nettoyerButton.disabled = true

        etapesTerminees++;
        mettreAJourScore();
    });

    // METTRE À JOUR LA PROGRESSION //

    function mettreAJourScore() {
        score.textContent = "Étapes terminées : " + etapesTerminees + " /5";
    }


