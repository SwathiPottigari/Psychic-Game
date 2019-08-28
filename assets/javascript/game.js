
var wins=0
var loses=0;
var guesses=9;var userGuess='';var comp='';
window.onload=function(){
    document.getElementById("wins").innerHTML="Wins:"+wins;
    document.getElementById("losses").innerHTML="Losses:"+loses;
    document.getElementById("guesses").innerHTML="Guesses left:"+guesses;
    document.getElementById("userg").innerHTML="Your Guesses so far:"+userGuess;
    comp=String.fromCharCode(97+Math.floor(Math.random() * 26));    
};


document.onkeyup=function(event){     
    console.log(comp);       
 var userChar=event.key;
   
if(guesses!=1)
{ 
 if(comp===userChar)
 {
     wins++;
     updateValues(wins,loses);
 }
 else{
    userGuess=userGuess+userChar;
    document.getElementById("userg").innerHTML="Your guesses:"+userGuess;
    guesses--;
    document.getElementById("guesses").innerHTML="guesses"+guesses;
 }
}
else{
     loses++;
     updateValues(wins,loses);
}
// This function updates the values
function updateValues(wins,loses){
    guesses=9;userGuess='';
    comp=String.fromCharCode(97+Math.floor(Math.random() * 26));
    document.getElementById("wins").innerHTML="wins:"+wins;
    document.getElementById("losses").innerHTML="losses:"+loses;
    document.getElementById("guesses").innerHTML="guesses"+guesses;
    document.getElementById("userg").innerHTML="Your guesses:"+userGuess;

};
}