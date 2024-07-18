function login() {
    var predefinedUsername = "admin";
    var predefinedPassword = "password123";
    var enteredUsername = document.getElementById('username').value;
    var enteredPassword = document.getElementById('password').value;

    if (enteredUsername === "username" && enteredPassword === "password") 
        {
        window.location.href = "Home.html";
        } 
    else{
        document.getElementById('error').innerText = "Invalid username or password";
        }
}