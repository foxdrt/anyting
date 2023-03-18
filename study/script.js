// get form elements
const signInForm = document.querySelector(".sign-in-form");
const signUpForm = document.querySelector(".sign-up-form");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const signUpUsernameInput = document.querySelector("#signup-username");
const emailInput = document.querySelector("#email");
const signUpPasswordInput = document.querySelector("#signup-password");

// add event listener for sign in form submit
signInForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // get username and password input values
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // TODO: validate input and authenticate user

  // reset form
  signInForm.reset();
});
// add event listener for sign up form submit
signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    // get sign up form input values
    const username = signUpUsernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = signUpPasswordInput.value.trim();
  
    // TODO: validate input and create new user
  
    // reset form
    signUpForm.reset();
  });
  