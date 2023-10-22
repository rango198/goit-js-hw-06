const input = document.querySelector("#validation-input");

input.addEventListener("blur", checkInput);

function checkInput(event) {
const inputValue = event.target.value;
const valueLength = event.target.dataset.length;

  if (inputValue.length === Number(valueLength)) {
    this.classList.remove("invalid");
    this.classList.add("valid");
  } else {
    this.classList.remove("valid");
    this.classList.add("invalid");
  }
}


