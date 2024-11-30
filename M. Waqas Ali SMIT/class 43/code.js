// var myBtn = document.getElementById("btn");
// myBtn.addEventListener("keypress", function () {
//   alert("KeyBoared Key Pressed");
// });
// var all = [];
// var myBtn = document.getElementById("input");
// myBtn.addEventListener("keypress", function (e) {
//   if (e.key == "Enter") {
//     alert("Form Submitted");
//     all.push(myBtn.value);
//     console.log(all);
//     myBtn.value = "";
//   }
// });

// var text = document.querySelector(".setter");
// console.log(text)
// var btn = document.getElementById("btn");
// btn.addEventListener("click", function () {
//   btn.getElementsByClassName("newBackground");
// });

var a = document.getElementById("btn");
a.addEventListener("click", changeTheme);
var isDark = false;

function changeTheme() {
  var getbg = document.querySelectorAll(".theme");

  isDark = !isDark;

  if (isDark) {
    getbg.forEach((item) => {
      item.style.backgroundColor = "black";
      item.style.color = "white";
    });
  } else {
    getbg.forEach((item) => {
      item.style.backgroundColor = "white";
      item.style.color = "black";
    });
  }
}
