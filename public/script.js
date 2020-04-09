// document.getElementById("countdown-value").innerHTML = "3,622,705";
const ONE_SECOND = 1000;

/* Countdown timer */
let endDate = new Date("May 10, 2020 17:00:00").getTime() / 1000;
setInterval(function () {
  let dateNow = new Date().getTime() / 1000;
  let difference = Math.round(endDate - dateNow);

  document.getElementById("countdown-value").innerHTML = difference.toLocaleString();
}, ONE_SECOND);
