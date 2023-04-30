// create an array to store the login details
var loginList = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
    { username: "user3", password: "password3" }
];

// function to check if the provided username and password match
function checkLogin(username, password) {
    for (var i = 0; i < loginList.length; i++) {
        if (loginList[i].username === username && loginList[i].password === password) {
            return true;
        }
    }
    return false;
}

// example usage of the checkLogin function
var username = prompt("Enter your username:");
var password = prompt("Enter your password:");

if (checkLogin(username, password)) {
    alert("Login successful!");
} else {
    alert("Incorrect username or password. Please try again.");
}
