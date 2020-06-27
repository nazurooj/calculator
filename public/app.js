function getNumber(num) {
    var result = document.getElementById("result")
    result.value += num;
}
function clearResult() {
    var result = document.getElementById("result")
    result.value = " "
}

function getResult() {
    var result = document.getElementById("result")
    result.value = eval(result.value)
}
function sqrt() {
    var result = document.getElementById("result")
    result.value = Math.sqrt(result.value)
    
}
function cutOff() {
    var result = document.getElementById("result")
    result.value = result.value.slice(0, -1);
    console.log(result.value);
}
function pow() {
    var result = document.getElementById("result")
    result.value = Math.pow(result.value, 2);
}
function div() {
    var result = document.getElementById("result")
    result.value = 1 / result.value
}
function abs() {
    var result = document.getElementById("result").value.length;
    result.value = (result.value == Math.abs(result.value) ? -(result.value) : Math.abs(result.value));
}
