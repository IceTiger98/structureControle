//slide volet
function ouverture()
{
    document.querySelector('.volet').classList.add('voletOuvert');
    document.querySelector('.voletOuvert').classList.remove('volet');
}

function fermeture() 
{
    document.querySelector('.voletOuvert').classList.add('volet');
    document.querySelector('.volet').classList.remove('voletOuvert');
}





//onKeyPress

function isNumber(evt)   
{
    evt = (evt) ? evt : window.event;
    let charCode = (evt.which) ? evt.which : evt.keyCode;

    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false; //n'accepte que les nombres et chiffres entiers
    }
    return true;
}

function isNumberPosNeg(evt) 
{
    evt = (evt) ? evt : window.event;
    let charCode = (evt.which) ? evt.which : evt.keyCode;

    if (charCode > 31 && charCode != 45 && (charCode < 48 || charCode > 57)) {
        return false; //n'accepte que les nombres et chiffres entiers positifs et négatifs
    }
    return true;
}

function isLetter(evt)
{
    evt = (evt) ? evt : window.event;
    let charCode = (evt.which) ? evt.which : evt.keyCode;

    if (charCode > 31  && (charCode < 96 || charCode > 122) && (charCode < 65 || charCode > 90)) {
        return false;//n'accepte que les lettres (string ou char)
    }
    return true;
}


//ergonomie

function verifIntervalle(intMin, intMax, idSource)
{
    var nb = document.getElementById(idSource).value;

    if (nb >= intMin && nb <= intMax && nb==Math.round(nb)) {
        return true;
    } else {
        return false;
    }
}//vérifier que les entiers entrés sont compris/inclus dans l'intervalle choisi. A utiliser avec isNumber() ou isNumberPosNeg()
 //sachant que Math.round() permet d'arrondir
 //on vérifie donc que le nombre est un entier

function AutoTab(idCom, idDif, longueur)     
{
    let valeur = document.activeElement.value;
    if (valeur.length > longueur-1) {
        document.getElementById(idCom + idDif).focus();
    }
}//se place directement sur l'autre champ


//exercice 1
//ces 4 fonctions sont à utiliser avec isNumber() ou isNumberPosNeg()
function addition()
{
    let nb1=new Number(document.getElementById("nb1").value);
    let nb2=new Number(document.getElementById("nb2").value);
    let nb3=new Number(document.getElementById("nb3").value);  
    let somme=nb1 + nb2 + nb3;
    document.getElementById("resultat").value=somme;
}

function produit()
{
    let nb1=new Number(document.getElementById("nb1").value);
    let nb2=new Number(document.getElementById("nb2").value);
    let nb3=new Number(document.getElementById("nb3").value);  
    let produit=nb1 * nb2 * nb3;
    document.getElementById("resultat").value=produit;
}

function moyenne()
{
    let nb1=new Number(document.getElementById("nb1").value);
    let nb2=new Number(document.getElementById("nb2").value);
    let nb3=new Number(document.getElementById("nb3").value);  
    let moyenne=(nb1 + nb2 + nb3)/3;
    document.getElementById("resultat").value=moyenne;
}

function maximum()
{
    let nb1=new Number(document.getElementById("nb1").value);
    let nb2=new Number(document.getElementById("nb2").value);
    let nb3=new Number(document.getElementById("nb3").value);
    var max=nb3;    
    if((nb1 > nb2) && (nb1 > nb3)) {
        max=nb1;
      } else if((nb2 > nb1) && (nb2 > nb3)) {
        max=nb2;
      } else {
        max=nb3;
      }
    document.getElementById("resultat").value=max;
}


//exercice 2
function calcOnInput()
{  
    let prixHT = document.getElementById('prixHT').value;
    let qut1 = document.getElementById('qut1').value;
    let TVA = document.form2.TVA.value;
    document.getElementById('prixTTC').value = prixHT * qut1 * TVA;
}


//exercice 3
function premGrp()
{
    let verbe= document.getElementById("verbe").value;
    let n = verbe.length;
    let e = verbe[n-2];
    let r = verbe[n-1];

    // vérifie la terminaison -er
    if((e == 'e') && (r == 'r')) {
        racine= racineVerbe(verbe, n);
        conjugaison(racine);
    } else {
        alert('Le verbe entré n\'est pas du premier groupe !');
    }
}

