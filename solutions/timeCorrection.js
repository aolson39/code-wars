// DESCRIPTION:
// A new task for you!

// You have to create a method, that corrects a given time string.
// There was a problem in addition, so many of the time strings are broken.
// Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.
// Examples
// "09:10:01" -> "09:10:01"  
// "11:70:10" -> "12:10:10"  
// "19:99:99" -> "20:40:39"  
// "24:01:01" -> "00:01:01"  
// If the input-string is null or empty return exactly this value! (empty string for C++) 
// If the time-string-format is invalid, return null. (empty string for C++)

function timeCorrect(timestring) {
    if(timestring === null || timestring === ''){
        return timestring;
    }
    let isValid = /^[0-9][0-9]:[0-9][0-9]:[0-9][0-9]$/.test(timestring);
    if(!isValid){
        return null
    }
    let time = timestring.split(':');
    let hour = Number(time[0]);
    let minute = Number(time[1]);
    let second = Number(time[2]);
    if(second >= 60){
        second = second % 60;
        minute +=1;
    }
    if(minute >= 60){
        minute = minute % 60;
        hour += 1;
    }
    if(hour >= 24){
        hour = hour % 24;
    }
    const zeroPad = (num, places) => String(num).padStart(places, '0')
    time[0] = zeroPad(hour, 2);
    time[1] = zeroPad(minute, 2);
    time[2] = zeroPad(second, 2);
    return time.join(':');
}
console.log(timeCorrect('11:70:10'));