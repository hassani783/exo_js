
window.onload = function(){
//Convertir en code ceci: Faire une fonction permettant de créer en une seul fois
// les élements suivant: p, div, span,
 //section et faire un console.log de ce qui a été crée
 var body =  document.querySelector('body');

 function creation(){
    var creatediv1 = document.createElement('div');
    var createP1 = document.createElement('p');
    var createspan1 = document.createElement('span');
     console.log(creatediv1 , createP1 , createspan1);
    body.appendChild(creatediv1)
    body.appendChild(createP1)
    body.appendChild(createspan1);
    //return creatediv1 ,createspan1 , createP1 ;
 }
    console.log(creation('div','p','span'));

    //methode 2
 function elementHtml(){
    // Create element
    var creatediv = document.createElement('div');
    var createP = document.createElement('p');
    var createspan = document.createElement('span');
    createspan.innerText = "hello world !"; // Assign text to span before to append body
    // append to body
    var body = document.querySelector('body');
    body.appendChild(creatediv);
    creatediv.appendChild(createP);
    createP.appendChild(createspan);
       

 }

 elementHtml();

 /*Convertir en code ceci: Faire une fonction qui va créer 3 élément html (div)
 c'est trois div auront des attributs différent qui seront: id div1, id div2 et
  id div3 ainsi qu'une class square pour chaque div créer plus une class color1, 
  color2, color3, une fois fais l'afficher dans la console*/
  function repetition(){
    for( var i=0 ; i< 3 ; i++){
    var createElementDiv = document.createElement('div');
    createElementDiv.innerText = "hello world !";
    var body = document.querySelector('body');
    createElementDiv.setAttribute('class', 'square');
    createElementDiv.setAttribute('id', 'Div' +(i+1));
    body.appendChild(createElementDiv);
  } 
  //console.log(i , creatediv)
}   
repetition();
  
  
}