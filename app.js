// Task 1
let currentDate = new Date();
document.getElementById('ans1').innerHTML = currentDate;

// Task 2

let months = ['January', 'February', 'March', 'Aprail', 'May', 'June', 'Jullu', 'August', 'September', 'October', 'November', 'December'];
let correntMonths = new Date().getMonth();
let correntM = months[correntMonths];
alert(`Current Month is\t ${correntM}`)
document.getElementById('ans2').innerHTML = `Current Month is ${correntM}`;

// Task 3

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let cDays = new Date();
let dDays = cDays.getDay();
let currentD = days[dDays];
alert(`Today is \t ${currentD} `);
document.getElementById('ans3').innerHTML = `Current Day is ${currentD}`;

// Task 4

if (currentD == 'Sat' || currentD == 'Sun') {
   document.getElementById('ans4').innerHTML = `It's Fun day`;
}
else {
   document.getElementById('ans4').innerHTML = `It's Normal day`;
}

// Task 5

let dtes = new Date().getDate();
if (dtes <= 15) {
   document.getElementById('ans5').innerHTML = `“First fifteen days of the month”`
}
else {
   document.getElementById('ans5').innerHTML = `“Last fifteen days of the month”`
}

// Task 6

let Dates = new Date();
document.getElementById('ans6').innerHTML = `${Dates}`;
let dateTime = Dates.getTime();
document.getElementById('ans6').innerHTML += ` <br> <br> Elapsed milliseconds since jan 1 1970 : ${dateTime}`;
let sec = Math.floor(dateTime / 1000);
let min = Math.floor(sec / 60);
document.getElementById('ans6').innerHTML += ` <br> <br> Elapsed minutes since jan 1 1970 : ${min}`;

// Task 7

let currentHour = new Date().getHours();
if (currentHour < 12) {
   document.getElementById('ans7').innerHTML = `“Its AM”`
}
else {
   document.getElementById('ans7').innerHTML = `“Its PM”`
}

// Task 8

let dateObj = new Date('31 dec 2020');
document.getElementById('ans8').innerHTML = `Later Date : ${dateObj}`;

// Task 9

let ramazan = new Date('March 1, 2025').getTime();
let currentR = new Date().getTime();
let totalC = ramazan - currentR;
let totalDays = Math.floor(totalC / (1000 * 60 * 60 * 24));
document.getElementById('ans9').innerHTML = `${totalDays} days have passed since 1st Ramadan, 2025`;

//Task 10

let pastDate = new Date(2024,0,1);
let todayDate = new Date();
let cSec = todayDate - pastDate;
let tSec = Math.floor(cSec / 1000);
document.getElementById('ans10').innerHTML = ` On reference ${pastDate} <br> <br> ${tSec} Seconds had passed since begginning of the year`;

// Task 11

let date1 = new Date();
let date2 = date1.getHours();
document.getElementById('ans11').innerHTML = `Current date: ${date1}<br> <br>`;
date1.setHours(date2 - 1);
document.getElementById('ans11').innerHTML += `1 Hour ago, it was ${date1}`;

// Task 12

let yDate = new Date();
let yarD = yDate.getFullYear();
document.getElementById('ans12').innerHTML = `Current date: ${date1}<br> <br>`;
yDate.setFullYear(yarD - 100);
document.getElementById('ans12').innerHTML += `100 year ago : ${yDate}`;

// Task 13

let userInput = prompt(`Enter a birth year`);
let calYear = new Date();
let caLyear = calYear.getFullYear();
let yearTotal = caLyear - userInput;
document.getElementById('ans13').innerHTML = `Your age is ${yearTotal} <br> <br> Your birth year is ${userInput}`;

// Task 14

function bill(){
   let customer = document.getElementById('customer').value;
   let unit = document.getElementById('unit').value;
   const chargesPerUnit = 16;
   const latePaymentSurcharge = 350;

   let netAmount = (unit * chargesPerUnit).toFixed(2);
   let grossAmount = (parseFloat(netAmount) + latePaymentSurcharge ).toFixed(2);

   // current Month
   let currentMonth = new Date().getMonth();
   let months = ['January', 'February', 'March', 'Aprail', 'May', 'June', 'Jullu', 'August', 'September', 'October', 'November', 'December'];
   let curMun = months[currentMonth];

   // result 

   let result = document.getElementById('result-bill').innerHTML= `
   <div><strong>Customer Name:</strong> ${customer}</div>
   <div><strong>Current Month:</strong> ${curMun}</div>
   <div><strong>Number of Units:</strong>${unit}</div>
   <div><strong>Charges per Unit:</strong>${chargesPerUnit.toFixed(2)}</div>
   <div><strong>Net Amount Payable (within Due Date):</strong>${netAmount}</div>
   <div><strong>Late Payment Surcharge:</strong> Rs${latePaymentSurcharge.toFixed(2)}</div>
   <div><strong>Gross Amount Payable (after Due Date):</strong>Rs${grossAmount}</div>   `
}