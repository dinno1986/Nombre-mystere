var solution = Math.floor(Math.random()*4);
console.log  (solution);

 var response= prompt ("choissisez un chiffre entre 0 et 3");

 if (solution > response){
 	console.log ("tu es en dessous");
 }
 else if (solution < response){
 	console.log ("tu es au dessus");
 }
 else {
 	console.log ("tu a gagner");}