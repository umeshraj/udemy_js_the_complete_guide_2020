const form = document.getElementById("user-input");

function signupHandler(event) {
  event.preventDefault();

  const userNameInput = document.getElementById("username");
  const enteredUserName = userNameInput.value;

  const passwordInput = document.getElementById("password");
  const enteredPassword = passwordInput.value;

  if (enteredUserName.trim().length === 0) {
    alert("Invalid input. User input cannot be empty");
    return;
  }

  if (enteredPassword.trim().length === 0) {
    alert("Invalid input. Password input cannot be empty");
    return;
  }

  const user = {
    userName: enteredUserName,
    password: enteredPassword
  };
  console.log(user);
  console.log("Hi. I am " + user.userName);
}

form.addEventListener("submit", signupHandler);
