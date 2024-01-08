let player = JSON.parse(localStorage.getItem('player'));
document.querySelector('#h1').innerHTML = "Hey, " + player.fName + " " + player.lName + "<br>Choose your game";
