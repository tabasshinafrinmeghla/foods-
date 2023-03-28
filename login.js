function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "password") {
    alert("Login successful!");
    // Redirect to a new page or do something else
  } else {
    alert("Incorrect username or password.");
  }
}
