const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener('input', function (evt) {
  if (inputName.value === "") {
    outputName.textContent = "Anonymus";
  } else {
    outputName.textContent = evt.currentTarget.value;
  }
  });