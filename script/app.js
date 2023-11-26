let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let milliseconds = document.querySelector(".milliseconds");
// Les boutons
let buttonStart = document.querySelector(".start");
let buttonStop = document.querySelector(".stop");
let buttonReset = document.querySelector(".reset");

hoursTime = 0;
minutesTimes = 0;
secondsTime = 0;
millisecondsTime = 0;
let timeout;
let stopped = true;

// Démarrer le chronomètre
function start() {
  if (stopped) {
    stopped = false;
    startTime();
  }
}
// Arrêter le chronomètre
const stop = () => {
  if (!stopped) {
    stopped = true;
    clearTimeout(timeout);
  }
};
// Réinitialiser chronomètre
const resetTime = () => {
  hours.innerHTML = "00:";
  minutes.innerHTML = "00:";
  seconds.innerHTML = "00:";
  milliseconds.innerHTML = "00";
  stopped = true;
  hoursTime = 0;
  minutesTimes = 0;
  secondsTime = 0;
  millisecondsTime = 0;

  clearTimeout(timeout);
};
const startTime = () => {
  if (stopped) return;
  hoursTime = parseInt(hoursTime);
  minutesTimes = parseInt(minutesTimes);
  secondsTime = parseInt(secondsTime);
  millisecondsTime++;
  if (millisecondsTime === 100) {
    millisecondsTime = 0;
    secondsTime++;
  }
  if (secondsTime === 60) {
    secondsTime = 0;
    minutesTimes++;
  }
  if (minutesTimes === 60) {
    minutesTimes = 0;
    hoursTime++;
  }
  // Afficher un 0 si le numero est plus petit que 10
  if (hoursTime < 10) {
    hoursTime = "0" + hoursTime;
  }
  if (minutesTimes < 10) {
    minutesTimes = "0" + minutesTimes;
  }
  if (secondsTime < 10) {
    secondsTime = "0" + secondsTime;
  }
  if (millisecondsTime < 10) {
    millisecondsTime = "0" + millisecondsTime;
  }
  //Afficher le chronomètre dans le DOM
  hours.innerHTML = hoursTime + ":";
  minutes.innerHTML = minutesTimes + ":";
  seconds.innerHTML = secondsTime + ":";
  milliseconds.innerHTML = millisecondsTime;
  timeout = setTimeout(startTime, 10);
};
// Écouteur l'événement click sur les boutons
buttonStart.addEventListener("click", start);
buttonStop.addEventListener("click", stop);
buttonReset.addEventListener("click", resetTime);
