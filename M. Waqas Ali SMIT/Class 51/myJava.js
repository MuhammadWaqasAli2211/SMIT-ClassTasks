const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const btn = document.getElementById("submit");
const remover = document.getElementById("remover");
const output = document.getElementById("output");
let storage = JSON.parse(localStorage.getItem("data")) || [];
console.log(storage);
function dataStorage(task) {
  let div = document.createElement("div");
  div.classList.add("task");
  let name = document.createElement("h3");
  name.innerHTML = task.text1;
  let Qual = document.createElement("p");
  Qual.innerHTML = task.text2;
  document.getElementsByClassName("style");
  div.append(name, Qual);
  output.append(div);
}

btn.addEventListener("click", function () {
  if (text1.value == "") {
    alert("Both fields should not be empty!");
    return;
  }

  var task = {
    text1: text1.value,
    text2: text2.value,
  };
  storage.push(task);
  localStorage.setItem("data", JSON.stringify(storage));
  dataStorage(task);
  text1.value = "";
  text2.value = "";

  alert("Task added successfully!");
});
remover.addEventListener("click", function () {
  output.innerHTML = "";
  localStorage.clear();
});
window.onload = function () {
  storage.forEach((element) => {
    dataStorage(element);
  });
};
