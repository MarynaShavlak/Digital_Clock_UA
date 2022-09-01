 function currentTime () {
    let hoursSection = document.getElementById('hours');
    let minutesSection = document.getElementById('minutes');
    let secondsSection  = document.getElementById('seconds');


    let currentDate = new Date();
    let currentHours = currentDate.getHours();
    let currentMinutes = currentDate.getMinutes();
    let currentSeconds = currentDate.getSeconds();
    let currentDayPeriod = document.getElementById('day-period');
    
    
     currentDayPeriod.innerHTML = currentHours < 12 ? 'AM' : 'PM';
     if (currentHours  > 12) {
        currentHours  -= 12;
     }
    
     if (currentMinutes < 10) {
        currentMinutes = '0' + currentMinutes; 
     }
     if (currentSeconds < 10) {
       currentSeconds = '0' + currentSeconds;
     }



     hoursSection.innerHTML = currentHours;
     minutesSection.innerHTML = currentMinutes;
     secondsSection.innerHTML = currentSeconds;
 }


 setInterval(currentTime,10)