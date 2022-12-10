// Write a function, which takes a non-negative integer (seconds) as input and returns 
//the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable (seconds) {

    let hours = parseInt(seconds / 3600);
    let minutes = parseInt((seconds / 60) % 60);
    seconds = parseInt(seconds % 60)

    return `${n(hours)}:${n(minutes)}:${n(seconds)}`;
}

//pads numberes < 10 with zero for two digit format
  function n(n){
    return n > 9 ? "" + n: "0" + n;
}

console.log(humanReadable(3284239))