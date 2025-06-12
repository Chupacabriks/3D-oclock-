'use strict'
const counter = {
  start() {
    this.updateGreeting();
    this.updateWeek();
    this.updateNowTime();
    this.updateDayToNewYear()
  },

  updateGreeting: () => {
    const now = new Date();
    let greeting = document.querySelector('.greeting');
    const hours = now.getHours();
    if (hours >= 5 && hours < 12) {
      greeting.textContent = 'Доброе утро!';
    } else if (hours >= 12 && hours < 18) {
      greeting.textContent = 'Доброго дня!'
    } else if (hours >= 18 && hours < 22) {
      greeting.textContent = 'Доброго вечера!';
    } else {
      greeting.textContent = 'Доброй ночи!'
    }
    setInterval(counter.updateGreeting, 60000);
  },

  updateWeek: () => {
    const now = new Date();
    const day = document.querySelector('.day-of-week');
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const dayofWeek = days[now.getDay()];
    day.textContent = `Сегодня: ${dayofWeek}`;
    setTimeout(counter.updateWeek, 60000)
  },

  updateNowTime: () => {
    const now = new Date();
    const time = document.querySelector('.time');
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds()
    let formatHours = hours % 12;
    if (formatHours === 0) {
      formatHours = 12;
    };
    const amPm = hours >= 12 ? 'PM' : 'AM';
    const formatTime = num => num.toString().padStart(2, '0');
    minutes = formatTime(minutes);
    seconds = formatTime(seconds);
    hours = formatTime(formatHours);
    const timeString = `Текущее время: ${hours}:${minutes}:${seconds} ${amPm}`
    time.textContent = timeString;
    setTimeout(counter.updateNowTime, 1000)
  },

  updateDayToNewYear: () => {
    const now = new Date();
    const year = document.querySelector('.new-year');
    const nowYear = now.getFullYear();
    const nextYear = nowYear + 1;
    const newYearDate = new Date(nextYear, 0, 1); //создаем дату нг - год, месяц с индексом 0, 1 число 
    const diffTimeMs = newYearDate - now; // разница между настоящим временем и датой нг. мы получаем иллисекунды
    const duffTimeDays = Math.ceil(diffTimeMs / (1000 * 60 * 60 * 24));
    year.textContent = `До нового года осталось: ${duffTimeDays}`;
    setTimeout(counter.updateDayToNewYear, 60000)
  }
};
counter.start();
