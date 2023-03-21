let x = 4;
let test1 = x==4;
let test2 = x===4;
let test3 = x=="4";
let test4 = x==="4";
document.getElementById("ok").innerHTML= "comparaison x et 4 en valeur " + test1+ " comparaison de x et 4 en valeur et en type :" + test2  + " comparaison de x et 4 en string  : "+test3+
"comparaison de x et 4 en string en valeur et type : "+test4;
/*les conditions
 if(x>1){
    document.getElementById("controle").innerHTML= "x est superieur à 1";
 }
 */

 // les conditions if et else 
 let y = "";
 if(x > 1){
   y = "x contient une valeur strictement supérieur à 1";
}
else if( x==1){
   y = "x contient la valeur 1"
}
else if( x < 1){
   y = "x contient une valeur strictement inferieur à 1"
}
 document.getElementById("cool").innerHTML= y ;
 //l'utilisation de && et ||

 let v1 = 5;
 let v2 = -20;
 let msg = null;
 if(v1>=0 && v1<=10){
   msg = " bienvenue"
 }
 document.getElementById("msg").innerHTML= msg ;
 

 