


function update() {
    document.getElementById("score").innerHTML = score;
     document.getElementById("cursorcost").innerHTML = cursorcost;
     document.getElementById("cursors").innerHTML = cursors;
     document.getElementById("multiplikatorcost").innerHTML = multiplikatorcost;
     document.getElementById("clickpower").innerHTML = clickpower;
     document.getElementById("autocost").innerHTML = autocost;
     document.getElementById("autos").innerHTML = autos;
     document.getElementById("bankcost").innerHTML = bankcost;
     document.getElementById("banks").innerHTML = banks;
     document.getElementById("druckcost").innerHTML = druckcost;
     document.getElementById("drucks").innerHTML = drucks;
     savedata ()
}




var score = 0; 


var clickpower = 1;

var cursorcost = 15;
var cursors = 0;

var multiplikatorcost = 100;
var multiplikators = 0;

var autocost = 1000;
var autos = 0; 

var bankcost = 10000;
var banks = 0;

var druckcost = 100000;
var drucks = 0;






function buyCursor () {
   if (cursors < 100)
   if (score >= cursorcost){
     score = score - cursorcost;
     cursors = cursors + 1;
     cursorcost = Math.round(cursorcost * 1.08);

     document.getElementById("score").innerHTML = score;
     document.getElementById("cursorcost").innerHTML = cursorcost;
     document.getElementById("cursors").innerHTML = cursors;
     updatescorepersecond();
     savedata ()
   } 
}


function buyMultiplikator () {
  if (clickpower < 16384)
  if (score >= multiplikatorcost){
     score = score - multiplikatorcost;
     clickpower = clickpower * 2;
     multiplikatorcost = Math.round(multiplikatorcost * 2.00);

     document.getElementById("score").innerHTML = score;
     document.getElementById("multiplikatorcost").innerHTML = multiplikatorcost;
     document.getElementById("clickpower").innerHTML = clickpower;
     savedata ()
   }
}

function buyauto () {
  if (autos < 50)
  if (score >= autocost) {
     score = score - autocost;
     autos = autos + 1;
     autocost = Math.round(autocost * 1.10);

     document.getElementById("score").innerHTML = score;
     document.getElementById("autocost").innerHTML = autocost;
     document.getElementById("autos").innerHTML = autos;
     updatescorepersecond();
     savedata ()
   }
}

function buybank () {
   if (banks < 25)
  if (score >= bankcost) {
     score = score - bankcost;
     banks = banks + 1;
     bankcost = Math.round(bankcost * 1.15);

     document.getElementById("score").innerHTML = score;
     document.getElementById("bankcost").innerHTML = bankcost;
     document.getElementById("banks").innerHTML = banks;
     updatescorepersecond();
     savedata ()
   }
}

function buydruck () {
   if (drucks < 10)
  if (score >= druckcost) {
     score = score - druckcost;
     drucks = drucks + 1;
     druckcost = Math.round(druckcost * 1.20);

     document.getElementById("score").innerHTML = score;
     document.getElementById("druckcost").innerHTML = druckcost;
     document.getElementById("drucks").innerHTML = drucks;
     updatescorepersecond();
     savedata ()
   }
}




   function addToScore (amount) {
       score = score + amount;
       document.getElementById("score").innerHTML = score;
      if (score > 50)
      savedata ()
   }

   function updatescorepersecond() {
      scorepersecond = cursors + autos * 10 + banks * 100 + drucks *1000;
      document.getElementById("scorepersecond").innerHTML = scorepersecond;
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
    localStorage.setItem("scorepersecond", scorepersecond);
          
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
   scorepersecond = localStorage.getItem("scorepersecond");
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
   scorepersecond = parseInt(scorepersecond)
   update ()
   updatescorepersecond();
   }

   setInterval (function() {
       score = score + cursors / 2;
       score = score + autos * 5;
       score = score + banks * 50;
       score = score + drucks * 500;
       document.getElementById("score").innerHTML = score;
   }, 500); // 500ms = 0.5 second

