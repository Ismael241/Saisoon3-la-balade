/**
 * Code de gestion du formulaire
 */
// récuperation du formulaire
let myform = document.getElementById('myform');
myform.addEventListener('submit', function(e) {
    let myInput1 = document.getElementById('input1');
    let myInput2 = document.getElementById('input2');
    let validEmail =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    //verification du champs de l'addresse email
    if (myInput1.value.trim()=="") {
        let monErreur = document.getElementById('erreur1');
        monErreur.innerHTML = "Veuillez renseigner votre addresse email!";
        monErreur.style.color ="red";
        e.preventDefault();    
    }

     //verification du champs du mot de passe
else if (myInput2.value.trim()=="" ) {
        let monErreur = document.getElementById('erreur2');
        monErreur.innerHTML = "Veuillez renseigner votre mot de passe!";
        monErreur.style.color ="red";
        e.preventDefault();    
    }

     //verification du champs des caractère de l'addresse email
    else if (validEmail.test(myInput1.value) ==false ) {
        let monErreur = document.getElementById('erreur1');
        monErreur.innerHTML = "Votre addresse est incorrecte!";
        monErreur.style.color ="red";
        e.preventDefault();    
    }

     //verification du mot de passe
    else if (myInput2.match( /[0-9]/g) && 
            str.match( /[A-Z]/g) && 
            str.length >=8) {
                
            let monErreur = document.getElementById('erreur2');
            monErreur.innerHTML = "bad!";
            monErreur.style.color ="red";
            e.preventDefault();   
    }

    else{
        myform.style.backgroundColor = 'green';
    }
});