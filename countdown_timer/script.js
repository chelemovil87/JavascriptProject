const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const vacations = ("21 Dec 2022");
function countdown() {
  const vacationsDate = new Date(vacations);
  const currenDate = new Date();

  const totalSeconds = (vacationsDate - currenDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minutesEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Initial call
countdown();

setInterval(countdown, 1000);


window.addEventListener("load", function () {
  document.getElementById("vacations").type = "text";

  document.getElementById("vacations").addEventListener("blur", function () {
    document.getElementById("vacations").type = "text";
  });

  document.getElementById("vacations").addEventListener("focus", function () {
    document.getElementById("vacations").type = "date";
  });
});