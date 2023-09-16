var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var a = 5;
var b = 2.8;
var result = add(a, b, false);
function add(num1, num2, showResult) {
    console.log(typeof num1);
    var a = num1 + num2;
    if (showResult) {
        console.log(a);
    }
    return a;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value, false));
});
