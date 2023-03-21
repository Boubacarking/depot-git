
class Ligne{
    constructor(nom, longueur){
        this.nom = nom;
        this.longueur= longueur;
    }

    taille(){
        document.getElementById("p1").innerHTML = "Longueur de "+this.nom + " : "+this.longueur + " cm"  }
    }
    
     let ligne = new Ligne("Rectangle", 24);
    ligne.taille();

class Rectangle extends Ligne {
       constructor(nom, longueur, largeur){
       super(nom, longueur);
       this.largeur = largeur;
    }
    aire(){
        document.getElementById("p2").innerHTML = "L'air de "+this.nom + " est "+this.longueur*this.largeur + " cm2" }
}
let rectangle = new Rectangle("Terrain", 5,5);
rectangle.aire();
let ch1 ="Une chaine de caractère ! ";
let ch2 ="Une chaine de caractère ! ";

document.getElementById("p3").innerHTML = 'ch1 = ch2 '
+ (ch1 === ch2) ; 


let texte = "Le cours porte sur javascript";

let variable = new String("du texte que je veux ");

document.getElementById('p4').innerHTML = " le type de texte est " + typeof(texte)+ " le type de mon variable est " + typeof(variable);

document.getElementById('p5').innerHTML = " la taille de notre variable est :"+variable.length +" variable ecrit en MAjuscule : "+variable.toUpperCase();



let  chaine1 = " my name is boubacar";
let chaine2 = 29 ;
let chaine3 = "29";
document.getElementById("p7").innerHTML = "le type de chaine1 est "+ typeof(chaine1)+ "Chaine2 est  " + typeof(chaine2)+  "Chaine3 est  " + typeof(chaine3)

let x = 2;
let y = 3;
let z = 4;
document.getElementById("d1").innerHTML = "incrementer X = "+ (x+1) + "la somme de x + y "+(x+y) + "la soustraction de x - y " + (x - y )+ "la multiplication de x * y" + (x*y) + "la division de x / y = " +(x/y) ;

const c1 = 1960;
const c2 = "m²";
let C = c1+c2;
document.getElementById("s1").innerHTML = "nos constants sont : "+C ;




