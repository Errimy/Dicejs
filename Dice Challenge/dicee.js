// Variables
var d1= Math.random()*5;
d1= Math.round(d1)+1;
console.log()

var d2= Math.random()*5;
d2= Math.round(d2)+1;
console.log()

// Images

document.querySelector(".img1").setAttribute("src","images/dice"+ d1 +".png");

document.querySelector(".img2").setAttribute("src","images/dice"+ d2 +".png");

// Cases
function diceroll() {
    

    if (d1>d2) {
    document.querySelector(".container h1").innerHTML=" 🏆 Player 1 is the winner";
    // alert("🏆 Player 1 is the winner");
    
    } else if (d2>d1) {
    document.querySelector("h1").innerHTML=" Player 2 is the winner 🏆";
    // alert("Player 2 is the winner 🏆");
    }
    else if (d1=d2) {
    document.querySelector("h1").innerHTML=" Draw 🤝";
    // alert("Draw 🤝");
    }
}
diceroll();