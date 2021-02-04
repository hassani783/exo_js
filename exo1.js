
window.onload = function(){
//Convertir en code ceci: Faire une fonction permettant de créer en une seul fois
// les élements suivant: p, div, span,
 //section et faire un console.log de ce qui a été crée
 /*function creation(){
    var creatediv1 = document.createElement('div');
    var createP1 = document.createElement('p');
    var createspan1 = document.createElement('span');
     console.log(creatediv1 , createP1 , createspan1);
 
    //return creatediv1 ,createspan1 , createP1 ;
 }
    console.log(creation('div','p','span'));

    //methode 2
 function elementHtml(){
    var creatediv = document.createElement('div');
    var createP = document.createElement('p');
    var createspan = document.createElement('span');
    var body = document.querySelector('body');
    body.appendChild(creatediv);
    creatediv.appendChild(createP);
    createP.appendChild(createspan);
      createspan.innerText = "hello world !";
 }

 elementHtml();*/

 /*Convertir en code ceci: Faire une fonction qui va créer 3 élément html (div)
 c'est trois div auront des attributs différent qui seront: id div1, id div2 et
  id div3 ainsi qu'une class square pour chaque div créer plus une class color1, 
  color2, color3, une fois fais l'afficher dans la console*/
  class Rayon{
   constructor(id , nomRayon , description){
      this._id = id;
      this._nomRayon = nomRayon;
      this._description = description;
   }
 }
 let firstRayon = new Rayon("Rayon1","jus",["jus d'orange", "jus de pomme", "jus de peche"]);
 let secondRayon = new Rayon("Rayon2", "produit laitiere", ["lait", "fromage","beure"]);
 let thirdRayon = new Rayon("Rayon3", "netoyage",["savon liquide", "eau de javel"]);

 //document.getElementById("div1").innerHTML= "mon Rayon prefere est"  + myCar.age(year) + ;
 let supermarche ={firstRayon,secondRayon,thirdRayon}
 //supermarche.id();
 //supermarche.nomRayon();
 //supermarche.description();
 document.getElementById("Div1").innerHTML=
"Mon rayon prefereest " + Rayon.id();


 function repetition(){
    for( var i=0 ; i< 3 ; i++){
     var creatediv1 = document.createElement('div');
    var body = document.querySelector('body');
    body.appendChild(creatediv1);
    creatediv1.setAttribute('class', 'square');
    creatediv1.setAttribute('id', 'Div' +(i+1));
  } 
  
}   
repetition();

}
