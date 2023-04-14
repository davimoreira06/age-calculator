const inputDay = document.getElementById("input-day");
const spanDay = document.getElementsByClassName("span-days")[0];

const inputMonth = document.getElementById("input-month");
const spanMonth = document.getElementsByClassName("span-months")[0];

const inputYear = document.getElementById("input-year");
const spanYear = document.getElementsByClassName("span-years")[0];

function limitLength() {
    if (this.value.length > 2) {
      this.value = this.value.slice(0, 2);
    }
}

function limitLengthYear() {
    if (this.value.length > 4) {
        this.value = this.value.slice(0, 4);
    }
}

function receiveDay() {
    spanDay.innerHTML = inputDay.value;
}

function receiveMonth() {
    spanMonth.innerHTML = inputMonth.value;
}

function receiveYear() {   
    spanYear.innerHTML = inputYear.value;
}

inputDay.addEventListener("input", limitLength);
inputMonth.addEventListener("input", limitLength);
inputYear.addEventListener("input", limitLengthYear);

inputDay.addEventListener("input", receiveDay);
inputMonth.addEventListener("input", receiveMonth);
inputYear.addEventListener("input", receiveYear);