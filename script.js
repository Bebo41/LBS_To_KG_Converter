//pounds to kilograms
function convert() {
    var par = document.getElementById("para");
    var num = document.getElementById("inp").value;
    result = num * 2.2046226218;
    par.innerHTML = result;
    console.log("function one called")
    console.log("Result: " + result);
};
//kilograms to pounds
function convert2() {
    var par2 = document.getElementById("para2");
    var num2 = document.getElementById("inp2").value;
    result2 = num2 / 2.2046226218;
    par2.innerHTML = result2;
    console.log("function two called")
    console.log("Result: " + result2);
};