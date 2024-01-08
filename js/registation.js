function updateUser() {
    let userName = document.querySelector("#firstName").value;
    let lastName = document.querySelector("#lastName").value;
    let password = document.querySelector("#password").value;
    let userAccount = {
        fName: userName,
        lName: lastName,
        pass: password,
    };
    if (userName == "" || lastName == "" || password == "") {
        alert("Enter all the fields");
        return;
    }
    let usersArr = JSON.parse(localStorage.getItem("users")) || [];
    let match = false;
    for (let i = 0; i < usersArr.length; i++) {
        if (userName == usersArr[i].fName && lastName == usersArr[i].lName) {
            match = true;
        }
    }
    if (match == false) {
        alert("You have successfully registered");
        usersArr.push(userAccount);
        usersArrStr = JSON.stringify(usersArr);
        localStorage.setItem("users", usersArrStr);
        location.href = "index.html";
    } else {
        alert("Existing user Enter a different user name");
    }
}