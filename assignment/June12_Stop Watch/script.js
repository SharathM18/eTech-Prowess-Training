let seconds = 0,
  minutes = 0,
  hours = 0;
let intervalId = null;

const stopWatch = () => {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  let sec = seconds < 10 ? "0" + seconds : seconds;
  let min = minutes < 10 ? "0" + minutes : minutes;
  let hr = hours < 10 ? "0" + hours : hours;

  document.querySelector(".display").innerHTML = `${hr}:${min}:${sec}`;
};

document.querySelector(".start").addEventListener("click", () => {
  // Only start if not already running
  if (!intervalId) {
    intervalId = setInterval(stopWatch, 10);
  }
});

document.querySelector(".stop").addEventListener("click", () => {
  // Only stop if running
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
});

document.querySelector(".reset").addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.querySelector(".display").innerHTML = "00:00:00";
});
