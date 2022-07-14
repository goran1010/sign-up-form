const firstPassword = document.querySelector(`#password`);
const secondPassword = document.querySelector(`#check-password`);
const passwordInvalid = document.querySelector(`.password-invalid`);

firstPassword.addEventListener(`blur`, (e) => {
  if (e.target.value != secondPassword.value) {
    passwordInvalid.textContent = `Passwords do not match`;
  } else {
    passwordInvalid.textContent = ``;
  }
});
secondPassword.addEventListener(`blur`, (e) => {
  if (e.target.value != firstPassword.value) {
    passwordInvalid.textContent = `Passwords do not match`;
  } else {
    passwordInvalid.textContent = ``;
  }
});
firstPassword.addEventListener(`keyup`, (e) => {
  if (e.target.value != secondPassword.value) {
    passwordInvalid.textContent = `Passwords do not match`;
  } else {
    passwordInvalid.textContent = ``;
  }
});
secondPassword.addEventListener(`keyup`, (e) => {
  if (e.target.value != firstPassword.value) {
    passwordInvalid.textContent = `Passwords do not match`;
  } else {
    passwordInvalid.textContent = ``;
  }
});
