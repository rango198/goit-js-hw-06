const input = document.querySelector("#validation-input");

input.addEventListener("blur", checkInput);

function checkInput(event) {
  const inputValue = event.target.value;
  const valueLength = event.target.getAttribute("data-length");


  if (inputValue.length === Number(valueLength)) {
    updateEl("valid", "invalid");
  } else {
    updateEl("invalid", "valid");
  }
};

function updateEl(a, b) {
  input.classList.add(a)
  input.classList.remove(b);
};