function racineVerbe(verbe, n)

{
    verbeTemp = '';
    for (let i = 0; i < (n-2); i++) {
        verbeTemp = verbeTemp + verbe[i];
    }
    return verbeTemp;
}//récupère la racine d'un verbe (enleve les deux dernières lettres)

function conjugaison(racine)
{
    document.getElementById("je").value = racine + "e";
    document.getElementById("tu").value = racine + "es";
    document.getElementById("il").value = racine + "e";
    document.getElementById("nous").value = racine + "(e)ons";
    document.getElementById("vous").value = racine + "ez";
    document.getElementById("ils").value = racine + "ent";
}


//exercice 4
function generInitiales()
{
    let prenom = document.getElementById('prenom').value;
    let nom = document.getElementById('nom').value;
    let p = prenom[0];
    let n = nom[0];
    
    document.getElementById('initiales').value = p + "." + n + ".";
}

//exercice 5
function palindrome() 
{
    let testPal = document.getElementById('testPal').value;
    var palTemp = '';
    let n = testPal.length;

    for (let i = 0; i < (n); i++) {
        palTemp = testPal[i] + palTemp;
    }
    console.log(palTemp);
    if (palTemp == testPal) {
        document.getElementById('resPal').value = testPal + ' est bien un palindrome !';
        document.getElementById('resPal').style.backgroundColor = "lightgreen";
        document.getElementById('resPal').style.border = "solid 5px darkgreen";    
    } else {
        document.getElementById('resPal').value = testPal + ' n\'est pas un palindrome.';
        document.getElementById('resPal').style.backgroundColor = "red";
        document.getElementById('resPal').style.border = "solid 5px darkred";
    }
}//utiliser avec isLetter()


//exercice 6
function moynPos() 
{
    let nb1=new Number(document.getElementById("nb1-2").value);
    let nb2=new Number(document.getElementById("nb2-2").value);
    let nb3=new Number(document.getElementById("nb3-2").value);
    let nb4=new Number(document.getElementById("nb4-2").value);
    var nbPos = 0;
    var n = 0;

    if (nb1 > 0) {
        nbPos += nb1;
        n++;
    }
    if (nb2 > 0) {
        nbPos += nb2;
        n++;
    }
    if (nb3 > 0) {
        nbPos += nb3;
        n++;
    }
    if (nb4 > 0) {
        nbPos += nb4;
        n++;
    }
    document.getElementById('resMoyPos').value = nbPos / n ;
}


//exercice 7
function categorie()

{
    let age = document.form7.age.value;
    var catFin;

    /*switch (age) {
        case 1:
            catFin = Poussin;
            break;
        case 2:
            catFin = Pupille;
            break;
        case 3:
            catFin = Minime;
            break;
        case 4:
            catFin = Cadet;
            break;
    } */

    if (age==1) {
        catFin = 'Poussin';
    } else if (age==2) {
        catFin = 'Pupille';
    } else if (age==3) {
        catFin = 'Minime';
    } else if (age==4) {
        catFin = 'Cadet';
    }

    document.getElementById('resCath').value = catFin ;
}


//exercice 8
function verifNbValide(intMin, intMax, idSource)
    //BUT: déterminer et indiquer visuellement si le nombre saisi entre dans l'intervalle demandé
    //ENTREE: un entier saisi par l'utilisateur
    //SORTIE: vrai ou faux
{
    var verif = verifIntervalle(intMin, intMax, idSource);

    if (verif == true) {
        document.getElementById(idSource).style.backgroundColor = "lightgreen";
        document.getElementById(idSource).style.border = "solid 5px darkgreen";
    } else {
        document.getElementById(idSource).style.backgroundColor = "red";
        document.getElementById(idSource).style.border = "solid 5px darkred";
    }
}


//exercice 9
var compteur; //compte le nombre de tentatives (nombre de clic sur "deviner")
let nbRandom; //prend la valeur de l'entier généré par randomiser()

