function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const buttonCreate = controls.querySelector("[data-create]");
const buttonDestroy = controls.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);


function destroyBoxes() {
  boxesContainer.innerHTML = "";
  input.value = "";
}

  
function createBoxes() {
  const amount = Number(input.value);
  let boxSize = 30;

  const boxesHTML = Array.from({ length: amount }).reduce((html, _,) => {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxSize += 10;
    return html + box.outerHTML;
  }, "");

  boxesContainer.innerHTML = boxesHTML;
}    