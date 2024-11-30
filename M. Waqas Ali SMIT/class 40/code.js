function change() {
  var a = document.childNodes[1].childNodes[2].childNodes;
  for (var i = 0; i < a.length; i++) {
    if (a[i].textContent.toLowerCase() == "asghar") {
      a[i].textContent = "ali";
    }
  }
  console.log(a);
}
