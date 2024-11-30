var v1 = "";
var v2 = "";
function input1() {
    var a = Number(prompt("Enter 1st Value: "));
    v1 = a;
}
function input2() {
    var b = Number(prompt("Enter 2nd Value: "));
    v2 = b;
}
function sum() {
    alert(`Result ${v1} + ${v2} = ${v1 + v2}`);
}

function sub() {
    var option = Number(prompt(`What do you want : \n ${v1} - ${v2} \n OR \n ${v2} - ${v1}`));
    if (option == 1) { alert(`Result ${v1} - ${v2} = ${v1 - v2}`); }
    else { alert(`Result ${v2} - ${v1} = ${v2 - v1}`); }
}
function mul() {
    alert(`Result ${v1} * ${v2} = ${v1 * v2}`);
}
function div() {
    if (v2 != 0) { alert(`Result ${v1} / ${v2} = ${v1 / v2}`); }
    else { alert(`Result ${v1} / ${v2} = UnDefined (Division by Zero is not possible)`) }
}