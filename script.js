
const newYear = "1 January 2022";

const dayEl = document.querySelector('#days_time');
const hoursEl = document.querySelector('#hours_time');
const minutesEl = document.querySelector('#minutes_time');
const secondsEl = document.querySelector('#seconds_time');

function countdown(){
    const currentDate = new Date();
    const newYearDate = new Date(newYear);

    const diff = newYearDate - currentDate;

    const totalSeconds = diff / 1000;
    const days = Math.floor(totalSeconds /(3600 *24));
    const hours = Math.floor(totalSeconds /3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    dayEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
   

    
}
function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);