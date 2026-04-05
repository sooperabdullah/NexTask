const formOpenBtn = document.querySelector("#form-open");
const formContainer = document.querySelector(".form_container");
const formCloseBtn = document.querySelector(".form_close");
const pwShowHide = document.querySelectorAll(".pw_hide");

// Automatically open the form on page load
document.addEventListener("DOMContentLoaded", () => {
  toggleForm(true);
});

// Function to toggle form visibility
function toggleForm(isOpen) {
  document.querySelector(".home").classList.toggle("show", isOpen);
  formContainer.classList.toggle("active", isOpen);
}

// Open and close form manually
formOpenBtn?.addEventListener("click", () => toggleForm(true));
formCloseBtn?.addEventListener("click", () => toggleForm(false));

// Toggle password visibility
pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    const passwordInput = icon.parentElement.querySelector("input");
    const isPassword = passwordInput.type === "password";
    passwordInput.type = isPassword ? "text" : "password";
    icon.classList.toggle("uil-eye-slash", !isPassword);
    icon.classList.toggle("uil-eye", isPassword);
  });
});

// Select DOM elements
const signupBtn = document.querySelector("#signup");
const loginBtn = document.querySelector("#login");
const loginForm = document.querySelector(".login_form");
const signupForm = document.querySelector(".signup_form");

// Show Signup Form
signupBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default link behavior
  loginForm.style.display = "none"; // Hide login form
  signupForm.style.display = "block"; // Show signup form
});

// Show Login Form
loginBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default link behavior
  signupForm.style.display = "none"; // Hide signup form
  loginForm.style.display = "block"; // Show login form
});