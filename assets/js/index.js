function calculateAge() {
    let inputDay = parseInt(document.getElementById("input-day").value);
    let spanDay = document.getElementsByClassName("span-days")[0];

    let inputMonth = parseInt(document.getElementById("input-month").value);
    let spanMonth = document.getElementsByClassName("span-months")[0];

    let inputYear = parseInt(document.getElementById("input-year").value);
    let spanYear = document.getElementsByClassName("span-years")[0];

    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;
    let currentDay = currentDate.getDate();

    var ageYears = currentYear - inputYear;
    var ageMonths = currentMonth - inputMonth;
    var ageDays = currentDay - inputDay;

    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths = 12 + ageMonths;
    }
    
    if (!isNaN(ageYears) && !isNaN(ageMonths) && !isNaN(ageDays)) {
        spanDay.innerHTML = ageDays;
        spanMonth.innerHTML = ageMonths;
        spanYear.innerHTML = ageYears;
    }
}


function limitLength() {
    if (this.value.length > 2) {
      this.value = this.value.slice(0, 2);
    }
    calculateAge();
}

function limitLengthYear() {
    if (this.value.length > 4) {
        this.value = this.value.slice(0, 4);
    }
    calculateAge();
}

let inputDay = document.getElementById("input-day");
let inputMonth = document.getElementById("input-month");
let inputYear = document.getElementById("input-year");

inputDay.addEventListener("input", limitLength);
inputMonth.addEventListener("input", limitLength);
inputYear.addEventListener("input", limitLengthYear);

inputDay.addEventListener("input", calculateAge);
inputMonth.addEventListener("input", calculateAge);
inputYear.addEventListener("input", calculateAge);

