let unitsnum = document.getElementById("units");

let totalnum = document.getElementById("total");

let btn = document.getElementById("btn");

let unitcost = document.getElementById("unitcost");

btn.addEventListener("click", Calculate);

function Calculate(){
   let percentage = (totalnum.value-(unitsnum.value * unitcost.value)) * (40/100);
 document.getElementById("percentagebox").innerHTML = percentage;
}