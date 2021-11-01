

function showbitcoinbutton () {
document.getElementById("fragezeichenbitcoin").innerHTML = "Bitcoin";
document.getElementById("fragezeichenpreis").innerHTML = "Preis: 250.000.000€";
showbitcoinbuttonitem = showbitcoinbuttonitem + 1;
}

var showbitcoinbuttonitem = 0;

var centmünze = 0;
var centmünzecost = 100000;

var eineuro = 1;

var zweieuro = 0;
var zweieurocost = 1000000;

var bitcoin = 0;
var bitcoincost = 250000000;

var fünfeuro = 0;
var fünfeurocost = 10000000;

var huneuro = 0;
var huneurocost = 100000000;

function buy100euro () {
   if (huneuro == 0) 
   if (score >= huneurocost) {
      huneuro = huneuro + 1;
   score = score - huneurocost;
   document.getElementById("redbutton").setAttribute("src", "100euro.jpeg");
   document.getElementById("score").innerHTML = score;
   document.getElementById("huneuro").innerHTML = huneuro;

   update ()
   savedata ();
}
   if (huneuro == 1) {
   document.getElementById("redbutton").setAttribute("src", "100euro.jpeg");
   }
}

function buy5euro () {
   if (fünfeuro == 0) 
   if (score >= fünfeurocost) {
      fünfeuro = fünfeuro + 1;
   score = score - fünfeurocost;
   document.getElementById("redbutton").setAttribute("src", "5euro.jpeg");
   document.getElementById("score").innerHTML = score;
   document.getElementById("fünfeuro").innerHTML = fünfeuro;

   update ()
   savedata ();
}
   if (fünfeuro == 1) {
   document.getElementById("redbutton").setAttribute("src", "5euro.jpeg");
   }
}

function buybitcoin() {
   if (showbitcoinbuttonitem > 0)
   if (bitcoin == 0) 
   if (score >= bitcoincost) {
   bitcoin = bitcoin + 1;
   score = score - bitcoincost;
   document.getElementById("redbutton").setAttribute("src", "bitcoin.png");
   document.getElementById("score").innerHTML = score;
   document.getElementById("bitcoin").innerHTML = bitcoin;
   document.getElementById("bitcoincost").innerHTML = bitcoincost;
   savedata ();
}
   if (bitcoin == 1) {
   document.getElementById("redbutton").setAttribute("src", "bitcoin.png");
   }
}

function buy2euro () {
   if (zweieuro == 0) 
   if (score >= zweieurocost) {
      zweieuro = zweieuro + 1;
   score = score - zweieurocost;
   document.getElementById("redbutton").setAttribute("src", "2euro.png");
   document.getElementById("score").innerHTML = score;
   document.getElementById("zweieuro").innerHTML = zweieuro;
   document.getElementById("zweieurocost").innerHTML = zweieurocost;
   update ()
   savedata ();
}
   if (zweieuro == 1) {
   document.getElementById("redbutton").setAttribute("src", "2euro.png");
   }
}


function buycentmünze () {
   if (centmünze == 0) 
   if (score >= centmünzecost) {
      centmünze = centmünze + 1;
   score = score - centmünzecost;
   document.getElementById("redbutton").setAttribute("src", "50cent.png");
   document.getElementById("score").innerHTML = score;
   document.getElementById("centmünze").innerHTML = centmünze;
   document.getElementById("centmünzecost").innerHTML = centmünzecost;
   update ()
   savedata ();
}
   if (centmünze == 1) {
   document.getElementById("redbutton").setAttribute("src", "50cent.png");
   }
}



function buy1euro () {

   if (eineuro == 1) {
   document.getElementById("redbutton").setAttribute("src", "euro.png");
   update ()
   savedata ()
   }
}



