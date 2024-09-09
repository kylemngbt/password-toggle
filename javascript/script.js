const eyeicon = document.querySelector("#eyeicon");
const password = document.querySelector("#password");

eyeicon.addEventListener("click", togglePassword);

function togglePassword() {
  if (password.type == "password") {
    password.type = "text";
    eyeicon.src = "./images/eye-open.png";
  } else {
    password.type = "password";
    eyeicon.src = "./images/eye-close.png";
  }
}