document.getElementById("user-submit").addEventListener("click", function () {
  // user input function

  const userInput = document.getElementById("user-input");
  const userEmail = userInput.value;

  // user password function
  const userPassword = document.getElementById("user-password");
  const password = userPassword.value;

  // user login validation

  if (userEmail == "abc@default.com" && password == "123456") {
    window.location.href = "transaction.html";
  }
});