function update() {
   updateScore(score);
   updatecursorcost(cursorcost);
   updateclickpower(clickpower);
    document.getElementById("cursors").innerHTML = cursors;
    updatemultiplikatorcost(multiplikatorcost);
    updateschweincost(schweincost);
    updateautocost(autocost);
    updatebankcost(bankcost);
    updatedruckcost(druckcost);
    document.getElementById("autos").innerHTML = autos;
    document.getElementById("banks").innerHTML = banks;
    document.getElementById("drucks").innerHTML = drucks;
    document.getElementById("schweins").innerHTML = schweins;
   document.getElementById("zweieuro").innerHTML = zweieuro;
   document.getElementById("centmünze").innerHTML = centmünze;
   document.getElementById("bitcoin").innerHTML = bitcoin;
   document.getElementById("fünfeuro").innerHTML = fünfeuro;
   document.getElementById("huneuro").innerHTML = huneuro;
}






var score = 0;
var clickpower = 1;


var cursorcost = 15;
var cursors = 0;

var schweincost = 1000;
var schweins = 0;

var multiplikatorcost = 100;
var multiplikators = 0;

var autocost = 10000;
var autos = 0; 

var bankcost = 100000;
var banks = 0;

var druckcost = 1000000;
var drucks = 0;






function buyCursor () {
   if (cursors < 500)
   if (score >= cursorcost){
     score = score - cursorcost;
     cursors = cursors + 1;
     if (cursors < 150){
     cursorcost = Math.round(cursorcost * 1.088);
   } else {
      cursorcost = Math.round(cursorcost * 1.0045);
   }

     updateScore(score)
     document.getElementById("cursors").innerHTML = cursors;
     updatecursorcost(cursorcost);
     updatescorepersecond();
     savedata ();


   } 
}



function buyschwein () {
   if (schweins < 250)
   if (score >= schweincost){
     score = score - schweincost;
     schweins = schweins + 1;
     if (schweins < 100){
     schweincost = Math.round(schweincost * 1.075);
   } else {
     schweincost = Math.round(schweincost * 1.0193);
   }

     updateScore(score)
     document.getElementById("schweins").innerHTML = schweins;
     updateschweincost(schweincost);
     updatescorepersecond();
     savedata ();
   } 
}




function buyMultiplikator () {
  if (clickpower < 524288)
  if (score >= multiplikatorcost){
     score = score - multiplikatorcost;
     clickpower = clickpower * 2;

     if (clickpower < 8192) {
      multiplikatorcost = Math.round(multiplikatorcost * 2.3);

     } else {
      multiplikatorcost = Math.round(multiplikatorcost * 1.5);

     }
     updateScore(score);     
     updatemultiplikatorcost(multiplikatorcost);
     updateclickpower(clickpower);
     savedata ();
     update ();

   }
}


   
  

function buyauto () {
  if (autos < 100)
  if (score >= autocost) {
     score = score - autocost;
     autos = autos + 1;
     if (autos < 50) {
     autocost = Math.round(autocost * 1.155);
   } else {
     autocost = Math.round(autocost * 1.017);
   }

     updateScore(score);     
     updateautocost(autocost);
     document.getElementById("autos").innerHTML = autos;
     updatescorepersecond();
     savedata ();
   }
}



function buybank () {
   if (banks < 50)
  if (score >= bankcost) {
     score = score - bankcost;
     banks = banks + 1;
     if (banks < 25) {
     bankcost = Math.round(bankcost * 1.23);
   } else {
     bankcost = Math.round(bankcost * 1.028);
   }

     updateScore(score);
     updatebankcost(bankcost);
     document.getElementById("banks").innerHTML = banks;
     updatescorepersecond();
     savedata ();
   }
}

