for (let index = 1; index <= 64; index++) {
    let myDiv = document.createElement('div');
    myDiv.style.width = "75px";
    myDiv.style.height = "75px";
    myDiv.id = `id${index}`;
    myDiv.onclick = function () {
        this.appendChild(mouse)
        if (mouse.parentNode === cat.parentNode) {
            let timeWin = 5;
            winTime = setInterval(() => {
                timeWin--;
                document.getElementById('win').innerHTML = "good";
                mouse.style.display = "none";
                cat.style.display = "none";
                if (timeWin == 0) {
                    startTimer();
                    mouse.style.display = "block";
                    cat.style.display = "block";
                    clearInterval(winTime);
                    document.getElementById('win').style.display = "none";
                }
            }, 1000);
            background_music.pause();
            winner.play();
            document.getElementById('win').style.display = "block";
            level++;
            clearInterval(timerId);
            clearInterval(id);
            timeWin = 5;
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
document.getElementById('id3').onclick = "fid()";
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
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowLeft':
            if (cell > 1 && cell % 8 != 1) {
                cell -= 1;
            }
            break;
        case 'ArrowRight':
            if (cell < 64 && cell % 8 != 0) {
                cell += 1;
            }
            break;
        case 'ArrowUp':
            if (cell > 8) {
                cell -= 8;
            }
            break;
        case 'ArrowDown':
            if (cell < 57) {
                cell += 8;
            }
            break;
    }
    document.getElementById(`id${cell}`).appendChild(cat);
});
