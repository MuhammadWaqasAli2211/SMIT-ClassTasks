var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

btn1.addEventListener("click", function () {
  alert("Button 1 Executed!");
});
btn2.addEventListener("click", function () {
  alert("Button 2 Executed!");
});

var getInputValue = document.getElementById("getInputValue");
var input = document.getElementById("inputField");

getInputValue.addEventListener("click", forBtnValue);
    function forBtnValue() {
        console.log(input.value);
}

var remove = document.getElementById("remove");
remove.addEventListener("click",remover);
    function remover(){
        input.value = "";
}