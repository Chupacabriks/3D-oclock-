const timer = (deadline) => {
  const timer = document.getElementById('timer');
  const timerHours = document.getElementById('timer-hours');
  const timerMinutes = document.getElementById('timer-minutes');
  const timerSeconds = document.getElementById('timer-seconds');


  const timerDays = document.createElement('span');
  timerDays.id = 'timer-days';
  timer.insertBefore(timerDays, timerHours); //внутри таймера вставить timerDays перед timerHours

  const colon = document.createElement('span'); // создаем новый span
  timer.insertBefore(colon, timerHours); // помещаем его в родителя timer перед timerHours
  colon.textContent = ' : ';

  const formatTime = num => num.toString().padStart(2, '0'); //короткая функция. поэтому без {} и return. Она переводит в строку число, и дополняет ее до двух символов нулем в начало



  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let days = Math.floor((timeRemaining) / 60 / 60 / 24)
    let hours = Math.floor(((timeRemaining) / 60 / 60) % 24);
    let minutes = Math.floor(((timeRemaining) / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);
    return {
      timeRemaining, days, hours, minutes, seconds,
    }
  };

  const updateClock = () => {
    let getTime = getTimeRemaining();
    timerDays.textContent = formatTime(getTime.days);
    timerHours.textContent = formatTime(getTime.hours);
    timerMinutes.textContent = formatTime(getTime.minutes);
    timerSeconds.textContent = formatTime(getTime.seconds);

    if (getTime.timeRemaining > 0) {
      setTimeout(updateClock, 1000)
    } else {
      [timerDays, timerHours, timerMinutes, timerMinutes, timerSeconds].forEach(
        num => num.textContent = '00' //снова стрелочная функция, которая выполняет лишь одно действие - поэтому без фигурных скобок. также это анонимная функция, которая никуда не сохраняется. поэтому нет let const
      )
    }
  };
  updateClock();
};
export default timer 