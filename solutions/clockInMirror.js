// Peter can see a clock in the mirror from the place he sits in the office. When he saw the clock shows 12:22

// He knows that the time is 11:38

// in the same manner:

// 05:25 --> 06:35

// 01:50 --> 10:10

// 11:58 --> 12:02

// 12:01 --> 11:59

// Please complete the function WhatIsTheTime(timeInMirror), where timeInMirror is the mirrored time (what Peter sees) as string.

// Return the real time as a string.

// Consider hours to be between 1 <= hour < 13.

// So there is no 00:20, instead it is 12:20.

// There is no 13:20, instead it is 01:20.

function WhatIsTheTime(timeInMirror){

    //split time into hours and minutes, cast as number
    let time= timeInMirror.split(':').map(Number);
    let hour = time[0]
    let minute = time[1]

    // if time is not exactly on the hour, subtract 11 to find the correct hour, take abs val because some are negative
    // manually adjust for 12 => 11
    // calculate minutes as always 60 - current minutes
    if(minute !== 0){
        if(hour === 12){
            hour = 11
        }else{
            hour = Math.abs(hour - 11);
        }
        minute = 60 - minute;
    }else{
        //if on the hour subtract 12 hrs to find new hour value
        minute = 0
        hour = Math.abs(hour - 12)
    }
    //if subtracted down to 0 reassign to '12'
    if(hour === 0)
        hour = 12
    
    //formatting
    if(minute === 0)
        minute = '00'

    if(minute.toString().length < 2)
        minute = '0' + minute

    if(hour.toString().length < 2)
        hour = '0' + hour

    return `${String(hour)}:${String(minute)}`
}

function timeTest(time, solution){
    console.log(`The time ${time} in the mirror is: ${WhatIsTheTime(time)}`);
}

//testing
timeTest('01:50', '10:10')
timeTest('06:35', '5:25')
timeTest('05:25','6:35')
timeTest('12:00', '12:00')
timeTest('02:00', '10:00')
timeTest('12:02', '11:58')

