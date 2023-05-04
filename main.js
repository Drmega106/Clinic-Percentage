let unitsnum = document.getElementById("units");

let totalnum = document.getElementById("total");

let btn = document.getElementById("btn");
let clear = document.getElementById("clear");
let unitcost = document.getElementById("unitcost");

let table = document.getElementById("table");

let Daily = document.getElementById("Day");

function counters() {
  overalltotal();
  overalltrimed();
  totalcrowns();
  myportion();
};
btn.addEventListener("click", function() { 
  if (totalnum.value & Daily.value) {
    Calculate();
  } else {
    alert("pleaae insert valid value!")
  }
  }
  );
let date = new Date();

let today = date.toString().slice(0, 11);

let alltotal;
let alltrimed;
let allcrowns;
table.innerHTML= localStorage.Days ? localStorage.Days : table.innerHTML;

function Calculate(){
   let percentage = totalnum.value * (40/100);
   if (confirm(`your percentage of the day is ${percentage}`)){
   document.getElementById("percentagebox").innerHTML = "your portion <br>" + percentage.toFixed(2);
    addDay();
    overalltotal();
    overalltrimed();
    totalcrowns();
    myportion();
   location.reload();}
   else {
     return false;
   }
};

function addDay() {
     table.innerHTML += 
  `<tr>
      <td>${today}</td>
      <td>${totalnum.value}</td>
      <td>${Daily.value}</td>
  </tr> `
  localStorage.Days = table.innerHTML;
};


function overalltotal() {
  let total=0;
for (var i = 1; i < table.rows.length; i++) {
  total += parseFloat(table.rows[i].cells[1].innerHTML);
}
  document.getElementById("overalltotal").innerHTML = `total: ${total}`;
  alltotal= total;
}

function overalltrimed() {
  let trimed = 0;
  for (var i = 1; i < table.rows.length; i++) {
   trimed += parseFloat(table.rows[i].cells[2].innerHTML);
}
document.getElementById("trimed").innerHTML= `trimed: ${trimed}`;
  alltrimed = trimed;
}



function totalcrowns() {
  let crowns= 0;
  if (localStorage.crowns) {
     if (unitsnum.value) {
       localStorage.crowns = parseFloat(localStorage.crowns) + (unitsnum.value * unitcost.value);
       crowns = localStorage.crowns;
       }else{
         crowns = localStorage.crowns
       }
  }else{
    if (unitsnum.value){
      localStorage.crowns = unitsnum.value * unitcost.value
    }else{
      crowns = 0;
    }
  }
  document.getElementById("crowns").innerHTML= `Crowns: ${crowns}`;
   allcrowns = crowns;
}


function myportion() {
 let portion = ((alltotal - allcrowns) * (40/100) - alltrimed);
 let allportion = (alltotal - allcrowns) * (40/100) ;
 document.getElementById("myportion").innerHTML = "your portion <br>" + portion.toFixed(2);
 document.getElementById("overallportion").innerHTML = `Total portion: ${Math.round(allportion)}`
}


clear.addEventListener("click", function(){
  if (confirm("all Data will be deleted!!")){
    localStorage.clear();
    location.reload();
  }else{
    return false;
  }
})
