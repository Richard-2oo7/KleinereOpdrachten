const knop = document.getElementById("knop");
const input = document.getElementById("input");
const mensendiv = document.getElementById("mensen");

knop.onclick = function (){
   const plaatje = document.createElement('img');
   plaatje.src = "imgpersoon.jpg";
   plaatje.id = "profile";
   mensendiv.appendChild(plaatje);
    var appel = {
         hoi : 2,
         sap : sap
    }
   var naam = input.value;
   plaatje.appel = naam;
   plaatje.onclick = function (){
        console.log(plaatje.appel);
   }   
}
