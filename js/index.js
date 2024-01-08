setInterval(() => clock(), 1000);
let clock = () => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();
    if (seconds < 10) {
        console.log(hour + ":" + minute + ":0" + seconds);

    } else
        console.log(hour + ":" + minute + ":" + seconds);
}
function loginUser() {
    let userName = document.querySelector("#firstName").value;
    let lastName = document.querySelector("#lastName").value;
    let password = document.querySelector("#password").value;
    let fromLocal = JSON.parse(localStorage.getItem("users") || []);
    let match = false;
    for (let i = 0; i < fromLocal.length; i++) {
        if (
            userName == fromLocal[i].fName &&
            lastName == fromLocal[i].lName &&
            password == fromLocal[i].pass
        ) {
            match = true;
            localStorage.setItem("player", JSON.stringify(fromLocal[i]));
        }
    }
    if (match) {
        location.href = "hey.html";
    } else {
        alert("One of the data is incorrect");
    }
}