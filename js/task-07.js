const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

input.addEventListener("input", handlerClick);

function handlerClick(event) {
  const result = event.currentTarget.value + "px";
  span.style.fontSize = result;
}