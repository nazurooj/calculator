function getNumber(num){
    var result= document.getElementById("result")
    result.value += num;
}
function clearResult(){
    var result= document.getElementById("result")
    result.value = " "
}
function getResult(){
    var result= document.getElementById("result")
    result.value = eval (result.value)}
    function sqrt(){
    result.value = Math.sqrt(result.value) 
}
function cutOff(){
    var result= document.getElementById("result")
    result.value = result.value.slice(0, -1); 
console.log(result.value);
}
function pow(){
    var result= document.getElementById("result")
    result.value= Math.pow(result.value, 2);
}
function percentage(){
var result= document.getElementById("result")
result.value= (result.value/100)*per;
}
function div(){
    var result= document.getElementById("result")
    result.value= 1/result.value }
// function limit()
// {
//     var result = document.getElementById("result").value.length;
//     //Suppose u want 4 number of character
//     if(result < 2){
//         return true;
//     }
//     else {
//         return false;
//     }
// }
