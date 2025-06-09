const one = () => {
  console.log('это первый модуль');
  const timerHours = document.getElementById('timer-hours');
  const timerMinutes = document.getElementById('timer-minutes');
  const timerSeconds = document.getElementById('timer-seconds');
  console.log(timerHours);

  let deadline = '29 june 2025';
  let dateStop = new Date(deadline).getTime();
  let dateNow = new Date().getTime();
  let timeRemaining = (dateStop - dateNow) / 1000;
  let hours = Math.floor((timeRemaining) / 60 / 60);
  let minutes = Math.floor(((timeRemaining) / 60) % 60);
  let seconds = Math.floor(timeRemaining % 60);
  console.log(dateNow);
  console.log(dateStop)
  console.log(timeRemaining);
  console.log(hours);
  console.log(minutes);
  console.log(seconds);

  timerHours.textContent = hours;
  timerMinutes.textContent = minutes;
  timerSeconds.textContent = seconds;
};
export default one 