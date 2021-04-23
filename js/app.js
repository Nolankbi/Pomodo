const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const actions = document.getElementById("actions");
const pomodoro = new Pomodoro(minutes, seconds);
actions.addEventListener("click", () => {
  if (pomodoro.isRunning) {
    pomodoro.stopTimer();
    actions.innerText = "start";
  } else {
    pomodoro.startTimer();
    actions.innerText = "stop";
  }
});
