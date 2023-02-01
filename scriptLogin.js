try {
    alert("Welcome stranger, will u survive this adventure?");
}
catch (err) {
    document.getElementById("headline").innerHTML = err.message;
};

let tracker = false;
/*Transparent machen*/
let transparent = document.getElementById("hell");
transparent.style.visibility = "visible";

transparent.onmouseover = function () {
    if (tracker === false) {
        transparent.style.visibility = "hidden";
    }
};

transparent.onmouseout = function () {
    transparent.style.visibility = "visible";
};

/*wieder ersichtlich machen*/
let sehen = document.getElementById("visible");


sehen.addEventListener("click", function () {
    transparent.style.visibility = "visible";
    tracker = true;
});

// random code
var randomNumber = Math.floor((Math.random() * 100) + (Math.random() * 100) + (Math.random() * 100) + (Math.random() * 100));
var randomNumber2 = Math.floor((Math.random() * 100) + (Math.random() * 100) + (Math.random() * 100) + (Math.random() * 100));
var randomNumberT = randomNumber + randomNumber2;
document.getElementById("output").innerHTML = "Random number: " + randomNumber;
document.getElementById("output2").innerHTML = "Random number: " + randomNumber2;
const door = document.getElementById("tuere");

// Schloss öffnen
document.getElementById("Random").addEventListener("click", function () {
    let userInput = prompt("Du fragst dich, was du hier tun sollst. Finde es heraus:");

    if (userInput == randomNumberT) {
        door.style.display = "block";
        door.requestFullscreen();
       alert("Sie können durch die Türe gehen");
    } else {
        alert("Das Schloss bleibt geschlossen");
        location.reload();
    }
});