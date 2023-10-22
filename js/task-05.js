const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener('input', function (evt) {
  const result = evt.currentTarget.value.trim();

  if (result.value === "") {
    outputName.textContent = "Anonymus";
  } else {
    outputName.textContent = result;
  }
  });