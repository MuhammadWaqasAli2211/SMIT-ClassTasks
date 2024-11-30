var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var btn3 = document.getElementById("btn3")

btn1.addEventListener("click",function(){
    window.location.assign("http://127.0.0.1:5500/sub-section.html#protfolio")
})

btn2.addEventListener("click",function(){
    window.location.assign("http://127.0.0.1:5500/sub-section.html#project")
})

btn3.addEventListener("click",function(){
    window.location.assign("http://127.0.0.1:5500/sub-section.html#contact")
})


function toProject(){
    window.location.assign("http://127.0.0.1:5500/sub-section.html#project")
}
function toContact(){
    window.location.assign("http://127.0.0.1:5500/sub-section.html#contact")
}
function toPortfolio(){
    window.location.assign("http://127.0.0.1:5500/sub-section.html#protfolio")
}