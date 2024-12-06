var age = 18;
var nom = "Gauthier";
const score_fin=10;
let temp = ["Salut","test","Pomme","Pokemon"] /* var temporaire peu se limite a une conditionnel elle se limite au bloc de déclaration*/

/* fonction */
function Adulte(age){
    /* conditionelle */
    if (age>=18){
        console.log("Majeur")
    } else{
        console.log("Mineur")
    }
}
function compte(increment){
    /* boucle for */
    for (let i = 0; i < 5; i++) {
        console.log("Itération :", i); // Affiche 0, 1, 2, 3, 4
      }      
}
