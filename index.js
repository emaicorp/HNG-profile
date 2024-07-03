function updateTimeAndDay() {
    const utcTimeElement = document.getElementById('utcTime');
    const currentDayElement = document.getElementById('currentDay');
    
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    const currentDay = now.toLocaleString('en-US', { weekday: 'long' });

    utcTimeElement.textContent = utcTime;
    currentDayElement.textContent = currentDay;
}

document.addEventListener('DOMContentLoaded', updateTimeAndDay);
setInterval(updateTimeAndDay, 1000);
