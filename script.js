function time() {
    const now = new Date();
    let hours = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    if (hours === 0) {
        hours = 12;
    }

    if (min < 10) {
        min = "0" + min;
    } else{min = min;}

    if (sec < 10) {
        sec = "0" + sec;
    } else{sec = sec;}

    const TimeString = `${hours}:${min}:${sec} ${ampm}`;

    document.getElementById("time").textContent = TimeString;
}

setInterval(time,1000);
time();



function start_timer(){
    let sec = 0;
    let mins = 0;
    let hours = 0;
    const zero = 0;
    let days = 0;
    const start = document.getElementById("start"); 
    const time = document.getElementById("time_record"); 

    

    start.addEventListener('click', function(){
        const timer = setInterval(() => {
        sec++;


        if (sec > 59) {
            mins ++;
            sec = 0;
        } 
        if  (mins < 10) {
            // mins = `0${mins}`
            mins = mins.toString().padStart(2, '0');
        }else if(mins > 59) {
            hours ++;
            mins = 0;
        }
        if  (hours < 10) {
            // hours = `0${hours}`
            hours = hours.toString().padStart(2, '0');
        }else if(hours > 59) {
            days ++;
            hours = 0;
        }
        if  (days < 10) {
            // days = `0${days}`
            days = days.toString().padStart(2, '0');
        }

        const TimeString = `${days}:${hours}:${mins}`;
        
        time.textContent = TimeString;
    }) 
    })

    
    // const Count = `${hours}:${min}:${sec} ${ampm}`;



}
start_timer();