function randomiser()
{
    let nbTemp = Math.random() * 100;
    nbRand = Math.round(nbTemp);   //Math.round() permet d'arrondir le nombre généré et obtenir un entier
    console.log(nbRand);
    compteur = 0;
    nbRandom = nbRand; 
}

function devineNb() 
{
    nb = document.getElementById('devinette').value;
    compteur++;
    document.getElementById('tentatives').value = compteur;

    if (nb == nbRandom) {
        document.getElementById('reponse').value = 'Gagné !';
        document.getElementById('reponse').style.backgroundColor = "lightgreen";
        document.getElementById('reponse').style.border = "solid 5px darkgreen";    
    } else if (nb < nbRandom) {
        document.getElementById('reponse').value = 'C\'est plus !';
    } else if (nb > nbRandom) {
        document.getElementById('reponse').value = 'C\'est moins !';
    }
}

function giveUp()
{
    document.getElementById('reponse').value = 'La réponse était ' + nbRandom + '!';
    document.getElementById('reponse').style.backgroundColor = "red";
    document.getElementById('reponse').style.border = "solid 5px darkred";
    randomiser();   
}


//exercice 10
function verifMois()
//à utiliser avec isNumber()
{ 
    verif = verifIntervalle(1,12,'mois');
    if (verif == true) {
        let numMois = document.getElementById('mois').value;
        let mois = moisDeLAnnee(numMois);
        document.getElementById('resMois').value = 'Ceci est le mois de ' + mois;  
    } else {
        document.getElementById('resMois').value = 'Correspond à aucun mois !';}
}

function moisDeLAnnee(numMois) 
{
    if (numMois == 1) {
        mois = 'Janvier';
    } else if (numMois == 2) {
        mois = 'Février';
    } else if (numMois == 3) {
        mois = 'Mars';
    } else if (numMois == 4) {
        mois = 'Avril';
    } else if (numMois == 5) {
        mois = 'Mai';
    } else if (numMois == 6) {
        mois = 'Juin';
    } else if (numMois == 7) {
        mois = 'Juillet';
    } else if (numMois == 8) {
        mois = 'Août';
    } else if (numMois == 9) {
        mois = 'Septembre';
    } else if (numMois == 10) {
        mois = 'Octobre';
    } else if (numMois == 11) {
        mois = 'Novembre';
    } else {
        mois = 'Décembre';
    };
    return mois;
}

function moisSwitch(numMois) 
{
    switch (numMois) {
        case 1:
            console.log('ça marche !');
            mois = 'janvier';
            break;
        case 2: 
            mois = 'février';
            break;
        case 3:
            mois = 'mars';
            break;
        case 4: 
            mois = 'avril';
            break;
        case 5:
            mois = 'mai';
            break;
        case 6: 
            mois = 'juin';
            break;
        case 7:
            mois = 'juillet';
            break;
        case 8: 
            mois = 'août';
            break;
        case 9:
            mois = 'septembre';
            break;
        case 10: 
            mois = 'octobre';
            break;
        case 11:
            mois = 'novembre';
            break;
        case 12: 
            mois = 'décembre';
            break;  
        default:
            mois = 'ça marche pas ! ';           
    }
    return mois;
}


//exercice 11

function Lendemain()
//commentaire: à utiliser avec isNumber()
{
    let j = document.getElementById('jj').value;
    let m = document.getElementById('mm').value;
    let a = document.getElementById('aaaa').value;

    if (dateValide(j, m, a) == true) {
        calcLendemain(j, m, a);
    }
}

function bissextile(a)
{
    if ((a % 400 == 0) || ((a % 4 == 0) && (a % 100 !== 0))) {
        return true;
    } else { 
        return false;
    }
}//déterminer si l'année en question est bissextile

