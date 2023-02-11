const signUpForm = document.getElementById("signup-form");
const signUpBtn = document.getElementById("sign-btn");
const cancelBtn = document.getElementById("close-btn");
const formContainer = document.getElementById("form-container");
signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
signUpBtn.addEventListener("click", () => {
  formContainer.classList.add("active");
});
cancelBtn.addEventListener("click", () => {
  formContainer.classList.remove("active");
});
