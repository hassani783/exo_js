window.onload = function(){

     /* function Supermarché(){

      //appel du parent
      var body = document.querySelector('body');
      //creation des enfants
      for(var i= 0 ; i< 4 ; i++){
      let creatediv = document.createElement('div');
      creatediv.addEventListener("click", function(){})
      creatediv.setAttribute("class","square");
      creatediv.setAttribute("id","div" + (i+1));
      //appel d'enfant
      body.appendChild(creatediv);
      creatediv.appendChild('li');
      console.log('creatediv: ', typeof creatediv);
      }

      //creatediv1.innerText = ("Supermarché");  
      //var selection = document.getElementById("#Div1");  
      selection.innerText = ("Supermarché"); 

}
  

 elementHtml();*/
 //function supermarche(){
   class Rayon{
     constructor(id, description , marque){
       this._id = id ;
       this._description = description;
       this._marque = marque;
     }
   }
   let firstRayon = new Rayon("Rayon1","Biscuit",["gaufret" , "madelaine"]);
   let secondRayon = new Rayon("Rayon2", "produit laitiere", ["lait", "fromage","beure"]);
   let thirdRayon = new Rayon("Rayon3", "netoyage",["savon liquide", "eau de javel"]) 

   /*var obj = {firstElement: {id: "div1",class: "square paragraphe1 color1"},
              secondElement: {id: "div2",class: "square paragraphe2 color2"},
              thirdElement: {id: "div3",class: "square paragraphe3 color3"}}*/
              document.getElementById("Rayon").innerHTML= "mon Rayon prefere est"  + myCar.age(year) + " years old.";



}


