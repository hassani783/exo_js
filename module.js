
  window.onload = function(){
  for(var i= 0 ; i > 4 ; i++){
    var div = document.querySelector('div');
    console.log(div);
    
    }
    alert("element desormais cliquable"); 
    
    //exercice1
    var divcliquable = document.querySelectorAll('.square');
    for(square of divcliquable){
    square.addEventListener("click", function(){
      alert("élément désormais cliquable ! :)");
    
    });
    }
    //exercice2
    function elementHtml2(){
      for( var i=0 ; i< 4 ; i++){
      //creation du div
      var creatediv = document.createElement('div');
          creatediv.setAttribute("id","Div" +(i+1));
          creatediv.setAttribute("class","square");
        //creation du p + ajout du text
      var createP = document.createElement('p');
          createP.innerText="hello world !";
      // attachement parent enfant
      var body = document.querySelector('body');
          body.appendChild(creatediv);
          creatediv.appendChild(createP);
          creatediv.addEventListener("click", function(){
          alert("élément désormais cliquable ! :)");
    
      })
      }
    }
    elementHtml2();
      
      }
    
    
    