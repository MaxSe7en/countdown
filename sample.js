const days = document.getElementById("days");
const hrs = document.getElementById("hrs");
const mins = document.getElementById("mins");
const secs = document.getElementById("secs");
const week = document.getElementById("week");

let newYear = new Date("9-05-2021");
console.log(newYear);
function calcDate() {
  let getDate01 = new Date();
  let totalSecs = (newYear - getDate01) / 1000;
  let newYrMin = Math.abs(Math.floor((totalSecs / 60) % 60));
  let newYrDay = Math.abs(Math.floor(totalSecs / 3600 / 24));
  let newYrHrs = Math.abs(Math.floor(totalSecs / 3600) % 24);
  let newYrSec = Math.abs(Math.floor(totalSecs % 60));
  mins.innerText = formatTime(newYrMin);
  days.innerText = formatTime(newYrDay);
  hrs.innerText = formatTime(newYrHrs);
  secs.innerText = formatTime(newYrSec);
}

console.log(calcDate);
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

calcDate();
setInterval(calcDate, 1000);
