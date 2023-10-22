const categories = document.querySelectorAll("li.item");

console.log("Number of categories: " + categories.length);

categories.forEach(function (category) {
  const title = category.querySelector("h2").textContent;
  const elements = category.querySelectorAll("li").length;

  console.log("Category: " + title);
  console.log("Elements: " + elements);
});
