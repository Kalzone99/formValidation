const userName = document.getElementById("username");
const pass = document.getElementById("password");
const email = document.getElementById("email");
const confirm = document.getElementById("confirmPassword");
const form = document.getElementById("form");
const errorElementUser = document.querySelector("#user .error");
const successElementUser = document.querySelector("#user .success");
const errorElementPass = document.querySelector("#pass .error");
const successElementPass = document.querySelector("#pass .success");
const errorElementMail = document.querySelector("#mail .error");
const successElementMail = document.querySelector("#mail .success");
const errorElementConfirm = document.querySelector("#validPass .error");
const successElementConfirm = document.querySelector("#validPass .success");
//Regex for Email check
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener("submit", (e) => {
  let isValid = true;

  errorElementUser.textContent = "";
  successElementUser.textContent = "";
  errorElementPass.textContent = "";
  successElementPass.textContent = "";
  errorElementMail.textContent = "";
  successElementMail.textContent = "";
  errorElementConfirm.textContent = "";
  successElementConfirm.textContent = "";

  // Validation for username
  if (userName.value.length < 5) {
    errorElementUser.textContent =
      "Username must be at least 5 characters long";
    isValid = false;
  } else if (userName.value.length > 10) {
    errorElementUser.textContent =
      "Username must be at most 10 characters long";
    isValid = false;
  } else {
    successElementUser.textContent = "Username is valid!";
  }

  // Validation for password
  if (pass.value.length < 8) {
    errorElementPass.textContent =
      "Password must be at least 8 characters long";
    isValid = false;
  } else if (pass.value.length > 15) {
    errorElementPass.textContent =
      "Password must be at most 15 characters long";
    isValid = false;
  } else {
    successElementPass.textContent = "Password is valid!";
  }
  //validation for E-mail
  if (!emailPattern.test(email.value)) {
    errorElementMail.textContent = "Email is invalid!";
    isValid = false;
  } else {
    successElementMail.textContent = "Valid Email!";
  }
  //Validation confirmation of password
  if (pass.value !== confirm.value) {
    errorElementConfirm.textContent = "Incorrect password input!";
    isValid = false;
  } else {
    successElementConfirm.textContent = "Password confirmed!";
  }

  // If the form registration is not valid we must prevent submission
  if (!isValid) {
    e.preventDefault();
  }
});
