document.getElementById("button").onclick = 
function() {myFunction()};

function myFunction() {

document.getElementById("button").innerHTML =
Math.floor(Math.random() * 10) + 1;
}