let inputDay = document.getElementById("input-day");
let inputMonth = document.getElementById("input-month");
let inputYear = document.getElementById("input-year");

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

inputDay.addEventListener("input", limitLength);
inputMonth.addEventListener("input", limitLength);
inputYear.addEventListener("input", limitLengthYear);