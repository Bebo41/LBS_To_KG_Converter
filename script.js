//pounds to kilograms
function convert() {
    var par = document.getElementById("para");
    var num = document.getElementById("inp").Value;
    var result = num * 2.2046226218;
    par.innerHTML = result;
    console.log("function one called")
    console.log("Result: " + result);
};