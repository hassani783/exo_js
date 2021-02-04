
export function disBonjour(prenom){
    alert('Bonjour' + prenom);
}

export function nomComplet(prenom, nom){
    alert(prenom +nom);
}
export function repetition(){ 
    for( var i=0 ; i< 3 ; i++){
    var creatediv1 = document.createElement('div');
    creatediv1.innerText = " BONJOUR !";
    var body = document.querySelector('body');
    body.appendChild(creatediv1);
    creatediv1.setAttribute('class', 'square');
    creatediv1.setAttribute('id', 'Div' +(i+1));
  } 
  
}   

