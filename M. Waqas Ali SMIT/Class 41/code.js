function expandPara() {
  var getParentDiv = document.getElementById("contain");
  var newEl = document.createElement("img");
  newEl.classList.add("img");
  newEl.src = "image.jpg";
  getParentDiv.appendChild(newEl);
}
