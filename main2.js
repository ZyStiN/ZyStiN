

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
       updatecursors(cursors);
        updatemultiplikatorcost(multiplikatorcost);
        updateschweincost(schweincost);
        updateautocost(autocost);
        updatebankcost(bankcost);
        updatedruckcost(druckcost);
        updateautos(autos);
        updatebanks(banks);
        
        updatedrucks(drucks);

        updateschweins(schweins);
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
       if (score >= cursorcost){
         score = score - cursorcost;
         cursors = cursors + 1;
         if (cursors < 150){
         cursorcost = Math.round(cursorcost * 1.088);
       } else {
          cursorcost = Math.round(cursorcost * 1.0045);
       }
    
         updateScore(score)
         updatecursors(cursors);
         updatecursorcost(cursorcost);
         updatescorepersecond();
         savedata ();
    
    
       } 
    }
    
    
    
    function buyschwein () {
       if (score >= schweincost){
         score = score - schweincost;
         schweins = schweins + 1;
         if (schweins < 100){
         schweincost = Math.round(schweincost * 1.075);
       } else {
         schweincost = Math.round(schweincost * 1.0193);
       }
    
         updateScore(score)
         updateschweincost(schweincost);

         updateschweins(schweins);
         updatescorepersecond();
         savedata ();
       } 
    }
    
    
    
    
    function buyMultiplikator () {
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
         updateautos(autos);
         updatescorepersecond();
         savedata ();
       }
    }
    
    
    
    function buybank () {
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
         updatebanks(banks);
         updatescorepersecond();
         savedata ();
       }
    }
    
    function buydruck () {
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
          localStorage.setItem("score1", score);
          localStorage.setItem("cursors1", cursors);
          localStorage.setItem("cursorcost1", cursorcost);
          localStorage.setItem("clickpower1", clickpower);
          localStorage.setItem("multiplikatorcost1", multiplikatorcost);
          localStorage.setItem("multiplikators1", multiplikators);
          localStorage.setItem("autocost1", autocost);
          localStorage.setItem("autos1", autos);
          localStorage.setItem("bankcost1", bankcost);
          localStorage.setItem("banks1", banks);
          localStorage.setItem("druckcost1", druckcost);
          localStorage.setItem("drucks1", drucks);
          localStorage.setItem("schweincost1", schweincost);
          localStorage.setItem("schweins1", schweins);
          localStorage.setItem("zweieuro1", zweieuro);
          localStorage.setItem("centmünze1", centmünze);
          localStorage.setItem("bitcoin1", bitcoin);
          localStorage.setItem("fünfeuro1", fünfeuro);
          localStorage.setItem("huneuro1", huneuro);
         }
    
         function loaddata () {
          score = localStorage.getItem("score1");
          cursors = localStorage.getItem("cursors1");
          cursorcost = localStorage.getItem("cursorcost1");
          clickpower = localStorage.getItem("clickpower1");
          multiplikatorcost = localStorage.getItem("multiplikatorcost1");
          multiplikators = localStorage.getItem("multiplikators1");
          autocost = localStorage.getItem("autocost1");
          autos = localStorage.getItem("autos1");
          bankcost = localStorage.getItem("bankcost1");
          banks = localStorage.getItem("banks1");
          druckcost = localStorage.getItem("druckcost1");
          drucks = localStorage.getItem("drucks1");
          schweincost = localStorage.getItem("schweincost1");
          schweins = localStorage.getItem("schweins1");
          zweieuro = localStorage.getItem("zweieuro1");
          centmünze = localStorage.getItem("centmünze1");
          bitcoin = localStorage.getItem("bitcoin1");
          fünfeuro = localStorage.getItem("fünfeuro1");
          huneuro = localStorage.getItem("huneuro1");
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
    
         
    
    
         updatescorepersecond();
         
    
         update ();
    
    
    
          }
    
          function resetdata () {
            location.reload(); 
    
             if (confirm('Bist du sicher das du das ganze Spiel zurücksetzen willst?')) {  
                
             autoloade = autoloade + 1;
             localStorage.clear();
             window.location = "index.html"
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
    
       function updatecursors(cursorsLocal)
       {
          var result= "";  
          cursorsLocal = cursorsLocal.toString();
          cursorsLocal = cursorsLocal.split("");
          cursorsLocal.reverse();
          for(var i = 0; i < cursorsLocal.length; i++)
          {
                 if(i % 3 === 0 && i !== 0){
                     result+= ".";
                 }
          
                 result += cursorsLocal[i];
             
          }
          result = result.split("");
          result.reverse();
          result = result.join("");
          document.getElementById("cursors").innerHTML = result;
       }

       function updateschweins(schweinsLocal)
       {
          var result= "";  
          schweinsLocal = schweinsLocal.toString();
          schweinsLocal = schweinsLocal.split("");
          schweinsLocal.reverse();
          for(var i = 0; i < schweinsLocal.length; i++)
          {
                 if(i % 3 === 0 && i !== 0){
                     result+= ".";
                 }
          
                 result += schweinsLocal[i];
             
          }
          result = result.split("");
          result.reverse();
          result = result.join("");
          document.getElementById("schweins").innerHTML = result;
       }

       function updateautos(autosLocal)
       {
          var result= "";  
          autosLocal = autosLocal.toString();
          autosLocal = autosLocal.split("");
          autosLocal.reverse();
          for(var i = 0; i < autosLocal.length; i++)
          {
                 if(i % 3 === 0 && i !== 0){
                     result+= ".";
                 }
          
                 result += autosLocal[i];
             
          }
          result = result.split("");
          result.reverse();
          result = result.join("");
          document.getElementById("autos").innerHTML = result;
       }

       function updatebanks(banksLocal)
       {
          var result= "";  
          banksLocal = banksLocal.toString();
          banksLocal = banksLocal.split("");
          banksLocal.reverse();
          for(var i = 0; i < banksLocal.length; i++)
          {
                 if(i % 3 === 0 && i !== 0){
                     result+= ".";
                 }
          
                 result += banksLocal[i];
             
          }
          result = result.split("");
          result.reverse();
          result = result.join("");
          document.getElementById("banks").innerHTML = result;
       }

       function updatedrucks(drucksLocal)
       {
          var result= "";  
          drucksLocal = drucksLocal.toString();
          drucksLocal = drucksLocal.split("");
          drucksLocal.reverse();
          for(var i = 0; i < drucksLocal.length; i++)
          {
                 if(i % 3 === 0 && i !== 0){
                     result+= ".";
                 }
          
                 result += drucksLocal[i];
             
          }
          result = result.split("");
          result.reverse();
          result = result.join("");
          document.getElementById("drucks").innerHTML = result;
       }
    
    
       setInterval (function() {
    
         
             
    
             
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
          if (localStorage.getItem("score1") > 0 ) {
             
                    loaddata ();
                    autoloade =  autoloade + 1;
                 }
    
              
    if (localStorage.getItem("glück") == 0) {
        window.location = "index.html"
    }
          
    
         },  1); 
    
       
    
    
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
       
function switchtostory () {
 
    savedata();
    window.location = "index.html";
}

