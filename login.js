// login.js
function login(username, password) {
  if(username === "admin" && password === "password123") {
    return "Login successful!";
  } else {
    return "Invalid credentials";
  }
}

console.log(login("admin", "password123"));