function dateValide(j, m, a)
{
    let alerte = '';

    if (m > 12) {
        alerte = 'Il n\'y a pas autant de mois dans l\'année.'
    } else if (j > 31) {
        alerte = 'Il n\'y a pas autant de jours dans un mois.'
    } else if (
        ((m == 2) && (j > 29))              // trop de jours en février
        ||
        ((j == 31) &&
        ((m % 2 == 0) && (m !== 2) && (m <= 7))             // trop de jours dans mois à 30 jours (01 à 07)
        ||          
        ((m % 2 !== 0) && (m >= 8)))                        // trop de jours dans mois à 30 jours (08 à 12)
        ) {   
        alerte = 'Il n\'y a pas autant de jours dans ce mois.'
    } else if ((j==29) && (m == 2) && (bissextile(a) == false)) {       //29 jours en février, année non bissextile
        alerte = 'Cette année n\'est pas bissextile.';
    } else if ((j == 0) || (m == 0)) {
        alerte = 'Les jours et mois ne commencent pas à 0.';
    }
    
    if (alerte !== '') {
        alert('Date saisie non valide : ' + alerte);
        return false;
    } else {
        return true;
    }
}

function calcLendemain(j, m, a)
{   
    console.log(j, ' ', m, ' ', a);
    if ((m == 12) && (j == 31)) {                   //nouvelle année
        jL = 1;
        mL = 1;
        aL = parseInt(a) + 1;
    } else if (                                     //nouveau mois
        (j == 31)
        ||
        ((j ==30) &&
            (((m % 2 == 0) && (m !== 2) && (m <= 7))
            || ((m % 2 !== 0) && (m >= 8))))
        ||
        ((m == 2) && (bissextile(a) == false) && (j == 28))
        ||
        ((m == 2) && (bissextile(a) == true) && (j == 29))
    ) {
        jL = 1;
        mL = parseInt(m) + 1;
        aL = parseInt(a);
    } else {
        jL = parseInt(j) + 1;
        mL = parseInt(m);
        aL = parseInt(a);
    } 
    console.log(jL, mL, aL)
    afficheDate(jL, mL, aL);
}

function afficheDate(j,m,a){
    Fj = completeDate(j);
    Fm = completeDate(m);
    Fa = completeDate(a);

    document.getElementById('lendemain').value = Fj + '/' + Fm + '/' + Fa;
}

function completeDate(nb)
//affichage à 2 chiffres
{
    tempNb = nb.toString();

    if (tempNb.length < 2) {
        newNb = '0' + tempNb;
    } else {
        newNb = tempNb;
    }
    return newNb;
}


//exercice 12
function verifOuvert()
{
    let j = document.form12.jPassage.value;
    let verif = verifIntervalle(0,24,'hPassage');
    
    if (verif == true) {
        var h = document.getElementById('hPassage').value;
        if (j>=2 && j<=6) {
            if ((h>=7 && h<=13) || (h>=16 && h<=20)) {
                boulangerie('ouvert');
            } else {
                boulangerie('ferme');
            } 
        } else if (j==0) {
            if (h>=7 && h<=13) {
                boulangerie('ouvert');
            } else {
                boulangerie('ferme');
            }
        } else if (j==1) {
            boulangerie('ferme');
        }
    } else {
        boulangerie('non-valide');
    }
}

function boulangerie(resultat) 
{
    if (resultat == 'ouvert') {
        document.getElementById('resPassage').value = 'Vous serez bienvenu(e) à ce moment-là !';
        document.getElementById('resPassage').style.backgroundColor = "lightgreen";
        document.getElementById('resPassage').style.border = "solid 5px green";
    } else if (resultat == 'ferme') {
        document.getElementById('resPassage').value = 'La boulangerie sera fermée à ce moment-là.';
        document.getElementById('resPassage').style.backgroundColor = "red";
        document.getElementById('resPassage').style.border = "solid 5px darkred";
    } else {
        alert('L\'heure saisie n\'est pas valide.');
        document.getElementById('resPassage').style.border = "solid 5px red";
    }   
}


//exercice 13

function calcPrix() 
{
    let age = document.getElementById('ageClient').value;
    let poids = document.getElementById('poidsBagages').value;

    
    if (age == '1') {
        prixA = 5;
    } else if (age == '2') {
        prixA = 30;
    } else if (age == '3') {
        prixA = 0;
    } else {prixA = 0;}

    if (poids == '1') {
        prixP = 0;
    } else if (poids == '2') {
        prixP = 10;
    } else {prixP = 0;}

    document.getElementById('prixNuit').value = prixA + prixP + ' Ecus';   
}
    