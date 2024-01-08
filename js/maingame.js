let player = JSON.parse(localStorage.getItem('player'));
document.querySelector('#h3').textContent = `${player.fName}  ${player.lName}`;
var level = 1;
const background_music = new Audio("audio/background_music.mp3");/*יצירת קבצי אודיו*/
background_music.loop = true;
const lost = new Audio("audio/lost.mp3");
const winner = new Audio("audio/winner.mp3");
function startTimer() {/* הטיימר של השחקן מול המחשב או החבר בהתאם*/
    let timer = 61;
    let h1 = document.getElementById('h1');
    let h2 = document.getElementById('h2');
    h2.innerHTML = `${level}`
    background_music.play();

    timerId = setInterval(() => {
        timer--;
        h1.innerHTML = timer;
        if (timer <= 5) {
            h1.style.color = "red";
        }
        if (timer === 0) {/*שהמשחק ייגמר כשהטיימר ניגמר*/
            lost.play();
            background_music.pause();
            clearInterval(timerId);
            cat.style.display = "none";
            mouse.style.display = "none";
            document.getElementById('lost').style.display = "block";
        }
    }, 1000);
    
}
startTimer();


let cat = document.getElementById('cat');
let mouse = document.getElementById('mouse');
let cell = Math.floor(Math.random() * 64 + 1);
let capBoard = document.createElement('div');
capBoard.id = "capBoard";
document.body.appendChild(capBoard);
let flag = true;

let mutey = document.getElementById('mute');
let soundy = document.getElementById('sound');
soundy.style.display = "none";
const mute = () => { //פונקצייה להתקת הקול
    mutey.style.display = "none";
    soundy.style.display = "block";
    background_music.pause();
    winner.pause();
    lost.pause();
}

const sound = () => { //פונקצייה להפעלת הקוד
    mutey.style.display = "block";
    soundy.style.display = "none";
    background_music.play();
}

const logo = () => { // פונקציה לריענון הדף
    var logo = document.getElementById('logo');
    logo.addEventListener("click", () => {
        location.reload();
    }
    )
}
logo();



