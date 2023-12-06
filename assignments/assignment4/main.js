const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.querySelector('input[name="email"]');
  const password = document.querySelector('input[name="password"]');
  const cf_password = document.querySelector('input[name="cf_password"]');

  if (!email.value) {
    alert("Please enter email");
    return;
  }

  if (password.value !== cf_password.value) {
    alert("Passwords do not match");
    return;
  }

  alert("Congratulations you have successfully registered");

  email.value = "";
  password.value = "";
  cf_password.value = "";
});
