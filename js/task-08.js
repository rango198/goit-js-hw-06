const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const { email, password } = evt.target.elements;

  const valueEmail = email.value.trim();
  const valuePassword = password.value.trim();

  if (!valueEmail || !valuePassword) {
    return alert("Plese fill in all the fields!");
  }

  const data = {
    email: valueEmail,
    password: valuePassword,
  };
  console.log(data);
  formEl.reset();
}
