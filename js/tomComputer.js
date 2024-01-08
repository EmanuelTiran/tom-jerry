
var speedCat = 400;
for (let index = 1; index <= 64; index++) {
    let myDiv = document.createElement('div');
    myDiv.style.width = "75px";
    myDiv.style.height = "75px";
    myDiv.id = `id${index}`;
    myDiv.onclick = function () {
        this.appendChild(mouse)
        if (cat.parentNode === mouse.parentNode) {
            cat.style.display = "none";
            mouse.style.display = "none";
            winTime = setInterval(() => {
                timeWin--;
                document.getElementById('win').innerHTML = "good";
                if (timeWin == 0) {
                    startTimer();
                    cat.style.display = "block";
                    mouse.style.display = "block";
                    clearInterval(winTime);
                    document.getElementById('win').style.display = "none";
                }
            }, 1000);
            background_music.pause();
            winner.play();
            document.getElementById('win').style.display = "block";
            speedCat -= 50;
            level++;
            clearInterval(timerId);
            clearInterval(id);
            id = setInterval(move_cat, speedCat);
            let timeWin = 5;

        }
    }
    if (flag) {
        myDiv.style.backgroundColor = "#707070";
        flag = !flag;
    } else {
        myDiv.style.backgroundColor = "#E0E0E0";
        flag = !flag;
    }
    if (index % 8 === 0) flag = !flag;
    capBoard.appendChild(myDiv);
}
id = setInterval(move_cat, speedCat);
let arr_of_moves = ["0", "-1", "+1", "+8", "-8"];
function move_cat() {
    let ran = Math.floor(Math.random() * arr_of_moves.length + 1);
    let move = parseInt(arr_of_moves[ran]);
    switch (move) {
        case -1:
            if (cell > 1 && cell % 8 != 1) {
                cell -= 1;
            }
            break;
        case 1:
            if (cell < 64 && cell % 8 != 0) {
                cell += 1;
            }
            break;
        case -8:
            if (cell > 8) {
                cell -= 8;
            }
            break;
        case 8:
            if (cell < 57) {
                cell += 8;
            }
            break;
    }
    document.getElementById(`id${cell}`).appendChild(cat);
}
document.getElementById(`id${cell}`).appendChild(cat);
document.getElementById(`id${2}`).appendChild(mouse);
let f = true;
function mDown(obj) {
    if (f) {
        obj.style.height = "85px";
        f = !f;
    } else {
        obj.style.height = "70px";
        f = !f;
    }
}