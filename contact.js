const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const successMsg = document.getElementById("success-msg");

form.addEventListener("submit", (e) => {
   e.preventDefault();
   checkInput();
});

function checkInput() {
   const usernameInput = username.value.trim();
   const emailInput = email.value.trim();
   let counter = 0;

   if (usernameInput === "") {
      errorMessageFor(username, "Field can not be empty!");
   } else {
      successMessageFor(username);
      counter++;
   }

   if (emailInput === "") {
      errorMessageFor(email, "Field can not be empty!");
   } else if (!isEmail(emailInput)) {
      errorMessageFor(email, "Invalid email format");
   } else {
      successMessageFor(email);
      counter++;
   }

