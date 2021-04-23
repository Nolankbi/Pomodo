class Pomodoro {
  minutes = 25;
  seconds = 0;
  interval = null;
  isRunning = false;
  constructor(minutesTarget, secondsTarget) {
    this.minutesTarget = minutesTarget;
    this.secondsTarget = secondsTarget;

    this.minutesTarget.innerText = this.minutes.toString().padStart(2, "0");
    this.secondsTarget.innerText = this.seconds.toString().padStart(2, "0");
  }

  startTimer() {
    if (this.minutes !== 25) {
      return this.clearValues();
    }
    this.isRunning = true;
    this.interval = setInterval(() => {
      this.minutesTarget.innerText = this.minutes.toString().padStart(2, "0");
      this.secondsTarget.innerText = this.seconds.toString().padStart(2, "0");
      if (!this.minutes && !this.seconds) {
        return this.stopTimer();
      }
      if (!this.seconds) {
        this.minutes--;
        this.seconds = 59;
        return;
      }
      this.seconds--;
    }, 1000);
  }
  clearValues() {
    this.minutes = 25;
    this.seconds = 0;

    this.minutesTarget.innerText = this.minutes.toString().padStart(2, "0");
    this.secondsTarget.innerText = this.seconds.toString().padStart(2, "0");
  }
  stopTimer() {
    this.isRunning = false;
    clearInterval(this.interval);
  }
}