function buydruck () {
   if (drucks < 25)
  if (score >= druckcost) {
     score = score - druckcost;
     drucks = drucks + 1;
     if (drucks < 10) {
      druckcost = Math.round(druckcost * 1.35);
     
     } else {
      druckcost = Math.round(druckcost * 1.05);

     }

     updateScore(score);     
     updatedruckcost(druckcost);
     document.getElementById("drucks").innerHTML = drucks;
     updatescorepersecond();
     savedata ();
   }
}




   function addToScore (amount) {
      score = score + amount;
      updateScore(score);
      
   }

   function updatescorepersecond() {
      scorepersecond = cursors + schweins * 10 + autos * 100 + banks * 1000 + drucks * 10000;
      updateeuropersecond(scorepersecond);
   }


   function savedata () {
      localStorage.setItem("score", score);
      localStorage.setItem("cursors", cursors);
      localStorage.setItem("cursorcost", cursorcost);
      localStorage.setItem("clickpower", clickpower);
      localStorage.setItem("multiplikatorcost", multiplikatorcost);
      localStorage.setItem("multiplikators", multiplikators);
      localStorage.setItem("autocost", autocost);
      localStorage.setItem("autos", autos);
      localStorage.setItem("bankcost", bankcost);
      localStorage.setItem("banks", banks);
      localStorage.setItem("druckcost", druckcost);
      localStorage.setItem("drucks", drucks);
      localStorage.setItem("schweincost", schweincost);
      localStorage.setItem("schweins", schweins);
      localStorage.setItem("zweieuro", zweieuro);
      localStorage.setItem("centmünze", centmünze);
      localStorage.setItem("bitcoin", bitcoin);
      localStorage.setItem("fünfeuro", fünfeuro);
      localStorage.setItem("huneuro", huneuro);
      localStorage.setItem("glück", glück);
     }

     function loaddata () {
      score = localStorage.getItem("score");
      cursors = localStorage.getItem("cursors");
      cursorcost = localStorage.getItem("cursorcost");
      clickpower = localStorage.getItem("clickpower");
      multiplikatorcost = localStorage.getItem("multiplikatorcost");
      multiplikators = localStorage.getItem("multiplikators");
      autocost = localStorage.getItem("autocost");
      autos = localStorage.getItem("autos");
      bankcost = localStorage.getItem("bankcost");
      banks = localStorage.getItem("banks");
      druckcost = localStorage.getItem("druckcost");
      drucks = localStorage.getItem("drucks");
      schweincost = localStorage.getItem("schweincost");
      schweins = localStorage.getItem("schweins");
      zweieuro = localStorage.getItem("zweieuro");
      centmünze = localStorage.getItem("centmünze");
      bitcoin = localStorage.getItem("bitcoin");
      fünfeuro = localStorage.getItem("fünfeuro");
      huneuro = localStorage.getItem("huneuro");
      glück = localStorage.getItem("glück");
      score = parseInt(score)
      cursors = parseInt(cursors)
      cursorcost = parseInt(cursorcost)
      clickpower = parseInt(clickpower)
      multiplikatorcost = parseInt(multiplikatorcost)
      multiplikators = parseInt(multiplikators)
      autocost = parseInt(autocost)
      autos = parseInt(autos)
      bankcost = parseInt(bankcost)
      banks = parseInt(banks)
      druckcost = parseInt(druckcost)
      drucks = parseInt(drucks)
      schweincost = parseInt(schweincost)
      schweins = parseInt(schweins)
      zweieuro = parseInt(zweieuro)
      centmünze = parseInt(centmünze)
      bitcoin = parseInt(bitcoin)
      fünfeuro = parseInt(fünfeuro)
      huneuro = parseInt(huneuro)
      glück = parseInt(glück)

     


     updatescorepersecond();
     

     update ();



      }

      function resetdata () {
         location.reload(); 

         if (confirm('Bist du sicher das du das Spiel zurücksetzen willst?')) {  
         autoloade = autoloade + 1;
         localStorage.clear();
         }

      }

      setInterval (function() {
         score = score + cursors;
         score = score + schweins * 10;
         score = score + autos * 100;
         score = score + banks * 1000;
         score = score + drucks * 10000;
         updateScore(score);
  
        
     }, 1000); // 1000ms = 1 second
  

     
  


   function updateScore(scoreLocal)
   {
      var result= "";
      scoreLocal = scoreLocal.toString();
      scoreLocal = scoreLocal.split("");
      scoreLocal.reverse();
      for(var i = 0; i < scoreLocal.length; i++)
      {
             if(i % 3 === 0 && i !== 0){
                 result+= ".";
             }
      
             result += scoreLocal[i];
         
      }
      result = result.split("");
      result.reverse();
      result = result.join("");
      document.getElementById("score").innerHTML = result;
   }


   function updateeuropersecond(scorepersecondLocal)
   {
      var result= "";
      scorepersecondLocal = scorepersecondLocal.toString();
      scorepersecondLocal = scorepersecondLocal.split("");
      scorepersecondLocal.reverse();
      for(var i = 0; i < scorepersecondLocal.length; i++)
      {
             if(i % 3 === 0 && i !== 0){
                 result+= ".";
             }
      
             result += scorepersecondLocal[i];
         
      }
      result = result.split("");
      result.reverse();
      result = result.join("");
      document.getElementById("scorepersecond").innerHTML = result;
   }


   function updateclickpower(clickpowerLocal)
   {
      var result= "";  
      clickpowerLocal = clickpowerLocal.toString();
      clickpowerLocal = clickpowerLocal.split("");
      clickpowerLocal.reverse();
      for(var i = 0; i < clickpowerLocal.length; i++)
      {
             if(i % 3 === 0 && i !== 0){
                 result+= ".";
             }
      
             result += clickpowerLocal[i];
         
      }
      result = result.split("");
      result.reverse();
      result = result.join("");
      document.getElementById("clickpower").innerHTML = result;
   }

   function updatemultiplikatorcost(multiplikatorcostLocal)
   {
      var result= "";  
      multiplikatorcostLocal = multiplikatorcostLocal.toString();
      multiplikatorcostLocal = multiplikatorcostLocal.split("");
      multiplikatorcostLocal.reverse();
      for(var i = 0; i < multiplikatorcostLocal.length; i++)
      {
             if(i % 3 === 0 && i !== 0){
                 result+= ".";
             }
      
             result += multiplikatorcostLocal[i];
         
      }
      result = result.split("");
      result.reverse();
      result = result.join("");
      document.getElementById("multiplikatorcost").innerHTML = result;
   }
   

   function updatecursorcost(cursorcostLocal)
   {
      var result= "";  
      cursorcostLocal = cursorcostLocal.toString();
      cursorcostLocal = cursorcostLocal.split("");
      cursorcostLocal.reverse();
      for(var i = 0; i < cursorcostLocal.length; i++)
      {
             if(i % 3 === 0 && i !== 0){
                 result+= ".";
             }
      
             result += cursorcostLocal[i];
         
      }
      result = result.split("");
      result.reverse();
      result = result.join("");
      document.getElementById("cursorcost").innerHTML = result;
   }


   function updateschweincost(schweincostLocal)
   {
      var result= "";  
      schweincostLocal = schweincostLocal.toString();
      schweincostLocal = schweincostLocal.split("");
      schweincostLocal.reverse();
      for(var i = 0; i < schweincostLocal.length; i++)
      {
             if(i % 3 === 0 && i !== 0){
                 result+= ".";
             }
      
             result += schweincostLocal[i];
         
      }
      result = result.split("");
      result.reverse();
      result = result.join("");
      document.getElementById("schweincost").innerHTML = result;
   }




   function updateautocost(autocostLocal)
   {
      var result= "";  
      autocostLocal = autocostLocal.toString();
      autocostLocal = autocostLocal.split("");
      autocostLocal.reverse();
      for(var i = 0; i < autocostLocal.length; i++)
      {
             if(i % 3 === 0 && i !== 0){
                 result+= ".";
             }
      
             result += autocostLocal[i];
         
      }
      result = result.split("");
      result.reverse();
      result = result.join("");
      document.getElementById("autocost").innerHTML = result;
   }


   function updatebankcost(bankcostLocal)
   {
      var result= "";  
      bankcostLocal = bankcostLocal.toString();
      bankcostLocal = bankcostLocal.split("");
      bankcostLocal.reverse();
      for(var i = 0; i < bankcostLocal.length; i++)
      {
             if(i % 3 === 0 && i !== 0){
                 result+= ".";
             }
      
             result += bankcostLocal[i];
         
      }
      result = result.split("");
      result.reverse();
      result = result.join("");
      document.getElementById("bankcost").innerHTML = result;
   }


   function updatedruckcost(druckcostLocal)
   {
      var result= "";  
      druckcostLocal = druckcostLocal.toString();
      druckcostLocal = druckcostLocal.split("");
      druckcostLocal.reverse();
      for(var i = 0; i < druckcostLocal.length; i++)
      {
             if(i % 3 === 0 && i !== 0){
                 result+= ".";
             }
      
             result += druckcostLocal[i];
         
      }
      result = result.split("");
      result.reverse();
      result = result.join("");
      document.getElementById("druckcost").innerHTML = result;
   }



   setInterval (function() {

     
         

         
              if (cursors == 500) {
                document.getElementById("buycursorbutton").style.backgroundColor="#D4AF37";
                document.getElementById("buycursorbutton").style.borderRadius="15px";
                document.getElementById("buycursorbutton").style.boxShadow="3px 3px 4px #DAA520";
                document.getElementById("buycursorbutton").style.textShadow="1px 1px 2px #DAA520";
              }

         
              if (schweins == 250) {
                 document.getElementById("buyschweinbutton").style.backgroundColor="#D4AF37";
                 document.getElementById("buyschweinbutton").style.borderRadius="15px";
                 document.getElementById("buyschweinbutton").style.boxShadow="3px 3px 4px #DAA520";
                 document.getElementById("buyschweinbutton").style.textShadow="1px 1px 2px #DAA520";
               }
         
               if (autos == 100) {
                 document.getElementById("buyautobutton").style.backgroundColor="#D4AF37";
                 document.getElementById("buyautobutton").style.borderRadius="15px";
                 document.getElementById("buyautobutton").style.boxShadow="3px 3px 4px #DAA520";
                 document.getElementById("buyautobutton").style.textShadow="1px 1px 2px #DAA520";
               }
         
               if (banks == 50) {
                 document.getElementById("buybankbutton").style.backgroundColor="#D4AF37";
                 document.getElementById("buybankbutton").style.borderRadius="15px";
                 document.getElementById("buybankbutton").style.boxShadow="3px 3px 4px #DAA520";
                 document.getElementById("buybankbutton").style.textShadow="1px 1px 2px #DAA520";
               }
         
               if (drucks == 25) {
                 document.getElementById("buydruckbutton").style.backgroundColor="#D4AF37";
                 document.getElementById("buydruckbutton").style.borderRadius="15px";
                 document.getElementById("buydruckbutton").style.boxShadow="3px 3px 4px #DAA520";
                 document.getElementById("buydruckbutton").style.textShadow="1px 1px 2px #DAA520";
               }
         
               if (clickpower == 524288) {
                 document.getElementById("buyclickpowerbutton").style.backgroundColor="#D4AF37";
                 document.getElementById("buyclickpowerbutton").style.borderRadius="15px";
                 document.getElementById("buyclickpowerbutton").style.boxShadow="3px 3px 4px #DAA520";
                 document.getElementById("buyclickpowerbutton").style.textShadow="1px 1px 2px #DAA520";
               }
         
               if (eineuro == 1) {
                 document.getElementById("buyeineurobutton").style.backgroundColor="#D4AF37";
                 document.getElementById("buyeineurobutton").style.borderRadius="15px";
                 document.getElementById("buyeineurobutton").style.boxShadow="3px 3px 4px #DAA520";
                 document.getElementById("buyeineurobutton").style.textShadow="1px 1px 2px #DAA520";

               }
         
               if (zweieuro == 1) {
                  document.getElementById("buyzweieurobutton").style.backgroundColor="#D4AF37";
                  document.getElementById("buyzweieurobutton").style.borderRadius="15px";
                  document.getElementById("buyzweieurobutton").style.boxShadow="3px 3px 4px #DAA520";
                  document.getElementById("buyzweieurobutton").style.textShadow="1px 1px 2px #DAA520";
                }
         
                if (centmünze == 1) {
                  document.getElementById("buycentmünzebutton").style.backgroundColor="#D4AF37";
                  document.getElementById("buycentmünzebutton").style.borderRadius="15px";
                  document.getElementById("buycentmünzebutton").style.boxShadow="3px 3px 4px #DAA520";
                  document.getElementById("buycentmünzebutton").style.textShadow="1px 1px 2px #DAA520";
                }
         
                if (bitcoin == 1) {
                  document.getElementById("fragezeichen").style.backgroundColor="#D4AF37";
                  document.getElementById("fragezeichen").style.borderRadius="15px";
                  document.getElementById("fragezeichen").style.boxShadow="3px 3px 4px #DAA520";
                  document.getElementById("fragezeichen").style.textShadow="1px 1px 2px #DAA520";
                  document.getElementById("fragezeichenbitcoin").innerHTML = "Bitcoin";
                  document.getElementById("fragezeichenpreis").innerHTML = "Preis: 250.000.000€";
                  document.getElementById("bitcoin").innerHTML = bitcoin;
                }

                  if (fünfeuro == 1) {
                     document.getElementById("buyfünfeurobutton").style.backgroundColor="#D4AF37";
                     document.getElementById("buyfünfeurobutton").style.borderRadius="15px";
                     document.getElementById("buyfünfeurobutton").style.boxShadow="3px 3px 4px #DAA520";
                     document.getElementById("buyfünfeurobutton").style.textShadow="1px 1px 2px #DAA520";         
                }
         
                if (huneuro == 1) {
                  document.getElementById("buyhuneurobutton").style.backgroundColor="#D4AF37";
                  document.getElementById("buyhuneurobutton").style.borderRadius="15px";
                  document.getElementById("buyhuneurobutton").style.boxShadow="3px 3px 4px #DAA520";
                  document.getElementById("buyhuneurobutton").style.textShadow="1px 1px 2px #DAA520";         
             }
                 
               if (mute == 0) {
                  document.getElementById("soundonoroff").innerHTML = "ON";
                  document.getElementById("soundonoroff").style.color = "limegreen";
               }
                
               if (mute == 1) {
                  document.getElementById("soundonoroff").innerHTML = "OFF";
                  document.getElementById("soundonoroff").style.color = "red";
             }

          

      if (autoloade == 0)
      if (localStorage.getItem("score") > 0 ) {
         
                loaddata ();
                autoloade =  autoloade + 1;
             }

          

      

     },  1); 

     setInterval (function() {
 
      if (glück == 0)   
      if (clickpower == 524288)
      if (scorepersecond == 313000)
      if ( eineuro == 1  )
      if ( zweieuro == 1)
      if( centmünze == 1)
      if (bitcoin == 1)
      if(fünfeuro == 1)
      if( huneuro == 1) {
         
        glück = glück + 1;
        alert("Glückwunsch du hast das Spiel durchgespielt!")
        alert("Danke fürs Spielen!")
        alert("Du kannst nun den Endlos Modus spielen!")

     }
     },
     2000
     );

     var  glück = 0;

     setInterval (function() {
      savedata();
   }, 1000); // 1000ms = 1 second




     autoloade = 0;
  

var checkbox = document.getElementById("myCheck");

var mute = 0;

function mut(){
if (mute == 0) {
   mute = mute + 1;
} else {
   mute = mute - 1;
}
 
}

function playSound(){
   if (mute == 0) {
   var audio = new Audio("clicksound.mp3");
     audio.play();
 } else {
 
 }
 }
   
var glück = 0;

         
function switchtoendlos () {
   if (glück == 1) {
   
   window.location = "endlos.html";
} else {
   alert("Du kannst den Endlos Modus noch nicht spielen!")
}
}



 

 

  